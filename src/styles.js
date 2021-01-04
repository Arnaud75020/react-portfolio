import styled from 'styled-components';

export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem 5rem 10rem;
    color: white;
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 70%;
        height: 60vh;
        object-fit: cover;

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

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CardList = styled.div`
    min-width: 13rem;
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
    margin-bottom: 1.5rem;
    h3 {
        
        }
    .skillsection-line {
        background: #23d997;
        height: 0.2rem;
        margin: 0.1rem 0rem 1.5rem 0rem;
        width: 40%;
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