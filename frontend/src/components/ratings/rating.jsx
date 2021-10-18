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

    // componentWillReceiveProps(nextProps) {
    //     this.setState( {errors: nextProps.errors} )
    // }

    sendRating() {
        let rating = {

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

    render() {
        return (
            <div className="cookie-form-container">
                Rate your TagAlong:
                <ul className="cookie-form">
                    <li>
                        <img src={DownCookie} 
                            onClick={() => this.sendRating()}
                            alt="downCookie" />
                    </li>
                    <li>
                        <img src={UpCookie} 
                            onClick={() => this.sendRating()}
                            alt="upCookie" />
                    </li>
                    { this.renderErrors() }
                </ul>
            </div>
        )
    }
}

export default RatingForm;