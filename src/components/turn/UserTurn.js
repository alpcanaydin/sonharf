import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { lastNameChanged, gameOver, userWon } from '../../actions/game';
import { microphoneStatusChanged } from '../../actions/microphone';

import Recognition from '../../service/recognition';
import Database from '../../service/database';

import Mic from '../element/Mic';
import SpokenWord from '../element/SpokenWord';
import Timer from '../element/Timer';

class UserTurn extends Component {
  static propTypes = {
    spokenWords: PropTypes.array.isRequired,
    last: PropTypes.string,
    microphone: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.handleTimerFinish = this.handleTimerFinish.bind(this);
  }

  componentWillUnmount() {
    Recognition.abort();

    if (this.processingTimeout) {
      clearTimeout(this.processingTimeout);
    }
  }

  componentDidMount() {
    const { spokenWords, last, actions } = this.props;

    Recognition.on('speechstart', () => {
      actions.microphoneStatusChanged('speaking');
    });

    Recognition.on('speechend', event => {
      actions.microphoneStatusChanged('processing');
      this.processingTimeout = setTimeout(() => {
        actions.gameOver('Ne dediğin anlaşılmadı.');
        Recognition.abort();
      }, 3000);
    });

    Recognition.on('error', error => {
      if (error.error === 'no-speech') {
        actions.gameOver('Verilen süre içinde konuşmadın.');
        Recognition.abort();
        return;
      }

      actions.userWon('Sistemsel bir hata oluştu.');
      Recognition.abort();
    });

    Recognition.on('nomatch', () => {
      actions.gameOver('Ne dediğin anlaşılmadı.');
      Recognition.abort();
    });

    Recognition.on('result', result => {
      if (this.processingTimeout) {
        clearTimeout(this.processingTimeout);
      }

      actions.microphoneStatusChanged('init');

      const word = result
        .results[0][0]
        .transcript
        .replace(/I/g, 'ı')
        .toLocaleLowerCase()
      ;

      if (spokenWords.indexOf(word) > -1) {
        actions.gameOver('Bu isim daha önce söylenmişti.');
        return;
      }

      if (!Database.checkName(word, last)) {
        actions.gameOver('Söylediğin kelime isim değil.');
        return;
      }

      if (word[0] !== last[last.length - 1]) {
        actions.gameOver('Söylediğin isim doğru harf ile başlamıyordu.');
        return;
      }

      actions.lastNameChanged('user', word);
    });

    Recognition.start();
  }

  handleTimerFinish() {
    this.props.actions.gameOver('Verilen süre içinde konuşmadın.');
    Recognition.abort();
  }

  render() {
    const { last, microphone } = this.props;

    return (
      <div>
        <p className="gap-bottom-xsmall">Son harfinden bir isim türet</p>
        <SpokenWord word={last} className="gap-bottom-xsmall" />
        { microphone === 'init' && <Timer from={8} onFinish={this.handleTimerFinish} /> }

        <Mic className="bottom" />
      </div>
    );
  }
}

export default connect(
  ({ game, microphone }) => ({
    spokenWords: game.spokenWords,
    last: game.last,
    microphone
  }),
  dispatch => ({
    actions: bindActionCreators({
      gameOver,
      userWon,
      lastNameChanged,
      microphoneStatusChanged,
    }, dispatch)
  })
)(UserTurn);
