import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './SpokenWord.css';

class SpokenWord extends Component {
  static propTpes = {
    word: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render() {
    const { word, className = '' } = this.props;
    let first = word.slice(0, word.length - 1);
    first = `${first.charAt(0).toUpperCase()}${first.substring(1)}`

    const lastLetter = word[word.length - 1];

    return (
      <div className={classnames('SpokenWord', className)}>
        {first}<span className="color-green">{lastLetter}</span>
      </div>
    );
  }
}

export default SpokenWord;
