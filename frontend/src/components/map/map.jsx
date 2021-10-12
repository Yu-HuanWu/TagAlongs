// import React from 'react'
// import GoogleMapReact from 'google-map-react'
// import "./map.css"

// class MapComponent extends React.Component{

//   render(){
//     const center = {lat:37.7749,lng:-122.4194}
//     return(
//       <div>
//         this is the map component
//         <div id="map-component">

//         {/* <GoogleMapReact 
//           bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
//           defaultCenter={center}
//           center={center}
//           defaultZoom={12}
//           margin={[50,50,50,50]}
//           options={''}
//           onChange={()=>{}}
//           onChildClick={()=>{}}
//           >

//         </GoogleMapReact> */}

//           </div>
//       </div>
//     )
//   }
// }

// export default MapComponent


import React, { Component } from 'react';
import { Map, GoogleApiWrapper ,InfoWindow,Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // render() {
  //   return (
  //     <Map id="map-component"
  //       google={this.props.google}
  //       zoom={13}
  //       style={mapStyles}
  //       initialCenter={
  //         {
  //           lat: 37.7749,
  //           lng: -122.4194
  //         }
  //       }
  //     />
  //   );
  // }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 37.799278,
            lng: -122.401138
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"App Academy"}
          position={{
            lat: 37.799278,
            lng: -122.401138,
          }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Fisherman's Wharf"}
          position={{
            lat: 37.8080,
            lng: -122.4177,
          }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
