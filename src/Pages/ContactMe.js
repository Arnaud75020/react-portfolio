import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';

const ContactMe = () => {
    return ( 
        <ContactStyle style={{background: "#fff"}} exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Drop me a line.
                    </motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                            <h2>Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arnaud-duh%C3%A9-05a00b41/">Visit my Linkedin profil</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                            <h2>GitHub</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/arnaudduhe/?hl=fr">Visit my Instagram profil</a>
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
`;

const Title = styled.div`
    margin-bottom: 2rem;
    color: black;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
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