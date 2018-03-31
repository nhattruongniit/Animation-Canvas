import {extras} from 'pixi.js';

class SpriteSheet extends extras.AnimatedSprite{
    constructor(frames, autoUpdate){
        super(frames, autoUpdate);
        
        this.onFrameChange = function(frame){
            this.emit('framechange',frame);
        }

        this.onComplete = function(frame){
            this.emit('complete',frame);
        }
    }
}
export default SpriteSheet;