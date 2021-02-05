import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.miabelle.tv/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
