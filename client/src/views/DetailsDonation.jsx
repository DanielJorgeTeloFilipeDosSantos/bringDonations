import React, { Component } from "react";
import { load, remove } from "../services/donations";
import { Link } from "react-router-dom";
import { verify as verifyService } from "../services/authentication-api";
import placeholderImg from "../assets/images/childeren.jpg";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";

export default class DetailsDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: ""
      //user: null
    };
    this.displayDonation = this.displayDonation.bind(this);
    this.deleteDonation = this.deleteDonation.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  displayDonation() {
    load(this.props.match.params.id)
      .then(donation => {
        this.setState({
          donation: donation
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteDonation() {
    const id = this.props.match.params.id;
    //console.log("BUTTTTTTTOOON DELETE ME" + id);
    remove(this.props.match.params.id)
      .then(donation => {
        this.props.history.push(`/donation`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.displayDonation();
    //this.loadUser();
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      !this.state.donation ||
      previousProps.match.params.id !== this.props.match.params.id
    ) {
      this.displayDonation();
    }
  }

  loadUser() {
    verifyService()
      .then(user => {
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    //console.log(this.state.donation._creator);
    //console.log(this.props);
    const donation = this.state.donation;
    // if (this.props.user._id !== donation._creator._id) {
    //   console.log(donation);
    // }
    return (
      <div>
        <h1>Details dontaion in here </h1>

        {/*  ----------Conditionally render this by checking if user is equal to cerator !!! */}

        <Link to={`/donation/${this.props.match.params.id}/edit`}>
          <Button className="edit btn">Edit</Button>
        </Link>
        <Button onClick={this.deleteDonation} className="btn delete">
          Delete
        </Button>
        <Card className="donation-card detail" key={donation.donationName}>
          <Card.Img src={placeholderImg} alt="Card image" />
          <Card.ImgOverlay></Card.ImgOverlay>
          {/* <Link
              className="link-overwrite"
              to={`/donation/${donation._id}`}
              key={donation._id}
            >
              <Card.Title>{donation.donationName}</Card.Title>
            </Link> */}
          <div className="inside-donation-card">
            <Row>
              <Card.Title>{donation.donationName}</Card.Title>
            </Row>
            <Row>
              <Card.Text>
                This Donation is under the Category {donation.category}
              </Card.Text>
              <Card.Text>About this Donation: {donation.description}</Card.Text>
              {/* <Card.Text>
                <small>Posted by {donation._creator.name}</small>
              </Card.Text> */}
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}
