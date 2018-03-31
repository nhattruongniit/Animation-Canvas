import { Container, Text, TextStyle, ticker } from "pixi.js";

class TimeCounter extends Container {
    constructor(props) {
        super(props);
        this.state = {};
        this.setup();
    }


    setup() {
        this.createText();
        this.setupEvents();
        this.reset();

    }

    createText() {
        this.text = new Text('0', new TextStyle({
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
        }));
        this.addChild(this.text);


    }

    now() { return new Date().getTime(); }

    setupEvents() {
        const { state, props } = this;
        this.ticker = this.update.bind(this);

        this
            .on('start', () => {
                state.start = this.now();
                ticker.shared.add(this.ticker);
            })
            .on('pause', () => {
                if (!state.start) return;
                var now = this.now();
                state.limit -= now - state.start;
                delete state.start
                ticker.shared.remove(this.ticker);
            })
            .on('stop', () => {
                this.reset();
                ticker.shared.remove(this.ticker)
            })
    }

    reset() {
        const { state, props } = this;
        state.limit = 0;
        this.text.text = 0;
        delete state.start;
        ticker.shared.remove(this.ticker);
    }

    addTime(second) {
        this.state.limit += second * 1000;
        this.update();
    }

    update() {
        const { state } = this, now = this.now();
        var time = (state.limit - (now - (state.start || now))) / 1000;
        time <= 0 && this.emit('overtime') && (time = 0);
        this.text.text = "Time: " + time.toFixed(1);
    }
}

export default TimeCounter;