import React from 'react';
import styled, { css } from 'styled-components/macro';

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

const LiveIndicator = styled.span`
  text-transform: uppercase;
  color: #d0021b;
  font-size: 10px;
  font-weight: 800;
  margin-left: 10px;
`;

const HighLights = styled.div`
  margin-left: -28px;
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
  line-height: 1.5;
  transition: transform 0.4s ease-out;
  ${props =>
    props.cardOpen &&
    css`
      transform: translateY(16px) translateX(-3px);
    `};
`;

const CardHeader = ({ finished, highlights, cardOpen }) => {
  return (
    <CardHeaderWrapper>
      <HeaderItem>
        {!finished && <LiveIndicator>Live</LiveIndicator>}
      </HeaderItem>
      <HeaderItem>
        {highlights && <HighLights cardOpen={cardOpen}>Highlights</HighLights>}
      </HeaderItem>
    </CardHeaderWrapper>
  );
};

export default CardHeader;
