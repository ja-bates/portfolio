import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 20px 40px;
  font-size: 18px;
  color: ${props => (props.color ? '#000' : 'white')};
  background-color: ${props => (props.color ? 'white' : 'transparent')};
  transition: background-color 0.3s, color 0.3s;
  z-index: 10;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;

  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 20px;
  }
`;

const NavLink = styled.div`
  margin-right: 30px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  width: 30px;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 100%;
    background-color: ${props => (props.color ? '#000' : 'white')};
    margin-bottom: 5px;
    border-radius: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #000;
  border-radius: 5px;
  padding: 10px;
  width: 150px;

  ${NavLink} {
    display: block;
    margin: 10px 0;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer color={color}>
      <NavLink>PROJECTS</NavLink>
      <NavLink>ABOUT</NavLink>
      <MenuIcon color={color} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
      {isOpen && (
        <MobileMenu>
          <NavLink onClick={() => setIsOpen(false)}>PROJECTS</NavLink>
          <NavLink onClick={() => setIsOpen(false)}>ABOUT</NavLink>
        </MobileMenu>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
