import { Container, Application, Sprite, Graphics, particles, loader } from 'pixi.js';

import Particle from './Particle';
import Card from './Card';


class Wellcome extends Container {
    constructor(props) {
        super(props);
        this.props = props;
        loader
            .add('cards', props.cards)
            .load(this.setup.bind(this));
    }

    setup(loader, resources) {
        Object.entries(resources.cards.textures).forEach(ele => {
            var cardSprite = new Sprite(ele[1]);
            cardSprite.position.set(Math.round(this.random(0, this.props.width)), Math.round(this.random(0, this.props.height)))
            this.addChild(cardSprite);
        });

        var particle = new Particle({
            width: this.props.width,
            height: this.props.height,
            num: 50,
            effect: 'Rain',
            objects: [0xffffff].map((color) => {
                var ga = new Graphics();

                ga.beginFill(color);
                ga.alpha = 1;
                //ga.drawRect(0, 0, 15, 15);
                ga.drawCircle(10, 10, 10);
                return ga;
            })
        });

        // var card = new Card({
        //     width: this.props.width,
        //     height: this.props.height
        // });
        //card.emit('start');
        this.addChild(particle);
        // var total = 3000;
        // var spriteParticle = new Sprite();
        // var graphics = new Graphics();
        // var oSpace = [];
        // var arrayColor = [16514571, 16752896, 15607352, 14223825, 8999167, 1422079, 5236421, 11399276];
        // var color = 16763669;
        // var OFFSET_X = 120;
        // graphics.beginFill(0xFF0000, 1);
        // graphics.drawRect(10, 10, 50, 50);
        // for (let i = 0; i < total; i++) {
        //     oSpace.push(new Graphics());
        //     color = arrayColor[Math.round(this.random(0, 7))];
        //     oSpace[i].beginFill(color);
        //     oSpace[i].drawRect(this.random(0, 513), this.random(0, 936), 20, 20);
        //     this.addChild(oSpace[i]);
        //     TweenMax.set(oSpace[i], 0.5, {
        //         x: this.random(0 - OFFSET_X, 513 + 20),
        //         y: -20
        //     });
        //     TweenMax.to(oSpace[i], this.random(0.5, 1), {
        //         x: this.random(0 - OFFSET_X, 513 + 20),
        //         y: this.random(0 - OFFSET_X, 513 + 20),
        //         repeat: -1,
        //         ease: Sine.easeInOut
        //     });
        // }
    }
    random(min, max) {
        return min + (Math.random() * (max - min));
    }
}

export default Wellcome;