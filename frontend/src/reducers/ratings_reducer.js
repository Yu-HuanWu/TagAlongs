import { 
    RECEIVE_RATING,
} from "../actions/rating_actions";

const ratingsReducer = (initialState = {}, action) => {
    Object.freeze(initialState);

    switch(action.type) {
        case RECEIVE_RATING:
            let newState = Object.assign({},{0:action.rating.data})
            return newState;
        default:
            return initialState;
    }
}

export default ratingsReducer;