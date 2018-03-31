import {Container} from 'pixi.js';

import Start from './Start';
import BossDead from './BossDead';
import Attack from './Attack';
import Skill from './Skill';

class Status extends Container{
    constructor(){
        super();
        this.addUI();
    }
    addUI(){
        this.addChild(new Start());
        this.addChild(new Attack());
        this.addChild(new Skill());
        this.addChild(new BossDead());
    }
}
export default Status;