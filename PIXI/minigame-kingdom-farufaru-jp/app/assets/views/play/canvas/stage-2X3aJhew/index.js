import Stage from '../stage/';
import EnemyGroup from '../models/EnemyGroup';

export default class extends Stage {
  static getId() {
    return '2X3aJhew';
  }

  static getBossPoint() {
    return 10000;
  }

  static getSkills() {
    return [
      'bK59g7RQ',
      'Fx4CtBMd',
      'T6jhwSsf',
      'Zi9xQVwz',
    ];
  }

  constructor(header, footer) {
    super(header, footer, {
      speed: 20,
      distance: 18000,
      lane0: [
        new EnemyGroup({
          range: { left: 1500, right: 2000 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 2000, right: 2500 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 2500, right: 3000 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 9000, right: 9500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 9500, right: 10000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 10000, right: 10500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 15500, right: 16000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 16000, right: 16500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 16500, right: 17000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 17000, right: 17500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 17500, right: 18000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
      ],
      lane1: [
        new EnemyGroup({
          range: { left: 6500, right: 7000 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 7000, right: 7500 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 7500, right: 8000 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 11000, right: 11500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 11500, right: 12000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 12000, right: 12500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 16500, right: 17000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 17000, right: 17500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 17500, right: 18000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
      ],
      lane2: [
        new EnemyGroup({
          range: { left: 4000, right: 4500 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 4500, right: 5000 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 5000, right: 5500 },
          sword: 0,
          spear: 0,
          bow: 0,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 13000, right: 13500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 13500, right: 14000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 14000, right: 14500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 15000, right: 15500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 15500, right: 16000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 16000, right: 16500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 16500, right: 17000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 17000, right: 17500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),
        new EnemyGroup({
          range: { left: 17500, right: 18000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 10,
        }),

      ],
    });
  }
}
