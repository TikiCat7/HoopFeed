import React from 'react';
import styled from 'styled-components/macro';
import PlayerStats from './PlayerStats';
import { animated } from 'react-spring';
import { findTopStats, mergeVideosToStats } from '../util/stats';

const PlayerStatsContainer = styled(animated.div)``;

const PlayerStatsWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  overflow-x: hidden;
  flex: 1;
  border-bottom-left-radius: 10px;
  border-bottom-left-radius: 10px;
  ::-webkit-srollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const PlayerStatsSection = ({ stats, videos }) => {
  let sortedStats = findTopStats(stats);
  let sortedStatsWithVideo = mergeVideosToStats(sortedStats, videos);
  return (
    <PlayerStatsWrapper>
      <PlayerStatsContainer>
        {sortedStatsWithVideo.map((item, index) => {
          return (
            <PlayerStats
              key={index}
              videos={item.videos}
              stats={item.topStats.statsFormatted}
              firstName={item.firstName}
              lastName={item.lastName}
            />
          );
        })}
      </PlayerStatsContainer>
    </PlayerStatsWrapper>
  );
};

export default PlayerStatsSection;
