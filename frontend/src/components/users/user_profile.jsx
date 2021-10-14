import React from 'react';
import { withRouter } from 'react-router-dom';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            avatar: this.props.currentUser.avatar,
        }
    }

    render() {
        return (
            <div>
                {console.log(this.props.currentUser)}
            </div>
        )
    }

}

export default withRouter(UserProfile);