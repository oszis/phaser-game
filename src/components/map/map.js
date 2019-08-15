import Phaser from 'phaser';

export default class Map {
    constructor(scene, mapData) {
        this.scene = scene;
        console.log(mapData);
        this.map = scene.make.tilemap(mapData);
    }

    init() {
        this.initGroundLayer = this.initGroundLayer.bind(this);
        this.layers = [...this.map.layers].map((layer, index) => {
            return this.initGroundLayer(index);
        });

        this.scene.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.scene.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels, true, true, true, true);
    }

    initGroundLayer(index) {
        this.map.addTilesetImage(this.map.tilesets[index].name, window.mapTileset);
        let layer = this.map.createStaticLayer(index, this.map.tilesets[index].name, 0, 0);

        layer.setCollisionByProperty({ collides: true });

        // debug
        const debugGraphics = this.scene.add.graphics().setAlpha(0.75);

        layer.renderDebug(debugGraphics, {
            tileColor: null, // Color of non-colliding tiles
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        });

        return layer;
    }

    initObjectsLayer(index) {
        this.map.addTilesetImage(this.map.tilesets[index].name, window.mapTileset);
        this.map.createStaticLayer(index, this.map.tilesets[index].name, 0, 0);
    }
}
