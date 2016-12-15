import React, { Component, PropTypes } from 'react';

class Timer extends Component {
  static propTpes = {
    from: PropTypes.number.isRequired,
    onFinish: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.state = {
      remaining: this.props.from
    }
  }

  componentDidMount() {
    const { onFinish } = this.props;

    this.interval = setInterval(() => {
      if (this.state.remaining === 0) {
        clearInterval(this.interval);
        onFinish();
        return;
      }

      this.setState({ remaining: this.state.remaining - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { remaining } = this.state;
    return <p>{remaining}</p>;
  }
}

export default Timer;
