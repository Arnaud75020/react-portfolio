import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const ProjectDetailOld = ({projects, fetchProjects}) => {

    console.log(projects)

    const history = useHistory();
    const url = history.location.pathname;
    const [project, setProject] = useState(null);


    useEffect(() => {
    fetchProjects()
      const currentProject = projects.find((stateProject) => stateProject.url === url);
      setProject(currentProject);
      console.log('project', project);
    }, [projects, url, project, fetchProjects])

    return ( 
        <div> 
            <>
            {project && (
            <Details>
                <Skills>
                    <div>
                        <h3>Front End</h3>
                        <div className="skillsection-line"></div>
                        <div className="skill-list">
                        {project.skills[0].frontEnd.map((skill) => (
                            <Skill name={skill.name} skillIcon={skill.skillIcon} key={skill.name} />
                        ))}
                        </div>
                    </div>
                    <>
                    {project.skills[0].backEnd.length !== 0 && (
                    <div className="backEnd">
                        <h3>Back End</h3>
                        <div className="skillsection-line"></div>
                        <div className="skill-list">
                        {project.skills[0].backEnd.map((skill) => (
                            <Skill name={skill.name} skillIcon={skill.skillIcon} key={skill.name} />
                        ))}
                        </div>
                    </div>)}
                    </>
                    <>
                    {project.skills[0].workFlow.length !== 0 && (
                    <div className="workFlow">
                        <h3>Work Flow</h3>
                        <div className="skillsection-line"></div>
                        <div className="skill-list">
                        {project.skills[0].workFlow.map((skill) => (
                            <Skill name={skill.name} skillIcon={skill.skillIcon} key={skill.name} />
                        ))}
                        </div>
                    </div>)}
                    </>
                </Skills>
                <HeadLine>
                    <h2>{project.name}</h2>
                    <img src={project.mainImg} alt="project"/>
                </HeadLine>
            </Details>
            )}
            </>
        </div>
     )
}

const Details = styled.div`
    color: white;
    display: flex;
`;

const HeadLine = styled.div`
    margin-left: 5rem;
    width: 80%;
    justify-content: center;
    padding-top: 20vh;
    position: relative;
    h2 {
        font-size: 1.5rem;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%); 
    }
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const Skills = styled.div`
    margin-left: 5rem;
    img{
        height: 25px;
        width: 25px;
        margin-right: 0.5rem;
    }
    h5 {
        padding: 0.2rem;
        color: black;
        background: white;
    }

    .skillsection-line {
        background: #cccccc;
        height: 0.1rem;
        margin: 0.1rem 0rem 1.5rem 0rem;
        width: 100%;
    }
    .skill-list{
        display: flex;
        justify-content: space-evenly;
    }
`;

const SkillStyle = styled.div`
    display: flex;
    padding: 1rem;
    h3 {
        font-size: 0.8rem;
    }
`;

const Skill = ({name, skillIcon}) => {
    return (
        <SkillStyle>
            <img src={skillIcon} alt=""/>
            <h5>{name}</h5>
        </SkillStyle>
    )
}
 
export default ProjectDetailOld;