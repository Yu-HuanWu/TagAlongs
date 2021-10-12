import React from 'react';
import { withRouter } from 'react-router-dom';

class TagAlongForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            startLocation: '',
            endLocation: '',
            type: '',
            // userId: this.props.currentUser.id
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

        let tagalong = {
            title: this.state.title,
            body: this.state.body,
            startLocation: this.state.startLocation,
            endLocation: this.state.endLocation,
            type: this.state.type,
            // userId: this.props.currentUser.id
        }

        this.props.createTagAlong(tagalong);
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
                        <input type="text"
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
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Enter Ending Locaton" 
                        />
                        <label className="tagalong-form-label">Type of TagAlong:</label>
                        <select id="tagalong-type" name="tagalong-type">
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