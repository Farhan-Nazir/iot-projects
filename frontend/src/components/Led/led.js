import React, { Component } from "react";
import socketIO from "socket.io-client";

class Led extends Component {
  state = {
    data: false,
    text: "OFF",
    ledSrc: "https://img.icons8.com/ultraviolet/80/000000/led-diode.png",
    endpoint: "http://localhost:5000"
  };

  componentWillMount() {
    let socket = socketIO(this.state.endpoint);
    socket.on("Outgoing Led", (data, err) => {
      if (err) throw err;
      console.log(data);
     data === 1 && this.setState({ ledSrc:"https://img.icons8.com/office/80/000000/led-diode.png", text: "ON"})
     data === 0 && this.setState({ ledSrc:"https://img.icons8.com/ultraviolet/80/000000/led-diode.png", text: "OFF"})
      this.setState({ data });
    });
  }
  render() {
    return (
      <div>
        
       
        <div style={{ textAlign: "center"}}>
        <h1>Led Light</h1>
        <h5>{this.state.text}</h5>
        <img src={this.state.ledSrc} />
        </div>
        
         
         
      </div>
    );
  }
}

export default Led;
