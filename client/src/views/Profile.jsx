import React, { Component } from "react";
import placeholderimage from "../assets/images/edward-cisneros-_H6wpor9mjs-unsplash.jpg";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import DonationList from "../components/donations/ListDonations";
//import ImageUpload from "../components/upload/ImageUpload";

import add from "../assets/images/add.svg";
import charity from "../assets/images/charity.svg";
import settings from "../assets/images/settings.svg";
import addVolunteer from "../assets/images/user.svg";

import { Link } from "react-router-dom";
import { upload } from "./../services/profile";
import { verify as verifyService } from "./../services/authentication-api";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload = event => {
    event.preventDefault();
    console.log("The file to be uploaded is: ", event.target.files);
    const uploadData = new FormData();
    uploadData.append("imageUrl", event.target.files[0]);
    console.log("UPLOAD DATA BEFORE SERVICE", uploadData);

    upload(uploadData)
      .then(user => {
        this.setState({ user });
      })
      .catch(error => {
        console.log("Error while uploading the file: ", error);
      });
  };
  ShowPageVolunteerOrOrganization() {
    if (this.props.user.role === "User") {
      //---------------------------VOLUNTEER/DONOR!! FOR STYLING---------------------------------
      return (
        <div>
          <h1>Welcome {this.props.user.name}!</h1>
          <Row className="center">
            <Col>
              <Container>
                <Card style={{ width: "10rem" }}>
                  <Card.Img src={this.props.user.imageUrl} />
                  <Form>
                    <Form.Group>
                      <Form.Control
                        name="profileImage"
                        type="file"
                        onChange={this.handleFileUpload}
                      />
                    </Form.Group>
                  </Form>
                </Card>
              </Container>
            </Col>
            <Col>
              <Container>
                <Card style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Container>
              <Link to="/donation">
                <Button className="pink-btn btn">+ New Donation</Button>
              </Link>
              <Link to="/donation/list">
                <Button className="pink-btn btn">My Donations</Button>
              </Link>
              <Link to="/howItWorks">
                <Button className="pink-btn btn">
                  Deliver a donation to an Organization
                </Button>
              </Link>
            </Col>
          </Row>
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
                      <Card.Title>Add Volunteer</Card.Title>{" "}
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
