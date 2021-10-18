import UpCookie from './images/upcookie.svg';
import DownCookie from './images/downcookie.svg';
import React from 'react';
import './review.scss';

class RatingForm extends React.Component {
    constructor(props) {
        super(props);
    }

    sendRating() {

    }

    render() {
        return (
            <div className="cookie-form-container">
                <ul className="cookie-form">
                    <li><img src={downCookie} 
                            onClick={() => sendRating()} />
                    </li>
                    <li><img src={upCookie} 
                            onClick={() => sendRating()} />
                    </li>
                </ul>
            </div>
        )
    }
}