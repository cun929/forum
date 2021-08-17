import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

let baseURL;
switch (import.meta.env.MODE) {
  case 'development':
    baseURL = '/api';// 开发环境
    break;
  default:
    baseURL = 'http://localhost:3001';
    break;// 生产环境
}
const instance: AxiosInstance = axios.create({
  timeout: 1000, // 响应时间
  baseURL,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config);
    return config;
  },
  (error: any) => Promise.reject(error),
);
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    return response;
  },
  (error: any) => Promise.reject(error),
);
export default instance;
