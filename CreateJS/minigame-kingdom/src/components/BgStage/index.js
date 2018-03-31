import {Ticker, Container, Shape} from 'createjs-module';

import {ImageRepeat} from '../../objects';

/*======================= Import Config ===========================*/
import {canvas, gameplay, resources} from '../../store';

class BackgroundStage extends Container{
    constructor(){
        super();


        this.mouseEnabled = false;
        this.setupActions();
        this.addGround();
        this.applyActions();
    }

    setupActions(){
        const actions = this.actions = {
            camera(state){
                const {ground} = this;
                ground.x = Math.floor(state.x / ground.tileW) * ground.tileW;
            },
            removed(){
                //Ticker.removeEventListener('tick',actions.tick);
                gameplay.off('change:camera', actions.camera);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
    }

    applyActions(){
        gameplay
            .on('change:camera', this.actions.camera);
            //.on('change:'));

        this.on('removed', this.actions.removed);
    }
    
    addGround(){
        const
            imgs = Object.values(resources['bg-stage']),
            image = imgs[~~Math.range(0, imgs.length)],
            scale = canvas.height/image.height,
            ground = this.ground = new ImageRepeat(image,canvas.width / scale + image.width);
        ground.tileW = image.width * scale;
        ground.scaleX = ground.scaleY = scale;
        ground.cache(0, 0, ground.naturalWidth, ground.naturalHeight);

        this.addChild(ground);
    }

    
} 
export default BackgroundStage;