import React from 'react';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';
function Navbar() {
  
  const navigate =  useNavigate();
  
  function GotoFillDetails(){
    navigate("/Details")
  }


  return (
    <>
    <nav className="navbar">
      <div 
        className="edcell"
      ></div>
      <div className="nav-links">
        <div><a href="#">Home</a></div>
        <div><a href="#">Gallery</a></div>
        <div><a href="#">Events</a></div>
        <div><a href="#">Team</a></div>
      </div>
      <div>
        <button className="register-button" onClick={GotoFillDetails}>Register</button>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
