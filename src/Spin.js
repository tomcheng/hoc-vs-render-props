import { Component } from "react";
import PropTypes from "prop-types";

class Spin extends Component {
  static propTypes = { rate: PropTypes.number };
  static defaultProps = { rate: 1 };

  state = { rotation: 0 };

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    this.setState({ rotation: this.state.rotation + this.props.rate }, () => {
      requestAnimationFrame(this.tick);
    });
  };

  render() {
    return this.props.children({
      style: { transform: `rotate3d(0, 0, 1, ${this.state.rotation}deg)` }
    });
  }
}

Spin.propTypes = { children: PropTypes.func.isRequired };

export default Spin;
