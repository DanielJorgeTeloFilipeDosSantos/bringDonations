import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { edit } from "../services/donations";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationName: "",
      category: "",
      description: "",
      categoryOptions: ["Food", "Clothing", "Furniture", "Other"]
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
            <Form.Label>Edit your Donation</Form.Label>
            <Form.Control
              type="text"
              name="donationName"
              placeholder="Name your Donationo"
              onChange={this.handleFormChange}
            />

            <Form.Group>
              <Form.Label htmlFor="choose-category">Category </Form.Label>
              <Form.Control
                as="select"
                placeholder="Choose a Category"
                type="text"
                name="category"
                id="choose-category"
                onChange={this.handleFormChange}
                value={this.state.category}
              >
                {this.state.categoryOptions.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              name="description"
              placeholder="Give a brief descriptionfor your Donation"
              onChange={this.handleFormChange}
            />
            <Button className="submit-btn my-4" type="submit">
              Submit Changes
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
