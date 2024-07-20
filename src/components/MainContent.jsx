import React from 'react';
import './MainContent.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {link,useNavigate} from 'react-router-dom';

function MainContent() {
  const navigate=  useNavigate();
  
  function GotoFillDetails(){
    navigate("/Details")
  }
  return (
    <>
    <div className="main-content">
      <div className='greeting'>
        <h3>Welcome to</h3>
        <h1>REGISTRATION PORTAL</h1>
        <div className="note">
          <p>
            <i class="fa-solid fa-star" />
            <span className="note-header">NOTE:</span>
            Please read all the necessary details about the event before filling the form.
          </p>
        </div>
      </div>
      <button className="proceed-button" onClick={() => {GotoFillDetails}}>Proceed to</button>
      <div class="container">
        <div class="circle circle-1">1</div>
        <div class="line"></div>
        <div class="circle circle-2">2</div>
        <div class="line"></div>
        <div class="circle circle-3">3</div>
      </div>
    </div>
    </>
  );
}

export default MainContent;
