var playerCount = 0;
var gameState = 0;
var database, player, form, game, back_img;
var player1, player2, players, allPlayers, player_img;
var fruits,
  fruitGroup,
  fruit1_img,
  fruit2_img,
  fruit3_img,
  fruit4_img,
  fruit5_img;

function preload() {
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
}
function setup() {
  // Canvas and Database
  const canvas = createCanvas(1000, 600);
  database = firebase.database();

  // Game
  game = new Game();
  game.getState();
  game.start();

  // Groups
  fruitGroup = new Group();
}

function draw() {
  background(back_img);

  // Game Control
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}
