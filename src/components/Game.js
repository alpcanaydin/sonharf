import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Computer from '../service/computer';
import Recognition from '../service/recognition';

import { gameStatusChanged } from '../actions/status';

import GameInit from './gameStatus/GameInit';
import GameAskPermission from './gameStatus/GameAskPermission';
import GamePermissionDenied from './gameStatus/GamePermissionDenied';
import GameReady from './gameStatus/GameReady';
import GameOver from './gameStatus/GameOver';
import GameWon from './gameStatus/GameWon';
import GameUnsupported from './gameStatus/GameUnsupported';

class Game extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { actions: { gameStatusChanged } } = this.props;

    if (!Computer.isSupported() || !Recognition.isSupported()) {
      gameStatusChanged('unsupported');
      return;
    }

    gameStatusChanged('init');
  }

  render() {
    const { status } = this.props;
    let gameNode;

    switch (status) {
      case 'unsupported':
        gameNode = <GameUnsupported />;
        break;
      case 'init':
        gameNode = <GameInit />;
        break;
      case 'askPermission':
        gameNode = <GameAskPermission />;
        break;
      case 'permissionDenied':
        gameNode = <GamePermissionDenied />;
        break;
      case 'ready':
        gameNode = <GameReady />;
        break;
      case 'gameOver':
        gameNode = <GameOver />;
        break;
      case 'gameWon':
        gameNode = <GameWon />;
        break;
      default:
        gameNode = <GameUnsupported />
    }

    return <div className="Game">{gameNode}</div>;
  }
}

export default connect(
  ({ status }) => ({ status }),
  dispatch => ({
    actions: bindActionCreators({ gameStatusChanged }, dispatch)
  })
)(Game);
