import React from 'react';
import codevideo from '../assets/videos/codevideo.mp4';
import CSS from '../assets/icons/CSS.svg';
import HTML from '../assets/icons/HTML.svg';
import JS from '../assets/icons/JS.svg';
import ReactJs from '../assets/icons/ReactJs.svg';
import nodejs from '../assets/icons/nodejs.svg';


const SkillsSection = () => {
    return ( 
        <div className="services">
            <div className="description">
                <h2>My <span>projects</span></h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={HTML} alt="icon"/>
                            <h3>HTML</h3>
                        </div>
                        <p>short description of skill</p>
                    </div>                    
                    <div className="card">
                        <div className="icon">
                            <img src={CSS} alt="icon"/>
                            <h3>CSS</h3>
                        </div>
                        <p>short description of skill</p>
                    </div>                    
                    <div className="card">
                        <div className="icon">
                            <img src={JS} alt="icon"/>
                            <h3>Javascript</h3>
                        </div>
                        <p>short description of skill</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={ReactJs} alt="icon"/>
                            <h3>ReactJS</h3>
                        </div>
                        <p>short description of skill</p>
                    </div>
                </div>
            </div>
            <div className="video">
                <video width="400" autoPlay loop muted>
                    <source src={codevideo} type='video/mp4' />
                </video>
            </div>
        </div>
     );
}
 
export default SkillsSection;