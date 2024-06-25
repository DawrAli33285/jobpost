import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL } from "../../baseUrl";

const CreateJob = () => {
    const [state, setState] = useState({
        jobTitle: '',
        companyName: '',
        jobLocation: { address: '', city: '', state: '', zipCode: '' },
        workSetting: '',
        notificationsTo: '',
        employmentType: '',
        industry: [],
        benefits: [],
        description: '',
        travelRequirements: '',
        salary: ''
    });
    const [newBenefit, setNewBenefit] = useState('');

    const handleSalaryChange = (e) => {
        setState(prevState => ({
            ...prevState,
            salary: e.target.value
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (name === 'industry') {
                const newValue = checked
                    ? [...state.industry, value]
                    : state.industry.filter(item => item !== value);

                setState(prevState => ({
                    ...prevState,
                    industry: newValue
                }));
            } else {
                setState(prevState => ({
                    ...prevState,
                    [name]: checked ? value : ''
                }));
            }
        } else {
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            jobLocation: {
                ...prevState.jobLocation,
                [name]: value
            }
        }));
    };

    const addBenefit = () => {
        if (newBenefit.trim() !== '') {
            setState(prevState => ({
                ...prevState,
                benefits: [...prevState.benefits, newBenefit.trim()]
            }));
            setNewBenefit('');
        }
    };

    const removeBenefit = (benefit) => {
        setState(prevState => ({
            ...prevState,
            benefits: prevState.benefits.filter(b => b !== benefit)
        }));
    };

    const postJob = async () => {
        const salaryRegex = /^\$\d+-\$\d+ a year$/;
        // if (!salaryRegex.test(state.salary)) {
        //     toast.error("Salary must be in the format $number-$number a year");
        //     return;
        // }

        try {
            let response = await axios.post(`${BASE_URL}/createJob`, state);
            console.log(response.data);
            toast.success("Job posted successfully");
            setState({
                jobTitle: '',
                companyName: '',
                jobLocation: { address: '', city: '', state: '', zipCode: '' },
                workSetting: '',
                notificationsTo: '',
                employmentType: '',
                industry: [],
                benefits: [],
                description: '',
                travelRequirements: '',
                salary: ''
            });

        } catch (error) {
            if (error?.response && error?.response?.data) {
                toast.error(error?.response?.data?.error);
            }
            toast.error("Server error please try again");
        }
    };

    return (
        <div className="postJob container marginTop">
            <ToastContainer />
            <div className="postJobLeft">
                <div className="content">Employer</div>
                <div className="content">Create Job</div>
                <div className="content">Analytics</div>
            </div>
            <div className="postJobRight">
                <label>Job Title*</label> <br />
                <input type="text" name="jobTitle" value={state.jobTitle} onChange={handleChange} style={{ width: "50%" }} /><br />
                <label>Company Name*</label> <br />
                <input type="text" name="companyName" value={state.companyName} onChange={handleChange} style={{ width: "50%" }} /><br />
                <label>Job Location*</label> <br />
                <input type="text" name="address" placeholder="Address" value={state.jobLocation.address} onChange={handleLocationChange} style={{ width: "40%" }} />
                <input type="text" name="city" placeholder="City" value={state.jobLocation.city} onChange={handleLocationChange} /><br />
                <input type="text" name="state" placeholder="State" value={state.jobLocation.state} onChange={handleLocationChange} />
                <input type="text" name="zipCode" placeholder="Zip code" value={state.jobLocation.zipCode} onChange={handleLocationChange} /><br />
                <br /> <label>Work Setting</label> <br />
                <div className="workSetting">
                    <input type="checkbox" name="workSetting" value="On site" checked={state.workSetting === "On site"} onChange={handleChange} /><label>On site</label>
                    <input type="checkbox" name="workSetting" value="Remote" checked={state.workSetting === "Remote"} onChange={handleChange} /><label>Remote</label>
                    <input type="checkbox" name="workSetting" value="Hybrid" checked={state.workSetting === "Hybrid"} onChange={handleChange} /><label>Hybrid</label>
                    <input type="checkbox" name="workSetting" value="On the road" checked={state.workSetting === "On the road"} onChange={handleChange} /><label>On the road</label>
                </div>
                <br /> <label>Send notifications to:</label> <br />
                <input type="text" name="notificationsTo" placeholder="Email" value={state.notificationsTo} onChange={handleChange} style={{ width: "50%" }} /><br />
                <br /> <label>Employment Type</label> <br />
                <div className="empType">
                    <input type="checkbox" name="employmentType" value="Full time" checked={state.employmentType === "Full time"} onChange={handleChange} /><label>Full time</label>
                    <input type="checkbox" name="employmentType" value="Seasonal" checked={state.employmentType === "Seasonal"} onChange={handleChange} /><label>Seasonal</label>
                    <input type="checkbox" name="employmentType" value="Intern" checked={state.employmentType === "Intern"} onChange={handleChange} /><label>Intern</label>
                    <input type="checkbox" name="employmentType" value="Part Time" checked={state.employmentType === "Part Time"} onChange={handleChange} /><label>Part Time</label>
                    <input type="checkbox" name="employmentType" value="Temporary" checked={state.employmentType === "Temporary"} onChange={handleChange} /><label>Temporary</label>
                    <input type="checkbox" name="employmentType" value="Volunteer" checked={state.employmentType === "Volunteer"} onChange={handleChange} /><label>Volunteer</label>
                    <input type="checkbox" name="employmentType" value="Contract" checked={state.employmentType === "Contract"} onChange={handleChange} /><label>Contract</label>
                </div>
                <br /> <label>Job Sector/Industry</label> <br /><br />
                <div className="jobSector">
                    <input type="checkbox" name="industry" value="Aerospace & Defense" onChange={handleChange} /><label>Aerospace & Defense</label>
                    <input type="checkbox" name="industry" value="Hotels & Travel" onChange={handleChange} /><label>Hotels & Travel</label>
                    <input type="checkbox" name="industry" value="Consumer Services" onChange={handleChange} /><label>Consumer Services</label>
                    <input type="checkbox" name="industry" value="Agriculture" onChange={handleChange} /><label>Agriculture</label>
                    <input type="checkbox" name="industry" value="Human Resource & Staffing" onChange={handleChange} /><label>Human Resource & Staffing</label>
                    <input type="checkbox" name="industry" value="Pharmaceutical & Biotechnology" onChange={handleChange} /><label>Pharmaceutical & Biotechnology</label>
                    <input type="checkbox" name="industry" value="Arts" onChange={handleChange} /><label>Arts</label>
                    <input type="checkbox" name="industry" value="Information Technology" onChange={handleChange} /><label>Information Technology</label>
                    <input type="checkbox" name="industry" value="Real Estate" onChange={handleChange} /><label>Real Estate</label>
                    <input type="checkbox" name="industry" value="Entertainment & Recreation" onChange={handleChange} /><label>Entertainment & Recreation</label>
                    <input type="checkbox" name="industry" value="Insurance" onChange={handleChange} /><label>Insurance</label>
                    <input type="checkbox" name="industry" value="Restaurants & Food Service" onChange={handleChange} /><label>Restaurants & Food Service</label>
                    <input type="checkbox" name="industry" value="Construction" onChange={handleChange} /><label>Construction</label>
                    <input type="checkbox" name="industry" value="Legal" onChange={handleChange} /><label>Legal</label>
                    <input type="checkbox" name="industry" value="Retail & Wholesale" onChange={handleChange} /><label>Retail & Wholesale</label>
                    <input type="checkbox" name="industry" value="Repair & Maintenance Service" onChange={handleChange} /><label>Repair & Maintenance Service</label>
                    <input type="checkbox" name="industry" value="Education" onChange={handleChange} /><label>Education</label>
                    <input type="checkbox" name="industry" value="Management & Consulting" onChange={handleChange} /><label>Management & Consulting</label>
                    <input type="checkbox" name="industry" value="Start up" onChange={handleChange} /><label>Start up</label>
                    <input type="checkbox" name="industry" value="Energy" onChange={handleChange} /><label>Energy</label>
                    <input type="checkbox" name="industry" value="Media & Communication" onChange={handleChange} /><label>Media & Communication</label>
                    <input type="checkbox" name="industry" value="Manufacturing" onChange={handleChange} /><label>Manufacturing</label>
                    <input type="checkbox" name="industry" value="Transportation & Logistics" onChange={handleChange} /><label>Transportation & Logistics</label>
                    <input type="checkbox" name="industry" value="Telecommunications" onChange={handleChange} /><label>Telecommunications</label>
                    <input type="checkbox" name="industry" value="Financial Services" onChange={handleChange} /><label>Financial Services</label>
                    <input type="checkbox" name="industry" value="Government" onChange={handleChange} /><label>Government</label>
                    <input type="checkbox" name="industry" value="Nonprofit & NGO" onChange={handleChange} /><label>Nonprofit & NGO</label>
                    <input type="checkbox" name="industry" value="Healthcare" onChange={handleChange} /><label>Healthcare</label>
                    <input type="checkbox" name="industry" value="Other" onChange={handleChange} /><label>Other</label>
                </div>
                <textarea
                    placeholder="Enter description"
                    value={state.description}
                    onChange={(e) => {
                        setState({
                            ...state,
                            description: e.target.value
                        });
                    }}
                    rows="10"
                    cols="80"
                />

                <label>Benefits</label> <br />
                <input
                    type="text"
                    placeholder="Add benefit"
                    value={newBenefit}
                    onChange={(e) => setNewBenefit(e.target.value)}
                    style={{ width: "50%" }}
                />
                <button onClick={addBenefit}>Add Benefit</button>
                <ul>
                    {state.benefits.map((benefit, index) => (
                        <li key={index}>
                            {benefit} <button onClick={() => removeBenefit(benefit)}>Remove</button>
                        </li>
                    ))}
                </ul>

                <label>Salary*</label> <br />
                <input
                    type="text"
                    name="salary"
                    placeholder="$ - $ a year"
                    value={state.salary}
                    onChange={handleSalaryChange}
                    style={{ width: "50%" }}
                />
                
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button onClick={postJob} className="save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default CreateJob;
