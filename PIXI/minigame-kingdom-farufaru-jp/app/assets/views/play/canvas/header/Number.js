/* eslint no-underscore-dangle: ["error", { "allow": ["_value"] }] */

import * as PIXI from 'pixi.js';
import _ from 'lodash';

export default class extends PIXI.Container {
  set value(value) {
    this._value = value;

    const str = (this.pad + this._value).slice(-(this.numbers.length - 1));
    _.each(str, (s, i) => {
      this.numbers[i].texture = PIXI.Texture.fromFrame(`num${s}`);
    });
  }

  get value() {
    return this._value;
  }

  constructor() {
    super();

    this.numbers = [];
    this.pad = '';
    for (let i = 0; i < 10; i++) {
      const number = new PIXI.Sprite();
      number.anchor.x = 0.5;
      number.anchor.y = 0;
      number.x = 25 * i;
      this.addChild(number);
      this.numbers.push(number);
      this.pad += '0';
    }

    this.value = 0;
  }
}
