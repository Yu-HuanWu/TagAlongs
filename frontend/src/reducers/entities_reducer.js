import { combineReducers } from 'redux';
import tagAlongsReducer from './tagalongs_reducer';

export default combineReducers({
    tagAlongs: tagAlongsReducer,
});