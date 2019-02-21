const format = require('date-fns/format')

module.exports = class Game {
  constructor({
    seasonYear,
    gameId,
    startTimeUTC,
    arena,
    city,
    country,
    clock,
    gameDuration,
    currentPeriod,
    halfTime,
    statusGame,
    vTeam,
    hTeam,
  }) {
    this.seasonYear = seasonYear;
    this.gameId = gameId;
    this.startTime = format(new Date(startTimeUTC), 'HH:mm');
    this.arena = arena;
    this.city = city;
    this.country = country;
    this.clock = clock;
    this.gameDuration = gameDuration;
    this.currentPeriod = currentPeriod;
    this.halfTime = halfTime;
    this.statusGame = statusGame;
    this.vTeam = vTeam;
    this.hTeam = hTeam;
  }
}