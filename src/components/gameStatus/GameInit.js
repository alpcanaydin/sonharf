import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { gameStatusChanged } from '../../actions/status';

class GameInit extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart(event) {
    event.preventDefault();
    this.props.actions.gameStatusChanged('askPermission');
  }

  render() {
    return (
      <div>
        <h1 className="gap-bottom">
          Merhab<span className="color-green">a</span>
        </h1>
        <p className="gap-bottom-large">
          Sonharf, bilgisayara karşı oynanan, rakibin söylediği
          ismin son harfinden isim türetmeye dayanan
          bir kelime oyunu deneyidir.
        </p>
        <button className="btn btn-primary" onClick={this.handleStart}>Başla</button>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    actions: bindActionCreators({ gameStatusChanged }, dispatch)
  })
)(GameInit);
