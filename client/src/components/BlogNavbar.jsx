import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import bringLogo from "../assets/bring2.svg";
import { LinkContainer } from "react-router-bootstrap";

export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" fixed="top" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={bringLogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/foo/bar">
                <Nav.Link href="#link">Our Mission</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/foo/bar">
                <Nav.Link href="#link">Donate or Volunteer</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/foo/bar">
                <Nav.Link href="#link">Parcipate as an institution</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
                <Nav.Link href="#link">Logout</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
