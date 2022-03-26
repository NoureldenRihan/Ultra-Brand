import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="about" className="about">
        <div className="container">
          <div className="intro-text">
            <h1>Who are we?</h1>
          </div>
          <div className="content">
            <p>
              The best wrist watches - whether for causuals or classics - can be
              found here at <span>Ultra Brand</span>. <br /> Established at
              1995, We have gone through the best and the worst of watches
              manufacturing and repairing to be able to give the best experience
              possible with our watches.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
