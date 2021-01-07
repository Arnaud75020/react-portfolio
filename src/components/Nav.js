import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Nav = () => {
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
                </li>
                <li>
                    <Link to="/work" onClick={() =>  window.scroll({top: 0, left: 0,})}>My work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact me</Link>
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
 
export default Nav;