import {Ticker, Container, Shape} from 'createjs-module';

class Skills extends Container{
    constructor(){
        super();
        this.setup();
    }

    setup(){

        const shape = new Shape();
        shape.graphics.beginFill('#ff0').drawRect(0,0,1000,300);
        shape.cache(0,0,1000,300);
        this.addChild(shape);
    }
}
export default Skills;