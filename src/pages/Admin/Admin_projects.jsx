import React from 'react'
import './pages.css'
import { GoProjectRoadmap } from "react-icons/go";
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
                <label class="filter-label" for="filter3">Section:</label>
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
            <input type="text" placeholder="Search Project ID" />
            <button>Search</button>
            <p>If you want to search by ID then use Id search</p>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Admin_projects
