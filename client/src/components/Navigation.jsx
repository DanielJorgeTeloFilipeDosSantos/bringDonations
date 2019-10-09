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
      )) || (
        <Fragment>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/profile">
                <Nav.Link href="#features">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/donationOrg">
                <Nav.Link>Request Donation</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>Sugest Donation</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>Volunteer News</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>Edit Profile</Nav.Link>
              </LinkContainer>
              <Form onSubmit={props.signOut}>
                <Button type="submit">Sign Out</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Fragment>
      )}
    </Navbar>
  );
};

export default withRouter(Navigation);

{
  /*  <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">Inverte</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link href="#features">Home</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#pricing">Missao</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <LinkContainer to="/signup">
                <Nav.Link>Sign up</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
                <Nav.Link>Sign in</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */
}

{
  /* <Navbar bg="light" fixed="top" collapseOnSelect expand="lg">
      <Navbar.Brand href="/donation">
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
      )) || (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link href="#features">Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#pricing">Missao</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer to="/signup">
              <Nav.Link>Sign up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>Sign in</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}; */
}
