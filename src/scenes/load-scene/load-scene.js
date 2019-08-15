import Phaser from 'phaser';
// import logoImg from "../../assets/logo.png";
import { SCENES } from '../../common/js/variables';
import mapTileset from '../../common/images/map/ground_tiles.png';
import charImg from '../../common/images/char.png';
import MenuScene from '../menu-scene/menu-scene';
import MainCity from '../main-city/main-city';
import JsonMap from '../../common/json/map.json';

export default class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENES.PRELOAD,
        });
    }

    init() {
    }

    preload() {
        // preload images
        window.mapTileset = 'map-tileset';
        this.load.image(window.mapTileset, mapTileset);
        // this.load.image('char', charImg);
        this.load.tilemapTiledJSON('map', JsonMap);

        // create loading bar
        const loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff,
            },
        });

        // simulate large load
        /* for (let i = 0; i < 100; i++) {
            this.load.image(`menu-bg-${i}`, menuBg);
        } */

        this.load.on('progress', (percent) => {
            loadingBar.fillRect(50, this.game.renderer.height / 2, (this.game.renderer.width - 100) * percent, 50);
        });

        this.load.on('complete', () => {
            // console.log('loading done');
        });
    }

    create() {
        this.scene.add(SCENES.MENU, MenuScene, false);
        this.scene.add(SCENES.MAIN_CITY, MainCity, false);
        this.scene.start(SCENES.MAIN_CITY);
    }
}
