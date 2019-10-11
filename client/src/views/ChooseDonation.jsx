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
import { LinkContainer } from "react-router-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

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
                  style={{ height: "200px" }}
                  src={donation.imageUrl}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <LinkContainer
                    className="overlay-button link-overwrite pink-btn btn"
                    to={`/donation/${donation._id}/details`}
                  >
                    <Card.Text> ♥ Details</Card.Text>
                  </LinkContainer>
                </Card.ImgOverlay>

                {/* <Link
              className="link-overwrite"
              to={`/donation/${donation._id}`}
              key={donation._id}
            >
            </Link> */}
                <Card.Body>
                  <div>
                    <Row>
                      <ListGroup className="inside-donation-card">
                        <Card.Title>{donation.donationName}</Card.Title>
                        <ListGroup.Item>
                          A donation of {donation.category}
                        </ListGroup.Item>
                        <ListGroup.Item>{donation.description}</ListGroup.Item>
                        <ListGroup.Item>
                          <small>Posted by {donation._creator.name}</small>
                        </ListGroup.Item>
                      </ListGroup>
                    </Row>
                    <Row>
                      {/* <LinkContainer to={`/donation/${donation._id}`}> */}
                      <Link
                        to={`/donation/${donation._id}`}
                        className="btn direction"
                        // onClick={this.currentLocationClickedMethod}
                        value={donation._id}
                      >
                        Get direction ➤
                      </Link>
                      {/* </LinkContainer> */}
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
