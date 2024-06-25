import React, { useState } from "react";
import "./forget-password.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../baseUrl";
import axios from "axios";
const ForgetPassword=()=>{
const [state,setState]=useState("")
const sendMail=async()=>{
  try{
let response=await axios.post(`${BASE_URL}/sendForgetEmail`,{email:state})
toast.success("Email sent")
setState("")
  }catch(error){
    if(error?.response && error?.response?.data){
      toast.error(error?.response?.data?.error)
    }
    toast.error("Server error please try again")
  }
}


    return(
        <div className="forgetPassword-div">
          <ToastContainer/>
        <div className="acountLogin2Bottom">
         <h3>Forgot password?</h3>
         <p>Forgot your password?</p>
         <p>Enter the email address for your account and we’ll send you instructions to reset your password</p>
          <input value={state} onChange={(e)=>{
            setState(e.target.value)
          }} type="text" className="forgot"/>
        <div className="forgetPasswordButtonDiv">
        <button onClick={sendMail} className="submit2 forgetPasswordButton">Submit</button>
        </div>
        </div>

        
        {/* <div className="acountLogin2Bottom">
       <p>Please check your email</p>
       <p>If your email address is found in our system, we will send you an email with next steps.</p>
        <button className="submit2">Login</button>
      </div>
       */}
        </div>
    )
}

export default ForgetPassword