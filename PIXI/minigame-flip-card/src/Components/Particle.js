import { Application, Container, Graphics, Sprite, loader, utils, RenderTexture, Texture, ticker } from 'pixi.js';
import { TweenMax, Power2, TimelineLite } from "gsap";


class Particle extends Graphics {
    constructor(props) {
        props = Object.assign({}, Particle.default, props);
        super(props);
        if (!props.objects.length) return;
        this.props = props;

        // this.beginFill(0xfff000);
        // this.alpha = 1;
        // this.drawRect(10, 10, props.width - 20, props.height - 20);

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
        this.add(this.props.num);
    }

    setupTicker() {
        var This = this;
        var tick = function() { This.emit('tick') };
        this.parent && ticker.shared.add(tick);
        this.on('added', () => ticker.shared.add(tick));
        this.on('removed', () => ticker.shared.remove(tick));
    }

    setUpEffect(sprites) {
        var effect = Particle[this.props.effect] || Particle.Fallen;
        var tickers = sprites.map(sprite => effect.call(this, sprite));
        this.on('tick', () => tickers.forEach(ticker => ticker()));
    }

    createSprite() {
        var textures = this.textures,
            index = Math.floor((Math.random() * (textures.length - 1))),
            sprite = new Sprite(textures[index]);
        return sprite;
    }

    range(a, b) { return (b - a) * Math.random() + a }

    add(num) {
        var sprites = [],
            sprite;
        for (var i = 0; i < num; i++) {
            sprites.push(sprite = this.createSprite());
            this.addChild(sprite);
        }
        this.setUpEffect(sprites);
        return sprites;
    }

    remove(num) {
        return this.children.slice(0, num).map(sprite => {
            this.emit('remove', sprite);
            sprite.destroy();
            //sprite.emit('destroy');
        });
    }
}

Particle.default = {
    num: 200,
    objects: [],
    speed: 1,
    effect: 'Fallen'
};

Particle.Starfall = function(sprite) {
    var
        range = this.range,
        xpos = 0.5,
        { width, height, speed } = this.props;

    var r = ~~range(2, 6),
        r2 = 2 * r;

    var replace = (function() {
        Object.assign(this, {
            alpha: 0,
            dop: 0.03 * range(1, 4),
            x: range(-r2, width - r2),
            y: range(-20, height - r2),
            xmax: width - r,
            ymax: height - r,
            vx: range(0, 2) + 8 * xpos - 5,
            vy: 0.7 * r + range(-1, 1)

        });
        this.scale.set(range(0.5, 1));
    }).bind(sprite);

    var draw = (function() {
        var ref;
        this.x += this.vx * speed;
        this.y += this.vy * speed;
        this.alpha += this.dop * speed;
        if (this.alpha > 1) {
            this.alpha = 1;
            this.dop *= -1;
        }
        if (this.alpha < 0 || this.y > this.ymax) {
            replace();
        }
        if (!((0 < (ref = this.x) && ref < this.xmax))) {
            this.x = (this.x + this.xmax) % this.xmax;
        }
        //return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
    }).bind(sprite);
    replace();
    return draw;
}


Particle.Fallen = function(sprite) {
    var
        range = this.range,
        xpos = 0,
        { width, height, speed } = this.props;

    var s, skew, shake = 0,
        absShake, fNull = () => {},
        onDraw, draw;

    onDraw = draw = fNull;

    sprite.visible = false;
    sprite.anchor.set(0.5);


    var reset = () => {
        s = range(1, 3);
        reEfect();
        sprite.scale.set(s / 3);

        Object.assign(sprite, {
            x: xpos > 0 ? range(-xpos * height / 2, width) : range(0, width - xpos * height / 2),
            y: -sprite.height
        });
    }

    var reEfect = () => {
        skew = {
            x: range(0, 0.05),
            y: range(0, 0.05)
        };

        var newShake = range(-1, 1);
        onDraw = () => {
            shake += ((newShake - shake) / 16);
            absShake = Math.abs(shake);

            if (shake >= newShake) {
                shake = newShake;
                onDraw = fNull;
            }
        }
    }

    var timeOut, interVal;

    timeOut = setTimeout(() => {
        draw = () => {
            onDraw()
            if (sprite.y >= height + sprite.height) reset();
            sprite.y += s - absShake;
            sprite.x += shake + xpos;
            sprite.skew.x += skew.x;
            sprite.skew.y += skew.y;

            //sprite.skew.set()
        }
        sprite.visible = true;
        reset();
        interVal = setInterval(reEfect, 2000);

    }, range(0, 5000));
    this.on('remove', sprite => {
        draw = fNull;
        clearTimeout(timeOut);
        clearInterval(interVal);
    })
    return () => draw();
}

Particle.Rain = function(sprite) {
    var
        range = this.range,
        xpos = 0,
        { width, height, speed } = this.props;

    var x, y, s, velY, life, isDrop, xS;

    sprite.visible = false;

    var reset = () => {
        s = range(3, 9);
        sprite.scale.set(s / 9);
        x = xpos < 0 ? range(0, width - xpos * height - 100) : range(-xpos * height - 100, width);
        y = -sprite.height;
        velY = 2;
        life = 30;
        isDrop = true;
        xS = range(0.05, 0.15)

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
                sprite.y += s - s * xS;
                sprite.x += s * xpos;
            } else {
                sprite.scale.x -= sprite.scale.x / 15;
                sprite.scale.y -= sprite.scale.y / 10;
                sprite.y -= velY * s / 6;
                life--;
                sprite.x += xS * s * xpos;
                velY -= 0.13;
                if (life <= 0) reset();
            }
        }).bind(sprite);
        sprite.visible = true;
        reset();
    }, range(0, 5000));
    return () => draw();
}

Particle.Outbreak = function() {}
Particle.Outbreak = function() {}


export default Particle;