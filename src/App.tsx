import React from 'react';
import logo from './logo.svg';
import './App.css';
import Random from './random/Random'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsssx</code> and save to relasdasdoad.
        </p>
        <Random></Random>
        <Random></Random>
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

export default App;
