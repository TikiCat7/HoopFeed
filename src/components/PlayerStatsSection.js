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

const PlayerStatsSection = ({ stats, showVideo, videos }) => {
  let sortedStats = findTopStats(stats);
  let sortedStatsWithVideo = mergeVideosToStats(sortedStats, videos);
  return (
    <PlayerStatsWrapper>
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
              showVideo={showVideo}
            />
          </PlayerStatsContainer>
        )}
      </Trail>
    </PlayerStatsWrapper>
  );
};

export default PlayerStatsSection;
