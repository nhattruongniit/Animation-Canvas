
import {Ticker, Container, Shape, Bitmap} from 'createjs-module';

import Numbers from '../../objects/Numbers';

import {resources, gameplay, canvas} from '../../store';

class CountDead extends Container{
    constructor(){
        super();
        this.setupActions();
        this.addUI();
        this.applyActions();
    }

    setupActions(){
        const actions = this.actions = {
            dead(){
                this.numbers.value = this.count();
            },
            removed(){
                gameplay.off('change:dead', actions.deadChange);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
    }

    applyActions(){
        gameplay
            .on('change:dead', this.actions.dead);
            //.on('change:'));

        this.on('removed', this.actions.removed);
    }
    
    addUI(){
        const
            img = resources.header['bg-top'],
            bg = new Bitmap(img);

        bg.cache(0,0,img.width, img.height);
        bg.scaleX = bg.scaleY = canvas.width/img.width;
        this.addChild(bg);

        const numbers = this.numbers = new Numbers();
        numbers.lineHeight = 20;
        numbers.y = 9;
        numbers.floatRight = 100;

        this.addChild(numbers);

        this.actions.dead()
    }

    count(){
        const values = Object.values(gameplay.dead);
        return values.length?values.reduce((a,b) => a + b):0;
    }
}
export default CountDead;