import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { restartRequested } from '../../actions/game';

class GameOver extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    reason: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleRestart(event) {
    event.preventDefault();
    this.props.actions.restartRequested();
  }

  render() {
    const { score, reason } = this.props;

    return (
      <div>
        <h1 className="gap-bottom">
          Kaybettin 😞
        </h1>
        <p className="gap-bottom-large">
          {reason} Toplamda <strong>{score}</strong> isim bildin.
        </p>
        <button className="btn btn-primary" onClick={this.handleRestart}>Tekrar Oyna</button>
      </div>
    );
  }
}

export default connect(
  ({ game }) => ({
    score: game.score,
    reason: game.gameOverReason
  }),
  dispatch => ({
    actions: bindActionCreators({ restartRequested }, dispatch)
  })
)(GameOver);
