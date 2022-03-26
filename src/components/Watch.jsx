import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

class Watch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="watch">
          <img src={window.location.origin + this.props.img} alt={"Watch"} />
          <div className="content">
            <h1>{this.props.label}</h1>
            <h3>{this.props.price}$</h3>
            <Link to="/details">
              <button className="viewMore" onClick={this.viewMore}>
                Check Details
              </button>
            </Link>
            <Routes>
              <Route
                path="/details"
                element={
                  <Details
                    id={this.props.id}
                    label={this.props.label}
                    description={this.props.description}
                    price={this.props.price}
                    img={this.props.img}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Watch;
