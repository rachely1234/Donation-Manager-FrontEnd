import axios from 'axios';
import qs from 'qs';

const interpactor = axios.create({
  baseURL: 'https://localhost:7131/api/',
  paramsSerializer: params => qs.stringify(params, { indices: false }),
});


interpactor.interceptors.request.use(
  config => {
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default interpactor;