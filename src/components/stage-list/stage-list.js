import LoadScene from '../../scenes/load-scene/load-scene';
import MenuScene from '../../scenes/menu-scene/menu-scene';
import MainCity from '../../scenes/main-city/main-city';

export default class StageList {
    constructor(gameRoot) {
        this.gameRoot = gameRoot;
        this.stages = {};

        this.init = this.init.bind(this);
        this.init();
    }

    init() {
        // эта хуйня не работает. Не добавляй сюда нихуя. Потом поправишь
        this.stages.LOAD= LoadScene;
        this.stages.MENU = MenuScene;
        this.stages.MENU = MenuScene;
        this.stages.MAIN_CITY = MenuScene;
    }
}