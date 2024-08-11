import React, { useState, useEffect } from 'react';
import './pages.css';
import { GoProjectRoadmap } from "react-icons/go";
import { FaGlobe, FaGithub, FaRegHandPointRight } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import supabase from './Admin';
import { message } from 'antd';

function Admin_projects() {
  const [project, setProject] = useState(null);
  const [team, setTeam] = useState(null);
  const [projectDescriptions, setProjectDescriptions] = useState([]);
  const location = useLocation();
  const [searchId, setSearchId] = useState('');

  const handleSearch = async () => {
    const { data: projectData, error: projectError } = await supabase
      .from('projects')
      .select('*')
      .eq('project_id', searchId)
      .single();

    const { data: teamData, error: teamError } = await supabase
      .from('teams')
      .select('*')
      .eq('pr_id', searchId)
      .single();

    if (projectError || teamError) {
      message.error("Please enter valid ID", 1);
      console.error('Error fetching data:', projectError || teamError);
    } else {
      // message.success("data will gtting", 1);
      setProject(projectData);
      setTeam(teamData);
    }
  };

  useEffect(() => {
    const fetchProjectDescriptions = async () => {
      try {
        const response = await fetch('/project_desc.json');
        const data = await response.json();
        setProjectDescriptions(data);
      } catch (error) {
        console.error('Error fetching project descriptions:', error);
      }
    };
    fetchProjectDescriptions();

    if (location.state && location.state.project) {
      setProject(location.state.project);
      fetchTeam(location.state.project.project_id);
    }
  }, [location.state]);

  const fetchTeam = async (projectId) => {
    const { data: teamData, error: teamError } = await supabase
      .from('teams')
      .select('*')
      .eq('pr_id', projectId)
      .single();

    if (teamError) {
      message.error("Error fetching team data", 1);
      console.error('Error fetching team data:', teamError);
    } else {
      setTeam(teamData);
    }
  };

  const getProjectDescriptions = (teamId) => {
    const descriptionObj = projectDescriptions.find(desc => desc.team_id === teamId);
    return descriptionObj ? descriptionObj.desc : 'No description available';
  };

  return (
    <div className='pl-[200px] xs:pl-[0px] h-screen' onClick={(e) => e.stopPropagation()}>
      <div className='flex justify-center text-center pt-[2px] bg-[#f6f6f6]'>
        <div className='bg-[#256ed1] w-[96%] mr-[50px] pl-[45px] ml-[5px] xs:ml-[50px] xs:pl-[0px] flex justify-center items-center text-white rounded-lg h-[40px] font-semibold text-[1.2rem] gap-3'>
          <GoProjectRoadmap />
          <h3>Project's Section</h3>
        </div>
      </div>

      <div className='project-pannel'>
        <div className="p-search-section">
          <div className='p-filter'>
            <p>If you want to search by ID then use Id search</p>
          </div>
          <div className='id-search'>
            <input
              type="number"
              id="actually-started"
              name="actually-started"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            
          </div>
        </div>

        {project && team && (
          <div className='about_pr'>
            <div className='pr_details_heading'>
              <h1>{project.tittle}</h1>
              <h3>[ {project.project_id} ]</h3>
            </div>

            <div className='pr_details'>
              <span><h3>Team name:</h3><p>{team.team_name}</p></span>
              <span><h3>Team ID:</h3><p>{team.team_id}</p></span>
              <span className='prgap'><h3>About:</h3><p>{getProjectDescriptions(team.team_id)}</p></span>
              <span><h3>Current working student:</h3><p>{project.current_std}</p></span>
              <span><h3>Vacant seat:</h3><p>{project.vancant_seat}</p></span>
              <span><h3>When project is created:</h3><p>{project.created_at}</p></span>
              <span><h3>Last submission date:</h3><p>{project.submission_date}</p></span>
              <span><h3>When the project is start:</h3><p>{project.starts}</p></span>
              <div className='prgap'>
                <span><h1>Team members:</h1></span>
                <span className='prsidegap'><h3>1:</h3><p>{team.member1}</p></span>
                <span className='prsidegap'><h3>2:</h3><p>{team.member2}</p></span>
                <span className='prsidegap'><h3>3:</h3><p>{team.member3}</p></span>
                <span className='prsidegap'><h3>4:</h3><p>{team.member4}</p></span>
              </div>
              <div className='pr_link'>
                <button onClick={() => window.open(team.live, '_blank')}> <FaGlobe />Live link button</button>
                <button onClick={() => window.open(team.repo, '_blank')}><FaGithub />Github-repo Link</button>
              </div>
              <button className='pr-btn'>For create report <FaRegHandPointRight /></button>
            </div>

            
          </div>
          
        )}
      </div>
    </div>
  );
}

export default Admin_projects;
