import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components/macro';

const VideoOverlayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 1;
  top: 55px;
  z-index: 1;
`;

const VideoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoOverlay = ({ videoId, changeVideo, hideVideo }) => {
  return (
    <VideoOverlayWrapper>
      <VideoContent>
        Play {videoId}
        !!!
      </VideoContent>
      <div onClick={hideVideo}>Close Video</div>
    </VideoOverlayWrapper>
  );
};

export default VideoOverlay;
