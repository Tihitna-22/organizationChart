import React,  { useEffect, useState, useMemo}  from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { loadEmployers, getSingleEmployer, updateEmployer} from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";


const schema = yup.object().shape({
  name: yup.string().required("First Name should be required please"),
  description: yup.string().required(),
  // id: yup.string().required()
  
});


function EditEmployer() {

      const {employer} = useSelector((state)=>state.data)
      const navigate = useNavigate()
      let {id} = useParams()
      const { register, handleSubmit, errors , reset} = useForm({
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

            <input
            type="text"
            name="description"
            placeholder="description"
            {...register("description" )} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-6"
            />

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
