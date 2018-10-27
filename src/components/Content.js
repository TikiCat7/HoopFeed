import React, { Component } from 'react';
import styled from 'styled-components/macro';

import Card from './Card';

const ScrollableArea = styled.div`
  overflow: hidden;
  overflow-y: auto;
  margin-top: 55px;
`;

class Content extends Component {
  renderCards() {
    return this.props.matches.map(match => (
      <Card key={match.matchId} {...match} />
    ));
  }

  render() {
    return <ScrollableArea>{this.renderCards()}</ScrollableArea>;
  }
}

export default Content;
