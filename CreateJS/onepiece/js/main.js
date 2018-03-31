'use strict';
var canvas, stage, loader, images;
var urlImage = 'images/';
var version = 1;

var manifest = [
    { src: urlImage + 'luffy.png', id: 'luffy' },
    { src: urlImage + 'zorro.png', id: 'zorro' },
    { src: urlImage + 'sanji.png', id: 'sanji' }
];

function imgGeneration(path) {
    var img = new Image();
    img.src = path;
    return img;
}

function cacheImage() {
    for (var i = 0; i < manifest.length; i++) {
        manifest[i].src = manifest[i].src + "?v=" + version;
        imgGeneration(manifest[i].src);
    }
}

cacheImage();

function init() {
    canvas = document.getElementById('canvas');
    images = images || {};
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick', handleTick);

    loader = new createjs.LoadQueue(false);
    loader.addEventListener('fileload', handleFileLoad);
    loader.addEventListener('complete', handleComplete);
    loader.loadManifest(manifest);

    var luffy = new createjs.Bitmap(manifest[0].src);

    stage.addChild(luffy);
}

function handleFileLoad(evt) {
    if (evt.item.type == 'image') { images[evt.item.id] = evt.result }
}

function handleComplete() {

}

function handleTick() {
    stage.update();
}

window.addEventListener('load', init(), false);