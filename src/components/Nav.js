import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return ( 
        <StyledNav>
            <h1><a id="logo" href="#">Portfolio</a></h1>
            <ul>
                <li>
                    <a href="">About me</a>
                </li>
                <li>
                    <a href="">My work</a>
                </li>
                <li>
                    <a href="">Contact me</a>
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
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.6rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 5rem;
        position: relative;
    }
`;
 
export default Nav;