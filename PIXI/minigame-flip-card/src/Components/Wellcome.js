import { Container, Graphics, Sprite, loader, utils } from "pixi.js";
import { TweenMax } from "gsap";

import Particle from 'pixi-particle';

class Wellcome extends Container {
    constructor(props) {
        super(props);
        this.props = props;
        loader
            .add('wellcome', props.images)
            .load(this.setup.bind(this));
    }

    setup() {
        this.textures = loader.resources.wellcome.textures;
        var { width, height } = this.props;
        //Praticle

        var particle = new Particle({
            width: width,
            height: height,
            num: 300,
            effect: 'Fallen',
            objects: [0x55476a, 0xae3d63, 0xdb3853, 0xf45c44, 0xf8b646, 0xffffff].map((color) => {
                var ga = new Graphics({
                    width: 15,
                    height: 15
                });


                ga.beginFill(color);
                ga.alpha = 1;
                //ga.drawCircle(10, 10, 10);

                ga.drawRect(0, 0, 15, 15);

                return ga;
            })
        });



        //Button Start
        var button = new Sprite(this.textures['play-button']);
        Object.assign(button, {
            interactive: true,
            buttonMode: true,
            anchor: { x: 0.5, y: 0.5 },
            scale: { x: 0.5, y: 0.5 },
            x: width / 2,
            y: height / 2
        });

        this.addChild(particle);
        this.addChild(button);


        this.on('startGame', e => {
            TweenMax.to(this, 0.5, {
                alpha: 0,
                onComplete: () => this.destroy()
            });
        })


        button
            .on('tap', e => this.emit('startGame'));

        //
    }
}

export default Wellcome;