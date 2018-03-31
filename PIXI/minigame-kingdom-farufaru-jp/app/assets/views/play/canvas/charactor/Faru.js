import * as PIXI from 'pixi.js';
import _ from 'lodash';

export default class extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.fromFrame('faru'));

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.scale.x = _.random(0.8, 1);
    this.scale.y = this.scale.x;
    this.life = 1;
  }

  update() {
    this.life -= 0.04;

    return this.life > 0;
  }
}
