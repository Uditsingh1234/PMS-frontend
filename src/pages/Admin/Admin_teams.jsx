import React from 'react'
import { HiUserGroup } from "react-icons/hi";
function Admin_teams() {
  return (
    <div className=' pl-[200px]  xs:pl-[0px] h-screen' onClick={(e) => e.stopPropagation()}>
      <div className=' flex justify-center text-center pt-[2px] bg-[#f6f6f6] ' >
        <div className=' bg-[#256ed1] w-[96%] mr-[50px] pl-[45px] ml-[5px] xs:ml-[50px] xs:pl-[0px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'><HiUserGroup /><h3>Teams</h3></div>
      </div>

      <div className='project-pannel'>
        <form className='team-form'>
          <div class="form-row">
            <label class="label" for="team-id">Team ID:</label>
            <input class="input-field" type="text" id="team-id" name="team-id" />
          </div>
          <div class="form-row">
            <label class="label" for="team-name">Team Name: <br /><p>Optional</p></label>
            <input class="input-field" type="text" id="team-name" name="team-name" /> 
          </div>
          <button>Search</button>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Department</th>
                  <th>Section</th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><select id="department" name="department" required>
                    <option value=""> Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                  </select></td>
                  <td><select id="section" name="section" required>
                    <option value=""> Section</option>
                    <option value="A"> A</option>
                    <option value="B"> B</option>
                  </select></td>
                  <td><select id="name" name="name" required>
                    <option value=""> Name</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Mark Doe">Mark Doe</option>
                    <option value="David Doe">David Doe</option>
                    <option value="Emily Doe">Emily Doe</option>
                  </select></td>
                  <td><button class="edit-button">Edit</button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><select id="department" name="department" required>
                    <option value=""> Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                  </select></td>
                  <td><select id="section" name="section" required>
                    <option value=""> Section</option>
                    <option value="A"> A</option>
                    <option value="B"> B</option>
                  </select></td>
                  <td><select id="name" name="name" required>
                    <option value=""> Name</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Mark Doe">Mark Doe</option>
                    <option value="David Doe">David Doe</option>
                    <option value="Emily Doe">Emily Doe</option>
                  </select></td>
                  <td><button class="edit-button">Edit</button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><select id="department" name="department" required>
                    <option value=""> Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                  </select></td>
                  <td><select id="section" name="section" required>
                    <option value=""> Section</option>
                    <option value="A"> A</option>
                    <option value="B"> B</option>
                  </select></td>
                  <td><select id="name" name="name" required>
                    <option value=""> Name</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Mark Doe">Mark Doe</option>
                    <option value="David Doe">David Doe</option>
                    <option value="Emily Doe">Emily Doe</option>
                  </select></td>
                  <td><button class="edit-button">Edit</button></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><select id="department" name="department" required>
                    <option value=""> Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                  </select></td>
                  <td><select id="section" name="section" required>
                    <option value=""> Section</option>
                    <option value="A"> A</option>
                    <option value="B"> B</option>
                  </select></td>
                  <td><select id="name" name="name" required>
                    <option value=""> Name</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Mark Doe">Mark Doe</option>
                    <option value="David Doe">David Doe</option>
                    <option value="Emily Doe">Emily Doe</option>
                  </select></td>
                  <td><button class="edit-button">Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='Cr_p_note'>Note: Make sure all changes you done with the attention </div>
          <button class="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Admin_teams
