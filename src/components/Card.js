import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components/macro';

import CardHeader from './CardHeader';
import TeamInfo from './TeamInfo';
import GameTime from './GameTime';
import ScoreTable from './ScoreTable';

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
  index,
  selectedIndex,
  onSelect
}) => {
  const finished = status !== '3';
  let [cardOpen, toggleCardOpen] = useState(false);
  let [cardHeight, setCardHeight] = useState(140);
  let [teamFontSize, setTeamFontSize] = useState(24);
  let [scoreFontSize, setScoreFontSize] = useState(36);
  let [scoreTableOpacity, setScoreTableOpacity] = useState(0);
  let [scoreTableDisplay, setScoreTableDisplay] = useState('none');

  const onCardClick = () => {
    toggleCardOpen(!cardOpen);
    setCardHeight(cardOpen ? 140 : 300);
    setTeamFontSize(cardOpen ? 24 : 15);
    setScoreFontSize(cardOpen ? 36 : 24);
    setScoreTableOpacity(cardOpen ? 0 : 1);
    setScoreTableDisplay(cardOpen ? 'none' : 'inherit');
    onSelect(index);
  };

  useEffect(
    () => {
      if (selectedIndex !== index && cardOpen) {
        toggleCardOpen(!cardOpen);
        setCardHeight(140);
        setTeamFontSize(24);
        setScoreFontSize(36);
        setScoreTableDisplay('none');
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

  const [scoreTableStyle] = useSpring({
    opacity: scoreTableOpacity,
    display: scoreTableDisplay,
    marginTop: 5,
    from: { opacity: 0, display: 'none' },
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
        <CardCenter cardOpen={cardOpen}>
          <GameTime finished={finished} time={time} />
          <animated.div style={scoreTableStyle}>
            <ScoreTable />
          </animated.div>
        </CardCenter>
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
