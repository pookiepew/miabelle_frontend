import { GET_STREAMER_DATA, GET_USERS_BY_STREAMER } from '../actions/types';

const initialState = {
  login: 'pookiepew',
  songs: [],
  favoriteSongs: [],
  learningSongs: [],
  bannedSongs: [],
  queue: [],
  dancedToday: [],
  twitchChat: {
    isQueueOpen: false,
    songRequestMessage: '',
    leaveQueueMessage: '',
    openQueueMessage: '',
    closeQueueMessage: ''
  },
  users: {
    all: [],
    approved: []
  },
  loading: true
};

const streamer = (state = initialState, action) => {
  const { type, payload, streamer } = action;

  switch (type) {
    case GET_STREAMER_DATA:
      return {
        ...state,
        songs: payload.activeSongs,
        favoriteSongs: payload.favoriteSongs,
        learningSongs: payload.learningSongs,
        bannedSongs: payload.bannedSongs,
        queue: payload.queue,
        dancedToday: payload.dancedToday,
        twitchChat: payload.twitchChat,
        streamer,
        loading: false
      };
    case GET_USERS_BY_STREAMER:
      return {
        ...state,
        users: {
          ...state.users,
          all: payload
        }
      };

    default:
      return state;
  }
};

export default streamer;
