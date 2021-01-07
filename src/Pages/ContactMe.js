import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';

const ContactMe = () => {
    return ( 
        <ContactStyle style={{background: "#fff"}} exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Let's stay in touch !
                    </motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle1/>
                            <h2>Send an email to <span>arnaud.duhe@gmail.com</span></h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle2/>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arnaud-duh%C3%A9-05a00b41/">Visit my <span>Linkedin</span> profil</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle3/>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Arnaud75020">Visit my <span>GitHub</span> account</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle4/>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/arnaudduhe/?hl=fr">Visit my <span>Instagram</span> profil</a>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        padding: 1rem;
        align-items: center;
        justify-content: center;
    }
`;

const Title = styled.div`
    margin-bottom: 2rem;
    color: black;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle1 = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: #fffebf;
`;


const Circle2 = styled(Circle1)`
    background: #ff8efb;
`;

const Circle3 = styled(Circle1)`
    background: #8ed2ff;
`;

const Circle4 = styled(Circle1)`
    background: #8effa0;
`;

const Social = styled(motion.dev)`
    display: flex;
    align-items: center;
    h2, a {
        font-size: 2rem;
        margin: 1.5rem;
    }
    a {
        text-decoration: none;
        color: black;
    }
`;
 
export default ContactMe;