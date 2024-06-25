import React,{useState} from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../baseUrl";
import "./register.css"
import { Link } from "react-router-dom";
const Register=()=>{
  const [state,setState]=useState({
    email:'',
    password:''
  })

  const validatePassword = (password) => {
    const minLength = 6;
    const lowerCasePattern = /[a-z]/;
    const upperCasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;
    const specialCharPattern = /[!@#$%^&*()]/;

    if (password.length < minLength) {
        return { valid: false, message: "Password should be at least 6 characters long" };
    }

    let typesCount = 0;
    if (lowerCasePattern.test(password)) typesCount++;
    if (upperCasePattern.test(password)) typesCount++;
    if (numberPattern.test(password)) typesCount++;
    if (specialCharPattern.test(password)) typesCount++;

    if (typesCount >= 3) {
        return { valid: true, message: "" };
    } else {
        return { valid: false, message: "Password must contain at least 3 of the following types: lower case letters, upper case letters, numbers, special characters" };
    }
};

  const registerNow = async () => {
    const { email, password } = state;

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
        toast.error(passwordValidation.message);
        return;
    }

    try {
     
let response=await axios.post(`${BASE_URL}/register`, { email, password });
toast.success(response.data.message)   
setState({
  email:'',
  password:''
})
} catch (error) {
        if (error?.response && error?.response?.data) {
            toast.error(error.response.data.error);
        } else {
            toast.error("Server error, please try again");
        }
    }
};


    return(
        <div className="registerDiv">
           <ToastContainer />
<div className="acountCreate registerCreate container marginTop">
      <div className="acountCreateTop registerTop">
        <div className="createLeft">
          <h3>Create an employer account</h3>
          <label>Email Address</label> <br />
          <input value={state.email} onChange={(e)=>{
            setState({
              ...state,
              email:e.target.value
            })
          }} type="text" />
          <br />
          <label>Password</label> <br />
          <input value={state.password} onChange={(e)=>{
            setState({
              ...state,
              password:e.target.value
            })
          }} type="password" />
        </div>
        <div className="createRight">
          <p>
            Password requirements: 
           <li> Password should be at least 6 characters </li>
            Must contain at least 3 of the following 2 types of characters: 
            <li> Lower case letters (a - z) </li>
            <li> Upper case letters (A - Z)</li>
            <li> Numbers (i.e. 0 - 9)</li>
            <li> Special characters, i.e. !@#$%^&*()</li>
          </p>
        </div>
      </div>
      <div className="acountCreateBottom">
        <p>You agree to Aligned Job’s Terms of Use and use of Privacy Policy. </p>
        <p>Please send me relevant news, personalized offers, and tips on how to get the most out of my job postings</p>
       <Link to='/employer-login'>
       Already have an account?
       </Link>
        <button onClick={registerNow} className="submit2">Submit</button>
      </div>
    </div>
        </div>
    )
}

export default Register;