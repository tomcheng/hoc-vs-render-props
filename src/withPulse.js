import React, { Component } from "react";

const withPulse = (TargetComponent, { rate = 10 } = {}) =>
  class extends Component {
    state = { progress: 0 };

    componentDidMount() {
      this.tick();
    }

    tick = () => {
      this.setState({ progress: this.state.progress + rate }, () => {
        requestAnimationFrame(this.tick);
      });
    };

    render() {
      return (
        <TargetComponent
          style={{
            opacity: 0.4 + 0.3 * Math.sin(this.state.progress * Math.PI / 180)
          }}
        />
      );
    }
  };

export default withPulse;
