import React, { Component } from "react";
import { HereMap, Marker, PathFinder } from "rc-here-maps";
import logo from "./UserLocationIcon.svg";
import logo2 from "./OrgLocationIcon.svg";
import logo3 from "./bringGif4.gif";
import geolocation from "../../services/geolocation";
import { load2 } from "../../services/getlocationdb";

class MapDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      location: [],
      location2: ""
    };

    this.center = {
      lat: this.state.location.latitude,
      lng: this.state.location.longitude
    };

    this.bounds = {
      north: 53.1,
      south: 13.1,
      east: 43.1,
      west: 40.1
    };
  }

  onPolylineDrawn = () => {
    console.log("polyline drawn");
  };

  onPolygonDrawn = () => {
    console.log("Polygon drawn");
  };

  onCircleDrawn = () => {
    console.log("circle drawn");
  };

  onRectangleDrawn = () => {
    console.log("rectangle drawn");
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f4f8fa",
          width: "100vw",
          height: "200vh",
          marginTop: "-20vh"
        }}
      >
        <div style={{ position: "fixed-bottom" }}>adsadasd</div>
        <div
          className="map-wrapper"
          style={{ width: "100vw", height: "120vh" }}
        >
          {!this.state.location[0] ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "50vh"
              }}
            >
              <div>
                <h2>Finding a Donation...</h2>
                <img src={logo3} alt="Logo" />
              </div>
            </div>
          ) : (
            <HereMap
              appId="PqzDeV7k7c2Udy6g2Fvc"
              appCode="PWIfIjZYX7_LIxXbrXyjCw"
              useHTTPS={true}
              center={{
                lat: this.state.location[0].latitude,
                lng: this.state.location[0].longitude
              }}
              zoom={14}
            >
              <Marker
                lat={this.state.location[0].latitude}
                lng={this.state.location[0].longitude}
              >
                <div style={{ transform: "translate(-50%, -100%)" }}>
                  <img src={logo} width="90vw" height="90vh" alt="Logo" />
                </div>
              </Marker>
              <Marker
                lat={this.state.location2.latitude}
                lng={this.state.location2.longitude}
              >
                <div style={{ transform: "translate(-50%, -100%)" }}>
                  <img src={logo2} width="90vw" height="90vh" alt="Logo" />
                </div>
              </Marker>
              <PathFinder
                waypoints={[
                  {
                    lat: this.state.location2.latitude,
                    lng: this.state.location2.longitude
                  },
                  {
                    lat: this.state.location[0].latitude,
                    lng: this.state.location[0].longitude
                  }
                ]}
                style={{
                  lineWidth: 7,
                  strokeColor: "rgb(65,105,225)"
                }}
              />
            </HereMap>
          )}
        </div>
      </div>
    );
  }
}

export default MapDemo;
