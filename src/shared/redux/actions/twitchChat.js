import { SET_CHAT_CONNECTION_STATUS } from './types';

export const setConnectionStatus = connectionStatus => dispatch => {
  dispatch({
    type: SET_CHAT_CONNECTION_STATUS,
    payload: connectionStatus
  });
};
