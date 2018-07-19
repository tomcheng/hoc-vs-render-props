import React, { Component } from "react";

const withSpin = (TargetComponent, { rate = 1 } = {}) =>
  class extends Component {
    state = { rotation: 0 };

    componentDidMount() {
      this.tick();
    }

    tick = () => {
      this.setState({ rotation: this.state.rotation + rate }, () => {
        requestAnimationFrame(this.tick);
      });
    };

    render() {
      return (
        <TargetComponent
          style={{ transform: `rotate3d(0, 0, 1, ${this.state.rotation}deg)` }}
        />
      );
    }
  };

export default withSpin;
