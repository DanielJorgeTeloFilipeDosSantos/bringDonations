import React, { Component } from "react";
//import { Link } from "react-router-dom";
import placeholderimage from "../assets/images/edward-cisneros-_H6wpor9mjs-unsplash.jpg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import DonationList from "../components/donations/ListDonations";

import add from "./add.svg";
import charity from "./charity.svg";
import newspaper from "./newspaper.svg";
import settings from "./settings.svg";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  ShowPageVolunteerOrOrganization() {
    console.log(this.props.user.role);
    if (this.props.user.role === "User") {
      //---------------------------VOLUNTEER/DONOR!! FOR STYLING---------------------------------
      return (
        <div>
          <h1>Welcome {this.props.user.name}!</h1>
          <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="pick up" title="Donations to be Picked up">
                {/* <Link className="btn" to="/donation">
            Search donations
          </Link>
          <Link className="btn" to="/donation/requested">
            See your requested donations
          </Link> */}
                <DonationList />
              </Tab>
              <Tab eventKey="donation" title="My posted Donation">
                {/* <Link className="btn" to="/donation">
            Search donations
          </Link>
          <Link className="btn" to="/donation/requested">
            See your requested donations
          </Link> */}
                <DonationList />
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Figure className="my-5">
                  <Figure.Image
                    width={200}
                    height={200}
                    alt="userimage"
                    src={placeholderimage}
                    rounded
                  />
                  {/* <Figure.Caption>{this.props.user.email}</Figure.Caption> */}
                </Figure>
              </Tab>
            </Tabs>
          </Container>
        </div>
      );
      //---------------------------ORGANIZATION !! FOR STYLING---------------------------------
    } else if (this.props.user.role === "Organization") {
      return (
        <div>
          <Container>
            <h1>Welcome {this.props.user.name}!</h1>
          </Container>
          <Container style={{ marginTop: "8vh" }}>
            <Row>
              <Col>
                <Card style={{ width: "10rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "50%", marginLeft: "25%" }}
                    src={charity}
                  />
                  <Card.Body>
                    <Card.Title>Request Donation</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "10rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "50%", marginLeft: "25%" }}
                    src={add}
                  />
                  <Card.Body>
                    <Card.Title>Sugest Donation</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: "10rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "50%", marginLeft: "25%" }}
                    src={newspaper}
                  />
                  <Card.Body>
                    <Card.Title>News Feed</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "10rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "50%", marginLeft: "25%" }}
                    src={settings}
                  />
                  <Card.Body>
                    <Card.Title>Edit Profile</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    //------------------------------------------------------------------
  }

  render() {
    // if (this.props.user.role === "Organization") {
    //   return (
    //     <div>
    //       <h1>Organization Profile</h1>
    //     </div>
    //   );
    // } else if (this.props.user.role === "User") {
    return (
      <div className="margin-top">
        {!this.props.user ? (
          this.props.history.push("/")
        ) : (
          <div>{this.ShowPageVolunteerOrOrganization()}</div>
        )}

        {/* {this.props.user ? (
          <div>
            <h1>Welcome {this.props.user.name}!</h1>
          </div>
        ) : (
          this.props.history.push("/")
        )} */}
      </div>
    );
  }
  // }
}

export default Profile;
