import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';

const RootReducer = combineReducers({
  session: session,
  errors: errors
});

export default RootReducer;