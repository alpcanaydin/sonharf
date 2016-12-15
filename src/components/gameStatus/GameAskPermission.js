import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { gameStatusChanged } from '../../actions/status';

import Recognition from '../../service/recognition';

import Mic from '../element/Mic';

class GameAskPermission extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    Recognition
      .askPermission()
      .then(() => this.props.actions.gameStatusChanged('ready'))
      .catch(() => this.props.actions.gameStatusChanged('permissionDenied'))
  }

  render() {
    return (
      <div>
        <Mic size="big" className="gap-bottom-large" />
        <h1 className="gap-bottom">Mikrofona izin ver</h1>
        <p>
          Oyunu oynayabilmek için tarayıcının mikrofonuna
          erişmesine izin vermen gerekiyor.
        </p>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    actions: bindActionCreators({ gameStatusChanged }, dispatch)
  })
)(GameAskPermission);
