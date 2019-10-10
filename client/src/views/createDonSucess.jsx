import React, { Component } from "react";
import logo3 from "../assets/images/checkmark-gif.gif";

export class createDonSucess extends Component {
  componentDidMount() {
    setTimeout(
      function() {
        this.props.history.push("/profile");
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <div>
        {" "}
        <h1>You created a donation</h1>
        <img src={logo3} alt="Logo" />
      </div>
    );
  }
}

export default createDonSucess;
