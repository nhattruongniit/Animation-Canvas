import * as PIXI from 'pixi.js';
import _ from 'lodash';
import Config from '../config';
import EnemyBase from '../enemy-base/';
import Effect1 from '../effect1/';
import Parts from '../enemy/Parts';
import Sound from '../sound/';

export default class extends EnemyBase {
  constructor(options) {
    super();

    this.x = options.distance + (Config.rect.width / 2);
    this.texture = PIXI.Texture.fromImage('boss');

    this.effect = new Effect1();
    this.addChild(this.effect);
  }

  attack(rect) {
    if (this.isHit) {
      return false;
    }

    if (rect.right >= this.left && rect.left <= this.right) {
      this.hit();
      return true;
    }

    return false;
  }

  onHit() {
    if (Config.isQualitySuperHigh) {
      this.parts = [];
      const textures = _.shuffle(['enemy-parts-arrow', 'enemy-parts-bow', 'enemy-parts-helmet', 'enemy-parts-spear']);
      const textureRandomMax = textures.length - 1;
      for (let i = 0; i < 10; i++) {
        const part = Parts.getFromCache();
        part.init(PIXI.Texture.fromImage(textures[_.random(0, textureRandomMax)]));
        part.x = _.random(0, 20);
        part.y = _.random(-20, -50);
        this.addChild(part);
        this.parts.push(part);
      }
    }

    Sound.bossAttack();
    Sound.attack();
    this.effect.play();
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
