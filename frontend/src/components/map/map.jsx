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
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={
          {
            lat: 37.7749,
            lng: -122.4194
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
