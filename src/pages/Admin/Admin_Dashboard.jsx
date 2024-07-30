import React, { useState } from 'react'
import './pages.css'
import { MdDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import tittlepng from "./admin assets/title.png"
import teampng from "./admin assets/team.png"
import group from "./admin assets/partners.png";
import waiting from "./admin assets/waiting-room.png";
import CalendarWidget from '../../components/CalendarWidget';
import { useNavigate } from 'react-router-dom';
import Notify_Widget from '../../components/Notify_Widget';

function Admin_Dashboard({ show }) {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/admin/calender');
  };



  return (
    <div className=' pl-[200px]  xs:pl-[0px] ' onClick={(e) => e.stopPropagation()}>
      <div className=' flex justify-center text-center pt-[2px] bg-[#f6f6f6] ' >
        <div className=' bg-[#256ed1] w-[96%] mr-[50px] ml-[5px] pl-[50px] xs:ml-[50px] xs:pl-[0px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'><MdDashboard /><h3>Admin Dashboard</h3></div>
      </div>
      <div className='card'>
        <div className='DashC'>
          <div className='Dashc1'>
            <div className='p-crd'>
              {/* <div className='p-crd-head'>
                <h1>Global Projects</h1>
              </div> */}
              <div className='project-c'>
                <h2><img src={tittlepng} />Projects Tittle</h2>
                <h3><img src={teampng} />Projects Teams:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo et numquam explicabo commodi nisi repellat ipsa deleniti facere autem illum dignissimos doloribus dolores alias aliquid laborum, dolorem odio culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nemo nostrum, blanditiis fuga obcaecati, qui expedita quam explicabo cum perferendis ut suscipit saepe! Incidunt officiis magnam optio corporis, laudantium esse?</p>
                <h1><img src={group} />Seat's <CiUser /> <CiUser /> <CiUser /> <CiUser /></h1>
                <div className='p-btn'><h4><img src={waiting} />Vacant Seats: <span>X</span></h4> <button>Details</button></div>
              </div>

              <div className='project-c'>
                <h2><img src={tittlepng} />Projects Tittle</h2>
                <h3><img src={teampng} />Projects Teams:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo et numquam explicabo commodi nisi repellat ipsa deleniti facere autem illum dignissimos doloribus dolores alias aliquid laborum, dolorem odio culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nemo nostrum, blanditiis fuga obcaecati, qui expedita quam explicabo cum perferendis ut suscipit saepe! Incidunt officiis magnam optio corporis, laudantium esse?</p>
                <h1><img src={group} />Seat's <CiUser /> <CiUser /> <CiUser /> <CiUser /></h1>
                <div className='p-btn'><h4><img src={waiting} />Vacant Seats: <span>X</span></h4> <button>Details</button></div>
              </div>


              <div className='project-c'>
                <h2><img src={tittlepng} />Projects Tittle</h2>
                <h3><img src={teampng} />Projects Teams:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo et numquam explicabo commodi nisi repellat ipsa deleniti facere autem illum dignissimos doloribus dolores alias aliquid laborum, dolorem odio culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nemo nostrum, blanditiis fuga obcaecati, qui expedita quam explicabo cum perferendis ut suscipit saepe! Incidunt officiis magnam optio corporis, laudantium esse?</p>
                <h1><img src={group} />Seat's <CiUser /> <CiUser /> <CiUser /> <CiUser /></h1>
                <div className='p-btn'><h4><img src={waiting} />Vacant Seats: <span>X</span></h4> <button>Details</button></div>
              </div>


              <div className='project-c'>
                <h2><img src={tittlepng} />Projects Tittle</h2>
                <h3><img src={teampng} />Projects Teams:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo et numquam explicabo commodi nisi repellat ipsa deleniti facere autem illum dignissimos doloribus dolores alias aliquid laborum, dolorem odio culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nemo nostrum, blanditiis fuga obcaecati, qui expedita quam explicabo cum perferendis ut suscipit saepe! Incidunt officiis magnam optio corporis, laudantium esse?</p>
                <h1><img src={group} />Seat's <CiUser /> <CiUser /> <CiUser /> <CiUser /></h1>
                <div className='p-btn'><h4><img src={waiting} />Vacant Seats: <span>X</span></h4> <button>Details</button></div>
              </div>
            </div>
          </div>
          <div className='Dashc2'>
            <div className='noti'>
              <Notify_Widget />
            </div>
            <div className='caln' onClick ={handleClick}>
              <CalendarWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin_Dashboard
