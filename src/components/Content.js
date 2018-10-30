import React, { useState } from 'react';
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

const CardContainer = styled(animated.div)`
  &:first-child {
    margin-top: 10px;
  }
`;
const Content = ({ matches }) => {
  const [selectedIndex, setIndex] = useState(null);
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
          transform: 'translateX(-100px)'
        }}
        to={{
          opacity: 1,
          transform: 'translateX(0px)'
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
            />
          </CardContainer>
        )}
      </Trail>
    </ScrollableArea>
  );
};

export default Content;
