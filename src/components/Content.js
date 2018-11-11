import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Trail, animated, Transition } from 'react-spring';

import AppContext from '../context/AppContext';
import VideoContext from '../context/VideoContext';
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
  :first-child {
    margin-top: 20px;
  }
  display: ${props => (props.show === 1 ? 'none' : 'inherit')};
`;

const Content = ({ matches }) => {
  const { selectedIndex, setIndex } = useContext(AppContext);

  const {
    selectedVideo,
    setVideoId,
    showVideoOverlay,
    toggleVideoOverlay,
    videoPlaying,
    toggleVideoPlay,
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
      <Transition
        items={showVideoOverlay}
        from={{ opacity: 0, transform: 'translate3d(-50px,0,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0px,0,0)' }}
        leave={{ opacity: 0, transform: 'translate3d(-50px,0,0)' }}
      >
        {show =>
          show &&
          (props => (
            <VideoOverlay
              videoId={selectedVideo}
              changeVideo={showVideo}
              hideVideo={hideVideo}
              videoPlaying={videoPlaying}
              toggleVideoPlay={toggleVideoPlay}
              style={props}
            />
          ))
        }
      </Transition>
    </ScrollableArea>
  );
};

export default Content;
