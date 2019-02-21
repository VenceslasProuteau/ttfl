const axios = require('axios');

const {
  url,
  host,
  key,
} = require('../config');

const callApi = (config) => {
  config.method = config.method || 'GET';
  config.headers = {
    "x-rapidapi-host": host,
    "x-rapidapi-key": key,
  };
  config.url = url + config.url;

  return axios(config).then((result = {}) => result.data);
}

module.exports = callApi;