import React from 'react';
import beachobsurfer from '../assets/images/beach-obsurfer.png';
import getmyrecipe from '../assets/images/getmyrecipe.png';
import medoclock1 from '../assets/images/med-oclock1.png';
import medoclock2 from '../assets/images/med-oclock2.png';
import musicplayer from '../assets/images/music-player.png';
import productized from '../assets/images/productized.png';
import veganlisbon1 from '../assets/images/veganlisbon1.png';
import veganlisbon2 from '../assets/images/veganlisbon2.png';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';


const MyWork = () => {
    return ( 
        <Work>
            <Movie>
                <h2>Music Player</h2>
                <div className="line"></div>
                <Link to="">
                    <img src={musicplayer} alt="music player"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Productized - Event App Managment</h2>
                <div className="line"></div>
                <Link to="">
                    <img src={productized} alt="productized"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Med O'Clock</h2>
                <div className="line"></div>
                <Link to="">
                    <img src={medoclock1} alt="med o'clock"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Vegan Lisbon</h2>
                <div className="line"></div>
                <Link to="">
                    <img src={veganlisbon1} alt="vegan lisbon"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Get my recipe</h2>
                <div className="line"></div>
                <Link to="">
                    <img src={getmyrecipe} alt="get my recipe"/>
                </Link>
            </Movie>
        </Work>
     );
}

const Work = styled.div`
    background: white;
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem; 
    h2 {
        padding: 1rem 0rem;
    }
`;
const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
            width: 100%;
            height: 70vh;
            object-fit: cover;
        }
`;
 
export default MyWork;