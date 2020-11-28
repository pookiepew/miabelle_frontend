import api from '../utils/api';

import { GET_ALL_SONGS } from './types';

export const getAllSongs = () => async dispatch => {
  try {
    const res = await api.get('/all-songs');

    dispatch({
      type: GET_ALL_SONGS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
