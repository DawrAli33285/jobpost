import React from "react";
import { Outlet } from "react-router";
const EmpNavbar = () => {

   


  return (
    <>
      <header className="header">
        <div className="nav">

        <div className="menuContainer">
            <div className="logo" style={{display:"flex","justifyContent":"center",width:"100%"}}>
                <h1>Employer Account</h1>
            </div>
          </div>

         
        </div>
      </header>
      <div style={{width:'100%',height:'100%',paddingTop:'15rem'}}>
      <Outlet/>
      </div>
    </>
  );
};

export default EmpNavbar;
