import { GET_STREAMER_DATA } from '../actions/types';

const initialState = {
  streamer: 'pookiepew',
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

    default:
      return state;
  }
};

export default streamer;
