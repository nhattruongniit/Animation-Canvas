import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';

export default class extends PIXI.Container {
  constructor() {
    super();

    this.visible = false;

    this.image = PIXI.Sprite.fromFrame('image-double');
    this.image.anchor.x = 0.5;
    this.image.anchor.y = this.image.anchor.x;
    this.addChild(this.image);
  }

  start() {
    if (this.visible) {
      return;
    }

    this.visible = true;
    this.onTimer();
  }

  stop() {
    if (!this.visible) {
      return;
    }

    this.visible = false;
    this.stopTimer();
  }

  stopTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  onTimer() {
    this.stopTimer();

    const image = PIXI.Sprite.fromFrame('image-double');
    image.anchor.x = 0.5;
    image.anchor.y = image.anchor.x;
    this.addChild(image);

    const time = 750;

    this.scaleTween = new TWEEN.Tween(image.scale)
      .to({ x: 2, y: 2 }, time)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    this.alphaTween = new TWEEN.Tween(image)
      .to({ alpha: 0 }, time)
      .easing(TWEEN.Easing.Cubic.Out)
      .onComplete(this.onTweenComplete.bind(this, image))
      .start();
  }

  onTweenComplete(image) {
    image.destroy();

    if (this.visible) {
      this.timer = setTimeout(this.onTimer.bind(this), 500);
    }
  }
}
