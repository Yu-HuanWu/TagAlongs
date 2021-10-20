import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import RatingErrorsReducer from './rating_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    ratings: RatingErrorsReducer
});