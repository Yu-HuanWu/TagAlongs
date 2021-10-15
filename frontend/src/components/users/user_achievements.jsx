import React from 'react';

class UserAchievements extends React.Component {
    renderBadgeClass() {

    }

    render() {
        console.log(this.ownProps);
        return (
            <div>
                <h1>You have earned { this.props.points } cookies.</h1>
                <ul className="user-achievement-list">
                    <li className="user-achievement-badge">
                        Achievement Badge Here
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserAchievements;