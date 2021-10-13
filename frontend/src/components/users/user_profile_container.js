import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
};

// need to create updateUser action

// const mapDispatchToProps = dispatch => {
//     return {
//         updateUser: userId => dispatch(updateUser)
//     }
// }

export default connect(mapStateToProps, null)(UserProfile);