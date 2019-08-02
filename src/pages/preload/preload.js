import Stage from "../../common/js/stage";
import logoImg from "../../assets/logo.png";

export default class PreloadStage extends Stage {
    constructor(gameRoot) {
        super(gameRoot);
    }

    init() {
        // тут обязательно должен теряться контекст выполнения, иначе фазер не заведется
        this.load.image('logo', logoImg);
    }
}