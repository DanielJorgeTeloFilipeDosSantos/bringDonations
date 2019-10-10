import React, { Component } from "react";
import { list } from "../../services/donations";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

//import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class ListDonations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      _donationPost: [],
      donationId: ""
    };
    this.listAll = this.listAll.bind(this);
  }

  listAll() {
    list()
      .then(donations => {
        this.setState({
          donations
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.listAll();
  }

  render() {
    return (
      <div>
        <div style={{ height: "500px", overflow: "scroll" }}>
          {this.state.donations.map(donation => (
            <Card className="donation-card" key={donation.donationName}>
              <Card.Img
                maxHeiht="20px"
                src={donation.imageUrl}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Link to={`/donation/${donation._id}/details`}>
                  <Button className="request-btn"> ♥ Request Donation</Button>
                </Link>
              </Card.ImgOverlay>

              <div className="inside-donation-card">
                <Row>
                  <ListGroup className="inside-donation-card">
                    <Card.Title>{donation.donationName}</Card.Title>
                    <ListGroup.Item>
                      A donation of {donation.category}
                    </ListGroup.Item>
                    <ListGroup.Item>{donation.description}</ListGroup.Item>
                    <ListGroup.Item>
                      <small>Posted by{donation._creator.name}</small>
                    </ListGroup.Item>
                  </ListGroup>
                </Row>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
