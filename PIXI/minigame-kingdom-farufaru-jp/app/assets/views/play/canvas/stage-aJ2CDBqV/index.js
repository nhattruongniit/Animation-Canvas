import Stage from '../stage/';
import EnemyGroup from '../models/EnemyGroup';

export default class extends Stage {
  static getId() {
    return 'aJ2CDBqV';
  }

  static getBossPoint() {
    return 20000;
  }

  constructor(header, footer) {
    super(header, footer, {
      speed: 22,
      distance: 19500,
      lane0: [
        new EnemyGroup({
          range: { left: 1500, right: 2000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 2000, right: 2500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 2500, right: 3000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 3000, right: 3500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 3500, right: 4000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 4000, right: 4500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 8000, right: 8500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 8500, right: 9000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 9000, right: 9500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 9500, right: 10000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 10000, right: 10500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 11500, right: 12000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 12000, right: 12500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 13000, right: 13500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 13500, right: 14000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 14500, right: 15000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 15000, right: 15500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 16500, right: 17000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 17000, right: 17500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 17500, right: 18000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 18000, right: 18500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 18500, right: 19000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 19000, right: 19500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
      ],
      lane1: [
        new EnemyGroup({
          range: { left: 2500, right: 3000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 3000, right: 3500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 3500, right: 4000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 4000, right: 4500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 5000, right: 5500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 5500, right: 6000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 6000, right: 6500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 6500, right: 7000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 7000, right: 7500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 12500, right: 13000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 13000, right: 13500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 14000, right: 14500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 14500, right: 15000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 16500, right: 17000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 17000, right: 17500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 17500, right: 18000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 18000, right: 18500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 18500, right: 19000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 19000, right: 19500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
      ],
      lane2: [
        new EnemyGroup({
          range: { left: 1000, right: 1500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 1500, right: 2000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 2000, right: 2500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 2500, right: 3000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 3000, right: 3500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 3500, right: 4000 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 4000, right: 4500 },
          sword: 1,
          spear: 1,
          bow: 1,
          infantry: 5,
        }),
        new EnemyGroup({
          range: { left: 8500, right: 9000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 9000, right: 9500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 9500, right: 10000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 10000, right: 10500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 10500, right: 11000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 12000, right: 12500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 12500, right: 13000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 13500, right: 14000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 14000, right: 14500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 15000, right: 15500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 15500, right: 16000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 16500, right: 17000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 17000, right: 17500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 17500, right: 18000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 18000, right: 18500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 18500, right: 19000 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
        new EnemyGroup({
          range: { left: 19000, right: 19500 },
          sword: 2,
          spear: 2,
          bow: 2,
          infantry: 6,
        }),
      ],
    });
  }
}
