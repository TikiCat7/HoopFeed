import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import VideoContext from '../context/VideoContext';

import VideoItem from './VideoItem';

const PlayerStatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const PlayerName = styled.span`
  font-size: 16px;
  font-family: 'SF-Pro-Heavy';
  color: white;
  text-align: start;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  min-width: 100px;
`;

const Stats = styled.div`
  color: #848181;
  font-size: 10px;
  font-family: 'SF-Pro-Heavy';
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  padding: 10px;
  background-color: #80808014;
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
`;

const StatType = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  font-variant-numeric: tabular-nums;
  font-size: 10;
  width: 25;
`;

const VideoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 10px;
  background-color: #80808014;
  padding-bottom: 10px;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const GridItem = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlayerStats = ({ stats = {}, videos = [], firstName, lastName }) => {
  const { setVideoId, toggleVideoOverlay } = useContext(VideoContext);
  const renderStats = () => {
    return stats.map((stat, index) => {
      return (
        <GridItem key={index}>
          <StatNumber>{stat.value}</StatNumber>
          <StatType>{stat.type}</StatType>
        </GridItem>
      );
    });
  };

  const handleVideoClick = (event, id) => {
    event.stopPropagation();
    setVideoId(id);
    toggleVideoOverlay(true);
  };

  const renderVideos = () => {
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

  return (
    <PlayerStatWrapper>
      <StatsRow style={{ justifyContent: 'flex-start' }}>
        <PlayerName>{`${firstName.substring(0, 1)}. ${lastName}`}</PlayerName>
      </StatsRow>
      <StatsRow>
        <Stats>{renderStats()}</Stats>
      </StatsRow>
      {videos.length > 0 && <VideoRow>{renderVideos()}</VideoRow>}
    </PlayerStatWrapper>
  );
};

export default PlayerStats;
