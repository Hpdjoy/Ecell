import React from 'react';
import './Navbar.css';

function Navbar() {
  const logoUrl = '../assets/logo.png'; // Ensure this path is correct
  return (
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
        <button className="register-button" >Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
