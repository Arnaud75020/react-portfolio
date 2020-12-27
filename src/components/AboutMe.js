import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';

const AboutMe = () => {
    return ( 
        <Aboutme className="aboutme">
            <h2>About <span>me</span></h2>
            <div className="question">
                <h3>How did I start</h3>
                <div className="answer">
                    <p>My story</p>
                </div>
                <div className="aboutme-line"></div>
            </div>
            <div className="question">
                <h3>Dealy Schedule</h3>
                <div className="answer">
                    <p>My story</p>
                </div>
                <div className="aboutme-line"></div>
            </div>
            <div className="question">
                <h3>How to work with me</h3>
                <div className="answer">
                    <p>My story</p>
                </div>
                <div className="aboutme-line"></div>
            </div>
            <div className="question">
                <h3>What I like</h3>
                <div className="answer">
                    <p>My story</p>
                </div>
                <div className="aboutme-line"></div>
            </div>
        </Aboutme>
     );
}

const Aboutme = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .aboutme-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;
 
export default AboutMe;