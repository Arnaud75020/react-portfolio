import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, photoAnimation, fade, lineAnimation } from '../animation';


const MyWork = ({projects, fetchProjects}) => {

    useEffect(() => {
        fetchProjects();
          }, [])

    return ( 
        <Work style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            {projects &&
            projects.map(project => {
                return(
                <Project key={project.name}>
                    <motion.h2 variants={fade}>{project.name}</motion.h2>
                    <motion.div variants={lineAnimation} className="line" ></motion.div >
                    <Link to={project.url}>
                        <motion.img variants={photoAnimation} src={project.mainImg} alt={project.name}/>
                    </Link>
                </Project>
                )
            })}
        </Work>
     );
}

const Work = styled (motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem; 
    h2 {
        padding: 1rem 0rem;
    }
`;
const Project = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.4rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
            width: 100%;
            height: 70vh;
            object-fit: cover;
        }
`;
 
export default MyWork;