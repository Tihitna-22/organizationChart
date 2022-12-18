import React, {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AddUser from './pages/add';
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from './redux/actions'
import EditUser from './pages/edit';



function App() {
  let dispatch = useDispatch()
  const {users} = useSelector(state=>state.data)


  useEffect(()=>{
      dispatch(loadUsers())
  },[])


  return (
    <>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/add' element={< AddUser />}></Route>
        <Route exact path='/editUser/:id' element={< EditUser />}></Route>
      </Routes>
    </>
  )
}

export default App