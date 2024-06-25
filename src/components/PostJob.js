import React from "react";
const PostJob = ()=>{
    return(
        <div className="postJob container marginTop">
        <div className="postJobLeft">
        <div className="content">Employer</div>
        <div className="content">Create Job</div>
        <div className="content">Analytics</div>
        </div>
        <div className="postJobRight">
        <label>Job Title*</label> <br />
          <input type="text" style={{width:"50%"}}/><br />
          <label>Company Name*</label> <br />
          <input type="text" style={{width:"50%"}} /><br />
          <label>Job Location*</label> <br />
          <input type="text" placeholder="Address, city, state, zip code" style={{width:"40%"}}/> <input type="text" placeholder="City"/><br />
          <input type="text" placeholder="State"/> <input type="text" placeholder="Zip code"/> <br/>
          <br /> <label>Work Setting</label> <br />
       <div className="workSetting"> 
       <input type="checkbox"/><label>On site</label>
       <input type="checkbox"/><label>Remote</label>
       <input type="checkbox"/><label>Hybrid</label>
       <input type="checkbox"/><label>On the road</label>
       </div>
       <br /> <label>Send notifications to:</label> <br />
          <input type="text" placeholder="email"style={{width:"50%"}} /><br />
          <br />  <label >Employement Type</label> <br />
          <div className="empType"> 
       <input type="checkbox"/><label>Full time</label>
       <input type="checkbox"/><label>Seasonal</label>
       <input type="checkbox"/><label>intern</label>
       <input type="checkbox"/><label>Part Time</label>
       <input type="checkbox"/><label>Temporary</label>
       <input type="checkbox"/><label>Volunteer</label>
       <input type="checkbox"/><label>Contract</label>
       </div>
      <br/> <label>Job Sector/Industry</label> <br /><br />
          <div className="jobSector"> 
       <input type="checkbox"/><label>Aerospace & Defense</label>
       <input type="checkbox"/><label>Hotels & Travel</label>
       <input type="checkbox"/><label>Consumer Services</label>
       <input type="checkbox"/><label>Agriculture</label>
       <input type="checkbox"/><label>Human Resource & Staffing</label>
       <input type="checkbox"/><label>Pharmaceutical & Biotechnology</label>
       <input type="checkbox"/><label>Arts</label>
       <input type="checkbox"/><label>Information Technology</label>
       <input type="checkbox"/><label>Real Estate</label>
       <input type="checkbox"/><label>Entertainment & Recreation</label>
       <input type="checkbox"/><label>Insurance</label>
       <input type="checkbox"/><label>Restaurants & Food Service</label>
       <input type="checkbox"/><label>Construction</label>
       <input type="checkbox"/><label>Legal</label>
       <input type="checkbox"/><label>Retail & Wholesale</label>
       <input type="checkbox"/><label>Repair & Maintenance Service</label>
       <input type="checkbox"/><label>Education</label>
       <input type="checkbox"/><label>Management & Consulting</label>
       <input type="checkbox"/><label>Start up</label>
       <input type="checkbox"/><label>Energy</label>
       <input type="checkbox"/><label>Media & Communication</label>
       <input type="checkbox"/><label>Manufacturing</label>
       <input type="checkbox"/><label>Transportation & Logistics</label>
       <input type="checkbox"/><label>Telecommunications</label>
       <input type="checkbox"/><label>Financial Services</label>
       <input type="checkbox"/><label>Government</label>
       <input type="checkbox"/><label>Nonprofit & NGO</label>
       <input type="checkbox"/><label>Healthcare</label>
       <input type="checkbox"/><label>Other</label>
       </div>

<div style={{display:"flex",justifyContent:"flex-end"}}><button className="save">Save</button></div>
        </div>
        </div>
    )
}

export default PostJob;