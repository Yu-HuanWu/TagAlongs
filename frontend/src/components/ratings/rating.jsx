import UpCookie from './images/upcookie.svg';
import DownCookie from './images/downcookie.svg';
import React from 'react';
import './review.scss';

class RatingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {}
        }

        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState( { errors: nextProps.errors })
    }

    sendRating(value) {
        let ownerId;
        let acceptedId;
        if (this.props.tagAlong.user === this.props.currentUser) {
            ownerId = this.props.currentUser;
            acceptedId = this.props.tagAlong.acceptedBy[0];
        } else {
            ownerId = this.props.tagAlong.acceptedBy[0];
            acceptedId = this.props.currentUser;
        }

        let rating = {
            rating: value,
            reviewPair: [ownerId, acceptedId]
        };
        
        this.props.giveCookie(rating);
    }

    renderErrors() {
        return (
            <ul className="renderError">
                {Object.keys(this.state.errors).map((error, i) => (
                <li key={`error-${i}`}>
                    {this.state.errors[error]}
                </li>
                ))}
            </ul>
        );
    }

    renderForm() {
        
    }

    render() {
        return (
            <div className="cookie-form-container">
                Rate your TagAlong:
                <ul className="cookie-form">
                    <li>
                        <img src={DownCookie} 
                            onClick={() => this.sendRating(-1)}
                            alt="downCookie" />
                    </li>
                    <li>
                        <img src={UpCookie} 
                            onClick={() => this.sendRating(1)}
                            alt="upCookie" />
                    </li>
                    { this.renderErrors() }
                </ul>
            </div>
        )
    }
}

export default RatingForm;