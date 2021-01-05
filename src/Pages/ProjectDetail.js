import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ProjectDetail = ({projects, fetchProjects}) => {

    const history = useHistory();
    const url = history.location.pathname;
    const [project, setProject] = useState(null);
    const [index, setIndex] = useState();
    
    useEffect(() => {
        const currentProject = projects.find((stateProject) => stateProject.url === url);
        setProject(currentProject);
        const currentIndex = projects.findIndex((stateProject) => stateProject.url === url);
        setIndex(currentIndex)
    }, [])

    const projectHandler = (direction) => {
        if(direction === 'skip-back') {
            const newIndex = index - 1
            setIndex(newIndex)
            setProject(projects[newIndex]);
        }
        if(direction === 'skip-forward') {
            const newIndex = index + 1
            setIndex(newIndex)
            setProject(projects[newIndex]);
        }

    }

    return ( 
        <div> 
            <>
            {project && (
            <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
                <Arrows>
                    { index === 0 ? '' : 
                    <FontAwesomeIcon onClick={() => projectHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} /> 
                    }
                    { index === projects.length - 1 ? '' : 
                    <FontAwesomeIcon onClick={() => projectHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
                    }
                </Arrows>
                <HeadLine>
                    <ProjectSpec>
                        <h2>{project.name}</h2>
                        <h5><span>&lt;/ </span>{project.type}<span> &gt;</span></h5>
                    </ProjectSpec>
                    <div className="headsection-line"></div>
                </HeadLine>
                <ProjectBody>
                    <Skills>
                        <div className="skill-list-wrapper">
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
                        <div className="skill-list-wrapper">
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
                        <div className="skill-list-wrapper">
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
                    <SkillImg>
                            <div className="img-wraper">
                                <img src={project.mainImg} alt="project"/>
                                <div className="overlay">
                                    <div className="description">
                                        <h3>Description</h3>
                                        <div className="skillsection-line"></div>
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="links">
                                        <a target="_blank" rel="noreferrer" href={project.github}>
                                            <button className="github">Visit GitHub</button>
                                        </a>
                                        {project.website ?
                                        <a target="_blank" rel="noreferrer" href={project.website}>
                                            <button className="textImg">Visit website</button>
                                        </a>
                                        :
                                        ''
                                        }
                                    </div>
                                </div> 
                            </div>
                    </SkillImg>
                </ProjectBody>
            </Details>
            )}
            </>
        </div>
     )
}

const Details = styled(motion.div)`
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const Arrows = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    .skip-back{
        position: absolute;
        left: 1%;
        opacity: .6;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            color: #23d997;
            opacity: 1;
            cursor: pointer;
        }
    }
    .skip-forward{
        position: absolute;
        right: 1%;
        opacity: .6;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            color: #23d997;
            opacity: 1;
            cursor: pointer;
        }
    }
`;

const HeadLine = styled.div`
    margin: 0rem 5rem;
    padding-top: 8vh;
    justify-content: center;
    .headsection-line {
        background: #cccccc;
        height: 0.1rem;
        margin: 0.1rem 0rem 1.5rem 0rem;
        width: 100%;
    }
`;

const ProjectSpec = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
    font-size: 1.7rem;
    }
    h5 {
    font-family: 'Inter', sans serif;
    font-weight: lighter;
    font-size: .9rem;
    }
`;

const ProjectBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 5rem 0rem 5rem;
`;

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 35%;
    max-height:28rem;
    h3 {
        font-size: 1rem;
    }
    .skill-list-wrapper {
        padding-right: 40px;
    }
    .skillsection-line{
        background: #23d997;
        height: 0.2rem;
        margin: 0.1rem 0rem 1.5rem 0rem;
        width: 4rem;
    }
`;

const SkillImg = styled.div`
    width: 65%;
    .img-wraper {
        background: #282828;
        position: relative;
        width:100%;
        min-height: 60vh;
        display:flex;
        align-items:center;
        overflow: hidden;
        img {
            position: absolute;
            width: 100%;
            height: auto;
        }
        .links {
            padding: 5rem;
            display: flex;
            justify-content: space-around;
            button {
                font-weight: lighter;
                font-size: .8rem;
                padding: .5rem 1rem;
                border: 1px solid #23d997;
            }
            h3 {
                font-size: 1rem;
                transition: 0.3s ease;
            &:hover {
                color: #23d997;
                }
            }
        }
        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: opacity 0.3s ease;
            background-color: #1b1b1b;
            .skillsection-line{
                background: #23d997;
                height: 0.2rem;
                margin: 0.1rem 0rem 1.5rem 0rem;
                width: 4rem;
            }
            .description{
                padding: 0rem 5rem;
                p {
                    padding: 0rem;
                }
            }
        }
        
        &:hover .overlay{
            opacity: 1;
        }
    }
`;

const SkillStyle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.2rem;
    padding-right: 20px;
    h5 {
        font-size: .6rem;
        padding: 0.2rem;
        color: black;
        background: white;
    }
    img {
        margin-right: 0.5rem;
        width: 15px;
        height: 15px;
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





export default ProjectDetail;