import React, { Component } from "react";
import placeholderimage from "../assets/images/edward-cisneros-_H6wpor9mjs-unsplash.jpg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import DonationList from "../components/donations/ListDonations";

import add from "../assets/images/add.svg";
import charity from "../assets/images/charity.svg";
import newspaper from "../assets/images/newspaper.svg";
import settings from "../assets/images/settings.svg";
import addVolunteer from "../assets/images/user.svg";

import { Link } from "react-router-dom";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  ShowPageVolunteerOrOrganization() {
    if (this.props.user.role === "User") {
      //---------------------------VOLUNTEER/DONOR!! FOR STYLING---------------------------------
      return (
        <div>
          <h1>Welcome {this.props.user.name}!</h1>
          <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="pick up" title="Donations to be Picked up">
                <DonationList />
              </Tab>
              <Tab eventKey="donation" title="My posted Donation">
                <DonationList />
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Figure className="my-5">
                  <Figure.Image
                    width={200}
                    height={200}
                    alt="userimage"
                    src={placeholderimage}
                    rounded
                  />
                </Figure>
              </Tab>
            </Tabs>
          </Container>
        </div>
      );
      //---------------------------ORGANIZATION !! FOR STYLING---------------------------------
    } else if (this.props.user.role === "Organization") {
      return (
        <div>
          <Container>
            <h1>Welcome {this.props.user.name}!</h1>
          </Container>
          <Container style={{ marginTop: "8vh" }}>
            <Row>
              <Col>
                <Link to="/donationOrg">
                  <Card style={{ width: "10rem", border: "none" }}>
                    <Card.Img
                      variant="top"
                      style={{ width: "50%", marginLeft: "25%" }}
                      src={charity}
                    />
                    <Card.Body>
                      <Card.Title>See the Donations</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/donation">
                  <Card style={{ width: "10rem", border: "none" }}>
                    <Card.Img
                      variant="top"
                      style={{ width: "50%", marginLeft: "25%" }}
                      src={add}
                    />
                    <Card.Body>
                      <Card.Title>Sugest Donation</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/donation">
                  <Card style={{ width: "10rem", border: "none" }}>
                    <Card.Img
                      variant="top"
                      style={{ width: "50%", marginLeft: "25%" }}
                      src={addVolunteer}
                    />
                    <Card.Body>
                      <Card.Title>Add Volunteer</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/donation">
                  <Card style={{ width: "10rem", border: "none" }}>
                    <Card.Img
                      variant="top"
                      style={{ width: "50%", marginLeft: "25%" }}
                      src={settings}
                    />
                    <Card.Body>
                      <Card.Title>Edit Profile</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    //------------------------------------------------------------------
  }

  render() {
    return (
      <div className="margin-top">
        {!this.props.user ? (
          this.props.history.push("/")
        ) : (
          <div>{this.ShowPageVolunteerOrOrganization()}</div>
        )}
      </div>
    );
  }
}

export default Profile;
