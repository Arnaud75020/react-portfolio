import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import {useScroll} from './useScroll';
import { scrollReveal } from '../animation';



const AboutMe = () => {

    const [element, controls] = useScroll();

    return ( 
        <Aboutme variants={scrollReveal} ref={element} animate={controls} className="aboutme">
            <h2  id={'aboutMe'} >About <span>me</span></h2>
            <AnimateSharedLayout>
            <Toggle title='Who I am'>
                    <div className="answer">
                        <p>I'm a french citizen, born and raised in beautiful but rainy Normandie in France !</p>
                    </div>
                </Toggle>
                <Toggle title='How and when did I start Web Development'>
                    <div className="answer">
                        <p>After 8 years working in the TV show production field in Paris, I decided it was the time to change career and that's how I enrolled in an intense 5 months fullstack bootcamp in march 2020 at Wild Code School Lisbon to specialize myself in Javascirpt and ReactJS.</p>
                    </div>
                </Toggle>
                <Toggle title='How to work with me'>
                    <div className="answer">
                        <p>Wether you need a full-time on-site or remote web developer or build your App, I'm always in for new challenges, so reach out to me in the contact page !</p>
                    </div>
                </Toggle>
                <Toggle title='What I like'>
                    <div className="answer">
                        <p>Outdoor enthusiast, if I'm not working, you can often see me on a paragliding take-off, by the ocean or a lake, trying to surf or kite-surf.  </p>
                        <p>I find interest and joy in discovering, could it either be in my own capacity pushing my limits to always longer triathlon and running experiences, or just travelling, either with my paraglider or on my bike.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Aboutme>
     );
}

const Aboutme = styled(About)`
    display: block;
    span {
        display: block;
        @media (max-width: 1200px) {
            display: inline;
        }
    }
    h2 {
        padding-top: 3rem;
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
        padding: 0.3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;
 
export default AboutMe;