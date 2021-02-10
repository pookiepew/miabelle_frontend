import { SET_CHAT_CONNECTION_STATUS } from '../actions/types';

const initialState = {
  connectionStatus: 'Not Connected'
};

const twitchChat = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CHAT_CONNECTION_STATUS:
      return {
        ...state,
        connectionStatus: payload
      };

    default:
      return state;
  }
};

export default twitchChat;
