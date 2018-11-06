import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components/macro';
import YouTube from 'react-youtube';
import '../index.css';

const VideoOverlayWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  top: 55px;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  font-size: 20px;
  font-family: 'Fugaz one';
  color: white;
  width: 100%;
  height: 100%;
`;

const VideoContent = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  /* width: 375px; */
`;

const VideoOverlay = ({ videoId, changeVideo, hideVideo, style }) => {
  const opts = {
    height: '300px',
    width: '300px',
    playerVars: {
      autoplay: 1,
    },
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  };

  const onVideoReady = () => {
    console.log('video is ready!');
  };

  return (
    <React.Fragment>
      <VideoOverlayWrapper style={style}>
        <Content>
          <span>VIDEO</span>
          <VideoContent>
            <YouTube
              className="iframe-style"
              style={iframeStyle}
              opts={opts}
              videoId={videoId}
              onReady={onVideoReady}
            />
          </VideoContent>
          <div onClick={hideVideo}>close video</div>
        </Content>
      </VideoOverlayWrapper>
    </React.Fragment>
  );
};

export default VideoOverlay;
