import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components/macro';

let Button = styled.div`
  background-color: blue;
  opacity: 1;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>IM A STYLED COMPONENT</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
