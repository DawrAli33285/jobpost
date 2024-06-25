import React, { useState, useEffect } from 'react';
import './job.css';
import Navbar from '../../components/Navbar';
import { BASE_URL } from '../../baseUrl';
import axios from 'axios';
import { useParams } from 'react-router';

const Job = () => {
  const [job, setJob] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    getSingleJob();
  }, []);

  const getSingleJob = async () => {
    try {
      let response = await axios.get(`${BASE_URL}/getSingleJob/${id}`);
      console.log(response.data);
      setJob(response.data.job);
    } catch (error) {
      console.error('Error fetching job:', error);
      // Handle error state or retry logic here
    }
  };

  return (
    <div className='singlejob-div'>
      <Navbar />

      {/* Job Details Section */}
      <div className="home4 container marginTop">
        <h4>Profile insights</h4>
        <h4>Your profile might be missing qualifications mentioned in the job description</h4>
        <h4>Skills</h4>
        <ul>
          <li>Time management</li>
          <li>(Required)</li>
          <li>Web accessibility</li>
        </ul>
        <h4>Do you have experience in Time management?</h4>
        <p>YesNoSkip</p>

        {/* Job details */}
        <h4>Job details</h4>
        <p>Here’s how the job details align with your profile.</p>
        <h4>Pay</h4>
        <p>{job?.salary} a year</p>
        <h4>Job type</h4>
        <p>{job?.jobType}</p>
        <h4>Shift and schedule</h4>
        <ul>
          <li>8 hour shift</li>
          <li>Monday to Friday</li>
        </ul>
        <h4>Work setting</h4>
        <p>{job?.workSetting}</p>
        <h4>Encouraged to apply</h4>
        <p>No degree</p>

        {/* Full job description */}
        <h4>Full job description</h4>
        <p>{job?.description ? job.description : 'Description not available'}</p>

        {/* Benefits Section */}
        <h4>Benefits</h4>
        <ul>
         {job?.benefits.map((val,i)=>{
          return <li key={i.toString()}>{val}</li>
         })}
        </ul>

        {/* Schedule and Relocation Section */}
        <h4>Schedule</h4>
        <ul>
          <li>8 hour shift</li>
          <li>Monday to Friday</li>
        </ul>
        <h4>Ability to Relocate</h4>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          <p>{job?.jobLocation[0]?.city}: Relocate before starting work (Required) <br /> Work Location: {job?.
workSetting}</p>
          <div className="apply">Easily Apply</div>
        
        </div>
           {/* Company and Job Details Section */}
      {/* <div className="home5 container marginTop">
        <div className="upperleft home5left">
          <h5>{job?.companyName}</h5>
          <h5>{job?.jobTitle}</h5>
          <p>{job?.jobLocation[0]?.city}, {job?.jobLocation[0]?.state} {job?.jobLocation[0]?.zipCode}</p>
          <p>${job?.payMin} - ${job?.payMax} a year - Full-time</p>
          <ul>
            <li>
              You will serve as a General Engineer in the Technical
              Division, Office of the Chief Engineer, Systems Integration
              and Compatibility, Systems Engineering Branch (SP20125) of
              Strategic Systems Programs (SSP)
            </li>
          </ul>
        </div>
        <div className="home5right">
          <p>
            Save <br />
            Not interested in this job<br />
            Not interested in this Co.<br />
            Applied
          </p>
        </div>
      </div> */}
      </div>

   
    </div>
  );
};

export default Job;
