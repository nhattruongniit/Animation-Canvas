import {Container, Shape, Ticker} from 'createjs-module';

import Boss from './Boss';
import Group from './Group';

import {map, style, gameplay} from '../../store';

class Enemy extends Container{
    constructor(){
        super();

        this.setupActions();
        this.initializeMap();
        this.applyActions();
    }

    setupActions(){
        const actions = this.actions = {
            distance(state){
                const inRange = this.inRange(state);
                if(inRange.length){
                    gameplay.attack++;
                }
                //console.log(state);
                //const {ground} = this;
                //ground.x = Math.floor(state.x / ground.tileW) * ground.tileW;
            },
            removed(){
                //Ticker.removeEventListener('tick',actions.tick);
                gameplay.off('change:distance', actions.distance);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
    }

    applyActions(){
        gameplay
            .on('change:distance', this.actions.distance);
            //.on('change:'));

        this.on('removed', this.actions.removed);
    }

    initializeMap(){
        style.battle.enemy.call(this);
        map.arrange.forEach(group => {
            group = new Group(group);
            group.forEach(child => this.addChild(child));
        })
    }

    inRange(state){
        return this.children.filter(child => {
            if(child.inRange) return false;
            child.inRange = true;

            return true;
        })
    }
}

export default Enemy;