import { Container, Container, Graphics, Sprite, loader, utils, Text, TextStyle } from "pixi.js";
import { TweenMax, TweenLite } from "gsap";

import Particle from 'pixi-particle';

class Summary extends Container {
    constructor(props) {
        super(props);
        this.props = props;
        loader
            .add('summary', props.images)
            .load(this.setup.bind(this));
    }

    setup() {
        this.textures = loader.resources.wellcome.textures;
        var { width, height } = this.props;
        //Praticle

        var particle = new Particle({
            width: width,
            height: height,
            num: 200,
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


        var style = {
            fontFamily: 'Arial',
            fontSize: 20,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440
        };


        var txtFail = this.txtFail = new Text('0', new TextStyle(style));
        var txtPass = this.txtPass = new Text('0', new TextStyle(style));
        var txtBest = this.txtBest = new Text('0', new TextStyle(Object.assign(style, { fontSize: 30 })));


        txtFail.x = txtPass.x = 50;
        txtFail.y = 100;
        txtPass.y = 150;

        txtBest.anchor.set(0.5, 0.5);
        txtBest.x = width / 2;
        txtBest.y = height / 2 + 70;


        this.addChild(txtFail);
        this.addChild(txtPass);
        this.addChild(txtBest);



        //Button Start
        var button = this.button = new Sprite(this.textures['play-button']);
        Object.assign(button, {
            interactive: true,
            buttonMode: true,
            anchor: { x: 0.5, y: 0.5 },
            scale: { x: 0.5, y: 0.5 },
            x: width / 2,
            y: height / 2
        });

        this.addChild(button);
        this.addChild(particle);

        this.emit('ready');
        //
    }

    reset() {
        Object.assign(this, {
            alpha: 1
        })

        this.button.once('tap', () => {
            TweenLite.to(this, 0.5, { alpha: 0, onComplete: () => this.emit('retry') });
        });
    }

    update(state) {
        if (!this.textures) return this.once('ready', () => this.update(state));
        state.bestScore = state.bestScore || parseInt(window.localStorage['minigame-flipcards']) || 0;
        if (state.bestScore < state.score) {
            window.localStorage['minigame-flipcards'] = state.bestScore = state.score;
        }

        this.reset();
        this.txtFail.text = "Failed: " + state.countFails;
        this.txtPass.text = "Passed: " + state.countSuccess;
        this.txtBest.text = "Best score: " + state.bestScore;
    }
}

export default Summary;