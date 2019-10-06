import React, { Component } from "react";

export default class CatchAll extends Component {
  componentDidMount() {
    this.props.history.push("/error/404");
  }

  render() {
    return <div></div>;
  }
}
