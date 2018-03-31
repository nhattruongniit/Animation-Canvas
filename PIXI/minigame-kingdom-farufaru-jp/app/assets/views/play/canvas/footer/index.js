import * as PIXI from 'pixi.js';
import Skill from '../skill';
import SkillIcon from './Skill';

export default class extends PIXI.Container {
  constructor() {
    super();

    const bg = PIXI.Sprite.fromFrame('footer-bg');
    this.addChild(bg);

    this.skills = [];
    Skill.skills.forEach((id, i) => {
      const skill = new SkillIcon(id);
      skill.x = (175 * i) + 26;
      skill.y = 16;
      this.addChild(skill);
      this.skills.push(skill);
    });

    const icon = PIXI.Sprite.fromFrame('footer-engun');
    icon.anchor.x = 0.5;
    icon.anchor.y = 1.0;
    icon.x = bg.width / 2;
    icon.y = bg.height;
    this.addChild(icon);
  }
}
