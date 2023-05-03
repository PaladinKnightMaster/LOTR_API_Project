import axios from 'axios';

const LordOfRingsAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

LordOfRingsAPI.interceptors.request.use(
  async (config) => {
    const headers = config.headers || {};
    headers.Authorization = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;
    config.headers = headers;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { LordOfRingsAPI };
