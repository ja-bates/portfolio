import React from 'react';
import StarryBackground from './Components/StarryBackground';
import AboutMe from './Components/AboutMe';
import NavBar from './Components/Navbar';
import Projects from './Components/Projects';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  html, body {
    height: 100%; // Full height
    width: 100%; // Full width
    overflow: auto; 
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <div className="App">
        <StarryBackground />
        <AboutMe />
        <Projects />

        {/* Other components here */}
      </div>
    </>
  );
}

export default App;
