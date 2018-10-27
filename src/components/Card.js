import React from 'react';
import styled from 'styled-components/macro';

const CardWrapper = styled.div`
  color: white;
  background-color: #1e1e1e;
  border-radius: 10px;
  margin-left: 37px;
  margin-right: 37px;
  margin-bottom: 20px;

  &:first-child {
    margin-top: 20px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border-width: 1px;
  border-color: salmon;
  border-style: solid; */
`;

const TeamInfo = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  /* border-width: 1px;
  border-color: salmon;
  border-style: solid; */
  max-width: 110px;

  &:last-child {
    margin-right: 20px;
    margin-left: 0px;
  }
`;

const TeamName = styled.span`
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 28px;
  color: white;
  text-transform: uppercase;
`;

const Score = styled.span`
  font-family: 'Fugaz One';
  font-size: 36px;
  color: white;
`;

const TeamRecord = styled.span`
  font-family: 'Fugaz One', cursive;
  color: #848181;
  font-size: 10px;
`;

const HighLights = styled.div`
  /* position: relative; */
  /* display: block; */
  border-width: 2px;
  border-style: solid;
  border-color: #7af1ba;
  min-width: 61px;
  height: 12px;
  border-radius: 4px;
  font-family: 'Fugaz one', cursive;
  text-transform: uppercase;
  font-size: 8px;
  color: #7af1ba;
  text-align: center;
  line-height: 1.7;
`;

const Card = ({
  matchId,
  homeTeam,
  awayTeam,
  status,
  time,
  homeScore,
  awayScore,
  highlights,
  homeRecord,
  awayRecord
}) => {
  return (
    <CardWrapper>
      <CardContent>
        <TeamInfo>
          <TeamName>{homeTeam}</TeamName>
          <TeamRecord>{homeRecord}</TeamRecord>
          <Score>{homeScore}</Score>
        </TeamInfo>
        <HighLights>Highlights</HighLights>
        <TeamInfo>
          <TeamName>{awayTeam}</TeamName>
          <TeamRecord>{awayRecord}</TeamRecord>
          <Score>{awayScore}</Score>
        </TeamInfo>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
