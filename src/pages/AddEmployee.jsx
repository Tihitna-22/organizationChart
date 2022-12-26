import React,  { useEffect, useState, useMemo}  from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { loadEmployers, addEmployer} from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { v1 as uuidv1 } from 'uuid';       
                                                                                                         
const schema = yup.object().shape({
  name:yup.string().required("First Name should be required please"),
  description: yup.string().required()
 
});


function AddEmployee() {

      const {employer} = useSelector((state)=>state.data)
      const navigate = useNavigate()

      let {id} = useParams()
      // console.log(id)
      const privateId = uuidv1();


      const { register, handleSubmit, formState: { errors } , reset} = useForm({
      resolver: yupResolver(schema)

      });

      let dispatch = useDispatch()
      const submitForm = (data,  e) => {
      e.preventDefault()
      // console.log(id)
      const d = {...data, "parentId": id, "id": privateId}
      dispatch(addEmployer(d))
      
      dispatch(loadEmployers())
      navigate("/")
      };



  return (
    <>
      <div className="Form flex items-center  h-screen justify-center">
        <div className="rounded shadow leading-tight bg-white">
        <div className="inputs">
          <form onSubmit={handleSubmit(submitForm)} className="bg-white px-8 pt-6 pb-8 mb-4">
          <input
          type="text"
          name="name"
          {...register("name")}
          placeholder="name..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-6"
          />
       
       {errors.name && <p className=" font-medium  text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
          <input
          type="text"
          name="description"
          placeholder="description"
          {...register("description" )} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-6"
          />
          {errors.description && <p className=" font-medium  text-red-500 text-xs mt-1 mb-3 ml-1">{errors.description.message}</p>}
          <input type="submit" id="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/> 
          <button class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"onClick={()=>{
        navigate("/")
        }} >
        Back
        </button>
          </form> 
        </div>
        </div>
      </div>

</>
   
   
  );
}

export default AddEmployee;
