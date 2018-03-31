import { Container, Sprite, extras } from 'pixi.js';

import { gameplay, resources, canvas }  from '../../store';
import { TweenLite, Expo } from 'gsap';

class Skill extends Container{
    constructor(){
        super();
        this.setupActions();
        this.addUI();
        this.y = canvas.height/2;
        this.visible = false;
        this.alpha = 0;
    }
    
    setupActions(){
        let casting = null,speed = gameplay.speed, playtween = new TweenLite(gameplay,1,{speed:0,paused:true});

        const actions = this.actions = {
            castSkill(id){
                if(casting !== null) return false;
                if(casting === id) return;
                casting = id;
                playtween.timeScale = 0.5;
                playtween.play();
                //TweenLite.to(gameplay,.5,{speed:0});

                const This = this;
                this.visible = true;
                const image = new Sprite(resources.skills[id].image);
                image.anchor.set(0.5,1);
                image.x = canvas.width/2/ this.all.scale.y;
                image.y = this.background.height/2;
                this.background.addChild(image);
                TweenLite.to(this,.3,{alpha:1});
                TweenLite.from(image,1.5,{alpha:1, x: -image.width, ease: Expo.easeOut, onComplete(){
                    TweenLite.to(This,.3,{alpha:0, onComplete(){
                        image.destroy({children: true});
                        This.visible = false;
                        playtween.timeScale = 1;
                        playtween.reverse();
                        casting = null;
                        gameplay.fireSkill = id;
                    }});
                }});
            },
            fireSkill(id){
                if(casting !== null) return false;
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        gameplay
            .on('change:castSkill',actions.castSkill)
            .on('change:fireSkill',actions.fireSkill);
    }

    addUI(){
        const 
            all = this.all = new Container(),
            bg = this.background = new Container(),
            imgBg = resources.status['skill-bg'],
            bgReapeat = new extras.TilingSprite(resources.status['skill-bg'],imgBg.width,imgBg.height),
            thunderT = new Sprite(resources.status['skill-thunder']),
            thunderB = new Sprite(resources.status['skill-thunder'])
        ;
        bgReapeat.anchor.set(0,0.5)
        thunderT.anchor.set(0,0.5);
        thunderT.y = -bgReapeat.height/2;
        thunderB.anchor.set(0,0.5);
        thunderB.y = bgReapeat.height/2;
        bg.addChild(bgReapeat);
        all.addChild(bg,thunderT,thunderB);
        all.scale.set(canvas.width/bg.width);
        this.addChild(all);
    }

    destroy(ops){
        super.destroy(ops);
        gameplay.off('changed:castSkill',this.actions.castSkill);
    }
}

export default Skill;
