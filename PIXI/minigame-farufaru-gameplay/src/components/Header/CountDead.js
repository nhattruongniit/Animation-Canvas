
import {Container, Sprite} from 'pixi.js';

import {Numbers} from '../../objects';

import {resources, gameplay, canvas, enemy} from '../../store';

class CountDead extends Container{
    constructor(){
        super();
        this.setupActions();
        this.addUI();

    }

    setupActions(){
        const actions = this.actions = {
            dead(state){
                this.numbers.value = this.count(state);
                this.numbers.pivot.x = this.numbers.width / this.numbers.scale.x;
            }
        };
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
        gameplay
            .on('changed:dead', this.actions.dead);
    }

    addUI(){
        const
            img = resources.header['bg-top'],
            bg = new Sprite(img);

        bg.scale.set(canvas.width/img.width);
        this.addChild(bg);

        const numbers = this.numbers = new Numbers();
        numbers.x = canvas.width * 0.73;
        numbers.y = bg.height * 0.12;
        numbers.scale.set(bg.height * 0.35/numbers.height);
        this.addChild(numbers);

        this.actions.dead(gameplay.dead);
    }

    count(state){
        const keys = Object.keys(state);
        if(!keys.length) return 0;
        return keys.map(key => enemy[key].score * state[key]).reduce((a,b) => a + b,0);
    }

    destroy(child){
        gameplay.off('changed:dead', this.actions.dead);
        super.destroy(child);
    }
}
export default CountDead;