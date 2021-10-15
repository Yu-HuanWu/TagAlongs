import React from 'react';
import FlourBadge from './achievements/flourbadge.svg';
import SugarBadge from './achievements/sugarbadge.svg';
import './user_achievements.scss';

class UserAchievements extends React.Component {
    constructor(props) {
        super(props);
    }

    renderBadgeClass(cookieCount) {
        console.log(this.props.points)
        let score = cookieCount - this.props.points;
        if (score <= 0) {
            return "selected-badge";
        } else {
            return "not-earned";
        }
    }

    render() {
        return (
            <div>
                <ul className="user-achievement-list">
                    <h1>Gotta Earn Them All - Cookie Go!</h1>
                    <h1>Keep completing TagAlongs and earning cookies to unlock more badges.</h1>
                    <li className="user-achievement-badge">
                        <img src={FlourBadge}
                            className="selected-badge"
                            alt="flour-badge"/>
                            <h3>You've registered!</h3>
                            <h4>You've earned this badge by registering an account.</h4>
                    </li>
                    <li className="user-achievement-badge">
                        <img src={SugarBadge}
                            className={this.renderBadgeClass(1)}
                            alt="sugar-badge"/>
                            <h4>Earn 1 Cookie to Unlock this Badge.</h4>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserAchievements;