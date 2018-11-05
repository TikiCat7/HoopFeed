import React from 'react';
import styled from 'styled-components/macro';

const PlayerStatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 10px;
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
  margin-left: 28px;
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
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

const VideoItem = styled.img`
  width: 97px;
  height: 64px;
  margin-left: 10px;
`;

const PlayerStats = ({ stats = {}, videos = [], name = '', showVideo }) => {
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
    console.log('video was clicked', id);
    showVideo(id);
  };

  const renderVideos = () => {
    return videos.map((video, index) => {
      return (
        <VideoItem
          onClick={event => handleVideoClick(event, video.id)}
          key={index}
          src={video.imageSrc}
        />
      );
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
