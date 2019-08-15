import { SCENES } from '../../common/js/variables';
import Character from '../../components/character/character';
import Map from '../../components/map/map';

export default class MainCity extends Phaser.Scene {
    constructor() {
        super({
            key: SCENES.MAIN_CITY,
        });
    }

    create() {
        this.cameras.main.setBackgroundColor('#00A86A');

        this.map = new Map(this, {
            key: 'map', tileWidth: 32, tileHeight: 32,
        });

        this.gamePerson = new Character({
            scene: this,
        });

        this.map.init();
        this.gamePerson.sprite.setDepth(10);
        this.physics.add.collider(this.gamePerson.sprite, this.map.layers[0]);

        console.log(this.map.layers[0]);

        /* this.map = this.make.tilemap({ key: "map", tileWidth: 32, tileHeight: 32 });
        this.tileset = this.map.addTilesetImage("ground_tiles", "map-tileset");
        this.layer = this.map.createStaticLayer(0, this.tileset, 0,0); */

        /* var cursors = this.input.keyboard.createCursorKeys();
        var controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        }; */

        // this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
    }

    update(time, delta) {
        // this.controls.update(delta);
        this.gamePerson.update();
    }
}
