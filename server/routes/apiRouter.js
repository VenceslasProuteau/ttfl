const express = require('express');
const nbaRouter = express.Router();

const {
  getSchedule,
  getRangedSchedule,
} = require('../controllers/schedule');

nbaRouter.route('/schedule/:date').get(getSchedule);
nbaRouter.route('/schedule/range/:startDate/:endDate').get(getRangedSchedule)

module.exports = nbaRouter;