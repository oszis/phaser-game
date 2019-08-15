import { SCENES } from '../../common/js/variables';
// import BaseCamera from "../../components/camera/camera";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENES.MENU,
        });
    }

    create() {
        // this.animated = this.add.sprite(0, 0, 'menu-bg').setOrigin(0);

        /*this.tweens.add({
            targets: this.animated,
            y: -50,
            duration: 2000,
            ease: 'Phaser.Easing.Back.InOut',
            yoyo: true,
            loop: -1,
        });

        const helloButton = this.add.text(100, 100, 'Hello Phaser!', { fill: '#000' });
        helloButton.setInteractive();*/
    }
}
