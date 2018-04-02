import {TweenMax, Back} from 'gsap';

import Blur from './Blur';

export class Catch extends Blur {
    constructor(texture, props) {
        super(texture, props);
        Object.assign(this.props, {
            x: 0,
            y: 0,
            duration: 1
        }, props);
        this.anchor.set(0.5);
        this.position.set(this.props.x, this.props.y);
        this.alpha = 0;
    }

    run(x, y) {
        this.alpha = 1;
        return new Promise((next) => {
            TweenMax.to(this, this.props.duration, {x: x, y: y});
        });
    }

    runShow(x, y) {
        return new Promise((next) => {
            TweenMax.to(this, this.props.duration, {
                alpha: 100, x: x, y: y, ease: Back.easeOut.config(1.2), onComplete: () => {
                    setTimeout(() => {
                        this.runBlurRepeat();
                    }, 2000)
                }
            });
        });
    }
}
