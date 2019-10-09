import React, { Component } from "react";

//-------React---------
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import charity from "./charity.svg";

//-------Components---------

import ListDonations from "../components/donations/ListDonations";
import { create } from "./../services/donations";
import geolocation from "../services/geolocation";

export class Donation extends Component {
  constructor() {
    super();

    this.state = {
      donationName: "",
      category: "Food",
      description: "",
      location: "",
      imageUrl: "",
      categoryOptions: ["Food", "Clothing", "Furniture", "Other"],
      showForm: true
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  componentDidMount() {
    geolocation().then(({ coordinates }) => {
      //console.log(coordinates);
      this.setState({ ...this.state, location: [coordinates] });
      //console.log("this.state", this.state);
    });
  }

  handleNameChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const donation = {
      donationName: this.state.donationName,
      category: this.state.category,
      description: this.state.description,
      location: this.state.location,
      imageUrl: this.state.imageUrl
    };

    create(donation)
      .then(donation => {
        this.toggleButton();
        // console.log(donations);
        // console.log(this.props.history);
        this.props.history.push("/donation");
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggleButton() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  showForm() {
    if (this.state.showForm === false) {
      return (
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Label>Name your Donation</Form.Label>
            <Form.Control
              type="text"
              name="donationName"
              placeholder="Donation Name"
              value={this.state.donationName}
              onChange={this.handleNameChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="choose-category">Category </Form.Label>
            <Form.Control
              as="select"
              placeholder="Choose a Category"
              type="text"
              name="category"
              id="choose-category"
              onChange={this.handleNameChange}
              value={this.state.category}
            >
              {this.state.categoryOptions.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* <Form.Group>
            <Form.Label>Pick a Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              placeholder="Cathegory"
              value={this.state.category}
              onChange={this.handleNameChange}
            />
          </Form.Group> */}

          <Form.Group>
            <Form.Label>Give a brief description to your donation</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Add a description"
              value={this.state.description}
              onChange={this.handleNameChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create a donation
          </Button>
          {this.props.children}
        </Form>
      );
    }
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Request a donation</h1>
          <Row>
            <Col>
              <Card style={{ width: "10rem", border: "none" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "50%", marginLeft: "25%" }}
                  src={charity}
                />
                <Card.Body></Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <ListDonations />
      </div>
    );
  }
}

export default Donation;
