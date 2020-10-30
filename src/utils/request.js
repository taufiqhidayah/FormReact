import axios from 'axios';
import { BASE_API } from './constants';

export default (
  url,
  method = 'get',
  params = null,
  token = null,
  customConfig = null,
) => {
  let config = {
    method,
    url,
  };
  if (token !== null) {
    config = Object.assign(config, { headers: { ...config.headers, Authorization: `Bearer ${token}` } });
  }
  if (params !== null) {
    config = method === 'get' ? Object.assign(config, { params }) : Object.assign(config, { data: params });
  }
  return axios(config);
};
