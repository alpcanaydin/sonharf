import React, { Component } from 'react';
import './Copyright.css';

class Copyright extends Component {
  render() {
    return (
      <div className="Copyright">
        <a href="https://twitter.com/alpcanaydin" target="_blank">
          @alpcanaydin
        </a> |&nbsp;
        <a href="https://github.com/alpcanaydin/sonharf" target="_blank">
          Kaynağı Görüntüle
        </a>
      </div>
    );
  }
}

export default Copyright;
