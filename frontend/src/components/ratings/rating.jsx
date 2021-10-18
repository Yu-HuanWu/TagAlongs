import UpCookie from './images/upcookie.svg';
import DownCookie from './images/downcookie.svg';
import React from 'react';
import './review.scss';

class RatingForm extends React.Component {
    constructor(props) {
        super(props);
    }

    sendRating() {
        let rating = {

        };
        this.props.giveCookie(rating);
    }

    render() {
        return (
            <div className="cookie-form-container">
                <ul className="cookie-form">
                    <li><img src={DownCookie} 
                            onClick={() => this.sendRating()}
                            alt="downCookie" />
                    </li>
                    <li><img src={UpCookie} 
                            onClick={() => this.sendRating()}
                            alt="upCookie" />
                    </li>
                </ul>
            </div>
        )
    }
}

export default RatingForm;