import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import VideoContext from '../context/VideoContext';

import VideoItem from './VideoItem';

const PlayerStatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 10px;
`;

const PlayerName = styled.span`
  font-size: 13px;
  font-family: 'SF-Pro-Heavy';
  color: white;
  margin-left: 10px;
`;

const Stats = styled.span`
  color: #848181;
  font-size: 10px;
  font-family: 'SF-Pro-Medium';
`;

const StatNumber = styled.span`
  color: #848181;
  font-size: 13px;
  font-family: 'SF-Pro-Heavy';
  margin-left: 10px;
`;

const VideoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const PlayerStats = ({ stats = {}, videos = [], name = '' }) => {
  const { setVideoId, toggleVideoOverlay } = useContext(VideoContext);
  const renderStats = () => {
    return stats.map((stat, index) => {
      return (
        <React.Fragment key={index}>
          <StatNumber>{stat.value}</StatNumber>
          {stat.type}
        </React.Fragment>
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
      }
    });
  };

  return (
    <PlayerStatWrapper>
      <StatsRow>
        <PlayerName>{name}</PlayerName>
        <Stats>{renderStats()}</Stats>
      </StatsRow>
      <VideoRow>{renderVideos()}</VideoRow>
    </PlayerStatWrapper>
  );
};

export default PlayerStats;
