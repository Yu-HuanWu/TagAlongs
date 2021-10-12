import { 
    RECEIVE_TAGALONG,
    RECEIVE_TAGALONGS
} from "../actions/tagalong_actions";

const tagAlongsReducer = (initialState = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(initialState);
    let newState = Object.assign({}, initialState);

    switch(action.type) {
        case RECEIVE_TAGALONG:
            newState.new = action.tagAlong.data;
            return newState;
        case RECEIVE_TAGALONGS:
            newState.all = action.tagAlongs.data;
            return newState;
        default:
            return initialState;
    }
}

export default tagAlongsReducer;