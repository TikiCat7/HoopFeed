import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Trail, animated, Transition } from 'react-spring';

import AppContext from './AppContext';
import VideoContext from './VideoContext';
import Card from './Card';
import VideoOverlay from './VideoOverlay';

const ScrollableArea = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const CardContainer = styled(animated.div)`
  display: ${props => (props.show === 1 ? 'none' : 'inherit')};
`;

const Content = ({ matches }) => {
  const { selectedIndex, setIndex } = useContext(AppContext);

  const {
    selectedVideo,
    setVideoId,
    showVideoOverlay,
    toggleVideoOverlay,
  } = useContext(VideoContext);

  const showVideo = id => {
    setVideoId(id);
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
      <Transition
        items={showVideoOverlay}
        from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
      >
        {show =>
          show &&
          (props => (
            <VideoOverlay
              videoId={selectedVideo}
              changeVideo={showVideo}
              hideVideo={hideVideo}
              style={props}
            />
          ))
        }
      </Transition>
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
          // work around for https://github.com/styled-components/styled-components/issues/1198
          <CardContainer style={props} show={showVideoOverlay ? 1 : 0}>
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
