import React from "react";
import styled from "styled-components";
const nyancat = require('./assets/nyancat.jpg')
const slingair = require('./assets/slingair.png')
const ProjectsSection = () => {

    return (
        <ProjectContainer id="projects">
            <h1>Projects</h1>
            <p>Here are the projects that I've been working on:</p>
            <ProjectLayout>
                <div><p>Nyan Cat Project</p><a href="https://github.com/PhilippeLoiseau7/project-js-nyan-cat"><img src={nyancat}/></a></div>
                <div><p>Sling Air Project</p><a href="https://github.com/PhilippeLoiseau7/project-slingair"><img src={slingair}/></a></div>
            </ProjectLayout>
        </ProjectContainer>
    )
}

export default ProjectsSection

const ProjectContainer = styled.div`
    text-align: center;
    gap: 2rem;
    padding: 1.5rem 0;
    padding-bottom: 3.5rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    @media(max-width: 840px) {
        width: 90%;
    }
    @media(max-width: 640px) {
        flex-direction: column;
        width: 90%;
    }

    p{

        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1.2rem;
        padding-bottom: 2rem;
    }
    
`

const ProjectLayout = styled.div`
    display: flex;
    justify-content: space-around;

    @media(max-width: 900px){
        display: flex;
        flex-direction: column;
    }
         

    div{

        text-align: center;

        p{
            padding-bottom: 20px;
            font-weight: bold;
        }
        
        img{
            border: #0582CA solid 7px;
            border-radius: 25px;
            width: 320px;
            height: 350px;
            border-radius: 30px;
            transition: 0.3s;
            &:hover{
                border: #00A6FB solid 7px;
                transform: scale(1.05);
            }
        }
    }

`