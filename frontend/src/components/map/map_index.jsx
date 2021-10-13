import React, { Component } from 'react';
import { Map, GoogleApiWrapper ,InfoWindow,Marker} from 'google-maps-react';
import "./map.css"

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},          
      selectedPlace: {},      
    };
  }

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


  render() {
    let all = Object.values(this.props.tagAlongs);
    let filtered = all.filter(tagalong => {
            return tagalong.category === this.props.filter
    })

    let tagAlongs;
        if (this.props.filter === 'all') {
            tagAlongs = all;
        } else {
            tagAlongs = filtered;
        }

    const style={
      width: "500px",
      height: "500px",
      position:"relative"
    }

      return (
        <div>

        <div style={style}>
        <Map
          google={this.props.google}
          zoom={12.5}
          style={mapStyles}
          initialCenter={
            {
              lat: 37.762301,
              lng: -122.437640,
            }
          }
          >

          {tagAlongs.map((tag,idx)=>(
            <Marker key={idx} id="map-marker-css"
            onClick={this.onMarkerClick}
            name={tag.startLocation}
            position={{
              lat: tag.startLatLng[0],
              lng: tag.startLatLng[1]
            }}
            />
          ))}  

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
        </div>
        </div>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapIndex);
