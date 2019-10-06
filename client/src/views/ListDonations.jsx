import React, { Component } from "react";
import { list } from "./../services/donations";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: []
    };
  }

  componentDidMount() {
    list()
      .then(donations => {
        this.setState({
          donations
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.donations.map(donation => (
          <Link to={`/donation/${donation._id}`} key={donation._id}>
            <Card>
              <Card.Body>
                <Card.Title>{donation.donationName}</Card.Title>
                <Card.Text>{donation.category}</Card.Text>
                <Card.Text>{donation.description}</Card.Text>
                <Card.Text>{donation.location}</Card.Text>
                <Card.Text>Written by {donation._creator}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    );
  }
}
