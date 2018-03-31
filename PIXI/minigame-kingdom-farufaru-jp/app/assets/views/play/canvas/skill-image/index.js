import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import Config from '../config';

export default class extends PIXI.Container {
  constructor() {
    super();

    this.visible = false;

    const texture = PIXI.Texture.fromImage('skill-bg');
    this.bg = new PIXI.extras.TilingSprite(
      texture,
      texture.width,
      texture.height,
    );
    this.addChild(this.bg);

    this.imageContainer = new PIXI.Container();
    this.addChild(this.imageContainer);

    this.image = new PIXI.Sprite();
    this.image.anchor.x = 0.5;
    this.image.anchor.y = 1.0;
    this.imageContainer.addChild(this.image);

    this.upperThunder = PIXI.Sprite.fromImage('skill-bg-thunder');
    this.upperThunder.anchor.y = 0.5;
    this.addChild(this.upperThunder);

    this.lowerThunder = PIXI.Sprite.fromImage('skill-bg-thunder');
    this.lowerThunder.anchor.y = 0.5;
    this.addChild(this.lowerThunder);

    this.resize();
  }

  stop() {
    if (this.tween) {
      this.tween.stop();
    }

    if (this.imageTween) {
      this.imageTween.stop();
    }

    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  show(id, callback) {
    this.stop();

    this.id = id;
    this.visible = true;
    this.image.texture = PIXI.Texture.fromImage(`${this.id}-image`);

    this.alpha = 0;
    this.tween = new TWEEN.Tween(this)
      .to({ alpha: 1 }, 200)
      .easing(TWEEN.Easing.Quartic.Out)
      .start();

    this.imageContainer.x = 0;
    this.image.alpha = 0;
    this.image.x = Config.widthHalf - 120;
    this.imageTween = new TWEEN.Tween(this.image)
      .to({ x: Config.widthHalf - 20, alpha: 1 }, 400)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    this.timer = setTimeout(callback, 1200);
  }

  hide(callback) {
    this.stop();

    this.imageTween = new TWEEN.Tween(this.image)
      .to({ x: Config.widthHalf + 100, alpha: 0 }, 400)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    this.tween = new TWEEN.Tween(this)
      .to({ alpha: 0 }, 200)
      .easing(TWEEN.Easing.Cubic.Out)
      .onComplete(this.onHideComplete.bind(this, callback))
      .start();
  }

  onHideComplete(callback) {
    this.visible = false;

    if (callback) {
      callback();
    }
  }

  update() {
    if (!this.visible) {
      return;
    }

    this.bg.tilePosition.x += 5;
    this.imageContainer.x += 0.5;
  }

  resize() {
    this.bg.y = (Config.height - this.bg.height) / 2;

    this.upperThunder.y = this.bg.y;
    this.lowerThunder.y = this.bg.y + this.bg.height;

    this.image.y = this.lowerThunder.y;
  }
}
