import React, { Component } from "react";
import { Link } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="watchDetails">
        <div className="deep-overlay">
          <div className="content">
            <div className="container">
              <img src={window.location.origin + this.props.img} alt="Watch" />
              <div className="details">
                <h1>{this.props.label}</h1>
                <h3>{this.props.description}</h3>
                <h2>{this.props.price}$</h2>
                <button>Order</button>
                <Link to={"/"}>
                  <div className="exit">X</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
