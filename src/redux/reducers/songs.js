import { GET_ALL_SONGS } from '../actions/types';

const initialState = {
  all: [],
  loading: true
};

const songs = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_SONGS:
      return {
        ...state,
        all: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default songs;
