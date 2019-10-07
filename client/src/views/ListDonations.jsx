import React, { Component } from "react";
import { list } from "./../services/donations";

//import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default class ListDonations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: []
    };
    this.listAll = this.listAll.bind(this);
  }

  listAll() {
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
  componentDidMount() {
    this.listAll();
  }

  render() {
    return (
      <div>
        <h1>HELOOOOO</h1>
        {console.log(this.state)}
        {this.state.donations.map(donation => (
          <Card key={donation.donationName}>
            <Card.Body>
              <Card.Title>{donation.donationName}</Card.Title>
              <Card.Text>{donation.category}</Card.Text>
              <Card.Text>{donation.description}</Card.Text>
              <Card.Text>{donation.location}</Card.Text>
              <Card.Text>Written by {donation._creator.name}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
