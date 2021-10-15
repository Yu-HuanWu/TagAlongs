import * as APIUtil from '../util/tagalong_api_util';

export const RECEIVE_TAGALONG = "RECEIVE_TAGALONG";
export const RECEIVE_TAGALONGS = "RECEIVE_TAGALONGS";
export const RECEIVE_ACCEPTED_TAGALONGS = "RECEIVE_ACCEPTED_TAGALONGS";

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

const receiveAcceptedTagAlongs = acceptedTagAlongs => {
    return {
        type: RECEIVE_ACCEPTED_TAGALONGS,
        acceptedTagAlongs
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

export const fetchTag = (id) => dispatch =>(
  APIUtil.getTag(id).then(tagAlong =>
    dispatch(receiveTagAlong(tagAlong)))
)

export const fetchAcceptedTagAlongs = userId => dispatch => (
    APIUtil.acceptedTags(userId).then(acceptedTagAlongs =>
        dispatch(receiveAcceptedTagAlongs(acceptedTagAlongs)))
)

export const fetchMyTagAlongs = userId => dispatch => (
    APIUtil.myTags(userId).then(myTags =>
        dispatch(receiveTagAlongs(myTags)))
)


export const fetchCompletedTags = userId => dispatch =>(
  APIUtil.completedTags(userId).then(completedTagAlongs=>
    dispatch(receiveAcceptedTagAlongs(completedTagAlongs)))
)