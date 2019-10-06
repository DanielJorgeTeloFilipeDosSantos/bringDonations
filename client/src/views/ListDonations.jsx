import React, { Component } from "react";
import { list } from "./../services/donations";

//import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default class ListDonations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: null
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
        {/* {this.state.donations.map(donation => (
          <Card>
            <Card.Body>
              <Card.Title>{donation}</Card.Title>
              <Card.Text>{donation.category}</Card.Text>
              <Card.Text>{donation.description}</Card.Text>
              <Card.Text>{donation.location}</Card.Text>
              <Card.Text>Written by {donation._creator}</Card.Text>
            </Card.Body>
          </Card>
        ))} */}
      </div>
    );
  }
}
