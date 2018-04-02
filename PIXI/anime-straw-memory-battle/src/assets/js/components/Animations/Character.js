import {TweenMax, Power3} from 'gsap';

import Flash from './Flash';

export default class Character extends Flash {
    constructor(texture, props) {
        super(texture, props);
        Object.assign(this.props, {
            x: 375,
            y: 375,
            duration: 1,
            alpha: 0
        }, props);
        this.anchor.set(0.5);
        this.position.set(props.x, props.y);
        //TweenMax.set(this, {alpha: props.alpha});
        this.alpha = props.alpha;
    }

    run(endPoint) {
        return new Promise((next) => {
            TweenMax.to(this, this.props.duration, {
                alpha: 100, x: endPoint, ease: Power3.easeOut, onComplete: () => {
                    setTimeout(() => {
                        this.flash();
                    }, 200);
                    next();
                }
            });
        });
    }
}
