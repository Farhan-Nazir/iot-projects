import React, { Component } from "react";
import socketIO from "socket.io-client";
import "./led.css";

class LedOnOff extends Component {
  state = {
    endpoint: "http://localhost:5000",
    state: 0 // Off
  };

  handleOnOff = () => {
    const { state } = this.state;
    state === 0 && this.setState({ state: 1 });
    state === 1 && this.setState({ state: 0 });
  };

  componentDidUpdate() {
    const { state, endpoint } = this.state;
    let socket = socketIO(endpoint);
    console.log("Led is ", state); // 1 = ON, 0 = OFF
    socket.emit("OnOff", state);
  }

  render() {
    return (
      <div>
        <h3>On/Off Led with Button</h3>
        <div className="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            className="onoffswitch-checkbox"
            id="myonoffswitch"
            onClick={this.handleOnOff}
          />
          <label className="onoffswitch-label" htmlFor="myonoffswitch">
            <span className="onoffswitch-inner" />
            <span className="onoffswitch-switch" />
          </label>
        </div>
      </div>
    );
  }
}

export default LedOnOff;
