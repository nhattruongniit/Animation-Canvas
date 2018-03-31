import {Ticker, Container, Shape, Bitmap} from 'createjs-module';

/*======================= Import Config ===========================*/
import {resources, gameplay, canvas, style} from '../../store';


import Skills from './Skills';

class Footer extends Container{
    constructor(){
        super()

        //this.setupActions();
        this.addGround();
        //this.applyActions();
    }

    
    // setupActions(){
    //     const actions = this.actions = {
    //         tick(event){
    //             //const deltaS = event.delta / 1000, {ground} = this;
    //             //ground.x = (ground.x - deltaS * gameplay.speed) % ground.tileW;
    //         },
    //         play(state){
    //             state ?
    //                 Ticker.addEventListener('tick', actions.tick):
    //                 Ticker.removeEventListener('tick',actions.tick);
    //         },
    //         removed(){
    //             Ticker.removeEventListener('tick',actions.tick);
    //             gameplay.off('change:play', actions.play);
    //         }
    //     }
    //     Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
    // }

    // applyActions(){
    //     gameplay
    //         .on('change:play', this.actions.play);
    //         //.on('change:'));

    //     this.on('removed', this.actions.removed);
    // }
    
    addGround(){
        const
            {background, engun} = resources.footer,
            {width,height} = background,
            ground = new Bitmap(background),
            engunGround = new Bitmap(engun)
        ;
        this.width = width;
        this.height = height;
        this.addChild(ground,engunGround);
        style.footer.engun.call(engunGround);

        //this.cache(0,0, width,height);
        



        const skills = new Skills();
        this.addChild(skills);
        style.footer.skills.call(skills);

        const  scale = canvas.width/width;
        Object.assign(this,{
            scaleX  : scale,
            scaleY  : scale,
            regY    : height,
            y       : canvas.height
        });
    }
}
export default Footer;