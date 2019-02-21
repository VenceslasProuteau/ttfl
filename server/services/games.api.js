const callApi = require('./api');
const Game = require('../models/game.model');
const {
  format,
  eachDayOfInterval,
} = require('date-fns');

const URL_PREFIX = '/games/';

const getGameById = (gameId) =>
  callApi({
    url: `${URL_PREFIX}gameId/${gameId}`,
  }).then(({
    api: {
      games = [],
    } = {}
  } = {}) => games
    .filter(({ seasonYear }) => parseInt(seasonYear, 10) > 0)
    .map(game => new Game(game)));

const getGamesByDate = (date) =>
  callApi({
    url: `${URL_PREFIX}date/${date}`,
  }).then(({
    api: {
      games = [],
    } = {}
  } = {}) => ({
    date: format(new Date(date), 'MMMM dd'),
    games: games
      .filter(({ seasonYear }) => parseInt(seasonYear, 10) > 0)
      .map(game => new Game(game))
  }));

const getRangeGames = (startDate, endDate) => {
  const promises = eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  }).map(date => getGamesByDate(format(date, 'yyyy-MM-dd')));
  
  return Promise.all(promises)
    .then(data => {
      console.log('then', data);
      return data;
    })
    .catch(e => console.log('e', e));
}

module.exports = {
  getGameById,
  getGamesByDate,
  getRangeGames,
};
