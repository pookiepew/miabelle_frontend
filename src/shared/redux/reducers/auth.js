import { LOGIN_SUCCESS, USER_LOADED, LOGOUT } from '../actions/types';

const initialState = {
  user: {
    isAuthenticated: false,
    chat: {
      connected: false
    }
  },
  loading: true
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
          isAuthenticated: true
        },
        loading: false
      };
    case USER_LOADED:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
          isAuthenticated: true
        },
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: false,
          chat: {
            connected: false
          }
        },
        loading: false
      };
    default:
      return state;
  }
};

export default auth;
