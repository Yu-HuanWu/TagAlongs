import { connect } from 'react-redux';
import RatingForm from './rating';
import { createRating,
         fetchRating } from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
    tagAlong: ownProps.tagAlong,
    errors: state.errors.ratings,
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    giveCookie: cookie => dispatch(createRating(cookie)),
    fetchRating: reviewPair => dispatch(fetchRating(reviewPair)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);