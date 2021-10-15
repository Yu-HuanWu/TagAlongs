import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateAvatar } from '../../actions/session_actions';
import { fetchTagAlongs } from '../../actions/tagalong_actions';
import { grabUser } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        tagAlongs: Object.values(state.entities.tagAlongs),
        totalState: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateAvatar: userData => dispatch(updateAvatar(userData)),
        fetchTagAlongs: () => dispatch(fetchTagAlongs()),
        grabUser: (id)=> dispatch(grabUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);