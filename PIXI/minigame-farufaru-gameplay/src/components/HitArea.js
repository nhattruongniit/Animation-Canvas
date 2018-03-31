import {Container, Rectangle} from 'pixi.js';
import {canvas,map,gameplay} from '../store';
import { TweenLite } from 'gsap';
 

import config from 'farufaru-config';

class HitArea extends Container{
    constructor(){
        super();
        this.hitArea = new Rectangle(0, canvas.height * 0.3, canvas.width, gameplay.lanceHeight * map.lances);
        this.buttonMode = true;
        this.interactive = true;
        this.on('pointerdown', this.onTouch.bind(this));
    }
    onTouch(e){
        const
            point = e.data.global,
            y = point.y - canvas.battle.y,
            toLance = ~~(y / gameplay.lanceHeight)
        ;
        this.goto(toLance);
    }

    goto(toLance){
        this.tween && this.tween.kill();
        this.tween = TweenLite.to(gameplay,Math.abs(toLance - gameplay.lance) * config.changeLanceDuration,{lance: toLance});
    }
}

export default HitArea;