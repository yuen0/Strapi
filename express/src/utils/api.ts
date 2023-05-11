import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://127.0.0.1:1337/api',
});

export default api;
