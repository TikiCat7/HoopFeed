import React from 'react';
import styled from 'styled-components/macro';
import PlayerStats from './PlayerStats';
import { Trail, animated } from 'react-spring';

const PlayerStatsContainer = styled(animated.div)``;

const PlayerStatsSection = ({ stats }) => {
  return (
    <Trail
      native
      items={stats}
      from={{
        opacity: 0,
        transform: 'translateY(-20px)',
      }}
      to={{
        opacity: 1,
        transform: 'translateY(0px)',
      }}
      keys={item => item.name}
    >
      {(item, index) => props => (
        <PlayerStatsContainer style={props}>
          <PlayerStats
            key={index}
            videos={item.videos}
            stats={item.topStats}
            name={item.name}
          />
        </PlayerStatsContainer>
      )}
    </Trail>
  );
};

export default PlayerStatsSection;
