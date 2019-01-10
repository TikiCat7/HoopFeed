import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import VideoContext from '../context/VideoContext';

import VideoItem from './VideoItem';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
  flex: 1;
  max-height: 120px;
`;

const Title = styled.h1`
  font-family: 'SF-Pro-Heavy';
  font-weight: 800;
  font-size: 12px;
  color: white;
  margin: 0px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 16px;
`;

const VideoItemWrapper = styled.div`
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  flex: 0 0 auto;
`;

const VideoRow = styled.div`
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background-color: #80808014;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: ${props => (props.longRow ? 'unset' : 'space-evenly')};
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: ${props => (props.longRow ? 'a' : 'unset')};
    flex: ${props => (props.longRow ? '0 0 5px' : 'none')};
  }
`;

const MatchHighlightsRail = ({ videos }) => {
  const playerVideos = videos.filter(video => video.player.length === 0);
  const { setVideoId, toggleVideoOverlay } = useContext(VideoContext);
  const handleVideoClick = (event, id) => {
    event.stopPropagation();
    setVideoId(id);
    toggleVideoOverlay(true);
  };

  const renderMatchVideos = () => {
    return playerVideos.map(video => {
      return (
        <VideoItemWrapper key={video.id}>
          <VideoItem video={video} handleClick={handleVideoClick} />
        </VideoItemWrapper>
      );
    });
  };

  if (playerVideos.length > 0) {
    return (
      <Wrapper>
        <Title>Match Highlights</Title>
        <VideoRow longRow={playerVideos.length > 3}>
          {renderMatchVideos()}
        </VideoRow>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default MatchHighlightsRail;
