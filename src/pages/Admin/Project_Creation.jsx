import React from 'react'
import { FaProjectDiagram, FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
// import {  } from "react-icons/fa";

function Project_Creation() {
  return (
    <div className=' pl-[200px]  xs:pl-[0px] h-screen' onClick={(e) => e.stopPropagation()}>
      <div className=' flex justify-center text-center pt-[2px] bg-[#f6f6f6] ' >
        <div className=' bg-[#256ed1] w-[96%] mr-[50px] pl-[45px] ml-[5px] xs:ml-[50px] xs:pl-[0px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'><FaProjectDiagram /><h3>project's Creation</h3></div>
      </div>

      <div class="project-pannel p_creation">
        {/* <h1>Project Creation Form</h1> */}
        <form>
          <div class="form-group">
            <label for="project-title">Project Title:</label>
            <input type="text" id="project-title" name="project-title" required />
          </div>
          <div class="form-group">
            <label for="project-id">Project ID:</label>
            <input type="text" id="project-id" name="project-id" required />
          </div>
          <div class="form-group">
            <label for="project-id">Team ID:</label>
            <input type="text" id="project-id" name="project-id" required />
          </div>
          <div class="form-group">
            <label for="team-name">Team Name:</label>
            <input type="text" id="team-name" name="team-name" required />
          </div>
          <div class="form-group">
            <label for="project-description">Project Description:</label>
            <textarea id="project-description" name="project-description" required></textarea>
          </div>
          <div class="form-group">
            <label for="current-students">Current Students Working:</label>
            <input type="number" id="current-students" name="current-students" required />
          </div>
          <div class="form-group">
            <label for="project-created">When Project Created:</label>
            <input type="date" id="project-created" name="project-created" required />
          </div>
          <div class="form-group">
            <label for="submission-date">Submission Date:</label>
            <input type="date" id="submission-date" name="submission-date" required />
          </div>
          <div class="form-group">
            <label for="actually-started">Actually when project Started:</label>
            <input type="date" id="actually-started" name="actually-started" required />
          </div>
          <div class="form-group">
            <label for="actually-started">Select team mentor name:</label>
          </div>


          <div className='team_group'>
            <div className='team-member'>
              <div className='form-group'>
                <label for="department"> <FaStar />Team Mentor</label>
              </div>
              <div>
              <div class="form-group">
                <select id="department" name="department" required>
                  <option value=""> Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
              <div class="form-group">
                <select id="section" name="section" required>
                  <option value=""> Section</option>
                  <option value="A"> A</option>
                  <option value="B"> B</option>
                </select>
              </div>
              <div class="form-group">
                <select id="name" name="name" required>
                  <option value=""> Name</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Mark Doe">Mark Doe</option>
                  <option value="David Doe">David Doe</option>
                  <option value="Emily Doe">Emily Doe</option>
                </select>
              </div>
              </div>
            </div>


            



            

            <div className='Cr_p_note'>
            <p>Note: Make sure you have entered correct details the some filed are non changable so please click on submit buttom aftr double check </p>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Project_Creation
