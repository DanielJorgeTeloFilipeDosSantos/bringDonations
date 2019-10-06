import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { create } from "../../services/donations";
export default class CreateDonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationName: "",
      category: "",
      description: "",
      location: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  onFormSubmit(event) {
    event.preventDefault();
    const { donationName, category, description, location } = this.state;
    create();
  }
  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group>
          <Form.Label>Donation Name</Form.Label>
          <Form.Control
            type="text"
            name="donationName"
            placeholder="Give your Donation a Name"
            value={this.state.donationName}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose a Donation Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Choose a Category"
            value={this.state.category}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Pick up Address"
            value={this.state.location}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Take a photo</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            placeholder="add image url"
            value={this.state.imageUrl}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Give a brief Describtion of your Donation"
            value={this.state.description}
            onChange={this.onValueChange}
          />
        </Form.Group>
      </Form>
    );
  }
}
