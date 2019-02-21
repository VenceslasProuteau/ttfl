const { getGamesByDate, getRangeGames } = require('../services/games.api');

const getSchedule = (req, res) => {
  const { date } = req.params;
  getGamesByDate(date)
    .then(games => res.status(200).json(games))
}

const getRangedSchedule = (req, res) => {
  const { startDate, endDate } = req.params;
  getRangeGames(startDate, endDate)
    .then(data => res.status(200).json(data));
}

module.exports = {
  getSchedule,
  getRangedSchedule,
};