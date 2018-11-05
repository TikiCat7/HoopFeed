import React from "react";
import styled from "styled-components/macro";

const PlayerStatWrapper = styled.div`
  background-color: red;
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
`;

const Stats = styled.span`
  color: #848181;
  font-size: 10px;
  font-family: 'SF-Pro-Medium';
  margin-left: 35px;
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
  justify-content: space-evenly;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-left: 20px;
`;

const VideoItem = styled.img`
  width: 100px;
  height: 65px;
`;

const PlayerStats = ({ stats = {}, videos = [], name = '' }) => {
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

  const renderVideos = () => {
    return videos.map((video, index) => {
      return <VideoItem key={index} src={video.imageSrc} />;
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
