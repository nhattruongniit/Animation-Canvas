var canvas, context, wWindow, hWindow, loading, tweenEvil, tweenGod;
var dropList = [];
var phase = 0;
var M = 0;
var O = true;
var j = true;
var defaultHeight = 1082;
var length = 300;
var renderer;
wWindow = window.innerWidth;
hWindow = window.innerHeight;
canvas = document.getElementById('myCanvas');
loading = document.getElementById('loading');
tweenEvil = document.getElementsByClassName('character--evil');
tweenGod = document.getElementsByClassName('character--god');


function init() {
    TweenMax.to(loading, 1, {
        opacity: 0,
        onComplete: function() {
            loading.parentNode.removeChild(loading);
            start();
            setTimeout(function() {
                tweenCharacter();
            }, 200)
        }
    })
}

function tweenCharacter() {
    TweenMax.set(tweenEvil, {
        alpha: 0,
        scale: 0.8,
        x: -300,
        y: 100,
    });
    TweenMax.set(tweenGod, {
        alpha: 0,
        scale: 0.8,
        x: 300,
        y: 100
    });
    TweenMax.to(tweenEvil, 0.45, {
        delay: 0.2,
        alpha: 1,
        scale: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(0.6, 0.5)
    });
    TweenMax.to(tweenGod, 0.45, {
        delay: 0.2,
        alpha: 1,
        scale: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(0.6, 0.5)
    });
}

var stroke = {
    colorOptions: ["#e50026", "#00bfe5", "#f2f200"],
    dualColorOptions: [{
        main: "#e50026",
        alt: "#990019"
    }, {
        main: "#00bfe5",
        alt: "#008099"
    }, {
        main: "#f2f200",
        alt: "#a6a600"
    }],
    colorIndex: 0,
    colorIncrementer: 0,
    colorThreshold: 10,
    getColor: function() {
        return this.colorIncrementer >= 10 && (this.colorIncrementer = 0, this.colorIndex++, this.colorIndex >= this.dualColorOptions.length && (this.colorIndex = 0)), this.colorIncrementer++, this.dualColorOptions[this.colorIndex];
    }
}

function start() {
    renderer = document.getElementById("myCanvas");
    context = renderer.getContext("2d");
    renderer.width = wWindow;
    renderer.height = defaultHeight;

    success();

    $(window).resize(function() {
        wWindow = window.innerWidth;
    });
}

function BigDrop(dataAndEvents) {
    this.x = Math.random() * wWindow;
    this.y = Math.random() * hWindow - hWindow;
    this.r = random(1, 10);
    this.d = Math.random() * length + 10;
    this.colorOptions = dataAndEvents;
    this.tilt = Math.floor(10 * Math.random()) - 10;
    this.tiltAngleIncremental = 0.1 * Math.random() + 0.02;
    this.tiltAngle = 0;
    this.draw = function() {
        return context.beginPath(), context.lineWidth = this.r / 1.4, context.strokeStyle = this.color, context.moveTo(this.x + this.tilt + this.r / 4, this.y), context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4), context.stroke();
    };
}

function success() {
    dropList = [];
    O = false;
    for (var times = 0; times < length; times++) {
        var expression = stroke.getColor();
        dropList.push(new BigDrop(expression));
    }
    play();

    gameLoop();
}

function gameLoop() {
    renderer.width = wWindow;
    renderer.height = defaultHeight;
    return O ? null : (requestAnimationFrame(gameLoop), check());
}

function check() {
    context.clearRect(0, 0, wWindow, defaultHeight);
    var eventPath = [];
    for (var i = 0; i < length; i++) {
        eventPath.push(dropList[i].draw());
    }
    return play(), eventPath;
}

function random(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function play() {
    var pdataCur;
    var t = 0;
    var counter = 0;
    phase += 0.01;
    M += 0.1;
    for (; counter < length; counter++) {
        if (pdataCur = dropList[counter], O) {
            return;
        }
        if (!j && pdataCur.y < -15) {
            pdataCur.y = defaultHeight + 100;
        } else {
            draw(pdataCur, counter);
            if (pdataCur.y <= defaultHeight) {
                t++;
            }
            reset(pdataCur, counter);
        }
    }
    if (0 === t) {
        clear();
    }
}

function reset(value, cb) {
    if (value.x > wWindow + 20 || (value.x < -20 || value.y > defaultHeight)) {
        if (j) {
            if (cb % 5 > 0 || cb % 2 == 0) {
                lerp(value, Math.random() * wWindow, -10, Math.floor(10 * Math.random()) - 10);
            } else {
                if (Math.sin(phase) > 0) {
                    lerp(value, -5, Math.random() * defaultHeight, Math.floor(10 * Math.random()) - 10);
                } else {
                    lerp(value, wWindow + 5, Math.random() * defaultHeight, Math.floor(10 * Math.random()) - 10);
                }
            }
        }
    }
}

function draw(data, x) {
    data.tiltAngle += data.tiltAngleIncremental;
    data.y += (Math.cos(phase + data.d) + 3 + data.r / 2) / 2;
    data.x += Math.sin(phase);
    data.tilt = 15 * Math.sin(data.tiltAngle - x / 3);
    data.color = data.tilt > 0 ? data.colorOptions.main : data.colorOptions.alt;
}

function lerp(b, a, ratio, n) {
    b.x = a;
    b.y = ratio;
    b.tilt = n;
}


function clear() {
    if (context) {
        context.clearRect(0, 0, wWindow, defaultHeight);
    }
}

window.addEventListener('load', init(), false);