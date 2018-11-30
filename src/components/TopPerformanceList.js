import React, { useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components/macro';

import VideoContext from '../context/VideoContext';
import VideoItem from './VideoItem';

const ListWrapper = styled.div`
  width: 90%;
`;

const ListItem = styled.div`
  width: 100%;
  max-height: 200px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #1e1e1e;
  font-family: 'SF-Pro-Heavy';
  font-size: 16px;

  &:last-child {
    margin-bottom: 20px;
  }
`;

const ListItemFlexRow = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  align-items: center;
`;

const ListItemFlexTopRow = styled(ListItemFlexRow)`
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const RightSection = styled.div`
  display: flex;
  background-color: #5edea4;
  border-top-right-radius: 5px;
`;

const PlayerName = styled.div`
  font-size: 16px;
`;

const OpponentName = styled.div`
  font-size: 10px;
`;

const PerformanceType = styled.div`
  font-size: 12px;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  text-transform: uppercase;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 1;
`;

const GridItem = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatNumber = styled.div`
  color: #848181;
  font-size: 13px;
  font-family: 'SF-Pro-Heavy';
  color: white;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-variant-numeric: tabular-nums;
  color: ${props => (props.green ? '#5edea4' : 'white')};
`;

const StatType = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  font-variant-numeric: tabular-nums;
  font-size: 10px;
`;

const Stats = styled.div`
  color: #848181;
  font-size: 10px;
  font-family: 'SF-Pro-Heavy';
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const VideoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 10px;
`;

const TopPerformanceList = ({ topPerformers }) => {
  const { setVideoId, toggleVideoOverlay } = useContext(VideoContext);

  const opponentTeam = player => {
    if (player.player.teamId === player.player.hTeamId) {
      return player.hTeamName;
    } else {
      return player.vTeamname;
    }
  };

  const statToMakeGreen = statType => {
    return (
      statType === 'PTS' ||
      statType === 'AST' ||
      statType === 'REB' ||
      statType === 'BLK' ||
      statType === 'STL'
    );
  };

  const handleVideoClick = (event, id) => {
    event.stopPropagation();
    setVideoId(id);
    toggleVideoOverlay(true);
  };

  const renderStats = stats => {
    return stats.map((stat, index) => {
      return (
        <GridItem key={index}>
          <StatNumber
            green={statToMakeGreen(stat.type) && stat.value > 10 ? 1 : 0}
          >
            {stat.value}
          </StatNumber>
          <StatType>{stat.type}</StatType>
        </GridItem>
      );
    });
  };

  const renderVideos = videos => {
    return videos.map((video, index) => {
      if (index < 3) {
        return (
          <VideoItem
            key={index}
            video={video}
            index={index}
            handleClick={handleVideoClick}
          />
        );
      } else return null;
    });
  };

  const renderTopPerformers = () => {
    return topPerformers.map(player => {
      return (
        <ListItem key={player.playerIdFull}>
          <ListItemFlexTopRow>
            <LeftSection>
              <PlayerName>
                {`${player.player.firstName.substring(0, 1)}. ${
                  player.player.lastName
                }`}
              </PlayerName>
              <OpponentName>vs {opponentTeam(player)}</OpponentName>
            </LeftSection>
            <RightSection>
              {player.statType !== '' && (
                <PerformanceType>{player.statType}</PerformanceType>
              )}
            </RightSection>
          </ListItemFlexTopRow>
          <ListItemFlexRow>
            <Stats>{renderStats(player.statsFormatted)}</Stats>
          </ListItemFlexRow>
          {player.videos.length > 0 && (
            <ListItemFlexRow>
              <VideoRow>{renderVideos(player.videos)}</VideoRow>
            </ListItemFlexRow>
          )}
        </ListItem>
      );
    });
  };
  return <ListWrapper>{renderTopPerformers()}</ListWrapper>;
};

export default TopPerformanceList;
