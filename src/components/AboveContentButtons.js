import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  margin-top: 10px;
  width: 330px;
`;

const Button = styled.div`
  cursor: pointer;
  background-color: ${props => (props.on ? '#0f5033' : '#1e1e1e')};
  padding: 2px 10px;
  text-transform: uppercase;
  color: white;
  font-family: 'Fugaz One', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:first-child {
    margin-right: 10px;
  }
`;

const ButtonText = styled.span`
  font-size: 13px;
  text-transform: uppercase;
`;

const AboveContentButtons = ({
  togglePerformerList,
  showTopPerformers,
  toggleStreamableList,
  showStreamables,
}) => {
  return (
    <Wrapper>
      <Button
        on={showTopPerformers ? 1 : 0}
        onClick={() => togglePerformerList()}
      >
        <ButtonText>Top Performers</ButtonText>
      </Button>
      <Button
        on={showStreamables ? 1 : 0}
        onClick={() => toggleStreamableList()}
      >
        <ButtonText>r/nba clips</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default AboveContentButtons;
