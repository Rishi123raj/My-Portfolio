import React from 'react'

import { Container, Wrapper, Title, Desc,ProjectDetail,Links } from './ProjectsStyle'



const Projects = ({openModal,setOpenModal}) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ProjectDetail>
        <h1><li>SNAKE GAME using HTML,CSS,javascript</li></h1>
        <h1><li>SPOTIFY CLONE using HTML,CSS,javascript</li></h1>
        <h1><li>GYM WEBSITE using react Js</li></h1>
        <h1><li>REGISTRATION FORM using node js,express js and mongoDb</li></h1>
        </ProjectDetail>
      </Wrapper>
    </Container>
  )
}

export default Projects