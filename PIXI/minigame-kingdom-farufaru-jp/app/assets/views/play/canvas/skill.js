/* eslint quote-props: "off" */
import _ from 'lodash';
import ConfigVueMixin from '../../../mixin/config/';

const CondigMixin = ConfigVueMixin.computed;

const reinforcements = {
  '0': [
    'hai3y',
    'choo1',
    'qua2i',
  ],
  '1': [
    'yiej8',
    'kori0',
    'raa8k',
  ],
  '2': [
    'aegh6',
    'ootu9',
    'phif0',
  ],
  '3': [
    'shu4f',
    'eedo9',
    'co4ao',
  ],
};

const types = {
  oneLane: 'oneLane',
  twoLane: 'twoLane',
  threeLane: 'threeLane',
  boostRateDouble: 'boostRateDouble',
};

const map = {
  'aang2': {
    type: types.boostRateDouble,
  },
  'aegh6': {
    type: types.threeLane,
  },
  'aem7u': {
    type: types.boostRateDouble,
  },
  'ait3o': {
    type: types.threeLane,
  },
  'choo1': {
    type: types.oneLane,
  },
  'co4ao': {
    type: types.boostRateDouble,
  },
  'dah8f': {
    type: types.threeLane,
  },
  'eedo9': {
    type: types.twoLane,
  },
  'eesh7': {
    type: types.threeLane,
  },
  'ei5pa': {
    type: types.boostRateDouble,
  },
  'eik9e': {
    type: types.oneLane,
  },
  'eiw9a': {
    type: types.oneLane,
  },
  'equ7e': {
    type: types.twoLane,
  },
  'hae1n': {
    type: types.twoLane,
  },
  'hai3y': {
    type: types.oneLane,
  },
  'heem0': {
    type: types.threeLane,
  },
  'ied5e': {
    type: types.threeLane,
  },
  'ied5g': {
    type: types.twoLane,
  },
  'ieko3': {
    type: types.oneLane,
  },
  'iep9i': {
    type: types.threeLane,
  },
  'iequ4': {
    type: types.boostRateDouble,
  },
  'in3oh': {
    type: types.twoLane,
  },
  'iyu7u': {
    type: types.twoLane,
  },
  'jae6g': {
    type: types.threeLane,
  },
  'kori0': {
    type: types.twoLane,
  },
  'ohl4l': {
    type: types.twoLane,
  },
  'ooj6a': {
    type: types.twoLane,
  },
  'ootu9': {
    type: types.twoLane,
  },
  'pei6f': {
    type: types.twoLane,
  },
  'phif0': {
    type: types.twoLane,
  },
  'pohs6': {
    type: types.twoLane,
  },
  'qua2i': {
    type: types.oneLane,
  },
  'quah7': {
    type: types.twoLane,
  },
  'raa8k': {
    type: types.twoLane,
  },
  'sei4d': {
    type: types.threeLane,
  },
  'shae2': {
    type: types.oneLane,
  },
  'shu4f': {
    type: types.threeLane,
  },
  'thai6': {
    type: types.threeLane,
  },
  'ug3ok': {
    type: types.twoLane,
  },
  'yiej8': {
    type: types.threeLane,
  },
};

class Skill {
  reset(reinforcement) {
    if (!CondigMixin.isProduction()) {
      const query = CondigMixin.query();
      if (query.reinforcement) {
        reinforcement = query.reinforcement;
      }
    }

    const reinforcementData = reinforcements[reinforcement];
    if (reinforcementData) {
      this.skills = reinforcementData;
    } else {
      this.skills = this.getNomals();
    }

    this.skills.push(this.getSecret());
  }

  getData(id) {
    return map[id];
  }

  getTypes() {
    return types;
  }

  getNomals() {
    const skills = [];

    if (!CondigMixin.isProduction()) {
      const query = CondigMixin.query();
      if (query.normals) {
        const normals = query.normals.split(',');
        if (normals.length === 3) {
          return normals;
        }
      }
    }

    const normals = _.shuffle([
      'eesh7',
      'in3oh',
      'aang2',
      'quah7',
      'equ7e',
      'pohs6',
      'thai6',
      'aem7u',
      'ait3o',
      'ei5pa',
      'eiw9a',
      'pei6f',
      'iequ4',
      'ooj6a',
      'hae1n',
      'ied5g',
      'ohl4l',
      'ug3ok',
      'iyu7u',
      'eik9e',
      'ieko3',
      'shae2',
    ]);

    for (let i = 0; i < 3; i++) {
      skills.push(normals.pop());
    }

    return skills;
  }

  getSecret() {
    if (!CondigMixin.isProduction()) {
      const query = CondigMixin.query();
      if (query.secret) {
        return query.secret;
      }
    }

    const secrets = _.shuffle([
      'jae6g',
      'dah8f',
      'iep9i',
      'heem0',
      'ied5e',
      'sei4d',
    ]);

    return secrets.pop();
  }
}

export default new Skill();
