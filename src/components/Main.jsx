import React, { Component } from "react";
import Nav from "./Nav";
import Landing from "./Landing";
import Store from "./Store";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.onscroll = () => {
      let windowHeight = window.innerHeight;
      let menuHeight = document.getElementById("store").offsetHeight;
      let menuTop = document.getElementById("store").offsetTop;
      let windowY = window.pageYOffset;
      let logoHeight =
        document.querySelector("#navbar .logo").offsetHeight + 10;

      if (windowY > menuTop + menuHeight * 0.05 - windowHeight) {
        document.getElementById("navbar").classList.add("movedNavbar");
        document.querySelector(".navbar").style.top = `-${logoHeight - 15}px`;
      } else {
        document.querySelector(".navbar").style.top = `0`;
        document.getElementById("navbar").classList.remove("movedNavbar");
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Landing />
        <Store />
        <About />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
