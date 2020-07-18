import { combineReducers } from 'redux';

import auth from './auth/reducer';
import posts from './posts/reducer';
import profiles from './profiles/reducer';

export default combineReducers({
  auth,
  posts,
  profiles,
});
