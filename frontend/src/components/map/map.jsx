import React, { Component } from 'react';
import { Map, GoogleApiWrapper ,InfoWindow,Marker} from 'google-maps-react';
import "./map.css"

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},          
      selectedPlace: {},
      items: {}        
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

  componentDidMount(){
    this.props.fetchTag(this.props.TagID).then((data)=>this.setState({items:data.tagAlong.data}))
  }


  render() {
    const style={
      width: "500px",
      height: "500px",
      position:"relative"
    }
    if(!this.state.items.title){
      return(
        <div>
          Nothing Found
        </div>
      )
    }else{
      let items = this.state.items;
      return (
        <div>
          <div>
            <div>
              {items.title}
            </div>
            <div>
              {items.body}
            </div>
            <div>
              Starting Location: {items.startLocation}
            </div>
            <div>
              Ending Locaiton: {items.endLocation}
            </div>
          </div>

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
          <Marker id="map-marker-css"
            onClick={this.onMarkerClick}
            name={items.startLocation}
            position={{
              lat: items.startLatLng[0],
              lng: items.startLatLng[1]
            }}
            />
          <Marker
            onClick={this.onMarkerClick}
            name={items.endLocation}
            position={{
              lat: items.endLatLng[0],
              lng: items.endLatLng[1]
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
        </div>
        </div>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapComponent);
