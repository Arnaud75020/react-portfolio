import React from 'react';
import Arnaud from '../assets/images/Arnaud.jpg';
import {About, Description, Hide, Image} from '../styles';
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from './Wave';

const AboutSection = () => {

    return ( 
        <About>
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2 variants={titleAnimation} >Welcome,</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation} >My name is <span>Arnaud</span>,</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>I'm a <span>W</span><span>e</span><span>b</span><span> </span><span>Developer</span>.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact me for project inquiry</motion.p>
                <motion.button variants={fade}>Contact me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={Arnaud} alt="id"/>
            </Image>
            <Wave/>
        </About>
     );
}
 
export default AboutSection;