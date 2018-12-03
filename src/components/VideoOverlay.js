import React, { useState, useContext } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components/macro';
import YouTube from 'react-youtube';

import VideoContext from '../context/VideoContext';
import VideoItem from './VideoItem';
import '../index.css';

const VideoOverlayWrapper = styled(animated.div)`
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background-color: black;
  top: 0px;
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
`;

const VideoContent = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`;

const VideoCloseButton = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 50px;
`;

const VideoItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  background-color: ${props => (props.selected ? '#222323' : '#151414')};
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;

const VideoSuggestion = styled(animated.div)`
  width: 100%;
  height: 100%;
  max-height: 350px;
  background-color: #151414;
  opacity: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-srollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const VideoTitle = styled.div`
  font-family: 'SF-Pro-Medium';
  font-weight: 800;
  font-size: 12px;
  color: white;
  text-align: center;
  text-align: center;
  max-width: 200px;
`;

const VideoLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40px;
  margin-top: -15px;
  visibility: ${props => (!props.visible ? 'visible' : 'hidden')};
`;

const VideoSuggestionTitle = styled.div`
  font-size: 12px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 20px;
`;

const VideoOverlay = ({
  showVideoOverlay,
  videoPlaying,
  toggleVideoPlay,
  videoId,
  hideVideo,
  style,
  relatedVideos,
}) => {
  const { setVideoId, selectedVideo } = useContext(VideoContext);
  const [playBackReady, setPlayBackStatus] = useState(false);

  const opts = {
    height: '300px',
    width: '300px',
    playerVars: {
      autoplay: 1,
      fs: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
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
    setPlayBackStatus(true);
  };

  const onVideoPlay = () => {
    toggleVideoPlay(true);
  };

  const renderRelatedVideos = () => {
    return relatedVideos.map((video, index) => {
      return (
        <VideoItemRow
          key={index}
          selected={selectedVideo === video.videoId}
          onClick={() => setVideoId(video.videoId)}
        >
          <VideoItem
            video={video}
            index={index}
            handleClick={() => setVideoId(video.videoId)}
          />
          <VideoTitle>{video.title.substring(0, 100)}</VideoTitle>
        </VideoItemRow>
      );
    });
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
            <VideoLoading visible={playBackReady}>LOADING</VideoLoading>
          </VideoContent>
          {relatedVideos.length > 0 && (
            <React.Fragment>
              <VideoSuggestionTitle>Related Videos</VideoSuggestionTitle>
              <VideoSuggestion>{renderRelatedVideos()}</VideoSuggestion>
            </React.Fragment>
          )}
          <VideoCloseButton onClick={hideVideo}>BACK</VideoCloseButton>
        </Content>
      </VideoOverlayWrapper>
    </React.Fragment>
  );
};

export default VideoOverlay;
