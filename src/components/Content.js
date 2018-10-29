import React from 'react';
import styled from 'styled-components/macro';
import { Trail, animated } from 'react-spring';

import Card from './Card';

const ScrollableArea = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = ({ matches }) => {
  return (
    <ScrollableArea>
      <Trail
        native
        items={matches}
        from={{
          opacity: 0,
          transform: 'translate3d(100px,0,0)'
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0px,0,0)'
        }}
        keys={item => item.matchId}
      >
        {item => props => (
          <animated.div style={props}>
            <Card {...item} />
          </animated.div>
        )}
      </Trail>
    </ScrollableArea>
  );
};

export default Content;
