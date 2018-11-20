import React from 'react';
import styled from 'styled-components/macro';
import PlayerStats from './PlayerStats';
import { Trail, animated } from 'react-spring';
import { findTopStats, mergeVideosToStats } from '../util/stats';

const PlayerStatsContainer = styled(animated.div)``;

const PlayerStatsWrapper = styled.div`
  overflow: scroll;
  max-height: 300px;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const PlayerStatsSection = ({ stats, videos }) => {
  let sortedStats = findTopStats(stats);
  let sortedStatsWithVideo = mergeVideosToStats(sortedStats, videos);
  return (
    <PlayerStatsWrapper>
      {sortedStatsWithVideo.length > 0 ? (
        <Trail
          native
          items={sortedStatsWithVideo}
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          keys={item => item.name}
        >
          {(item, index) => props => (
            <PlayerStatsContainer style={props}>
              <PlayerStats
                key={index}
                videos={item.videos}
                stats={item.topStats.statsFormatted}
                name={item.name}
              />
            </PlayerStatsContainer>
          )}
        </Trail>
      ) : (
        <div>nothing</div>
      )}
    </PlayerStatsWrapper>
  );
};

export default PlayerStatsSection;
