import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Computer from '../../service/computer';
import Database from '../../service/database';

import { lastNameChanged, userWon } from '../../actions/game';

import SpokenWord from '../element/SpokenWord';

class ComputerTurn extends Component {
  static propTypes = {
    spokenWords: PropTypes.array.isRequired,
    last: PropTypes.string,
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.state = {
      isThinking: true
    }
  }

  componentDidMount() {
    const { spokenWords, last, actions } = this.props;
    let word;

    if (last === '') {
      word = Database.peakRandom();
    } else {
      word = Database.peakByName(last, spokenWords);
    }

    if (!word) {
      actions.userWon('Bilgisayar söylediğin ismin son harfi ile başlayan isim bulamadı.')
      return;
    }

    setTimeout(() => {
      this.setState({ isThinking: false }, () => {
        Computer.speak(word, () => {
          actions.lastNameChanged('computer', word);
        });
      });
    }, this.randomThinking());
  }

  randomThinking(min = 500, max = 2000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { last } = this.props;
    const { isThinking } = this.state;

    return (
      <div>
        <p className="gap-bottom-xsmall">
          { isThinking ?  'Hmm düşünüyorum...' : 'Tamam! İşte buldum' }
        </p>
        { last && <SpokenWord word={last} /> }
      </div>
    );
  }
}

export default connect(
  ({ game }) => ({
    spokenWords: game.spokenWords,
    last: game.last
  }),
  dispatch => ({
    actions: bindActionCreators({
      lastNameChanged,
      userWon
    }, dispatch)
  })
)(ComputerTurn);
