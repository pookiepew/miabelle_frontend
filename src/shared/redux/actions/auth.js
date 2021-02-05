import axios from 'axios';

import { LOGIN_SUCCESS, USER_LOADED } from './types';

import { chat } from '../../util/chat';

const URL = process.env.REACT_APP_DEV_URL;

export const login = code => async dispatch => {
  try {
    const { data } = await axios.get(
      URL + '/twitch-auth/authenticate?code=' + code
    );

    const {
      twitch_id,
      display_name,
      login,
      profile_image_url,
      refresh_token,
      access_token
    } = data;

    const user = JSON.stringify({
      access_token,
      refresh_token,
      twitch_id,
      iat: Math.floor(Date.now() / 1000 + 60)
    });

    localStorage.setItem('user', user);

    if (access_token) {
      await chat.connect(login, access_token, 'pookiepew');
    }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        twitch_id,
        display_name,
        login,
        profile_image_url,
        refresh_token
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const loadUser = data => async dispatch => {
  const { twitch_id, refresh_token } = data;
  try {
    const { data } = await axios.get(
      URL +
        '/twitch-auth/refresh-token' +
        '?twitch_id=' +
        twitch_id +
        '&refresh_token=' +
        refresh_token
    );

    const user = JSON.stringify({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      twitch_id: data.twitch_id,
      iat: Math.floor(Date.now() / 1000 + 60)
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
