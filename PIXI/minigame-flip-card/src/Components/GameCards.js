import { Container, utils } from 'pixi.js';
import { TweenMax } from "gsap";
import Card from './Card';

class GameCards extends Container {
    constructor(props) {

        props = Object.assign({
            cards: [],
            space: 10,
            grid: 2,
            width: 300,
            cardRatio: 1.5,
            waitTime: 2000
        }, props);
        super(props);
        this.props = props;
        this.state = { opened: [], success: [], fails: [] };
        this.setup(props);

        // this.beginFill(0x000);
        // this.alpha = 1;
        // this.drawRect(0, 0, this.width, this.height);
    }

    setup() {
        this.createCards();
        this.setupCardEvents();
        this.setupEvents();
        //this.begin();
    }

    createCards() {
        var cards = this.props.cards.slice(0);
        const { grid, space, cardRatio, cardBack } = this.props;
        var
            allSpace = space * (grid - 1),
            allWidth = this.props.width - allSpace,
            width = allWidth / grid,
            height = width * cardRatio,
            row = -1;



        cards.concat(cards)
            .sort(card => {
                return Math.floor(Math.random() * 10) % 2 === 1;
            })
            .map(texture => {
                const card = new Card({
                    card: texture,
                    back: cardBack,
                    width: width,
                    height: height,
                    sound: this.props.soundFlip
                });

                card.ID = texture.cardID;
                return card;
            }).forEach((card, index) => {
                const column = (index % grid);
                if (column === 0) row++;

                Object.assign(card, {
                    x: column * (width + space),
                    y: row * (height + space)
                });

                this.addChild(card);
            });
    }

    setupCardEvents() {
        var openCard;

        this.children.forEach(card => card.on('open', () => {
            if (openCard) {
                this.emit(card.ID === openCard.ID ? 'flipPass' : 'flipFail', card, openCard);
                openCard = undefined;
            } else {
                openCard = card;
            }
        }));
    }
    setupEvents() {
        const { props, state, children } = this;

        this
            .on('flipPass', (card, openCard) => {
                state.success.push([card, openCard]);
                state.success.length === children.length / 2 && card.once('opened', () => this.emit('success'));
            })
            .on('flipFail', (card, openCard) => {
                state.fails.push([card, openCard]);
                card.once('opened', () => setTimeout(() => card.emit('close') && openCard.emit('close'), 100));
            })
            .on('added', () => {
                TweenMax.staggerFrom(children.slice(0).reverse(), 0.3, {
                        y: "-=600",
                        alpha: 0
                    }, 0.04)
                    .pop().eventCallback('onComplete', () => setTimeout(() => this.emit('start'), props.waitTime));
            })
            .on('start', () => {
                children.forEach((card, index) => card === state.opened[index] || card.emit('close'));
            })
            .on('success', () => this.emit('end'))
            .on('cancel', () => this.emit('end'))
            .on('end', () => {
                TweenMax.staggerTo(children.slice(0).reverse(), 0.3, {
                        y: "+=600",
                        alpha: 0
                    }, 0.04)
                    .pop().eventCallback('onComplete', () => this.emit('ended'));
            })
            .on('ended', () => this.destroy());
    }
}

export default GameCards;