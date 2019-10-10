import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { list } from "../services/donations";
import placeholderImg from "../assets/images/peopelorganisation.jpg";

export class ChooseDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDonationClicked: {
        _id: "5d9cbd06e12c582b6e3a1724",
        latitude: 38.7107145,
        longitude: -9.1529484
      },
      location: { latitude: 38.7107145, longitude: -9.1529484 },
      donations: [],
      _donationPost: [],
      donationId: ""
    };
    this.currentLocationClickedMethod = this.currentLocationClickedMethod.bind(
      this
    );
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

  currentLocationClickedMethod(event) {
    // console.log("donation clicked");
    // console.log(event.target.value);
    const ee = event.target.value;
    console.log("ee", ee);
    //do js to get location from the id
    const array = this.state.donations;
    function isCherries(donation) {
      return donation._id === ee;
    }

    console.log("findddddd", array.find(isCherries).location[0]);

    this.setState({
      ...this.state,
      currentDonationClicked: array.find(isCherries).location[0]
    });
    console.log("final.state", this.state);
  }

  render() {
    return (
      <div>
        <Container className="center">
          <h2>Choose a donation</h2>
        </Container>
        <Container>
          <div style={{ height: "500px", overflow: "scroll" }}>
            {this.state.donations.map(donation => (
              <Card className="donation-card" key={donation.donationName}>
                <Card.Img
                  style={{ maxHeight: "350px" }}
                  src={placeholderImg}
                  alt="Card image"
                />
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
                <Card.Body>
                  <div className="inside-donation-card">
                    <Row>
                      {/* <Link
                      to={`/donation/${donation._id}/ details`}
                      key={donation._id}
                    >
                      <Button>{donation.donationName}</Button>
                    </Link> */}
                    </Row>
                    <Row>
                      <Card.Text>
                        This Donation is under the Category {donation.category}
                      </Card.Text>
                      <Card.Text>
                        About this Donation: {donation.description}
                      </Card.Text>
                      <Card.Text className="mr-5">
                        <small>Posted by {donation._creator.name}</small>
                      </Card.Text>
                    </Row>
                    <Row>
                      <Button
                        className="btn direction"
                        onClick={this.currentLocationClickedMethod}
                        value={donation._id}
                      >
                        Get direction ➤
                      </Button>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default ChooseDonation;
