import React, { Component } from "react";

import { list } from "../services/donations";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Map from "../components/map/Map";
import ErrorBoundary from "../views/ErrorBoundary";
import geolocation from "../services/geolocation";
import ListDonation from "../components/donations/ListDonations";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      currentDonationClicked: {
        _id: "5d9cbd06e12c582b6e3a1724",
        latitude: 38.7107145,
        longitude: -9.1529484
      },
      location: { latitude: 38.7107145, longitude: -9.1529484 }
    };
    this.currentLocationClickedMethod = this.currentLocationClickedMethod.bind(
      this
    );
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
        <div
          style={{
            position: "sticky-bottom",
            overflow: "hidden",
            backgroundColor: "#333",
            position: "fixed",
            top: "0",
            width: "100%",
            height: "8vh",
            zIndex: "5"
          }}
        ></div>
        <ErrorBoundary>
          <Map />
        </ErrorBoundary>
      </div>
    );
  }
}
