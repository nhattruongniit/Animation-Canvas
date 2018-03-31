import {Sprite, SpriteSheet} from 'createjs-module';


import {resources, gameplay} from '../../store';

class Person extends Sprite{
    constructor(){
        super();
        this.setupActions();
        this.addSpritesheet();
        this.applyActions();
    }


    setupActions(){
        const actions = this.actions = {
            // play(state){
            //     state?
            //         this.gotoAndPlay('run'):
            //         this.gotoAndStop('stand');
            // },
            // speed(state){
            //     console.log(this.animations.run.frames.length * (state / 80))
            //     this.spriteSheet.framerate = this.animations.run.frames.length * (state / 80);
            // },
            attack(state){
                state && this.paused && this.gotoAndPlay('attack');
            },
            removed(){
                gameplay.off('change:attack', actions.attack);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
    }

    applyActions(){
        gameplay
            .on('change:attack', this.actions.attack)
        //     .on('change:speed', this.actions.speed);
        //     //.on('change:'));

        this.on('removed', this.actions.removed);
    }
    addSpritesheet(){
        var index = 0, anims = this.animations = {};
        const imgs = Object.entries(resources.hero).map(([key,image]) => {
            const name = key.replace(/\-[0-9]+$/,'');
            var anim = anims[name] = anims[name] || {frames:[]};
            anim.frames.push(index);

            index++;
            return image;
        });
        
        const {width, height} = imgs[0];
        this.width = width;
        this.height = height;
        //anims.attack.frames.push('stand');
        //anims.attack.next = false;
        const sheet = this.spriteSheet = new SpriteSheet({
            framerate: 15,
            images: imgs,
            frames: {
                width   : width,
                height  : height
            },
            animations: anims
        });

        this.actions.attack(gameplay.attack);
        this.addEventListener('animationend', e => {
            if(e.name === 'attack') this.gotoAndStop('stand');
        })
    }

    setBump(at){
        const set = 1 - Math.abs(0.5 - at) * 2;
        this.y = -this.height * 0.03 * set;
        this.rotation = set;
    }
}
export default Person