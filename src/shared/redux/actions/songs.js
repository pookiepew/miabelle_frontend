import api from '../../util/api';

import { GET_ALL_SONGS, GET_SINGLE_SONG, FILTER_SONGS } from './types';

export const getAllSongs = () => async dispatch => {
  try {
    const res = await api.get('/songs');

    dispatch({
      type: GET_ALL_SONGS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleSong = id => async dispatch => {
  try {
    const res = await api.get('/song/' + id);

    dispatch({
      type: GET_SINGLE_SONG,
      payload: res.data[0]
    });
  } catch (err) {
    console.log(err);
  }
};

export const filterSongs = (songs, filter) => async dispatch => {
  dispatch({
    type: FILTER_SONGS,
    songs,
    filter
  });
};
