import React, { Component } from "react";
import { HereMap, Marker, PathFinder } from "rc-here-maps";
import logo from "./UserLocationIcon.svg";
import logo2 from "./OrgLocationIcon.svg";

class MapDemo extends Component {
  constructor(props) {
    super(props);

    this.center = {
      lat: this.props.location.latitude,
      lng: this.props.location.longitude
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
  // updateCanvas() {
  //   this.setState({
  //     childKey: this.state.childKey + 1
  //   });
  // console.log("hello");
  // localStorage.setItem("locationLat", this.props.location.latitude);
  // localStorage.setItem("locationLng", this.props.location.longitude);
  // localStorage.setItem("MyLocationLat", this.props.myLocation[0].latitude);
  // localStorage.setItem("MyLocationLng", this.props.myLocation[0].longitude);
  // window.location.reload(false);
  // }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.clear !== this.props.clear) {
  //     this.updateCanvas();
  //     console.log("newPorps", this.state);
  //   }
  // }

  render() {
    // const de = localStorage.getItem("locationLat");
    // const de2 = localStorage.getItem("locationLng");
    // const de3 = localStorage.getItem("MyLocationLat");
    // const de4 = localStorage.getItem("MyLocationLng");
    // console.log("storage", de);
    // console.log("storage", de2);
    // console.log("storage", de3);
    // console.log("storage", de4);
    return (
      <div className="map-wrapper" style={{ width: "100vw", height: "100vh" }}>
        {!this.props.myLocation[0] ? (
          <div>loading...</div>
        ) : (
          <HereMap
            appId="PqzDeV7k7c2Udy6g2Fvc"
            appCode="PWIfIjZYX7_LIxXbrXyjCw"
            useHTTPS={true}
            center={{
              lat: this.props.location.latitude,
              lng: this.props.location.longitude
            }}
            zoom="14"
          >
            {/* {!this.props.myLocation[0] ? (
              <Marker
                lat={this.props.location.latitude}
                lng={this.props.location.longitude}
              >
                <div style={{ transform: "translate(-50%, -100%)" }}>
                  <img src={logo2} width="90vw" height="90vh" alt="Logo" />
                </div>
              </Marker>
            ) : (
              <div>
                <Marker
                  lat={this.props.myLocation[0].latitude}
                  lng={this.props.myLocation[0].longitude}
                >
                  <div style={{ transform: "translate(-50%, -100%)" }}>
                    <img src={logo} width="90vw" height="90vh" alt="Logo" />
                  </div>
                </Marker>
              </div>
            )} */}
            <Marker
              lat={this.props.myLocation[0].latitude}
              lng={this.props.myLocation[0].longitude}
            >
              <div style={{ transform: "translate(-50%, -100%)" }}>
                <img src={logo} width="90vw" height="90vh" alt="Logo" />
              </div>
            </Marker>
            <Marker
              lat={this.props.location.latitude}
              lng={this.props.location.longitude}
            >
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

            {/* {!this.props.myLocation[0] ? (
              console.log("not location")
            ) : (
              <PathFinder
                waypoints={[
                  {
                    lat: this.props.location.latitude,
                    lng: this.props.location.longitude
                  },
                  { lat: 52.519, lng: 13.4162 }
                ]}
                style={{
                  lineWidth: 7,
                  strokeColor: "rgb(65,105,225)"
                }}
              />
            )} */}
            <PathFinder
              waypoints={[
                {
                  lat: this.props.location.latitude,
                  lng: this.props.location.longitude
                },
                {
                  lat: this.props.myLocation[0].latitude,
                  lng: this.props.myLocation[0].longitude
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
    );
  }
}

export default MapDemo;

// {!this.props.user ? (
//   this.props.history.push("/")
// ) : (
//   <div>
//     <h1>Welcome {this.props.user.name}!</h1>
//   </div>
// )}
