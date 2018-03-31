import {Container, Shape, Ticker} from 'createjs-module';



import {gameplay} from '../../store';

import Person from './Person';
import House from './House';

class Hero extends Container{
    constructor(){
        super();

        this.setupActions();
        this.addSprites();
        this.applyActions();
    }



    setupActions(){
        const actions = this.actions = {
            distance(state){
                this.x = state;
            },
            removed(){
                Ticker.removeEventListener('tick',actions.tick);
                gameplay.off('change:play', actions.play);
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

    addSprites(){
        const shape = new Shape();
        shape.graphics.beginFill('#ff0').drawCircle(0,0,gameplay.heroRange);
        this.addChild(shape);

        const 
            house = this.house = new House(),
            person = this.person = new Person(),
            hB = house.getBounds(),
            pB = person.getBounds()
        ;
        house.regX = hB.width/2;
        house.regY = hB.height * 0.9;

        person.regX = pB.width*0.3;
        person.regY = pB.height + hB.height * 0.15;
        
        this.addChild(house, person);

        const {frames} = house.animations.run,frameMap = {};
        frames.forEach((frame,index)=>{
            frameMap[frame] = index;
        });

        house.addEventListener('change', event => {
            const value = frameMap[event.target.currentFrame];
            person.setBump(value/frames.length || 0)
        });

        this.scaleX = this.scaleY = 0.4
        this.y = 400;

        this.actions.distance(gameplay.distance);
    }
}

export default Hero;