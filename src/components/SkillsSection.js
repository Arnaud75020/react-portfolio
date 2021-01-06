import React from 'react';
import codevideo from '../assets/videos/codevideo.mp4';
import CSS from '../assets/icons/CSS.svg';
import HTML from '../assets/icons/HTML.svg';
import JS from '../assets/icons/JS.svg';
import ReactJs from '../assets/icons/ReactJs.svg';
import nodejs from '../assets/icons/nodejs.svg';
import figma from '../assets/icons/figma.svg';
import github from '../assets/icons/github.svg';
import mysql from '../assets/icons/mysql.svg';
import scrum from '../assets/icons/scrum.svg';
import express from '../assets/icons/express.svg';
import styledc from '../assets/icons/styledc.png';
import { Description, Image, Skills, Cards, CardList, Card} from '../styles';
import {useScroll} from './useScroll';
import { scrollReveal } from '../animation';

const SkillsSection = () => {

    const [element, controls] = useScroll();

    return ( 
        <Skills variants={scrollReveal} animate={controls} ref={element}>
            <Description>
                <h2>My <span>Skills</span></h2>
                <Cards>
                    <CardList>
                    <h3>Front End</h3>
                        <div className="skillsection-line"></div>
                        <Card>
                            <div className="icon">
                                <img src={HTML} alt="icon"/>
                                <h5>HTML</h5>
                            </div>
                        </Card>                    
                        <Card>
                            <div className="icon">
                                <img src={CSS} alt="icon"/>
                                <h5>CSS</h5>
                                </div>
                        </Card>                       
                        <Card>
                            <div className="icon">
                                <img src={JS} alt="icon"/>
                                <h5>Javascript</h5>
                            </div>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={ReactJs} alt="icon"/>
                                <h5>ReactJS</h5>
                            </div>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={styledc} alt="icon"/>
                                <h5>Styled Components</h5>
                                </div>
                        </Card> 
                    </CardList>
                    <CardList>
                    <h3>Back End</h3>
                    <div className="skillsection-line"></div>
                        <Card>
                            <div className="icon">
                                <img src={mysql} alt="icon"/>
                                <h5>mySQL</h5>
                            </div>
                        </Card>                    
                        <Card>
                            <div className="icon">
                                <img src={express} alt="icon"/>
                                <h5>Express Server</h5>
                                </div>
                        </Card>                    
                        <Card>
                            <div className="icon">
                                <img src={nodejs} alt="icon"/>
                                <h5>NodeJS</h5>
                            </div>
                        </Card>
                    </CardList>
                    <CardList>
                    <h3>Work Flow</h3>
                    <div className="skillsection-line"></div>
                        <Card>
                            <div className="icon">
                                <img src={github} alt="icon"/>
                                <h5>Git/GitHub</h5>
                            </div>
                        </Card>                    
                        <Card>
                            <div className="icon">
                                <img src={scrum} alt="icon"/>
                                <h5>Agile/SCRUM</h5>
                                </div>
                        </Card>                    
                        <Card>
                            <div className="icon">
                                <img src={figma} alt="icon"/>
                                <h5>Figma</h5>
                            </div>
                        </Card>
                    </CardList>
                    <CardList>
                    <h3>And more...</h3>
                    <div className="skillsection-line"></div>
                        <Card>
                            <div className="icon">
                                <h5>WordPress</h5>
                            </div>
                        </Card> 
                        <Card>
                            <div className="icon">
                                <h5>Framer motion</h5>
                            </div>
                        </Card>  
                        <Card>
                            <div className="icon">
                                <h5>Apollo & GraphQL</h5>
                            </div>
                        </Card>                    
                        <Card>
                            <div className="icon">
                                <h5>NPM</h5>
                            </div>
                        </Card>                    
                        <Card>
                            <div className="icon">
                                <h5>SASS</h5>
                            </div>
                        </Card>
                    </CardList>
                </Cards>
            </Description>
            <Image>
                <video width="400" autoPlay loop muted>
                    <source src={codevideo} type='video/mp4' />
                </video>
            </Image>
        </Skills>
     );
}



export default SkillsSection;