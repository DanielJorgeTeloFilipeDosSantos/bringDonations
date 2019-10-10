import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import bringLogoLeaf from "../assets/images/BringLeaf.png";

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
            <LinkContainer to="/profile">
              <Navbar.Brand>
                <img
                  src={bringLogoLeaf}
                  width="60"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />{" "}
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/home">
                  <Nav.Link href="/home">Home</Nav.Link>
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
            collapseOnSelect
            expand="lg"
            bg="*"
            sticky="top"
            variant="dark"
          >
            <Navbar.Brand href="/">
              <img
                src={bringLogoLeaf}
                width="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/home">
                  <Nav.Link href="/home">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/donationOrg">
                  <Nav.Link href="/donationOrg">
                    Search and Request Donation
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/profile">
                  <Nav.Link href="/profile">Organisation Profile</Nav.Link>
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
    }
    //------------------------------------------------------------------
  } else {
    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="*">
        <Navbar.Brand href="/">
          <img
            src={bringLogoLeaf}
            width="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        {(!props.user && (
          <Nav className="justify-content-end" activeKey="/home">
            <LinkContainer className="text-white" to="/sign-in">
              <Nav.Link>Log-in</Nav.Link>
            </LinkContainer>
          </Nav>
        )) || <div>{this.ShowPageVolunteerOrOrganization()}</div>}
      </Navbar>
    );
  }
};

export default withRouter(Navigation);
