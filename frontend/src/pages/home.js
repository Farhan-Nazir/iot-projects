import React, { Component } from "react";
import Led from "../components/Led/led";
import Speedometer from "../components/Speedometer/speedometer";

class Home extends Component {
  render() {
    return (
      <div>
        <Led />
        <Speedometer />
      </div>
    );
  }
}

export default Home;
