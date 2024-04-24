import React from "react"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const HeroSection = () => {
    return (
        <HeroSectionDiv>
            <HeroTextSection>
                <h4>Hi my name is</h4>
                <h1>Philippe Loiseau</h1>
                <h3>Full-Stack Developer</h3>
                <p> 
                    Whether it's creating seamless user experiences with HTML, CSS, and JavaScript on the frontend, or architecting robust APIs and databases with Node.js, Express, and MongoDB on the backend, I thrive on turning visions into reality.
                </p>
                <button>Contact Me</button>
                <SocialMediaLinks>
                    <div className="socialMediaLogos">
                    <span><a href="https://github.com/PhilippeLoiseau7"><FaGithub/></a></span>
                    <span><a href="#"><FaLinkedin/></a></span>
                    </div>
                </SocialMediaLinks>
            </HeroTextSection>
            <ProfilePicture>
                <img 
                src="https://avatars.githubusercontent.com/u/146680995?v=4" alt="picture of Philippe Loiseau"/>
            </ProfilePicture>
        </HeroSectionDiv>
    )
}

const HeroSectionDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem
    padding: 1.5rem 0;
    padding-bottom: 3.5rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-between
    @media(max-width: 840px) {
        width: 90%;
    }
    @media(max-width: 640px) {
        flex-direction: column;
        width: 90%;
    }
    
`
const HeroTextSection = styled.div`
    flex: 1;
    h4 {
        padding: 1rem 0;
        font-weight: 500;
    }
    h1 {
        font-size: 2rem;
        letter-spacing 2px; 
    }
    h3 {
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;
    }
    p {
        font-weight: 400;
    }

    button {
        padding: 0.7rem 2rem;
        margin-top: 3rem;
        cursor: pointer;
        background-color: #0582CA ;
        border: none;
        color: #fff;
        font-weight: 500;
        border-radius: 20px;
        &:hover{
            background-color: #00A6FB;
        }
    }
`
const SocialMediaLinks = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 1rem;

    p{
        font-size: 0.9rem;
        @media(max-width: 790px){
            font-size: 0.7rem;
        }
    }

    .socialMediaLogos{
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
            width: 2.5rem;
            height: 2.5rem;
            clip-path: circle(50% at 50% 50%);
            background-color:#0582CA;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center; 
            overflow: hidden;
            &:hover{
                background-color: #00A6FB;
            }
        }

        a{
            color: #051923;
            margin-top: 5px;
            
        }


    }
`
const ProfilePicture = styled.div`
    left: 50PX;
    img{
    width: 22rem;
    clip-path: circle(50% at 50% 50%);
    @media(max-width: 790px){
        width:20rem;
    }
    @media(max-width: 660px){
        width:18rem;
    }
    @media(max-width: 640px){
        width:16rem;
    }
    @media(max-width: 1020px){
        width:21rem;
    }

    }

`
export default HeroSection