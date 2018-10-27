import React, { Component } from 'react';

import Header from './Header';
import Content from './Content';
import matches from '../matchData';

class App extends Component {
  state = {
    matches: matches
  };

  render() {
    const { matches } = this.state;
    return (
      <div>
        <Header />
        <Content matches={matches} />
      </div>
    );
  }
}

export default App;
