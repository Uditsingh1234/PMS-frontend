import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa6";

function Admin_Profile() {
  return (
    <div className=' pl-[200px]  xs:pl-[0px] h-screen' onClick={(e) => e.stopPropagation()}>
      <div className=' flex justify-center text-center pt-[2px] bg-[#f6f6f6] ' >
        <div className=' bg-[#256ed1] w-[96%] mr-[50px] pl-[45px] ml-[5px] xs:ml-[50px] xs:pl-[0px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'><FaUser /><h3>Admin Profile</h3></div>
      </div>
      <div class="card">
        <div class="profile-D">
          <h1><FaUser />Profile</h1>
          <div class="profile-D1">
            <div class="profile-D11">
              <ul>
                <li>Name:</li><p>Udit Singh</p>
              </ul>
              <ul> 
                <li>Admin ID:</li><p>SRM1001</p>
              </ul>
              <ul>
                <li>Role: <br /></li> <p>Project Manager/ Project guide</p>
              </ul>
              <ul>
                <li>Email-ID:</li><p>udit@gmail.con</p>
              </ul>
              <ul>
                <li>Phone No:</li> <p>+91 6378210266</p>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------- */}

        <div class="profile-D">
          <h1><FaIdBadge />Professional Details</h1>
          <div class="profile-D1">
            <div class="profile-D11">
              <ul>
                <li>Department:</li><p>Science & Humanities</p>
              </ul>
              <ul>
                <li>Project managed:</li><p>XXXXXXXXXXX</p>
              </ul>
              <ul>
                <li>Experience: <br /></li> <p>13+ Yrs</p>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Admin_Profile
