import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from './SRMlogo.png';
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

function Student_Navbar({show, setShow}) {
  const closebar = ()=>setShow(false);
    return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <img src={logo} alt="logo" className='logo' />
      <ul >
        <li ><Link to="/student"  onClick={closebar}><MdDashboard />Dashboard</Link></li>
      </ul>
      <ul>
        <li><Link to="/student/profile" onClick={closebar}><FaUser />Profile</Link></li>
      </ul>
      <ul>
        <li><Link to="/student/project" onClick={closebar}><GrProjects />Project's</Link></li>
      </ul>
    </div>
  );
}

export default Student_Navbar;
