import React, { Component } from 'react';
import Game from './Game';
import Logo from './element/Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Logo />
        <div className="game-container">
          <div className="game-inner">
            <Game />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
