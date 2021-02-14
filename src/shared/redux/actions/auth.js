import axios from 'axios';

import { LOGIN_SUCCESS, USER_LOADED } from './types';

const URL = process.env.REACT_APP_DEV_URL;

export const login = (code, streamer) => async dispatch => {
  try {
    const {
      data: {
        twitch_id,
        display_name,
        login,
        profile_image_url,
        refresh_token,
        access_token
      }
    } = await axios.get(
      URL + '/twitch-auth/authenticate?code=' + code + '&streamer=' + streamer
    );

    const user = JSON.stringify({
      refresh_token,
      twitch_id,
      iat: Math.floor(Date.now() / 1000 + 3600),
      access_token
    });

    localStorage.setItem('user', user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        twitch_id,
        display_name,
        login,
        profile_image_url,
        refresh_token,
        access_token
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const loadUser = data => async dispatch => {
  const { twitch_id, refresh_token, streamer } = data;
  try {
    const { data } = await axios.get(
      URL +
        '/twitch-auth/refresh-token' +
        '?twitch_id=' +
        twitch_id +
        '&refresh_token=' +
        refresh_token +
        '&streamer=' +
        streamer
    );

    const user = JSON.stringify({
      refresh_token: data.refresh_token,
      twitch_id: data.twitch_id,
      iat: Math.floor(Date.now() / 1000 + 60),
      access_token: data.access_token
    });

    localStorage.setItem('user', user);

    dispatch({
      type: USER_LOADED,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};
