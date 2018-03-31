import {Container} from 'pixi.js';

import CountDead from './CountDead';
import TimeLine from './TimeLine';
import Boost from './Boost';

class Header extends Container{
    constructor(){
        super();
        this.setup();
    }
    setup(){
        this.addChild(this.countDead = new CountDead());
        this.addChild(this.boost = new Boost());
        this.addChild(this.timeLine = new TimeLine());
    }
}
export default Header;