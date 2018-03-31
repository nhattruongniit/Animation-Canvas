import * as PIXI from 'pixi.js';
import Skill from '../skill';
import Icon from './SkillIcon';

export default class extends PIXI.Container {
  get data() {
    return Skill.getData(this.id);
  }

  constructor(id) {
    super();

    this.id = id;

    this.interactive = true;
    this.panel = PIXI.Sprite.fromImage(`${id}-panel`);
    this.addChild(this.panel);

    this.icon = new Icon();
    this.icon.x = 10;
    this.icon.y = this.panel.height;
    this.addChild(this.icon);
    this.icon.start();
  }

  active() {
    if (this.cover) {
      this.cover.destroy();
    }

    this.interactive = false;
    this.panel.y = -20;
    this.icon.stop();
  }

  disable() {
    this.panel.alpha = 0.5;
  }
}
