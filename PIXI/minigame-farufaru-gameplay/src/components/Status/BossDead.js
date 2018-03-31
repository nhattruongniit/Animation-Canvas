import {Container, Sprite, ticker} from 'pixi.js';

import {gameplay,canvas, resources} from '../../store';
import { TweenLite, RoughEase, Linear } from 'gsap';

class BossDead extends Container{
    constructor(){
        super();

        this.addUI();
        this.setupActions();
    }

    addUI(){

        const radian = this.radian = new Sprite(resources.status.radiation);
        radian.anchor.set(0.5);
        radian.scale.set(canvas.width/radian.width);
        this.addChild(radian);

        const end = this.bgEnd = new Sprite(resources.status.end);
        end.anchor.set(0.5);
        end.scale.set(.7*canvas.width/end.width);
        this.addChild(end);

        
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.visible = false;
    }

    setupActions(){
        
        const actions = this.actions = {
            rotation(){
                this.radian.rotation += .005;
            },
            end(state){
                if(!state){
                    this.visible = false;
                    ticker.shared.remove(actions.rotation);
                }                
            },
            play(state){
                if(gameplay.end && !state){

                }
            },
            bossdead(state){
                if(!state) return;
                gameplay.once('changed:play',state => {
                    if(state) return;
                    this.visible = true;
                    TweenLite.from(this.radian, .2,{alpha: 0});
                    ticker.shared.add(actions.rotation);
    
                    const scale = this.bgEnd.scale.x;
                    TweenLite.from(this.bgEnd, .2,{alpha: 0});
                    TweenLite.from(this.bgEnd.scale, .15,{
                        x: scale * 2, 
                        y: scale * 2
                    });
                    TweenLite.fromTo(
                        this.bgEnd,
                        0.1,
                        {x:-2}, 
                        {
                            x:2, ease: RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}),
                            clearProps:"x",
                            delay:.15
                        }
                    );
                });
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        gameplay
            .on('changed:end',actions.end)
            .on('changed:bossdead',actions.bossdead);
    }
    destroy(child){
        super.destroy(child);
        gameplay.off('changed:end',this.actions.end);
        ticker.shared.remove(this.actions.rotation);
    }
}

export default BossDead;