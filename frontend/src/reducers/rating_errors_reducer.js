import {
    RECEIVE_RATING_ERRORS
} from '../actions/rating_actions';

const _nullErrors = [];

const RatingErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RATING_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default RatingErrorsReducer;