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
          <Image width="100%" src={bringLogoTagline} fluid />
        </Link>
        <Container>
          <Container className="profile-div my-4 ">
            <Link to="/chooseDon">
              <Button className="request-btn mx-4 mr-2">
                Search Donations
              </Button>
            </Link>
            <Link to="/howItWorks">
              <Button className="request-btn mx-4">Deliver a Donation</Button>
            </Link>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default HomeLogged;
