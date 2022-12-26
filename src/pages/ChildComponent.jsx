import React from 'react'
import { loadEmployers, deletEmployer} from "../redux/actions"
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import { Menu, Button } from '@mantine/core';
import { Edit,Trash } from 'tabler-icons-react';




function ChildComponent(props) {
  const setCollaps =  props.setCollaps
  let dispatch = useDispatch()

  const navigate = useNavigate();
  // console.log(props.item.id)
 const handleDelet=(id)=>{
    if(window.confirm("want to delete")){
      dispatch(deletEmployer(id))
      dispatch(loadEmployers())
    }
    // console.log(id)
  }
  return ( 
      <div className="flex items-center justify-center">

        <div className="max-w-md py-2 px-2 bg-white shadow-lg rounded-lg ">
          <div className="flex items-center justify-center  border-b ">
            <div >
              <h2 className="text-gray-800 font-semibold text-xl font-medium text-indigo-500">{props.item.name}</h2>
            </div>
            <div className='justify-self-end pl-6'>
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
              </Menu>
            </div>
          </div>
            <div>
               <p class="mt-2 text-gray-600 ">{props.item.description}</p>
            </div>
          { props.item.children && 

            ( <div className="flex justify-center ">
                <button onClick={() => setCollaps((o) => !o)} className="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                <svg class="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EAB308">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </button>
            </div>)}
          </div>
      </div>
  )
}

export default ChildComponent
