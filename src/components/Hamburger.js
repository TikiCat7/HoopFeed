import React from 'react';
import styled from 'styled-components/macro';

const Menu = styled.div`
  color: white;
  cursor: pointer;
  margin: 10px;
`;

const Line = styled.span`
  display: block;
  width: 26px;
  height: 4px;
  margin-bottom: 5px;
  background: white;
  border-radius: 3px;
`;

class Hamburger extends React.Component {
  render() {
    return (
      <Menu>
        <Line />
        <Line />
        <Line />
      </Menu>
    );
  }
}

export default Hamburger;
