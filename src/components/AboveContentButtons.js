import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Button = styled.div`
  background-color: ${props => (props.on ? '#5edea4' : '#1e1e1e')};
  width: 130px;
  height: 37px;
  text-transform: uppercase;
  color: white;
  font-size: 10px;
  font-family: 'Fugaz One', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  -webkit-font-smoothing: antialiased;

  &:first-child {
    margin-right: 10px;
  }
`;

const AboveContentButtons = ({ togglePerformerList, showTopPerformers }) => {
  return (
    <Wrapper>
      <Button
        on={showTopPerformers ? 1 : 0}
        onClick={() => togglePerformerList()}
      >
        Top Performances
      </Button>
      <Button>r/nba clips</Button>
    </Wrapper>
  );
};

export default AboveContentButtons;
