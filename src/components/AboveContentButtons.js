import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import AppContext from '../context/AppContext';
import { formatDate, splitDate } from '../util/date';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 10px;
  width: 330px;
`;

const Button = styled.div`
  cursor: pointer;
  background-color: ${props => (props.on ? '#5edea4' : '#1e1e1e')};
  padding: 5px 10px;
  text-transform: uppercase;
  color: white;
  font-family: 'Fugaz One', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const ButtonText = styled.span`
  font-size: 13px;
  text-transform: uppercase;
  color: ${props => (props.on ? '#135630' : 'white')};
`;

const Arrow = styled.span`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 20px;
  vertical-align: middle;
  margin-bottom: 20px;
`;

const DateStyle = styled.span`
  color: white;
  font-family: 'Fugaz One', cursive;
  font-weight: 800;
  font-size: 22px;
  margin-bottom: 20px;
`;

const Calendarwrapper = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 330px;
`;

const AboveContentButtons = ({
  togglePerformerList,
  showTopPerformers,
  toggleStreamableList,
  showStreamables,
  showMatches,
  toggleMatchesList,
}) => {
  const { matchDate, setMatchDate, showDate } = useContext(AppContext);
  const adjustedDate = direction => {
    return new Date(
      matchDate.setTime(matchDate.getTime() - 1 * direction * 86400000),
    );
  };
  const handleDateClick = amount => {
    setMatchDate(adjustedDate(amount));
  };
  return (
    <Wrapper>
      <Row>
        {showDate && (
          <Calendarwrapper>
            <Arrow onClick={() => handleDateClick(1)}>←</Arrow>
            <DateStyle>{splitDate(formatDate(matchDate))}</DateStyle>
            <Arrow onClick={() => handleDateClick(-1)}>→</Arrow>
          </Calendarwrapper>
        )}
      </Row>
      <Row>
        <Button on={showMatches ? 1 : 0} onClick={() => toggleMatchesList()}>
          <ButtonText on={showMatches ? 1 : 0}>Matches</ButtonText>
        </Button>
        <Button
          on={showTopPerformers ? 1 : 0}
          onClick={() => togglePerformerList()}
        >
          <ButtonText on={showTopPerformers ? 1 : 0}>Top Performers</ButtonText>
        </Button>
        <Button
          on={showStreamables ? 1 : 0}
          onClick={() => toggleStreamableList()}
        >
          <ButtonText on={showStreamables ? 1 : 0}>r/nba clips</ButtonText>
        </Button>
      </Row>
    </Wrapper>
  );
};

export default AboveContentButtons;
