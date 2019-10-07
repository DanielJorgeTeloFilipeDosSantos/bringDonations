import React, { Component } from "react";

//-------React---------
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

//-------Components---------
import CreateDonationForm from "../components/donations/CreateDonationForm";
import ListDonations from "../components/donations/ListDonations";
import { create } from "./../services/donations";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: {
        donationName: "",
        category: "",
        description: "",
        location: "",
        imageUrl: "",
        _creator: ""
      }
    };
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.createDonation = this.createDonation.bind(this);
  }

  onFormValueChange(data) {
    this.setState({
      donation: {
        ...this.state.donation,
        ...data
      }
    });
  }

  createDonation() {
    const donation = this.state.donation;
    create(donation)
      .then(donation => {
        this.props.history.push(`/donation`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Create a Donation Form</h3>
        <Container>
          <CreateDonationForm
            value={this.state.donation}
            onValueChange={this.onFormValueChange}
            onFormSubmit={this.createDonation}
          >
            <Button type="submit">Post</Button>
          </CreateDonationForm>
          <ListDonations />
        </Container>
      </div>
    );
  }
}
