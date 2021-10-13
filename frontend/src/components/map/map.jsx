import React, { Component } from 'react';
import { Map, GoogleApiWrapper ,InfoWindow,Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {},
      items: {}        // Shows the InfoWindow to the selected place upon a marker
    };
    // this.props.fetchTag(this.props.TagID).then((data)=>this.setState({items:data}))
    // // .then((data)=>console.log(data))
    // console.log(this.props.totalState)
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
          {/* <div>
            {items.title}
            {items.body}
            {items.startLocation}
            {items.endLocation}
          </div> */}

        <div style={style}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 37.799278,
              lng: -122.401138,
            }
          }
          >
          <Marker
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
