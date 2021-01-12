import React, {useEffect, useState, useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation,photoAnimation, fade, lineAnimation } from '../animation';
import {ProjectContext} from '../ProjectContext';


const ProjectDetail = () => {

    const [projects] = useContext(ProjectContext);

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
                <HeadLine>
                    <ProjectSpec>
                    { index === 0 ? '' : 
                    <FontAwesomeIcon onClick={() => projectHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} /> 
                    }
                        <motion.h2 variants={fade}>{project.name}</motion.h2>
                        { index === projects.length - 1 ? '' : 
                    <FontAwesomeIcon onClick={() => projectHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
                    }
                        <h5><span>&lt;/ </span>{project.type}<span> &gt;</span></h5>
                    </ProjectSpec>
                    <motion.div variants={lineAnimation}className="headsection-line"></motion.div>
                </HeadLine>
                <ProjectBody>
                    <ProjectHeader>
                        <h3>Description</h3>
                        <div className="skillsection-line"></div>
                        <p>{project.description}</p>
                    </ProjectHeader>   
                    <ProjectSkills>
                        <div className="btns">
                                <a target="_blank" rel="noreferrer" href={project.github}>
                                    <button className="link-btn" type="button">GitHub</button>
                                </a>
                                {project.website ?
                                <a target="_blank" rel="noreferrer" href={project.website}>
                                    <button className="link-btn">Website</button>
                                </a>
                                :
                                ''
                                }
                        </div>
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
                    </ProjectSkills>
                    <SkillImg>
                            <div className="img-wraper">
                                <motion.img variants={photoAnimation}src={project.mainImg} alt="project"/>
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
    color: white;
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
    .skip-back{
        position: absolute;
        left: 3%;
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
        right: 3%;
        opacity: .6;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            color: #23d997;
            opacity: 1;
            cursor: pointer;
        }
    }
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ProjectBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 5rem 0rem 5rem;
    @media (max-width: 1200px) {
        padding: 2rem 2rem;
        display: block;
        justify-content: center;
    }
`;

const ProjectHeader = styled.div`
    width: 100%;

    padding-bottom: 1rem;
        .skillsection-line{
            background: #23d997;
            height: 0.2rem;
            margin: 0.1rem 0rem 1.5rem 0rem;
            width: 4rem;
        }
        p {
            padding: 0rem 5rem 2rem 0rem;
        }
    @media (max-width: 1200px) {
        margin: 0rem 3rem;
     
    }
`;

const ProjectSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 35%;
    max-height:28rem;
    h3 {
        font-size: 1rem;
    }
    .btns {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 3rem;
        button {
            font-weight: lighter;
            font-size: .7rem;
            margin-right: 3rem;
            cursor: pointer;
            padding: .8rem 1rem;
            border: 1px solid #23d997;
            transition: all 0.3s ease;
            &:hover{
                background-color: #23d997;
                color: white;
            }
            @media (max-width: 500px) {
                margin-top: 2rem;
                }
        }
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

    @media (max-width: 1200px) {
        width: 100%;
        justify-content: center;
        padding: 2rem 2rem;
        .btns {
            margin-bottom: 6rem;
            justify-content: center;
        }
    }
`;


const SkillImg = styled.div`
    width: 50%;
    .img-wraper {
        background: #282828;
        position: relative;
        width:100%;
        height: auto;
        display:flex;
        align-items:center;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
        }
    }
    @media (max-width: 1200px) {
        width: 100%;
        justify-content: center;
        padding: 2rem 2rem;
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