import { Container, Application, Sprite, Graphics, particles, loader } from 'pixi.js';

class GameCards extends Container {
    constructor(props) {
        super(props);
        this.props = props;
        this.setup();
    }

    setup() {
        var _this = this;
        var { card, background, x, y, width, height } = this.props;
        var bgSprite, cardSprite = this;

        this.once('start', () => {

        })
    }
}

export default GameCards;