import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import ReactAnimatedSelection from "../../src";

class Demo extends Component {
  state = {
    fullscreen: false
  };

  fullscreenToggle = () => {
    this.setState({ fullscreen: !this.state.fullscreen });
  };
  render() {
    return (
      <div>
        <div style={{  padding: "12px" }}>
          <h1>React react animated selection Demo</h1>
        </div>
        <ReactAnimatedSelection />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
