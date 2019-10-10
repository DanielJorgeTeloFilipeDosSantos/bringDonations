import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Stepper from "../components/Stepper";

export class HowItWorks extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>How it works</h1>
        </Container>
        <Container>
          <Stepper history={this.props.history} />
        </Container>
        {/* <Link to="/chooseDon">
          <Button>Deliver a donation to a Organization</Button>
        </Link> */}
      </div>
    );
  }
}

export default HowItWorks;
