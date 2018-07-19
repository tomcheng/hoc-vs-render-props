import { Component } from "react";
import PropTypes from "prop-types";

class Pulse extends Component {
  static propTypes = { rate: PropTypes.number };
  static defaultProps = { rate: 10 };

  state = { progress: 0 };

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    this.setState({ progress: this.state.progress + this.props.rate }, () => {
      requestAnimationFrame(this.tick);
    });
  };

  render() {
    return this.props.children({
      style: {
        opacity: 0.4 + 0.3 * Math.sin(this.state.progress * Math.PI / 180)
      }
    });
  }
}

Pulse.propTypes = { children: PropTypes.func.isRequired };

export default Pulse;
