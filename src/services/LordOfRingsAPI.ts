import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const LordOfRingsAPI = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
});

LordOfRingsAPI.interceptors.request.use(
  async (config) => {
    const headers = config.headers || {};
    headers.Authorization = `Bearer ${process.env.VITE_ACCESS_TOKEN}`;
    config.headers = headers;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { LordOfRingsAPI };
