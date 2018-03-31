import {Container,Sprite,extras} from 'pixi.js';
import {resources, canvas} from '../store';

let numbersImg = function(){
    const 
        imgs = resources.number,
        cache = {
            width: imgs['num-0'].width,
            height: imgs['num-0'].height,
        },
        container = new Container()
    ;

    for(let i = 0; i < 10; i++){
        const 
            img = imgs['num-'+i],
            sprite = new Sprite(img)
        ;
        sprite.y = cache.height * i;
        container.addChild(sprite);
    }

    cache.texture = canvas.renderer.generateTexture(container);

    numbersImg = function(){
        return cache;
    }
    return numbersImg();
}

class Number extends extras.TilingSprite{
    get value(){return this._value}
    set value(value){ this.updateValue(value); this._value = value}


    constructor(value){
        const img = numbersImg();
        super(img.texture, img.width, img.height);
        this._value = value || 0;

        // Object.defineProperties(this,{
        //     value: {
        //         get(){ return value },
        //         set(newValue){
        //             if(newValue === value) return;
        //             value = newValue;
        //             this.updateValue(newValue);
        //         }
        //     }
        // });

        //this.updateValue(0);
    }

    updateValue(value){
        this.tilePosition.y = -this.height * value;
        this._value = value;
    }
}

class Numbers extends Container{
    constructor(value, length){
        super();
        value = 0 || 0;
        let floatRight;
        Object.defineProperties(this,{
            value: {
                get(){ return value },
                set(newValue){
                    if(newValue === value) return;
                    value = newValue;
                    this.updateValue();
                }
            },
            lineHeight: {
                get(){ return this.scaleY * this.children[0].height },
                set(value){
                    this.scaleX = this.scaleY = value / this.children[0].height;
                }
            }
        });
        this.length = length;
        this.updateValue();
    }

    updateValue(){
        const numStrs = String(this.value).split(''), {children} = this;
        let length = this.length;
        length = typeof length === 'number'?length:numStrs.length;

        while(children.length !== length){
            if(children.length < length){
                this.addChild(new Number(0));
            }else{
                this.removeChildAt(children.length - 1);
            }
        }
        numStrs.reverse().forEach((num, i) => {
            if(children[i]) children[i].value = parseInt(num);
        });
        
        children.slice(0).reverse().forEach((num,i) => {
            num.x = i * num.width;
        });
    }
}
export default Numbers