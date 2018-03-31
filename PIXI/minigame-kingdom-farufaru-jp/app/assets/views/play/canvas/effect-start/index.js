import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import Config from '../config';

export default class extends PIXI.Container {
  constructor() {
    super();

    this.visible = false;

    this.image = PIXI.Sprite.fromFrame('image-start');
    this.image.anchor.x = 0.5;
    this.image.anchor.y = this.image.anchor.x;
    this.addChild(this.image);
  }

  start() {
    this.visible = true;
    this.x = Config.widthHalf;
    this.y = Config.heightHalf;

    setTimeout(this.hide.bind(this), 1000);
  }

  hide() {
    new TWEEN.Tween(this.image.scale)
      .to({ x: 1.2, y: 1.2 }, 500)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    new TWEEN.Tween(this.image)
      .to({ alpha: 0 }, 500)
      .easing(TWEEN.Easing.Cubic.Out)
      .onComplete(this.onHideComplete.bind(this))
      .start();
  }

  onHideComplete() {
    this.destroy();
  }
}
