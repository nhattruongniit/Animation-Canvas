/* eslint no-underscore-dangle: ["error", { "allow": ["_ratio"] }] */

import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import _ from 'lodash';
import Config from '../config';
import Point from '../point';
import Skill from '../skill';
import Lane from '../lane/';
import Character from '../charactor/';
import Boss from '../boss/';
import SkillImage from '../skill-image/';
import SkillHit from '../skill-hit/';
import EffectBossFaru from '../effect-boss-faru/';
import EffectStart from '../effect-start/';
import Sound from '../sound/';

export default class extends PIXI.Container {
  get current() {
    return Config.current;
  }

  set current(value) {
    Config.current = value;
    Config.ratio = Config.current / this.distance;
    this.character.x = Config.current + 100;
  }

  set cameraX(value) {
    this.world.x = -value;
    this.bg.tilePosition.x = this.world.x;
  }

  get cameraX() {
    return -this.world.x;
  }

  get ratio() {
    return this._ratio;
  }

  constructor(header, footer, options) {
    super();

    this.header = header;
    this.footer = footer;
    this.options = options;

    this.setupView();
    this.setupBind();

    this.skills = [];
    this.distance = this.options.distance;
    this.speed = this.options.speed;
    this.boost = 0;
    this.characterLaneIndex = 1;
    this.bossLaneIndex = _.random(0, 2);

    this.setCharacterLane(this.characterLaneIndex);
    this.setBossLane(this.bossLaneIndex);
    this.resize();
  }

  setupView() {
    this.bg = new PIXI.extras.TilingSprite(
      PIXI.Texture.fromImage('bg'),
      Config.width,
      Config.height,
    );
    this.addChild(this.bg);

    this.world = new PIXI.Container();
    this.addChild(this.world);

    this.lane0 = new Lane(Config.lane0, this.options.lane0);
    this.world.addChild(this.lane0);

    this.lane1 = new Lane(Config.lane1, this.options.lane1);
    this.world.addChild(this.lane1);

    this.lane2 = new Lane(Config.lane2, this.options.lane2);
    this.world.addChild(this.lane2);

    this.boss = new Boss(this.options);

    this.characterUpperLayer = new PIXI.Container();
    this.character = new Character(this.characterUpperLayer);
    this.world.addChild(this.characterUpperLayer);

    this.lane0HitArea = new PIXI.Graphics();
    this.lane0HitArea.beginFill(0xff0000, 0);
    this.lane0HitArea.drawRect(0, 0, Config.width, Config.lane0.height);
    this.lane0HitArea.endFill();
    this.lane0HitArea.x = 0;
    this.lane0HitArea.y = this.lane0.y;
    this.lane0HitArea.interactive = true;
    this.addChild(this.lane0HitArea);

    this.lane1HitArea = new PIXI.Graphics();
    this.lane1HitArea.beginFill(0x00ff00, 0);
    this.lane1HitArea.drawRect(0, 0, Config.width, Config.lane1.height);
    this.lane1HitArea.endFill();
    this.lane1HitArea.x = 0;
    this.lane1HitArea.y = this.lane1.y;
    this.lane1HitArea.interactive = true;
    this.addChild(this.lane1HitArea);

    this.lane2HitArea = new PIXI.Graphics();
    this.lane2HitArea.beginFill(0x0000ff, 0);
    this.lane2HitArea.drawRect(0, 0, Config.width, Config.lane2.height);
    this.lane2HitArea.endFill();
    this.lane2HitArea.x = 0;
    this.lane2HitArea.y = this.lane2.y;
    this.lane2HitArea.interactive = true;
    this.addChild(this.lane2HitArea);

    this.skillImage = new SkillImage();
    this.addChild(this.skillImage);
  }

  setupBind() {
    this.lane0HitArea.on('touchstart', () => {
      this.setCharacterLane(0);
    });

    this.lane1HitArea.on('touchstart', () => {
      this.setCharacterLane(1);
    });

    this.lane2HitArea.on('touchstart', () => {
      this.setCharacterLane(2);
    });

    this.footer.skills.forEach((skill) => {
      skill.on('touchend', this.onSkill.bind(this, skill));
    });
  }

  setCharacterLane(index) {
    this.characterLaneIndex = index;
    const lane = Config[`lane${this.characterLaneIndex}`];
    this.character.y = lane.centerY + 60;
    this.characterUpperLayer.y = lane.y + this.character.y;
    this.character.scale.x = lane.scale;
    this.character.scale.y = this.character.scale.x;
    this[`lane${this.characterLaneIndex}`].addChild(this.character);
  }

  setBossLane(index) {
    this.bossLaneIndex = index;
    const lane = Config[`lane${this.bossLaneIndex}`];
    this.boss.y = lane.centerY + 60;
    this.boss.scale.x = lane.scale;
    this.boss.scale.y = this.boss.scale.x;
    this[`lane${this.bossLaneIndex}`].addChild(this.boss);
  }

  onSkill(skill) {
    this.stop();

    this.footer.interactiveChildren = false;

    skill.active();
    this.skillImage.show(skill.id, () => {
      this.skillImage.hide(() => {
        skill.disable();

        const types = Skill.getTypes();
        switch (skill.data.type) {
          case types.oneLane: {
            let laneIndex = this.characterLaneIndex + 1;
            if (laneIndex > 2) {
              laneIndex = 0;
            }
            this.skills.push(new SkillHit(laneIndex));
            break;
          }
          case types.twoLane: {
            if (this.characterLaneIndex === 0) {
              this.skills.push(new SkillHit(1));
              this.skills.push(new SkillHit(2));
            } else if (this.characterLaneIndex === 1) {
              this.skills.push(new SkillHit(0));
              this.skills.push(new SkillHit(2));
            } else if (this.characterLaneIndex === 2) {
              this.skills.push(new SkillHit(0));
              this.skills.push(new SkillHit(1));
            }
            break;
          }
          case types.threeLane: {
            this.skills.push(new SkillHit(0));
            this.skills.push(new SkillHit(1));
            this.skills.push(new SkillHit(2));
            break;
          }
          case types.boostRateDouble: {
            Point.boost();
            break;
          }
          default:
            break;
        }

        this.footer.interactiveChildren = true;
        this.start();
      });
    });
  }

  resize() {
    this.bg.y = 55;
  }

  play(callback) {
    this.onPlayComplete = callback;

    Sound.play('start');
    const effect = new EffectStart();
    this.addChild(effect);
    effect.start();

    this.start(1000, 500);
  }

  start(time, delay) {
    if (this.boostTween) {
      this.boostTween.stop();
    }

    if (!time) {
      time = 400;
    }

    if (!delay) {
      delay = 0;
    }

    this.boostTween = new TWEEN.Tween(this)
      .to({ boost: 1 }, time)
      .easing(TWEEN.Easing.Quadratic.Out)
      .delay(delay)
      .start();
  }

  stop() {
    if (this.boostTween) {
      this.boostTween.stop();
    }

    this.boostTween = new TWEEN.Tween(this)
      .to({ boost: 0 }, 400)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
  }

  update() {
    const speed = this.speed * this.boost;
    this.current += speed;

    if (Config.ratio <= 1) {
      this.cameraX = Config.current;
    } else if (this.onPlayComplete) {
      const callback = this.onPlayComplete;
      this.onPlayComplete = null;
      callback();
    }

    this.lane0.update(this.cameraX);
    this.lane1.update(this.cameraX);
    this.lane2.update(this.cameraX);
    this.boss.update();

    // 雑魚に通常攻撃
    let hits = this[`lane${this.characterLaneIndex}`].attack(this.character.rect);

    // ボスに通常攻撃
    if (this.characterLaneIndex === this.bossLaneIndex) {
      if (!this.boss.isHit && this.boss.attack(this.character.rect)) {
        hits.push('boss');

        const effect = new EffectBossFaru();
        this.addChild(effect);
        effect.start();
      }
    }

    let skill;
    while (skill = this.skills.pop()) {
      const skillHits = this[`lane${skill.laneIndex}`].attack(skill.rect);
      hits = _.concat(hits, skillHits);
    }

    Point.add(hits);

    this.character.setAttackCount(hits);
    this.character.update(this.boost);

    this.skillImage.update();
    this.header.update();
  }
}
