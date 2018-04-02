import {TweenMax} from 'gsap';

import Flash from './Flash';

export class Crown extends Flash {
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

    run(endPoint) {
        return new Promise((next) => {
            TweenMax.to(this, this.props.duration, {
                alpha: 100, y: endPoint, onComplete: () => {
                    setTimeout(() => {
                        this.flash();
                    }, 800);
                    next();
                }
            });
        });
    }
}

export class TwoYears extends Flash {
    constructor(texture, props) {
        super(texture, props);
        Object.assign(this.props, {
            x: 0,
            y: 0,
            duration: 1
        }, props);
        this.anchor.set(0.5);
        this.position.set(this.props.x, this.props.y);
        this.width = 0;
        this.height = 0;
    }

    run(w, h) {
        return new Promise((next) => {
            TweenMax.to(this, this.props.duration, {
                width: w, height: h, ease: Elastic.easeOut.config(2.5, 0.75), onComplete: () => {
                    this.flash();
                    next();
                }
            });
        });
    }
}
