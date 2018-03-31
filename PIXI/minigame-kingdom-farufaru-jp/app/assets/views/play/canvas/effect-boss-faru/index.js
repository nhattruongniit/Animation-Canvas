import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import Config from '../config';

export default class extends PIXI.Container {
  constructor() {
    super();

    this.visible = false;
    this.image = PIXI.Sprite.fromFrame('faru');
    this.image.scale.x = 3;
    this.image.scale.y = this.image.scale.x;
    this.image.anchor.x = 0.5;
    this.image.anchor.y = this.image.anchor.x;
    this.addChild(this.image);
  }

  start() {
    this.visible = true;
    this.x = -400;
    this.y = Config.heightHalf - 100;

    new TWEEN.Tween(this.image)
      .to({ x: Config.width + 600 }, 1200)
      .easing(TWEEN.Easing.Linear.None)
      .onComplete(this.onComplete.bind(this))
      .start();
  }

  onComplete() {
    this.destroy();
  }
}
