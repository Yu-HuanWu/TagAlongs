import { connect } from 'react-redux';
import CompletedTagAlongs from './completed_tagalongs';
import { fetchAcceptedTagAlongs  } from '../../actions/tagalong_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        completedTags: Object.values(state.entities.tagAlongs)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCompleted: userId => dispatch(fetchAcceptedTagAlongs(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTagAlongs);