import {loaders} from 'pixi.js';

import gameplay from './gameplay';
import resources from './resource';
import config from 'farufaru-config';

function getLance(num){
    return [
        {x:0,y: num*0.333},
        {x:1,y: num*0.333},
        {x:1,y:(num+1)*0.333},
        {x:0,y:(num+1)*0.333}
    ];
}

const types = {
    one(){
        let lance = gameplay.lance + 1;
        lance = lance > 2?0:lance;
        return getLance(lance);
    },
    two(){
        const lances = [0,1,2];
        lances.splice(gameplay.lance,1);
        return lances.map(num => getLance(num));
    },
    three(){return [
        {x:0,y:0},
        {x:1,y:0},
        {x:1,y:1},
        {x:0,y:1}
    ];},
    double(){
        gameplay.boost *= 2;
        const
            distance = gameplay.distance,
            onDistance = value => {
                if(value - distance < 500) return;
                gameplay.boost /= 2;
                gameplay.off('changed:distance',onDistance);
            }
        ;

        gameplay.on('changed:distance',onDistance);
    }
};
        
const skills = {};
Object.entries({
    'aang2': {
        paths: types.double,
    },
    'aegh6': {
        paths: types.three,
    },
    'aem7u': {
        paths: types.double,
    },
    'ait3o': {
        paths: types.three,
    },
    'choo1': {
        paths: types.one,
    },
    'co4ao': {
        paths: types.double,
    },
    'dah8f': {
        paths: types.three,
    },
    'eedo9': {
        paths: types.two,
    },
    'eesh7': {
        paths: types.three,
    },
    'ei5pa': {
        paths: types.double,
    },
    'eik9e': {
        paths: types.one,
    },
    'eiw9a': {
        paths: types.one,
    },
    'equ7e': {
        paths: types.two,
    },
    'hae1n': {
        paths: types.two,
    },
    'hai3y': {
        paths: types.one,
    },
    'heem0': {
        paths: types.three,
    },
    'ied5e': {
        paths: types.three,
    },
    'ied5g': {
        paths: types.two,
    },
    'ieko3': {
        paths: types.one,
    },
    'iep9i': {
        paths: types.three,
    },
    'iequ4': {
        paths: types.double,
    },
    'in3oh': {
        paths: types.two,
    },
    'iyu7u': {
        paths: types.two,
    },
    'jae6g': {
        paths: types.three,
    },
    'kori0': {
        paths: types.two,
    },
    'ohl4l': {
        paths: types.two,
    },
    'ooj6a': {
        paths: types.two,
    },
    'ootu9': {
        paths: types.two,
    },
    'pei6f': {
        paths: types.two,
    },
    'phif0': {
        paths: types.two,
    },
    'pohs6': {
        paths: types.two,
    },
    'qua2i': {
        paths: types.one,
    },
    'quah7': {
        paths: types.two,
    },
    'raa8k': {
        paths: types.two,
    },
    'sei4d': {
        paths: types.three,
    },
    'shae2': {
        paths: types.one,
    },
    'shu4f': {
        paths: types.three,
    },
    'thai6': {
        paths: types.three,
    },
    'ug3ok': {
        paths: types.two,
    },
    'yiej8': {
        paths: types.three,
    },
  }).forEach(([key,val]) => {
      val.sheet = config.uri + "sprites/skills/"+key+".png.json";
      skills[key] = val;
  });

resources.skills = {};

const query = new loaders.Loader();
function loadMore(ids){
    return new Promise(function(next){
        gameplay.loading.skills = true;
        ids.forEach(id => {
            id += '';
            query.add(id,skills[id].sheet);
        });

        query.once('complete', function(){
            ids.forEach(id => {
                resources.skills[id] = query.resources[id].textures || true;
            });
            next(resources.skills);

            gameplay.loading.skills = false;
        });
        query.load();
    });
}

function getRandom(){
    const ids = Object.keys(skills), ran = [];
    while (ran.length < 4) ran.push(ids.splice(Math.range(0,ids.length),1)[0]);
    return ran;
}

gameplay.on('change:skills', function(newVal){
    if(query.loading) return false;
    const loadSkills = newVal.filter(id => !resources.skills[id]);
    if(loadSkills.length === 0) return;
    loadMore(loadSkills).then(e => gameplay.skills = newVal);
    return false;
}).loading.once('changed:resource', e => {
    if(!gameplay.skills.length) gameplay.skills = getRandom();
});
export default skills;