import React from 'react';
import styled from 'styled-components/macro';

const GameTimeWrapper = styled.div`
  min-width: 60px;
  font-family: 'SF-Pro-Medium';
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  color: white;
  font-weight: 800;
  transition: transform 0.3s ease-in-out;
`;

const Final = styled.span`
  font-family: 'Fugaz One', cursive;
`;

const GameTime = ({ time }) => {
  return (
    <GameTimeWrapper>
      <Final>{time}</Final>
    </GameTimeWrapper>
  );
};

export default GameTime;
