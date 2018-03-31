import {Container, Sprite} from 'pixi.js';

/*======================= Import Config ===========================*/
import {resources, gameplay, canvas, style} from '../../store';


import Skills from './Skills';

class Footer extends Container{
    constructor(){
        super()

        this.addGround();
    }
    
    addGround(){
        const
            {background, engun} = resources.footer,
            {width,height} = background,
            ground = new Sprite(background),
            engunGround = new Sprite(engun)
        ;
        engunGround.anchor.set(0.5,1);
        engunGround.y = ground.height;
        engunGround.x = ground.width/2;
        this.addChild(ground,engunGround);

        const skills = new Skills();
        skills.scale.set(.923*this.width/skills.width, .68*this.height/skills.height);
        skills.x = this.width * .042;
        skills.y = this.height * .08;

        this.addChild(skills);


        this.scale.set(canvas.width/ground.width);
        this.y = canvas.height;
        this.pivot.y = ground.height;
        
        



        

        // const  scale = canvas.width/width;
        // Object.assign(this,{
        //     scaleX  : scale,
        //     scaleY  : scale,
        //     regY    : height,
        //     y       : canvas.height
        // });
    }
}
export default Footer;