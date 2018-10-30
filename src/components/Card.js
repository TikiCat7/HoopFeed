import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components/macro';

import CardHeader from './CardHeader';
import TeamInfo from './TeamInfo';
import GameTime from './GameTime';

const CardWrapper = styled(animated.div)`
  user-select: none;
  height: 150px;
  color: white;
  background-color: #1e1e1e;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 330px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  awayRecord,
  index,
  selectedIndex,
  onSelect
}) => {
  const finished = status !== '3';
  let [cardOpen, toggleCardOpen] = useState(false);
  let [cardHeight, setCardHeight] = useState(140);
  let [teamFontSize, setTeamFontSize] = useState(24);
  let [scoreFontSize, setScoreFontSize] = useState(36);

  const onCardClick = () => {
    toggleCardOpen(!cardOpen);
    setCardHeight(cardOpen ? 140 : 300);
    setTeamFontSize(cardOpen ? 24 : 15);
    setScoreFontSize(cardOpen ? 36 : 24);
    onSelect(index);
  };

  useEffect(
    () => {
      if (selectedIndex !== index && cardOpen) {
        toggleCardOpen(!cardOpen);
        setCardHeight(140);
        setTeamFontSize(24);
        setScoreFontSize(36);
      }
    },
    [selectedIndex]
  );

  const [cardHeightStyle] = useSpring({
    height: cardHeight,
    from: { height: 140 },
    config: config.stiff
  });
  const [teamNameStyle] = useSpring({
    fontSize: teamFontSize,
    from: { fontSize: teamFontSize },
    config: config.stiff
  });
  const [scoreStyle] = useSpring({
    fontSize: scoreFontSize,
    from: { fontSize: scoreFontSize },
    config: config.stiff
  });
  return (
    <CardWrapper style={cardHeightStyle} onClick={onCardClick}>
      <CardHeader
        finished={finished}
        cardOpen={cardOpen}
        highlights={highlights}
      />
      <CardContent>
        <TeamInfo
          teamName={homeTeam}
          teamNameStyle={teamNameStyle}
          record={homeRecord}
          scoreStyle={scoreStyle}
          score={homeScore}
        />
        <GameTime cardOpen={cardOpen} finished={finished} time={time} />
        <TeamInfo
          teamName={awayTeam}
          teamNameStyle={teamNameStyle}
          record={awayRecord}
          scoreStyle={scoreStyle}
          score={awayScore}
        />
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
