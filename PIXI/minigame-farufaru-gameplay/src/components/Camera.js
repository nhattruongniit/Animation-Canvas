import {Ticker, Container, Shape} from 'pixi.js';

import {gameplay,canvas,map} from '../store';

import Ground from './Ground';
import Hero from './Hero';
import Enemy from './Enemy';

class Camera extends Container{
    constructor(){
        super();
        this.setupActions();
        this.addSee();
    }


    setupActions(){
        const actions = this.actions = {
            distance(pos){
                if(pos > map.length) pos = map.length;
                this.watch(pos - 180,0);
            },
            bossdead(state){
                if(!state) return;
                gameplay.once('changed:play',state => {
                    TweenLite.fromTo(
                        this.space,
                        0.1,
                        {y:-2}, 
                        {
                            y:2, ease: RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}),
                            clearProps:"x",
                            delay:.15
                        }
                    );
                });
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        gameplay
            .on('changed:distance', this.actions.distance)
            .on('changed:bossdead', this.actions.bossdead);
    }

    addSee(){
        /*============ Create background stage ===============*/
        const space = this.space = new Container();

        const see = this.see = {
            ground: new Ground(),
            herro: new Hero(),
            enemy: new Enemy()
        }
        //space.addChild(see.ground,see.herro);
        space.addChild(see.ground,see.enemy,see.herro);
        this.addChild(space);

        this.actions.distance(0);


        // const shape = this.shape = new Shape();
        // shape.graphics.beginFill('#ff0').drawCircle(0,0,gameplay.heroRange);
        
        // this.addChild(shape);
    }

    watch(x,y){
        this.space.x = -x;
        this.space.y = -y;
        gameplay.camera = {x,y,width: this.width, height: this.height};
    }

    destroy(child){
        super.destroy(child);
        gameplay
            .off('changed:distance', this.actions.distance)
            .off('changed:bossdead', this.actions.bossdead);
    }
}
export default Camera;