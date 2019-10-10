import React, { Component } from "react";
import { list } from "../../services/donations";
import { Link } from "react-router-dom";
import placeholderImg from "../../assets/images/peopelorganisation.jpg";

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
        <h3>Search Donations</h3>

        {this.state.donations.map(donation => (
          <Card className="donation-card" key={donation.donationName}>
            <Card.Img maxHeiht="20px" src={placeholderImg} alt="Card image" />
            <Card.ImgOverlay>
              <Link
                className="overlay-button link-overwrite pink-btn btn"
                to={`/donation/${donation._id}/details`}
              >
                <Card.Text> ♥ Details</Card.Text>
              </Link>
            </Card.ImgOverlay>

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
    );
  }
}
