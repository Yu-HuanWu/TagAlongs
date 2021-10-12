import * as APIUtil from '../util/taglong_api_util';

export const RECEIVE_TAGALONG = "RECEIVE_TAGALONG";

const receiveTagAlong = tagAlong => {
    return {
        type: RECEIVE_TAGALONG,
        tagAlong
    }
}

export const createTagAlong = tagalong => dispatch => (
    APIUtil.createTagAlong(tagalong).then(tagalong => (
        dispatch(receiveTagAlong(tagalong))
    ))
)