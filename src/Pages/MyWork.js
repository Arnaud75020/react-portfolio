import React, {useContext} from 'react';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { sliderContainer, pageAnimation, photoAnimation, fade, lineAnimation, slider } from '../animation';
import {ProjectContext} from '../ProjectContext';


const MyWork = () => {

    const [projects] = useContext(ProjectContext);

    return ( 
        <Work style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}/>
                <Frame2 variants={slider}/>
                <Frame3 variants={slider}/>
                <Frame4 variants={slider}/>
            </motion.div>
            {projects &&
            projects.map(project => {
                return(
                <Project key={project.name}>
                    <motion.h2 variants={fade}>{project.name}</motion.h2>
                    <motion.div variants={lineAnimation} className="line" ></motion.div >
                    <Link to={project.url}>
                        <Hide>
                            <motion.img variants={photoAnimation} src={project.mainImg} alt={project.name}/>
                        </Hide>
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
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
            width: 100%;
            height: 70vh;
            object-fit: cover;
        }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;
 
export default MyWork;