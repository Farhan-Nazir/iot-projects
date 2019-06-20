import React, { Component } from "react";
import socketIO from "socket.io-client";

class Led extends Component {
  state = {
    data: "",
    endpoint: "http://localhost:5000"
  };

  componentWillMount() {
    let socket = socketIO(this.state.endpoint);
    socket.on("Outgoing Led", (data, err) => {
      if (err) throw err;
      this.setState({ data });
    });
  }
  render() {
    return (
      <div>
        <h1>Led Light</h1>
        <p>Led is {this.state.data}</p>
      </div>
    );
  }
}

export default Led;
