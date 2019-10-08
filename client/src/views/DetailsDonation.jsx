import React, { Component } from "react";
import { load, remove } from "../services/donations";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class DetailsDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: ""
    };
    this.displayDonation = this.displayDonation.bind(this);
    this.deleteDonation = this.deleteDonation.bind(this);
  }

  displayDonation() {
    load(this.props.match.params.id)
      .then(donation => {
        this.setState({
          donation
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
    return (
      <div>
        <h1>Details dontaion in here </h1>
        <Card key={donation.donationName}>
          <Card.Body>
            <Card.Title>{donation.donationName}</Card.Title>
            <Card.Text>{donation.category}</Card.Text>
            <Card.Text>{donation.description}</Card.Text>

            <Link to={`/donation/${this.props.match.params.id}/edit`}>
              <Button className="btn">Edit Donation</Button>
            </Link>

            <Button onClick={this.deleteDonation} className="btn">
              Delete
            </Button>

            {/*
            <Link to={`/donation/profile/${donation._creator.name}`}>
              Posted by {donation._creator.name}
            </Link> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
