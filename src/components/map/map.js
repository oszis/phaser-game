export default class Map extends Phaser.Tilemaps.Tilemap {
    constructor(scene, mapData) {
        super(scene, mapData);

        console.log(this);
    }
}