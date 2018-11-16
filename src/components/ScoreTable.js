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

const ScoreTable = ({ homeScores, awayScores }) => {
  const [hq1 = 0, hq2 = 0, hq3 = 0, hq4 = 0] = homeScores;
  const [aq1 = 0, aq2 = 0, aq3 = 0, aq4 = 0] = awayScores;
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
