import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import bringLogo from "../assets/bring2.svg";

const Navigation = props => {
  if (props.user) {
    if (props.user.role === "User") {
      //---------------------------VOLUNTEER/DONOR!! FOR STYLING---------------------------------
      return (
        <div>
          <Navbar
            fixed="top"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand href="#home">
              {" "}
              <img
                src={bringLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/profile">
                  <Nav.Link href="#features">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/donation">
                  <Nav.Link href="#features">Browse Donations</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <Nav.Link href="#features">
                    Donations to be picked up
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <Nav.Link href="#features">My picked Donations</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <Nav.Link href="#features">My User profile</Nav.Link>
                </LinkContainer>
                <Form onSubmit={props.signOut}>
                  <Button type="submit">Sign Out</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
      //---------------------------ORGANIZATION !! FOR STYLING---------------------------------
    } else if (props.user.role === "Organization") {
      return (
        <div>
          <Navbar
            fixed="top"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand href="#home">
              {" "}
              <img
                src={bringLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/profile">
                  <Nav.Link href="#features">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/donationOrg">
                  <Nav.Link href="#features">Request Donation</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/donationOrg">
                  <Nav.Link href="#features">Sugest Donation</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/donationOrg">
                  <Nav.Link href="#features">Volunteer News</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <Nav.Link href="#features">My Organization profile</Nav.Link>
                </LinkContainer>
                <Form onSubmit={props.signOut}>
                  <Button type="submit">Sign Out</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
    //------------------------------------------------------------------
  } else {
    return (
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home">
          <img
            src={bringLogo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        {(!props.user && (
          <Fragment>
            <Link className="btn" to="/sign-in">
              Sign In
            </Link>
            <Link className="btn" to="/">
              Sign Up
            </Link>
          </Fragment>
        )) || <div>{this.ShowPageVolunteerOrOrganization()}</div>}
      </Navbar>
    );
  }
};

export default withRouter(Navigation);
