import React from 'react';
import styled, { css, keyframes } from 'styled-components/macro';

const CardHeaderWrapper = styled.div`
  min-height: 16px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const pulse = keyframes`
    0% { transform: scale(1); }
    30% { transform: scale(1.05); }
    40% { transform: scale(1.1); }
    50% { transform: scale(1.15); }
    60% { transform: scale(1.1); }
    70% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const LiveIndicator = styled.span`
  text-transform: uppercase;
  color: #d0021b;
  font-size: 10px;
  font-weight: 800;
  margin-left: 10px;
  background-color: #fc3636;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: 0 0 5px 1px #ee2a2aa3;
  animation: ${pulse} 3s ease-in-out infinite;
`;

const HighLights = styled.div`
  margin-left: -25px;
  border-width: 1px;
  border-style: solid;
  border-color: #7af1ba;
  min-width: 55px;
  height: 10px;
  border-radius: 5px;
  font-family: 'Fugaz one', cursive;
  text-transform: uppercase;
  font-size: 8px;
  color: #7af1ba;
  text-align: center;
  line-height: 1.4em;
  transition: transform 0.4s ease-out;
  ${props =>
    props.cardOpen &&
    css`
      transform: translateY(16px) translateX(-3px);
    `};
`;

const Caret = styled.div`
  color: white;
  font-size: 12px;
  padding-right: 10px;
  padding-left: 10px;
  transition: transform 0.3s ease-in-out;
  ${props =>
    props.cardOpen &&
    css`
      transform: rotate(180deg);
    `};

  &::after {
    content: '▼';
  }
`;

const CardHeader = ({ statusNum, highlights, cardOpen }) => {
  return (
    <CardHeaderWrapper statusNum={statusNum}>
      <HeaderItem>{statusNum === 2 && <LiveIndicator />}</HeaderItem>
      <HeaderItem>
        {false && <HighLights cardOpen={cardOpen}>Highlights</HighLights>}
      </HeaderItem>
      {statusNum !== 1 && <Caret cardOpen={cardOpen} />}
    </CardHeaderWrapper>
  );
};

export default CardHeader;
