import { connect } from 'react-redux';
import RatingForm from './rating';
import { createRating } from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
    tagAlong: ownProps.tagAlong,
    errors: state.errors.ratings,
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    giveCookie: cookie => dispatch(createRating(cookie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);