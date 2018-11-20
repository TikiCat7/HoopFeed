import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { formatDate, splitDate } from '../util/date';
import AppContext from '../context/AppContext';
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

let LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
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

let Arrow = styled.p`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 20px;
`;

let DateStyle = styled.p`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 14px;
`;

const Header = () => {
  const { matchDate, setMatchDate } = useContext(AppContext);
  const adjustedDate = direction => {
    return new Date(
      matchDate.setTime(matchDate.getTime() - 1 * direction * 86400000),
    );
  };
  return (
    <HeaderWrapper>
      <LogoWrapper href="https://hoopfeed.io">
        <BallWrapper>
          <Ball />
        </BallWrapper>
        <Title>HOOPFEED</Title>
      </LogoWrapper>
      <Arrow onClick={() => setMatchDate(adjustedDate(1))}>←</Arrow>
      <DateStyle>{splitDate(formatDate(matchDate))}</DateStyle>
      <Arrow onClick={() => setMatchDate(adjustedDate(-1))}>→</Arrow>
      <Hamburger />
    </HeaderWrapper>
  );
};

export default Header;
