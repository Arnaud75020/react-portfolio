import React from 'react';
import codevideo from '../assets/videos/codevideo.mp4';
import CSS from '../assets/icons/CSS.svg';
import HTML from '../assets/icons/HTML.svg';
import JS from '../assets/icons/JS.svg';
import ReactJs from '../assets/icons/ReactJs.svg';
import nodejs from '../assets/icons/nodejs.svg';
import {About, Description, Image} from '../styles';
import styled from 'styled-components';

const SkillsSection = () => {
    return ( 
        <Skills>
            <Description>
                <h2>My <span>Skills</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={HTML} alt="icon"/>
                            <h3>HTML</h3>
                        </div>
                        <p>short description of skill</p>
                    </Card>                    
                    <Card>
                        <div className="icon">
                            <img src={CSS} alt="icon"/>
                            <h3>CSS</h3>
                        </div>
                        <p>short description of skill</p>
                    </Card>                    
                    <Card>
                        <div className="icon">
                            <img src={JS} alt="icon"/>
                            <h3>Javascript</h3>
                        </div>
                        <p>short description of skill</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ReactJs} alt="icon"/>
                            <h3>ReactJS</h3>
                        </div>
                        <p>short description of skill</p>
                    </Card>
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

const Skills = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    img {
        width: 20px;
        height: 20px;
    }
`; 

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 10rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            padding: 0.5rem;
            margin-left: 1rem;
            color: black;
            background: white;
        }
    }
`;

export default SkillsSection;