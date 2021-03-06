import React, { Component } from 'react';
import { Map, GoogleApiWrapper ,InfoWindow,Marker} from 'google-maps-react';
import { acceptTag } from '../../util/tagalong_api_util';
import "./map.scss"

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
    this.handleAccept = this.handleAccept.bind(this);
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

  handleAccept(){
    if (this.props.currentUser._id !== this.props.TagAlong[0].user) {
      acceptTag(this.state.items._id,{userID:this.props.currentUser._id})
      this.props.history.push("/")
    } else {
      alert("You cannot accept your own TagAlong.");
    }
  }

  renderButton() {
    if (!this.props.currentUser) {
      return null;
    }
    if (this.props.currentUser._id === this.props.TagAlong[0].user) {
      return null;
    }

    return (
       <div className="tagalongs-map-button-div">
              <button className="tagalongs-map-button"onClick={()=>this.handleAccept()}>Accept this TagAlong</button>
        </div>
    )
  }

  render() {

    let style;
    if (window.innerWidth > 600) {
      style = {
        width: "500px",
        height: "500px",
        position: "relative"
      }
    } else if (window.innerWidth < 321) {
      style = {
        width: "265px",
        height: "265px",
        position: "relative"
      }
    } else {
      style = {
        width: "300px",
        height: "300px",
        position: "relative"
      }
    }
    if(!this.state.items.title){
      return(
        <div>
          Nothing Found
        </div>
      )
    }else{
      let items = this.state.items;
      let year = items.startingTime.slice(0,4);
      let month = items.startingTime.toString().slice(5, 7);
      let date = items.startingTime.toString().slice(8,10);
      let hour;
      let ampm;
      if (items.startingTime.toString().slice(11, 13) === 12) {
        hour = 12;
        ampm = 'PM';
      } else if (items.startingTime.toString().slice(11, 13) === 24) {
        hour = 12;
        ampm = 'AM';
      } else if (items.startingTime.toString().slice(11, 13) > 12) {
        hour = items.startingTime.toString().slice(11, 13) - 12;
        ampm = 'PM';
      } else {
        hour = items.startingTime.toString().slice(11, 13);
        ampm = 'AM';
      }
      let minutes = items.startingTime.toString().slice(14, 16)
      return (
        <div className="tagalongs-index-container">
          <div className="tagalongs-item-section">

            <div>
              <div className="tagalongs-show-banner">
                Title:
              </div>
              <div>
                {items.title}
              </div>
            </div>

            <div>
              <div className="tagalongs-show-banner">
                Description:
              </div>
              <div>
                {items.body}
              </div>

            </div>


            <div>
              <div className="tagalongs-show-banner">
                Starting Location: 
              </div>
              <div>
                {items.startLocation}
              </div>
            </div>

            <div>
              <div className="tagalongs-show-banner">
                Ending Location: 
              </div>
              <div>
              {items.endLocation}
              </div>
            </div>

            <div>
              <div className="tagalongs-show-banner">
                Starting Time:
              </div>
              <div>
                {month} / {date} / {year}, {hour}:{minutes} {ampm}
              </div>
            </div>

            <div>
              <div className="tagalongs-show-banner">
                Duration:
              </div>
              <div>
                {items.duration}
              </div>
            </div>

            { this.renderButton() }
           
          </div>

          <div className="mapshow">
          <div style={style}>
            <Map
              google={this.props.google}
              zoom={12}
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
        </div>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapComponent);
