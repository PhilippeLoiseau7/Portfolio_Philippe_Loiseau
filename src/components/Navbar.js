import React from "react"
import styled from "styled-components"
import { FiBriefcase } from "react-icons/fi";
import { useState } from "react";


const Navbar = () => {
        const [bar, setBar] = useState(false);

    return (
        <StyledContainer bar={bar}>
            <PortfolioLogo>
               <span> <FiBriefcase/> </span> 
               <h1>MyPortfolio</h1>
            </PortfolioLogo>
            <Nav bar={bar}>
                <span><a href="#">Home</a></span>
                <span><a href="#">About Me</a></span>
                <span><a href="#">Projects</a></span>
                <span><a href="#">Contact</a></span>
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
    padding: 1.5rem 0; /* Corrected */
    
    @media(max-width: 763px) {
        width: 90%;
    }

    .bars {
        display: none;
    }

    @media(max-width: 640px) {
        .bars {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            .bar {
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};

                &::before,
                &::after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff; 
                    position: absolute;
                }

                &::before {
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};                   
                }

                &::after {
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};  
                }
            }
        }
    }
`;
const PortfolioLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
        color: #0582CA;
    }

    h1 {
        font-weight: 600;
        font-size: 1.2rem
    }
`
const Nav = styled.div`
    @media (max-width: 640px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #00A6FB;
        top:0;
        right:0;
        left: 0;
        bottom:0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        overflow: hidden;
        z-index: 99; 
    }
    span {
        margin-left: 1rem;
        a {
            color: #0582CA;
            text-decoration: none;
            font-weight: 400;
            position: relative;
        }
        :hover {
            color: #00A6FB;
        }
        @media(max-width: 640px){
            :hover {
                color: #fff;
        }
    }

`

export default Navbar