// Student_App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLogOut } from "react-icons/io5";
import Student_Profile from './pages/Student/Student_Profile';
import Student_Project from './pages/Student/Student_Project';
import Student_Dashboard from './pages/Student/Student_Dashboard';
import Student_Navbar from './components/Student_Navbar';

function Student_App({ email, setSLoginUser }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="icon">
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
      </div>
      
      <Student_Navbar show={showNav} setShow={setShowNav} />
      <div className='icon2'>
        <IoLogOut onClick={() =>setSLoginUser({
        })}/>
      </div>
      
      <div>
        {/* <h1>Student Portal</h1>
        <p>Welcome, {email}</p> */}
        <Routes>
          <Route path="/" element={<Student_Dashboard />} /> {/* Ensure paths match */}
          <Route path="//profile" element={<Student_Profile />} />
          <Route path="//project" element={<Student_Project />} />
        </Routes>
      </div>

      
    </>
  );
}

export default Student_App;
