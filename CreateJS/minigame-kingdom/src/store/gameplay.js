import {DataStore} from 'dena-exts-helper';
import {Ticker} from 'createjs-module';


import map from './map';
import { canvas } from './index';

const gameplay = new DataStore({
    speed: map.speed,     //pixel per second
    dead: {}, //Count npc dead
    play: false,     //Playing state
    end: false,
    time: 0,     //Time for played stage
    camera: {x:0,y:0},
    attack: 0, //Atacking state
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
    lanceHeight: 170,
    heroRange: 170 //Range attack
});

/*====================  Calculate time played ==================*/
var timeStamp = (new Date()).getTime(), lastTime = gameplay.time;
function timeFrame(event){
    gameplay.time = event.timeStamp - timeStamp + lastTime;
}
function calcTime(state){
    if(state){
        timeStamp = (new Date()).getTime();
        lastTime = gameplay.time;
        Ticker.addEventListener('tick',timeFrame);
    }else{
        Ticker.removeEventListener('tick', timeFrame);
    }
}
gameplay.watch('play',calcTime);
calcTime(gameplay.play);
/*====================  End calculate time played ==================*/

/*====================  Calculate time Distance ==================*/
function distanceFrame(event){
    const deltaS = event.delta / 1000;
    gameplay.distance = (gameplay.distance + deltaS * gameplay.speed);
}
function calcDistance(state){
    if(state){
        Ticker.addEventListener('tick',distanceFrame);
    }else{
        Ticker.removeEventListener('tick', distanceFrame);
    }
}
gameplay.watch('play',calcDistance);
calcDistance(gameplay.play);
/*====================  End calculate time Distance ==================*/
gameplay
    .watch('end',function(state){
        return state?{}:{
            time: 0,
            dead: {},
            attack: 0,
            play: false,
            distance: 0
        }
    })
    .watch('distance', state => ({dead: {0: ~~state}}))
    ;



    gameplay.play = true;
// setTimeout(function(){
//     gameplay.play = true;
// },3000)
window.gameplay = gameplay;
export default gameplay;