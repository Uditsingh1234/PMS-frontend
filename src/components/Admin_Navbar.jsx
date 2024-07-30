import React from 'react'
import logo from './SRMlogo.png'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaUser } from 'react-icons/fa';
import { GoProjectRoadmap } from "react-icons/go";
import { FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

function Admin_Navbar({ show, setShow }) {
  const closebar = () => setShow(false);
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li><Link to="/admin" onClick={closebar} ><MdDashboard />Dashboard</Link></li> {/* Use Link for navigation */}
      </ul>
      <ul>
        <li><Link to="/admin/profile" onClick={closebar} ><FaUser />Profile</Link></li> {/* Use Link for navigation */}
      </ul>
      <ul>
        <li><Link to="/admin/projects" onClick={closebar} ><GoProjectRoadmap />Project's</Link></li> {/* Use Link for navigation */}
      </ul>
      <ul>
        <li><Link to="/admin/creation" onClick={closebar} ><FaProjectDiagram />Project Creation</Link></li> {/* Use Link for navigation */}
      </ul>
      <ul>
        <li><Link to="/admin/teams" onClick={closebar} ><HiUserGroup />Teams</Link></li> {/* Use Link for navigation */}
      </ul>
      <ul>
        <li><Link to="/admin/calender" onClick={closebar} ><FaCalendarAlt />Calender</Link></li> {/* Use Link for navigation */}
      </ul>



    </div>
  )
}

export default Admin_Navbar
