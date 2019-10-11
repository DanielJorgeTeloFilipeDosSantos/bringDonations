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
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        {" "}
        <br></br>
        <br></br>
        <div
          style={{
            width: "80vw",
            heigh: "80vh"
          }}
        >
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <h3 style={{ marginBottom: "8vh" }}>You created a Donation</h3>
          </div>
          <div>
            <img
              src={logo3}
              style={{
                backgroundColor: "white",
                width: "50vw",
                borderRadius: "50%",
                marginLeft: "12vw"
              }}
              alt="Logo"
            />
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

export default createDonSucess;
