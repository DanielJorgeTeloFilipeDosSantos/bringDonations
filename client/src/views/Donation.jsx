import React, { Component } from "react";
import { Link } from "react-router-dom";

//-------React---------
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

//-------Components---------
import CreateDonationForm from "../components/donations/CreateDonationForm";
import ListDonationsView from "./../views/ListDonations";
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
        _creator: "",
        showForm: true
      }
    };
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.createDonation = this.createDonation.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  onFormValueChange(data) {
    this.setState({
      donation: {
        ...this.state.donation,
        ...data
      }
    });
  }

  buttonChange() {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  }

  renderForm() {
    return (
      <div>
        <CreateDonationForm
          value={this.state.donation}
          onValueChange={this.onFormValueChange}
          onFormSubmit={this.createDonation}
        >
          <Button type="submit">Post</Button>
        </CreateDonationForm>
      </div>
    );
  }

  createDonation() {
    const donation = this.state.donation;
    create(donation)
      .then(donation => {
        this.props.history.push(`/donation/${donation._id}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Button onClick={this.buttonChange}>Post Donation</Button>
        {this.state.showForm && this.renderForm()}

        <Container>
          <ListDonationsView />
        </Container>
      </div>
    );
  }
}
