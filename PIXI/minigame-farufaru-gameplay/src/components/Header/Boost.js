import {Container, Sprite} from 'pixi.js';

import {ticker, gameplay, canvas, resources} from '../../store';
import { TweenLite, RoughEase, Linear, TimelineMax } from 'gsap';

class Boost extends Container{
    constructor(){
        super();
        this.setupActions();
        this.addUI();
    }
    setupActions(){
        let deny = false;
        const actions = this.actions = {
            boost(value){
                if(value > 1){
                    this.visible = true;
                    this.timeline.play();
                    TweenLite.to(this,.3,{alpha:1});
                }else{
                    TweenLite.to(this,.3,{alpha:0, onComplete: e => {
                        this.visible = false;
                        this.timeline.stop()
                    }});
                }
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        gameplay
            .on('changed:boost',actions.boost);
    }

    addUI(){
        let icon = new Sprite(resources.header.boost), This = this;
        icon.anchor.set(0.5);
        this.addChild(icon);

        const timeline = this.timeline = new TimelineMax({repeat:-1, repeatDelay: .5, paused: true});
        timeline.add([0].map(function(i){
            const eff = new Sprite(resources.header.boost);
            eff.anchor = icon.anchor;
            eff.position = icon.position;
            This.addChild(eff);
            return [
                TweenLite.to(eff.scale,1,{ x: 1.6, y: 1.6 , ease: Cubic.Out, delay: .2 * i}),
                TweenLite.to(eff,1,{ alpha: 0 , ease: Cubic.Out, delay: .2 * i}),
            ]
        }));
        this.scale.set(.4)
        this.position.set(canvas.width * .9,20);
        this.visible = false;
    }
    destroy(child){
        super.destroy(child);
        this.timeline.kill();
        gameplay.off('changed:boost',this.actions.boost);
    }
}

export default Boost;