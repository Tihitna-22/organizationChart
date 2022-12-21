import React, {useEffect} from 'react'
import StyledTreeExample from "../test";
import { useDispatch, useSelector } from 'react-redux'
import { loadEmployers } from '../redux/actions';




function Home() {
  const {employers} = useSelector(state=>state.data)
  const dispach = useDispatch()
   console.log(employers)
  useEffect(()=>{
  dispach(loadEmployers)


  }, [employers])

return (
<div className='App'>

<h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-indigo-500">Organization Hirarchy</h3>

  {
  employers?.map((employer)=>{
  return (
    <StyledTreeExample  treeItem={employer} key={employer.id}/>
  )

  })
  } 
</div>
)
}

export default Home