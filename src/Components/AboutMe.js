import React from 'react';
import styled from 'styled-components';
import CartoonJames from '../Assets/Ctoon2.png';

// Container for the entire section
const AboutMeSection = styled.section`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  box-sizing: border-box; // Ensures padding is included in height calculation
  //border-top: 2px solid white;
  //border-bottom: 20px solid #1e2430;
  //border: 1px dashed red;
`;

// Wrapper for the content with flex properties
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  flex-direction: row;
  //border: 1px dashed red;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Container for the image
const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px dashed red;
`;

// Styling for the image
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transition: width 0.3s ease, height 0.3s ease;
  //border: 1px dashed red;

  @media (min-width: 768px) and (max-width: 1000px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1001px) {
    width: 200px;
    height: 200px;
  }
`;

// Text container
const TextContainer = styled.div`
  flex-grow: 1;
  font-size: 1em;
  color: #1e2430;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: center;
  padding: 0 20px;
  width: 30%;
  //border: 1px dashed red;

  @media (max-width: 768px) {
    width: 80%
  }
`;

// Links container
const LinksContainer = styled.div`
  flex-grow: 1;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #1e2430;
  width: 30%;
  //border: 1px dashed red;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

// Individual link styling
const Link = styled.a`
  color: #1e2430;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;

  &:hover {
    color: #2b436a;
    text-decoration-color: #2b436a;
  }
`;

const AboutMe = () => (
  <AboutMeSection>
    <ContentWrapper>
      <ImageContainer>
        <ProfileImage src={CartoonJames} alt="Profile Picture" />
      </ImageContainer>
      <TextContainer>
        <p>Hi I'm James.</p>
        <p>I'm an Engineer by 🌞 </p>
        <p>and an Engineer by 🌚 </p>
      </TextContainer>
      <LinksContainer>
        <Link href="https://drive.google.com/file/d/19zndV6MYS1ZSPoO1rBgFV8ivwLhPOc_b/view?usp=sharing">Resume</Link>
        <Link href="https://github.com/ja-bates">GitHub</Link>
        <Link href="https://www.linkedin.com/in/j4bates/">LinkedIn</Link>
      </LinksContainer>
    </ContentWrapper>
  </AboutMeSection>
);

export default AboutMe;
