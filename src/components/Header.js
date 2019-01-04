import React from 'react';
import styled from 'styled-components/macro';

import Hamburger from './Hamburger';
import { ReactComponent as Ball } from '../images/ball.svg';

const HeaderWrapper = styled.div`
  user-select: none;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const Title = styled.span`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 20px;
`;

const SubTitle = styled.span`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 8px;
  margin-left: 3px;
`;

const BallWrapper = styled.div`
  margin: 10px;
`;

const Header = ({ toggleOptionsOverlay, showOptionsOverlay }) => {
  const handleClick = () => {
    toggleOptionsOverlay(!showOptionsOverlay);
  };
  return (
    <HeaderWrapper>
      <LogoWrapper href="https://hoopfeed.io">
        <BallWrapper>
          <Ball />
        </BallWrapper>
        <div>
          <Title>HOOPFEED</Title>
          <SubTitle>BETA</SubTitle>
        </div>
      </LogoWrapper>
      <Hamburger handleClick={handleClick} />
    </HeaderWrapper>
  );
};

export default Header;
