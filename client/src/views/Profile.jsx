import React, { Component } from "react";
//import { Link } from "react-router-dom";
import placeholderimage from "../assets/images/edward-cisneros-_H6wpor9mjs-unsplash.jpg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import DonationList from "../components/donations/ListDonations";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
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
          <div>
            <h1>Welcome {this.props.user.name}!</h1>
          </div>
        )}

        {/* {this.props.user ? (
          <div>
            <h1>Welcome {this.props.user.name}!</h1>
          </div>
        ) : (
          this.props.history.push("/")
        )} */}

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
  }
  // }
}

export default Profile;
