import React from 'react';
import styled from 'styled-components/macro';

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

const VideoItem = styled.div`
  margin-left: 10px;
  background: ${props => `url(${props.src}) center no-repeat`};
  width: 100px;
  height: 60px;
  background-size: 100px 80px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #0000007a;
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
    showVideo(id);
  };

  const renderVideos = () => {
    return videos.map((video, index) => {
      return (
        <VideoItem
          onClick={event => handleVideoClick(event, video.videoId)}
          key={index}
          src={video.thumbnailUrlLarge}
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
