import { combineReducers } from 'redux';

import auth from './auth';
import songs from './songs';
import streamer from './streamer';

export default combineReducers({
  auth,
  songs,
  streamer
});
