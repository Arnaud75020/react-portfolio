import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        <StyledNav>
            <h1><Link id="logo" to="/">Portfolio</Link></h1>
            <ul>
                <li>
                    <Link to="/home">About me</Link>
                </li>
                <li>
                    <Link to="/">My work</Link>
                </li>
                <li>
                    <Link to="/#mySkills">My Skills</Link>
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
`;
 
export default Nav;