import React, { Component } from "react";

//-------React---------
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
//-------Components---------

import ListDonations from "../components/donations/ListDonations";
import { create } from "./../services/donations";
import { donationPic } from "./../services/donationPic";
import geolocation from "../services/geolocation";
import { Link } from "react-router-dom";

export class Donation extends Component {
  constructor() {
    super();

    this.state = {
      donationName: "",
      category: "Food",
      description: "",
      location: "",
      imageUrl:
        "https://steamuserimages-a.akamaihd.net/ugc/943937261175229610/F69ADE744E3FE50B387C86B6883A4D49F4BFAE91/",
      categoryOptions: ["Food", "Clothing", "Furniture", "Other"],
      showForm: true
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.showForm = this.showForm.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
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
        this.props.history.push("/donation");
      })
      .catch(error => {
        console.log(error);
      });
  }

  //----------------------------------------- upload picture donation ---------------------------------------------

  toggleButton() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: this.props.user
  //   };
  //   this.handleFileUpload = this.handleFileUpload.bind(this);
  // }

  handleFileUpload = event => {
    event.preventDefault();
    console.log("The file to be uploaded is: ", event.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("imageUrl", event.target.files[0]);
    console.log("handleFileUploadddddddd", uploadData);
    donationPic(uploadData)
      .then(url => {
        this.setState({ imageUrl: url });
        console.log("stateeeeee", this.state.imageUrl);
      })
      .catch(error => {
        console.log("Error while uploading the file: ", error);
      });
  };

  //--------------------------------------------------- upload picture donation --------------------------------------------------

  showForm() {
    if (this.state.showForm === false) {
      return (
        <Form onSubmit={this.onFormSubmit}>
          <Container>
            <Card style={{ width: "10rem" }}>
              <Card.Img src={this.state.imageUrl} />
              <Form>
                <Form.Group>
                  <Form.Control
                    name="profileImage"
                    type="file"
                    onChange={this.handleFileUpload}
                  />
                </Form.Group>
              </Form>
            </Card>
          </Container>
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
          <Link to="/createSuccess">
            <Button variant="primary" type="submit">
              Create a donation
            </Button>
          </Link>
          {this.props.children}
        </Form>
      );
    }
  }

  render() {
    console.log("sattee2", this.state);
    return (
      <div>
        <Button onClick={this.toggleButton}>Add a Donation</Button>
        {this.showForm()}

        <ListDonations />
      </div>
    );
  }
}

export default Donation;
