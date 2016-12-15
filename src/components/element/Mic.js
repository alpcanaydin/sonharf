import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './Mic.css';

class Mic extends Component {
  static propTypes = {
    size: PropTypes.string,
    status: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render() {
    const { size = 'normal', status, className } = this.props;
    let image;

    if (size === 'big') {
      image = require('../../img/microphone-big.png');
    } else {
      if (status === 'processing') {
        image = require('../../img/loading.svg');
      } else {
        image = require('../../img/microphone.png');
      }
    }

    const classes = classnames('Mic', size, status, className);

    return (
      <div className={classes}>
        <img src={image} role="presentation" />
      </div>
    );
  }
}

export default connect(
  ({ microphone }) => ({ status: microphone })
)(Mic);
