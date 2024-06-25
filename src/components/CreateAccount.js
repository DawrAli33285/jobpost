import React from "react";
const CreateAccount = () => {
  return (
    <div className="acountCreate container marginTop">
      <div className="acountCreateTop">
        <div className="createLeft">
          <h3>Create an employer account</h3>
          <label>Email Address</label> <br />
          <input type="text" />
          <br />
          <label>Password</label> <br />
          <input type="text" />
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
        <button className="submit2">Submit</button>
      </div>
    </div>
  );
};

export default CreateAccount;
