import React,{useState,useEffect} from "react";
import Home from './Home';
import Home2 from "./Home2";
import Home3 from "./Home3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { BASE_URL } from "../baseUrl";
const MainPage = ()=>{
    const [jobs,setJobs]=useState([])
    const [orignalJobs,setOrignalJobs]=useState([])
    const [selectedItems, setSelectedItems] = useState([]);
    useEffect(()=>{
getJobs();
    },[])
const getJobs=async()=>{
    try{
let response=await axios.get(`${BASE_URL}/getJobs`)
let {jobs}=response.data
setOrignalJobs(jobs)
setJobs(jobs)
    }catch(error){
        if(error?.response && error?.response?.data){
            toast.error(error?.response?.data?.error)
        }
        toast.error("Server error please try again")
    }
}

    return(
        <>
        <ToastContainer/>
        <Home orignalJobs={orignalJobs} selectedItems={selectedItems} setOrignalJobs={setOrignalJobs} setSelectedItems={setSelectedItems} jobs={jobs} setJobs={setJobs}/>
        <Home2 selectedItems={selectedItems} setSelectedItems={setSelectedItems} orignalJobs={orignalJobs} setOrignalJobs={setOrignalJobs} jobs={jobs} setJobs={setJobs}/>
        <Home3  selectedItems={selectedItems} setSelectedItems={setSelectedItems} orignalJobs={orignalJobs} setOrignalJobs={setOrignalJobs} jobs={jobs} setJobs={setJobs}/>
        </>
    )
}

export default MainPage