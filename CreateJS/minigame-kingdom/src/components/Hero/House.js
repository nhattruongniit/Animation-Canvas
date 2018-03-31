import {Sprite, SpriteSheet} from 'createjs-module';


import {resources, gameplay} from '../../store';

class House extends Sprite{
    constructor(){
        super();
        this.setupActions();
        this.addSpritesheet();
        this.applyActions();
    }


    setupActions(){
        const actions = this.actions = {
            play(state){
                state?
                    this.gotoAndPlay('run'):
                    this.gotoAndStop('stand');
            },
            speed(state){
                this.spriteSheet.framerate = this.animations.run.frames.length * (state / 80);
            },
            removed(){
                gameplay
                    .off('change:speed', actions.speed)
                    .off('change:play', actions.play);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
    }

    applyActions(){
        gameplay
            .on('change:play', this.actions.play)
            .on('change:speed', this.actions.speed);
            //.on('change:'));

        this.on('removed', this.actions.removed);
    }
    addSpritesheet(){
        var index = 0, anims = this.animations = {};
        const imgs = Object.entries(resources.house).map(([key,image]) => {
            const name = key.replace(/\-[0-9]+$/,'');
            var anim = anims[name] = anims[name] || {frames:[]};
            anim.frames.push(index);

            index++;
            return image;
        });
        
        const {width, height} = imgs[0];
        const sheet = this.spriteSheet = new SpriteSheet({
            images: imgs,
            frames: {
                width   : width,
                height  : height
            },
            animations: anims
        });
        this.actions.speed(gameplay.speed);
        this.actions.play(gameplay.play);
    }
}
export default House