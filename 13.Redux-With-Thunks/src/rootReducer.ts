import { combineReducers } from 'redux';
import userDetailReducer from './features/userDetails/userDetailSlice';
import userListReducer from './features/usersList/userListSlice';

const rootReducer = combineReducers({
  userDetail: userDetailReducer,
  userData: userListReducer,
});

export default rootReducer;
