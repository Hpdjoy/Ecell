import React from 'react';
import Navbar from './components/Navbar';
import TeamContent from './components/LeadersContent';
import YuktiContent from './components/detailsOfYukti';
import MainContent from './components/MainContent';
import './App.css';
import { Link, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
  
      <Route>
    <Route path='/' element={<MainContent/>}/>
    <Route path='/fillDetails' element={<TeamContent/>}/>
    <Route path='/Final' element={<YuktiContent/>}/>
    </Route>
  );
}

export default App;
