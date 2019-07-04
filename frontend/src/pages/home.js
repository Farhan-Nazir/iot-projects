import React, { Component } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    link: "/blinkingLed",
    title: "Blinking Led"
  },
  {
    link: "/ledonoff",
    title: "On/Off Led"
  },
  {
    link: "/speedometer",
    title: "Speed Meter"
  }
];
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My IOT Projects 2019</h1>
        <ul style={{ listStyle: "none" }}>
          {projects.map((project, i) => {
            return (
              <li key={i}>
                <Link to={project.link}>{project.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
