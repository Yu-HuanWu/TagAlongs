import { 
    RECEIVE_TAGALONG,
    RECEIVE_TAGALONGS
} from "../actions/tagalong_actions";

const tagAlongsReducer = (initialState = {}, action) => {
    Object.freeze(initialState);
    // let newState = Object.assign({}, initialState);

    switch(action.type) {
        case RECEIVE_TAGALONG:
            let newState = Object.assign({},{0:action.tagAlong.data})
            return newState;
        case RECEIVE_TAGALONGS:
            let totalState = Object.assign({},action.tagAlongs.data)
            // newState.all = action.tagAlongs.data;
            return totalState;
        default:
            return initialState;
    }
}

export default tagAlongsReducer;