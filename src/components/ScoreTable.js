import React from 'react';
import styled from 'styled-components/macro';

const ScoreTableContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ScoreRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 60px;
`;

const Divider = styled.div`
  border-bottom-color: grey;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  width: 60px;
`;

const Score = styled.span`
  font-size: 8px;
  color: #848181;
`;

const ScoreTable = ({ data = {} }) => {
  const { home, away } = data;
  const { hq1, hq2, hq3, hq4 } = home;
  const { aq1, aq2, aq3, aq4 } = away;
  return (
    <ScoreTableContent>
      <ScoreRow>
        <Score>{hq1}</Score>
        <Score>{hq2}</Score>
        <Score>{hq3}</Score>
        <Score>{hq4}</Score>
      </ScoreRow>
      <ScoreRow>
        <Divider />
      </ScoreRow>
      <ScoreRow>
        <Score>{aq1}</Score>
        <Score>{aq2}</Score>
        <Score>{aq3}</Score>
        <Score>{aq4}</Score>
      </ScoreRow>
    </ScoreTableContent>
  );
};

export default ScoreTable;
