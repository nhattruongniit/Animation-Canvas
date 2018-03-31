import Config from './config';

class Point {
  get total() {
    let total = 0;

    total += this.infantry * 1;
    total += this.sword * 50;
    total += this.spear * 100;
    total += this.bow * 500;
    total += this.boss * Config.StageClass.getBossPoint();

    return total;
  }

  reset() {
    this.rate = global.config.pointRate;
    this.boostRate = 1;
    this.infantry = 0;
    this.sword = 0;
    this.spear = 0;
    this.bow = 0;
    this.boss = 0;
    this.num = 0;

    this.stopBoostRateTimer();
  }

  toObject() {
    return {
      total: this.total,
      infantry: this.infantry,
      sword: this.sword,
      spear: this.spear,
      bow: this.bow,
      boss: this.boss,
      num: this.num,
    };
  }

  stopBoostRateTimer() {
    if (this.boostRateTimer) {
      clearTimeout(this.boostRateTimer);
    }
  }

  boost() {
    this.stopBoostRateTimer();
    this.boostRate = 2;
    this.boostRateTimer = setTimeout(this.onBoostRateTimerComplete.bind(this), 3000);
  }

  onBoostRateTimerComplete() {
    this.stopBoostRateTimer();
    this.boostRate = 1;
  }

  add(hits) {
    hits.forEach((type) => {
      this[type] += 1 * this.rate * this.boostRate;
    });

    this.num = this.infantry + this.sword + this.spear + this.bow + this.boss;
  }
}

export default new Point();
