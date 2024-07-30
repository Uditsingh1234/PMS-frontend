import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Admin_Profile from './pages/Admin/Admin_Profile';
import Admin_Dashboard from './pages/Admin/Admin_Dashboard';
import Admin_Navbar from './components/Admin_Navbar';
import { IoLogOut } from "react-icons/io5";
import Admin_Calender from './pages/Admin/Admin_Calender';
import Admin_projects from './pages/Admin/Admin_projects';
import Project_Creation from './pages/Admin/Project_Creation';
import Admin_teams from './pages/Admin/Admin_teams';

function Admin_App({ email, setSLoginUser }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="icon">
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </div>
      <Admin_Navbar show={showNav} setShow={setShowNav} />
      <div className='icon2'>
        <IoLogOut onClick={() =>setSLoginUser({})} />
      </div>
      <div className="container" onClick={() => setShowNav(false)}>
        {/* <h1>Admin Portal</h1>
        <p>Welcome, {email}</p> */}
        <Routes>
          <Route path="/" element={<Admin_Dashboard />} />
          <Route path="//profile" element={<Admin_Profile />} />
          <Route path="//calender" element={<Admin_Calender />} />
          <Route path="//projects" element={<Admin_projects />} />
          <Route path="//creation" element={<Project_Creation />} />
          <Route path="//teams" element={<Admin_teams />} />
        </Routes>
      </div>
    </>
  );
}

export default Admin_App;
