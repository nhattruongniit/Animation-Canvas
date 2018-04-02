import {Graphics, Sprite} from 'pixi.js';
import {TweenMax} from 'gsap';
import {DropShadowFilter} from '@pixi/filter-drop-shadow';

export default class Blur extends Sprite {
    constructor(texture, props) {
        super(texture);
        this.props = Object.assign({
            durationFlash: 0.3
        }, props);
    }

    blur() {
        const filter = new DropShadowFilter({
            color: 0xFFFFFF,
            alpha: 1,
            blur: 3,
            quality: 5
        });
        this.filters = [filter];
        const grap = new Graphics();
        grap.beginFill(0xFFFFFF);
        grap.drawRect(-this.width / 2, 0, 150, this.height);
        grap.pivot.set(25, this.height / 2);
        const lightFilter = new DropShadowFilter({
            color: 0xFFFFFF,
            alpha: 1,
            blur: 10,
            quality: 10,
            shadowOnly: true
        });
        grap.filters = [lightFilter];
        this.addChild(grap);
        return new Promise(next => {
            grap.x = -150;
            grap.alpha = 0;
            TweenMax.to(grap, this.props.durationFlash * 0.1, {alpha: 1});
            TweenMax.to(grap, this.props.durationFlash, {
                x: this.width + 150, onComplete: () => {
                    next();
                    grap.destroy();
                }
            });
            filter.alpha = 0;
            TweenMax.to(filter, this.props.durationFlash * 0.5, {alpha: 1});
            TweenMax.to(filter, this.props.durationFlash * 2, {
                alpha: 0, delay: this.props.durationFlash * 0.3, onComplete: () => {
                    this.filters = [];
                }
            });
        });

    }

    runBlurRepeat() {
        this.blur().then(() => {
            this._repeatTimeout = setTimeout(() => this.runBlurRepeat(), 4000);
        });
    }

}
