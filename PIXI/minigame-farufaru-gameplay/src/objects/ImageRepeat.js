import {Shape} from 'pixi.js';


class ImageRepeat extends Shape{
    constructor(image, width, height){
        super();

        Object.defineProperties(this,{
            width:{
                get(){ return this.scaleX * this.naturalWidth},
                set(value){ this.scaleX = value / this.naturalWidth }
            },
            height:{
                get(){return this.scaleY * this.naturalHeight},
                set(value){ this.scaleY = value / this.naturalHeight }
            }
        });
        image && this.drawImage(image, width , height);
    }
    drawImage(image, width, height){
        width = width || image.width;
        height = height || image.height;

        this.graphics.beginBitmapFill(image).drawRect(0, 0, width, height);
        Object.assign(this,{
            naturalWidth: width,
            naturalHeight: height
        })
    }
} 
export default ImageRepeat;