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
          <Form onSubmit={this.signUp}>
            <Form.Group>
              <Form.Label htmlFor="sign-up-email">
                Sign up as a Donor & Volunteer
              </Form.Label>
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
              <Form.Control
                id="sign-up-name"
                name="name"
                required
                placeholder="Username"
                onChange={this.onValueChange}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group>
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
            <Button className="submit-btn" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      );
    } else if (this.state.buttonClicked === "institution") {
      return (
        <div>
          <Form onSubmit={this.signUp}>
            <Form.Group>
              <Form.Label htmlFor="sign-up-email">
                Sign up your Organisation
              </Form.Label>
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
              <Form.Control
                id="sign-up-name"
                name="name"
                required
                placeholder="Username"
                onChange={this.onValueChange}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group>
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
            <Button className="submit-btn" type="submit">
              Sign Up
            </Button>
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
              <h5 className="center">Sign Up As</h5>
            </Col>
          </Row>
          <Row>
            <Button
              className="pink-btn mx-4 mr-2"
              onClick={this.buttonClickChangeStateVolunteer}
            >
              Volunteer
            </Button>

            <Button
              className="pink-btn mx-4"
              onClick={this.buttonClickChangeStateInstitution}
            >
              Organisation
            </Button>
          </Row>
          {this.state.formSignUp && this.changeButton()}
          {/* {this.changeButton()} */}
        </Container>
        <LandingPage />
      </div>
    );
  }
}
