import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import PostReducer from './postReducer';

export default combineReducers({
  AuthReducer,
  PostReducer,
});
