import React, { Component } from "react";
import Led from "../components/Led/led";
import Speedometer from "../components/Speedometer/speedometer";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Led />
        <Speedometer />
      </div>
    );
  }
}

export default Home;
