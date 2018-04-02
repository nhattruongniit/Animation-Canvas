import {TweenMax, Bounce} from 'gsap';

import Flash from './Flash';

export default class MiddleText2 extends Flash {
    constructor(texture, props) {
        super(texture, props);
        Object.assign(this.props, {
            x: 375,
            y: 375,
            duration: 1,
            alpha: 0
        }, props);
        this.anchor.set(0.5);
        this.position.set(this.props.x, this.props.y);
        this.alpha = this.props.alpha;
    }

    run(endPoint) {
        return new Promise((next) => {
            TweenMax.to(this, this.props.duration * 0.5, {
                alpha: 100, y: endPoint, ease: Bounce.easeOut, onComplete: () => {
                    this.flash();
                    next();
                }
            });
        });
    }
}
