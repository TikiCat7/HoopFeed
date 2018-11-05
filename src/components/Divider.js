import React from 'react';
import styled from 'styled-components/macro';
import { useSpring, animated } from 'react-spring';

const DividerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 4px;
  background-color: #848181;
`;

const DividerItem = styled(animated.div)`
  height: 4px;
  background-color: #7af1ba;
  width: 50%;
  position: relative;
  cursor: pointer;
`;

const Divider = ({ homeSelected, toggleDivider }) => {
  const [dividerStyle] = useSpring({
    left: homeSelected ? -82.5 : 82.5,
    from: { left: homeSelected ? -82.5 : 82.5 },
  });

  const handleClick = event => {
    event.stopPropagation();
    toggleDivider(!homeSelected);
  };

  return (
    <DividerWrapper>
      <DividerItem style={dividerStyle} onClick={handleClick} />
    </DividerWrapper>
  );
};

export default Divider;
