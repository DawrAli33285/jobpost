import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import MainPage from './components/MainPage';
import Employers from './components/Employers';
import Job from './pages/job/Job';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ForgetPassword from './pages/forget password/ForgetPassword';
import EmployerNavbar from './components/EmployerNavbar';
import EmpNavbar from './components/EmpNavbar';
import CreateJob from './pages/createJob/CreateJob';
import ResetPassword from './pages/reset password/ResetPassword';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/candidates' element={<h1>Candidates</h1>}/>
      <Route path='/employers' element={ <Employers/>}/>
      <Route path='/about' element={<h1>About</h1>}/>
      <Route path='/job/:id' element={<Job/>}/>
      <Route element={<EmpNavbar/>}>
      <Route path='/employer-register' element={<Register/>}/>
      <Route path='/employer-login' element={<Login/>}/>
      <Route path='/forget-password' element={<ForgetPassword/>}/>
      <Route path='/create-job' element={<CreateJob/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      </Route>
   
    </Routes>
  </BrowserRouter>
  );
}

export default App;
