
import React from 'react';
import { withRouter } from 'react-router-dom';
import './tagalong.scss'


class TagAlongForm extends React.Component {
    constructor(props) {
        super(props);
        var date = new Date();
        date.setHours(date.getHours() - 7);
        // now you can get the string
        var isodate = date.toISOString();

        this.state = {
            title: '',
            body: '',
            startLocation: '',
            startCity:'',
            endLocation: '',
            category: 'chat',
            date:"",
            startingTime: isodate.slice(0, 16),
            duration:"30 minutes",
            user: this.props.currentUser.id,
            errors: {}
        }
  
        //   .toISOString().slice(0, 16))

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.startLocation}%20San%20Francisco&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
        .then(response=>response.json())
        .then(startData=> {
          let startingLatLng = startData.results[0].geometry.location
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.endLocation}%20San%20Francisco&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
          .then(response=>response.json())
          .then(endData=> {
            let endingLatLng = endData.results[0].geometry.location
            let tagalong = {
                title: this.state.title,
                body: this.state.body,
                startLocation: this.state.startLocation,
                endLocation: this.state.endLocation,
                category: this.state.category,
                date: this.state.date,
                startingTime: this.state.startingTime,
                duration: this.state.duration,
                user: this.props.currentUser._id,
                startLatLng:[startingLatLng.lat,startingLatLng.lng],
                endLatLng:[endingLatLng.lat,endingLatLng.lng]
            }
            this.props.createTagAlong(tagalong).then((data)=>this.props.history.push(`/map/${data.tagAlong.data._id}`))
          })
        })
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        var date = new Date();
        date.setHours(date.getHours() - 7);
        var isodate = date.toISOString();
        let min = isodate.slice(0, 16)
        return (
            <div className="tagalong-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="tagalong-form-title">Request A TagAlong</h1>
                    <div className="tagalong-form">


            <div className="input-container">
                            <input type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                                required 
                            />
                            <label className="tagalong-form-label">Title</label>
                        </div>

                        <div className="input-container">
                            <textarea
                                value={this.state.body}
                                onChange={this.update('body')}
                                required
                            />
                            <label className="tagalong-form-label">Description</label>
                        </div>

                        <div className="input-container">
                            <input type="text"
                                value={this.state.startLocation}
                                onChange={this.update('startLocation')}
                                required 
                            />
                            <label className="tagalong-form-label">Start Location</label>
                        </div>

                        <div className="input-container">
                            <input type="text"
                                value={this.state.endLocation}
                                onChange={this.update('endLocation')}
                                required
                            />
                            <label className="tagalong-form-label">End Location</label>
                        </div>

                        <div className="input-container-select">
                            <select id="tagalong-category" name="tagalong-category"
                                onChange={this.update('category')}>
                                <option value="chat">Chat</option>
                                <option value="stroll">Stroll</option>
                                <option value="jog">Jog</option>
                                <option value="groceries">Groceries Trip</option>
                                <option value="chores">Other Trip</option>
                                <option value="misc">Miscellaneous</option>
                            </select>
                            <label className="tagalong-form-label">Type of TagAlong</label>
                        </div>

                        <div className="input-container">
                            <input type="datetime-local" id="meeting-time"
                                name="meeting-time" value={this.state.startingTime}
                                min={min} 
                                onChange={this.update('startingTime')}
                                required/>
                            <label className="tagalong-form-label-starting">Starting Time</label>
                        </div>

                        <div className="input-container-select">
                            <select onChange={this.update('duration')}  value={this.state.duration}>
                                <option value="30 minutes">30 minutes</option>
                                <option value="1 hour">1 hour</option>
                                <option value="1 hour 30 minutes">1 hour 30 minutes</option>
                                <option value="2 hours">2 hours</option>
                                <option value="2 hours 30 minutes">2 hours 30 minutes</option>
                                <option value="3 hours">3 hours</option>
                                <option value="More than 3 hours"> More than 3 hours</option>
                            </select>
                            <label className="tagalong-form-label">Duration</label>
                        </div>




                        <input type="submit" value="Create TagAlong" className="form-button"/>

                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(TagAlongForm);  