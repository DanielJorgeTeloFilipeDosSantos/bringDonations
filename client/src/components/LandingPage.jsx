import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foodImg from "../assets/images/calle-macarone-Vl78eNdiJaQ-unsplash.jpg";
import organisationImg from "../assets/images/peopelorganisation.jpg";
import childrenImg from "../assets/images/childeren.jpg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import bringLogoTagline from "../assets/images/BringTagline.png";

const LandingPage = () => {
  return (
    <div>
      {/* <Container className="center my-3">
        <Image
          width="20%"
          ClassName="logo-tagline"
          src={bringLogoTagline}
          fluid
        />
      </Container> */}
      <Carousel wrap height="80%" className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={foodImg} alt="First slide" />
          <Carousel.Caption>
            <div className="image-overlay">
              <h3>Every Donation makes a Difference!</h3>
              <p>
                No matter if Food, Clothing or Furnitue. We know that every
                small donation can make big difference to someone else's life .
                We at Bring are offering you the platform to make donations
                easier.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={childrenImg} alt="First slide" />
          <Carousel.Caption>
            <div className="image-overlay">
              <h3>Give back to the Community</h3>
              <p>
                Help us as a Volunteer and give back to the Community in your
                very own way. With our app you can give by posting your
                donations or volunteer to pick them up and deliver them to the
                corresponding Organisations.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={organisationImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="image-overlay">
              <h3>Join us as an Organisation</h3>
              <p>
                We have partnered with many Organisations to help those in need.
                If you are interested to join our team, just sign up as an
                Institution and benefit from receiving your requested donations.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPage;
