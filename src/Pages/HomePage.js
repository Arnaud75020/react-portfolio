import React from 'react';
import AboutMe from '../components/AboutMe';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const HomePage = () => {

    return ( 
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <SkillsSection />
            <AboutMe />
        </motion.div>
     );
}
 
export default HomePage; 