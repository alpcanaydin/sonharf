import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { restartRequested } from '../../actions/game';

import './Logo.css';

class Logo extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const { status, actions } = this.props;

    if (status !== 'ready') {
      actions.restartRequested();
      return;
    }

    // eslint-disable-next-line no-restricted-globals
    if (confirm('Oyun baştan başlayacak. Emin misin?')) {
      actions.restartRequested();
    }
  }

  render() {
    return (
      <div className="Logo text-primary">
        <a href="#" onClick={this.handleClick}>
          Sonhar<span className="color-green">f</span>
        </a>
      </div>
    );
  }
}

export default connect(
  ({ status }) => ({ status }),
  dispatch => ({
    actions: bindActionCreators({ restartRequested }, dispatch)
  })
)(Logo);
