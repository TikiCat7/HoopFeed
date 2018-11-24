import React, { useContext } from 'react';
import styled from 'styled-components';

import VideoContext from '../context/VideoContext';

import VideoItem from './VideoItem';
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 100px;
`;

const Title = styled.h1`
  font-family: 'SF-Pro-Heavy';
  font-weight: 800;
  font-size: 12px;
  color: white;
  margin: 0px;
  padding-left: 5px;
  padding-bottom: 5px;
`;

const VideoItemWrapper = styled.div`
  margin: 5px;
`;

const VideoRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 10px;
  justify-content: ${props => (props.longRow ? 'unset' : 'space-evenly')};
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: ${props => (props.longRow ? '' : 'unset')};
    flex: ${props => (props.longRow ? '0 0 5px' : 'none')};
  }
`;

const MatchHighlightsRail = ({ videos }) => {
  const { setVideoId, toggleVideoOverlay } = useContext(VideoContext);
  const handleVideoClick = (event, id) => {
    event.stopPropagation();
    setVideoId(id);
    toggleVideoOverlay(true);
  };

  const renderMatchVideos = () => {
    return videos.map(video => {
      return (
        <VideoItemWrapper key={video.id}>
          <VideoItem video={video} handleClick={handleVideoClick} />
        </VideoItemWrapper>
      );
    });
  };

  return (
    <Wrapper>
      <Title>Match Highlights</Title>
      <VideoRow longRow={videos.length > 3}>{renderMatchVideos()}</VideoRow>
    </Wrapper>
  );
};

export default MatchHighlightsRail;
