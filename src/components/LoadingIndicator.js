import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSpring, animated } from 'react-spring';

const LoadingIndicatorWrapper = styled(animated.div)`
  position: absolute;
  top: 50%;
  right: 50%;
  color: white;
  font-size: 32px;
  font-family: 'Fugaz one', cursive;
  font-weight: 800;
  margin: -23.5px -66.5px 0 0;
`;

const LoadingIndicator = () => {
  const scale = s => `scale(${s})`;
  const [props, set] = useSpring({
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
    native: true,
  });
  useEffect(() => {
    set({ scale: 1.5 });
  }, []);
  return (
    <LoadingIndicatorWrapper
      style={{ transform: props.scale.interpolate(scale) }}
    >
      LOADING
    </LoadingIndicatorWrapper>
  );
};

export default LoadingIndicator;
