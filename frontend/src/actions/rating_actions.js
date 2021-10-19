import * as APIUtil from '../util/rating_api_util';

export const RECEIVE_RATING = "RECEIVE_RATING";
export const RECEIVE_RATING_ERRORS = "RECEIVE_RATING_ERRORS";

const receiveRating = rating => {
    return {
        type: RECEIVE_RATING,
        rating
    }
}

const receiveRatingErrors = errors => {
    return {
        type: RECEIVE_RATING_ERRORS,
        errors
    }
}

export const createRating = rating => dispatch => (
    APIUtil.giveCookie(rating).then(rating => (
        dispatch(receiveRating(rating))
    ), errors => (
        dispatch(receiveRatingErrors(errors.response.data))
    ))
)