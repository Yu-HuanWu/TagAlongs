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
                    <li><img src={DownCookie} 
                            onClick={() => this.props.sendRating()} />
                    </li>
                    <li><img src={UpCookie} 
                            onClick={() => this.props.sendRating()} />
                    </li>
                </ul>
            </div>
        )
    }
}

export default RatingForm;