import {Ticker, Container, Shape} from 'createjs-module';

import {gameplay,canvas,map} from '../store';

import BgStage from './BgStage';
import Hero from './Hero';
import Enemy from './Enemy';

class Camera extends Container{
    constructor(){
        super();
        this.setupActions();
        this.addSee();
        this.applyActions();
    }


    setupActions(){
        const actions = this.actions = {
            distance(pos){
                if(pos > map.length) return;
                this.watch(pos - 55,0)
            },
            removed(){
                //Ticker.removeEventListener('tick',actions.tick);
                gameplay.off('change:heroPos', actions.heroPos);
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
    

    addSee(){
        /*============ Create background stage ===============*/
        const space = this.space = new Container();

        const see = this.see = {
            ground: new BgStage(),
            herro: new Hero(),
            enemy: new Enemy()
        }
        space.addChild(see.ground,see.herro, see.enemy);
        this.addChild(space);
        this.width = canvas.width;
        this.height = canvas.height;

        this.actions.distance(0);
    }

    watch(x,y){
        this.space.x = -x;
        this.space.y = -y;
        gameplay.camera = {x,y,width: this.width, height: this.height};
    }
}
export default Camera;