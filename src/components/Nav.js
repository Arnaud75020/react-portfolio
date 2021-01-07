import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {motion} from 'framer-motion';
import { useLocation } from "react-router-dom";


const Nav = () => {

    const { pathname } = useLocation();

    return ( 
        <StyledNav>
            <h1><HashLink 
                id="logo" 
                to="/" 
                onClick={() =>  window.scroll({top: 0, left: 0,})}
                >Portfolio
                </HashLink>
            </h1>
            <ul>
                <li>
                    <HashLink smooth to="/#aboutMe">About me</HashLink>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/work" onClick={() =>  window.scroll({top: 0, left: 0,})}>My work</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/work" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contact">Contact me</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                    />
                </li>
            </ul>
        </StyledNav>
     );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
        &:hover{
            color: #23d997;
        }
        transition: 0.4s ease; 
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.4rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 5rem;
        position: relative;
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        padding: 1rem 1rem;
        #logo {
            display: inline-block;
            margin: 2rem;
        }
        ul {
            padding: 1rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 5%;
    position: absolute;
    bottom: -50%;
    left: 50%;
    width: 0%;
    @media (max-width: 1200px) {
    left: 0%;
  }
`;
 
export default Nav;