import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { edit } from "../services/donations";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationName: "",
      category: "",
      description: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const id = this.props.match.params.id;
    const donation = {
      donationName: this.state.donationName,
      category: this.state.category,
      description: this.state.description
    };

    edit(id, donation)
      .then(donations => {
        console.log(donations);
        this.props.history.push(`/donation/${id}/details`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Label>Donation Name</Form.Label>
            <Form.Control
              type="text"
              name="donationName"
              placeholder="donationName"
              onChange={this.handleFormChange}
            />

            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              placeholder="category"
              onChange={this.handleFormChange}
            />

            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              name="description"
              placeholder="description"
              onChange={this.handleFormChange}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
