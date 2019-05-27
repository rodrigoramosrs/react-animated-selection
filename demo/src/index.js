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
        <div style={{ padding: "12px" }}>
          <h1>React react animated selection Demo</h1>
        </div>
        <div>
          <ReactAnimatedSelection title="Closed demo 1">
            <div>
             TESTE 
              <input type="button" value="botao" />
            </div>
          </ReactAnimatedSelection>
        </div>
        <div>
          <ReactAnimatedSelection title="Closed demo 2">
            demo text. demo text. demo text. demo text. demo text. demo text.
            demo text. demo text. demo text. demo text. demo text. demo text.
            demo text. demo text. demo text. demo text. demo text. demo text.
            demo text. demo text. demo text. demo text. demo text. demo text.
            demo text. demo text. demo text.
          </ReactAnimatedSelection>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
