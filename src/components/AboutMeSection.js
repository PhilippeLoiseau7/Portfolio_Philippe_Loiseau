import React from "react";
import styled from "styled-components";
import { FaBasketball } from "react-icons/fa6";
import { CgGames } from "react-icons/cg";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaKeyboard } from "react-icons/fa";



const AboutMeSection = () => {
    return (
        <AboutMeContainer>
           <h1><span>About Me</span></h1>
           <AboutMeText> 
            <p> 
            I'm a dedicated full-stack web developer with a passion for learning and growth. 
            When I'm not coding, you can find me shooting hoops on the basketball court, watching new shows, or immersing myself in the latest video game releases. 
            My expertise lies in crafting elegant digital solutions, blending frontend finesse with backend robustness. 
            I thrive on challenges and am always eager to expand my skill set to tackle new and exciting projects 
            </p> 
            </AboutMeText>
            <AboutMeLogos>
                <div className="hobbyLogos">
                    <span><KeyboardIcon /></span>
                    <span><BasketballIcon /></span>
                    <span><GamingIcon /></span>
                    <span><TelevisionIcon /></span>
                </div>
            </AboutMeLogos>
        </AboutMeContainer>
    )
}

export default AboutMeSection

const AboutMeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem
padding: 1.5rem 0;
padding-bottom: 6.5rem;
padding-top: 6.5rem;
width: 80%;
max-width: 1280px;
margin: auto;
justify-content: space-between;
@media(max-width: 840px) {
    width: 90%;
}
@media(max-width: 640px) {
    flex-direction: column;
    width: 90%;
}
`
const AboutMeText = styled.div`
padding-top: 3.5rem;
font-weight: 400;
`
const AboutMeLogos = styled.div`
padding-top: 3.5rem;
.hobbyLogos{
    span{
      padding: 0 60px;
      @media(max-width: 640px) {
        display: flex;
        flex-direction: row;
        padding: 0 45px;
    }
    @media(max-width: 1050px) {
       
        padding: 0 25px;
    }

    }
    @media(max-width: 640px) {
        display: flex;
    }
}
`
const BasketballIcon = styled(FaBasketball)`
  font-size: 60px;
  @media (max-width: 1050px) {
    font-size: 50px;
  }
  @media (max-width: 640px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
  `
const KeyboardIcon = styled(FaKeyboard)`
  font-size: 60px;
  @media (max-width: 1050px) {
    font-size: 50px;
  }
  @media (max-width: 640px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
 `
const GamingIcon = styled(CgGames)`
  font-size: 60px;
    @media (max-width: 1050px) {
    font-size: 50px;
    }
    @media (max-width: 640px) {
    font-size: 40px;
    }
    @media (max-width: 450px) {
    font-size: 30px;
    }
  `
const TelevisionIcon = styled(PiTelevisionSimpleBold)`
  font-size: 60px;
   
  @media (max-width: 1050px) {
    font-size: 50px;
  }
  @media (max-width: 640px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
  
  `