import React from 'react'
import logo from './SRMlogo.png'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { MdDashboard } from "react-icons/md";

function Teacher_Navbar({show, setShow}) {
  const closebar = ()=>setShow(false);
  return ( 
    <div className={show ? 'sidenav active':'sidenav'}>
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li><Link to="/teacher" onClick={closebar} ><MdDashboard />Dashboard</Link></li>
      </ul>
      <ul>
      <li><Link to="/teacher/profile" onClick={closebar} ><MdDashboard />Profile</Link></li>
      </ul>
      
    </div>
  )
}

export default Teacher_Navbar
