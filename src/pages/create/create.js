import Stage from "../../common/js/stage";

export default class CreateStage extends Stage {
    constructor(gameRoot) {
        super(gameRoot);
    }

    init() {
        // тут обязательно должен теряться контекст выполнения, иначе фазер не заведется
        this.logo = this.add.image(400, 150, "logo");

        this.tweens.add({
            targets: this.logo,
            y: 350,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}