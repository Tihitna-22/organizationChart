import React,  { useEffect, useState, useMemo}  from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { addEmployer,loadEmployers, getSingleEmployer, updateEmployer } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { v1 as uuidv1 } from 'uuid';       
                                                                                                         
const schema = yup.object().shape({
  label: yup.string().required("should be required please"),
  discription: yup.string().required(),
 
});


function AddUser() {

      const {employer} = useSelector((state)=>state.data)
      const navigate = useNavigate()

      let {id} = useParams()
      console.log(id)
      const privateId = uuidv1();


      const { register, handleSubmit, errors , reset} = useForm({
      resolver: yupResolver(schema),

      });

      let dispatch = useDispatch()
      const submitForm = (data,  e) => {
      e.preventDefault()
      console.log(id)
      const d = {...data, "parentId": id, "id": privateId}
      dispatch(addEmployer(d))
      dispatch(loadEmployers())
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
        {/* <p>{errors.label}</p> */}
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

export default AddUser;
