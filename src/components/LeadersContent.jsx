import React from 'react';
import './MainContent.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

function TeamContent() {
  const navigate = useNavigate();

  function YuktiDetails() {
    navigate("/Final")
  }


  return (
    <>
      <div className="main-content">
        <div className='greeting'>
          <h3>details of</h3>
          <h1>TEAM LEADERS</h1>
          <div className="form-container">
            <div>
              <input type="text" placeholder="Enter your name" className="form-field" />
              <input type="text" placeholder="Enter your mail id" className="form-field" />
            </div>
            <div>
              <input type="text" placeholder="Enter your SIC" className="form-field" />
              <select className="form-field">
                <option value="">Select your year</option>
                <option value="year1">1st</option>
                <option value="year2">2nd</option>
                <option value="year3">3rd</option>
                <option value="year4">4th</option>
              </select>
              <select className="form-field">
                <option value="">Select your branch</option>
                <option value="cse">Computer Science and Engineering</option>
                <option value="ece">Electronics and Communication </option>
                <option value="ce">Computer Engineering</option>
                <option value="cst">Computer Science and Technology</option>
                <option value="eee">Electrical and Electronics </option>
                <option value="eie">Electronics and Instrumentation </option>
                <option value="mtech">M. Tech.</option>
                <option value="mca">MCA (Computer Applications)</option>
                <option value="msc">M.Sc. (Data Science)</option>
              </select> </div>
            <div>
              <select className="form-field">
                <option value="">Select the number of members in your team</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div></div>
        </div>
        <button className="proceed-button" onClick={YuktiDetails}>Next to</button>
        <div class="container">
          <div class="circle" style={{ backgroundColor: "#ffffff" }}> 1</div>
          <div class="line"></div>
          <div class="circle" >2</div>
          <div class="line"></div>
          <div class="circle" style={{ backgroundColor: "#ffffff" }}>3</div>
        </div>
      </div>
    </>
  );
}

export default TeamContent;
