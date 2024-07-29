import React, { Component } from "react";
import Switch from "./Switch";

class App extends Component {
  //initiates the state
  state = { on: false };
  //toggles the state
  toggle = () => {
    const isOn = this.state.on;
    this.setState({ on: !isOn });
  };

  render() {
    let wallClass = "wall off";
    if (this.state.on) {
      wallClass = "wall on";
    }
    return (
      <div className={wallClass}>
        <Switch toggle={this.toggle} />
        <Switch toggle={this.toggle} />
      </div>
    );
  }
}

export default App;
