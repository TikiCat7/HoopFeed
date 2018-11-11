import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components/macro';
import YouTube from 'react-youtube';
import '../index.css';

const VideoOverlayWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: calc(100% - 55px);
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
  /* height: 100%; */
`;

const VideoContent = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  /* top: 25%; */
`;

const VideoCloseButton = styled.div`
  text-align: center;
  padding: 10px;
`;

const VideoOverlay = ({
  videoPlaying,
  toggleVideoPlay,
  videoId,
  changeVideo,
  hideVideo,
  style,
}) => {
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

  const onVideoPlay = () => {
    toggleVideoPlay(true);
  };

  return (
    <React.Fragment>
      <VideoOverlayWrapper style={style}>
        <Content>
          <VideoContent videoPlaying={videoPlaying}>
            <YouTube
              className="iframe-style"
              style={iframeStyle}
              opts={opts}
              videoId={videoId}
              onReady={onVideoReady}
              onPlay={onVideoPlay}
            />
          </VideoContent>
          <VideoCloseButton onClick={hideVideo}>CLOSE</VideoCloseButton>
        </Content>
      </VideoOverlayWrapper>
    </React.Fragment>
  );
};

export default VideoOverlay;
