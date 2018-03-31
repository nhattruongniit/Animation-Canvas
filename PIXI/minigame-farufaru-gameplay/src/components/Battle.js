import {Container} from 'pixi.js';
import {TweenLite} from 'gsap';


/*============ Import components ===============*/
import Header from './Header';
import Camera from './Camera';
import Footer from './Footer';
import Status from './Status';
import HitArea from './HitArea';
import {gameplay} from '../store';




class Battle extends Container{
    constructor(props){
        super();
        this.setupActions();
        this.setup();
    }
    setupActions(){
        const actions = this.actions = {
            bossdead(){
                const speed = gameplay.speed;
                TweenLite.to(gameplay, 0.8, {speed: 100});
                TweenLite.to(gameplay, 0.8, {speed: speed, delay: 1});
            },
            end(state){
                if(!state) return;

            }
        };
        Object.entries(actions).forEach(([key,func]) => {
            actions[key] = func.bind(this);
        });
        gameplay
            .on('bossdead', actions.bossdead)
            .on('end', actions.end);
    }
    setup(){
        this.addChild(new Camera());
        this.addChild(new Header());
        this.addChild(new Footer());
        this.addChild(new Status());
        this.addChild(new HitArea());
    }

    destroy(child){
        super.destroy(child);
        gameplay
            .off('bossdead', this.actions.bossdead)
            .off('end', this.actions.end);
        this.sound.destroy(child);
    }
}
export default Battle;