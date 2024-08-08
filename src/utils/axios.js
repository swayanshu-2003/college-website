import { REACT_APP_HOST_API } from '../config';
import axios from 'axios';

// Create axios instance with base config
export const axiosInstance = axios.create({
    baseURL: REACT_APP_HOST_API,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor to include the token in the headers for each request
axiosInstance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
