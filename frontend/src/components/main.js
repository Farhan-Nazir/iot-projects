import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Speedometer from "./Speedometer/speedometer";
import LedOnOff from "./Led/ledOnOff";
import BlinkingLed from "./Led/led";
import Home from "../pages/home";

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ledonoff" component={LedOnOff} />
          <Route path="/speedometer" component={Speedometer} />
          <Route path="/blinkingLed" component={BlinkingLed} />
        </Switch>
      </div>
    );
  }
}

export default Main;
