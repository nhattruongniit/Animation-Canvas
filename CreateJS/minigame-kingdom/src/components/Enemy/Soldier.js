import {Container, Shape} from 'createjs-module';

class Soldier extends Container{
    constructor(config){
        super()
        this.config = config;


        const shape = new Shape();
        shape.graphics.beginFill('#ff0').drawCircle(0,0,10);
        shape.cache(-10,-10,20,20);
        this.addChild(shape);
    }
}

export default Soldier;