import React, { Component } from "react";
import { load } from "../services/donations";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

export default class DetailsDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: null
    };
    this.displayDonation = this.displayDonation.bind(this);
  }

  displayDonation() {
    load(this.props.match.params.id)
      .then(donation => {
        console.log("inside the laod function: " + donation);
        this.setState({
          donation
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.displayDonation();
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      !this.state.donation ||
      previousProps.match.params.id !== this.props.match.params.id
    ) {
      this.displayDonation();
    }
  }

  render() {
    const donation = this.state.donation;
    console.log(this.state);
    console.log(donation);

    return (
      <div>
        <h1>Details dontaion in here </h1>
        {/* <Card key={donation.donationName}>
          <Card.Body>
            <Card.Title>{donation.donationName}</Card.Title>
            <Card.Text>{donation.category}</Card.Text>
            <Card.Text>{donation.description}</Card.Text>
           

            <Link to={`/donation/${this.props.match.params.id}/edit`}>
              Edit Donation
            </Link>
            <Link to={`/donation/profile/${donation._creator._id}`}>
              Posted by {donation._creator.name}
            </Link>
          </Card.Body>
        </Card> */}
      </div>
    );
  }
}
