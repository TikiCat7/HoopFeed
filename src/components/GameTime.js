import React from 'react';
import styled, { css } from 'styled-components/macro';

const GameTimeWrapper = styled.div`
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  color: white;
  font-weight: 800;
  font-style: italic;
  transition: transform 0.3s ease-in-out;
  ${props =>
    props.cardOpen &&
    css`
      transform: translateY(-5px) translateX(-3px);
    `};
`;

const GameTime = ({ cardOpen, finished, time }) => {
  return (
    <GameTimeWrapper cardOpen={cardOpen}>
      {finished ? 'FINAL' : time}
    </GameTimeWrapper>
  );
};

export default GameTime;
