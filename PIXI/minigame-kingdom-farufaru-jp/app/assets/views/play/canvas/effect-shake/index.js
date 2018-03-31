import Config from '../config';


const values = {
  // eslint-disable-next-line max-len
  x: [0, 1.5, -2.5, 1.5, 1.5, 0.5, -2.5, 0.5, -1.5, 0.5, -1.5, -2.5, 0.5, -0.5, -1.5, 0.5, 1.5, -1.5, -2.5, -1.5, -0.5, -2.5, -2.5, -2.5, 0.5, 0.5, 1.5, -1.5, 0.5, -0.5, 0.5, -2.5, -0.5],
  // eslint-disable-next-line max-len
  y: [0, -2.5, 0.5, 1.5, 0.5, -1.5, -0.5, 1.5, 1.5, 1.5, 0.5, 1.5, 0.5, -2.5, 1.5, 0.5, -0.5, -1.5, -2.5, 0.5, 1.5, -0.5, -1.5, -2.5, -1.5, 1.5, -0.5, -1.5, 1.5, -0.5, 1.5, 0.5, -2.5],
};

const valuesLength = values.x.length;

export default class {
  constructor(sprite, power) {
    this.sprite = sprite;
    this.power = power || 1;
    this.defaultX = this.sprite.x;
    this.defaultY = this.sprite.y;
  }

  start(time, delay) {
    this.time = time;
    if (delay) {
      this.delayTimer = setTimeout(this.onDelay.bind(this), delay);
    } else {
      this.onDelay();
    }
  }

  onDelay() {
    this.frame = 0;
    Config.ticker.add(this.update, this);
    this.timer = setTimeout(this.complete.bind(this), this.time);
  }

  complete() {
    Config.ticker.remove(this.update, this);
    this.sprite.x = this.defaultX;
    this.sprite.y = this.defaultY;

    if (this.onComplete) {
      const callback = this.onComplete;
      this.onComplete = null;
      callback();
    }
  }

  update() {
    this.frame += 1;
    if (this.frame >= valuesLength) {
      this.frame = 0;
    }

    this.sprite.x = values.x[this.frame] * this.power;
    this.sprite.y = values.y[this.frame] * this.power;
  }
}
