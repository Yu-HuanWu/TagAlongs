import { connect } from 'react-redux';
import AcceptedTagAlongs from './accepted_tagalongs';
import { fetchAcceptedTagAlongs  } from '../../actions/tagalong_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        acceptedTagAlongs: Object.values(state.entities.tagAlongs)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAccepted: userId => dispatch(fetchAcceptedTagAlongs(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptedTagAlongs);