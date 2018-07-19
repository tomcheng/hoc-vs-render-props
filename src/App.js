import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import withSpin from "./withSpin";
import Spin from "./Spin";
import withPulse from "./withPulse";
import Pulse from "./Pulse";

const SpinningComponent = withSpin(MyComponent, { rate: 10 });
const PulsingComponent = withPulse(MyComponent);
const PulsingAndSpinningComponent = withPulse(withSpin(MyComponent));

class App extends Component {
  state = { spinRate: 0 };

  handleChangeSpinRate = evt => {
    this.setState({ spinRate: parseFloat(evt.target.value) });
  };

  render() {
    const { spinRate } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Higher Order Components vs Render Props</h1>
          <MyComponent />
          <SpinningComponent />
          <PulsingComponent />
          <PulsingAndSpinningComponent />
          <Pulse>
            {({ style: pulseStyle }) => (
              <Spin rate={spinRate}>
                {({ style: spinStyle }) => (
                  <MyComponent style={{ ...pulseStyle, ...spinStyle }} />
                )}
              </Spin>
            )}
          </Pulse>
        </header>
        <p className="App-intro">
          <input
            type="range"
            value={spinRate}
            min={-20}
            max={20}
            step={0.1}
            onChange={this.handleChangeSpinRate}
          />
        </p>
      </div>
    );
  }
}

export default App;
