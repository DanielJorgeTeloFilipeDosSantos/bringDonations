import React, { Component } from "react";

//-------React---------
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import charity from "../assets/images/charity.svg";

//-------Components---------

import ListDonations from "../components/donations/ListDonations";
import { create } from "./../services/donations";
import geolocation from "../services/geolocation";
import Image from "react-bootstrap/Image";

export class Donation extends Component {
  render() {
    return (
      <div>
        <Container className="center">
          <Row>
            <h2>Request Donations</h2>
            <Image className="mb-3" src={charity} width="10%" />
          </Row>
        </Container>
        <ListDonations />
      </div>
    );
  }
}

export default Donation;
