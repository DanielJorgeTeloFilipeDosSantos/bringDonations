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

export class Donation extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Request a donation</h1>
          <Row>
            <Col>
              <Card style={{ width: "10rem", border: "none" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "50%", marginLeft: "25%" }}
                  src={charity}
                />
              </Card>
            </Col>
          </Row>
        </Container>
        <ListDonations />
      </div>
    );
  }
}

export default Donation;
