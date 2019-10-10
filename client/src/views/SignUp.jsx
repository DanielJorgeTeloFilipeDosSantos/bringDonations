import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LandingPage from "../components/LandingPage";

import { signUp as signUpService } from "../services/authentication-api";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      buttonClicked: "volunteer",
      email: "",
      name: "",
      password: "",
      role: "",
      formSlides: true,
      formSignUp: false
    };
    this.buttonClickChangeStateVolunteer = this.buttonClickChangeStateVolunteer.bind(
      this
    );
    this.buttonClickChangeStateInstitution = this.buttonClickChangeStateInstitution.bind(
      this
    );
  }

  buttonClickChangeStateVolunteer() {
    this.setState({
      ...this.state,
      buttonClicked: "volunteer",
      role: "User",
      formSlides: !this.state.formSlides,
      formSignUp: !this.state.formSignUp
    });
    console.log(this.state);
  }

  buttonClickChangeStateInstitution() {
    this.setState({
      ...this.state,
      buttonClicked: "institution",
      role: "Organization",
      formSlides: !this.state.formSlides,
      formSignUp: !this.state.formSignUp
    });
    console.log(this.state);
  }

  changeButton() {
    if (this.state.buttonClicked === "volunteer") {
      return (
        <div>
          <Container>
            <h1>Volunteer's Sign Up</h1>
          </Container>
          <Form onSubmit={this.signUp}>
            <Form.Group>
              <Form.Label htmlFor="sign-up-email">Email</Form.Label>
              <Form.Control
                id="sign-up-email"
                name="email"
                required
                type="email"
                placeholder="Email"
                onChange={this.onValueChange}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="sign-up-name">Name</Form.Label>
              <Form.Control
                id="sign-up-name"
                name="name"
                required
                placeholder="Name"
                onChange={this.onValueChange}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="sign-up-password">Password</Form.Label>
              <Form.Control
                id="sign-up-password"
                name="password"
                required
                type="password"
                placeholder="Password"
                onChange={this.onValueChange}
                value={this.state.password}
              />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        </div>
      );
    } else if (this.state.buttonClicked === "institution") {
      return (
        <div>
          <Container>
            <h1>Organisation's Sign Up</h1>
          </Container>
          <Form onSubmit={this.signUp}>
            <Form.Group>
              <Form.Label htmlFor="sign-up-email">Email</Form.Label>
              <Form.Control
                id="sign-up-email"
                name="email"
                required
                type="email"
                placeholder="Email"
                onChange={this.onValueChange}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="sign-up-name">Name</Form.Label>
              <Form.Control
                id="sign-up-name"
                name="name"
                required
                placeholder="Name"
                onChange={this.onValueChange}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="sign-up-password">Password</Form.Label>
              <Form.Control
                id="sign-up-password"
                name="password"
                required
                type="password"
                placeholder="Password"
                onChange={this.onValueChange}
                value={this.state.password}
              />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        </div>
      );
    }
  }

  onValueChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "number"
        ? event.target.valueAsNumber
        : event.target.value;
    this.setState({
      [name]: value
    });
  };

  signUp = event => {
    event.preventDefault();
    const { email, name, password, role } = this.state;
    signUpService({ email, name, password, role })
      .then(user => {
        this.props.loadUser(user);
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Container className="center">
          <Row>
            <Col>
              <h1 className="center">Sign up As a </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="pink-btn mx-4"
                onClick={this.buttonClickChangeStateVolunteer}
                variant="primary"
              >
                Volunteer
              </Button>
            </Col>

            <Col>
              <Button
                className="pink-btn btn mx-4"
                onClick={this.buttonClickChangeStateInstitution}
                variant="primary"
              >
                Organisation
              </Button>
            </Col>
          </Row>
          {this.state.formSignUp && this.changeButton()}
          {/* {this.changeButton()} */}
        </Container>
        <LandingPage />
      </div>
    );
  }
}
