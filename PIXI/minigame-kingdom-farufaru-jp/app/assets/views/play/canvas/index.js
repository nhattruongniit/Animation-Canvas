import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import Config from './config';
import Point from './point';
import Skill from './skill';
import Header from './header/';
import Footer from './footer/';
import Enemy from './enemy/';
import EnemyParts from './enemy/Parts';
import Sound from './sound/';
import EffectEnd from './effect-end/';

export default class extends PIXI.Application {
  constructor(options) {
    super(options);

    Config.app = this;

    this.isDestroy = false;
    this.updateTime = 0;
    this.ticker.speed = 0.5;
  }

  load(callback) {
    this.onLoadedCallback = callback;

    this.isMinLoadTimeComplete = false;
    setTimeout(this.onMinLoadTimerComplete.bind(this), 1000);

    this.isSoundLoadComplate = false;
    Sound.load(this.onSoundLoadComplete.bind(this));

    this.isImageLoadComplete = false;
    const loader = new PIXI.loaders.Loader();

    loader.pre((resource, next) => {
      resource.url = `${resource.url}?v=${Config.cacheVersion}`;
      next();
    });

    loader.add('/static/build/sprites-canvas/play/parts.json');
    loader.add('bg', '/static/images/play/canvas/bg.jpg');
    loader.add(`/static/build/sprites-canvas/play/stages/${Config.StageClass.getId()}.json`);

    Skill.skills.forEach((skill) => {
      loader.add(`/static/build/sprites-canvas/play/skills/${skill}.json`);
    });
    loader.load(this.onImageLoadComplete.bind(this));
  }

  onImageLoadComplete() {
    this.onImageLoadComplete = true;
    this.onLoadComplete();
  }

  onSoundLoadComplete() {
    this.isSoundLoadComplate = true;
    this.onLoadComplete();
  }

  onMinLoadTimerComplete() {
    this.isMinLoadTimeComplete = true;
    this.onLoadComplete();
  }

  onLoadComplete() {
    if (!this.isMinLoadTimeComplete || !this.onImageLoadComplete || !this.isSoundLoadComplate) {
      return;
    }

    // すでに destroy のとき
    if (this.isDestroy) {
      return;
    }

    this.header = new Header();
    this.footer = new Footer();
    this.field = new Config.StageClass(this.header, this.footer);

    this.stage.addChild(this.field);
    this.stage.addChild(this.header);
    this.stage.addChild(this.footer);

    this.resize();

    if (this.onLoadedCallback) {
      this.onLoadedCallback();
    }
  }

  resize() {
    this.footer.y = Config.height - 228;
  }

  play(callback, isSound) {
    this.onPlayCompleteCallback = callback;

    Sound.enable = isSound;
    Sound.bgmStart();
    this.field.play(this.onPlayComplete.bind(this));
  }

  onPlayComplete() {
    this.footer.interactiveChildren = false;

    setTimeout(() => {
      if (Point.boss) {
        const effect = new EffectEnd();
        this.field.addChild(effect);
        effect.start(this.onEffectEndComplete.bind(this, 2000));
      } else {
        this.onEffectEndComplete(1000);
      }
    }, 2000);
  }

  onEffectEndComplete(delay) {
    setTimeout(() => {
      if (this.onPlayCompleteCallback) {
        const callback = this.onPlayCompleteCallback;
        this.onPlayCompleteCallback = null;
        callback();
      }
    }, delay);
  }

  render(time) {
    this.updateTime += time;
    if (this.updateTime < 1) {
      return;
    }

    this.updateTime -= 1;

    TWEEN.update();

    if (this.field) {
      this.field.update();
    }

    super.render();
  }

  destroy() {
    super.destroy(true);

    this.isDestroy = true;

    if (this.footer) {
      this.footer.destroy({ children: true });
    }

    if (this.header) {
      this.header.destroy({ children: true });
    }

    if (this.field) {
      this.field.destroy({ children: true });
    }

    PIXI.utils.destroyTextureCache();
    Enemy.destroyCache();
    EnemyParts.destroyCache();
    Sound.destroy();
  }
}
