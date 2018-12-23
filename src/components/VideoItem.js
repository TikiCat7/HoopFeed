import React from 'react';
import styled from 'styled-components/macro';

const VideoItemWrapper = styled.div`
  background: ${props => `url(${props.src}) center no-repeat`};
  width: 100px;
  height: 60px;
  background-size: 100px 80px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #0000007a;
  flex: 0 0 auto;
  cursor: pointer;
`;

const VideoItem = ({ video, index, handleClick }) => {
  return (
    <VideoItemWrapper
      onClick={event => handleClick(event, video.videoId)}
      key={index}
      src={video.thumbnailUrlLarge}
    />
  );
};

export default VideoItem;
