import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import Config from '../config';
import EffectShake from '../effect-shake/';

export default class extends PIXI.Container {
  constructor() {
    super();

    this.visible = false;

    this.radiation = PIXI.Sprite.fromFrame('image-radiation');
    this.radiation.anchor.x = 0.5;
    this.radiation.anchor.y = this.radiation.anchor.x;
    this.addChild(this.radiation);

    this.image = PIXI.Sprite.fromFrame('image-end');
    this.image.anchor.x = 0.5;
    this.image.anchor.y = this.image.anchor.x;
    this.addChild(this.image);
  }

  start(callback) {
    this.onComplete = callback;
    this.visible = true;
    this.x = Config.widthHalf;
    this.y = Config.heightHalf;
    this.image.scale.x = 1.2;
    this.image.scale.y = this.image.scale.x;

    Config.ticker.add(this.update, this);

    const shake = new EffectShake(this.parent);
    shake.onComplete = this.onTweenComplete.bind(this);
    shake.start(500, 50);

    new TWEEN.Tween(this.image.scale)
      .to({ x: 1, y: 1 }, 200)
      .easing(TWEEN.Easing.Back.Out)
      .start();
  }

  onTweenComplete() {
    if (this.onComplete) {
      const callback = this.onComplete;
      this.onComplete = null;
      callback();
    }
  }

  update() {
    this.radiation.rotation += 0.005;
  }
}
