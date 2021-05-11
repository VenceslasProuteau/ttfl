const { getGamesByDate } = require('../services/games.api');

const getSchedule = (req, res) => {
  const { date } = req.params;
  getGamesByDate(date)
    .then(games => res.status(200).json(games))
}

module.exports = {
  getSchedule,
};