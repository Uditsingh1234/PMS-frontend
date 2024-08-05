import React from 'react'
import './pages.css'
import { GoProjectRoadmap } from "react-icons/go";
import { FaGlobe,FaGithub, FaRegHandPointRight } from "react-icons/fa";
function Admin_projects() {
  return (
    <div className=' pl-[200px]  xs:pl-[0px] h-screen' onClick={(e) => e.stopPropagation()}>
      <div className=' flex justify-center text-center pt-[2px] bg-[#f6f6f6] ' >
        <div className=' bg-[#256ed1] w-[96%] mr-[50px] pl-[45px] ml-[5px] xs:ml-[50px] xs:pl-[0px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'><GoProjectRoadmap /><h3>project's Section</h3></div>
      </div>

      <div className='project-pannel'>
        <div className="p-search-section">
          <div className='p-filter'>
            <div className='filter-search'>
              <div class="filter-section">
                <label class="filter-label" for="filter1">Department:</label>
                <select class="filter-dropdown" id="filter1" name="filter1">
                  <option value="">Select your department:</option>
                  <option value="option1">MCA</option>
                  <option value="option2">BCA</option>
                </select>
              </div>

              <div class="filter-section">
                <label class="filter-label" for="filter2">Year:</label>
                <select class="filter-dropdown" id="filter2" name="filter2">
                  <option value="">Select your year:</option>
                  <option value="option1"> 1</option>
                  <option value="option2"> 2</option>
                  <option value="option3"> 3</option>
                </select>
              </div>

              <div class="filter-section">
              <label for="actually-started">Section:</label>
                <select class="filter-dropdown" id="filter3" name="filter3">
                  <option value="">Select your section:</option>
                  <option value="option1">A</option>
                  <option value="option2">B</option>
                  <option value="option3">C</option>
                  <option value="option1">D</option>
                  <option value="option2">E</option>
                  <option value="option3">F</option>
                </select>
              </div>
              <button>Search</button>
            </div>
            <div className='filter-search-p'>
              <p>If you want to search by filteration process then use filter search</p>
            </div>
          </div>
          <div className='id-search'>
          <input type="number" id="actually-started" name="actually-started"/>
            <button>Search</button>
            <p>If you want to search by ID then use Id search</p>
          </div>
        </div>

        <div className='about_pr'>
          <div className='pr_details_heading'>
            <h1>Tittle of the project</h1>
            <h3>Project ID</h3>
          </div>

          <div className='pr_details'>
            <span><h3>Team name:</h3><p>Team One</p></span>
            <span><h3>Team ID:</h3><p>101</p></span>
            <span className='prgap'><h3>About:</h3><p>this is my project based on the html and css</p></span>
            <span><h3>Current working student:</h3><p>2</p></span>
            <span><h3>Vacant seat:</h3><p>2</p></span>
            <span><h3>When project is created:</h3><p>created project</p></span>
            <span><h3>Last submission date:</h3><p>submission date</p></span>
            <span><h3>When the project is start:</h3><p>actuall started</p></span>
            <div className='prgap'>
            <span><h1>Team members:</h1></span>
            <span className='prsidegap'><h3>1:</h3><p>abc</p> <p>(MCA-2/ A)</p></span>
            <span className='prsidegap'><h3>2:</h3><p>def</p> <p>(MCA-2/ B)</p></span>
            <span className='prsidegap'><h3>3:</h3><p>ghi</p> <p>(MCA-2/ C)</p></span>
            <span className='prsidegap'><h3>4:</h3><p>jkl</p> <p>(MCA-2/ D)</p></span>
            </div>
            <div className='pr_link'>
              <button> <FaGlobe/>Live link button</button>
              <button><FaGithub/>Github-repo Link</button>
            </div>
            <button className='pr-btn'>For create report <FaRegHandPointRight/></button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Admin_projects
