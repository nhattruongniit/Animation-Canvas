import { Howl } from 'howler';
import Config from '../config';
import SoundJson from '../../../../../public/static/build/sounds/sprite.json';

class Sound {
  load(callback) {
    this.enable = false;
    this.soundNum = 0;

    const data = SoundJson;
    const src = [];
    data.urls.forEach((url) => {
      src.push(`${url}?v=${Config.cacheVersion}`);
    });
    data.src = src;

    data.preload = false;
    data.onload = this.onLoadComplete.bind(this);
    this.howler = new Howl(data);

    this.onLoadCompleteCallback = callback;
    this.howler.load();
  }

  onLoadComplete() {
    Config.ticker.add(this.update, this);

    if (this.onLoadCompleteCallback) {
      const func = this.onLoadCompleteCallback;
      this.onLoadCompleteCallback = null;
      func();
    }
  }

  play(key) {
    if (!this.enable) {
      return;
    }

    this.soundNum += 1;
    if (this.soundNum > 10) {
      return;
    }

    this.howler.play(key);
  }

  bgmStart() {
    this.play('bgm');
  }

  attack() {
    if (this.lastAttackNum === undefined) {
      this.lastAttackNum = 0;
    }

    this.lastAttackNum += 1;
    if (this.lastAttackNum > 1) {
      this.lastAttackNum = 0;
    }

    this.play(`attack-${this.lastAttackNum}`);
  }

  bossAttack() {
    this.play('boss');
  }

  update() {
    this.soundNum = 0;
  }

  destroy() {
    if (Config.ticker) {
      Config.ticker.remove(this.update, this);
    }

    this.howler.unload();
  }
}

export default new Sound();
