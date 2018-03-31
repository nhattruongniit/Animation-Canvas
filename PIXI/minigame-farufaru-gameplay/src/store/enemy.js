import resources from './resource';
import config from 'farufaru-config';


const soldier = {
    infantry: {
        name: 'Infantry',
        sheet: 'sprites/enemy/infantry.png.json',
        score: 1
    },
    sword: {
        name: 'Infantry',
        sheet: 'sprites/enemy/sword.png.json',
        score: 50
    },
    spear: {
        name: 'Infantry',
        sheet: 'sprites/enemy/spear.png.json',
        score: 100
    },
    bow: {
        name: 'Infantry',
        sheet: 'sprites/enemy/bow.png.json',
        score: 500
    },
    X9yWwtYK: {
        name: 'Boss 1',
        sheet: 'sprites/enemy/X9yWwtYK.png.json',
        score: 50000
    },
    '2X3aJhew': {
        name: 'Infantry',
        sheet: 'sprites/enemy/2X3aJhew.png.json',
        score: 10000
    },
    aJ2CDBqV: {
        name: 'Infantry',
        sheet: 'sprites/enemy/aJ2CDBqV.png.json',
        score: 20000
    },
    eT7p6uF9: {
        name: 'Infantry',
        sheet: 'sprites/enemy/eT7p6uF9.png.json',
        score: 30000
    },
    W7wUbGj9: {
        name: 'Infantry',
        sheet: 'sprites/enemy/W7wUbGj9.png.json',
        score: 40000
    }
};

const enemy = resources.enemy = {
    dead: config.uri + 'sprites/enemy/dead.png.json'
};
Object.entries(soldier).forEach(([id,conf])=> {
    enemy[id] = config.uri + conf.sheet;
});

export default soldier;