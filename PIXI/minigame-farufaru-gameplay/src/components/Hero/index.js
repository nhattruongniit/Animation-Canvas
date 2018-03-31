import {Container,Graphics} from 'pixi.js';



import {gameplay, canvas} from '../../store';

import Person from './Person';
import House from './House';
class Hero extends Container{
    constructor(){
        super();
        this.scale.set(0.85);

        this.setupActions();
        this.addSprites();
    }



    setupActions(){
        const actions = this.actions = {
            distance(state){
                this.x = state;
            },
            lance(state){
                this.y = canvas.battle.y + gameplay.lanceHeight/2 + gameplay.lanceHeight * gameplay.lance;
            }
        };
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        gameplay
            .on('changed:distance', actions.distance)
            .on('changed:lance', actions.lance);
    }

    addSprites(){
        const house = new House();
        house.anchor.set(0.8,0.8);
        this.addChild(house);

        const person = new Person();
        person.anchor.set(0.65,1.05);
        this.addChild(person);
        house.on('framechange', frame => person.setBump(frame/house._textures.length || 0));

        this.actions.lance(gameplay.lance);
    }

    destroy(child){
        super.destroy(child);
        gameplay
            .off('changed:distance', this.actions.distance)
            .off('changed:lance', this.actions.lance);
    }
}

export default Hero;