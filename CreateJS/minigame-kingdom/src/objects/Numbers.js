import {Container, Shape, Bitmap, Graphicsm, Tween} from 'createjs-module';

import {resources, canvas} from '../store';

class Number extends Container{
    constructor(value){
        super();
        value = value || 0;
        Object.defineProperties(this,{
            value: {
                get(){ return value },
                set(newValue){
                    if(newValue === value) return;
                    value = newValue;
                    this.updateValue();
                }
            }
        });

        const 
            imgs = resources.number,
            ground = this.ground = new Shape(),
            {width,height} = imgs['num-0']
            ;
        this.width = width;
        this.height = height;
        this.addChild(ground);

        for(var i = 0; i < 11; i++){
            const img = imgs['num-'+i%10];
            ground.graphics.beginBitmapFill(img).drawRect(0, height * i, width, height);
        }
        ground.cache(0,0,width,height * 11);
        ground.tween = Tween.get(ground);
        this.addChild(ground);

        const mask = new Shape();
        mask.graphics.f("#000").drawRect(0,0,width, height);
        mask.cache(0,0,width,height);
        //this.mask = mask;
        //this.addChild(mask)
1
        this.updateValue();
    }

    updateValue(){
        this.uncache();
        this.ground.y = -this.value * this.height;
        // Tween.get(this.ground).to({y: -this.value * this.height},300).call(e=>{

        //     this.cache(0,0,this.width,this.height);
        // });
        this.cache(0,0,this.width,this.height);
        return;
        const imgs = resources.number;
        const img = imgs['num-'+this.value];

        this.width = img.width;
        this.height = img.height;

        this.ground.graphics.clear();
        this.ground.graphics.beginBitmapFill(img).drawRect(0,0,this.width,this.height);
        //this.ground.cache(0,0,this.width,this.height);
    }
}

class Numbers extends Container{
    constructor(value, length){
        super();
        value = 0 || 0;
        var floatRight;
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
            },
            floatRight: {
                get(){ return floatRight},
                set(value){ 
                    floatRight = value;
                    this.updateFloatRight();
                }
            }
        });
        this.length = length;
        this.updateValue();
    }

    updateValue(){
        const numStrs = String(this.value).split(''), {children} = this;
        var length = this.length;
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
        this.updateFloatRight();
    }

    updateFloatRight(){
        if(typeof this.floatRight === 'number'){
            const allWidth = this.children.length * this.children[0].width * this.scaleX;
            this.x = canvas.width - allWidth - this.floatRight;
        }
    }
}
export default Numbers