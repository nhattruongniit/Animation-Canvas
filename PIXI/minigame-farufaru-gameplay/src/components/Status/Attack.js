import {Container, Sprite} from 'pixi.js';

import {ticker, gameplay, canvas, resources} from '../../store';
import { TweenLite, RoughEase, Linear } from 'gsap';

class Attack extends Container{
    constructor(){
        super();
        this.setupActions();
    }
    setupActions(){
        let deny = false;
        const actions = this.actions = {
            attack(enemy){
                if(deny) return;
                deny = true;
                setTimeout(()=> deny = false,100);
                const
                    range = Math.range(150,200),
                    rotate = Math.range(0,Math.PI),
                    x = Math.sin(rotate) * range,
                    y = Math.cos(rotate) * range
                ;
                const sprite = new Sprite(resources.status.faru);

                sprite.x = x + 150;
                sprite.y = y + canvas.battle.y + gameplay.lance * gameplay.lanceHeight;
                sprite.scale.set(0.8);
                sprite.anchor.set(0.5);


                TweenLite.from(sprite, 0.2,{alpha: 0});
                TweenLite.fromTo(
                    sprite,
                    0.1,
                    {x: sprite.x -2}, 
                    {
                        x: sprite.x + 2, ease: RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}),
                        clearProps:"x",
                        delay: 0.2
                    }
                );

                this.addChild(sprite);

                setTimeout(()=>this.removeChild(sprite), 500);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        gameplay
            .on('changed:attack',actions.attack);
    }
    destroy(child){
        super.destroy(child);
        gameplay.off('changed:attack',this.actions.attack);
    }
}

export default Attack;