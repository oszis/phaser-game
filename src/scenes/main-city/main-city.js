import {SCENES} from "../../common/js/constants";
import Character from "../../components/character/character";

export default class MainCity extends Phaser.Scene {
    constructor() {
        super({
            key: SCENES.MAIN_CITY
        });
    }

    create() {
        this.map = this.make.tilemap({ key: "map", tileWidth: 32, tileHeight: 32 });
        this.tileset = this.map.addTilesetImage("ground_tiles", "map-tileset");
        this.layer = this.map.createStaticLayer(0, this.tileset, 0,0);

        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.physics.world.setBounds(0,0, this.map.widthInPixels, this.map.heightInPixels, true, true, true, true);

        /*var cursors = this.input.keyboard.createCursorKeys();
        var controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        };*/

        // this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

        this.gamePerson = new Character({
            scene: this,
        });
    }

    update(time, delta) {
        // this.controls.update(delta);
        this.gamePerson.update();
    }
}