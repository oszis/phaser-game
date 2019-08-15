import Phaser from 'phaser';
// import StageList from "../stage-list/stage-list";
import LoadScene from '../../scenes/load-scene/load-scene';

export default class Game {
    constructor() {
        this.config = {
            type: Phaser.AUTO,
            parent: 'phaser-example',
            width: window.innerWidth,
            height: window.innerHeight,
            scene: [LoadScene],
            render: {
                pixelArt: true,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: true,
                },
            },
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
