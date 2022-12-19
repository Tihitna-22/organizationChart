import React ,{useState} from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { Chip} from "@material-ui/core";
import {deletUsers, loadUsers} from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';



const StyledNode = styled(Chip).attrs({
  elevation: 3
})`
  /* padding: 5px; */
  /* border-radius: 8px; */
  /* display: inline-block; */
  /* border: 1px solid red; */
  height: 100px;
  margin-left: 25%;
  margin-right: 25%;
  padding: 8px;
  /* width: fit-content; */
  /* width: 100px; */
`;

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
`;

const AddNode = (props) =>{
  const navigate = useNavigate();
  return (
    <TreeNode
      label={
        <StyledNode
          label={"Add"}
          clickable
            onClick={()=> navigate("/add")}
        ></StyledNode>
      }
    />
  );
} 



const RenderInnerTree = (props) => {
  let dispatch = useDispatch()

  const navigate = useNavigate();
  console.log(props.item.id)
 const handleDelet=(id)=>{
    if(window.confirm("want to delete")){
      dispatch(deletUsers(id))
      dispatch(loadUsers())
    }
    console.log(id)
  }

  return (
    <>
    <TreeNode
    label={<>
      <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div class="py-3 px-6 border-b border-gray-300">
        {props.item.label}
        </div>

        <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2"><title></title></h5>
        <p class="text-gray-700 text-base mb-4">
          discription
        </p>
        <div className="flex">
        <button class="flex p-1 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white" onClick={()=>navigate(`/editUser/${props.item.id}`)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            </button>
          <div onClick={() =>
            handleDelet(props.item.id)
            }
            className=" h-6 w-6"><DeleteIcon sx={{ color: pink[500] }}/>
            </div>
        </div>
        </div>
      </div>
    </>
    }
  >
        { props.item.children && props.item.children?.map((ch)=>
        // console.log(ch)
        <RenderInnerTree  item={ch}/>
        )}
        {props.item.children && <AddNode id={props.id}/>}
  </TreeNode>
  </>
  );
};

const StyledTreeExample = ({ title, treeItem }) => {
  return(
  <Container>
    <Tree
      lineWidth={"2px"}
      lineColor={"#EAB308"}
      lineBorderRadius={"10px"}
      label={<>
          <div class="flex items-center justify-center">
              <form action="">
              <label class="text-blue border-blue hover:bg-blue flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full border bg-white uppercase tracking-wide shadow-lg ">

              <span class="mt-2 text-base leading-normal">{treeItem.label}</span>
              <input type="file" class="hidden" />
              </label>
              </form>
          </div>
      </>}
    >
      {treeItem.children && treeItem.children.map((item)=><RenderInnerTree item={item}/> ) }
      <AddNode />
    </Tree>
  </Container>
);
  }

export default StyledTreeExample;
