import React, { Component } from "react";
import "../App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import bringLogo from "../assets/bring2.svg";

export class HomeSlides extends Component {
  render() {
    return (
      <div style={{ width: "400vw", flexDirection: "row", display: "flex" }}>
        <div
          style={{
            width: "100vw",
            height: "4vh",
            background: "linear-gradient(to right, #266ab2, #45ace1)"
          }}
        >
          <div
            style={{
              width: "100vw",
              backgroundColor: "white",
              marginTop: "10vh"
            }}
          >
            <img
              src={bringLogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h1>Our Mission</h1>
            <p>
              Our mission is to help to connect people that have objects that
              they can donate, to institutions that will send them to people who
              need it.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "4vh",
            background: "linear-gradient(to right, #fee74e, #f6ae42)"
          }}
        >
          <div
            style={{
              width: "100vw",
              backgroundColor: "white",
              marginTop: "10vh"
            }}
          >
            <h1>How it works?</h1>
            <p>
              Became a volunteer, or became a donor. Talk with institutions.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "4vh",
            background: "linear-gradient(to right, #266ab2, #45ace1)"
          }}
        >
          <div
            style={{
              width: "100vw",
              backgroundColor: "white",
              marginTop: "10vh"
            }}
          >
            <Jumbotron fluid>
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "4vh",
            background: "linear-gradient(to right, #fee74e, #f6ae42)"
          }}
        >
          <div
            style={{
              width: "100vw",
              backgroundColor: "white",
              marginTop: "10vh"
            }}
          >
            <Jumbotron fluid>
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSlides;
