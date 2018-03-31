(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [{
        name: "Untitled_1_atlas_",
        frames: [
            [0, 0, 152, 214],
            [308, 0, 140, 214],
            [154, 0, 152, 214]
        ],

        framesa: {
            "card-0": {
                frames: [0, 0, 152, 214]
            },
            "card-1": {
                frames: [308, 0, 140, 214]
            },
            "card-2": {
                frames: [154, 0, 152, 214]
            }
        }
    }];
    console.log(lib.ssMetadata)


    lib.updateListCache = function(cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };

    lib.addElementsToCache = function(textInst, cacheList) {
        var cur = textInst;
        while (cur != null && cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != null && cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        } else {
            cur = textInst;
            while (cur != null && cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };

    lib.gfontAvailable = function(family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };

    lib.tfontAvailable = function(family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    // symbols:



    (lib.luffy = function() {
        this.spriteSheet = ss["Untitled_1_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.sanji = function() {
        this.spriteSheet = ss["Untitled_1_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.zorro = function() {
        this.spriteSheet = ss["Untitled_1_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    // stage content:
    (lib.Untitled1 = function(mode, startPosition, loop) {
        if (loop == null) { loop = false; }
        this.initialize(mode, startPosition, loop, {});

        // Layer 3
        this.instance = new lib.zorro();
        this.instance.parent = this;
        this.instance.setTransform(206, 170);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 2
        this.instance_1 = new lib.sanji();
        this.instance_1.parent = this;
        this.instance_1.setTransform(360, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Layer 1
        this.instance_2 = new lib.luffy();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-4, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(271, 200, 504, 384);
    // library properties:
    lib.properties = {
        id: '36C9A05BBAED4C74A82AE6CC96663037',
        width: 550,
        height: 400,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            { src: "images/Untitled_1_atlas_.png", id: "Untitled_1_atlas_" }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['36C9A05BBAED4C74A82AE6CC96663037'] = {
        getStage: function() { return exportRoot.getStage(); },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;