import React from 'react';
import FlourBadge from './achievements/flourbadge.svg';
import SugarBadge from './achievements/sugarbadge.svg';
import './user_achievements.scss';

class UserAchievements extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            state: 'default'
        }
    }

    renderBadgeClass(cookieCount) {
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
                    <h1>YOUR UNLOCKED ACHIEVEMENTS</h1>
                    <h2>Keep earning cookies to unlock more badges.</h2>
                    <li className="user-achievement-badge">
                        <img src={FlourBadge}
                            className="selected-badge"
                            alt="flour-badge"/>
                            <h4>Register an account.</h4>
                    </li>
                    <li className="user-achievement-badge">
                        <img src={SugarBadge}
                            className={this.renderBadgeClass(1)}
                            alt="sugar-badge"/>
                            <h4>Earned 1 cookie.</h4>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserAchievements;