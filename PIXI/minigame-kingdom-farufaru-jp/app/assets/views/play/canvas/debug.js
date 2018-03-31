import * as PIXI from 'pixi.js';
import Config from './config';

export default class extends PIXI.Container {
  constructor() {
    super();

    // this.draw(0, Config.lanes[0].y, Config.width, Config.lanes[0].height, 0.4, 0xFF0000);
    // this.draw(0, Config.lanes[1].y, Config.width, Config.lanes[1].height, 0.4, 0x00FF00);
    // this.draw(0, Config.lanes[2].y, Config.width, Config.lanes[2].height, 0.4, 0x0000FF);
    // this.draw(0, Config.lanes[2].bottomY, Config.width, 1);
    //this.draw(150, 150, Config.width - 300, Config.height - 300, 0.2);
  }

  draw(x, y, width, height, alpha, color) {
    const graphic = new PIXI.Graphics();
    graphic.beginFill(color || 0, alpha || 1);
    graphic.drawRect(0, 0, width, height);
    graphic.x = x;
    graphic.y = y;
    this.addChild(graphic);
    return graphic;
  }
}
