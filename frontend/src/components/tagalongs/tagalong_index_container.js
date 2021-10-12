import { connect } from 'react-redux';
import { fetchTagAlongs } from '../../actions/tagalong_actions';
import TagAlongIndex from './tagalong_index';

const mapStateToProps = (state) => {
    return {
        tagAlongs: state.entities.tagAlongs.all,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTagAlongs: () => dispatch(fetchTagAlongs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagAlongIndex);