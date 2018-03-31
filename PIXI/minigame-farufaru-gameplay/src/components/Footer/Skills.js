import {Container, Graphics, Sprite} from 'pixi.js';

import {gameplay, resources, skills} from '../../store';
import { TimelineMax, TweenLite, Cubic } from 'gsap';



class Skill extends Container{
    constructor(id){
        super();
        this.skillID = id;
        this.setupAction();
        this.addUI();
        this.buttonMode = true;
        this.interactive = true;
    }
    setupAction(){
        const actions = this.actions = {
            play(state){
                state?this.timeline.play():this.timeline.pause();
            },
            castSkill(id){
                if(id !== this.skillID) return;
                gameplay
                    .off('changed:play', actions.play)
                    .off('changed:castSkill', actions.castSkill);

                this.off('pointerdown');
                TweenLite.to(this,.1,{y: -10});
            },
            fireSkill(id){
                if(id !== this.skillID) return;
                this.timeline.kill();
                while(this.children.length > 1) this.children[1].destroy({children: true});
                TweenLite.to(this,.1,{y: 0, alpha: .5});
            },
            end(state){
                if(state){
                    gameplay
                    .off('changed:play', actions.play)
                    .off('changed:castSkill', actions.castSkill);

                    this.off('pointerdown');
                    this.timeline.kill();
                    while(this.children.length > 1) this.children[1].destroy({children: true});
                }
            }
        }
        Object.entries(actions).forEach(([key,func]) => {
            actions[key] = func.bind(this);
        });
        gameplay
            .on('changed:play', actions.play)
            .on('changed:castSkill', actions.castSkill)
            .on('changed:fireSkill', actions.fireSkill)
            .on('changed:end', actions.end);
    }
    addUI(){
        const id = this.skillID, This = this;
        const sprite = new Sprite(resources.skills[id].panel);
        this.addChild(sprite);

        this.buttonMode = true;
        this.interactive = true;

        const icon = new Sprite(resources.footer['icon-skill']);
        icon.anchor.set(.5,1);
        icon.position.set(.2*this.width, this.height);
        this.addChild(icon);
        const timeline = this.timeline = new TimelineMax({repeat:-1, repeatDelay: .5});
        timeline.add([2,1,0].map(function(i){
            const eff = new Sprite(resources.footer['icon-skill']);
            eff.anchor = icon.anchor;
            eff.position = icon.position;
            This.addChild(eff);
            return [
                TweenLite.to(eff.scale,.5,{ x: 1.5, y: 1.5 , ease: Cubic.Out, delay: .2 * i}),
                TweenLite.to(eff,.5,{ alpha: 0 , ease: Cubic.Out, delay: .2 * i}),
            ]
        }));

        this.on('pointerdown', e => gameplay.castSkill = id);
    }

    destroy(ops){
        super.destroy(ops);
        this.timeline.kill();
        gameplay
            .off('changed:play', this.actions.play)
            .off('changed:castSkill', this.actions.castSkill)
            .off('changed:fireSkill', this.actions.fireSkill);
    }
}


class Skills extends Container{
    constructor(){
        super();
        this.setupAction();
        this.addSkills(gameplay.skills);
    }

    setupAction(){
        const actions = this.actions = {
            skills(skills){
                while(this.children.length) this.children[0].destroy({children:true});
                this.addSkills(skills);
            },
            end(state){
                if(!state) actions.skills(gameplay.skills);
            }
        }
        Object.entries(actions).forEach(([key,func]) => {
            actions[key] = func.bind(this);
        });
        gameplay
            .on('changed:skills', actions.skills)
            .on('changed:end', actions.end);
    }

    addSkills(skills){
        skills.map(id => { 
            const skill = new Skill(id);
            skill.x = this.width / this.scale.x;
            this.addChild(skill);
            return skill;
        });
    }

    destroy(ops){
        super.destroy(ops);
        gameplay.off('changed:skills', this.actions.skills);
    }
}
export default Skills;