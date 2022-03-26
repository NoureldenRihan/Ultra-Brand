import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav id="navbar" className="navbar">
        <div className="container">
          <h1 className="logo">Ultra Brand</h1>
          <ul>
            <li>
              <a href="#home"> Home</a>
            </li>
            <li>
              <a href="#store"> Store</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#contact"> Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
