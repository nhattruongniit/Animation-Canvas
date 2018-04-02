import {Container, Sprite, loaders} from 'pixi.js';
import {TweenMax} from 'gsap';

import MiddleText2 from './MiddleText2';

export class MiddleCanvas extends Container {
    constructor(props) {
        super(props);
        this.props = props;
        this.loader = new loaders.Loader()
            .add('mc1', props.mc1)
            .load(this.setup.bind(this))
    }

    setup() {
        this.textures = this.loader.resources.mc1.textures;
        this._setAll();
        this._setText1();
        this._setMap();
        this._setItem();
        this._setArrow();
        this._setText2();
    }

    _setAll() {
        this.middleAll = new Sprite(this.textures['middle-all']);
        this.middleAll.anchor.set(0.5);
        this.middleAll.position.set(160, 0);
        TweenMax.set(this.middleAll, {
            alpha: 0,
        });
        TweenMax.to(this.middleAll, 0.5, {
            alpha: 100,
            y: 100,
            ease: Power3.easeOut
        });
        this.addChild(this.middleAll);
    }

    _setText1() {
        this.middleText1 = new Sprite(this.textures['middle-text1']);
        this.middleText1.anchor.set(0.5);
        this.middleText1.position.set(500, 0);
        TweenMax.set(this.middleText1, {
            alpha: 0,
        });
        TweenMax.to(this.middleText1, 0.3, {
            alpha: 100,
            y: 80,
            ease: Power3.easeOut
        }).delay(0.3);
        this.addChild(this.middleText1);
    }

    _setArrow() {
        this.middleArrow = new Sprite(this.textures['middle-arrow']);
        this.middleArrow.anchor.set(0.5);
        this.middleArrow.position.set(0, 230);
        TweenMax.set(this.middleArrow, {
            alpha: 0,
        });
        TweenMax.to(this.middleArrow, 0.5, {
            alpha: 100,
            x: 140,
            ease: Power3.easeOut
        }).delay(0.5);
        this.addChild(this.middleArrow);
    }

    _setMap() {
        this.middleMap = new Sprite(this.textures['middle-map']);
        this.middleMap.anchor.set(0.5);
        this.middleMap.position.set(450, 40);
        TweenMax.set(this.middleMap, {
            alpha: 0,
        });
        TweenMax.to(this.middleMap, 0.5, {
            alpha: 100,
            y: 320,
            ease: Power3.easeOut
        }).delay(0.5);
        this.addChild(this.middleMap);
    }

    _setItem() {
        this.middleItem1 = new Sprite(this.textures['middle-map-item1']);
        this.middleItem2 = new Sprite(this.textures['middle-map-item2']);
        this.middleItem3 = new Sprite(this.textures['middle-map-item3']);
        this.middleItem4 = new Sprite(this.textures['middle-map-item4']);
        this.middleItem5 = new Sprite(this.textures['middle-map-item5']);
        this.middleItem6 = new Sprite(this.textures['middle-map-item6']);
        this.middleItem7 = new Sprite(this.textures['middle-map-item7']);
        this.middleItem1.position.set(185, 180);
        this.middleItem2.position.set(350, 170);
        this.middleItem3.position.set(470, 190);
        this.middleItem4.position.set(600, 170);
        this.middleItem5.position.set(210, 300);
        this.middleItem6.position.set(340, 300);
        this.middleItem7.position.set(460, 280);
        TweenMax.set([this.middleItem1, this.middleItem2, this.middleItem3, this.middleItem4, this.middleItem5, this.middleItem6, this.middleItem7], {
            width: 0,
            height: 0
        });
        TweenMax.to(this.middleItem1, 0.3, {
            width: 176,
            height: 138,
            ease: Power3.easeOut
        }).delay(0.7);
        TweenMax.to(this.middleItem2, 0.3, {
            width: 131,
            height: 131,
            ease: Power3.easeOut
        }).delay(0.75);
        TweenMax.to(this.middleItem3, 0.3, {
            width: 146,
            height: 119,
            ease: Power3.easeOut
        }).delay(0.8);
        TweenMax.to(this.middleItem4, 0.3, {
            width: 130,
            height: 131,
            ease: Power3.easeOut
        }).delay(0.85);
        TweenMax.to(this.middleItem5, 0.3, {
            width: 131,
            height: 131,
            ease: Power3.easeOut
        }).delay(0.9);
        TweenMax.to(this.middleItem6, 0.3, {
            width: 123,
            height: 125,
            ease: Power3.easeOut
        }).delay(0.95);
        TweenMax.to(this.middleItem7, 0.3, {
            width: 215,
            height: 173,
            ease: Power3.easeOut
        }).delay(1);
        this.addChild(this.middleItem1);
        this.addChild(this.middleItem2);
        this.addChild(this.middleItem3);
        this.addChild(this.middleItem4);
        this.addChild(this.middleItem5);
        this.addChild(this.middleItem6);
        this.addChild(this.middleItem7);
    }

    _setText2() {
        let middleText2 = new MiddleText2(this.textures['middle-text2'], {x: 375, y: 400});
        setTimeout(() => {
            middleText2.run(450);
        }, 1000);
        this.addChild(middleText2);
    }
}
