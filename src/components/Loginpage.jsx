import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PiStudentBold } from "react-icons/pi";
import { IoMdLogIn } from "react-icons/io";
import Banner from './SRM-Banner2.jpg';
import logoo from './SRMlogo.png';
import './component.css';
import { message } from "antd";
// import dotenv from 'dotenv';
// dotenv.config();
function Loginpage({ onLogin }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };


  const login = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    console.log(backendUrl);
    axios.post(`${backendUrl}/login`, user).then((res) => {
      message.success(res.data.message, 2);
      if (res.data.user) {
        onLogin(res.data.user);
        switch (res.data.user.role) {
          case 'student':
            navigate('/student');
            break;
          case 'teacher':
            navigate('/teacher');
            break;
          case 'admin':
            navigate('/admin');
            break;
          default:
            break;
        }
      }
    }).catch((err) => {
      message.error(err.response.data.message);
    });
  };

  const [activePortal, setActivePortal] = useState(null);

  const showStudentOverlay = () => {
    setActivePortal('student');
  };

  const hideOverlay = () => {
    setActivePortal(null);
  };

  return (
    <>
      <div
        className="black-overlay"
        onClick={hideOverlay}
        style={{
          opacity: activePortal === 'student' ? 1 : 0,
          visibility: activePortal === 'student' ? 'visible' : 'hidden',
        }}
      >
        {console.log(user)}
        <div
          className="lg-p1"
          style={{
            bottom: activePortal === 'student' ? '0%' : '-100%',
          }}
        >
          <div className="lg-p1d1" onClick={(e) => e.stopPropagation()}>
            <h1>
              <IoMdLogIn />
               Login 
            </h1>
          </div>
          <div className="lg-p1d" onClick={(e) => e.stopPropagation()}>
            <div className="lg-input">
              <p>Enter your college email id:</p>
              <input type="text" name="email" value={user.email} onChange={handleChange} />
              <p>Enter your password:</p>
              <input type="password" name="password" value={user.password} onChange={handleChange} />
              <button onClick={login}>Login</button>
            </div>
          </div>
        </div>
      </div>

      <div className="login-main">
        <div>
          <div>
            <img src={logoo} alt="Logo" className="banner-logo" />
          </div>
          <img src={Banner} alt="Banner" className="Banner1" />
          <div className="p-detail">
            <h1>Heading:</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore praesentium dolores inventore
              harum delectus ea id dolor, dolorum totam aut voluptatibus iusto explicabo cum accusamus laborum? Nobis,
              sapiente reiciendis?
            </p>
          </div>
        </div>
        <div className="lg-div">
          <p>[ Login with your college mail-Id ]</p>
          <div className="lg-btn">
            <h3 onClick={showStudentOverlay}>
              <PiStudentBold />
               Login Credentials
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
