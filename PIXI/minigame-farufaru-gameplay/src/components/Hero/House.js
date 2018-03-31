import {SpriteSheet} from '../../objects';
import {ticker,resources, gameplay} from '../../store';

function frames(){
    return Object.entries(resources.house).map(e => e[1]);
}

class House extends SpriteSheet{
    constructor(){
        super(frames());
        //this.addFrames();
        this.setupActions();
        //this.addSpritesheet();
        //this.applyActions();
    }
    setupActions(){
        const actions = this.actions = {
            play(state){
                state?
                    this.play():
                    this.stop();
            },
            speed(state){
                this.animationSpeed = this._textures.length/60 * (state/200);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
        gameplay
            .on('changed:play', actions.play)
            .on('changed:speed', actions.speed);
            actions.play(gameplay.play);
            actions.speed(gameplay.speed);
    }
    addSpritesheet(){
        let index = 0, anims = this.animations = {};
        const imgs = Object.entries(resources.house).map(([key,image]) => {
            const name = key.replace(/\-[0-9]+$/,'');
            let anim = anims[name] = anims[name] || {frames:[]};
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

    destroy(child){
        super.destroy(child);
        gameplay
            .off('changed:speed', this.actions.speed)
            .off('changed:play', this.actions.play);
    }
}
export default House