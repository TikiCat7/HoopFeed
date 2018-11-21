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
  hTeamId,
  vTeamId,
  startTimeUTC,
  hTeamName,
  vTeamName,
  statusNum,
  hTeamScore,
  vTeamScore,
  hTeamRecordFormatted,
  vTeamRecordFormatted,
  hTeamQScore,
  vTeamQScore,
  index,
  selectedIndex,
  onSelect,
  currentPeriod,
  gameClock,
  isHalfTime,
  isEndofPeriod,
  matchStats = [],
  youtubevideos = [],
}) => {
  let [cardOpen, toggleCardOpen] = useState(false);
  let [homeSelected, toggleDivider] = useState(true);
  const onCardClick = () => {
    if (statusNum === 1) return;
    toggleCardOpen(!cardOpen);
    onSelect(index, youtubevideos);
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

  const sortMatchStats = (matchstats, teamId) => {
    return matchStats.filter(stat => stat.player.teamId === teamId);
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

  const formatTime = (
    currentPeriod,
    gameClock,
    statusNum,
    isHalfTime,
    isEndOfPeriod,
  ) => {
    if (statusNum === 3) {
      return 'FINAL';
    } else if (isHalfTime) {
      return 'HALF TIME';
    } else if (isEndOfPeriod) {
      return `END OF Q${currentPeriod}`;
    } else if (statusNum === 1) {
      return `${new Date(parseInt(startTimeUTC)).getHours()}:00`;
      // sometimes nba api is slow to update a match has finished, leaving statusNum at 2 and gameClock null X_X
    } else if (gameClock === null && statusNum === 2 && currentPeriod === 4) {
      return `FINAL`;
      // when quarter is just beginning, game clock is null
    } else if (gameClock === null && statusNum === 2) {
      return `Q${currentPeriod} 12:00}`;
    } else if (gameClock === null) {
      return `END OF Q${currentPeriod}`;
    } else {
      return `Q${currentPeriod} ${gameClock || '12:00'}`;
    }
  };

  return (
    <CardWrapper style={cardHeightStyle} onClick={onCardClick}>
      <CardHeader
        statusNum={statusNum}
        cardOpen={cardOpen}
        highlights={youtubevideos.length > 0}
      />
      <CardContent>
        <TeamInfo
          home
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
          cardOpen={cardOpen}
          teamName={hTeamName}
          teamNameStyle={teamNameStyle}
          record={hTeamRecordFormatted}
          scoreStyle={scoreStyle}
          score={hTeamScore}
        />
        <CardCenter cardOpen={cardOpen}>
          <GameTime
            time={formatTime(
              currentPeriod,
              gameClock,
              statusNum,
              isHalfTime,
              isEndofPeriod,
            )}
          />
          <animated.div style={scoreTableStyle}>
            {hTeamQScore &&
              vTeamQScore && (
                <ScoreTable homeScores={hTeamQScore} awayScores={vTeamQScore} />
              )}
          </animated.div>
        </CardCenter>
        <TeamInfo
          home={false}
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
          cardOpen={cardOpen}
          teamName={vTeamName}
          teamNameStyle={teamNameStyle}
          record={vTeamRecordFormatted}
          scoreStyle={scoreStyle}
          score={vTeamScore}
        />
      </CardContent>
      {cardOpen && (
        <Divider
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
        />
      )}
      {cardOpen &&
        homeSelected && (
          <PlayerStatsSection
            stats={sortMatchStats(matchStats, hTeamId)}
            videos={youtubevideos}
          />
        )}
      {cardOpen &&
        !homeSelected && (
          <PlayerStatsSection
            stats={sortMatchStats(matchStats, vTeamId)}
            videos={youtubevideos}
          />
        )}
    </CardWrapper>
  );
};

export default Card;
