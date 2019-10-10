import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { list } from "../services/donations";

export class ChooseDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDonationClicked: {
        _id: "5d9cbd06e12c582b6e3a1724",
        latitude: 38.7107145,
        longitude: -9.1529484
      },
      location: { latitude: 38.7107145, longitude: -9.1529484 },
      donations: [],
      _donationPost: [],
      donationId: ""
    };
    this.currentLocationClickedMethod = this.currentLocationClickedMethod.bind(
      this
    );
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

  currentLocationClickedMethod(event) {
    console.log("donation clicked");
    console.log(event.target.value);
    const ee = event.target.value;
    console.log("ee", ee);
    //do js to get location from the id
    const array = this.state.donations;
    function isCherries(donation) {
      return donation._id === ee;
    }

    console.log("findddddd", array.find(isCherries).location[0]);

    this.setState({
      ...this.state,
      currentDonationClicked: array.find(isCherries).location[0]
    });
    console.log("final.state", this.state);
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Choose a donation:</h1>
        </Container>
        <Container>
          <div>
            <h3>List of all donations</h3>
            {this.state.donations.map(donation => (
              <Card key={donation._id}>
                <Card.Body>
                  <button
                    onClick={this.currentLocationClickedMethod}
                    value={donation._id}
                  >
                    {donation.donationName}
                  </button>
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
        </Container>
      </div>
    );
  }
}

export default ChooseDonation;
