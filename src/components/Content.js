import React from 'react';
import styled from 'styled-components/macro';

import Card from './Card';

const ScrollableArea = styled.div`
  overflow: hidden;
  overflow-y: auto;
  margin-top: 55px;
`;

const renderCards = matches => {
  return matches.map(match => <Card key={match.matchId} {...match} />);
};

const Content = ({ matches }) => {
  return <ScrollableArea>{renderCards(matches)}</ScrollableArea>;
};

export default Content;
