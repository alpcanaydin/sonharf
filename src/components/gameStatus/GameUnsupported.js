import React, { Component } from 'react';

class GameUnsupported extends Component {
  render() {
    return (
      <div>
        <h1 className="gap-bottom">Tarayıcın Desteklenmiyor :(</h1>
        <p>
          Bu oyun sadece <strong>Google Chrome</strong> üzerinde çalışmaktadır.
        </p>
      </div>
    );
  }
}

export default GameUnsupported;
