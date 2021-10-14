import React from 'react';
import { withRouter } from 'react-router-dom';
import './user_profile.scss';
import defaultAvatar from './avatars/default.png'

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            avatar: this.props.currentUser.avatar,
            rightRender: 'default'
        }
    }

    componentDidMount() {
        this.props.fetchTagAlongs();
    }

    changeRightContainer(type) {

    }

    renderAvatar() {
        switch(this.state.avatar) {
            case 'default':
                return <img src={ defaultAvatar } 
                            alt="default-avatar" 
                            className="user-profile-avatar" />
            default:
                return <img src={ defaultAvatar }
                            alt="default-avatar" 
                            className="user-profile-avatar" />
        }
    }

    render() {
        const user = this.props.currentUser;
        return (
            <div className="user-profile">
                <div className="user-profile-left">
                    { this.renderAvatar() }
                    <h1>{ user.firstName.toUpperCase() } { user.lastName.toUpperCase() }</h1>
                    <p>Earned <b>{ user.rating }</b> Cookies</p>
                    <p>Tagged Along <b>{ user.tagAlongsCompleted }</b> Times</p>
                    <div className="user-profile-nav">
                        <ul className="user-profile-nav-list">
                            <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("completed")}
                                    className="user-profile-nav-button">
                                        My Completed TagAlongs
                                </button>
                            </li>
                            <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("ongoing")}
                                    className="user-profile-nav-button">
                                        My Ongoing TagAlongs
                                </button>
                            </li>
                            <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("achievements")}
                                    className="user-profile-nav-button">
                                        My Achievements
                                </button>
                            </li>
                            <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("all")}
                                    className="user-profile-nav-button">
                                        My Badges
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="user-profile-right">
                    <div className="user-tagalongs">
                        { this.changeRightContainer("all") }
                        Temp
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(UserProfile);