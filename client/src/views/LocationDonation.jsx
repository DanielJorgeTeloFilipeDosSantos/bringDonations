import React, { Component } from "react";

import { list } from "../services/donations";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Map from "../components/map/Map";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      _donationPost: []
    };
    // this.pickUpButton = this.pickUpButton.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
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

  // onSubmit = event => {
  //   event.preventDefault();
  //   console.log("EVENT TARGET", event);

  //   this.setState({
  //     donationId: event.target.value
  //   });
  //   console.log(this.state);^
  // };

  // pickUpButton(event) {
  //   event.preventDefault();
  //   console.log(event);
  //   console.log("BUTTON");
  //   pickup()
  //     .then(user => {
  //       const donationPost = user._donationPost;
  //       //console.log(event.target.value);
  //       this.setState({ donationPost });
  //       // this.setState({
  //       // user._donationPost: .push(donation._id);
  //       // });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    console.log(this.state.donation);
    return (
      <div>
        <Map />
        <div style={{ maxHeight: "80vh", overflow: "scroll" }}>
          {this.state.donations.map(donation => (
            <Card key={donation.donationName}>
              <Card.Body>
                <Link to={`/donation/${donation._id}`} key={donation._id}>
                  <Card.Title>{donation.donationName}</Card.Title>
                </Link>
                {/* 
              <Form onSubmit={this.onSubmit}>
                <Form.Control
                  value={this.state.donationId}
                  name="donation-id"
                  hidden
                ></Form.Control>
                <Button type="submit" className="btn-sm">
                  Pick-Up
                </Button>
              </Form> */}
                <Card.Text>{donation.category}</Card.Text>
                <Card.Text>{donation.description}</Card.Text>
                <Link to={`/donation/${donation._id}/details`}>
                  <Card.Text>See Details</Card.Text>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
