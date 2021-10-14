import React from 'react';
import { withRouter } from 'react-router-dom';
import './user_profile.scss';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            avatar: this.props.currentUser.avatar,
        }
    }

    render() {
        const user = this.props.currentUser;
        return (
            <div className="user-profile">
                <div className="user-profile-left">
                    {console.log(user)}
                    <h1>{ user.firstName.toUpperCase() } { user.lastName.toUpperCase() }</h1>
                    <p>Earned <b>{ user.rating }</b> Cookies</p>
                    <p>Tagged Along <b>{ user.tagAlongsCompleted }</b> Times</p>
                </div>
                <div className="user-profile-right">
                    <div className="user-tagalongs">
                        Temp
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(UserProfile);