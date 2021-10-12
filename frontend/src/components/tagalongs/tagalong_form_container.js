import { connect } from 'react-redux';
import { createTagAlong } from '../../actions/session_actions';
import TagAlongForm from './tagalong_form';

const mapStateToProps = (state) => {
    return {
        // currentUser: state.session.user,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTagAlong: tagAlong => dispatch(createTagAlong(tagAlong))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagAlongForm);