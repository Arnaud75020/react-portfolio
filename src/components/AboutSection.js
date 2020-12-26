import React from 'react';
import Arnaud from '../assets/images/Arnaud.jpg';
import styled from 'styled-components';

const AboutSection = () => {
    return ( 
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Welcome,</h2>
                    </Hide>
                    <Hide>
                        <h2>My name is <span>Arnaud</span>,</h2>
                    </Hide>
                    <Hide>
                        <h2>I'm a <span>Web Developer</span></h2>
                    </Hide>
                </div>
                <p>Contact me for project inquiry</p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src={Arnaud} alt="blue sky"/>
            </Image>
        </About>
     );
}

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 80%;
        height: 60vh;
        object-fit: cover;

    }
`;

const Hide = styled.div`
    overflow: hidden;
`;
 
export default AboutSection;