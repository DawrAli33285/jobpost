import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home3 = ({ jobs, setJobs, orignalJobs, selectedItems, setSelectedItems }) => {
  const [search, setSearch] = useState("");

  const searchJobs = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm); 


    let filteredJobs = orignalJobs;

    if (searchTerm.trim() !== '') {
      filteredJobs = orignalJobs.filter(job =>
        job?.jobTitle.toLowerCase().startsWith(searchTerm)
      );
    }

    if (selectedItems.length > 0) {
      filteredJobs = filteredJobs.filter(job =>
        job?.industry.some(industry => selectedItems.includes(industry))
      );
    }

 
    setJobs(filteredJobs);
  };

  
  const handleCheckboxChange = (item) => {
if (selectedItems.includes(item)) {
     
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    let selecteddata=selectedItems.filter(selectedItem => selectedItem !== item)
    setJobs((prev)=>{
      let old=[...prev]
    return orignalJobs.filter(u=>u?.industry.find(k=>k.startsWith(selecteddata?.map((val,i)=>{
      return val
    }))))
    })
    } else {
 
      let selecteddata=([...selectedItems,item])
      setJobs((prev)=>{
        let old=[...prev]
      return orignalJobs.filter(u=>u?.industry.find(k=>k.startsWith(selecteddata?.map((val,i)=>{
        return val
      }))))
      })
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <>
      <div className="home3 container marginTop">
        <div className="search">
          <div className="search-input-container">
            <input
              value={search}
              onChange={searchJobs}
              type="text"
              placeholder="Candidate Job Search..."
            />
            <img src="/images/search.png" alt="Search icon" />
          </div>
        </div>
        <div className="home3Bottom">
          <div className="home3One">
            <div className="content">
              <input
                type="checkbox"
                id="marketing"
                checked={selectedItems.includes("Marketing")}
                onChange={() => handleCheckboxChange("Marketing")}
              />
              <label htmlFor="marketing">Marketing</label>
            </div>
            <div className="content">
              <input
                type="checkbox"
                id="programManager"
                checked={selectedItems.includes("Program Manager")}
                onChange={() => handleCheckboxChange("Program Manager")}
              />
              <label htmlFor="programManager">Program Manager</label>
            </div>
            <div className="content">
              <input
                type="checkbox"
                id="driver"
                checked={selectedItems.includes("Driver")}
                onChange={() => handleCheckboxChange("Driver")}
              />
              <label htmlFor="driver">Driver</label>
            </div>
          </div>

          <div className="home3Two">
            {jobs?.map((job, index) => (
              <div key={index.toString()} className="homeUpper">
                <div className="upperleft">
                  <h5>{job?.companyName}</h5>
                  <h5>{job?.jobTitle}</h5>
                  <ul>
                    <li>{job?.jobLocation[0]?.city}, {job?.jobLocation[0]?.state} {job?.jobLocation[0]?.zipCode}</li>
                    <li>{job?.salary} a year - {job?.employmentType}</li>
                  </ul>
                  <p>
                  {job?.description?.slice(0,100)}
                  </p>
                </div>
                <div className="upperleft">
                  <h5>{job?.companyName}</h5>
                  <h5>{job?.jobTitle}</h5>
                  <ul>
                    <li>{job?.jobLocation[0]?.city}, {job?.jobLocation[0]?.state} {job?.jobLocation[0]?.zipCode}</li>
                    <li>{job?.salary} a year - {job?.employmentType}</li>
                  </ul>
                  <p>
                   {job?.description?.slice(0,100)}
                  </p>
                  <Link to={`/job/${job?._id}`}>
                    <div className="apply">Easily Apply</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3;
