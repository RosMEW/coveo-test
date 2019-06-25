import axios from 'axios';
import { token } from '../.config/token.json';

const axiosInstance = axios.create({
    baseURL: 'https://cloudplatform.coveo.com/rest'
});

// add token to each request
axiosInstance.interceptors.request.use(config => {
    if (!config.params) config.params = {};
    config.params.access_token = token;
    return config;
});

export default axiosInstance;
