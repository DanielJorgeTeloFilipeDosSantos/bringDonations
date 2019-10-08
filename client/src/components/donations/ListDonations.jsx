import React, { Component } from "react";
import { list } from "../../services/donations";
import { Link } from "react-router-dom";

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
        <h3>List of all donations</h3>
        {this.state.donations.map(donation => (
          <Card key={donation.donationName}>
            <Card.Body>
              <Link to={`/donation/${donation._id}`} key={donation._id}>
                <Card.Title>{donation.donationName}</Card.Title>
              </Link>
              <Card.Text>{donation.category}</Card.Text>
              <Card.Text>{donation.description}</Card.Text>
              {/* <Card.Text>{donation.location}</Card.Text> */}
              <Card.Text>Written by {donation._creator.name}</Card.Text>
              <Link to={`/donation/${donation._id}/details`}>
                <Card.Text>See Details</Card.Text>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
