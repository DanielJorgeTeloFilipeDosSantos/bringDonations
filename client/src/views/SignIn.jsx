import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { signIn as signInService } from "../services/authentication-api";

export default class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

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

  signIn = event => {
    event.preventDefault();
    const { email, password } = this.state;
    signInService({ email, password })
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
        <Row className="center my-4">
          <h3>Sign in to your Account</h3>
        </Row>
        <Container my-4 className="form-margin">
          <Form onSubmit={this.signIn}>
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
            <p>
              <a className="link-overwrite" href="/">
                Not registered yet? Sign up here
              </a>
            </p>
            <Button type="submit">Sign In</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
