import React from 'react';
import styled from 'styled-components/macro';

import Hamburger from './Hamburger';

import { ReactComponent as Ball } from '../images/ball.svg';

let HeaderWrapper = styled.div`
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

let LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

let Title = styled.span`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 20px;
`;

let BallWrapper = styled.div`
  margin: 10px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <BallWrapper>
          <Ball />
        </BallWrapper>
        <Title>HOOPFEED</Title>
      </LogoWrapper>
      <Hamburger />
    </HeaderWrapper>
  );
};

export default Header;
