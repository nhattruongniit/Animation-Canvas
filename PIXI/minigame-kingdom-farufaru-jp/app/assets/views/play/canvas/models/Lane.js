
export default class {
  get centerY() {
    return this.height / 2;
  }

  get bottomY() {
    return this.y + this.height;
  }

  constructor(options) {
    this.y = options.y;
    this.height = options.height;
    this.scale = options.scale;
  }
}
