import {Ticker, Container, Shape, Timeline} from 'createjs-module';

import {resources, gameplay} from '../../store';

import CountDead from './CountDead';
import TimeLine from './TimeLine';

class Header extends Container{
    constructor(){
        super();
        this.setup();
    }
    setup(){
        this.addChild(this.countDead = new CountDead());
        this.addChild(this.timeLine = new TimeLine());
    }
}
export default Header;