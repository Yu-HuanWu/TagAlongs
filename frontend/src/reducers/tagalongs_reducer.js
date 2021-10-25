import { 
    RECEIVE_TAGALONG,
    RECEIVE_TAGALONGS,
    RECEIVE_ACCEPTED_TAGALONGS,
    DELETE_TAGALONG
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
        case RECEIVE_ACCEPTED_TAGALONGS:
            let nextState = Object.assign({}, action.acceptedTagAlongs.data);
            return nextState;
        case DELETE_TAGALONG:
            let updatedState = Object.assign({}, initialState);
            console.log(action)
            delete updatedState[action.index];
            return updatedState;
        default:
            return initialState;
    }
}

export default tagAlongsReducer;