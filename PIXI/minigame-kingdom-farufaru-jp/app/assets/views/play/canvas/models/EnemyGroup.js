import _ from 'lodash';

export default class {
  get left() {
    return this.range.left;
  }

  get right() {
    return this.range.right;
  }

  constructor(options) {
    this.lane = options.lane || 0;
    this.range = options.range || { left: 0, right: 0 };

    const ratio = 1;

    this.types = [];
    for (let i = 0; i < options.infantry * ratio; i++) {
      this.types.push('infantry');
    }

    for (let i = 0; i < options.sword * ratio; i++) {
      this.types.push('sword');
    }

    for (let i = 0; i < options.spear * ratio; i++) {
      this.types.push('spear');
    }

    for (let i = 0; i < options.bow * ratio; i++) {
      this.types.push('bow');
    }

    this.types = _.shuffle(this.types);
    this.amount = this.types.length;
  }

  pop() {
    if (!this.types.length) {
      return null;
    }

    return this.types.pop();
  }
}
