import { combineReducers } from 'redux';

import authReducer from './auth';
import songsReducer from './songs';
import streamerReducer from './streamer';

export default combineReducers({
  authReducer,
  songsReducer,
  streamerReducer
});
