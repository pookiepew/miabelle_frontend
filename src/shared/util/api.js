import axios from 'axios';

import store from '../redux/store';

import { LOGOUT } from '../redux/actions/types';

const api = axios.create({
  baseURL: 'http://localhost:4040/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
