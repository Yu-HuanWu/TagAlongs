import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser } from '../../actions/session_actions';
import { fetchTagAlongs } from '../../actions/tagalong_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        tagAlongs: Object.values(state.entities.tagAlongs),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: userData => dispatch(updateUser(userData)),
        fetchTagAlongs: () => dispatch(fetchTagAlongs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);