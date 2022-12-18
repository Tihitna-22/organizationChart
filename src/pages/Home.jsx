import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import Tree from "../test";
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../redux/actions';



function Home() {
  const {users} = useSelector(state=>state.data)
  const dispach = useDispatch()
//  console.log(users)
// useEffect(()=>{
//   dispach(loadUsers)
  
  
// }, [])

  return (
    <>
    {/* { console.log(users)} */}
    <div>Home</div>
    {
        users?.map((user)=>{
            return (
              <Tree title="Locations" treeItem={user}/>
            )
           
            })
    } 
    </>
    

  )
}

export default Home