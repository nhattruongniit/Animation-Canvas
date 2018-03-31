import {Container, Sprite} from 'pixi.js';

import {gameplay,canvas, resources} from '../../store';
import { TweenLite } from 'gsap';

class Start extends Container{
    constructor(){
        super();

        this.addUI();
        this.setupActions();
    }

    addUI(){
        const start = new Sprite(resources.status.start);
        start.anchor.set(0.5);
        this.addChild(start);

        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.scale.set(.5*canvas.width/start.width);
        this.visible = false;
    }

    setupActions(){
        const actions = this.actions = {
            play(state){
                if(!state || gameplay.distance !== 0) return;
                this.visible = true;
                setTimeout(()=>{
                    const scale = this.scale.x;
                    TweenLite.to(this, 1,{alpha: 0});
                    TweenLite.to(this.scale, 1,{
                        x: scale * 2, 
                        y: scale * 2, 
                        onComplete: ()=>{
                            this.visible = false;
                            this.scale.set(scale);
                            this.alpha = 1;
                        }
                    });
                },500);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        gameplay
            .on('changed:play',actions.play);
        actions.play(gameplay.play);
    }

    destroy(){
        super.destroy();
        gameplay.off('changed:play',this.actions.play);
    }
}

export default Start;