import React, { Component } from "react";
import { load, remove } from "../services/donations";
import { Link } from "react-router-dom";
import { verify as verifyService } from "../services/authentication-api";
import placeholderImg from "../assets/images/childeren.jpg";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class DetailsDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: "",
      user: null
    };
    this.displayDonation = this.displayDonation.bind(this);
    this.deleteDonation = this.deleteDonation.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  displayDonation() {
    load(this.props.match.params.id)
      .then(donation => {
        this.setState({
          donation: donation
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
    this.loadUser();
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      !this.state.donation ||
      previousProps.match.params.id !== this.props.match.params.id
    ) {
      this.displayDonation();
    }
  }

  loadUser() {
    verifyService()
      .then(user => {
        console.log(user);
        this.setState({
          user: user
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    //console.log(this.state.donation._creator);
    const user = this.state.user;
    const donation = this.state.donation;

    if (this.state.user._id === this.state.donation._creator._id) {
      return <h1>WORKING</h1>;
    }

    return (
      <div className="display-flex">
        <h3>Donation Details</h3>

        <Row>
          <Col>
            <Card className="donation-card details" style={{ width: "18rem" }}>
              <Card.Img src={donation.imageUrl} alt="Card image" />
              <Card.Body className=".inside-donation-card">
                <Card.Title>{donation.donationName}</Card.Title>
                <ListGroup>
                  <ListGroup.Item>
                    A donation of {donation.category}
                  </ListGroup.Item>

                  <ListGroup.Item>{donation.description}</ListGroup.Item>
                </ListGroup>

                <Link to={`/donation/${this.props.match.params.id}/edit`}>
                  <Button className="request-btn">Edit</Button>
                </Link>

                <Button onClick={this.deleteDonation} className="delete-btn">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
