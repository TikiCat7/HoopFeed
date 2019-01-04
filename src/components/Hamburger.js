import React from 'react';
import styled from 'styled-components/macro';

const Menu = styled.div`
  color: white;
  cursor: pointer;
  margin-right: 10px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const Line = styled.span`
  display: block;
  width: 26px;
  height: 4px;
  margin-bottom: 5px;
  background: white;
  border-radius: 3px;
`;

const Hamburger = ({ handleClick }) => {
  return (
    <Menu onClick={() => handleClick()}>
      <Line />
      <Line />
      <Line />
    </Menu>
  );
};

export default Hamburger;
