import React, { Component } from "react";
import "./withSpin.css";

const withSpin = ({ rate = 1 } = {}) => TargetComponent =>
  class extends Component {
    state = { rotation: 0 };

    componentDidMount() {
      this.tick();
    }

    tick = () => {
      this.setState(
        state => ({
          ...state,
          rotation: state.rotation + rate
        }),
        () => {
          requestAnimationFrame(this.tick);
        }
      );
    };

    render() {
      const { rotation } = this.state;

      return (
        <TargetComponent
          {...this.props}
          style={{
            ...this.props.style,
            transform: `rotate3d(0, 0, 1, ${rotation}deg)`
          }}
        />
      );
    }
  };

export default withSpin;
