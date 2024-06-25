import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
     <Navbar/>
    <div className="home container marginTop">
    <div className="home-left">
        <h1>Apply for your dream job today!</h1>
        <p>Start your career with us.</p>
        <button className="submit">Submit Application</button>
    </div> 
    <div className="home-right">
        <div className="rightContainer"></div>
    </div>  
    </div>

    </div>
  );
};

export default Home;
