import React, { useState } from "react";

const Home2 = ({jobs,setJobs,orignalJobs,setOrignalJobs,selectedItems, setSelectedItems}) => {
  // State to manage selected checkboxes
 console.log(setSelectedItems)


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
    <div className="home2 container marginTop">
      <div className="home2Top">
        <div className="heading">Job, Keyword</div>
        <div className="heading">Location, city, state</div>
        <div className="heading">Work setting</div>
        <div className="heading">Salary</div>
      </div>
      <div className="home2Bottom">
        <div className="bottomPart">
          <div className="content">
            <input
              type="checkbox"
              id="sales"
              value="Sales"
              checked={selectedItems.includes("Sales")}
              onChange={() => handleCheckboxChange("Sales")}
            />
            <label htmlFor="sales">Sales</label>
          </div>
          <div className="content">
            <input
              type="checkbox"
              id="it"
              value="IT"
              checked={selectedItems.includes("IT")}
              onChange={() => handleCheckboxChange("IT")}
            />
            <label htmlFor="it">IT</label>
          </div>
          <div className="content">
            <input
              type="checkbox"
              id="customerService"
              value="Customer Service"
              checked={selectedItems.includes("Customer Service")}
              onChange={() => handleCheckboxChange("Customer Service")}
            />
            <label htmlFor="customerService">Customer Service</label>
          </div>
        </div>

        <div className="bottomPart">
          <div className="content">
            <input
              type="checkbox"
              id="marketing"
              value="Marketing"
              checked={selectedItems.includes("Marketing")}
              onChange={() => handleCheckboxChange("Marketing")}
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
          <div className="content">
            <input
              type="checkbox"
              id="programManager"
              value="Program Manager"
              checked={selectedItems.includes("Program Manager")}
              onChange={() => handleCheckboxChange("Program Manager")}
            />
            <label htmlFor="programManager">Program Manager</label>
          </div>
          <div className="content">
            <input
              type="checkbox"
              id="driver"
              value="Driver"
              checked={selectedItems.includes("Driver")}
              onChange={() => handleCheckboxChange("Driver")}
            />
            <label htmlFor="driver">Driver</label>
          </div>
        </div>

        <div className="bottomPart">
          <div className="content">
            <input
              type="checkbox"
              id="accountant"
              value="Accountant"
              checked={selectedItems.includes("Accountant")}
              onChange={() => handleCheckboxChange("Accountant")}
            />
            <label htmlFor="accountant">Accountant</label>
          </div>
          <div className="content">
            <input
              type="checkbox"
              id="communication"
              value="Communication"
              checked={selectedItems.includes("Communication")}
              onChange={() => handleCheckboxChange("Communication")}
            />
            <label htmlFor="communication">Communication</label>
          </div>
          <div className="content">
            <input
              type="checkbox"
              id="nurse"
              value="Nurse"
              checked={selectedItems.includes("Nurse")}
              onChange={() => handleCheckboxChange("Nurse")}
            />
            <label htmlFor="nurse">Nurse</label>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home2;
