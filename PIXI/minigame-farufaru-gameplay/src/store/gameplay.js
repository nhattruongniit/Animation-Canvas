
import {DataStore} from 'dena-gnt-helper';

import ticker from './ticker';
import canvas from './canvas';
import map from './map';
import { TweenLite } from 'gsap';

const gameplay = new DataStore({
    map(newMap){
        Object.assign(map,newMap);
        return newMap;
    },
    speed: 450,     //pixel per second
    sound: true,
    dead: {}, //Count npc dead
    factor: 1,
    boost: 1,
    play: false,     //Playing state
    end: false,
    time: 0,     //Time for played stage
    camera: {x:0,y:0},
    attack: {}, //Atacking state
    skills: [],
    fireSkill: false,
    castSkill: false,
    bossdead: false,
    distance(value = 0){
        if(value > map.length){
            this.end = true;
            if(value > map.length + canvas.width){
                this.play = false;
            }
        }
        return value;
    },
    lance: 0,
    lanceHeight: canvas.battle.height/map.lances,
    heroRange: canvas.battle.height/map.lances / 2, //Range attack,
    loading: new DataStore({skills:false, resource:false, sound:false, enemy: false})
});

/*====================  Calculate time played ==================*/
ticker.add(function(delta) {
    gameplay.time += ticker.elapsedMS / 1000;
});
/*====================  End calculate time played ==================*/

/*====================  Calculate time Distance ==================*/
ticker.add(delta => {
    gameplay.distance = (gameplay.distance + ticker.elapsedMS * gameplay.speed / 1000);
});
/*====================  End calculate time Distance ==================*/
gameplay
    .watch('play',state => {
        state?ticker.start():ticker.stop();

        if(state) TweenLite.from(gameplay,1,{speed:0});
    })
    .watch('end',function(state){
        return state?{}:{
            time: 0,
            dead: {},
            attack: {},
            skill: {},
            play: false,
            distance: 0,
            bossdead: false,
            castSkill: null,
            fireSkill: null,
            boost: 1
        };
    })
    .watch('castSkill', function(state){
        if(state !== null) return {
            fireSkill: state
        };
    })
    .watch('map',function(map){
        const height = canvas.battle.height/map.lances;
        return {lanceHeight: height, heroRange: height /2, speed: map.speed};
    })
    ;
window.gameplay = gameplay;
export default gameplay;    