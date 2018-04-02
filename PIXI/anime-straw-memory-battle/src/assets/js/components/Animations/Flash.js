import {Sprite} from 'pixi.js';
import {TweenMax, Power0} from 'gsap';

export default class Flash extends Sprite {
    constructor(texture, props) {
        super(texture);
        this.props = Object.assign({
            durationFlash: 0.3
        }, props);
    }

    flash() {
        const filter = new PIXI.filters.ColorMatrixFilter();
        filter.matrix = [
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            0, 0, 0, 1, 0
        ];
        filter.alpha = 0;
        this.filters = [filter];

        return new Promise(next => {
            TweenMax.to(filter, this.props.durationFlash * 0.3, {
                alpha: 1, ease: Power0.easeIn, onComplete: () => {
                    TweenMax.to(filter, this.props.durationFlash * 0.7, {
                        alpha: 0, onComplete: () => {
                            this.filters = [];
                            next();
                        }
                    })
                }
            })
        });
    }

}
