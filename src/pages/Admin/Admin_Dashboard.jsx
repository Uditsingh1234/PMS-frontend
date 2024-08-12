import React, { useState, useEffect } from 'react';
import './pages.css';
import { MdDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import tittlepng from "./admin assets/title.png";
import teampng from "./admin assets/team.png";
import group from "./admin assets/partners.png";
import waiting from "./admin assets/waiting-room.png";
import CalendarWidget from '../../components/CalendarWidget';
import { useNavigate } from 'react-router-dom';
import Notify_Widget from '../../components/Notify_Widget';
import supabase from "./Admin";
import axios from 'axios';

function Admin_Dashboard({ show }) {
  const [projects, setProjects] = useState([]);
  const [projectDescriptions, setProjectDescriptions] = useState([]);
  const navigate = useNavigate();
  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*');

    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      setProjects(data);
    }
  };

  const fetchProjectDescriptions = async () => {
    try {
      const response = await axios.get('/project_desc.json'); // Accessing from the public folder
      if (Array.isArray(response.data)) {
        setProjectDescriptions(response.data);
      } else {
        console.error('Fetched data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching project descriptions:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchProjectDescriptions();
  }, []);

  const getProjectDescription = (teamId) => {
    const projectDesc = projectDescriptions.find(desc => desc.team_id === teamId);
    return projectDesc ? projectDesc.desc : 'No description available.';
  };

  const handleDetailsClick = (project, teamId) => {
    const projectDescription = getProjectDescription(teamId);
    navigate('/admin/projects', { state: { project, projectDescription } });
  };

  const handleClick = () => {
    navigate('/admin/calender');
  };

  return (
    <div className='pl-[200px] xs:pl-[0px]' onClick={(e) => e.stopPropagation()}>
      <div className='flex justify-center text-center pt-[2px] bg-[#f6f6f6]'>
        <div className='bg-[#256ed1] w-[96%] mr-[50px] ml-[5px] pl-[50px] xs:ml-[50px] xs:pl-[0px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'>
          <MdDashboard />
          <h3>Admin Dashboard</h3>
        </div>
      </div>
      <div className='card'>
        <div className='DashC'>
          <div className='Dashc1'>
            <div className='p-crd'>
              {projects.map(project => (
                <div className='project-c' key={project.id}>
                  <h2><img src={tittlepng} alt="Project Title" />Projects Title: {project.tittle}</h2>
                  <h3><img src={teampng} alt="Project Teams" />Projects Teams: {project.team_name}</h3>
                  <p>{getProjectDescription(project.team_id)}</p>
                  <h1><img src={group} alt="Seats" />Seats: <span>{Array.from({ length: project.current_std }).map((_, index) => (
                    <FaUser key={index} />
                  ))}</span> <span>
                    {Array.from({ length: project.vancant_seat }).map((_, index) => (
                    <CiUser key={index} />
                  ))}
                    </span></h1>
                  <div className='p-btn'>
                    <h4><img src={waiting} alt="Vacant Seats" />Vacant Seats: <span>{project.vancant_seat}</span></h4>
                    <button onClick={() => handleDetailsClick(project, project.team_id)}>Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='Dashc2'>
            <div className='notification'>
              <Notify_Widget />
            </div>
            <div className='caln' onClick={handleClick} >
              <CalendarWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Dashboard;
