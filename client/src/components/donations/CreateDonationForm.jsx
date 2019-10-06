import React, { Component } from "react";

import Form from "react-bootstrap/Form";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onValueChange({
      [name]: value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group>
          <Form.Label>Name your Donation</Form.Label>
          <Form.Control
            type="text"
            name="donationName"
            placeholder="Donation Name"
            value={this.props.value.donationName}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pick a Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Cathegory"
            value={this.props.value.category}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Give a brief description to your donation</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Add a description"
            value={this.props.value.description}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Adress</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Add a location"
            value={this.props.value.location}
            onChange={this.onValueChange}
          />
        </Form.Group>
        {this.props.children}
      </Form>
    );
  }
}
