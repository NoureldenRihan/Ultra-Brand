import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const mainForm = document.getElementById("form");
    mainForm.style.left = "700px";
    mainForm.style.opacity = "0";
    setTimeout(() => {
      mainForm.innerHTML = `
    <h1 class="formSubmitted">Message Sent Successfully</h1>
    `;
      mainForm.style.left = "0";
      mainForm.style.opacity = "1";
    }, 1000);
  };

  render() {
    return (
      <div className="contact" id="contact">
        <div className="container">
          <div className="intro-text">
            <h1>Contact</h1>
          </div>
          <form id="form" action="" onSubmit={this.handleFormSubmit}>
            <label htmlFor="Name">
              Name: <input type="text" name="Name" required />
            </label>
            <label htmlFor="Email">
              Email: <input type="Email" name="Email" required />
            </label>
            <label htmlFor="Message">
              Message: <br /> <textarea name="Message" required></textarea>
            </label>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
