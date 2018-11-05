import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components/macro';

import CardHeader from './CardHeader';
import TeamInfo from './TeamInfo';
import GameTime from './GameTime';
import ScoreTable from './ScoreTable';
import Divider from './Divider';
import PlayerStatsSection from './PlayerStatsSection';

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
  margin-bottom: 5px;
`;

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
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
  scoreTable,
  index,
  selectedIndex,
  onSelect,
  stats = {},
}) => {
  const finished = status !== '3';
  let [cardOpen, toggleCardOpen] = useState(false);
  let [homeSelected, toggleDivider] = useState(true);

  const onCardClick = () => {
    toggleCardOpen(!cardOpen);
    onSelect(index);
  };

  useEffect(
    () => {
      if (selectedIndex !== index && cardOpen) {
        toggleCardOpen(!cardOpen);
      }
    },
    [selectedIndex],
  );

  const handleToggleOnClick = event => {
    event.stopPropagation();
    toggleDivider(!homeSelected);
  };

  const [cardHeightStyle] = useSpring({
    height: cardOpen ? 420 : 140,
    from: { height: 140 },
    config: config.stiff,
  });

  const [teamNameStyle] = useSpring({
    fontSize: cardOpen ? 15 : 24,
    from: { fontSize: 24 },
    config: config.stiff,
  });

  const [scoreStyle] = useSpring({
    fontSize: cardOpen ? 24 : 36,
    from: { fontSize: 36 },
    config: config.stiff,
  });

  const [scoreTableStyle] = useSpring({
    opacity: cardOpen ? 1 : 0,
    display: cardOpen ? 'inherit' : 'none',
    marginTop: 5,
    from: { opacity: 0, display: 'none' },
    config: config.stiff,
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
          home
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
          cardOpen={cardOpen}
          teamName={homeTeam}
          teamNameStyle={teamNameStyle}
          record={homeRecord}
          scoreStyle={scoreStyle}
          score={homeScore}
        />
        <CardCenter cardOpen={cardOpen}>
          <GameTime finished={finished} time={time} />
          <animated.div style={scoreTableStyle}>
            {scoreTable && <ScoreTable data={scoreTable} />}
          </animated.div>
        </CardCenter>
        <TeamInfo
          home={false}
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
          cardOpen={cardOpen}
          teamName={awayTeam}
          teamNameStyle={teamNameStyle}
          record={awayRecord}
          scoreStyle={scoreStyle}
          score={awayScore}
        />
      </CardContent>
      {cardOpen && (
        <Divider
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
        />
      )}
      {cardOpen && homeSelected && <PlayerStatsSection stats={stats.home} />}
      {cardOpen && !homeSelected && <PlayerStatsSection stats={stats.away} />}
    </CardWrapper>
  );
};

export default Card;
