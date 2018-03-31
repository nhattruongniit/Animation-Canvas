import {canvas, resources} from './index';

const style = {
    header: {
        timeline(){
            Object.assign(this,{
                width: canvas.width - 100,
                x: 50,
                y: 70,
                iconScale: 0.5
            });
        },
        countDead(){

        }
    },
    footer: {
        engun(){
            const
                {width, height} = this.getBounds(),
                pBounds = this.parent.getBounds()
                ;
            Object.assign(this,{
                regX    : width /2,
                regY    : height,
                y       : pBounds.height,
                x       : pBounds.width/2
            });
        },
        skills(){
            const
                bounds = this.getBounds(),
                {width,height} = this.parent,
                x = width * 0.042,
                y = height * 0.075,
                toW = width - 2 * x,
                toH = height - y - height * 0.25
            ;
            Object.assign(this,{
                x   : x,
                y   : y,
                scaleX  : toW / bounds.width,
                scaleY  : toH / bounds.height
            });
        }
    },
    battle: {
        enemy(){
            this.y = canvas.height * 0.3;
            this.height = canvas.height * 0.5;
            this.alpha = 0.2;
        }
    }
}
export default style