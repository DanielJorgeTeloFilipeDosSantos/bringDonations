import React, { Component } from "react";
import { HereMap, Marker, PathFinder } from "rc-here-maps";
import logo from "./UserLocationIcon.svg";
import logo2 from "./OrgLocationIcon.svg";

class MapDemo extends Component {
  constructor(props) {
    super(props);

    this.center = {
      lat: 52.516,
      lng: 13.3779
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
      <div className="map-wrapper" style={{ width: "100vw", height: "50vh" }}>
        <HereMap
          appId="PqzDeV7k7c2Udy6g2Fvc"
          appCode="PWIfIjZYX7_LIxXbrXyjCw"
          useHTTPS={false}
          center={this.center}
          zoom="14"
        >
          <Marker lat={52.516} lng={13.3779}>
            <div style={{ transform: "translate(-50%, -100%)" }}>
              <img src={logo} width="90vw" height="90vh" alt="Logo" />
            </div>
          </Marker>
          <Marker lat={52.519} lng={13.4162}>
            <div style={{ transform: "translate(-50%, -100%)" }}>
              <img src={logo2} width="90vw" height="90vh" alt="Logo" />
            </div>
          </Marker>

          {/* <Polyline
            dataPoints={[52, 48, 100, 42, 77, 100]}
            strokeColor="#HexCode"
            lineWidth={3}
            onPolylineDrawn={this.onPolylineDrawn}
          /> */}

          {/* <Polygon
            dataPoints={[52, 48, 100, 42, 77, 100]}
            fillColor="#HexCode"
            strokeColor="#HexCode"
            lineWidth={3}
            onPolylineDrawn={this.onPolygonDrawn}
          /> */}

          {/* <Circle
            center={this.center}
            radius={1000}
            fillColor="#HexCode"
            strokeColor="#HexCode"
            onCircleDrawn={this.onCircleDrawn}
          /> */}

          {/* <Rectangle
            bounds={this.bounds}
            fillColor="#HexCode"
            strokeColor="#HexCode"
            onRectangleDrawn={this.onRectangleDrawn}
          /> */}

          {/* <PathFinder
            waypoints={[
              { lat: 52.516, lng: 13.3779 },
              { lat: 52.5206, lng: 13.3862 }
            ]}
          /> */}
          <PathFinder
            waypoints={[
              { lat: 52.516, lng: 13.3779 },
              { lat: 52.518, lng: 13.4062 },
              { lat: 52.519, lng: 13.4162 }
            ]}
            style={{
              lineWidth: 7,
              strokeColor: "rgb(65,105,225)"
            }}
          />
        </HereMap>
      </div>
    );
  }
}

export default MapDemo;
