(function(lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

    // library properties:
    lib.properties = {
        width: 550,
        height: 400,
        fps: 30,
        color: "#FFFFFF",
        manifest: [
            { src: "images/card0.png", id: "card0" },
            { src: "images/card1.png", id: "card1" },
            { src: "images/card2.png", id: "card2" }
        ]
    };



    // symbols:



    (lib.card0 = function() {
        this.initialize(img.card0);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148, 214);


    (lib.card1 = function() {
        this.initialize(img.card1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148, 214);


    (lib.card2 = function() {
        this.initialize(img.card2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148, 214);


    (lib.Symbol1copy2 = function() {
        this.initialize();

        // Layer 2
        this.instance = new lib.card2();
        this.instance.setTransform(37, -26.5, 0.5, 0.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(37, -26.5, 74, 107);


    (lib.Symbol1copy = function() {
        this.initialize();

        // Layer 2
        this.instance = new lib.card1();
        this.instance.setTransform(37, 0, 0.5, 0.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(37, 0, 74, 107);


    (lib.Symbol1 = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.card0();
        this.instance.setTransform(37, 0, 0.5, 0.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(37, 0, 74, 107);


    // stage content:
    (lib.demoAnime = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, false, {});

        // Layer 1 copy 2
        this.instance = new lib.Symbol1copy();
        this.instance.setTransform(234, 514, 1, 1, 90, 0, 0, 74, 107);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ rotation: 0, x: 278, y: 171 }, 29).wait(1));

        // Layer 1 copy
        this.instance_1 = new lib.Symbol1copy2();
        this.instance_1.setTransform(234, 514, 1, 1, 90, 0, 0, 74, 107);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ rotation: 0, x: 449, y: 263 }, 29).wait(1));

        // Layer 1
        this.instance_2 = new lib.Symbol1();
        this.instance_2.setTransform(234, 514, 1, 1, 90, 0, 0, 74, 107);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ rotation: 0, x: 105, y: 128 }, 29).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(509, 677, 133.5, 74);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;