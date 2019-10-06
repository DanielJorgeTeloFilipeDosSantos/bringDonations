import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HomeSlides from "../components/HomeSlides";

import { signUp as signUpService } from "../services/authentication-api";

import Frame from "react-frame-component";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      buttonClicked: "volunteer",
      email: "",
      name: "",
      password: "",
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
      formSlides: !this.state.formSlides,
      formSignUp: !this.state.formSignUp
    });
    console.log(this.state);
  }

  buttonClickChangeStateInstitution() {
    this.setState({
      ...this.state,
      buttonClicked: "institution",
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
            <h1>Voulunteers and donors</h1>
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
            <h1>Institutions</h1>
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
    const { email, name, password } = this.state;
    signUpService({ email, name, password })
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
        {this.state.formSlides && (
          <Frame frameBorder="0" style={{ width: "100%", height: "70vh" }}>
            <HomeSlides />
          </Frame>
        )}
        <div>
          <Button
            onClick={this.buttonClickChangeStateVolunteer}
            variant="primary"
          >
            Volunteers and Donors
          </Button>

          <Button
            onClick={this.buttonClickChangeStateInstitution}
            variant="primary"
          >
            Institutions
          </Button>
          {this.state.formSignUp && this.changeButton()}
          {/* {this.changeButton()} */}
        </div>
      </div>
    );
  }
}
