import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import bringLogoTagline from "../assets/images/BringTagline.png";

const HomeLogged = () => {
  return (
    <div>
      <Container className="center my-3">
        <Link to="/profile">
          <Image
            width="100%"
            ClassName="logo-tagline"
            src={bringLogoTagline}
            fluid
          />
        </Link>
      </Container>
    </div>
  );
};

export default HomeLogged;
