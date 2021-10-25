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
        let idA = this.props.currentUser._id;
        let idB;

        if (this.props.tagAlong.user === this.props.currentUser._id) {
            idB = this.props.tagAlong.acceptedBy[0];
        } else {
            idB = this.props.tagAlong.user;
        }

        let rating = {
            rating: value,
            reviewPair: [idA, idB]
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
        return (
            <ul className="cookie-form">
                Rate your TagAlong:
                <br />
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
        )
    }

    render() {
        return (
            <div className="cookie-form-container">
                { this.renderForm() }
            </div>
        )
    }
}

export default RatingForm;