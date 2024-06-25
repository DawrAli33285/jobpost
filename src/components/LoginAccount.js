import React from "react";
const LoginAccount = ()=>{
    return(
        <div className="acountCreate container marginTop">
      <div className="acountCreateTop">
        <div className="createLeft">
          <h3>Log into your employer account to continue</h3>
          <label>Email Address</label> <br />
          <input type="text" />
          <br />
          <label>Password</label> <br />
          <input type="text" />
        </div>
      </div>
      <div className="acountLoginBottom">
       <h3>Forgot password?</h3>
        <button className="submit2">Submit</button>
      </div>

      <div className="acountLogin2Bottom">
       <h3>Forgot password?</h3>
       <p>Forgot your password?</p>
       <p>Enter the email address for your account and we’ll send you instructions to reset your password</p>
        <input type="text" className="forgot"/>
       <button className="submit2">Submit</button>
      </div>



    </div>
    )
}

export default LoginAccount;