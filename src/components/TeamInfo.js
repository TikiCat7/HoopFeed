import React from 'react';
import styled from 'styled-components/macro';
import { animated } from 'react-spring';

const TeamInfoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 110px;
`;

const TeamName = styled(animated.div)`
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
`;

const Score = styled(animated.span)`
  font-family: 'Fugaz One', cursive;
  color: white;
`;

const TeamRecord = styled.span`
  font-family: 'SF-Pro-Heavy';
  color: #848181;
  font-size: 10px;
  margin-top: 5px;
`;

const TeamInfo = ({ teamName, teamNameStyle, record, scoreStyle, score }) => {
  return (
    <TeamInfoWrapper>
      <TeamName style={teamNameStyle}>{teamName}</TeamName>
      <TeamRecord>{record}</TeamRecord>
      <Score style={scoreStyle}>{score}</Score>
    </TeamInfoWrapper>
  );
};

export default TeamInfo;
