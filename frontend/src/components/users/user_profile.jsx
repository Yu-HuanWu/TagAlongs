import React from 'react';
import UserAchievementsContainer from './user_achievements_container';
import AcceptedTagAlongsContainer from './accepted_tagalongs_container';
import CompletedTagAlongsContainer from './completed_tagalongs_contaner';
import MyTagAlongsContainer from './my_tagalongs_container';
import { withRouter } from 'react-router-dom';
import './user_profile.scss';
import defaultAvatar from './avatars/default.svg';
import blushAvatar from './avatars/blush.svg';
import happyAvatar from './avatars/happy.svg';
import tongueAvatar from './avatars/tongue.svg';
import teethAvatar from './avatars/teeth.svg';
import grinAvatar from './avatars/grin.svg';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatar: "default",
            rightRender: 'default'
        }

        this.props.grabUser(this.props.currentUser._id)
        .then((user)=>{
          this.setState({avatar: user.currentUser.avatar})
        })
      }
      componentDidMount() {
        this.props.fetchTagAlongs();
    }
    
    changeRightContainer(type) {
        this.setState({
            rightRender: `${type}`
        })
    }

    renderRightContainer() {
        switch (this.state.rightRender) {
            case 'default':
                return (
                    <div>
                        <h1>Your TagAlongs:</h1>
                        <MyTagAlongsContainer />
                    </div>
                )
            case 'completed':
                return (
                    <div>
                        <h1>Your Completed TagAlongs:</h1>
                        <CompletedTagAlongsContainer/>
                    </div>
                )
            case 'accepted':
                 return (
                    <div>
                        <h1>Your Accepted TagAlongs:</h1>
                        <AcceptedTagAlongsContainer />
                    </div>
                )
            case 'achievements':
                 return (
                    <div>
                        <UserAchievementsContainer 
                            points={this.props.currentUser.tagAlongsCompleted}
                            />
                    </div>
                )
            // case 'badges':
            //      return (
            //         <div>
            //             <h1>You've earned the following badges!</h1>
            //         </div>
            //     )
            case 'avatar':

                 return (
                    <div className="avatar-selection-container">
                        <h1>Select a new avatar:</h1>
                        <ul className="avatar-selection-list">
                            <li>
                                <img src={ defaultAvatar }
                                    onClick={() => this.changeAvatar("default")} 
                                    alt="default-avatar" 
                                    className={this.avatarClassName("default")}/>
                            </li>
                            <li>
                                <img src={ blushAvatar }
                                    onClick={() => this.changeAvatar("blush")} 
                                    alt="blush-avatar" 
                                    className={this.avatarClassName("blush")}/>
                            </li>
                            <li>
                                <img src={ happyAvatar }
                                    onClick={() => this.changeAvatar("happy")} 
                                    alt="happy-avatar" 
                                    className={this.avatarClassName("happy")}/>
                            </li>
                            <li>
                                <img src={ tongueAvatar }
                                    onClick={() => this.changeAvatar("tongue")} 
                                    alt="tongue-avatar" 
                                    className={this.avatarClassName("tongue")}/>
                            </li>
                            <li>
                                <img src={ teethAvatar }
                                    onClick={() => this.changeAvatar("teeth")} 
                                    alt="teeth-avatar" 
                                    className={this.avatarClassName("teeth")}/>
                            </li>
                            <li>
                                <img src={ grinAvatar }
                                    onClick={() => this.changeAvatar("grin")} 
                                    alt="grin-avatar" 
                                    className={this.avatarClassName("grin")}/>
                            </li>
                        </ul>
                    </div>
                )
            default:
                return (
                    <div>
                        Welcome to your user profile.
                    </div>
                )
        }
    }

    changeAvatar(newAvatar) {
        this.props.updateAvatar(
            { UserID: this.props.currentUser._id, 
                avatar: newAvatar }
        );
        this.setState({
            avatar: `${newAvatar}`,
            rightRender: 'default'
        });
    }

    avatarClassName(name) {
        if (this.state.avatar === name) {
            return "avatar-selection-button-selected"
        } else {
            return "avatar-selection-button-not-selected"
        }
    }

    renderAvatar() {
        switch(this.state.avatar) {
            case 'default':
                return <img src={ defaultAvatar }
                            onClick={() => this.changeRightContainer("avatar")} 
                            alt="default-avatar" 
                            className="user-profile-avatar" />
            case 'blush':
                return <img src={ blushAvatar }
                            onClick={() => this.changeRightContainer("avatar")} 
                            alt="blush-avatar" 
                            className="user-profile-avatar" />
            case 'happy':
                return <img src={ happyAvatar } 
                            onClick={() => this.changeRightContainer("avatar")}
                            alt="happy-avatar" 
                            className="user-profile-avatar" />
            case 'tongue':
                return <img src={ tongueAvatar } 
                            onClick={() => this.changeRightContainer("avatar")}
                            alt="tongue-avatar" 
                            className="user-profile-avatar" />
            case 'teeth':
                return <img src={ teethAvatar } 
                            onClick={() => this.changeRightContainer("avatar")}
                            alt="teeth-avatar" 
                            className="user-profile-avatar" />
            case 'grin':
                return <img src={ grinAvatar } 
                            onClick={() => this.changeRightContainer("avatar")}
                            alt="grin-avatar" 
                            className="user-profile-avatar" />
            default:
                return <img src={ defaultAvatar }
                            onClick={() => this.changeRightContainer("avatar")} 
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
                    <div>
                        <h1>{ user.firstName.toUpperCase() } { user.lastName.toUpperCase() }</h1>
                        <p>Earned <b>{ user.rating }</b> Cookies</p>
                        <p>Tagged Along <b>{ user.tagAlongsCompleted }</b> Times</p>
                    </div>
                    <div className="user-profile-nav">
                        <ul className="user-profile-nav-list">
                            <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("default")}
                                    className="user-profile-nav-button">
                                        My TagAlongs
                                </button>
                            </li>
                            <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("accepted")}
                                    className="user-profile-nav-button">
                                        My Accepted TagAlongs
                                </button>
                            </li>
                            <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("completed")}
                                    className="user-profile-nav-button">
                                        My Completed TagAlongs
                                </button>
                            </li>
                            <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("achievements")}
                                    className="user-profile-nav-button">
                                        My Achievements
                                </button>
                            </li>
                            {/* <li className="user-profile-nav-item">
                                <button onClick={() => this.changeRightContainer("badges")}
                                    className="user-profile-nav-button">
                                        My Badges
                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="user-profile-right">
                    <div className="user-tagalongs">
                        { this.renderRightContainer() }
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(UserProfile);