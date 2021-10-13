
import React from 'react';
import { withRouter } from 'react-router-dom';


class TagAlongForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            startLocation: '',
            startCity:'',
            endLocation: '',
            category: 'Chat',
            user: this.props.currentUser.id,
            errors: {}
        }

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
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.startLocation}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
        .then(response=>response.json())
        .then(startData=> {
          let startingLatLng = startData.results[0].geometry.location
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.endLocation}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
          .then(response=>response.json())
          .then(endData=> {
            let endingLatLng = endData.results[0].geometry.location
            let tagalong = {
                title: this.state.title,
                body: this.state.body,
                startLocation: this.state.startLocation,
                endLocation: this.state.endLocation,
                category: this.state.category,
                user: this.props.currentUser.id,
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
        return (
            <div className="tagalong-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="tagalong-form">
                        <label className="tagalong-form-label">Name</label>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Enter TagAlong Name" 
                        />
                        <label className="tagalong-form-label">Description</label>
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')}
                            placeholder="Enter TagAlong Description" 
                        />
                        <label className="tagalong-form-label">Start Location</label>
                        <input type="text"
                            value={this.state.startLocation}
                            onChange={this.update('startLocation')}
                            placeholder="Enter Starting Location" 
                        />
                        <label className="tagalong-form-label">End Location</label>
                        <input type="text"
                            value={this.state.endLocation}
                            onChange={this.update('endLocation')}
                            placeholder="Enter Ending Locaton" 
                        />
                        <label className="tagalong-form-label">Type of TagAlong:</label>
                        <select id="tagalong-category" name="tagalong-category"
                            onChange={this.update('category')}>
                            <option value="chat">Chat</option>
                            <option value="stroll">Stroll</option>
                            <option value="jog">Jog</option>
                            <option value="groceries">Groceries Trip</option>
                            <option value="chores">Other Trip</option>
                            <option value="misc">Miscellaneous</option>
                        </select>
                        <input type="submit" value="Create New TagAlong" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(TagAlongForm);