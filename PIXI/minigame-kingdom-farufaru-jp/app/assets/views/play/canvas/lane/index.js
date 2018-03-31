/* eslint no-cond-assign: "off" */

import * as PIXI from 'pixi.js';
import _ from 'lodash';
import Config from '../config';
import Enemy from '../enemy/';

export default class extends PIXI.Container {
  constructor(model, groups) {
    super();

    this.model = model;
    this.groups = groups;
    this.enemies = [];
    this.resize();
  }

  sort() {
    _.sortBy(this.children, ['y']).forEach((child) => {
      this.addChild(child);
    });
  }

  resize() {
    this.y = this.model.y;
  }

  attack(rect) {
    const hits = [];
    const l = this.enemies.length;
    for (let i = 0; i < l; i++) {
      const enemy = this.enemies[i];
      if (!enemy.isHit && rect.right >= enemy.left && rect.left <= enemy.right) {
        enemy.hit();
        hits.push(enemy.type);
      }
    }

    return hits;
  }

  update(cameraX) {
    this.setVisibleGroup(cameraX);
    this.setVisibleChildren(cameraX);
  }

  setVisibleGroup(cameraX) {
    const right = Config.rect.right + 100;
    let l = this.groups.length;
    for (let i = 0; i < l; i++) {
      const group = this.groups[i];
      const left = group.left - cameraX;
      if (left <= right) {
        this.setGroup(group);
        this.groups.splice(i, 1);
        l--;
        i--;
      }
    }
  }

  setGroup(group) {
    let type;
    while (type = group.pop()) {
      const enemy = Enemy.getFromCache();
      enemy.init(type);
      enemy.x = _.random(group.left, group.right);
      enemy.y = _.random(50, this.model.height);
      enemy.scale.x = this.model.scale;
      enemy.scale.y = enemy.scale.x;
      this.addChild(enemy);
      this.enemies.push(enemy);
    }
  }

  setVisibleChildren(cameraX) {
    const left = Config.rect.left - 100;
    let l = this.enemies.length;
    for (let i = 0; i < l; i++) {
      const enemy = this.enemies[i];
      enemy.update();

      if (enemy.isHit && !enemy.isHitComplete) {
        continue;
      }

      if (enemy.isHitComplete || (enemy.right - cameraX) < left) {
        enemy.visible = false;
        Enemy.setCahce(enemy);
        this.enemies.splice(i, 1);
        l--;
        i--;
      }
    }
  }
}
