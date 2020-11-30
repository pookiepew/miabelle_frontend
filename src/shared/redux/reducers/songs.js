import { GET_ALL_SONGS, FILTER_SONGS } from '../actions/types';

const initialState = {
  all: [],
  filtered: [],
  filter: {},
  loading: true
};

const songs = (state = initialState, action) => {
  const { type, payload, songs, filter } = action;

  switch (type) {
    case GET_ALL_SONGS:
      return {
        ...state,
        all: payload,
        loading: false
      };
    case FILTER_SONGS:
      return {
        ...state,
        filtered: songs,
        filter: {
          ...filter
        },
        loading: false
      };
    default:
      return state;
  }
};

export default songs;
