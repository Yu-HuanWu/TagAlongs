import { connect } from 'react-redux';
import MyTagAlongs from './my_tagalongs';
import { fetchMyTagAlongs  } from '../../actions/tagalong_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        myTagAlongs: Object.values(state.entities.tagAlongs)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMyTags: userId => dispatch(fetchMyTagAlongs(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTagAlongs);