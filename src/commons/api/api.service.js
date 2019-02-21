import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const callApi = (config) => {
  config.method = config.method || 'GET';
  config.url = `${BASE_URL}${config.url}`;

  return axios(config).then((result = {}) => result.data);
}

export {
  callApi
};