import React, { Component } from "react";
import { list } from "../../services/donations";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
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
                  <Card.Title>{donation.donationName}</Card.Title>
                </Row>
                <Row>
                  <Card.Text>
                    This Donation is under the Category {donation.category}
                  </Card.Text>
                  <Card.Text>
                    About this Donation: {donation.description}
                  </Card.Text>
                  <Card.Text>
                    <small>Posted by {donation._creator.name}</small>
                  </Card.Text>
                </Row>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
