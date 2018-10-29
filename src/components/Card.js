import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled, { css } from 'styled-components/macro';

const CardWrapper = styled(animated.div)`
  user-select: none;
  height: 150px;
  color: white;
  background-color: #1e1e1e;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 300px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TeamInfo = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
  min-width: 110px;

  &:last-child {
    margin-left: 0px;
    margin-right: 20px;
  }
`;

const TeamName = styled(animated.div)`
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
`;

const Score = styled(animated.span)`
  font-family: 'Fugaz One';
  color: white;
`;

const TeamRecord = styled.span`
  font-family: 'Fugaz One', cursive;
  color: #848181;
  font-size: 10px;
  margin-top: 5px;
`;

const HighLights = styled.div`
  margin-left: -33px;
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
  transition: transform 0.4s ease-out;
  ${props =>
    props.cardOpen &&
    css`
      transform: translateY(16px) translateX(-3px);
    `};
`;

const CardHeader = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const CardHeaderArea = styled.div`
  min-height: 16px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const LiveIndicator = styled.span`
  text-transform: uppercase;
  color: rgb(195, 39, 32);
  font-size: 12px;
  font-weight: 800;
  margin-left: 10px;
`;

const GameTime = styled.div`
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
      transform: translateY(-15px);
    `};
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
  const Finished = status !== '3';
  let [cardOpen, toggleCardOpen] = useState(false);
  let [cardHeight, setCardHeight] = useState(150);
  let [teamFontSize, setTeamFontSize] = useState(28);
  let [scoreFontSize, setScoreFontSize] = useState(36);

  const onCardClick = () => {
    toggleCardOpen(!cardOpen);
    setCardHeight(cardOpen ? 150 : 300);
    setTeamFontSize(cardOpen ? 28 : 15);
    setScoreFontSize(cardOpen ? 36 : 24);
  };
  const [cardHeightStyle] = useSpring({
    height: cardHeight,
    from: { height: 150 },
    config: config.gentle,
    native: true
  });
  const [teamNameStyle] = useSpring({
    fontSize: teamFontSize,
    from: { fontSize: teamFontSize },
    native: true
  });
  const [scoreStyle] = useSpring({
    fontSize: scoreFontSize,
    from: { fontSize: scoreFontSize },
    native: true
  });
  return (
    <CardWrapper style={cardHeightStyle} onClick={onCardClick}>
      <CardHeaderArea>
        <CardHeader>
          {!Finished && <LiveIndicator>Live</LiveIndicator>}
        </CardHeader>
        <CardHeader>
          {highlights && (
            <HighLights cardOpen={cardOpen}>Highlights</HighLights>
          )}
        </CardHeader>
      </CardHeaderArea>
      <CardContent>
        <TeamInfo>
          <TeamName style={teamNameStyle}>{homeTeam}</TeamName>
          <TeamRecord>{homeRecord}</TeamRecord>
          <Score style={scoreStyle}>{homeScore}</Score>
        </TeamInfo>
        <GameTime cardOpen={cardOpen}>{Finished ? 'FINAL' : time}</GameTime>
        <TeamInfo>
          <TeamName style={teamNameStyle}>{awayTeam}</TeamName>
          <TeamRecord>{awayRecord}</TeamRecord>
          <Score style={scoreStyle}>{awayScore}</Score>
        </TeamInfo>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
