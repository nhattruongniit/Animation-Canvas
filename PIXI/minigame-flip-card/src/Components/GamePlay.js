import { Application, Graphics, Container, Sprite, loader, utils, Text, TextStyle, sound } from 'pixi.js';
import { TweenMax, Power2, TimelineLite } from "gsap";
import 'pixi-sound';
import 'gsap-object';

import Particle from 'pixi-particle';
import GameCards from './GameCards';
import TimeCounter from './TimeCounter';
import LevelSettings from './LevelSettings';


class GamePlay extends Container {
    constructor(props) {
        props = Object.assign({}, GamePlay.default, props);
        super(props);
        this.props = props;
        this.state = {}
        loader
            .add('cards', props.cards)
            .add('backgrounds', props.backgrounds)
            .add('flipCard', props.audios)
            .load(this.setup.bind(this));
    }

    setup(loader, resources) {
        this.setupSounds();

        Object.entries(resources.cards.textures).forEach(el => { el[1].cardID = el[0] });
        this.bgCached = resources.backgrounds.textures;
        this.cardTextures = Object.values(resources.cards.textures);
        this.createParticle();
        this.createLevelView();
        this.createScore();
        this.createTimeCouter();
        this
            .on('newgame', this.onNewGame.bind(this))
            .on('summary', () => {})
            .on('begin', () => {
                Object.assign(this.state, { countSuccess: 0, countFails: 0, score: 0 });
                this.setLevel(this.props.level);
                this.emit('newgame')
            });;

        this.props.autoPlay && this.emit('begin');
        //this.emit('ready');
    }

    setupSounds() {
        this.sounds = {
            flipCard: loader.resources.flipCard.sound
        }
        Object.assign(this.sounds.flipCard.sprites, {
            open: { start: 0, end: 0.217 },
            close: { start: 0.217, end: 0.589 }
        });
        sound.add('background', {
            url: 'assets/sprites/background.wav',
            loop: true
        });
        this
            .on('begin', () => {
                sound.volume('background', 0.5)
                sound.play('background');
            })
            .on('summary', () => {
                TweenMax.to({ vol: 0.5 }, 1, {
                    vol: 0,
                    onUpdate: function() {
                        sound.volume('background', this.target.vol);
                    },
                    onComplete: () => sound.stop('background')
                })

                //sound.stop('background')
            });
    }

    createParticle() {
        const { width, height } = this.props;
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

        this.addChild(particle);
    }

    createLevelView() {
        this.textStyle = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 16,
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
        });
        var view = this.levelView = new Text('Level: 1', this.textStyle);
        Object.assign(view, {
            x: 10,
            y: 10
        });
        this.addChild(view);
    }

    createScore() {
        var score = this.score = new Text("Score: 0", this.textStyle),
            { state } = this,
            scoreNum = 0;
        Object.assign(score, {
            x: 120,
            y: 10
        });
        this.addChild(score);
        var animScore = () => TweenMax.to({ score: scoreNum }, 1, {
            score: state.score,
            onUpdate: function() { score.text = "Score: " + Math.round(scoreNum = this.target.score); }
        });
        this.on('newgamecards', gameCards => {
            gameCards
                .on('flipPass', () => {
                    state.score += (state.levelIndex + 1) * 10;
                    animScore();
                })
                .on('flipFail', () => {
                    state.score -= 10;
                    animScore();
                })
        }).on('begin', () => score.text = 'Score: 0');
    }

    createTimeCouter() {
        var counter = this.timeCouter = new TimeCounter();
        Object.assign(counter, {
            x: this.props.width - 100,
            y: 10
        })

        this.addChild(counter);
        counter
            .on('overtime', () => {
                const { gameCards, state } = this;
                state.countFails += gameCards.state.fails.length;
                state.countSuccess += gameCards.state.success.length;
                gameCards
                    .once('ended', () => this.emit('summary', this.state))
                    .emit('cancel');
            });

        this.on('newgamecards', (gameCards) => {
            const { state } = this;
            counter.addTime(state.level.time);
            gameCards
                .on('flipPass', () => {
                    if (gameCards.props.cards.length === gameCards.state.success.length) {
                        counter.emit('pause');
                    }
                })
                .on('start', () => counter.emit('start'))
                .on('pause', () => counter.emit('pause'))
                .on('success', () => counter.emit('pause'))
                .on('cancel', () => counter.emit('stop'))
        }).on('begin', () => this.timeCouter.reset());
    }

    setLevel(level) {
        if (!LevelSettings[level]) {
            if (!this.props.while) { return false }
            var lv = this.state.level;
            lv.time -= 2;
            lv.time = lv.time < 0 ? 0 : lv.time;
        } else {
            this.state.level = LevelSettings[level];
        }

        this.state.levelIndex = level;
        this.levelView.text = 'Level: ' + (level + 1);
        return true;
    }

    onNewGame() {
        const { state, props, sounds } = this;
        const { width, height } = props;
        const cards = this.getCards();


        var gameCards = this.gameCards = new GameCards({
            cards: cards,
            width: props.width - 80,
            cardBack: this.bgCached['bg-card'],
            waitTime: state.level.wait * 1000 || 2000,
            soundFlip: sounds.flipCard,
            grid: this.getGrid({
                width: width - 80,
                height: height - 80
            }, cards.length)
        });

        Object.assign(gameCards, {
            x: width / 2,
            y: height / 2
        });
        gameCards.pivot.set(gameCards.width / 2, gameCards.height / 2);
        this.addChild(gameCards);



        gameCards
            .on('success', () => {
                state.countFails += gameCards.state.fails.length;
                state.countSuccess += gameCards.state.success.length;
                var setlv = this.setLevel(state.levelIndex + 1);
                gameCards.once('ended', () => {
                    if (setlv) this.emit('newgame');
                    else this.emit('summary');
                });
            });
        this.emit('newgamecards', gameCards)
    }

    getGrid(size, countItem) {
        return this.state.level.grid;
    }


    getCard(cards) {
        const index = Math.floor((Math.random() * (cards.length - 1)));
        return cards.splice(index, 1);
    }

    getCards() {
        var
            level = this.state.level,
            count = level.cards,
            cards = this.cardTextures.slice(0);
        count = count > cards.length ? cards.length : count;
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr = arr.concat(this.getCard(cards));
        }

        if (level.clone) {
            var arrClone = arr.slice(0);
            for (var i = 0; i < level.clone; i++) {
                arr = arr.concat(this.getCard(arrClone));
            }
        }

        return arr;
    }
}

GamePlay.default = {
    level: 0,
    backgroundColor: 0x1099bb,
    transparent: true,
    autoPlay: false,
    while: true
}

export default GamePlay;