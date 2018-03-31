// import { Container, Application, Sprite, Graphics, particles, loader } from 'pixi.js';

// class Card extends Container {
//     constructor(props) {
//         super(props);
//         this.props = props;
//         loader.add('cards', props.images)
//             .load(this.setup.bind(this));
//     }

//     setup(loader, resources) {
//         this.cardTexture = resources['cards'].textures;
//         var card = this.cardTexture['card-2'];

//         //console.log(this);
//         //this.addChild(card);
//     }
// }

// export default Card;
import { Container, Application, Sprite, Graphics, particles, loader } from 'pixi.js';

class Card extends Container {
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
            cardSprite = this.createSprite(card);
        });
    }

    createSprite(sprite) {
        var card = new Sprite(sprite);
        Object.assign(card, {
            anchor: { x: 0.5, y: 0.5 }
        });
        card.scale.set(0.5);
        this.addChild(card);
        return card;
    }
}

export default Card;