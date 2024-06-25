import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    function closeMenu(){
        setMenuActive(false)
    }


  return (
    <>
      <header className="header">
        <div className="nav">
    
        <div className="menuContainer mobile">
            <div className="logo">
                <h1><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.1478 16.1249C22.2469 16.2968 22.2738 16.501 22.2226 16.6927C22.1715 16.8844 22.0465 17.048 21.875 17.1477L12.875 22.3977C12.7603 22.4646 12.6299 22.4999 12.4972 22.4999C12.3644 22.4999 12.2341 22.4646 12.1194 22.3977L3.11938 17.1477C2.95034 17.0462 2.82811 16.8821 2.77916 16.6911C2.7302 16.5 2.75846 16.2974 2.85781 16.127C2.95717 15.9567 3.11962 15.8323 3.31 15.7809C3.50037 15.7294 3.70336 15.755 3.875 15.8521L12.5 20.8818L21.125 15.8521C21.2969 15.7531 21.5011 15.7261 21.6927 15.7773C21.8844 15.8284 22.0481 15.9534 22.1478 16.1249ZM21.125 11.3521L12.5 16.3818L3.875 11.3521C3.70423 11.2671 3.50748 11.2503 3.32479 11.3053C3.1421 11.3602 2.9872 11.4827 2.89163 11.6478C2.79606 11.8129 2.76699 12.0082 2.81035 12.1939C2.8537 12.3797 2.96622 12.542 3.125 12.6477L12.125 17.8977C12.2397 17.9646 12.3701 17.9999 12.5028 17.9999C12.6356 17.9999 12.7659 17.9646 12.8806 17.8977L21.8806 12.6477C21.9671 12.5988 22.0429 12.5332 22.1038 12.4548C22.1647 12.3763 22.2094 12.2865 22.2353 12.1907C22.2612 12.0948 22.2679 11.9947 22.2548 11.8963C22.2417 11.7978 22.2092 11.7029 22.1592 11.6171C22.1091 11.5313 22.0426 11.4563 21.9633 11.3965C21.884 11.3366 21.7937 11.2931 21.6975 11.2684C21.6013 11.2438 21.5011 11.2385 21.4028 11.2529C21.3046 11.2672 21.2101 11.301 21.125 11.3521ZM2.75 7.49993C2.7503 7.36856 2.7851 7.23958 2.85091 7.12589C2.91672 7.0122 3.01124 6.91779 3.125 6.85211L12.125 1.60211C12.2397 1.53524 12.3701 1.5 12.5028 1.5C12.6356 1.5 12.7659 1.53524 12.8806 1.60211L21.8806 6.85211C21.9938 6.91816 22.0878 7.01274 22.1531 7.1264C22.2183 7.24006 22.2527 7.36885 22.2527 7.49993C22.2527 7.631 22.2183 7.75979 22.1531 7.87345C22.0878 7.98712 21.9938 8.08169 21.8806 8.14774L12.8806 13.3977C12.7659 13.4646 12.6356 13.4999 12.5028 13.4999C12.3701 13.4999 12.2397 13.4646 12.125 13.3977L3.125 8.14774C3.01124 8.08206 2.91672 7.98765 2.85091 7.87396C2.7851 7.76027 2.7503 7.63129 2.75 7.49993ZM4.98875 7.49993L12.5 11.8818L20.0112 7.49993L12.5 3.11805L4.98875 7.49993Z" fill="#EAF1E2"/>
</svg>
 Aligned Jobs</h1>
            </div>

            <div id="menu-btn" onClick={()=> setMenuActive(!menuActive)} 
         className={`${menuActive? "fas fa-times" : "fas fa-bars"}`}></div>

            <ul className={`navbar navbar-mobile ${menuActive? "active": ""}`}>
              <li>
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>About</Link>
              </li>
              <li>
                <Link to="/candidates" onClick={closeMenu}>Candidates</Link>
              </li>
              <li>
                <Link to="/employer-register" onClick={closeMenu}>Employers</Link>
              </li>
            </ul>
          </div>

          <div className="menuContainer desktop">
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/candidates">Candidates</Link>
              </li>
              <li>
                <Link to="/employer-register">Employers</Link>
              </li>
            </ul>

            <div className="logo">
                <h1><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.1478 16.1249C22.2469 16.2968 22.2738 16.501 22.2226 16.6927C22.1715 16.8844 22.0465 17.048 21.875 17.1477L12.875 22.3977C12.7603 22.4646 12.6299 22.4999 12.4972 22.4999C12.3644 22.4999 12.2341 22.4646 12.1194 22.3977L3.11938 17.1477C2.95034 17.0462 2.82811 16.8821 2.77916 16.6911C2.7302 16.5 2.75846 16.2974 2.85781 16.127C2.95717 15.9567 3.11962 15.8323 3.31 15.7809C3.50037 15.7294 3.70336 15.755 3.875 15.8521L12.5 20.8818L21.125 15.8521C21.2969 15.7531 21.5011 15.7261 21.6927 15.7773C21.8844 15.8284 22.0481 15.9534 22.1478 16.1249ZM21.125 11.3521L12.5 16.3818L3.875 11.3521C3.70423 11.2671 3.50748 11.2503 3.32479 11.3053C3.1421 11.3602 2.9872 11.4827 2.89163 11.6478C2.79606 11.8129 2.76699 12.0082 2.81035 12.1939C2.8537 12.3797 2.96622 12.542 3.125 12.6477L12.125 17.8977C12.2397 17.9646 12.3701 17.9999 12.5028 17.9999C12.6356 17.9999 12.7659 17.9646 12.8806 17.8977L21.8806 12.6477C21.9671 12.5988 22.0429 12.5332 22.1038 12.4548C22.1647 12.3763 22.2094 12.2865 22.2353 12.1907C22.2612 12.0948 22.2679 11.9947 22.2548 11.8963C22.2417 11.7978 22.2092 11.7029 22.1592 11.6171C22.1091 11.5313 22.0426 11.4563 21.9633 11.3965C21.884 11.3366 21.7937 11.2931 21.6975 11.2684C21.6013 11.2438 21.5011 11.2385 21.4028 11.2529C21.3046 11.2672 21.2101 11.301 21.125 11.3521ZM2.75 7.49993C2.7503 7.36856 2.7851 7.23958 2.85091 7.12589C2.91672 7.0122 3.01124 6.91779 3.125 6.85211L12.125 1.60211C12.2397 1.53524 12.3701 1.5 12.5028 1.5C12.6356 1.5 12.7659 1.53524 12.8806 1.60211L21.8806 6.85211C21.9938 6.91816 22.0878 7.01274 22.1531 7.1264C22.2183 7.24006 22.2527 7.36885 22.2527 7.49993C22.2527 7.631 22.2183 7.75979 22.1531 7.87345C22.0878 7.98712 21.9938 8.08169 21.8806 8.14774L12.8806 13.3977C12.7659 13.4646 12.6356 13.4999 12.5028 13.4999C12.3701 13.4999 12.2397 13.4646 12.125 13.3977L3.125 8.14774C3.01124 8.08206 2.91672 7.98765 2.85091 7.87396C2.7851 7.76027 2.7503 7.63129 2.75 7.49993ZM4.98875 7.49993L12.5 11.8818L20.0112 7.49993L12.5 3.11805L4.98875 7.49993Z" fill="#EAF1E2"/>
</svg>
Aligned Jobs</h1>
            </div>

            <ul className="navbar">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/candidates">Candidates</Link>
              </li>
              <li>
                <Link to="/employers">Employers</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
