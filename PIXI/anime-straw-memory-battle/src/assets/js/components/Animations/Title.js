import {TweenMax, Bounce} from 'gsap';

import Flash from './Flash';

export default class Title extends Flash {
    constructor(texture, props) {
        super(texture, props);
        Object.assign(this.props, {
            x: 0,
            y: 0,
            duration: 0.5,
            alpha: 0
        }, props);
        this.anchor.set(0.5);
        this.position.set(props.x, props.y);
        this.alpha = props.alpha;
    }

    run(endPoint) {
        return new Promise((next) => {
            TweenMax.to(this, this.props.duration, {
                alpha: 100, y: endPoint, ease: Bounce.easeOut, onComplete: () => {
                    this.flash();
                    next();
                }
            });
        });
    }

}
