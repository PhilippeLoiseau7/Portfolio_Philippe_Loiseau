import Navbar from "./components/Navbar"
import styled from "styled-components"
import HeroSection from "./components/HeroSection"
import AboutMeSection from "./components/AboutMeSection"
import ProjectsSection from "./components/ProjectsSection"


const App = () => {
    return (
        <Container>
            <Banner>
              <Navbar/>  
              <HeroSection/>
            </Banner>
        <AboutMeSection/>
            <ProjectContainer>
                <ProjectsSection/>
            </ProjectContainer>
        </Container>
    )
}

const Container = styled.div`
`
const Banner = styled.div`
    background-color: #003554;
    height: 100%;
    @media(max-width: 640px){
        padding-bottom: 2rem;
    }
`

const ProjectContainer = styled.div`
    background-color: #003554;
`
export default App

