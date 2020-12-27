import React from 'react';
import Arnaud from '../assets/images/Arnaud.jpg';
import styled from 'styled-components';
import {About, Description, Hide, Image} from '../styles';

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
 
export default AboutSection;