import { connect } from 'react-redux';
import { createTagAlong } from '../../actions/tagalong_actions';
import TagAlongIndex from './tagalong_index';

const mapStateToProps = (state) => {
    return {
        tagAlongs: state.entities.tagAlongs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTagAlong: tagAlong => dispatch(createTagAlong(tagAlong))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagAlongForm);