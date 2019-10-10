import React, { Component } from "react";
import { load, remove } from "../services/donations";
import { Link } from "react-router-dom";
import placeholderImg from "../assets/images/childeren.jpg";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";

export default class DetailsDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: ""
    };
    this.displayDonation = this.displayDonation.bind(this);
    this.deleteDonation = this.deleteDonation.bind(this);
  }

  displayDonation() {
    load(this.props.match.params.id)
      .then(donation => {
        this.setState({
          donation
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteDonation() {
    const id = this.props.match.params.id;
    //console.log("BUTTTTTTTOOON DELETE ME" + id);
    remove(this.props.match.params.id)
      .then(donation => {
        this.props.history.push(`/donation`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.displayDonation();
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      !this.state.donation ||
      previousProps.match.params.id !== this.props.match.params.id
    ) {
      this.displayDonation();
    }
  }

  render() {
    console.log(this.state.donation._creator);
    const donation = this.state.donation;
    return (
      <div>
        <h1>Details dontaion in here </h1>
        {/* <Card key={donation.donationName}>
          <Card.Body>
            <Card.Title>{donation.donationName}</Card.Title>
            <Card.Text>{donation.category}</Card.Text>
            <Card.Text>{donation.description}</Card.Text>

            <Link to={`/donation/${this.props.match.params.id}/edit`}>
              <Button className="btn">Edit Donation</Button>
            </Link> */}
        {/* <Link to={`/donation/${this.props.match.params.id}/edit`}>
          <Button className="btn">Edit Donation</Button>
        </Link> */}

        {/*
            <Link to={`/donation/profile/${donation._creator.name}`}>
              Posted by {donation._creator.name}
            </Link> */}
        {/* </Card.Body>
        </Card> */}

        <Card className="donation-card detail" key={donation.donationName}>
          <Card.Img maxHeiht="20px" src={placeholderImg} alt="Card image" />
          <Card.ImgOverlay></Card.ImgOverlay>

          {/* <Link
              className="link-overwrite"
              to={`/donation/${donation._id}`}
              key={donation._id}
            >
              <Card.Title>{donation.donationName}</Card.Title>
            </Link> */}
          <div className="inside-donation-card">
            <Row>
              <Card.Title>{donation.donationName}</Card.Title>
            </Row>
            <Row>
              <Card.Text>
                This Donation is under the Category {donation.category}
              </Card.Text>
              <Card.Text>About this Donation: {donation.description}</Card.Text>
              {/* <Card.Text>
                <small>Posted by {donation._creator.name}</small>
              </Card.Text> */}
            </Row>
            <Row>
              <Link to={`/donation/${this.props.match.params.id}/edit`}>
                <Button className="edit btn">Edit Donation</Button>
              </Link>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}
