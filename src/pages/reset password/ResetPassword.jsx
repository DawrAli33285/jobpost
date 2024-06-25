import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../baseUrl";
import axios from "axios";
import { useLocation,useNavigate} from "react-router";


const ResetPassword = () => {
  const [state, setState] = useState("");
  const [token, setToken] = useState("");
  const navigate=useNavigate()
  let location = useLocation();

  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let token = params.get('token');
    setToken(token);
  }, [location]);

  const validatePassword = (password) => {
    const minLength = password.length >= 6;
    const lowerCase = /[a-z]/.test(password);
    const upperCase = /[A-Z]/.test(password);
    const numbers = /[0-9]/.test(password);
    const specialChars = /[!@#$%^&*]/.test(password);

    const typesCount = [lowerCase, upperCase, numbers, specialChars].filter(Boolean).length;
    const typesValid = typesCount >= 2;

    if (!minLength) {
      toast.error("Password should be at least 6 characters");
      return false;
    }

    if (!typesValid) {
      toast.error("Password must contain at least 3 of the following 4 types of characters: Lower case letters, Upper case letters, Numbers, Special characters");
      return false;
    }

    return true;
  };

  const sendMail = async () => {
    if (!validatePassword(state)) {
      return;
    }

    try {
      let response = await axios.post(`${BASE_URL}/resetPassword`, { password: state, token });
      toast.success("Password reset successfully");
      
      setState("");
      navigate('/employer-login')
    } catch (error) {
      if (error?.response && error?.response?.data) {
        toast.error(error?.response?.data?.error);
      } else {
        toast.error("Server error, please try again");
      }
    }
  };

  return (
    <div className="forgetPassword-div">
      <ToastContainer />
      <div className="acountLogin2Bottom">
        <h3>Reset Password</h3>
        <p>Enter your new password</p>
        <input 
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="password"
          className="forgot"
        />
        <div className="forgetPasswordButtonDiv">
          <button onClick={sendMail} className="submit2 forgetPasswordButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
