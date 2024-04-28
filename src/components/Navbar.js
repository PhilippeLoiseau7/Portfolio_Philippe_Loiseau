import React from "react"
import styled from "styled-components"
import { FiBriefcase } from "react-icons/fi";
import { useState } from "react";
import {Link} from "react-scroll"


const Navbar = () => {

    return (
        <StyledContainer id="home">
            <PortfolioLogo>
               <span> <FiBriefcase/> </span> 
               <h1>MyPortfolio</h1>
            </PortfolioLogo>
            <Nav>
                <span><Link to="home" spy={true} smooth={true} offset={0} duration={500} >Home </Link> </span>
                <span><Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link> </span>
                <span><Link to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link> </span>
                <span><Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link> </span>
            </Nav>
            <div 
            onClick={() => setBar(!bar)}
            className="bars"> 
                <div className="bar"></div>
            </div>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;

    @media (max-width: 763px) {
        width: 90%;
    }

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

const PortfolioLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
        font-size: 1.8rem;
        color: #0582CA;
    }

    h1 {
        font-weight: 600;
        font-size: 1.2rem;
    }
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    @media (max-width: 640px) {
        margin: 0;
        margin-top: 1rem;
        flex-direction: column; 
        align-items: flex-start;
    }

    span {
        margin-left: 1rem;
        a {
            color: #0582CA;
            text-decoration: none;
            font-weight: 400;
            font-size: 1.2rem;
        }
        :hover {
            color: #00A6FB;
            cursor: pointer;
        }
    }
`;
export default Navbar