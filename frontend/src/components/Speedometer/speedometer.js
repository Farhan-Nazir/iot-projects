import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ReactSpeedometer from "react-d3-speedometer";

class Speedometer extends Component {
  state = {
    response: 0,
    endpoint: "http://localhost:5000"
  };

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("Speed meter", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <ReactSpeedometer
          maxValue={140}
          value={response}
          needleColor="black"
          startColor="orange"
          segments={5}
          endColor="red"
          needleHeightRatio={0.8}
          needleTransition={"easeCircleIn"}
          ringWidth={10}
          textColor={"red"}
        />
      </div>
    );
  }
}

export default Speedometer;
