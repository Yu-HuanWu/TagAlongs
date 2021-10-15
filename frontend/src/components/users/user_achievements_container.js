import { connect } from 'react-redux';
import UserAchievements from './user_achievements';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        cookies: ownProps.points
    }
};

export default connect(mapStateToProps)(UserAchievements);