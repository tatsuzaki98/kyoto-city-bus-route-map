import {AxiosRequestConfig} from 'axios';

export const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
};
