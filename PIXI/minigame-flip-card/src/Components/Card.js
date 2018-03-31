import { Container, Sprite, loader, utils } from 'pixi.js';
import { TweenMax, TimelineLite } from "gsap";
//var CustomEase = require('./CustomEase');


//CustomEase.create("upDown", "M0,0 C0,0.2 0.2,1 0.5,1 0.802,1 1,0.204 1,0");


class Card extends Container {
    constructor(props) {
        props = Object.assign({}, props);
        super(props);
        this.props = props;
        this.state = { open: true }
        this.setup(props);

        // this.beginFill(0xfff000);
        // this.alpha = 1;
        // this.drawRect(0, 0, props.width, props.height);
    }

    setup(props) {
        Object.assign(this, {
            interactive: true,
            buttonMode: true,
            zOrder: 1,

            back: this.createLayer(props.back),
            front: this.createLayer(props.card)
        })

        this.setupAnimation();
        this.setupEvents();
    }

    createLayer(texture) {
        const { width, height } = this.props,
            layer = new Sprite(texture);

        Object.assign(layer, {
            width: width,
            height: height,
            anchor: { x: 0.5, y: 0.5 },
            x: width / 2,
            y: height / 2
        });
        this.addChild(layer);
        return layer;
    }

    setupAnimation() {
        const deg180 = Math.PI / 2,
            { front, back } = this;

        this.anim = new TimelineLite({
                paused: true,
                onComplete: () => this.emit('closed'),
                onReverseComplete: () => this.emit('opened')
            })
            .add(
                new TweenMax([front, back], 1, {
                    object: {
                        skew: { y: Math.PI }
                    },
                    onUpdate: function(val) {
                        if (this.target[0].skew.y > deg180) {
                            front.visible = false;
                        } else {
                            front.visible = true;
                        }
                    }
                })
            )
            .timeScale(3);
    }

    setupEvents() {

        const { props, anim, state } = this, { sound } = props;

        this
            .on('tap', () => {
                state.open || this.emit('open');
            })
            .on('open', () => {
                state.open = true;
                sound.play('open');
                anim.reverse();
            })
            .on('close', () => {
                state.open = false;
                sound.play('close');
                anim.play()
            });
    }

    valid(card) {
        return this !== card && card.ID === this.ID;
    }
}

export default Card;