/* eslint no-underscore-dangle: ["error", { "allow": ["_rect"] }] */

import * as PIXI from 'pixi.js';
import _ from 'lodash';
import Faru from './Faru';

export default class extends PIXI.Container {
  get rect() {
    this._rect.x = this.x;
    this._rect.y = this.y;
    return this._rect;
  }

  constructor(upper) {
    super();

    this.upper = upper;
    this.farus = [];
    this._rect = new PIXI.Rectangle(0, 0, 140, 200);
    this.isAction = false;
    this.speed = 1;

    this.horseFrame = 0;
    this.horseFrameSpeed = 0.4;

    this.characterFrame = 0;
    this.characterFrameSpeed = 0.8;

    this.normalFrames = [
      { texture: PIXI.Texture.fromFrame('character-attack0') },
    ];

    this.attackFrames = [
      { texture: PIXI.Texture.fromFrame('character-attack0') },
      { texture: PIXI.Texture.fromFrame('character-attack1') },
      { texture: PIXI.Texture.fromFrame('character-attack2') },
      { texture: PIXI.Texture.fromFrame('character-attack3') },
      { texture: PIXI.Texture.fromFrame('character-attack4') },
      { texture: PIXI.Texture.fromFrame('character-attack5') },
    ];

    this.horseFrames = [
      { texture: PIXI.Texture.fromFrame('horse0') },
      { texture: PIXI.Texture.fromFrame('horse1') },
      { texture: PIXI.Texture.fromFrame('horse2') },
      { texture: PIXI.Texture.fromFrame('horse3') },
    ];

    // 馬のコマによって、いちをずらす
    this.characterPositions = [
      { x: 40, y: -35 },
      { x: 41, y: -33 },
      { x: 42, y: -34 },
      { x: 42, y: -34 },
    ];

    this.horse = new PIXI.Sprite();
    this.horse.anchor.x = 0.5;
    this.horse.anchor.y = 1;
    this.addChild(this.horse);

    this.character = new PIXI.Sprite();
    this.character.anchor.x = 0.5;
    this.character.anchor.y = 1;
    this.character.x = 40;
    this.character.y = -35;
    this.addChild(this.character);

    this.normal();
  }

  setAttackCount(hitEnemies) {
    if (hitEnemies.length > 0) {
      this.attack();
    }
  }

  createFaru() {
    const faru = new Faru();
    const radian = _.random(0, Math.PI) - Math.PI_HALF;
    const radius = _.random(150, 250);
    faru.x = Math.cos(radian) * radius;
    faru.y = (Math.sin(radian) * radius) - 120;
    this.upper.addChild(faru);
    this.farus.push(faru);
  }

  update(boost) {
    this.upper.x = this.x;

    this.updateFrame(boost);
    this.updateFaru(boost);
  }

  updateFrame(boost) {
    // 馬
    this.horseFrame += this.horseFrameSpeed * boost;
    const horseIndex = Math.floor(this.horseFrame) % this.horseFrames.length;
    const horseFrame = this.horseFrames[horseIndex];
    this.horse.texture = horseFrame.texture;

    const characterPosition = this.characterPositions[horseIndex];
    this.character.x = characterPosition.x;
    this.character.y = characterPosition.y;

    // キャラクター
    this.characterFrame += this.characterFrameSpeed * boost;
    const characterIndex = Math.floor(this.characterFrame) % this.characterFrames.length;
    const chracterFrame = this.characterFrames[characterIndex];
    this.character.texture = chracterFrame.texture;

    if (this.isAction && characterIndex === (this.characterFrames.length - 1)) {
      this.onLoop();
    }
  }

  updateFaru() {
    // 「ファル」
    let l = this.farus.length;
    for (let i = 0; i < l; i++) {
      const faru = this.farus[i];
      if (!faru.update()) {
        this.upper.removeChild(faru);
        this.farus.splice(i, 1);
        i--;
        l--;
      }
    }
  }

  normal() {
    this.isAction = false;
    this.characterFrames = this.normalFrames;
  }

  attack() {
    if (!this.isAction) {
      this.createFaru();
    }

    this.isAction = true;
    this.characterFrames = this.attackFrames;
  }

  onLoop() {
    this.normal();
  }
}
