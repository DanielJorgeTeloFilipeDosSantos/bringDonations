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
import Media from "react-bootstrap/Media";

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

          <Link to="/donation">
            <Button className="pink-btn d-flex justify-content-end">
              + New Donation
            </Button>
          </Link>

          <Container className="profile-form">
            <div className="round">
              <Card.Img className="img" src={this.props.user.imageUrl} />
            </div>

            <Button className="upload-btn" onClick={this.toggleButton}>
              Edit Image
            </Button>
            {this.showForm()}

            <Container className="profile-div my-4">
              <Link to="/donation">
                <Button className="request-btn mx-4 mr-2">My Donations</Button>
              </Link>
              <Link to="/howItWorks">
                <Button className="request-btn mx-4">Deliver a Donation</Button>
              </Link>
            </Container>
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
          <Container>
            <Media>
              <img
                width={60}
                height={60}
                className="mr-3 img-org"
                src={this.props.user.imageUrl}
                alt={this.props.user.name}
              />
              <Media.Body>
                <Button className="upload-btn" onClick={this.toggleButton}>
                  Upload Logo
                </Button>
                {this.showForm()}
              </Media.Body>
            </Media>
          </Container>

          {/* <Container className="center">
            <div>
              <Card.Img
                width="30%"
                height="30%"
                src={this.props.user.imageUrl}
              />
            </div>

            <Button className="upload-image btn" onClick={this.toggleButton}>
              Upload Image
            </Button>
            {this.showForm()}
          </Container> */}

          {/* <Container className="organisation-icons">
            <Image src={charity} width="20%" rounded />
            <Image src={add} width="20%" rounded />
            <Image src={addVolunteer} width="20%" rounded />
            <Image src={settings} width="20%" rounded />
          </Container> */}

          <Container ClassName="d-flex justify-content-center">
            <Row className="text-center">
              <Col className="my-4" md={6}>
                <Link to="/donationOrg">
                  <Image className="mb-3" src={charity} width="20%" />
                  <p>Search Donations</p>
                </Link>
              </Col>
              <Col className="my-4" md={6}>
                <Link>
                  <Image className="mb-3" src={add} width="20%" />
                  <p>Request Donation</p>
                </Link>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="my-4" md={6}>
                <Link>
                  <Image className="mb-3" src={addVolunteer} width="20%" />
                  <p>Add Volunteer</p>
                </Link>
              </Col>
              <Col className="my-4" md={6}>
                <Link>
                  <Image className="mb-3" src={settings} width="20%" />
                  <p>Settings</p>
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
