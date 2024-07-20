import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TeamContent from './components/LeadersContent';
import YuktiContent from './components/detailsOfYukti';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-container">
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/Details' element={<TeamContent />} />
        <Route path='/Final' element={<YuktiContent />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
