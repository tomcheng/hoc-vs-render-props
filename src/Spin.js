import { Component } from "react";
import PropTypes from "prop-types";

class Spin extends Component {
  static propTypes = {
    rate: PropTypes.number.isRequired
  };

  state = { rotation: 0 };

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    const { rate } = this.props;
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
    return this.props.children({
      style: { transform: `rotate3d(0, 0, 1, ${this.state.rotation}deg)` }
    });
  }
}

Spin.propTypes = {
  children: PropTypes.func.isRequired
};

export default Spin;
