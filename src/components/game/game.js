import Phaser from "phaser";
import StageList from "../stage-list/stage-list";

export default class Game {
    constructor() {
        this.config = {
            type: Phaser.AUTO,
            parent: "phaser-example",
            width: 800,
            height: 600,
            scene: {}
        };

        this.game = null;

        this.initStages = this.initStages.bind(this);
        this.init = this.init.bind(this);
        this.init();
    }

    initStages() {
        this.stageList = new StageList(this.config.scene);

        Object.keys(this.stageList.stages).forEach((stage) => {
            this.config.scene[stage] = this.stageList.stages[stage].init;
        });
    }

    init() {
        this.initStages();

        this.game = new Phaser.Game(this.config);
    }
}