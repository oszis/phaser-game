export default class BaseCamera extends Phaser.Cameras.Scene2D.Camera {
    constructor(initObj) {
        super(initObj.x, initObj.y, initObj.width, initObj.height);
        this.scene = initObj.scene;
        this.zoom = 0.5;
        this.scene.cameras.addExisting(this);
    }
}