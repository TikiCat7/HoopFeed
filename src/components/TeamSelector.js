import React from 'react';
import styled from 'styled-components/macro';
import { animated, Transition, Trail } from 'react-spring';

import teams from '../util/teamNames';

const TeamName = styled.div`
  color: ${props => (props.selected ? '#5edea4' : 'white')};
  font-family: 'Fugaz One', cursive;
  text-transform: uppercase;
  cursor: pointer;
`;

const TeamSelector = ({ selected, onSelect }) => {
  return (
    <Transition
      native
      items={true}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {item => props => (
        <animated.div style={props}>
          <Trail
            native
            items={teams}
            keys={item => item.id}
            from={{ transform: 'translate3d(0,-40px,0)' }}
            to={{ transform: 'translate3d(0,0px,0)' }}
          >
            {item => props => (
              <TeamName
                selected={selected === item.short}
                onClick={() => onSelect(item)}
                style={props}
              >
                {item.short}
              </TeamName>
            )}
          </Trail>
        </animated.div>
      )}
    </Transition>
  );
};

export default TeamSelector;
