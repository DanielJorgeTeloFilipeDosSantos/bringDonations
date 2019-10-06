import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DonationView from "./views/Donation";

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import BlogNavbar from "./components/BlogNavbar";

import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import ErrorView from "./views/Error";
import CatchAll from "./views/CatchAll";

import ProfileView from "./views/Profile";

import Container from "react-bootstrap/Container";

import {
  verify as verifyService,
  signOut as signOutService
} from "./services/authentication-api";

export default class App extends Component {
  constructor(props) {
    super(props);
    // if there is a user, different than null, verify(), then run the component
    this.state = {
      user: null,
      loaded: false
    };
    this.signOut = this.signOut.bind(this);
    this.loadUser = this.loadUser.bind(this);
    this.verifyAuthenticated = this.verifyAuthenticated.bind(this);
    this.verifyUnauthenticated = this.verifyUnauthenticated.bind(this);
  }

  componentDidMount() {
    verifyService()
      .then(user => {
        this.setState({
          ...(user && { user }),
          loaded: true
        });
      })
      .catch(error => {
        this.setState({
          loaded: true
        });
        console.log(error);
      });
  }

  signOut(event) {
    event.preventDefault();
    signOutService()
      .then(() => {
        this.setState({
          user: null
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  loadUser(user) {
    this.setState({
      user
    });
  }

  verifyAuthenticated() {
    return !!this.state.user;
  }

  verifyUnauthenticated() {
    return !this.state.user;
  }

  render() {
    console.log("console.log appp. jsx", this.state);
    return (
      <div className="App">
        <div style={{ marginTop: "10vh" }}>
          <Router>
            <BlogNavbar user={this.state.user} signOut={this.signOut} />
            {this.state.loaded && (
              <Switch>
                {/* here starts the app as a protected route, only acessable if you are NOT logged in  */}
                <ProtectedRoute
                  path="/"
                  exact
                  verify={this.verifyUnauthenticated}
                  render={props => (
                    <SignUp {...props} exact loadUser={this.loadUser} />
                  )}
                />
                {/*   goes to /home that is protected and only acessable if you
                have a session initiated (you are loggedin)    */}
                <ProtectedRoute
                  path="/profile"
                  exact
                  component={ProfileView}
                  verify={this.verifyAuthenticated}
                />
                {/*   -------------------------------------------------------------   */}
                {/* here starts the app as a protected route*/}
                <ProtectedRoute
                  path="/sign-in"
                  verify={this.verifyUnauthenticated}
                  render={props => (
                    <SignIn {...props} exact loadUser={this.loadUser} />
                  )}
                />
                <Route path="/donation" exact component={DonationView} />
                <Route path="/error/:code" component={ErrorView} />
                <Redirect path="/" to="/error/404" />
              </Switch>
            )}
          </Router>
        </div>
      </div>
    );
  }
}
