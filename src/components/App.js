import React from 'react';

import Header from './Header';
import Content from './Content';
import matches from '../matchData';

const App = () => {
  return (
    <div>
      <Header />
      <Content matches={matches} />
    </div>
  );
};

export default App;
