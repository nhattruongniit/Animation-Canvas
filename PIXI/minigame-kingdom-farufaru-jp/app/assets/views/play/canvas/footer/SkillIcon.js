import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';

export default class extends PIXI.Container {
  constructor() {
    super();
    this.visible = false;
    this.image = PIXI.Sprite.fromFrame('icon-skill');
    this.image.anchor.x = 0.5;
    this.image.anchor.y = 1;
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

    let delay = 0;
    for (let i = 0; i < 3; i++) {
      const image = PIXI.Sprite.fromFrame('icon-skill');
      image.anchor.x = this.image.anchor.x;
      image.anchor.y = this.image.anchor.y;
      image.id = i;
      this.addChildAt(image, 1);

      const time = 500;
      new TWEEN.Tween(image.scale)
        .to({ x: 1.5, y: 1.5 }, time)
        .easing(TWEEN.Easing.Cubic.Out)
        .delay(delay)
        .start();

      new TWEEN.Tween(image)
        .to({ alpha: 0 }, time)
        .easing(TWEEN.Easing.Cubic.Out)
        .onComplete(this.onTweenComplete.bind(this, image, i))
        .delay(delay)
        .start();

      delay += 200;
    }
  }

  onTweenComplete(image, i) {
    image.destroy();

    if (this.visible && i === 2) {
      this.timer = setTimeout(this.onTimer.bind(this), 500);
    }
  }

  destroy(options) {
    super.destroy(options);
    this.stop();
  }
}
