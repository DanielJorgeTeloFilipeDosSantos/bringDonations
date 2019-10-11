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
    };

    this.center = {
      lat: 38.8107959,
      lng: -9.2529825
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
            <HereMap
              appId="PqzDeV7k7c2Udy6g2Fvc"
              appCode="PWIfIjZYX7_LIxXbrXyjCw"
              useHTTPS={true}
              center={{
                lat: 38.7507989,
                lng: -9.162986799999999
              }}
              zoom={14}
            >
              <Marker
                lat={38.7507989}
                lng={-9.162986799999999}
              >
                <div style={{ transform: "translate(-50%, -100%)" }}>
                  <img src={logo} width="90vw" height="90vh" alt="Logo" />
                </div>
              </Marker>
              <Marker
                lat={38.8307959}
                lng={-9.2429825}
              >
                <div style={{ transform: "translate(-50%, -100%)" }}>
                  <img src={logo2} width="90vw" height="90vh" alt="Logo" />
                </div>
              </Marker>
              <PathFinder
                waypoints={[
                  {
                    lat: 38.7507989,
                    lng: -9.162986799999999
                  },
                  {
                    lat: 38.8307959,
                    lng: -9.2429825
                  }
                ]}
                style={{
                  lineWidth: 7,
                  strokeColor: "rgb(65,105,225)"
                }}
              />
            </HereMap>
        </div>
      </div>
    );
  }
}

export default MapDemo;
