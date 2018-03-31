/* eslint no-underscore-dangle: ["error", { "allow": ["_rect"] }] */

import * as PIXI from 'pixi.js';
import Config from '../config';

export default class {
  get rect() {
    return this._rect;
  }

  constructor(laneIndex) {
    this.laneIndex = laneIndex;
    this._rect = new PIXI.Rectangle(Config.current, 0, Config.width, 0);
  }
}
