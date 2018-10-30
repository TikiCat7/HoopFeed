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
  min-width: 88px;
`;

const Divider = styled.div`
  border-bottom-color: grey;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  width: 88px;
`;

const Score = styled.span`
  font-size: 8px;
  color: #848181;
`;

const ScoreTable = () => {
  return (
    <ScoreTableContent>
      <ScoreRow>
        <Score>12</Score>
        <Score>12</Score>
        <Score>12</Score>
        <Score>12</Score>
      </ScoreRow>
      <ScoreRow>
        <Divider />
      </ScoreRow>
      <ScoreRow>
        <Score>12</Score>
        <Score>12</Score>
        <Score>12</Score>
        <Score>12</Score>
      </ScoreRow>
    </ScoreTableContent>
  );
};

export default ScoreTable;
