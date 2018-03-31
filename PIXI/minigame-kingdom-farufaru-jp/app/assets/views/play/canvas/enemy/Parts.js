import * as PIXI from 'pixi.js';
import _ from 'lodash';

const cache = [];

export default class Parts extends PIXI.Sprite {
  static getFromCache() {
    if (!cache.length) {
      return new Parts();
    }

    return cache.pop();
  }

  static setCahce(parts) {
    cache.push(parts);
  }

  static destroyCache() {
    cache.length = 0;
  }

  init(texture) {
    this.texture = texture;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.visible = true;
    this.vx = _.random(40, 55);
    this.vy = -_.random(35, 60);
    this.va = -_.random(0.08, 0.14);
    this.vr = 0.1;
    this.friction = 0.92;
    this.gravity = 4;
    this.life = 1.8;
    this.rotation = _.random(0, Math.PI);
  }

  update() {
    this.vx *= this.friction;
    this.vy += this.gravity;

    this.life += this.va;

    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.vr;

    return this.life > 0;
  }
}
