import * as PIXI from 'pixi.js';
import _ from 'lodash';
import Config from '../config';
import EnemyBase from '../enemy-base/';
import Effect1 from '../effect1/';
import Parts from './Parts';
import Sound from '../sound/';

const cache = [];

export default class Enemy extends EnemyBase {
  static getFromCache() {
    if (!cache.length) {
      return new Enemy();
    }

    return cache.pop();
  }

  static setCahce(enemy) {
    cache.push(enemy);
  }

  static destroyCache() {
    cache.length = 0;
  }

  constructor() {
    super();

    this.effect = new Effect1();
    this.addChild(this.effect);
  }

  init(type) {
    this.type = type;
    this.texture = PIXI.Texture.fromImage(`enemy-${this.type}`);
    this.visible = true;
    this.character.visible = true;
    this.isHit = false;
    this.isHitComplete = false;
  }

  onHit() {
    if (Config.isQualitySuperHigh) {
      this.parts = [];
      const textures = _.shuffle(['enemy-parts-arrow', 'enemy-parts-bow', 'enemy-parts-helmet', 'enemy-parts-spear']);
      const l = _.random(1, 2);
      for (let i = 0; i < l; i++) {
        const part = Parts.getFromCache();
        part.init(PIXI.Texture.fromImage(textures.pop()));
        part.x = _.random(0, 20);
        part.y = _.random(-10, -30);
        this.addChild(part);
        this.parts.push(part);
      }
    }

    Sound.attack();
    this.effect.start();
    this.character.visible = false;
  }

  update() {
    if (!this.isHit) {
      return;
    }

    if (Config.isQualitySuperHigh) {
      let l = this.parts.length;
      for (let i = 0; i < l; i++) {
        const part = this.parts[i];
        if (!part.update()) {
          part.visible = false;
          Parts.setCahce(part);
          this.removeChild(part);
          this.parts.splice(i, 1);
          i--;
          l--;
        }
      }

      this.isHitComplete = l === 0;
    } else {
      this.isHitComplete = !this.effect.visible;
    }
  }
}
