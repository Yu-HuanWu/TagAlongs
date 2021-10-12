import * as APIUtil from '../util/taglong_api_util';

export const RECEIVE_TAGALONG = "RECEIVE_TAGALONG";
export const RECEIVE_TAGALONGS = "RECEIVE_TAGALONGS";

const receiveTagAlong = tagAlong => {
    return {
        type: RECEIVE_TAGALONG,
        tagAlong
    }
}

const receiveTagAlongs = tagAlongs => {
    return {
        type: RECEIVE_TAGALONGS,
        tagAlongs
    }
}

export const createTagAlong = tagAlong => dispatch => (
    APIUtil.createTagAlong(tagAlong).then(tagAlong => 
        dispatch(receiveTagAlong(tagAlong))
    )
)

export const fetchTagAlongs = () => dispatch => (
    APIUtil.getTagAlongs().then(tagAlongs =>
        dispatch(receiveTagAlongs(tagAlongs))
    )
)