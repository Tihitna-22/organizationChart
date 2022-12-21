import React ,{useState} from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { Chip} from "@material-ui/core";
import {deletUsers, loadUsers} from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Menu, Button } from '@mantine/core';
import { Edit,Trash } from 'tabler-icons-react';
// import { Trash } from 'tabler-icons-react';
import { AntennaBars1 } from 'tabler-icons-react';





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

const AddNode = ({parentId}) =>{
  const navigate = useNavigate();
  console.log(parentId)
  return (
    <TreeNode
      label={
        <StyledNode
          label={"Add"}
          clickable
            onClick={()=> navigate(`/add/${parentId}`)}
        ></StyledNode>
      }
    />
  );
} 



const RenderInnerTree = (props) => {
  const [collapse, setCollaps] = useState(true);
  
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
    label={
    <>
      <div class=" rounded-lg shadow-lg bg-white max-w-sm  text-center">
        <div class="py-3 px-6 border-b border-gray-300 flex justify-between ">
          <div>  {props.item.label}</div>
          <div className="self-center">  
           <Menu offset={10} arrowPosition="center" transition="rotate-right" position="right-start">
      <Menu.Target>
     
           <button  class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="#EAB308">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
    </button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item  icon={<Edit
    size={25}
    strokeWidth={1.5}
    color={'#EAB308'}
  />} onClick={()=>navigate(`/editUser/${props.item.id}`)}>
          Edit
        </Menu.Item>
        <Menu.Item  icon={<Trash
    size={25}
    strokeWidth={1.5}
    color={'#EAB308'}
  />} onClick={() =>
    handleDelet(props.item.id)
    }>
          Delete
        </Menu.Item>

  
      </Menu.Dropdown>
       </Menu></div>
      
     
        </div>

        <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2"><title></title></h5>
        <p class="text-gray-700 text-base mb-4">
          discription
        </p>
        { props.item.children &&
       ( <div className="flex justify-center ">
          <button onClick={() => setCollaps((o) => !o)} class="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
          <svg class="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EAB308">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          </button>
        </div>)}
        </div>
      </div>

    </>
    }
  >
   
        {collapse && props.item.children && props.item.children?.map((ch)=>
        <>
        {
          ch.children ? <RenderInnerTree  item={ch}/> : <TreeNode label={
            <div class=" rounded-lg shadow-lg bg-white max-w-sm  text-center">
            <div class="py-3 px-6 border-b border-gray-300 flex justify-between ">
              <div>  {props.item.label}</div>
              <div className="self-center">  
               <Menu offset={10} arrowPosition="center" transition="rotate-right" position="right-start">
          <Menu.Target>
         
               <button  class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="#EAB308">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
        </button>
          </Menu.Target>
    
          <Menu.Dropdown>
            <Menu.Item  icon={<Edit
        size={25}
        strokeWidth={1.5}
        color={'#EAB308'}
      />} onClick={()=>navigate(`/editUser/${props.item.id}`)}>
              Edit
            </Menu.Item>
            <Menu.Item  icon={<Trash
        size={25}
        strokeWidth={1.5}
        color={'#EAB308'}
      />} onClick={() =>
        handleDelet(props.item.id)
        }>
              Delete
            </Menu.Item>
    
      
          </Menu.Dropdown>
           </Menu></div>
          
         
            </div>
    
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2"><title></title></h5>
            <p class="text-gray-700 text-base mb-4">
              discription
            </p>
            { props.item.children &&
           ( <div className="flex justify-center ">
              <button onClick={() => setCollaps((o) => !o)} class="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
              <svg class="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EAB308">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              </button>
            </div>)}
            </div>
          </div>
          }
          
          
          
          />
        }
    
         
        {/* <AddNode parentId={ch.parentId}/> */}
        {/* {console.log(ch.parentId)} */}
      
        </>
       
        )}
        {collapse && props.item.children && <AddNode parentId={props.item.children[0].parentId}/>}
         
  </TreeNode >
  

  
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
      {treeItem.children ? treeItem.children.map((item)=><RenderInnerTree item={item}/> ): "<></>" }
      {/* <AddNode parentId="1"/> */}
      {/* {console.log(treeItem.parentId)} */}
    </Tree>
  </Container>
);
  }

export default StyledTreeExample;
