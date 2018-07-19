import React, { Component } from "react";
import "./App.css";
import withSpin from "./withSpin";
import Spin from "./Spin";
import Pulse from "./Pulse";
import MyComponent from "./MyComponent";

const SpinningComponent = withSpin({ rate: 2 })(MyComponent);

class App extends Component {
  state = { spinRate: 1 };

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
        <div className="App-intro">
          <div>
            <input
              type="range"
              value={spinRate}
              onChange={this.handleChangeSpinRate}
              min={-20}
              max={20}
              step={0.1}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
