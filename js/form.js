/*
Form: 6th May 2021
- This is the introduction menu when the game starts this includes the use of DOM to 
  make html elements and then positon them accridingly to there heirachy this also 
  includes some starting logic with reset 
*/
class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.reset = createButton("Reset");
    this.title = createElement("h2");
    this.greeting = createElement("h2");
    this.greeting.addClass("greeting");
  }

  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display() {
    this.title.html("FRUIT CATCHER");
    this.title.position(350, 50);
    this.input.position(550, 400);
    this.button.position(560, 500);
    this.reset.position(900, 660);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      this.greeting.html("Hello " + player.name);
      this.greeting.position(400, 250);
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });

    this.reset.mousePressed(() => {
      game.update(0);
      player.updateCount(0);
      let playerInfoRef = database.ref("players");
      playerInfoRef.remove();
    });
  }
}
