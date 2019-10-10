import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DonationView from "./views/Donation";
import LocationDonation from "./views/LocationDonation";
import DetailsDonation from "./views/DetailsDonation";
import EditDonation from "./views/EditDonation";
import Map from "./components/map/Map";

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Navigation from "./components/Navigation";

import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import ErrorView from "./views/Error";

import ProfileView from "./views/Profile";
import OrgDonationView from "./views/OrgDonationView";

import {
  verify as verifyService,
  signOut as signOutService
} from "./services/authentication-api";
import { HowItWorks } from "./views/HowItWorks";
import { ChooseDonation } from "./views/ChooseDonation";

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
        if (user) {
          this.setState({
            ...(user && { user }),
            loaded: true
          });
        } else {
          this.setState({
            loaded: true
          });
        }
      })
      .catch(error => {
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
    return (
      <div className="App">
        <div>
          <Router>
            <Navigation user={this.state.user} signOut={this.signOut} />
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

                <Route
                  path="/profile"
                  render={props => (
                    <ProfileView
                      {...props}
                      exact
                      loadUser={this.loadUser}
                      user={this.state.user}
                    />
                  )}
                />
                <Route
                  path="/profile/:id"
                  render={props => (
                    <ProfileView
                      {...props}
                      exact
                      loadUser={this.loadUser}
                      user={this.state.user}
                    />
                  )}
                />

                {/* here starts the app as a protected route*/}

                <ProtectedRoute
                  path="/sign-in"
                  verify={this.verifyUnauthenticated}
                  render={props => (
                    <SignIn {...props} exact loadUser={this.loadUser} />
                  )}
                />

                {/*    DONATION FRONT END ROUTES ------------------------------    */}
                <Route path="/donation" exact component={DonationView} />

                <Route
                  path="/donation/:id/details"
                  exact
                  component={DetailsDonation}
                />

                <Route
                  path="/donation/:id/edit"
                  exact
                  component={EditDonation}
                />

                <Route
                  path="/donation/:id"
                  exact
                  render={props => <Map {...props} loadUser={this.loadUser} />}
                />

                {/*    ORGANIZATION FRONT END ROUTES ------------------------------    */}
                <Route path="/donationOrg" exact component={OrgDonationView} />

                {/*    DO A DONATION FRONT END ROUTES ------------------------------    */}
                <Route path="/HowItWorks" exact component={HowItWorks} />
                <Route path="/chooseDon" exact component={ChooseDonation} />

                {/*    DO A DONATION FRONT END ROUTES ------------------------------    */}

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
