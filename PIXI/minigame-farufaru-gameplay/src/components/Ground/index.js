import {Container, extras} from 'pixi.js';

/*======================= Import Config ===========================*/
import {canvas, gameplay, resources, map} from '../../store';

class Ground extends Container{
    constructor(){
        super();
        this.addGround();
        this.setupAction();
    }
    setupAction(){
        const actions = this.actions = {
            camera(state){
                this.ground.x = state.x;
                this.ground.tilePosition.x = -state.x/this.ground.scale.x;
            }
        }
        Object.entries(actions).forEach(([key,func]) => {
            actions[key] = func.bind(this);
        });
        gameplay.on('changed:camera', actions.camera);
    }
    addGround(){
        const
            imgs = Object.values(resources.ground),
            image = imgs[~~Math.range(0, imgs.length)],
            scale = canvas.height/image.height,
            ground = this.ground = new extras.TilingSprite(image, canvas.width/scale, image.height);
            ground.scale.x = ground.scale.y = scale;
        this.addChild(ground);
    }
    destroy(child){
        gameplay.on('changed:camera', this.actions.camera);
        super.destroy(child);
    }
} 
export default Ground;