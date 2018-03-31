'use strict';
var item = new PIXI.loaders.Loader();
var element = document.getElementById("loading");
var container = document.getElementById("container");

function init() {
    TweenMax.to(element, 1, {
        opacity: 0,
        onComplete: function() {
            element.parentNode.removeChild(element);
            container.setAttribute("data-is-visible", "true");
            var setup = new Setup();
        }
    });

}

function done() {
    //anim.pause();
}

var Fx = function() {
    this.TITLE_POSITION_Y = 520;
    this.TITLE_OFFSET = [-160, -48, 186, 128];
    this._init();
};

var Style = function() {
    this.confetti = null;
    this.subStage = null;
    this.confettiStage = null;
    this.WIDTH = 750;
    this.HEIGHT = 1140;
    this.COLOR_YELLOW = 16761111;
    this.CHARACTER_POSITION = [{
        r: 10.2,
        x: 375,
        y: 140,
        initX: 375,
        initY: 1380,
        delay: 0.8
    }, {
        r: -9.2,
        x: 556,
        y: 180,
        initX: -82,
        initY: 1198,
        delay: 0.3
    }, {
        r: 13.1,
        x: 696,
        y: 348,
        initX: -144,
        initY: 828,
        delay: 0.7
    }, {
        r: -8.8,
        x: 624,
        y: 820,
        initX: -126,
        initY: -10,
        delay: 0.6
    }, {
        r: -24.2,
        x: 168,
        y: 210,
        initX: 948,
        initY: 1180,
        delay: 0.4
    }, {
        r: 13.5,
        x: 136,
        y: 820,
        initX: 856,
        initY: 60,
        delay: 0.1
    }, {
        r: 7.4,
        x: 52,
        y: 416,
        initX: 932,
        initY: 696,
        delay: 0
    }, {
        r: 35,
        x: 690,
        y: 600,
        initX: -180,
        initY: 320,
        delay: 0.2
    }, {
        r: -9.1,
        x: 64,
        y: 646,
        initX: 884,
        initY: 296,
        delay: 0.5
    }];
}

var accessor = function(type, chai) {
    return Math.floor(Math.random() * (chai - type + 1)) + type;
}

var rectangle = function(content, duration, chai) {
    var obj = content.getBoundingClientRect();
    return TweenLite.to(window, duration, {
        scrollTo: obj.top + window.pageYOffset + chai,
        ease: Power3.easeOut
    }), 0;
};

var getActual = function(number) {
    return number * Math.PI / 180;
}

var Type = function(pixelWidth, pixelHeight, stage, total, options) {
    this.width = pixelWidth;
    this.height = pixelHeight;
    this.stage = stage;
    this.total = total;
    this.options = options || {};
    this.CONFETTI_SIZE = 20;
    this.OFFSET_X = 120;
}


var card = function(stage) {
    var i;
    var x = new PIXI.Texture.fromFrame("card");
    var oSpace = [];
    var particles = [];
    var delay = 0.4;
    var texture;
    var style = new Style();
    for (var i = 0; i < 9; i++) {
        particles.push(new PIXI.Sprite(x));
        texture = new PIXI.Texture.fromFrame("card-" + i);
        oSpace.push(new PIXI.Sprite(texture));
        oSpace[i].anchor.set(0.5);
        particles[i].position.set(style.CHARACTER_POSITION[i].initX, style.CHARACTER_POSITION[i].initY);
        particles[i].rotation = getActual(style.CHARACTER_POSITION[i].r + 180);
        particles[i].anchor.set(0.5, 0.36);
        particles[i].addChildAt(oSpace[i]);
        if (0 !== i) {
            particles[i].scale.set(0.9);
        }
        TweenMax.to(particles[i].position, 1.6, {
            x: style.CHARACTER_POSITION[i].x,
            y: style.CHARACTER_POSITION[i].y,
            ease: Power4.easeOut,
            delay: style.CHARACTER_POSITION[i].delay + delay
        });
        TweenMax.to(particles[i], 1.6, {
            rotation: getActual(style.CHARACTER_POSITION[i].r),
            ease: Power3.easeOut,
            delay: style.CHARACTER_POSITION[i].delay + delay
        });
        stage.addChildAt(particles[i], 0);
    }

}

var cloud = function(stage) {
    var x = new PIXI.Texture.fromFrame("cloud");
    var box = new PIXI.Sprite(x);
    var s = new PIXI.Sprite(x);
    box.position.set(140, 260);
    s.position.set(580, 750);
    box.scale.set(1, -1);
    box.anchor.set(0.5);
    s.anchor.set(0.5);
    TweenMax.to(box, 6, {
        x: "+=60",
        repeat: -1,
        yoyo: true,
        ease: Power2.easeInOut,
        delay: -3
    });
    TweenMax.to(s, 6, {
        x: "-=60",
        repeat: -1,
        yoyo: true,
        ease: Power2.easeInOut,
        delay: -3
    });
    stage.alpha = 0.7;
    stage.addChild(box, s);
}

var particle = function(stage) {
    var i;
    var children = [];
    var oSpace = [];
    var loop = true;
    var total = 80;
    var rainbowColor = [16514571, 16752896, 15607352, 14223825, 8999167, 1422079, 5236421, 11399276];
    var color = 16763669;
    var rainbow = false;
    var repeat = loop ? -1 : 0;
    var delay = loop ? -8 : 0;
    var width = 750;
    var height = 1140;
    var CONFETTI_SIZE = 20;
    var OFFSET_X = 120;
    var rand = function(opt_attributes) {
        return Math.random() * opt_attributes;
    };
    var makeDone = function(i) {
        var res = rand(2);
        var done = function() {
            anim.pause();
            source.pause();
            eventController.pause();
            children[i].destroy();
        };
        var anim = (TweenMax.to(children[i], rand(8) + 3, {
            y: height + CONFETTI_SIZE,
            rotation: accessor(-2 * Math.PI, 2 * Math.PI),
            ease: Linear.easeNone,
            repeat: repeat,
            delay: delay,
            onComplete: function() {
                console.log('onComplete');
                done();
            }
        }), TweenMax.to(children[i], rand(5) + 1, {
            x: "+=" + OFFSET_X,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
        }));
        var eventController = TweenMax.to(oSpace[i], res + 0.5, {
            alpha: 0.8,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut,
            delay: -2
        });
        var source = TweenMax.to(children[i].scale, res + 0.5, {
            y: 0.1,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut,
            delay: -2
        });
    };
    for (var i = 0; i < total; i++) {
        oSpace.push(new PIXI.Graphics());
        if (rainbow) {
            oSpace[i].beginFill(color);
        } else {
            oSpace[i].beginFill(0);
        }
        oSpace[i].drawRect(0, 0, CONFETTI_SIZE, CONFETTI_SIZE);
        oSpace[i].alpha = 0;
        children.push(new PIXI.Graphics());
        if (rainbow) {
            color = rainbowColor[accessor(0, 7)];
        }
        children[i].beginFill(color);
        children[i].drawRect(0, 0, CONFETTI_SIZE, CONFETTI_SIZE);
        children[i].addChild(oSpace[i]);
        stage.addChild(children[i]);
        TweenMax.set(children[i], {
            x: accessor(0 - CONFETTI_SIZE - OFFSET_X, width + CONFETTI_SIZE),
            y: -CONFETTI_SIZE
        });
        makeDone(i);
    }
}

var flash = function(stage, opt_attributes) {
    var target = new PIXI.Graphics;
    target.beginFill(16777215);
    var style = new Style();
    target.drawRect(0, 0, style.WIDTH, style.HEIGHT);
    target.alpha = 0;
    stage.addChild(target);
    TweenMax.to(target, 0.1, {
        alpha: 0.8,
        delay: opt_attributes,
        ease: Power0.easeNone,
        /**
         * @return {undefined}
         */
        onComplete: function() {
            /** @type {boolean} */
            target.visible = false;
        }
    });
}
var Setup = function() {
    this.STAGE_HTML_ID = "stage";
    this._init();
}

Setup.prototype._init = function() {
    this._generateStage();
}

Setup.prototype._generateStage = function() {
    this.stage = new PIXI.Container();
    var type = new Type(750, 1140, this.stage, 9, {
        rainbow: true,
        loop: true
    });

    this.renderer = PIXI.autoDetectRenderer(type.width, type.height, {
        transparent: true,
        antialias: true
    });
    document.getElementById(this.STAGE_HTML_ID).appendChild(this.renderer.view);

    this._rendering();
    this.cloudStage = new PIXI.Container();
    this.confettiStage = new PIXI.Container();
    this.cardStage = new PIXI.Container();
    this.subStage = new PIXI.Container();

    // cloud
    cloud(this.cloudStage);

    //card
    card(this.cardStage);

    //particle
    particle(this.confettiStage);

    //flash
    flash(this.subStage, 2.5);

    this.stage.addChild(this.cloudStage, this.cardStage, this.confettiStage, this.subStage);
}

Setup.prototype._rendering = function() {
    var run = function() {
        requestAnimationFrame(run);
        this.renderer.render(this.stage);
    }.bind(this);
    run();
}

item.add("sprite", "images/sprite-index.json");
item.once("complete", init(), false);
item.load();