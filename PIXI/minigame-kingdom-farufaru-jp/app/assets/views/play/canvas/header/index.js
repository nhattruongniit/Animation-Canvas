import * as PIXI from 'pixi.js';
import Config from '../config';
import Point from '../point';
import Count from './Number';
import Boost from './Boost';

export default class extends PIXI.Container {
  set ratio(value) {
    if (value > 1) {
      value = 1;
    }

    this.barColor.scale.x = value;
    this.current.x = this.barColor.x + this.barColor.width;
  }

  constructor() {
    super();

    this.bg = PIXI.Sprite.fromFrame('header');
    this.addChild(this.bg);

    this.bar = PIXI.Sprite.fromFrame('bar-base');
    this.bar.anchor.x = 0.5;
    this.bar.anchor.y = 0.5;
    this.addChild(this.bar);

    this.barColor = PIXI.Sprite.fromFrame('bar-color');
    this.barColor.anchor.x = 0;
    this.barColor.anchor.y = 0.5;
    this.addChild(this.barColor);

    this.start = PIXI.Sprite.fromFrame('icon-start');
    this.start.anchor.x = 0.5;
    this.start.anchor.y = 0.5;
    this.addChild(this.start);

    this.goal = PIXI.Sprite.fromFrame('icon-goal');
    this.goal.anchor.x = 0.5;
    this.goal.anchor.y = 0.5;
    this.addChild(this.goal);

    this.current = PIXI.Sprite.fromFrame('icon-current');
    this.current.anchor.x = 0.5;
    this.current.anchor.y = this.current.anchor.x;
    this.addChild(this.current);

    this.number = new Count();
    this.addChild(this.number);

    this.boost = new Boost();
    this.addChild(this.boost);

    this.resize();

    this.ratio = 0;
  }

  update() {
    this.ratio = Config.ratio;
    this.number.value = Point.num;

    if (Point.boostRate === 2) {
      this.boost.start();
    } else {
      this.boost.stop();
    }
  }

  resize() {
    this.bar.x = Config.widthHalf;
    this.bar.y = 125;
    this.barColor.x = this.bar.x - (this.bar.width / 2);
    this.barColor.y = this.bar.y;

    const margin = 25;
    this.start.x = this.bar.x - margin - (this.bar.width / 2);
    this.start.y = this.bar.y;

    this.goal.x = this.bar.x + margin + (this.bar.width / 2);
    this.goal.y = this.bar.y;

    this.current.y = this.bar.y;

    this.number.x = Config.widthHalf - 43;
    this.number.y = 20;

    this.boost.x = Config.width - 50;
    this.boost.y = 40;
  }
}
