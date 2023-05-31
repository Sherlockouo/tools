import { BASE_URL, TIME_OUT } from './config';
import Request from './request';

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    }
  }
});

export default request;
