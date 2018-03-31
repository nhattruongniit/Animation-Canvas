//import React from 'react';
//import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import { Application, DisplayObject } from 'pixi.js';
import GamePlay from './Components/GamePlay';
import Wellcome from './Components/Wellcome';
import Summary from './Components/Summary';
import './Components/External';


class Game extends Application {
    constructor(props) {
        const { innerWidth, innerHeight, devicePixelRatio } = window;
        props = Object.assign({
            width: innerWidth, // default: 800
            height: innerHeight, // default: 600
            antialias: true, // default: false
            transparent: true, // default: false
            resolution: devicePixelRatio || 1
        }, props);
        super(props);
        this.props = props;

        this.setup();
    }

    setup() {
        const { width, height } = this.props;

        const wellcome = this.wellcome = new Wellcome({
            images: 'assets/sprites/wellcome.json',
            width: width,
            height: height
        });
        this.stage.addChild(wellcome);

        wellcome.on('startGame', () => {
            var game = this.gamePlay = new GamePlay({
                    width: width, // default: 800
                    height: height, // default: 600
                    cards: 'assets/sprites/cards.json',
                    backgrounds: 'assets/sprites/backgrounds.json',
                    audios: 'assets/sprites/flip-card.wav',
                    autoPlay: true,
                    level: 0
                }),
                summary;

            this.stage.addChildAt(game, 0);

            game.on('summary', (state) => {
                if (!summary) {
                    summary = this.summary = new Summary({
                        images: 'assets/sprites/wellcome.json',
                        width: width,
                        height: height
                    });
                    this.stage.addChild(summary);
                }

                summary.visible = true;
                summary.update(state);
                summary.once('retry', () => {
                    summary.visible = false;
                    game.emit('begin');
                });
            });
        });

    }
}
window.FlipCards = Game;
export default Game;