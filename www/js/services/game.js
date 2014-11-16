angular.module("dozeoudez.services")

.factory("Game", function(GameClock) {
  var STATUSES = {
    paused: "paused",
    running: "running",
    finished: "finished"
  };

  function Game() {
    this.start_at = null;
    this.status = STATUSES.paused;
    this.clock = new GameClock(this);
    this.homeTeam = { points: 0 };
    this.awayTeam = { points: 0 };
  }

  Game.STATUSES = STATUSES;

  Game.prototype = {
    start: function () {
      this.start_at = moment();
      this.status = STATUSES.running;
      this.clock.start();
    },
    pause: function () {
      this.clock.stop();
      this.status = STATUSES.paused;
    },
    finish: function () {
      this.clock.stop();
      this.status = STATUSES.finished;
    }
  };

  return Game;
});
