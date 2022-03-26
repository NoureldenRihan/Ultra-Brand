import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landing" id="home">
        <div className="overlay">
          <div className="title">
            <h1>Time For a Change</h1>
            <h3>Carefully picked wrist watches Collection</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
