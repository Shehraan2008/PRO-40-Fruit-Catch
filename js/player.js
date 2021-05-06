/*
 Player: 6th May 2021
 - It gets the player count from the database using getCount and updateCount
 - Updates the playerinfo like there name score and distance in update.
 - it gets the score and updates it in updateScore and getScore().
 - and also cheak the index of players.
*/
class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.score = 0;
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
      score: this.score,
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }

  static getScore() {
    database.ref("score").on("value", (data) => {
      this.score = data.val();
    });
  }

  static updateScore(score) {
    database.ref("/").update({
      score: score,
    });
  }
}
