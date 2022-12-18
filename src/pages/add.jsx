import React,  { useId }  from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const schema = yup.object().shape({
  label: yup.string().required("First Name should be required please"),
  description: yup.string().required(),
  id: yup.string().required()
  
});


function AddUser() {
    let dispatch = useDispatch()
    // const {users} = useSelector(state=>state.data)

    const navigate = useNavigate()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    // e.preventDefault
    console.log(data);
    data.id = {...register("id")}
    dispatch(addUser(data))
    // navigate("/")
  };
  return (
    <div>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"onClick={()=>{
                navigate("/")
             }} >
  Back
</button>
    <div className=" flex items-center  h-screen justify-center">
      <div className="inputs relative">
         <form onSubmit={handleSubmit(submitForm)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input
            type="text"
            name="desclabelription"
            {...register("label")}
            placeholder="label..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-6"
          />
          
          <input
            type="text"
            name="description"
            placeholder="description"
            {...register("description")} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
          /> 
          {/* <input
            type="text"
            name="id"
            value={uuidv4()}
            {...register("id")} 
            className="d-none"
          /> 
          <p> {errors?.lastName?.message} </p>  */}
       
             <input type="submit" id="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" /> 
             
         </form> 
      </div>
    </div>
    </div>
    
  );
}

export default AddUser;
