import Game from "./components/game/game";
import Phaser from "phaser";
import logoImg from "./assets/logo.png";

let phaserGame = new Game();

/*
const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  console.log(this);
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 350,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
*/
