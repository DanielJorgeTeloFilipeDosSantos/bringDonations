import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import bringLogo from "../assets/images/BringLogo1.png";
import bringLogoLeaf from "../assets/images/BringLeaf.png";
import profileIcon from "../assets/images/ProfileIcon.png";

const Navigation = props => {
  if (props.user) {
    if (props.user.role === "User") {
      //---------------------------VOLUNTEER/DONOR!! FOR STYLING---------------------------------
      return (
        <div>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="*"
            sticky="top"
            variant="dark"
          >
            <Navbar.Brand href="/">
              <img
                src={bringLogoLeaf}
                width="70"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/profile">
                  <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/donation">
                  <Nav.Link href="/donation">Browse Donations</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/profile">
                  <Nav.Link href="/profile">My Profile</Nav.Link>
                </LinkContainer>
                <Form onSubmit={props.signOut}>
                  <Button className="sign-out btn" type="submit">
                    Sign Out
                  </Button>
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
            bg="*"
            sticky="top"
            variant="dark"
          >
            <Navbar.Brand href="/">
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
                  <Nav.Link>Home</Nav.Link>
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
                  <Nav.Link href="#features">{profileIcon}</Nav.Link>
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
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="*">
        <Navbar.Brand href="/">
          <img
            src={bringLogo}
            width="200"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        {(!props.user && (
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/sign-in">Log-In</Nav.Link>
            </Nav.Item>
          </Nav>
        )) || <div>{this.ShowPageVolunteerOrOrganization()}</div>}
      </Navbar>
    );
  }
};

export default withRouter(Navigation);
