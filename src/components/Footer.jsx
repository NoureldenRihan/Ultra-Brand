import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="container">
          <h2>Most Photos are by Antony Trivet from Pexels</h2>
          <h1>
            Made by
            <a href="https://github.com/NoureldenRihan2002"> Nourelden Rihan</a>
          </h1>
        </div>
      </footer>
    );
  }
}

export default Footer;
