import {Sprite} from 'pixi.js';
import {TweenMax, Power1} from 'gsap';

export class Star extends Sprite {
    constructor(texture, props) {
        super(texture);
        props = this.props = Object.assign({
            scale: 1,
            duration: 1,
            delay: 1,
            x: 375,
            y: 375
        }, props);
        this.anchor.set(0.5);
        this.scale.set(0);
        this.position.set(props.x, props.y);
    }


    run() {
        this.scale.set(0);
        return new Promise((next) => {
            TweenMax.to(this.scale, this.props.duration, {
                x: this.props.scale, y: this.props.scale, ease: Power1.easeOut, onComplete: () => {
                    TweenMax.to(this.scale, this.props.duration, {x: 0, y: 0, ease: Power1.easeIn, onComplete: next});
                }
            });
        })
    }

    runDouble() {
        return new Promise(next => {
            this.run().then(() => this.run().then(next));
        });
    }

    repeat() {
        this.run().then(() => {
            this._repeatTimeout = setTimeout(() => this.repeat(), this.props.delay * 1000);
        });
    }

    stopRepeat() {
        clearTimeout(this._repeatTimeout);
    }

}
