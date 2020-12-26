import React from 'react';
import img1 from '../assets/images/img1.jpg'

const AboutSection = () => {
    return ( 
        <div>
            <div className="decription">
                <div className="title">
                    <div className="hide">
                        <h2>Welcome,</h2>
                    </div>
                    <div className="hide">
                        <h2>My name is <span>Arnaud</span></h2>
                    </div>
                    <div className="hide">
                        <h2>I'm a <span>javascript web developer</span></h2>
                    </div>
                </div>
                <p>Contact me for project inquiry</p>
                <button>Contact us</button>
            </div>
            <img src={img1} alt="blue sky"/>
        </div>
     );
}
 
export default AboutSection;