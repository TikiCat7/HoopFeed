import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { formatDate, splitDate } from '../util/date';
import AppContext from '../context/AppContext';
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

const Arrow = styled.span`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 20px;
  vertical-align: middle;
`;

const DateStyle = styled.span`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Calednarwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const { matchDate, setMatchDate, togglePerformersList } = useContext(
    AppContext,
  );
  const adjustedDate = direction => {
    return new Date(
      matchDate.setTime(matchDate.getTime() - 1 * direction * 86400000),
    );
  };
  const handleDateClick = () => {
    togglePerformersList(false);
    setMatchDate(adjustedDate(1));
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
      <Calednarwrapper>
        <Arrow onClick={() => handleDateClick(1)}>←</Arrow>
        <DateStyle>{splitDate(formatDate(matchDate))}</DateStyle>
        <Arrow onClick={() => handleDateClick(-1)}>→</Arrow>
      </Calednarwrapper>
      <Hamburger />
    </HeaderWrapper>
  );
};

export default Header;
