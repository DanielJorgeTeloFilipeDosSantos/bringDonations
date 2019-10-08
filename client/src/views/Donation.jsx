import React, { Component } from "react";

//-------React---------
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//-------Components---------

import ListDonations from "../components/donations/ListDonations";
import { create } from "./../services/donations";
import geolocation from "../services/geolocation";

export class Donation extends Component {
  constructor() {
    super();

    this.state = {
      donationName: "",
      category: "",
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
<<<<<<< HEAD
      .then(donations => {
        console.log(donations);
        console.log(this.props.history);
=======
      .then(donation => {
        this.toggleButton();
        // console.log(donations);
        // console.log(this.props.history);
>>>>>>> df74aee2dfe68812f2663d1b634678aeac76c0d9
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
        <Button onClick={this.toggleButton}>Add a Donation</Button>
        {this.showForm()}

        <ListDonations />
      </div>
    );
  }
}

export default Donation;

// import React, { Component } from "react";
// import { Form, Button, Container } from "react-bootstrap";
// import { addNewBeer } from "../services/beerApi";
// export default class NewBeer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       tagline: "",
//       description: "",
//       first_brewed: "",
//       brewers_tips: "",
//       attenuation_level: "",
//       contributed_by: "",
//       image_url: ""
//     };
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleFormChange = this.handleFormChange.bind(this);
//   }
//   handleFormSubmit(event) {
//     event.preventDefault();
//     addNewBeer(this.state)
//       .then(beers => {
//         console.log(beers);
//         this.props.history.push("/");
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   handleFormChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//   render() {
//     return (
//       <Container>
//         <Form onSubmit={this.handleFormSubmit}>
//           <Form.Group>
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={this.handleFormChange}
//             />
//             <Form.Label>Tagline</Form.Label>
//             <Form.Control
//               type="text"
//               name="tagline"
//               placeholder="Tagline"
//               onChange={this.handleFormChange}
//             />
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               type="textarea"
//               name="description"
//               placeholder="Descrpition"
//               onChange={this.handleFormChange}
//             />
//             <Form.Label>First Brewed</Form.Label>
//             <Form.Control
//               type="text"
//               name="first_brewed"
//               placeholder="First Brewed"
//               onChange={this.handleFormChange}
//             />
//             <Form.Label>Brewers Tip</Form.Label>
//             <Form.Control
//               type="text"
//               name="brewers_tips"
//               placeholder="Brewers Tip"
//               onChange={this.handleFormChange}
//             />
//             <Form.Label>Attenuation Level</Form.Label>
//             <Form.Control
//               type="text"
//               name="attenuation_level"
//               placeholder="Attenuation Level"
//               onChange={this.handleFormChange}
//             />
//             <Form.Label>Contributed By </Form.Label>
//             <Form.Control
//               type="text"
//               name="contributed_by"
//               placeholder="Contributed by"
//               onChange={this.handleFormChange}
//             />
//             <Form.Label>Image Url </Form.Label>
//             <Form.Control
//               type="text"
//               name="image_url"
//               placeholder="URl!"
//               onChange={this.handleFormChange}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// //-------React---------
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";

// //-------Components---------
// import CreateDonationForm from "../components/donations/CreateDonationForm";
// import ListDonationsView from "./../views/ListDonations";
// import { create } from "./../services/donations";
// import geolocation from "../services/geolocation";

// export default class Create extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       donationName: "",
//       category: "",
//       description: "",
//       location: "",
//       imageUrl: "",
//       _creator: "",
//       showForm: true
//     };
//     this.onFormValueChange = this.onFormValueChange.bind(this);
//     this.createDonation = this.createDonation.bind(this);
//     this.buttonChange = this.buttonChange.bind(this);
//     this.renderForm = this.renderForm.bind(this);
//   }

//   componentDidMount() {
//     geolocation().then(({ coordinates }) => {
//       console.log(coordinates);
//       this.setState({ ...this.state, location: coordinates });
//       console.log("this.state", this.state);
//     });
//   }

//   onFormValueChange(data) {
//     this.setState({
//       donation: {
//         ...this.state.donation,
//         ...data
//       }
//     });
//     console.log("onFormvalueCHange", this.state);
//   }

//   buttonChange() {
//     this.setState({
//       ...this.state,
//       showForm: !this.state.showForm
//     });
//   }

//   renderForm() {
//     return (
//       <div>
//         <CreateDonationForm
//           value={this.state.donation}
//           onValueChange={this.onFormValueChange}
//           onFormSubmit={this.createDonation}
//         >
//           <Button type="submit">Post</Button>
//         </CreateDonationForm>
//       </div>
//     );
//   }

//   createDonation() {
//     const donation = this.state.donation;
//     console.log("view donation", donation);
//     create(donation)
//       .then(donation => {
//         this.props.history.push(`/donation`);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <Button onClick={this.buttonChange}>Post Donation</Button>
//         {this.state.showForm && this.renderForm()}

//         <Container>
//           <ListDonationsView />
//         </Container>
//       </div>
//     );
//   }
// }
