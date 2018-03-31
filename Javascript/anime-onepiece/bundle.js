function Module_0(module, exports, __webpack_require__) {
    var jQuery = jQuery || {};
    jQuery.CARTA_CPN_OBJECT = {
        /**
         * @return {undefined}
         */
        init: function() {
            var jCanvasObject = (__webpack_require__(Module_19), __webpack_require__(Module_20));
            var Block = __webpack_require__(Module_21);
            var nodes = __webpack_require__(Module_24);
            var Node = __webpack_require__(Module_27);
            var assert = __webpack_require__(Module_14);
            var core = __webpack_require__(Module_28);
            var item = new PIXI.loaders.Loader;
            new Node;
            /**
             * @param {?} done
             * @return {undefined}
             */
            var init = function(done) {
                /** @type {(HTMLElement|null)} */
                var element = document.getElementById("loading");
                /** @type {(HTMLElement|null)} */
                var container = document.getElementById("container");
                TweenMax.to(element, 1, {
                    opacity: 0,
                    /**
                     * @return {undefined}
                     */
                    onComplete: function() {
                        element.parentNode.removeChild(element);
                        container.setAttribute("data-is-visible", "true");
                        done();
                    }
                });
            };
            /**
             * @return {undefined}
             */
            var self = function() {
                new jCanvasObject;
                new Block;
                new nodes;
                assert();
                core();
            };
            item.add("sprite", "./_assets/img/sprite-index.json");
            item.once("complete", init.bind(this, self));
            item.load();
        }
    };
    window.WebFontConfig = {
        google: {
            families: ["Montserrat"]
        },
        /**
         * @return {undefined}
         */
        active: function() {
            window.setTimeout(function() {
                jQuery.CARTA_CPN_OBJECT.init();
            }, 100);
        }
    };
    window.addEventListener("load", function() {
        /** @type {Element} */
        var wf = document.createElement("script");
        /** @type {string} */
        wf.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
        /** @type {string} */
        wf.type = "text/javascript";
        /** @type {string} */
        wf.async = "true";
        var insertAt = document.getElementsByTagName("script")[0];
        insertAt.parentNode.insertBefore(wf, insertAt);
    }, false);

}


function Module_1() {
    throw new Error("Module Module_1 is empty");
}


function Module_2() {
    throw new Error("Module Module_2 is empty");
}


function Module_3() {
    throw new Error("Module Module_3 is empty");
}


function Module_4() {
    throw new Error("Module Module_4 is empty");
}


function Module_5() {
    throw new Error("Module Module_5 is empty");
}


function Module_6() {
    throw new Error("Module Module_6 is empty");
}


function Module_7() {
    throw new Error("Module Module_7 is empty");
}


function Module_8(module, exports, __webpack_require__) {
    /**
     * @param {number} dir
     * @return {?}
     */
    module.exports = function(dir) {
        /** @type {number} */
        var str = dir * Math.PI / 180;
        return str;
    };

}


function Module_9(module, exports, __webpack_require__) {
    var accessor = __webpack_require__(Module_10);
    /** @type {function (number, number, ?, string, Object): undefined} */
    var Type = (__webpack_require__(Module_8), function(pixelWidth, pixelHeight, stage, total, options) {
        /** @type {number} */
        this.width = pixelWidth;
        /** @type {number} */
        this.height = pixelHeight;
        this.stage = stage;
        /** @type {string} */
        this.total = total;
        this.options = options || {};
        this._init();
    });
    /** @type {function (number, number, ?, string, Object): undefined} */
    module.exports = Type;
    /** @type {number} */
    Type.CONFETTI_SIZE = 20;
    /** @type {number} */
    Type.OFFSET_X = 120;
    /**
     * @return {undefined}
     */
    Type.prototype._init = function() {
        this.loop = this.options.loop || false;
        this.rainbow = this.options.rainbow || false;
        /** @type {number} */
        this.color = 16763669;
        /** @type {Array} */
        this.rainbowColor = [16514571, 16752896, 15607352, 14223825, 8999167, 1422079, 5236421, 11399276];
        this._dropConfetti();
    };
    /**
     * @return {undefined}
     */
    Type.prototype._dropConfetti = function() {
        var i;
        /** @type {Array} */
        var children = [];
        /** @type {Array} */
        var oSpace = [];
        /** @type {number} */
        var repeat = this.loop ? -1 : 0;
        /** @type {number} */
        var delay = this.loop ? -8 : 0;
        /**
         * @param {number} opt_attributes
         * @return {?}
         */
        var rand = function(opt_attributes) {
            return Math.random() * opt_attributes;
        };
        var makeDone = function(i) {
            var res = rand(2);
            /**
             * @return {undefined}
             */
            var done = function() {
                anim.pause();
                source.pause();
                eventController.pause();
                children[i].destroy();
            };
            var anim = (TweenMax.to(children[i], rand(8) + 3, {
                y: this.height + Type.CONFETTI_SIZE,
                rotation: accessor(-2 * Math.PI, 2 * Math.PI),
                ease: Linear.easeNone,
                repeat: repeat,
                delay: delay,
                /**
                 * @return {undefined}
                 */
                onComplete: function() {
                    done();
                }
            }), TweenMax.to(children[i], rand(5) + 1, {
                x: "+=" + Type.OFFSET_X,
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
        }.bind(this);
        /** @type {number} */
        i = 0;
        for (; i < this.total; i++) {
            oSpace.push(new PIXI.Graphics);
            if (this.rainbow) {
                oSpace[i].beginFill(this.color);
            } else {
                oSpace[i].beginFill(0);
            }
            oSpace[i].drawRect(0, 0, Type.CONFETTI_SIZE, Type.CONFETTI_SIZE);
            /** @type {number} */
            oSpace[i].alpha = 0;
            children.push(new PIXI.Graphics);
            if (this.rainbow) {
                this.color = this.rainbowColor[accessor(0, 7)];
            }
            children[i].beginFill(this.color);
            children[i].drawRect(0, 0, Type.CONFETTI_SIZE, Type.CONFETTI_SIZE);
            children[i].addChild(oSpace[i]);
            this.stage.addChild(children[i]);
            TweenMax.set(children[i], {
                x: accessor(0 - Type.CONFETTI_SIZE - Type.OFFSET_X, this.width + Type.CONFETTI_SIZE),
                y: -Type.CONFETTI_SIZE
            });
            makeDone(i);
        }
    };

}


function Module_10(module, exports, __webpack_require__) {
    /**
     * @param {number} type
     * @param {number} chai
     * @return {?}
     */
    module.exports = function(type, chai) {
        var msg = Math.floor(Math.random() * (chai - type + 1)) + type;
        return msg;
    };

}


function Module_11() {
    throw new Error("Module Module_11 is empty");
}


function Module_12() {
    throw new Error("Module Module_12 is empty");
}


function Module_13(module, exports, __webpack_require__) {
    /**
     * @param {Element} content
     * @param {?} duration
     * @param {?} chai
     * @return {?}
     */
    module.exports = function(content, duration, chai) {
        var obj = content.getBoundingClientRect();
        return TweenLite.to(window, duration, {
            scrollTo: obj.top + window.pageYOffset + chai,
            ease: Power3.easeOut
        }), 0;
    };

}


function Module_14(module, exports, __webpack_require__) {
    var getName = __webpack_require__(Module_13);
    /**
     * @return {undefined}
     */
    module.exports = function() {
        /** @type {(Element|null)} */
        var canvas = document.getElementById("totopBtn").firstElementChild;
        canvas.addEventListener("click", function() {
            event.preventDefault();
            getName(document.getElementById("header"), 0.8, 0);
        });
    };

}


function Module_15() {
    throw new Error("Module Module_15 is empty");
}


function Module_16() {
    throw new Error("Module Module_16 is empty");
}


function Module_17() {
    throw new Error("Module Module_17 is empty");
}


function Module_18() {
    throw new Error("Module Module_18 is empty");
}


function Module_19(module, exports, __webpack_require__) {
    var style = __webpack_require__(Module_19);
    module.exports = style;
    /** @type {null} */
    style.confetti = null;
    /** @type {null} */
    style.subStage = null;
    /** @type {null} */
    style.confettiStage = null;
    /** @type {number} */
    style.WIDTH = 750;
    /** @type {number} */
    style.HEIGHT = 1140;
    /** @type {number} */
    style.COLOR_YELLOW = 16761111;
    /** @type {Array} */
    style.CHARACTER_POSITION = [{
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


function Module_20(module, exports, __webpack_require__) {
    var that = $sanitize(19);
    /**
     * @return {undefined}
     */
    var setup = function() {
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = setup;
    /** @type {string} */
    setup.STAGE_HTML_ID = "stage";
    /**
     * @return {undefined}
     */
    setup.prototype._init = function() {
        this._generateStage();
    };
    /**
     * @return {undefined}
     */
    setup.prototype._generateStage = function() {
        PIXI.utils.skipHello();
        that.stage = new PIXI.Container;
        this.renderer = PIXI.autoDetectRenderer(that.WIDTH, that.HEIGHT, {
            transparent: true,
            antialias: true
        });
        document.getElementById(setup.STAGE_HTML_ID).appendChild(this.renderer.view);
        this.renderer.render(that.stage);
        this._rendering();
        that.ambianceStage = new PIXI.Container;
        that.confettiStage = new PIXI.Container;
        that.cardStage = new PIXI.Container;
        that.subStage = new PIXI.Container;
        that.stage.addChild(that.ambianceStage, that.cardStage, that.subStage, that.confettiStage);
    };
    /**
     * @return {undefined}
     */
    setup.prototype._rendering = function() {
        var run = function() {
            requestAnimationFrame(run);
            this.renderer.render(that.stage);
        }.bind(this);
        run();
    };

}


function Module_21(module, exports, __webpack_require__) {
    var options = __webpack_require__(Module_19);
    var Node = __webpack_require__(Module_9);
    var RegExp = (__webpack_require__(Module_10), __webpack_require__(Module_22));
    var getActual = __webpack_require__(Module_8);
    var Block = __webpack_require__(Module_23);
    /**
     * @return {undefined}
     */
    var fx = function() {
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = fx;
    /** @type {number} */
    fx.TITLE_POSITION_Y = 520;
    /** @type {Array} */
    fx.TITLE_OFFSET = [-160, -48, 186, 128];
    /**
     * @return {undefined}
     */
    fx.prototype._init = function() {
        /** @type {string} */
        this._bodyClass = document.body.className;
        this._circle(0);
        this._card(0.4);
        this._title(2);
        this._flash(2.5);
        this._link(3);
        this._background(2.5);
        this._btnHighlight();
        if (CARTA_CPN.IS_FEVER) {
            this._feverBelt(0);
        }
        /**
         * @param {Object} domElement
         * @param {string} classNames
         * @return {?}
         */
        var removeClass = function(domElement, classNames) {
            return (" " + domElement.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + classNames + " ") !== -1;
        };
        if (removeClass(document.body, "status02") || removeClass(document.body, "status03")) {
            setTimeout(function() {
                new RegExp("a");
            }, 1500);
        } else {
            if (removeClass(document.body, "status05")) {
                setTimeout(function() {}, 1500);
            }
        }
    };
    /**
     * @param {number} opt_attributes
     * @return {undefined}
     */
    fx.prototype._link = function(opt_attributes) {
        setTimeout(function() {
            document.getElementById("header").setAttribute("data-is-active", "true");
            document.getElementById("playBtn").setAttribute("data-is-active", "true");
            document.getElementById("termsBtn").setAttribute("data-is-active", "true");
        }, 1E3 * opt_attributes);
    };
    /**
     * @param {number} opt_attributes
     * @return {undefined}
     */
    fx.prototype._background = function(opt_attributes) {
        setTimeout(function() {
            if (CARTA_CPN.IS_FEVER) {
                new Node(options.WIDTH, options.HEIGHT, options.confettiStage, 80, {
                    loop: true,
                    rainbow: true
                });
            } else {
                if (!("status05" === this._bodyClass)) {
                    new Node(options.WIDTH, options.HEIGHT, options.confettiStage, 80, {
                        loop: true
                    });
                }
            }
            new Block;
        }.bind(this), 1E3 * opt_attributes);
    };
    /**
     * @param {number} recurring
     * @return {undefined}
     */
    fx.prototype._circle = function(recurring) {
        setTimeout(function() {
            document.getElementById("header__circle").setAttribute("data-is-active", "true");
        }, 1E3 * recurring);
    };
    /**
     * @param {number} opt_attributes
     * @return {undefined}
     */
    fx.prototype._title = function(opt_attributes) {
        var i;
        /** @type {Array} */
        var textures = [];
        /** @type {Array} */
        var nodes = [];
        var me = new PIXI.Container;
        me.position.set(options.WIDTH / 2, fx.TITLE_POSITION_Y);
        /** @type {number} */
        me.alpha = 0;
        me.scale.set(3);
        options.subStage.addChild(me);
        /** @type {number} */
        i = 0;
        for (; i < 4; i++) {
            textures.push(PIXI.Texture.fromFrame("title-" + i));
            nodes.push(new PIXI.Sprite(textures[i]));
            nodes[i].anchor.set(0.5);
            nodes[i].position.set(0, fx.TITLE_OFFSET[i]);
            me.addChild(nodes[i]);
        }
        /** @type {number} */
        nodes[2].alpha = 0.7;
        var sprite = new PIXI.Text("CARTA", {
            fontFamily: "Montserrat",
            fontSize: 36,
            fontWeight: "bold",
            fill: options.COLOR_YELLOW,
            align: "center",
            letterSpacing: 50
        });
        sprite.position.set(0, 58);
        sprite.anchor.set(0.5);
        me.addChild(sprite);
        TweenMax.to(me, 0.5, {
            alpha: 1,
            delay: opt_attributes
        });
        TweenMax.to(me.scale, 1.4, {
            x: 1,
            y: 1,
            ease: Elastic.easeOut.config(1, 0.5),
            delay: opt_attributes
        });
    };
    /**
     * @param {number} opt_attributes
     * @return {undefined}
     */
    fx.prototype._flash = function(opt_attributes) {
        var target = new PIXI.Graphics;
        target.beginFill(16777215);
        target.drawRect(0, 0, options.WIDTH, options.HEIGHT);
        /** @type {number} */
        target.alpha = 0;
        options.subStage.addChild(target);
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
    };
    /**
     * @param {number} delay
     * @return {undefined}
     */
    fx.prototype._card = function(delay) {
        var i;
        var x = PIXI.Texture.fromFrame("card");
        /** @type {Array} */
        var oSpace = [];
        /** @type {Array} */
        var particles = [];
        /** @type {number} */
        i = 0;
        for (; i < 9; i++) {
            particles.push(new PIXI.Sprite(x));
            var texture = PIXI.Texture.fromFrame("card-" + i);
            oSpace.push(new PIXI.Sprite(texture));
            oSpace[i].anchor.set(0.5);
            particles[i].position.set(options.CHARACTER_POSITION[i].initX, options.CHARACTER_POSITION[i].initY);
            particles[i].rotation = getActual(options.CHARACTER_POSITION[i].r + 180);
            particles[i].anchor.set(0.5, 0.36);
            particles[i].addChildAt(oSpace[i]);
            if (0 !== i) {
                particles[i].scale.set(0.9);
            }
            TweenMax.to(particles[i].position, 1.6, {
                x: options.CHARACTER_POSITION[i].x,
                y: options.CHARACTER_POSITION[i].y,
                ease: Power4.easeOut,
                delay: options.CHARACTER_POSITION[i].delay + delay
            });
            TweenMax.to(particles[i], 1.6, {
                rotation: getActual(options.CHARACTER_POSITION[i].r),
                ease: Power3.easeOut,
                delay: options.CHARACTER_POSITION[i].delay + delay
            });
            options.cardStage.addChildAt(particles[i], 0);
        }
    };
    /**
     * @return {?}
     */
    fx.prototype._btnHighlight = function() {
        if ("status05" === this._bodyClass) {
            return false;
        }
        var data = (new PIXI.Graphics).beginFill(0).drawRect(0, 0, 580, 120);
        /** @type {number} */
        data.x = options.WIDTH / 2;
        /** @type {number} */
        data.y = 1030;
        data.pivot.set(290, 60);
        /** @type {number} */
        data.alpha = 0.8;
        var me = (new PIXI.Graphics).beginFill(16777215).drawRect(0, 0, 200, 40);
        /** @type {number} */
        me.x = 0;
        /** @type {number} */
        me.y = 1030;
        me.pivot.set(100, 20);
        /** @type {number} */
        me.alpha = 0.6;
        me.rotation = getActual(-45);
        me.mask = data;
        options.subStage.addChild(me);
        /**
         * @return {undefined}
         */
        var update = function() {
            TweenMax.to(me.position, 0.2, {
                x: options.WIDTH,
                /**
                 * @return {undefined}
                 */
                onComplete: function() {
                    /** @type {number} */
                    me.x = 0;
                }
            });
        };
        setInterval(update, 4E3);
    };
    /**
     * @param {number} recurring
     * @return {undefined}
     */
    fx.prototype._feverBelt = function(recurring) {
        var texture = PIXI.Texture.fromFrame("fever");
        var data = new PIXI.extras.TilingSprite(texture, options.WIDTH, 60);
        var sprite = new PIXI.extras.TilingSprite(texture, options.WIDTH, 60);
        data.position.set(0, 170);
        sprite.position.set(0, 810);
        /** @type {number} */
        data.alpha = 0;
        /** @type {number} */
        sprite.alpha = 0;
        setTimeout(function() {
            options.cardStage.addChildAt(data, 0);
            options.cardStage.addChildAt(sprite, 0);
            TweenMax.to(data, 1, {
                alpha: 1
            });
            TweenMax.to(sprite, 1, {
                alpha: 1
            });
            TweenMax.to(data.tilePosition, 6, {
                x: "+=446",
                ease: Power0.easeNone,
                repeat: -1
            });
            TweenMax.to(sprite.tilePosition, 6, {
                x: "-=446",
                ease: Power0.easeNone,
                repeat: -1
            });
        }.bind(this), 1E3 * recurring);
    };

}


function Module_22(module, exports, __webpack_require__) {
    /**
     * @param {?} state
     * @return {undefined}
     */
    var $ = function(state) {
        this._contents = state;
        /** @type {(HTMLElement|null)} */
        this._modal = document.getElementById("modal");
        /** @type {(HTMLElement|null)} */
        this._closeBtn = document.getElementById("modal__close");
        this._init.apply(this);
    };
    /** @type {function (?): undefined} */
    module.exports = $;
    /** @type {string} */
    $.BASE_URL = window.location.href.replace(/play\//g, "");
    /**
     * @return {undefined}
     */
    $.prototype._init = function() {
        this._showModal();
        this._closeBtn.addEventListener("click", this._touchCloseBtn.bind(this));
    };
    /**
     * @return {undefined}
     */
    $.prototype._showModal = function() {
        /** @type {string} */
        this._modal.style.display = "block";
        /** @type {(HTMLElement|null)} */
        var tableview = document.getElementById("modal__btnA");
        /** @type {string} */
        var platform = document.documentElement.getAttribute("data-os");
        this._modal.setAttribute("data-modal", this._contents);
        TweenMax.to(this._modal.firstElementChild, 0.5, {
            top: 100
        });
        TweenMax.to(this._modal, 0.5, {
            opacity: 1,
            onComplete: function() {
                switch (this._contents) {
                    case "a":
                        /** @type {(HTMLElement|null)} */
                        var element = document.getElementById("modal-a__contentsCopy");
                        /** @type {(HTMLElement|null)} */
                        var slideIndex = document.getElementById("modal-a__contentsKizaru");
                        /** @type {(HTMLElement|null)} */
                        var MAX_VGA_COLORS = document.getElementById("modal-a__contentsKuma");
                        tableview.addEventListener("click", function() {
                            switch (platform) {
                                case "ios":
                                    ga("send", "event", "outbound", "linkclick", "incentive-appstore", 1);
                                    break;
                                case "android":
                                    ga("send", "event", "outbound", "linkclick", "incentive-googleplay", 1);
                            }
                        });
                        TweenMax.to(slideIndex, 0.4, {
                            css: {
                                opacity: 1,
                                marginRight: 90
                            }
                        });
                        TweenMax.to(MAX_VGA_COLORS, 0.4, {
                            css: {
                                opacity: 1,
                                marginLeft: 64
                            }
                        });
                        TweenMax.set(element, {
                            css: {
                                scale: 5
                            }
                        });
                        TweenMax.to(element, 1, {
                            css: {
                                rotation: -720,
                                scale: 1,
                                opacity: 1
                            }
                        });
                        break;
                    case "b":
                        tableview.addEventListener("click", function() {
                            switch (platform) {
                                case "ios":
                                    ga("send", "event", "outbound", "linkclick", "incentive-appstore", 1);
                                    break;
                                case "android":
                                    ga("send", "event", "outbound", "linkclick", "incentive-googleplay", 1);
                            }
                        });
                        break;
                    case "c":
                        tableview.addEventListener("click", function() {
                            switch (platform) {
                                case "ios":
                                    ga("send", "event", "outbound", "linkclick", "appmodal-appstore", 1);
                                    break;
                                case "android":
                                    ga("send", "event", "outbound", "linkclick", "appmodal-googleplay", 1);
                            }
                        });
                }
            }.bind(this)
        });
    };
    /**
     * @return {undefined}
     */
    $.prototype._touchCloseBtn = function() {
        TweenMax.to(this._modal, 0.3, {
            opacity: 0,
            onComplete: function() {
                /** @type {string} */
                this._modal.style.display = "none";
                if ("c" === this._contents) {
                    /** @type {string} */
                    window.location.href = $.BASE_URL + "play/";
                }
            }.bind(this)
        });
    };

}


function Module_23(module, exports, __webpack_require__) {
    var node = __webpack_require__(Module_19);
    /** @type {function (): undefined} */
    var Type = (__webpack_require__(Module_8), function() {
        this._init.apply(this);
    });
    /** @type {function (): undefined} */
    module.exports = Type;
    /**
     * @return {undefined}
     */
    Type.prototype._init = function() {
        this._showCloud();
    };
    /**
     * @return {undefined}
     */
    Type.prototype._showCloud = function() {
        var x = PIXI.Texture.fromFrame("cloud");
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
        node.ambianceStage.addChild(box, s);
        /** @type {number} */
        node.ambianceStage.alpha = 0.7;
    };

}


function Module_24(module, exports, __webpack_require__) {
    var callback = (__webpack_require__(Module_19), __webpack_require__(Module_25));
    var getActual = __webpack_require__(Module_26);
    /**
     * @param {?} oConfigs
     * @param {?} elContainer
     * @return {undefined}
     */
    var LogReader = function(oConfigs, elContainer) {
        this._init.apply(this);
    };
    /** @type {function (?, ?): undefined} */
    module.exports = LogReader;
    /** @type {number} */
    LogReader.FPS = 60;
    /** @type {number} */
    LogReader.MSPF = 1E3 / LogReader.FPS;
    /**
     * @return {undefined}
     */
    LogReader.prototype._init = function() {
        /** @type {(HTMLElement|null)} */
        this._elm = document.getElementById("counterNumber");
        this._getCardNumber();
    };
    /**
     * @return {undefined}
     */
    LogReader.prototype._getCardNumber = function() {
        /** @type {number} */
        var indents = 99999999;
        this._checkMission(indents);
        getActual(this._elm, function() {
            this._showCount(indents);
        }.bind(this));
    };
    /**
     * @param {number} val
     * @return {undefined}
     */
    LogReader.prototype._showCount = function(val) {
        /** @type {number} */
        var number = 0;
        /** @type {(HTMLElement|null)} */
        var iframe = document.getElementById("counterImg");
        iframe.setAttribute("data-is-active", "true");
        var throttledUpdate = function() {
            if (number < val) {
                number += Math.ceil(val / 80);
                /** @type {string} */
                this._elm.innerHTML = String(callback(number));
                setTimeout(function() {
                    throttledUpdate();
                }, LogReader.MSPF);
            } else {
                /** @type {string} */
                this._elm.innerHTML = String(callback(val));
                TweenMax.set(this._elm, {
                    scale: 3
                });
                TweenMax.to(this._elm, 1, {
                    scale: 1,
                    ease: Elastic.easeOut.config(1, 0.5)
                });
            }
        }.bind(this);
        TweenMax.to(this._elm, 0.3, {
            opacity: 1
        });
        throttledUpdate();
    };
    /**
     * @param {number} var_args
     * @return {undefined}
     */
    LogReader.prototype._checkMission = function(var_args) {
        var i;
        /** @type {NodeList} */
        var a = document.querySelectorAll(".mission__item");
        /** @type {number} */
        var aLength = a.length;
        /** @type {number} */
        i = 0;
        for (; i < aLength; i++) {
            var fromIndex = a[i].getAttribute("data-goal");
            if (fromIndex) {
                if (Number(fromIndex) <= var_args) {
                    a[i].setAttribute("data-is-complete", "true");
                }
            }
        }
    };

}


function Module_25(module, exports, __webpack_require__) {
    /**
     * @param {?} html
     * @return {?}
     */
    module.exports = function(html) {
        return String(html).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    };

}


function Module_26(module, exports, __webpack_require__) {
    /**
     * @param {Element} content
     * @param {?} callback
     * @return {undefined}
     */
    module.exports = function(content, callback) {
        var left = content.getBoundingClientRect();
        var a = left.top;
        /** @type {boolean} */
        var o = true;
        /** @type {number} */
        var winH = window.innerHeight;
        window.addEventListener("scroll", function() {
            return function initialize() {
                if (o) {
                    /** @type {boolean} */
                    o = false;
                    setTimeout(function() {
                        return o = true, a < window.pageYOffset + 0.8 * winH && (callback(), window.removeEventListener("scroll", initialize, false)), o;
                    }, 250);
                }
            };
        }(), false);
    };

}


function Module_27(module, exports, __webpack_require__) {
    /**
     * @param {?} o
     * @param {?} tileHeight
     * @return {undefined}
     */
    var Type = function(o, tileHeight) {};
    /** @type {function (?, ?): undefined} */
    module.exports = Type;
    /**
     * @return {undefined}
     */
    Type.prototype._init = function() {
        if (localStorage.getItem("newyear2017_id")) {
            console.log(localStorage.getItem("newyear2017_id"));
        } else {
            this._getUniqueId();
        }
    };
    /**
     * @return {undefined}
     */
    Type.prototype._getUniqueId = function() {
        /** @type {XMLHttpRequest} */
        var xhr = new XMLHttpRequest;
        /** @type {string} */
        var requestUri = "/api?p=karuta_unique_id";
        if (void 0 !== xhr.timeout) {
            /**
             * @param {?} e
             * @return {undefined}
             */
            xhr.ontimeout = function(e) {
                console.log("/////////////// timeout ///////////////");
            };
            /** @type {number} */
            xhr.timeout = 2E3;
        }
        xhr.open("get", requestUri, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        /**
         * @return {?}
         */
        xhr.onreadystatechange = function() {
            if (4 == xhr.readyState && 200 == xhr.status) {
                /** @type {*} */
                var e = JSON.parse(xhr.responseText);
                if ("error" === e.status) {
                    return console.log("message: " + e.error.message), false;
                }
                /** @type {*} */
                e = JSON.parse(xhr.responseText);
                var text = e.payload.unique_id;
                localStorage.setItem("newyear2017_id", text);
                console.log(text + " new!");
            }
        };
        xhr.send(null);
    };

}


function Module_28(module, exports, __webpack_require__) {
    /**
     * @return {undefined}
     */
    module.exports = function() {
        var i;
        /** @type {NodeList} */
        var resultItems = document.querySelectorAll(".mission__item");
        /**
         * @param {Element} editor
         * @param {number} el
         * @param {number} method
         * @return {undefined}
         */
        var init = function(editor, el, method) {
            editor.setAttribute("data-incentive", 0);
            var prevValue;
            /** @type {number} */
            prevValue = 0;
            for (; prevValue < el; prevValue++) {
                var div = editor.cloneNode(true);
                div.setAttribute("data-incentive", prevValue);
                if (0 === method || 1 === method) {
                    if (prevValue < 8) {
                        /** @type {string} */
                        div.style.top = 6 + 2 * prevValue + "px";
                        /** @type {string} */
                        div.style.left = 64 - 5 * prevValue + "px";
                    } else {
                        if (prevValue < 16) {
                            /** @type {string} */
                            div.style.top = 12 + 2 * prevValue + "px";
                            /** @type {string} */
                            div.style.left = 120 - 5 * prevValue + "px";
                        } else {
                            /** @type {string} */
                            div.style.top = 20 + 2 * prevValue + "px";
                            /** @type {string} */
                            div.style.left = 182 - 5 * prevValue + "px";
                        }
                    }
                } else {
                    if (2 === method || 3 === method) {
                        /** @type {string} */
                        div.style.top = 8 + 10 * prevValue + "px";
                        /** @type {string} */
                        div.style.left = 70 - 16 * prevValue + "px";
                    } else {
                        if (4 === method) {
                            /** @type {string} */
                            div.style.top = 2 + 5 * prevValue + "px";
                            /** @type {string} */
                            div.style.left = 70 - 10 * prevValue + "px";
                        }
                    }
                }
                editor.parentNode.appendChild(div);
            }
            editor.parentNode.removeChild(editor);
        };
        /** @type {number} */
        i = 0;
        for (; i < resultItems.length; i++) {
            var result = resultItems[i];
            var failuresLink = result.getAttribute("data-incentive-number");
            /**
             * @return {?}
             */
            var highlight = function() {
                var fragment = result.querySelector(".mission__itemName");
                if (null === fragment) {
                    return 0;
                }
                /** @type {Element} */
                var elem = document.createElement("div");
                /** @type {string} */
                elem.textContent = "\u00d7 " + failuresLink;
                elem.classList.add("mission__itemNameNum");
                fragment.appendChild(elem);
            };
            if (null !== failuresLink) {
                var editor = result.querySelector(".mission__itemImg").firstElementChild;
                init(editor, failuresLink, i);
            }
            highlight();
        }
    };

}