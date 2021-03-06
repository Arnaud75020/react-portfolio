import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem 5rem 10rem;
    color: white;
    @media (max-width: 1200px) {
            display: block;
            padding: 2rem;
            text-align: center;
        }
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
    .button-wrapper{
        display: flex;
        justify-content: space-between;
    }
    @media (max-width: 1200px) {
            padding: 3rem;
            .button-wrapper{
            @media (max-width: 1200px) {
                justify-content: space-evenly;
                text-align: center;
            }
            @media (max-width: 1200px) {
                padding: 3rem;
            }
            @media (max-width: 500px) {
            flex-direction: column;
            }
        }
            }
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2; 
    display:flex;
    justify-content: center;
    img {
        width: 70%;
        height: 60vh;
        object-fit: scale-down;
    }
    .video-anim {
        @media (max-width: 1200px) {
            display: none;
        }
    }
`;

export const Video = styled(Image)`
    @media (max-width: 1200px) {
        display: none;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;

export const Skills = styled(About)`
    background: #282828;
    min-height: 100vh;
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

export const SkillSection = styled(About)`
    background: #282828;
    min-height: auto;
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

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
        justify-content: center;
        }
`;

export const CardList = styled.div`
    min-width: 13rem;
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
    margin-bottom: 1.5rem;
    .skillsection-line {
        background: #23d997;
        height: 0.2rem;
        margin: 0.1rem 0rem 1.5rem 0rem;
        width: 40%;
    }
    @media (max-width: 1200px) {
        h3 {
            text-align: left;
        }
        }

`;

export const Card = styled.div`
    flex-basis: 2.1rem;
    .icon {
        display: flex;
        align-items: center;
        margin-right: 0.2rem;
        h5 {
            padding: 0.2rem;
            color: black;
            background: white;
        }
        img {
            margin-right: 0.5rem;
        }
    }
`;