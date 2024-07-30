// Student_App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { IoLogOut } from "react-icons/io5";
import { GiHamburgerMenu } from 'react-icons/gi';
import Teacher_Profile from './pages/Teacher/Teacher_Profile';
import Teacher_Dashboard from './pages/Teacher/Teacher_Dashboard';
import Teacher_Navbar from './components/Teacher_Navbar';

function Teacher_App({ email, setSLoginUser }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="icon">
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </div>
      <Teacher_Navbar show={showNav} setShow={setShowNav} />
      <div className='icon2'>
        <IoLogOut onClick={() =>setSLoginUser({})} />
      </div>
      <div className="container" onClick={() => setShowNav(false)}>
        {/* <h1>Teacher Portal</h1>
        <p>Welcome, {email}</p> */}
        <Routes>
          <Route path="/" element={<Teacher_Dashboard />} />
          <Route path="//profile" element={<Teacher_Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default Teacher_App;
