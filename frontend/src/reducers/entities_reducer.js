import { combineReducers } from 'redux';
import tagAlongsReducer from './tagalongs_reducer';
import usersReducer from './users_reducer';


export default combineReducers({
    tagAlongs: tagAlongsReducer,
    users: usersReducer
});