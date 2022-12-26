import React,  { useEffect, useState, useMemo}  from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { loadEmployers, getSingleEmployer, updateEmployer} from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
// import { ErrorMessage } from '@hookform/erro';


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required(),
  // id: yup.string().required()
  
});


function EditEmployer() {

      const {employer} = useSelector((state)=>state.data)
      const navigate = useNavigate()
      let {id} = useParams()
      const { register, handleSubmit, formState: { errors } , reset} = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
      name: employer.name,
      description: employer.description

      }
      });


      let dispatch = useDispatch()

      useEffect(()=>{
      dispatch(getSingleEmployer(id))

      },[])
      useEffect(()=>{
      reset(employer)
      },[employer])

      const submitForm = (data) => {

      // console.log(data);

      dispatch(updateEmployer(data, id))
      navigate("/")
      };



  return (
    <>
     
      <div className="Form flex items-center  h-screen justify-center">
        <div className="rounded shadow leading-tight bg-white">
          <div className="inputs">
           
            <form onSubmit={handleSubmit(submitForm)} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
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

export default EditEmployer;
