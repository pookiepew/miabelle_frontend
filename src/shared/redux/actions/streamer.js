import axios from 'axios';

import { GET_USERS_BY_STREAMER } from './types';

export const getUsersByStreamer = streamer => async dispatch => {
  try {
    const { data } = await axios.get(
      'http://localhost:8000/streamer/users?streamer=' + streamer
    );
    dispatch({
      type: GET_USERS_BY_STREAMER,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};
