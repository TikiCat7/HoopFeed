import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Trail, animated } from 'react-spring';

import Card from './Card';
import VideoOverlay from './VideoOverlay';

const ScrollableArea = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CardContainer = styled(animated.div)`
  &:first-child {
    margin-top: 10px;
  }
`;
const Content = ({ matches }) => {
  const [selectedIndex, setIndex] = useState(null);
  let [showVideoOverlay, toggleVideoOverlay] = useState(false);
  let [selectedVideo, toggleVideoId] = useState(null);

  const showVideo = id => {
    toggleVideoId(id);
    toggleVideoOverlay(true);
  };

  const hideVideo = () => {
    toggleVideoOverlay(false);
  };

  const onSelect = index => {
    setIndex(index);
  };
  return (
    <ScrollableArea>
      {showVideoOverlay && (
        <VideoOverlay
          videoId={selectedVideo}
          changeVideo={showVideo}
          hideVideo={hideVideo}
        />
      )}
      <Trail
        native
        items={matches}
        from={{
          opacity: 0,
          transform: 'translateX(-100px)',
        }}
        to={{
          opacity: 1,
          transform: 'translateX(0px)',
        }}
        keys={item => item.matchId}
      >
        {(item, index) => props => (
          <CardContainer style={props}>
            <Card
              {...item}
              index={index}
              selectedIndex={selectedIndex}
              onSelect={onSelect}
              showVideo={showVideo}
            />
          </CardContainer>
        )}
      </Trail>
    </ScrollableArea>
  );
};

export default Content;
