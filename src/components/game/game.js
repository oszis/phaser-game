import Phaser from "phaser";
// import StageList from "../stage-list/stage-list";
import LoadScene from '../../scenes/load-scene/load-scene';

export default class Game {
    constructor() {
        this.config = {
            type: Phaser.AUTO,
            parent: "phaser-example",
            width: 800,
            height: 600,
            scene: [LoadScene],
            render: {
                pixelArt: true
            },
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true
                }
            }
        };

        this.game = null;

        this.init = this.init.bind(this);
        this.init();
    }

    init() {
        this.game = new Phaser.Game(this.config);
    }

    pause() {
        this.game.scene.pause();
    }

    resume() {
        this.game.scene.resume();
    }
}