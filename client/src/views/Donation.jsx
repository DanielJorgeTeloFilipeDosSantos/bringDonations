import React, { Component } from "react";
import CreateDonationForm from "../components/donations/CreateDonationForm";
import Button from "react-bootstrap/Button";
import { create } from "../services/donations";
export default class Donations extends Component {
  render() {
    return (
      <div className="my-5">
        <h1>Add Donation</h1>
        <CreateDonationForm />
      </div>
    );
  }
}
