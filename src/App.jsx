import React, {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AddUser from './pages/add';
import { useDispatch, useSelector } from 'react-redux'
import { loadEmployers } from './redux/actions'
import EditUser from './pages/edit';





function App() {
  let dispatch = useDispatch()
  const {employers} = useSelector(state=>state.data)


  useEffect(()=>{
      dispatch(loadEmployers())
  },[])


  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/add/:id' element={< AddUser />}></Route>
        <Route exact path='/editUser/:id' element={< EditUser />}></Route>
      </Routes>
    </div>
  )
}

export default App