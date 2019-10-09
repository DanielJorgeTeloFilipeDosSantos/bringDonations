import React, { Component } from "react";

import { list } from "../services/donations";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Map from "../components/map/Map";
import geolocation from "../services/geolocation";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      currentDonationClicked: {
        _id: "5d9cbd06e12c582b6e3a1724",
        latitude: 52.519,
        longitude: -9.1529505
      },
      location: { latitude: 38.7107145, longitude: -9.1529484 },
      clear: 0,
      loading: true
    };
    this.currentLocationClickedMethod = this.currentLocationClickedMethod.bind(
      this
    );
  }

  componentDidMount() {
    list()
      .then(donations => {
        this.setState({
          donations
        });
      })
      .then(() => {
        geolocation().then(({ coordinates }) => {
          console.log("coordinates", coordinates);
          this.setState({ ...this.state, location: [coordinates] });
          //console.log("this.state", this.state);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  currentLocationClickedMethod(event) {
    ++this.childkey;
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
      currentDonationClicked: array.find(isCherries).location[0],
      clear: this.state.clear + 1
    });
    console.log("final.state", this.state);
  }

  render() {
    return (
      <div>
        <Map />
        {/* <div style={{ maxHeight: "80vh", overflow: "scroll" }}> */}
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
        {/* </div> */}
        {(!this.childkey && (
          <Map
            location={this.state.currentDonationClicked}
            myLocation={this.state.location}
            clear={this.state.clear}
            key={this.UNSAFE_componentWillMount}
          />
        )) || <div>nojentice...</div>}
        {this.state.donations.map(donation => (
          <Card key={donation.donationName}>
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
