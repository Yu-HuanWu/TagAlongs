import { RECEIVE_TAGALONG } from "../actions/tagalong_actions";

const tagAlongsReducer = (initialState = {}, action) => {
    Object.freeze(initialState)

    switch(action.type) {
        case RECEIVE_TAGALONG:
            return Object.assign(initialState, action.tagAlong);
        default:
            return initialState;
    }
}

export default tagAlongsReducer;