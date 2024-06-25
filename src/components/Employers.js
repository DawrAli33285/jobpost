import React from "react";
import CreateAccount from "./CreateAccount";
import LoginAccount from "./LoginAccount";
import EmpNavbar from "./EmpNavbar";
import PostJob from "./PostJob";
import Requirement from "./Requirement";

const Employers = () => {
  return (
    <>
      <EmpNavbar />
      <CreateAccount />
      <LoginAccount />
      <PostJob/>
      <Requirement/>
    </>
  );
};

export default Employers;
