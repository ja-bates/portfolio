// Projects.js
import React from 'react';
import styled from 'styled-components';
import HelpfulNeighbor from '../Assets/HelpfulNeighbor2.png';
import Portfolio from '../Assets/Portfolio3.png';
import FeelScript from '../Assets/FeelScript3.png';

const ProjectsSection = styled.section`
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-style: normal;
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 60px;
  font-size: 2em;
  color: #1e2430;
  font-weight: 800;
  border-bottom: 1px solid #1e2430;
`;

const ProjectsGrid = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #1e2430;
`;

const ProjectCard = styled.div`
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  width: calc(33.333% - 40px); /* Adjust for gap */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 200px; /* Fixed height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hide overflow to maintain aspect ratio */
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  font-weight: 300;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #1e2430;
  font-weight: 300;
`;

const ProjectLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-grow: 1;
`;

const ProjectLink = styled.a`
  color: #1e2430;
  text-decoration: underline;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`;

const HighlightSkills = styled.span`
    //color: #007bff;
    color: #A9A9A9;
    //font-style: italic;
`;

const projectsData = [
    {
    image: Portfolio,
    title: 'Portfolio',
    description: 'Personal website.',
    description2: 'React.js, Figma',
    Link1Name: 'Source',
    siteLink: '',
    Link2Name: '',
    sourceLink: '#'
    },
    {
    image: FeelScript,
    title: 'FeelScript',
    description: 'Real-time text to braille translation.',
    description2: "Python, Swift, Arduino, SolidWorks",
    Link1Name: 'Demo',
    siteLink: 'https://drive.google.com/file/d/14p6ltZfyIpUeTcIuuK7qTc_GWzm7uP2a/view?usp=sharing',
    Link2Name: 'Source',
    sourceLink: '#'
    },
    {
    image: HelpfulNeighbor,
    title: 'Helpful Neighbor',
    description: "A non-profit grocery delivery service.",
    description2: "React.js, Figma",
    Link1Name: 'Site',
    siteLink: 'https://helpfulneighbor-client.firebaseapp.com/',
    Link2Name: 'Source',
    sourceLink: 'https://github.com/ja-bates/HelpfulNeighbor'
    },
    {
        image: HelpfulNeighbor,
        title: 'Helpful Neighbor',
        description: "A non-profit grocery delivery service.",
        description2: "React.js, Figma",
        Link1Name: 'Site',
        siteLink: 'https://helpfulneighbor-client.firebaseapp.com/',
        Link2Name: 'Source',
        sourceLink: 'https://github.com/ja-bates/HelpfulNeighbor'
    }
];

const Projects = () => (
  <ProjectsSection>
    <ProjectsWrapper>
      <Title>PROJECTS</Title>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImageWrapper>
              <ProjectImage src={project.image} alt={project.title} />
            </ProjectImageWrapper>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectDescription><HighlightSkills>{project.description2}</HighlightSkills></ProjectDescription>
            <ProjectLinks>
              <ProjectLink href={project.siteLink}>{project.Link1Name}</ProjectLink>
              <ProjectLink href={project.sourceLink}>{project.Link2Name}</ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  </ProjectsSection>
);

export default Projects;
