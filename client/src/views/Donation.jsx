import React, { Component, Fragment } from "react";

//-------React---------
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
//-------Components---------

import ChooseDonation from "./ChooseDonation";
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
        "https://cdn.dribbble.com/users/244470/screenshots/3339348/plus_pen.gif",
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
    console.log("The file to be uploaded is: ", event.target.files);
    const uploadData = new FormData();
    uploadData.append("imageUrl", event.target.files[0]);
    console.log("UPLOAD DATA BEFORE SERVICE", uploadData);

    donationPic(uploadData)
      .then(url => {
        console.log("PLOADEDPIC", url);
        this.setState({ ...this.state, imageUrl: url });
        console.log("stateeeeee", this.state.imageUrl);
      })
      .catch(error => {
        console.log("Error while uploading the file: ", error);
      });
  };

  //--------------------------------------------------- upload picture donation --------------------------------------------------

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
        this.props.history.push("/createSuccess");
      })
      .catch(error => {
        console.log(error);
      });
  }

  showForm() {
    if (this.state.showForm === false) {
      return (
        <div>
          <Container>
            <Card style={{ width: "10rem" }}>
              <Card.Img src={this.state.imageUrl} />
              <Form>
                <Form.Group>
                  <Form.Control
                    name="imageUrl"
                    type="file"
                    onChange={this.handleFileUpload}
                  />
                </Form.Group>
              </Form>
            </Card>
          </Container>
          <Container>
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
                <Form.Label>
                  Give a brief description to your donation
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  type="textarea"
                  name="description"
                  placeholder="Add a description"
                  value={this.state.description}
                  onChange={this.handleNameChange}
                />
              </Form.Group>
              {/* <Link to="/createSuccess"> */}
              <Button className="submit-btn" type="submit">
                Post
              </Button>
              {/* </Link> */}
              {this.props.children}
            </Form>
          </Container>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Button className="direction center my-2" onClick={this.toggleButton}>
          {" "}
          + New Donation
        </Button>
        {this.showForm()}

        <ChooseDonation />
      </div>
    );
  }
}

export default Donation;
