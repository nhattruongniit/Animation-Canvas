import { Stage, Shape, Tween, Ease, Ticker, Bitmap, Container } from 'createjs-module';
import { LoadQueue } from 'preload-js';

class Apps extends Stage {
    constructor(canvas) {
        super(canvas);

        Ticker.setFPS(60);
        Ticker.addEventListener("tick", () => this.update());

        var circle = new Circle();
        var card = new Cards();
        //var bgCard = new BgCard();

        this.addChild(circle, card);
    }
}

class loadResource extends LoadQueue {
    constructor(parameter, props) {
        super(parameter, props);
        this.props = props;
        this.images = this.images || {};
        this.on("fileload", this.handleFileLoad);
        this.on("complete", this.handleComplete);
        this.loadManifest(resourceImage);
    }

    handleFileLoad(evt) {
        if (evt.item.type == 'image') { this.images[evt.item.id] = evt.result }
    }

    handleComplete(evt) {
        var apps = new Apps(canvas);
    }
}

class Circle extends Container {
    constructor() {
        super();

        var circle = new Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 30;
        circle.y = 30;

        Tween.get(circle, { loop: true })
            .to({ x: 400 }, 1000, Ease.getPowInOut(4))
            .to({ alpha: 0, y: 175 }, 500, Ease.getPowInOut(2))
            .to({ alpha: 0, y: 225 }, 100)
            .to({ alpha: 1, y: 200 }, 500, Ease.getPowInOut(2))
            .to({ x: 100 }, 800, Ease.getPowInOut(2));

        this.addChild(circle);
    }
}

class SymbolCard extends Container {
    constructor() {
        super();
    }
}

class Cards extends Container {
    constructor() {
        super();
        Object.entries(manifest['cards']).map(ele => {
            var bgCard = new BgCard();

            // bgCard.scaleX = bgCard.scaleY = 0.5;
            // bgCard.x = Math.floor(width / i);

            var card = new Bitmap(ele[1].src);
            card.scaleX = card.scaleY = 0.5;
            card.x = rangeFunc(0, width);
            card.y = rangeFunc(0, height);

            this.addChild(bgCard, card);
        })

    }
}

class BgCard extends Container {
    constructor() {
        super();
        Object.values(manifest['bgCard']).map(ele => {
            var bitMap = new Bitmap(ele.src);
            this.addChild(bitMap);
        });
    }
}


var canvas, resourceImage;
var urlImage = './assets/images/';
var version = 1;
var width = 537;
var height = 936;

var manifest = {
    "bgCard": [
        { src: urlImage + 'bg-card.png', id: 'bgCard' },
    ],
    "cards": [
        { src: urlImage + 'card-0.png', id: 'card-0' },
        { src: urlImage + 'card-1.png', id: 'card-1' },
        { src: urlImage + 'card-2.png', id: 'card-2' },
        { src: urlImage + 'card-3.png', id: 'card-3' },
        { src: urlImage + 'card-4.png', id: 'card-4' },
        { src: urlImage + 'card-5.png', id: 'card-5' },
        { src: urlImage + 'card-6.png', id: 'card-6' },
        { src: urlImage + 'card-7.png', id: 'card-7' },
        { src: urlImage + 'card-8.png', id: 'card-8' },
    ]
}

function imgGeneration(path) {
    var img = new Image();
    img.src = path;
    return img;
}

function cacheImage() {
    Object.values(manifest).reduce((a, b) => {
        resourceImage = a.concat(b);
        for (var i = 0; i < resourceImage.length; i++) {
            resourceImage[i].src = resourceImage[i].src + "?v=" + version;
            imgGeneration(resourceImage[i].src);
        }
    });
}

cacheImage();


var rangeFunc = function(min, max) {
    return min + (Math.random() * (max - min));
};

window.addEventListener('load', function() {
    canvas = document.getElementById('myCanvas');

    Object.assign(canvas.style, {
        backgroundImage: 'url(../assets/images/bg-main.jpg)',
        backgroundSize: 'cover'
    });

    var loadResoure = new loadResource(false, {
        canvas: canvas
    });

}, false);