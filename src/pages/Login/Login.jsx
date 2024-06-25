import React,{useState} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import "./login.css"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";
const Login=()=>{
  const [state,setState]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
const loginNow=async()=>{
try{
  let response=await axios.post(`${BASE_URL}/login`,state)
  toast.success("Successfully logged in")
  console.log(response.data)
  localStorage.setItem("user",JSON.stringify(response.data.data))
  setState({
    email:'',
    password:''
  })
  navigate('/create-job')
}catch(error){
  if(error?.response && error?.response?.data){
    toast(error?.response?.data)
  }
}
}


    return(
        <div className="acountCreate container marginTop">
             <ToastContainer />
        <div className="acountCreateTop">
          <div className="createLeft">
            <h3>Log into your employer account to continue</h3>
            <label>Email Address</label> <br />
            <input value={state.email} onChange={(e)=>{
              setState({
                ...state,
                email:e.target.value
              })
            }} type="text" />
            <br />
            <label>Password</label> <br />
            <input type="password" value={state.password} onChange={(e)=>{
              setState({
                ...state,
                password:e.target.value
              })
            }} />
           <div className="acountLoginBottom">
         <div className="forgetPassword-login">
        <Link to='/forget-password'>
        <h3>Forgot password?</h3>
        </Link>
         <Link to='/employer-register'>
         Dont have an account?
         </Link>
         </div>
          <button onClick={loginNow} className="submit2">Submit</button>
        </div>
          </div>
        </div>
       
  

  

        
  
      </div>
    )
}

export default Login