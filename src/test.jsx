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
  const [collapse, setCollaps] = useState(false);
  


  return (
    <>
    {collapse ? <TreeNode label={<LastChild  item={props.item} collapse={collapse} setCollaps={setCollaps}/> } /> 
    :
  (
    <TreeNode
    label={
  <LastChild item={props.item}  setCollaps={setCollaps} collapse={collapse}/>
    }
    >
      {!collapse && props.item.children && props.item.children?.map((ch)=>
      <>
      {
        ch.children ? <RenderInnerTree  item={ch} /> : <TreeNode label={<LastChild  item={ch} collapse={collapse}/>
        } />
      }</>    
      )}
      {!(props.item.children.children) && <AddNode parentId={props.item.id}/>}
    </TreeNode >)}
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
    </Tree>
  </Container>
);
  }

export default StyledTreeExample;
