import React from 'react';
import './MainContent.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function YuktiContent() {
  const handleSubmit = () => {
    // Add your submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <>
    <div className="main-content">
      <div className='greeting'>
        <h3>Details of</h3>
        <h1>YUKTI CHALLENGE</h1>
        <div className="note">
          <i className="fa-solid fa-star" />
          <p>
            <span className="note-header">NOTE:</span>
            Please read all the necessary details about the event before filling the form.
          </p>
        </div>
      </div>
      <div className="form-container">
        <div className='ideation'>
          <input type="text" placeholder="Problem statement (within 250 words)" className="form-field" />
          <select className="form-field">
            <option value="">Select problem category</option>
            <option value="space-technology">Space Technology</option>
            <option value="smart-automation">Smart Automation</option>
            <option value="clean-green-technology">Clean & Green Technology</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="transportation-logistics">Transportation & Logistics</option>
            <option value="disaster-management">Disaster Management</option>
          </select>
        </div>
        <div className="solution">
          <input type="text" placeholder="Solution for your problem statement (briefly explain)" className="form-field" />
        </div>
      </div>
      <button className="proceed-button" onClick={handleSubmit}>Submit</button>
      <div className="container">
        <div className="circle circle-1">1</div>
        <div className="line"></div>
        <div className="circle circle-2">2</div>
        <div className="line"></div>
        <div className="circle circle-3">3</div>
      </div>
    </div>
    </>
  );
}

export default YuktiContent;
