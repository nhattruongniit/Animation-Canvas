
import {extras} from 'pixi.js';
import {SpriteSheet} from '../../objects';

import {ticker,resources, gameplay} from '../../store';

function frames(){
    return Object.entries(resources.hero).map(e => e[1]);
}

class Person extends SpriteSheet{
    constructor(){
        super(frames());
        this.setupActions();
        this.animationSpeed = this._textures.length/60*5;
        this.loop = false;
        
        this.on('complete', frame => this.gotoAndStop(0));
    }


    setupActions(){
        const actions = this.actions = {
            attack(state){
                state && this.play();
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));

        gameplay
            .on('changed:attack', actions.attack)
        actions.attack(gameplay.attack);
        
    }

    setBump(at){
        const set = 1 - Math.abs(0.5 - at) * 2;
        this.y = -this.height * 0.01 * set;
        this.rotation = set/45;
    }

    destroy(child){
        super.destroy(child);
        gameplay
            .off('changed:attack', this.actions.attack)
    }
}
export default Person