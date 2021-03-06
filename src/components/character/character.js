export default class Character extends Phaser.GameObjects.Sprite {
    constructor(args) {
        super(args.scene, args.x, args.y, args.texture, args.frame);
        this.keys = {};
        this.velocity = 200;

        this.sprite = this.scene.physics.add.sprite(150, 150, 'char');﻿
        this.sprite.body.setCollideWorldBounds(true);

        this.keys.w = this.scene.input.keyboard.addKey('W');
        this.keys.s = this.scene.input.keyboard.addKey('S');
        this.keys.a = this.scene.input.keyboard.addKey('A');
        this.keys.d = this.scene.input.keyboard.addKey('D');
        this.scene.input.keyboard.addKey('W');
        this.scene.input.keyboard.addKey('S');
        this.scene.input.keyboard.addKey('A');
        this.scene.input.keyboard.addKey('D');

        this.init();
    }

    init() {
        this.scene.physics.world.enable(this);

        Object.keys(this.keys).forEach((key) => {
            this.keys[key].on('up', () => {
                this.sprite.setVelocity(0, 0);
            });
        });

        // охуеть, тут большая часть функций есть из коробки. Но их нужно искать, что заебывает
        this.scene.cameras.main.startFollow(this.sprite, false, 0.09, 0.09);
    }

    update() {
        this.sprite.body.setVelocity(0);
        if (this.keys.w.isDown) {
            this.sprite.body.setVelocityY(-this.velocity);
        }

        if (this.keys.s.isDown) {
            this.sprite.body.setVelocityY(this.velocity);
        }

        if (this.keys.a.isDown) {
            this.sprite.body.setVelocityX(-this.velocity);
        }

        if (this.keys.d.isDown) {
            this.sprite.body.setVelocityX(this.velocity);
        }

        this.sprite.body.velocity.normalize().scale(this.velocity);
    }
}
