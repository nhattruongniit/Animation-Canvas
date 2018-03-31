import * as PIXI from 'pixi.js';

export default class extends PIXI.extras.AnimatedSprite {
  constructor() {
    const textures = [];
    for (let i = 0; i < 4; i++) {
      textures.push(PIXI.Texture.fromFrame(`effect1-${i}`));
    }
    super(textures);

    this.visible = false;
    this.animationSpeed = 0.25;
    this.anchor.x = 0.5;
    this.anchor.y = 1;
    this.loop = false;
    this.onComplete = this.onAnimComplete;
  }

  start() {
    this.visible = true;
    super.gotoAndPlay(0);
  }

  onAnimComplete() {
    this.visible = false;
  }
}
