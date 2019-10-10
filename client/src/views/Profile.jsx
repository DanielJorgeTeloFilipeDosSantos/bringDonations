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
import Image from "react-bootstrap/Image";

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
      user: this.props.user,
      showForm: true
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  showForm() {
    if (this.state.showForm === false) {
      return (
        <Form>
          <Form.Group>
            <Form.Control
              name="profileImage"
              type="file"
              onChange={this.handleFileUpload}
            />
          </Form.Group>
        </Form>
      );
    }
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
        this.toggleButton();
        this.props.history.push("/profile");
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
          <Container className="center">
            <h3>Welcome {this.props.user.name}!</h3>
          </Container>

          <Container className="profile-form">
            <div className="round">
              <Card.Img className="img" src={this.props.user.imageUrl} />
            </div>

            <Button className="upload-image btn" onClick={this.toggleButton}>
              Upload Image
            </Button>
            {this.showForm()}

            <Link to="/donation">
              <Button className="pink-btn btn">+ New Donation</Button>
            </Link>
            <Link to="/donation">
              <Button className="pink-btn btn">My Donations</Button>
            </Link>
            <Link to="/howItWorks">
              <Button className="pink-btn btn">
                Deliver a donation to an Organization
              </Button>
            </Link>
          </Container>
        </div>
      );
      //---------------------------ORGANIZATION !! FOR STYLING---------------------------------
    } else if (this.props.user.role === "Organization") {
      return (
        <div>
          <Container className="center">
            <h3>Welcome {this.props.user.name}!</h3>
          </Container>

          {/* <Container className="organisation-icons">
            <Image src={charity} width="20%" rounded />
            <Image src={add} width="20%" rounded />
            <Image src={addVolunteer} width="20%" rounded />
            <Image src={settings} width="20%" rounded />
          </Container> */}

          <Container ClassName="d-flex justify-content-center">
            <Row className="text-center">
              <Col md={6}>
                <Image className="mt-3" src={charity} width="30%" rounded />
              </Col>
              <Col md={6}>
                <Image className="mt-3" src={add} width="30%" rounded />
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={6}>
                <Image
                  className="mt-3"
                  src={addVolunteer}
                  width="30%"
                  rounded
                />
              </Col>
              <Col md={6}>
                <Image className="mt-3" src={settings} width="30%" rounded />
              </Col>
            </Row>
          </Container>

          {/* <Container style={{ marginTop: "8vh" }}>
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
          </Container> */}
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
