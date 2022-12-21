import React ,{useState} from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { Chip} from "@material-ui/core";
import {useNavigate} from 'react-router-dom'
import LastChild from "./pages/LastChild";





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
  


  return (
    <>
    {collapse ? <TreeNode  key={props.item.id} label={<LastChild  item={props.item} collapse={collapse} setCollaps={setCollaps}/> } /> 
    :
  (
    <TreeNode
    key={props.item.id}
    label={
  <LastChild item={props.item}  setCollaps={setCollaps} collapse={collapse}/>
    }
    >
      {!collapse && props.item.children && props.item.children?.map((ch)=>
      <>
      {
        ch.children ? <RenderInnerTree  item={ch} key={ch.id}/> : <TreeNode label={<LastChild  item={ch} collapse={collapse} />
        } />
      }</>    
      )}
      {!(props.item.children.children) && <AddNode parentId={props.item.id}/>}
    </TreeNode >)}
    </>
  );
};

const StyledTreeExample = ({treeItem }) => {
  return(
  <Container key={treeItem}>
    <Tree
      lineWidth={"2px"}
      lineColor={"#EAB308"}
      lineBorderRadius={"10px"}
      lineHeight="30px"
      label={<>
          <div className="flex items-center justify-center">
              <form action="">
              <label className="text-blue border-blue hover:bg-blue flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full border bg-white uppercase tracking-wide shadow-lg ">

              <span className="text-gray-800 font-semibold text-xl font-medium text-indigo-500">{treeItem.label}</span>
              <span className="mt-2 text-gray-600 ">{treeItem.discription}</span>
              </label>
              </form>
          </div>
      </>}
    >
      {treeItem.children ? treeItem.children.map((item)=><RenderInnerTree item={item} key={item.id}/> ): "<></>" }
    </Tree>
  </Container>
);
  }

export default StyledTreeExample;
