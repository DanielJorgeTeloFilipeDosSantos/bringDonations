import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    // console.log(this.state.user);
    return (
      <div className="margin-top">
        <h1>Profile view</h1>

        <Link className="btn" to="/donation">
          Search donations
        </Link>
        <Link className="btn" to="/donation/requested">
          See your requested donations
        </Link>
      </div>
    );
  }
}

export default Profile;
