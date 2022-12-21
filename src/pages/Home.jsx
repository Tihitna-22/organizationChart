import React, {useEffect} from 'react'
import Tree from "../test";
import { useDispatch, useSelector } from 'react-redux'
import { loadEmployers } from '../redux/actions';




function Home() {
  const {employers} = useSelector(state=>state.data)
  const dispach = useDispatch()
  //  console.log(users)
  useEffect(()=>{
  dispach(loadEmployers)


  }, [employers])

return (
<div className='App'>
  <div>Organization Hirarchy</div>
  {
  employers?.map((employer)=>{
  return (
    <Tree title="Locations" treeItem={employer}/>
  )

  })
  } 
</div>
)
}

export default Home