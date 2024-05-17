import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
    //color: #1e2122;
    color: white;
    font-size: 6em;
    letter-spacing: 5px;
    z-index: 10;
    //text-shadow: #3d85c6 1px 0 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;

    @media (max-width: 768px) {
        font-size: 3em; // Adjust this value to fit mobile screens
    }

`;

const HighlightText = styled.span`
    font-weight: 500; // Font-weight for BATES
`;

const Title = () => (
  <TitleText>
    JAMES<HighlightText>BATES</HighlightText>
  </TitleText>
);

export default Title;