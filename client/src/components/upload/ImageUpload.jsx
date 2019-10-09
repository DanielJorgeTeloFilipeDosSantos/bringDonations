// components/AddThing.js
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import the service file since we need it to send (and get) the data to(from) server
import { upload } from "../../services/profile";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    // this.handleChange = handleChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    // this.handleUpload = handleUpload.bind(this);
    // this.handleSubmit = handleSubmit.bind(this);
  }

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  // this method handles just the file upload
  handleFileUpload = event => {
    console.log("The file to be uploaded is: ", event.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("imageUrl", event.target.files[0]);

    upload(uploadData)
      .then(user => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ user });
        console.log(this.state);
      })
      .catch(error => {
        console.log("Error while uploading the file: ", error);
      });
  };

  // this method submits the form
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const user = this.session.user;
  //   console.log(user);
  //   saveFile(this.state)
  //     .then(response => {
  //       console.log("added: ", response);
  //       // here you would redirect to some other page
  //     })
  //     .catch(error => {
  //       console.log("Error while adding the thing: ", error);
  //     });
  // };

  render() {
    return (
      <div>
        <h2>New Thing</h2>
        <Form>
          <Form.Group>
            <Form.Control
              name="profileImage"
              type="file"
              onChange={this.handleFileUpload}
            />

            {/* <input type="file" onChange={event => this.handleFileUpload(event)} />
          <button type="submit">Upload File</button> */}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ImageUpload;
