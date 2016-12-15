import React, { Component } from 'react';
import { connect } from 'react-redux';

import ComputerTurn from '../turn/ComputerTurn';
import UserTurn from '../turn/UserTurn';


class GameReady extends Component {
  render() {
    const { game } = this.props;

    return game.turn === 'computer' ? <ComputerTurn /> : <UserTurn />
  }
}

export default connect(
  ({ game }) => ({ game })
)(GameReady);
