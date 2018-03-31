import * as PIXI from 'pixi.js';

export default class extends PIXI.Container {
  get left() {
    return this.x - this.widthHalf;
  }

  get right() {
    return this.x + this.widthHalf;
  }

  set texture(texture) {
    this.character.texture = texture;
    this.widthHalf = this.character.width / 2;
  }

  constructor() {
    super();

    this.character = new PIXI.Sprite();
    this.character.anchor.x = 0.5;
    this.character.anchor.y = 1;
    this.addChild(this.character);

    this.isHit = false;
  }

  hit() {
    if (this.isHit) {
      return;
    }

    this.isHit = true;

    this.onHit();
  }

  onHit() {
  }

  update() {
  }
}
