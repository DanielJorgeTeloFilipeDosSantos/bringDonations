import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";

import bringLogo from "../assets/bring2.svg";

const Navigation = props => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
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
        <Fragment>
          <Link className="btn" to="/profile">
            {props.user.name}
          </Link>

          <Link className="btn" to="/donation">
            Browse Donation
          </Link>
          <Form onSubmit={props.signOut}>
            <Button type="submit">Sign Out</Button>
          </Form>
        </Fragment>
      )}
    </Navbar>
  );
};

export default withRouter(Navigation);
