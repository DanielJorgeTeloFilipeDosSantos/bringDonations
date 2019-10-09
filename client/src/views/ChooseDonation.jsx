import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ListDonations from "../components/donations/ListDonations";

export class ChooseDonation extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Choose a donation:</h1>
        </Container>
        <Container>
          <ListDonations />
        </Container>
      </div>
    );
  }
}

export default ChooseDonation;
