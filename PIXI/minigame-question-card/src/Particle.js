import { Application, Sprite, Graphics, particles, Texture, ticker } from 'pixi.js';

class Particle extends Graphics {
    constructor(props) {
        super(props);
        props = Object.assign({}, Particle.default, props);
        if (!props.objects.length) return;
        this.props = props;
        this.hookRenderer();
        this.on('hookRenderer', (renderer) => {
            this.convertTexture(renderer);
            this.setup();
        });
    }

    hookRenderer() {
        ['renderWebGL'].forEach((key) => {
            var native = this[key];
            this[key] = function() {
                var renderer = arguments[0];
                this[key] = native;
                this[key].apply(this, arguments);
                this.emit('hookRenderer', renderer);
            }
        });
    }

    convertTexture(renderer) {
        this.textures = this.props.objects.map(object => renderer.generateTexture(object));
    }

    setup() {
        this.setupTicker();
        this.addParticle(this.props.num);
    }

    setupTicker() {
        var This = this;
        var tick = function() { This.emit('tick') };
        this.parent && ticker.shared.add(tick);
        this.on('added', () => ticker.shared.add(tick));
        this.on('removed', () => ticker.shared.remove(tick));
    }

    setupEffect(sprites) {
        var effects = Particle[this.props.effect] || Particle.Fallen;
        var tickers = sprites.map(sprite => effects.call(this, sprite));
        this.on('tick', () => tickers.forEach(ticker => ticker()));
    }

    createParticle() {
        var textures = this.textures,
            index = Math.floor(Math.random() * (textures.length - 1)),
            sprite = new Sprite(textures[index]);

        return sprite;
    }

    addParticle(num) {
        var sprites = [],
            sprite;
        for (let i = 0; i < num; i++) {
            sprites.push(sprite = this.createParticle());
            this.addChild(sprite);
        }
        this.setupEffect(sprites);
        return sprites;

    }

    random(min, max) {
        return min + (Math.random() * (max - min));
    }
}

Particle.default = {
    num: 50,
    objects: [],
    speed: 5,
    effect: 'Fallen'
}

Particle.Fallen = function(sprite) {
    var random = this.random;
    var { width, height, speed } = this.props;
    var xPos = 0,
        shake = 0;
    var start, skew, absShake;
    var draw, onDraw;
    var timeOut, timeInterval;
    var fNull = () => {};

    onDraw = draw = fNull;
    sprite.visible = false;
    sprite.anchor.set(0.5);


    var reset = () => {
        start = random(1, 3);
        reEfect();
        sprite.scale.set(start / 3);

        Object.assign(sprite, {
            x: xPos > 0 ? random(-xPos * height / 2, width) : random(0, width - xPos * height / 2),
            y: -sprite.height
        });
    }

    var reEfect = () => {
        skew = {
            x: random(0, 0.05),
            y: random(0, 0.05)
        };

        var newShake = random(-1, 1);
        onDraw = () => {
            shake += ((newShake - shake) / 16);
            absShake = Math.abs(shake);

            if (shake >= newShake) {
                shake = newShake;
                onDraw = fNull;
            }
        }
    }


    timeOut = setTimeout(() => {
        draw = () => {
            onDraw();
            if (sprite.y >= height + sprite.height) reset();
            sprite.x += shake + xPos;
            sprite.y += start - absShake;
            sprite.skew.x += skew.x;
            sprite.skew.y += skew.y;
        }
        sprite.visible = true;
        reset();
        timeInterval = setInterval(reEfect, 2000);

    }, random(0, 5000));
    this.on('remove', sprite => {
        draw = fNull;
        clearTimeout(timeOut);
        clearInterval(interVal);
    })
    return () => draw();
}

Particle.Rain = function(sprite) {
    var
        random = this.random,
        xpos = 0,
        { width, height, speed } = this.props;

    var x, y, s, velY, life, isDrop, xS;

    sprite.visible = false;

    var reset = () => {
        s = random(3, 9);
        sprite.scale.set(s / 9);
        x = xpos < 0 ? random(0, width - xpos * height - 100) : random(-xpos * height - 100, width);
        y = -sprite.height;
        velY = 2;
        life = 30;
        isDrop = true;
        xS = random(0.05, 0.15)

        Object.assign(sprite, {
            x: x,
            y: y
        });

    }
    var draw = () => {};
    setTimeout(() => {
        draw = (function() {

            if (sprite.y + sprite.height >= height) {
                isDrop = false;
            }

            if (isDrop) {
                sprite.y += s - s * xS * speed;
                sprite.x += s * xpos;
            } else {
                sprite.scale.x -= sprite.scale.x / 15;
                sprite.scale.y -= sprite.scale.y / 10 * speed;
                sprite.y -= velY * s / 6;
                life--;
                sprite.x += xS * s * xpos;
                velY -= 0.13;
                if (life <= 0) reset();
            }
        }).bind(sprite);
        sprite.visible = true;
        reset();
    }, random(0, 5000));

    return () => draw();
}


export default Particle;