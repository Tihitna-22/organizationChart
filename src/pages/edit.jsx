import React,  { useEffect, useState, useMemo}  from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { addUser,loadUsers, getSingleUser, updateUser } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const schema = yup.object().shape({
  label: yup.string().required("First Name should be required please"),
  discription: yup.string().required(),
  // id: yup.string().required()
  
});


function EditUser() {

  const {user} = useSelector((state)=>state.data)
    console.log(user)
    // const [userEited, setuserEited] = useState("");


    const navigate = useNavigate()

    let {id} = useParams()


    const { register, handleSubmit, errors , reset} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
          label: user.label,
          discription: user.discription

        }
      });

    
    let dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getSingleUser(id))
        
    },[])
    useEffect(()=>{
    reset(user)
    },[user])

  




 
//  const {user} = useSelector((state)=>state.data)
  const submitForm = (data) => {
    // e.preventDefault
    console.log(data);
    // data.id = {...register("id")}
    dispatch(updateUser(data, id))
  
    dispatch(loadUsers())
    navigate("/")
  };



  return (
    <>
                  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"onClick={()=>{
                navigate("/")
             }} >
  Back
</button>
<div className="flex items-center  h-screen justify-center">

<div className="Form">

<div className="inputs">
<button type="submit" onClick={()=>{
       navigate("/")
    }}>back</button>
<form onSubmit={handleSubmit(submitForm)} className="bbg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
 <input
   type="text"
   name="label"
   {...register("label")}
   placeholder="label..."
   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-6"
 />

 <input
   type="text"
   name="discription"
   placeholder="discription"
   {...register("discription" )} 
   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-6"
 />

    <input type="submit" id="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/> 
</form> 
</div>
</div>
</div>
    </>
   
   
  );
}

export default EditUser;