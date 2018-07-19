import React, { Component } from "react";
import "./App.css";
// import withSpin from "./withSpin";
// import Spin from "./Spin";
// import Pulse from "./Pulse";
import MyComponent from "./MyComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Higher Order Components vs Render Props</h1>
          <MyComponent />
        </header>
        <p className="App-intro">
          Oh hai
        </p>
      </div>
    );
  }
}

export default App;
