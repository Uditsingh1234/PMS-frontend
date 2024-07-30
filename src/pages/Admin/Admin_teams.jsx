import React from 'react'
import { HiUserGroup } from "react-icons/hi";
function Admin_teams() {
  return (
    <div className=' pl-[200px]  xs:pl-[0px] h-screen' onClick={(e) => e.stopPropagation()}>
      <div className=' flex justify-center text-center pt-[2px] bg-[#f6f6f6] ' >
        <div className=' bg-[#256ed1] w-[96%] mr-[50px] pl-[45px] ml-[5px] xs:ml-[50px] xs:pl-[0px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'><HiUserGroup /><h3>Teams</h3></div>
      </div>

      <div>
        projects Teams page
      </div>
    </div>
  )
}

export default Admin_teams
