import PreloadStage from '../../pages/preload/preload';
import CreateStage from "../../pages/create/create";

export default class StageList {
    constructor(gameRoot) {
        this.gameRoot = gameRoot;
        this.stages = {};

        this.initStages = this.initStages.bind(this);
        this.init = this.init.bind(this);
        this.init();
    }

    init() {
        this.stages.preload = new PreloadStage(this.gameRoot);
        this.stages.create = new CreateStage(this.gameRoot);
    }

    initStages() {
        /*Object.keys(this.stages).forEach(stage => {
            this.stages[stage].init();
        });*/
    }
}