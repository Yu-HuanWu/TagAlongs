import { connect } from 'react-redux';
import RatingForm from './rating';
import { giveCookie } from '../../util/rating_api_util';

const mapStateToProps = (state, ownProps) => ({
    tagAlong: ownProps.tagAlong,
});

const mapDispatchToProps = dispatch => ({
    giveCookie: cookie => dispatch(giveCookie(cookie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);