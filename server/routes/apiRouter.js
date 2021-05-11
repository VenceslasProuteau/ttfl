const express = require('express');
const nbaRouter = express.Router();

const {
  getSchedule,
} = require('../controllers/schedule');

const {
  getPlayers
} = require('../controllers/players');

nbaRouter.route('/schedule/:date').get(getSchedule);
nbaRouter.route('/players/:teamId').get(getPlayers);

module.exports = nbaRouter;