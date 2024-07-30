import React from 'react'
import './pages.css'
import { MdDashboard } from "react-icons/md";
function Student_Dashboard() {

  return (
    <div className=' pl-[160px]  xs:pl-[5px] h-screen' onClick={(e) => e.stopPropagation()}>
      <div className=' flex justify-center text-center pt-[2px] bg-[#f6f6f6] ' >
        <div className=' bg-[#256ed1] w-[96%] mr-[50px] ml-[45px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'><MdDashboard /><h3>Student Dashboard</h3></div>
      </div>
      <div className='flex justify-center text-center text-[50px]'>welcome to the student dashboard</div>
    </div>
  )
}

export default Student_Dashboard
