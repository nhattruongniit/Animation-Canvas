/* eslint quote-props: "off" */

import * as PIXI from 'pixi.js';
import { Quality } from '../../../mixin/quality/';
import Point from './point';
import Skill from './skill';
import Lane from './models/Lane';
import Stage1 from './stage-2X3aJhew/';
import Stage2 from './stage-aJ2CDBqV/';
import Stage3 from './stage-eT7p6uF9/';
import Stage4 from './stage-W7wUbGj9/';
import Stage5 from './stage-X9yWwtYK/';

Math.PI_HALF = Math.PI / 2;
Math.PI_DOUBLE = Math.PI * 2;
Math.PI_QUARTER = Math.PI / 4;

const config = {
  get width() {
    return this.rect.width;
  },

  get height() {
    return this.rect.height;
  },

  get heightHalf() {
    return this.height / 2;
  },

  get widthHalf() {
    return this.width / 2;
  },

  get isQualitySuperHigh() {
    return this.quality === Quality.superHigh;
  },

  get ticker() {
    return this.app.ticker;
  },

  init(StageClass, quality, reinforcement) {
    this.StageClass = StageClass;
    this.quality = quality;
    Point.reset();
    Skill.reset(reinforcement);

    this.current = 0;
  },

  app: null,
  StageClass: null,
  current: 0,

  point: null,
  rect: new PIXI.Rectangle(0, 0, 750, 1180),

  cacheVersion: 7191654,

  lane0: new Lane({ y: 288, height: 160, scale: 0.8 }),
  lane1: new Lane({ y: 448, height: 220, scale: 0.9 }),
  lane2: new Lane({ y: 668, height: 280, scale: 1.0 }),
};

config.stages = {
  '2X3aJhew': Stage1,
  'aJ2CDBqV': Stage2,
  'eT7p6uF9': Stage3,
  'W7wUbGj9': Stage4,
  'X9yWwtYK': Stage5,
};

export default config;
