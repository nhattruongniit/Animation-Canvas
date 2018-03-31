function Module_0(module, exports, __webpack_require__) {
    var jQuery = jQuery || {};
    jQuery.CARTA_CPN_OBJECT = {
        /**
         * @return {undefined}
         */
        init: function() {
            var options = __webpack_require__(Module_29);
            var Block = __webpack_require__(Module_30);
            var PresenceFilter = (__webpack_require__(Module_31), __webpack_require__(Module_41));
            var Logger = __webpack_require__(Module_43);
            var Main = __webpack_require__(Module_44);
            var Node = __webpack_require__(Module_45);
            var group = new PIXI.loaders.Loader;
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
            var onResize = function() {
                new Block;
                setTimeout(function() {
                    options.gui = new PresenceFilter;
                }, 1E3);
            };
            options.localStrage = new Logger;
            options.sound = new Node;
            new Main;
            group.add("sprite", "../_assets/img/sprite-play.json").add("sprite-" + options.assetNumber, "../_assets/img/sprite-play-" + options.assetNumber + ".json").once("complete", init.bind(this, onResize));
            group.load();
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


function Module_3(module, exports, __webpack_require__) {
    var t = __webpack_require__(Module_3);
    module.exports = t;
    /** @type {Array} */
    t.GROUP = [
        [0, 4, 8, 12, 15, 16, 20, 28, 32, 31, 40],
        [3, 5, 7, 9, 11, 19, 21, 25, 29, 39, 41],
        [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42],
        [1, 13, 17, 23, 24, 27, 33, 35, 36, 37, 43]
    ];
    /** @type {Array} */
    t.info = [{
        id: 0,
        name: "\u30eb\u30d5\u30a3",
        cutinOffset: 350,
        serif: [
            [211, 0, 1, 212, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 204]
        ],
        strength: 5E3,
        don: 0
    }, {
        id: 1,
        name: "\u30be\u30ed",
        cutinOffset: 375,
        serif: [
            [12, 13, 2, 14, 5, 15, 16, 2, 17, 11]
        ],
        strength: 5E3,
        don: 0
    }, {
        id: 2,
        name: "\u30ca\u30df",
        cutinOffset: 460,
        serif: [
            [18, 19, 20, 21, 22, 205, 221, 23, 24, 25, 223, 223, 223],
            [6, 7, 202, 26, 27, 209]
        ],
        strength: 7E3,
        don: 1
    }, {
        id: 3,
        name: "\u30a6\u30bd\u30c3\u30d7",
        cutinOffset: 390,
        serif: [
            [28, 29, 5, 30, 31, 32, 204],
            [33, 34, 35, 192, 36, 11, 193, 203]
        ],
        strength: 7E3,
        don: 1
    }, {
        id: 4,
        name: "\u30b5\u30f3\u30b8",
        cutinOffset: 370,
        serif: [
            [37, 38, 28, 39, 40, 41, 42, 43, 44, 45, 46, 204]
        ],
        strength: 5E3,
        don: 1
    }, {
        id: 5,
        name: "\u30c1\u30e7\u30c3\u30d1\u30fc",
        cutinOffset: 340,
        serif: [
            [217, 29, 47, 211, 26, 48, 49, 212, 218, 42, 219, 51, 11, 204]
        ],
        strength: 7E3,
        don: 1
    }, {
        id: 6,
        name: "\u30ed\u30d3\u30f3",
        cutinOffset: 390,
        serif: [
            [52, 2, 53, 41, 5],
            [222, 54, 47, 55, 56, 57, 50]
        ],
        strength: 6E3,
        don: 0
    }, {
        id: 7,
        name: "\u30d5\u30e9\u30f3\u30ad\u30fc",
        cutinOffset: 375,
        serif: [
            [42, 51, 2, 38, 2, 221, 58, 5, 59, 221, 60, 61, 2],
            [62, 41, 63, 31, 194, 64, 65, 66, 221, 67, 68, 8, 69, 29]
        ],
        strength: 6E3,
        don: 1
    }, {
        id: 8,
        name: "\u30d6\u30eb\u30c3\u30af",
        cutinOffset: 292,
        serif: [
            [20, 21, 70, 71, 19, 64, 72, 194, 64, 73],
            [27, 74, 45, 75, 8, 56, 31, 208]
        ],
        strength: 6E3,
        don: 0
    }, {
        id: 9,
        name: "\u30d3\u30d3",
        cutinOffset: 380,
        serif: [
            [75, 66, 31, 44, 46, 77, 78, 46, 32, 204],
            [73, 76, 6, 79, 80, 81, 82, 83, 51, 8, 37, 29, 44, 56, 31, 206]
        ],
        strength: 7E3,
        don: 1
    }, {
        id: 10,
        name: "\u30af\u30ed\u30b3\u30c0\u30a4\u30eb",
        cutinOffset: 434,
        serif: [
            [84, 196, 194, 64, 2, 5, 223, 223, 223],
            [85, 42, 73, 51, 11, 223, 223, 223]
        ],
        strength: 5E3,
        don: 1
    }, {
        id: 11,
        name: "\u30dc\u30f3\u30fb\u30af\u30ec\u30fc",
        cutinOffset: 350,
        serif: [
            [86, 31, 19, 64, 87, 19, 27, 76],
            [88, 89, 90, 210]
        ],
        strength: 6E3,
        don: 1
    }, {
        id: 12,
        name: "\u9ec4\u733f",
        cutinOffset: 310,
        serif: [
            [91, 92, 93, 94, 196, 215, 215, 215, 215, 215, 221, 223, 223, 223]
        ],
        strength: 5E3,
        don: 0
    }, {
        id: 13,
        name: "\u30ed\u30fc",
        cutinOffset: 360,
        serif: [
            [223, 223, 223, 213, 211, 201, 212, 5, 44, 46, 223, 223, 223, 95, 96],
            [97, 98, 83, 99, 214, 223, 223, 223, 223, 223, 223, 204]
        ],
        strength: 5E3,
        don: 0
    }, {
        id: 14,
        name: "\u30d9\u30dd",
        cutinOffset: 370,
        serif: [
            [100, 93, 100, 93, 101, 197, 102, 35, 21, 205]
        ],
        strength: 6E3,
        don: 0
    }, {
        id: 15,
        name: "\u30b8\u30f3\u30d9\u30a8",
        cutinOffset: 370,
        serif: [
            [103, 104, 19, 75, 205, 221, 28, 105, 41, 44, 11],
            [106, 194, 64, 28, 50, 73, 2, 5, 107, 108, 198, 204]
        ],
        strength: 5E3,
        don: 0
    }, {
        id: 16,
        name: "\u30b9\u30e2\u30fc\u30ab\u30fc",
        cutinOffset: 392,
        serif: [
            [109, 37, 110, 37, 111, 45, 31, 194, 46, 32],
            [223, 223, 223, 73, 194, 82, 112, 37, 42, 194, 64, 87, 19, 74, 203]
        ],
        strength: 6E3,
        don: 0
    }, {
        id: 17,
        name: "\u30c9\u30d5\u30e9\u30df\u30f3\u30b4",
        cutinOffset: 380,
        serif: [
            [113, 114, 5, 115, 66, 194, 64, 207, 221, 38, 43, 198, 69, 38, 76, 11, 74],
            [115, 4, 11, 116, 47, 113, 114, 11, 203]
        ],
        strength: 5E3,
        don: 0
    }, {
        id: 18,
        name: "\u30d0\u30eb\u30c8\u30ed\u30e1\u30aa",
        cutinOffset: 380,
        serif: [
            [28, 29, 193, 117, 194, 64, 73],
            [118, 22, 5, 71, 119, 64, 94, 196, 194, 205]
        ],
        strength: 7E3,
        don: 0
    }, {
        id: 19,
        name: "\u30ec\u30d9\u30c3\u30ab",
        cutinOffset: 426,
        serif: [
            [120, 79, 5, 52, 47],
            [121, 122, 123, 51, 98, 124, 220, 46, 75, 204]
        ],
        strength: 6E3,
        don: 2
    }, {
        id: 20,
        name: "\u85e4\u864e",
        cutinOffset: 385,
        serif: [
            [213, 39, 125, 126, 127, 214, 194, 64, 2, 193],
            [128, 31, 42, 51, 31, 8, 56, 31]
        ],
        strength: 5E3,
        don: 1
    }, {
        id: 21,
        name: "\u30b5\u30dc",
        cutinOffset: 350,
        serif: [
            [222, 223, 223, 223, 69, 75, 66, 2, 129, 130, 5],
            [28, 29, 131, 47, 132, 75, 8, 75, 37, 51, 11, 204]
        ],
        strength: 5E3,
        don: 1
    }, {
        id: 22,
        name: "\u30b3\u30a2\u30e9",
        cutinOffset: 374,
        serif: [
            [107, 47, 69, 194, 64, 73, 109, 133, 44, 19, 51, 31, 32],
            [134, 123, 42, 75, 8, 37, 11, 123, 75]
        ],
        strength: 7E3,
        don: 1
    }, {
        id: 23,
        name: "\u30df\u30db\u30fc\u30af",
        cutinOffset: 292,
        serif: [
            [112, 123, 2, 135, 64, 41, 107, 98, 136, 137],
            [84, 133, 4, 27]
        ],
        strength: 5E3,
        don: 1
    }, {
        id: 24,
        name: "\u30a8\u30fc\u30b9",
        cutinOffset: 370,
        serif: [
            [138, 45, 64, 37, 29, 64],
            [223, 223, 223, 223, 223, 223, 223, 223, 223, 69, 43, 47, 82, 76, 204]
        ],
        strength: 5E3,
        don: 2
    }, {
        id: 25,
        name: "\u30de\u30eb\u30b3",
        cutinOffset: 375,
        serif: [
            [75, 133, 42, 43, 211, 101, 21, 139, 212, 5],
            [140, 29, 94, 196, 11, 74, 76, 27, 75]
        ],
        strength: 5E3,
        don: 2
    }, {
        id: 26,
        name: "\u30ed\u30b7\u30ca\u30f3\u30c6",
        cutinOffset: 420,
        serif: [
            [75, 66, 31, 28, 29, 98, 141, 75, 142, 45, 64, 72, 76, 42, 32],
            [143, 144, 2, 145, 47, 75, 75, 73, 51, 42]
        ],
        strength: 6E3,
        don: 1
    }, {
        id: 27,
        name: "\u30a8\u30cd\u30eb",
        cutinOffset: 375,
        serif: [
            [211, 146, 147, 212, 148, 38, 47],
            [211, 128, 212, 42, 2, 11]
        ],
        strength: 5E3,
        don: 1
    }, {
        id: 28,
        name: "\u30ac\u30fc\u30d7",
        cutinOffset: 364,
        serif: [
            [138, 69, 50, 149, 5],
            [150, 151, 152, 42, 45, 205]
        ],
        strength: 6E3,
        don: 0
    }, {
        id: 29,
        name: "\u30eb\u30c3\u30c1",
        cutinOffset: 386,
        serif: [
            [211, 153, 212, 8, 56, 31, 94, 221, 148, 148, 41, 75, 50, 82],
            [211, 134, 45, 212, 123, 78, 113, 154, 155, 123, 29, 50]
        ],
        strength: 5E3,
        don: 1
    }, {
        id: 30,
        name: "\u30b3\u30d3\u30fc",
        cutinOffset: 370,
        serif: [
            [156, 37, 5, 204],
            [0, 157, 158, 159, 41, 42, 50, 58, 8, 56, 203]
        ],
        strength: 7E3,
        don: 1
    }, {
        id: 31,
        name: "\u30de\u30bc\u30e9\u30f3",
        cutinOffset: 375,
        serif: [
            [28, 29, 5, 160, 161, 123, 29, 46, 162, 163, 41, 75, 46, 75, 51, 11],
            [28, 105, 41, 5, 164, 73, 160, 161, 45, 46, 75]
        ],
        strength: 6E3,
        don: 1
    }, {
        id: 32,
        name: "\u30a4\u30ef\u30f3\u30b3\u30d5",
        cutinOffset: 350,
        serif: [
            [211, 165, 166, 212, 167, 168, 51, 108, 198, 42, 75, 27, 199, 203]
        ],
        strength: 7E3,
        don: 0
    }, {
        id: 33,
        name: "\u30cf\u30f3\u30b3\u30c3\u30af",
        cutinOffset: 400,
        serif: [
            [211, 169, 5, 75, 66, 8, 73],
            [23, 25, 170, 216, 21, 212, 42, 2, 108, 198, 204]
        ],
        strength: 5E3,
        don: 2
    }, {
        id: 34,
        name: "\u30d0\u30ae\u30fc",
        cutinOffset: 375,
        serif: [
            [171, 47, 172, 89, 200, 173, 11, 193, 69, 69, 203]
        ],
        strength: 6E3,
        don: 2
    }, {
        id: 35,
        name: "\u30b7\u30e3\u30f3\u30af\u30b9",
        cutinOffset: 322,
        serif: [
            [223, 223, 223, 211, 174, 45, 75, 175, 176, 212, 41],
            [177, 116, 64, 178, 46, 223, 223, 223]
        ],
        strength: 5E3,
        don: 0
    }, {
        id: 36,
        name: "\u30bb\u30f3\u30b4\u30af",
        cutinOffset: 372,
        serif: [
            [179, 114, 82, 75, 76, 180, 2, 113, 114, 5, 181, 182, 51, 204]
        ],
        strength: 5E3,
        don: 2
    }, {
        id: 37,
        name: "\u767d\u3072\u3052",
        cutinOffset: 375,
        serif: [
            [183, 89, 42, 184, 68, 98, 222],
            [38, 29, 8, 73, 138, 38, 76, 223, 223, 223]
        ],
        strength: 5E3,
        don: 1
    }, {
        id: 38,
        name: "\u30da\u30ed\u30fc\u30ca",
        cutinOffset: 380,
        serif: [
            [185, 186, 185, 186, 185, 186]
        ],
        strength: 6E3,
        don: 2
    }, {
        id: 39,
        name: "\u30d0\u30fc\u30bd\u30ed\u30df\u30e5\u30fc\u30fb\u304f\u307e",
        cutinOffset: 370,
        serif: [
            [222, 187, 194, 64, 75, 46],
            [223, 223, 223, 223, 223, 223, 188, 189, 190, 191, 11, 223, 223, 223]
        ],
        strength: 5E3,
        don: 0
    }, {
        id: 40,
        name: "\u7247\u8db3\u306e\u5175\u968a"
    }, {
        id: 41,
        name: "\u30b7\u30fc\u30b6\u30fc"
    }, {
        id: 42,
        name: "\u30ad\u30c3\u30c9"
    }, {
        id: 43,
        name: "\u30db\u30fc\u30ad\u30f3\u30b9"
    }];
    /** @type {Array} */
    t.type = [{
        id: 0,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 1,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 2,
        prev: 0,
        next: 0,
        vertical: -1
    }, {
        id: 3,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 4,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 5,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 6,
        prev: 1,
        next: 3,
        vertical: 0
    }, {
        id: 7,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 8,
        prev: 2,
        next: 0,
        vertical: 0
    }, {
        id: 9,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 10,
        prev: 0,
        next: 2,
        vertical: 0
    }, {
        id: 11,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 12,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 13,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 14,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 15,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 16,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 17,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 18,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 19,
        prev: 1,
        next: 0,
        vertical: 0
    }, {
        id: 20,
        prev: 2,
        next: 4,
        vertical: 3
    }, {
        id: 21,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 22,
        prev: 0,
        next: 0,
        vertical: -1
    }, {
        id: 23,
        prev: 0,
        next: 4,
        vertical: 1
    }, {
        id: 24,
        prev: -2,
        next: 0,
        vertical: 0
    }, {
        id: 25,
        prev: -4,
        next: -1,
        vertical: 0
    }, {
        id: 26,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 27,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 28,
        prev: 2,
        next: 0,
        vertical: 1
    }, {
        id: 29,
        prev: 1,
        next: 2,
        vertical: 1
    }, {
        id: 30,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 31,
        prev: 1,
        next: 0,
        vertical: 1
    }, {
        id: 32,
        prev: 2,
        next: 0,
        vertical: 0
    }, {
        id: 33,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 34,
        prev: 4,
        next: 0,
        vertical: 0
    }, {
        id: 35,
        prev: 2,
        next: 0,
        vertical: 0
    }, {
        id: 36,
        prev: 4,
        next: 4,
        vertical: 1
    }, {
        id: 37,
        prev: -1,
        next: 0,
        vertical: 1
    }, {
        id: 38,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 39,
        prev: 0,
        next: 0,
        vertical: -1
    }, {
        id: 40,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 41,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 42,
        prev: 1,
        next: 0,
        vertical: 1
    }, {
        id: 43,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 44,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 45,
        prev: 0,
        next: 2,
        vertical: 0
    }, {
        id: 46,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 47,
        prev: 1,
        next: 0,
        vertical: 0
    }, {
        id: 48,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 49,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 50,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 51,
        prev: 0,
        next: 1,
        vertical: 1
    }, {
        id: 52,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 53,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 54,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 55,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 56,
        prev: 2,
        next: 2,
        vertical: 1
    }, {
        id: 57,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 58,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 59,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 60,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 61,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 62,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 63,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 64,
        prev: 1,
        next: 2,
        vertical: 0
    }, {
        id: 65,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 66,
        prev: 0,
        next: 0,
        vertical: -2
    }, {
        id: 67,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 68,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 69,
        prev: 2,
        next: 0,
        vertical: 1
    }, {
        id: 70,
        prev: 2,
        next: 0,
        vertical: 1
    }, {
        id: 71,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 72,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 73,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 74,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 75,
        prev: 0,
        next: 0,
        vertical: -1
    }, {
        id: 76,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 77,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 78,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 79,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 80,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 81,
        prev: 0,
        next: -2,
        vertical: 0
    }, {
        id: 82,
        prev: -1,
        next: 0,
        vertical: 1
    }, {
        id: 83,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 84,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 85,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 86,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 87,
        prev: 2,
        next: 0,
        vertical: 0
    }, {
        id: 88,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 89,
        prev: 1,
        next: 1,
        vertical: 0
    }, {
        id: 90,
        prev: 3,
        next: 0,
        vertical: 2
    }, {
        id: 91,
        prev: 0,
        next: 0,
        vertical: 2
    }, {
        id: 92,
        prev: 0,
        next: 0,
        vertical: 2
    }, {
        id: 93,
        prev: 2,
        next: 0,
        vertical: 0
    }, {
        id: 94,
        prev: 2,
        next: 0,
        vertical: 0
    }, {
        id: 95,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 96,
        prev: 0,
        next: 0,
        vertical: 2
    }, {
        id: 97,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 98,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 99,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 100,
        prev: 0,
        next: 1,
        vertical: -1
    }, {
        id: 101,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 102,
        prev: 0,
        next: 0,
        vertical: 2
    }, {
        id: 103,
        prev: 0,
        next: 0,
        vertical: -1
    }, {
        id: 104,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 105,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 106,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 107,
        prev: 0,
        next: 2,
        vertical: 0
    }, {
        id: 108,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 109,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 110,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 111,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 112,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 113,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 114,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 115,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 116,
        prev: 1,
        next: 1,
        vertical: 0
    }, {
        id: 117,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 118,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 119,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 120,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 121,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 122,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 123,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 124,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 125,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 126,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 127,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 128,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 129,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 130,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 131,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 132,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 133,
        prev: -1,
        next: -1,
        vertical: 1
    }, {
        id: 134,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 135,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 136,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 137,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 138,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 139,
        prev: 3,
        next: 6,
        vertical: 0
    }, {
        id: 140,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 141,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 142,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 143,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 144,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 145,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 146,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 147,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 148,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 149,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 150,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 151,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 152,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 153,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 154,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 155,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 156,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 157,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 158,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 159,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 160,
        prev: 0,
        next: 3,
        vertical: 0
    }, {
        id: 161,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 162,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 163,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 164,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 165,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 166,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 167,
        prev: 0,
        next: 0,
        vertical: -1
    }, {
        id: 168,
        prev: 4,
        next: 2,
        vertical: 2
    }, {
        id: 169,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 170,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 171,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 172,
        prev: 2,
        next: 0,
        vertical: 1
    }, {
        id: 173,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 174,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 175,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 176,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 177,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 178,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 179,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 180,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 181,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 182,
        prev: 0,
        next: 0,
        vertical: 2
    }, {
        id: 183,
        prev: 0,
        next: 0,
        vertical: 4
    }, {
        id: 184,
        prev: 0,
        next: 0,
        vertical: 1
    }, {
        id: 185,
        prev: 0,
        next: 0,
        vertical: 2
    }, {
        id: 186,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 187,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 188,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 189,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 190,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 191,
        prev: 0,
        next: 6,
        vertical: 0
    }, {
        id: 192,
        prev: 6,
        next: 0,
        vertical: -1
    }, {
        id: 193,
        prev: 6,
        next: 0,
        vertical: -4
    }, {
        id: 194,
        prev: 6,
        next: 2,
        vertical: -6
    }, {
        id: 195,
        prev: 0,
        next: 0,
        vertical: 6
    }, {
        id: 196,
        prev: 6,
        next: 0,
        vertical: -6
    }, {
        id: 197,
        prev: 4,
        next: 2,
        vertical: -2
    }, {
        id: 198,
        prev: 3,
        next: 0,
        vertical: -4
    }, {
        id: 199,
        prev: 2,
        next: -2,
        vertical: -3
    }, {
        id: 200,
        prev: 10,
        next: 0,
        vertical: -2
    }, {
        id: 201,
        prev: 0,
        next: 0,
        vertical: 2
    }, {
        id: 202,
        prev: -2,
        next: 2,
        vertical: 2
    }, {
        id: 203,
        prev: -2,
        next: 0,
        vertical: 1
    }, {
        id: 204,
        prev: -2,
        next: 0,
        vertical: 1
    }, {
        id: 205,
        prev: -2,
        next: 0,
        vertical: 1
    }, {
        id: 206,
        prev: -2,
        next: 0,
        vertical: 1
    }, {
        id: 207,
        prev: -2,
        next: 0,
        vertical: 1
    }, {
        id: 208,
        prev: -2,
        next: 0,
        vertical: 1
    }, {
        id: 209,
        prev: 0,
        next: 0,
        vertical: 2
    }, {
        id: 210,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 211,
        prev: 0,
        next: 26,
        vertical: 14
    }, {
        id: 212,
        prev: 26,
        next: 0,
        vertical: -12
    }, {
        id: 213,
        prev: 4,
        next: 4,
        vertical: 4
    }, {
        id: 214,
        prev: 6,
        next: 4,
        vertical: -2
    }, {
        id: 215,
        prev: -8,
        next: 0,
        vertical: 0
    }, {
        id: 216,
        prev: -8,
        next: -4,
        vertical: 0
    }, {
        id: 217,
        prev: 0,
        next: 4,
        vertical: 1
    }, {
        id: 218,
        prev: 0,
        next: 4,
        vertical: 0
    }, {
        id: 219,
        prev: 4,
        next: 3,
        vertical: 1
    }, {
        id: 220,
        prev: 5,
        next: 2,
        vertical: 0
    }, {
        id: 221,
        prev: 0,
        next: 0,
        vertical: 0
    }, {
        id: 222,
        prev: 0,
        next: 0,
        vertical: 0
    }];

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
    /** @type {function (number, number, Object, string, Object): undefined} */
    var Type = (__webpack_require__(Module_8), function(pixelWidth, pixelHeight, stage, total, options) {
        /** @type {number} */
        this.width = pixelWidth;
        /** @type {number} */
        this.height = pixelHeight;
        /** @type {Object} */
        this.stage = stage;
        /** @type {string} */
        this.total = total;
        this.options = options || {};
        this._init();
    });
    /** @type {function (number, number, Object, string, Object): undefined} */
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


function Module_11(module, exports, __webpack_require__) {
    var self = __webpack_require__(Module_3);
    var getActual = __webpack_require__(Module_8);
    /**
     * @param {string} id
     * @param {?} opt_vars
     * @param {number} width
     * @param {number} height
     * @param {Object} options
     * @return {undefined}
     */
    var Player = function(id, opt_vars, width, height, options) {
        /** @type {number} */
        this._width = width;
        /** @type {number} */
        this._height = height;
        this._stage = opt_vars;
        /** @type {string} */
        this.id = id;
        this.options = options || {};
        this._init.apply(this);
    };
    /** @type {function (string, ?, number, number, Object): undefined} */
    module.exports = Player;
    /** @type {number} */
    Player.CHARA_NUM = 221;
    /** @type {number} */
    Player.CHARA_SPACE_ID = 221;
    /** @type {number} */
    Player.CHARA_SPACE_VAL = 24;
    /** @type {number} */
    Player.CHARA_HYPHEN_ID = 222;
    /** @type {number} */
    Player.CHARA_HYPHEN_WIDTH = 2;
    /** @type {number} */
    Player.CHARA_HYPHEN_LENGTH = 140;
    /** @type {number} */
    Player.CHARA_POINT_ID = 223;
    /** @type {number} */
    Player.CHARA_POINT_SIZE = 5;
    /** @type {number} */
    Player.CHARA_WAVY_ID = 215;
    /** @type {number} */
    Player.COLOR_TEXT = 1577487;
    /** @type {number} */
    Player.COLOR_WHITE = 16777215;
    /**
     * @return {undefined}
     */
    Player.prototype._init = function() {
        var i;
        /** @type {Array} */
        this.ttWord = [];
        /** @type {number} */
        i = 0;
        for (; i < Player.CHARA_NUM; i++) {
            this.ttWord.push(PIXI.Texture.fromFrame("serif-" + i));
        }
        this.vertical = this.options.vertical || false;
        this.horizontal = this.options.horizontal || false;
        this._scale = this.options.scale || 1;
        this._collection = this.options.collection || false;
        if (this.vertical) {
            this._showVertical(this.id);
        }
        if (this.horizontal) {
            this._showHorizontal(this.id);
        }
    };
    /**
     * @param {?} param
     * @return {undefined}
     */
    Player.prototype._showVertical = function(param) {
        var a;
        var al = self.info[param].serif.length;
        /** @type {number} */
        a = 0;
        for (; a < al; a++) {
            var i;
            var y;
            /** @type {Array} */
            var nodes = [];
            /** @type {number} */
            var x = 0;
            var iLen = self.info[param].serif[a].length;
            switch (a) {
                case 0:
                    if (this._collection) {
                        /** @type {number} */
                        x = this._width - 96;
                        /** @type {number} */
                        y = 40;
                    } else {
                        /** @type {number} */
                        x = this._width - 96;
                        /** @type {number} */
                        y = 56;
                    }
                    break;
                case 1:
                    if (this._collection) {
                        /** @type {number} */
                        x = this._width - 144;
                        /** @type {number} */
                        y = 80;
                    } else {
                        /** @type {number} */
                        x = 96;
                        /** @type {number} */
                        y = this._height - 56;
                        self.info[param].serif[a] = self.info[param].serif[a].reverse();
                    };
            }
            /** @type {number} */
            i = 0;
            for (; i < iLen; i++) {
                /** @type {number} */
                var borderYOffset = 2;
                var key = self.info[param].serif[a][i];
                if (key < Player.CHARA_NUM) {
                    switch (nodes.push(new PIXI.Sprite(this.ttWord[key])), nodes[i].scale.set(this._scale), nodes[i].anchor.set(0.5), a) {
                        case 0:
                            y += nodes[i].height / 2 + borderYOffset;
                            nodes[i].position.set(x, y);
                            y += nodes[i].height / 2 + borderYOffset;
                            this._animationWord(nodes[i], i);
                            break;
                        case 1:
                            if (this._collection) {
                                y += nodes[i].height / 2 + borderYOffset;
                                nodes[i].position.set(x, y);
                                y += nodes[i].height / 2 + borderYOffset;
                                this._animationWord(nodes[i], i + 10);
                            } else {
                                y -= nodes[i].height / 2 + borderYOffset;
                                nodes[i].position.set(x, y);
                                y -= nodes[i].height / 2 + borderYOffset;
                                this._animationWord(nodes[i], iLen - i + 10);
                            };
                    }
                    if (key === Player.CHARA_WAVY_ID) {
                        switch (a) {
                            case 0:
                                y -= 18 * this._scale;
                                break;
                            case 1:
                                y += 18 * this._scale;
                        }
                    }
                    this._stage.addChild(nodes[i]);
                } else {
                    if (key === Player.CHARA_SPACE_ID) {
                        switch (nodes.push("space"), a) {
                            case 0:
                                y += Player.CHARA_SPACE_VAL * this._scale;
                                break;
                            case 1:
                                if (this._collection) {
                                    y += Player.CHARA_SPACE_VAL * this._scale;
                                } else {
                                    y -= Player.CHARA_SPACE_VAL;
                                };
                        }
                    } else {
                        if (key === Player.CHARA_HYPHEN_ID) {
                            switch (nodes.push(new PIXI.Graphics), a) {
                                case 0:
                                    nodes[i].lineStyle(Player.CHARA_HYPHEN_WIDTH, Player.COLOR_WHITE).moveTo(x, y).lineTo(x, y + Player.CHARA_HYPHEN_LENGTH * this._scale);
                                    y += Player.CHARA_HYPHEN_LENGTH * this._scale + 2 * borderYOffset;
                                    break;
                                case 1:
                                    if (this._collection) {
                                        nodes[i].lineStyle(Player.CHARA_HYPHEN_WIDTH, Player.COLOR_WHITE).moveTo(x, y).lineTo(x, y + Player.CHARA_HYPHEN_LENGTH * this._scale);
                                        y += Player.CHARA_HYPHEN_LENGTH * this._scale + 2 * borderYOffset;
                                    } else {
                                        nodes[i].lineStyle(Player.CHARA_HYPHEN_WIDTH, Player.COLOR_WHITE).moveTo(x, y).lineTo(x, y - Player.CHARA_HYPHEN_LENGTH);
                                        y -= Player.CHARA_HYPHEN_LENGTH + 2 * borderYOffset;
                                    };
                            }
                            this._stage.addChild(nodes[i]);
                        } else {
                            if (key === Player.CHARA_POINT_ID) {
                                switch (nodes.push(new PIXI.Graphics), a) {
                                    case 0:
                                        y += Player.CHARA_POINT_SIZE + 3 * borderYOffset;
                                        nodes[i].beginFill(Player.COLOR_WHITE).drawCircle(0, 0, Player.CHARA_POINT_SIZE * this._scale);
                                        nodes[i].position.set(x, y);
                                        y += Player.CHARA_POINT_SIZE * this._scale + 3 * borderYOffset;
                                        this._animationWord(nodes[i], i);
                                        break;
                                    case 1:
                                        if (this._collection) {
                                            y += Player.CHARA_POINT_SIZE + 3 * borderYOffset;
                                            nodes[i].beginFill(Player.COLOR_WHITE).drawCircle(0, 0, Player.CHARA_POINT_SIZE * this._scale);
                                            nodes[i].position.set(x, y);
                                            y += Player.CHARA_POINT_SIZE * this._scale + 3 * borderYOffset;
                                            this._animationWord(nodes[i], i + 10);
                                        } else {
                                            y -= Player.CHARA_POINT_SIZE + 3 * borderYOffset;
                                            nodes[i].beginFill(Player.COLOR_WHITE).drawCircle(0, 0, Player.CHARA_POINT_SIZE);
                                            nodes[i].position.set(x, y);
                                            y -= Player.CHARA_POINT_SIZE + 3 * borderYOffset;
                                            this._animationWord(nodes[i], iLen - i + 10);
                                        };
                                }
                                this._stage.addChild(nodes[i]);
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} param
     * @return {undefined}
     */
    Player.prototype._showHorizontal = function(param) {
        var a;
        var actor;
        var al = self.info[param].serif.length;
        if (1 === al) {
            /** @type {number} */
            this.LINE_BASE_POSY = this._height / 2 - 440;
        } else {
            if (2 === al) {
                /** @type {number} */
                this.LINE_BASE_POSY = this._height / 2 - 462;
            }
        }
        /** @type {number} */
        a = 0;
        for (; a < al; a++) {
            var i;
            var x;
            /** @type {Array} */
            var nodes = [];
            /** @type {number} */
            var y = 0;
            actor = new PIXI.Container;
            this._stage.addChild(actor);
            var valuesLen = self.info[param].serif[a].length;
            switch (a) {
                case 0:
                    y = this.LINE_BASE_POSY;
                    /** @type {number} */
                    x = 0;
                    break;
                case 1:
                    y = this.LINE_BASE_POSY + 48;
                    /** @type {number} */
                    x = 0;
            }
            /** @type {number} */
            i = 0;
            for (; i < valuesLen; i++) {
                /** @type {number} */
                var next = 1;
                var key = self.info[param].serif[a][i];
                if (key < Player.CHARA_NUM) {
                    switch (key = 210 === key ? 195 : key, nodes.push(new PIXI.Sprite(this.ttWord[key])), nodes[i].tint = Player.COLOR_TEXT, nodes[i].height > 64 ? nodes[i].anchor.set(0.5) : (nodes[i].anchor.set(0.5, 0.4), next = 2), x += nodes[i].width / 4 + next - self.type[key].prev, nodes[i].position.set(x, y - self.type[key].vertical), x += nodes[i].width / 4 + next - self.type[key].next, 211 === key || (212 === key || 216 === key) ? nodes[i].scale.set(-0.5, 0.5) : nodes[i].scale.set(0.5), 213 !== key &&
                        (214 !== key && (215 !== key && 216 !== key)) || (nodes[i].rotation = getActual(-90)), a) {
                        case 0:
                            this._animationWord(nodes[i], i);
                            break;
                        case 1:
                            this._animationWord(nodes[i], i + 5);
                    }
                    key === Player.CHARA_WAVY_ID;
                    actor.addChild(nodes[i]);
                } else {
                    if (key === Player.CHARA_SPACE_ID) {
                        nodes.push("space");
                        x += Player.CHARA_SPACE_VAL / 2 + 8 * next;
                    } else {
                        if (key === Player.CHARA_HYPHEN_ID) {
                            nodes.push(new PIXI.Graphics);
                            nodes[i].lineStyle(Player.CHARA_HYPHEN_WIDTH / 2, Player.COLOR_TEXT).moveTo(x, y).lineTo(x + Player.CHARA_HYPHEN_LENGTH / 2, y);
                            x += Player.CHARA_HYPHEN_LENGTH / 2 + 4 * next;
                            actor.addChild(nodes[i]);
                        } else {
                            if (key === Player.CHARA_POINT_ID) {
                                switch (nodes.push(new PIXI.Graphics), x += Player.CHARA_POINT_SIZE / 2 + 4 * next, nodes[i].beginFill(Player.COLOR_TEXT).drawCircle(0, 0, Player.CHARA_POINT_SIZE / 2), nodes[i].position.set(x, y), x += Player.CHARA_POINT_SIZE / 2 + 4 * next, a) {
                                    case 0:
                                        this._animationWord(nodes[i], i);
                                        break;
                                    case 1:
                                        this._animationWord(nodes[i], i + 5);
                                }
                                actor.addChild(nodes[i]);
                            }
                        }
                    }
                }
            }
            /** @type {number} */
            actor.position.x = this._width / 2 - x / 2;
        }
    };
    /**
     * @param {Object} data
     * @param {number} i
     * @return {undefined}
     */
    Player.prototype._animationWord = function(data, i) {
        var x1 = data.scale.x;
        var moveY = data.scale.y;
        data.scale.set(5 * x1);
        /** @type {number} */
        data.alpha = 0;
        TweenMax.to(data, 0.5, {
            alpha: 1,
            delay: 0.04 * i
        });
        TweenMax.to(data.scale, 0.5, {
            x: x1,
            y: moveY,
            ease: Bounce.easeOut,
            delay: 0.04 * i
        });
    };

}


function Module_12(module, exports, __webpack_require__) {
    /**
     * @param {string} dir
     * @param {string} file
     * @param {?} chai
     * @return {undefined}
     */
    module.exports = function(dir, file, chai) {
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        /** @type {number} */
        var row = defaultCenturyStart.getTime();
        /** @type {string} */
        var error1 = "?";
        switch (file.indexOf("?") != -1 && (error1 = "&"), chai) {
            case "twitter":
                /** @type {string} */
                file = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(dir + "\r\n" + file + error1 + "p=" + String(row).substring(6, 10));
                break;
            case "line":
                /** @type {string} */
                file = "//line.me/R/msg/text/?" + encodeURIComponent(dir + " " + file + error1 + "openExternalBrowser=1");
        }
        window.open(file);
    };

}


function Module_13() {
    throw new Error("Module Module_13 is empty");
}


function Module_14() {
    throw new Error("Module Module_14 is empty");
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


function Module_19() {
    throw new Error("Module Module_19 is empty");
}


function Module_20() {
    throw new Error("Module Module_20 is empty");
}


function Module_21() {
    throw new Error("Module Module_21 is empty");
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


function Module_23() {
    throw new Error("Module Module_23 is empty");
}


function Module_24() {
    throw new Error("Module Module_24 is empty");
}


function Module_25() {
    throw new Error("Module Module_25 is empty");
}


function Module_26() {
    throw new Error("Module Module_26 is empty");
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


function Module_28() {
    throw new Error("Module Module_28 is empty");
}


function Module_29(module, exports, __webpack_require__) {
    var config = __webpack_require__(Module_29);
    module.exports = config;
    /** @type {number} */
    config.WIDTH = 750;
    /** @type {number} */
    config.HEIGHT = 750 * window.innerHeight / window.innerWidth;
    /** @type {number} */
    config.COLOR_TEXT = 1577487;
    /** @type {number} */
    config.COLOR_WHITE = 16777215;
    /** @type {number} */
    config.COLOR_RED = 12517407;
    /** @type {number} */
    config.COLOR_PAPER = 15394016;
    /** @type {number} */
    config.COLOR_GOLD = 14528345;
    /** @type {number} */
    config.COLOR_YELLOW = 16763669;
    /** @type {number} */
    config.COLOR_ORANGE = 14912538;
    /** @type {null} */
    config.localStrage = null;
    /** @type {null} */
    config.card = null;
    /** @type {null} */
    config.sound = null;
    /** @type {null} */
    config.gui = null;
    /** @type {null} */
    config.stage = null;
    /** @type {null} */
    config.cardStage = null;
    /** @type {null} */
    config.questionStage = null;
    /** @type {null} */
    config.confettiStage = null;
    /** @type {null} */
    config.winStage = null;
    /** @type {null} */
    config.guiStage = null;
    /** @type {null} */
    config.ambianceStage = null;
    /** @type {null} */
    config.resultStage = null;
    /** @type {string} */
    config.BASE_URL = window.location.href.replace(/play\//g, "");
    config.isSound;
    config.timesOfAttempt;
    config.assetNumber;
    /** @type {number} */
    config.currentQuestionNumber = 1;
    config.currentQuestionCharacter;
    /** @type {boolean} */
    config.isInQuestionNow = false;
    config.score = {
        user: 0,
        enemy: 0,
        dealer: 0,
        card: []
    };

}


function Module_30(module, exports, __webpack_require__) {
    var that = $sanitize(29);
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
        that.winStage = new PIXI.Container;
        that.guiStage = new PIXI.Container;
        that.questionStage = new PIXI.Container;
        that.ambianceStage = new PIXI.Container;
        that.cardStage = new PIXI.Container;
        that.resultStage = new PIXI.Container;
        that.confettiStage = new PIXI.Container;
        that.stage.addChild(that.cardStage, that.ambianceStage, that.resultStage, that.guiStage, that.questionStage, that.winStage, that.confettiStage);
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


function Module_31(module, exports, __webpack_require__) {
    var options = __webpack_require__(Module_29);
    var a = __webpack_require__(Module_3);
    var getActual = __webpack_require__(Module_10);
    var i = __webpack_require__(Module_32);
    var guessFunctionName = __webpack_require__(Module_8);
    var _map = __webpack_require__(Module_33);
    var inspect = __webpack_require__(Module_34);
    var Block = __webpack_require__(Module_35);
    var _onTouchCard = (__webpack_require__(Module_36), __webpack_require__(Module_37));
    /**
     * @return {undefined}
     */
    var data = function() {
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = data;
    /** @type {number} */
    data.CARD_NUMBER = 44;
    /** @type {Array} */
    data.CARD_GRID = [5, 6, 5, 6, 5, 6, 5, 6];
    /** @type {number} */
    data.CARD_GRID_UNIT_X = 128;
    /** @type {number} */
    data.CARD_GRID_UNIT_Y = 140;
    /** @type {number} */
    data.CARD_GRID_OFFSET_X = -330;
    /** @type {number} */
    data.CARD_GRID_OFFSET_Y = -540;
    /** @type {number} */
    data.CARD_IMPACT_RANGE = 32400;
    /** @type {number} */
    data.CARD_FRICTION = 20;
    /**
     * @return {undefined}
     */
    data.prototype._init = function() {
        var nextEnd;
        /** @type {Array} */
        this.targetCards = [];
        this.ttCard = PIXI.Texture.fromFrame("card");
        /** @type {Array} */
        this.ttCards = [];
        /** @type {number} */
        nextEnd = 0;
        for (; nextEnd < data.CARD_NUMBER; nextEnd++) {
            this.ttCards.push(PIXI.Texture.fromFrame("card-" + nextEnd));
        }
        /** @type {Array} */
        this.elmCards = [];
        this._show();
    };
    /**
     * @return {undefined}
     */
    data.prototype._show = function() {
        var x;
        /** @type {number} */
        var objUid = 0;
        /** @type {number} */
        var cnl = data.CARD_GRID.length;
        var map = this._shuffleCards();
        /** @type {number} */
        x = 0;
        for (; x < cnl; x++) {
            var y;
            /** @type {number} */
            y = 0;
            for (; y < data.CARD_GRID[x]; y++) {
                this._generateCard(y, x, map[objUid]);
                objUid++;
            }
        }
        options.cardStage.position.set(data.CARD_GRID_OFFSET_X, data.CARD_GRID_OFFSET_Y);
        options.cardStage.pivot.set(options.WIDTH / -2, options.HEIGHT / -2);
    };
    /**
     * @return {?}
     */
    data.prototype._shuffleCards = function() {
        var i;
        var arr;
        var chunk;
        var l;
        var listeners;
        /**
         * @param {Array} arr
         * @return {?}
         */
        var _forEach = function(arr) {
            var len = arr.length;
            var tmp = arr[len - 1];
            return arr.pop(), arr = _map(arr), arr.push(tmp), arr;
        };
        if (listeners = a.GROUP[options.assetNumber % 4], arr = a.GROUP[(options.assetNumber + 1) % 4], l = a.GROUP[(options.assetNumber + 2) % 4], l = l.concat(a.GROUP[(options.assetNumber + 3) % 4]), listeners = _forEach(listeners), arr = _map(arr), chunk = _map(listeners.concat(l)), null != CARTA_CPN.DUMMY_CARD) {
            var index = listeners.indexOf(CARTA_CPN.DUMMY_CARD);
            listeners.splice(index, 1);
            listeners.unshift(CARTA_CPN.DUMMY_CARD);
        }
        /** @type {number} */
        i = 0;
        for (; i < listeners.length - 1; i++) {
            console.log("Q" + (i + 1) + ": " + a.info[listeners[i]].name);
        }
        return this.targetCards = listeners, arr.concat(chunk);
    };
    /**
     * @param {number} v11
     * @param {number} v00
     * @param {?} i
     * @return {undefined}
     */
    data.prototype._generateCard = function(v11, v00, i) {
        var sprite = new PIXI.Sprite(this.ttCards[i]);
        var item = new PIXI.Sprite(this.ttCard);
        this.elmCards.push(item);
        options.cardStage.addChild(item);
        item.character = i;
        sprite.anchor.set(0.5);
        item.addChild(sprite);
        item.anchor.set(0.5);
        item.rotation = guessFunctionName(getActual(-45, 45));
        item.position.set(data.CARD_GRID_UNIT_X * v11 + getActual(-10, 10), data.CARD_GRID_UNIT_Y * v00 + getActual(-20, 20));
        if (v00 % 2 === 0) {
            item.position.x += data.CARD_GRID_UNIT_X / 2;
        }
        if (v00 >= 2) {
            /** @type {boolean} */
            item.interactive = true;
        }
        this._setCardInitMotion(item);
        item.on("touchstart", function() {
            this._onTouchCard(item);
        }.bind(this));
    };
    /**
     * @param {Object} element
     * @return {undefined}
     */
    data.prototype._setCardInitMotion = function(element) {
        var moveX = element.position.x;
        var moveY = element.position.y;
        var rotation = element.rotation;
        /** @type {number} */
        element.position.x = options.WIDTH / 2;
        element.position.y += options.HEIGHT;
        TweenMax.to(element.position, 2, {
            x: moveX,
            y: moveY,
            ease: Power3.easeOut
        });
        element.rotation = guessFunctionName(getActual(-180, 180));
        TweenMax.to(element, 2, {
            rotation: rotation,
            ease: Power3.easeOut
        });
    };
    /**
     * @param {Object} res
     * @return {undefined}
     */
    data.prototype._setCardTouchMotion = function(res) {
        var a;
        var al = this.elmCards.length;
        var currentPos = res.position;
        /** @type {number} */
        a = 0;
        for (; a < al; a++) {
            /** @type {number} */
            var i = 0;
            var valuesLen = this.elmCards[a].length;
            /** @type {number} */
            i = 0;
            for (; i < valuesLen; i++) {
                var box = this.elmCards[a][i];
                var pos = box.position;
                /** @type {number} */
                var width = pos.x - currentPos.x;
                /** @type {number} */
                var height = pos.y - currentPos.y;
                if (Math.pow(width, 2) + Math.pow(height, 2) < data.CARD_IMPACT_RANGE) {
                    TweenMax.to(pos, 0.5, {
                        x: pos.x + width / data.CARD_FRICTION,
                        y: pos.y + height / data.CARD_FRICTION
                    });
                    TweenMax.to(box, 0.5, {
                        rotation: box.rotation + getActual(-5, 5) / 20
                    });
                }
            }
        }
    };
    /**
     * @param {string} element
     * @return {undefined}
     */
    data.prototype.deleteCard = function(element) {
        TweenMax.to(element, 1, {
            alpha: 0,
            /**
             * @return {undefined}
             */
            onComplete: function() {
                /** @type {boolean} */
                element.visible = false;
            }
        });
    };
    /**
     * @param {?} terminator
     * @return {?}
     */
    data.prototype.getAnyCard = function(terminator) {
        var i;
        /** @type {number} */
        i = 0;
        for (; i < data.CARD_NUMBER; i++) {
            if (this.elmCards[i].character === terminator) {
                return this.elmCards[i];
            }
        }
        return console.log("ERROR: not found..."), false;
    };
    /**
     * @param {number} exports
     * @return {?}
     */
    data.prototype.getCurrentTargetCharacterId = function(exports) {
        return this.targetCards[exports - 1];
    };
    /**
     * @param {number} exports
     * @return {?}
     */
    data.prototype.getCurrentTargetCharacterPosition = function(exports) {
        return this.targetCards[exports - 1].position;
    };
    /**
     * @param {string} key
     * @return {undefined}
     */
    data.prototype._onTouchCard = function(key) {
        if (options.isInQuestionNow) {
            if (inspect(options.stage), i(key, 1), options.isInQuestionNow = false, options.currentQuestionNumber++, options.currentQuestionCharacter === key.character) {
                new Block(key.character);
                this.deleteCard(key);
            } else {
                options.sound.play("error");
                options.score.dealer++;
                var activeClassName = this.getAnyCard(options.currentQuestionCharacter);
                this.deleteCard(activeClassName);
                var control = new PIXI.Container;
                var item = (new PIXI.Graphics).beginFill(options.COLOR_TEXT).drawRect(0, 0, options.WIDTH, options.HEIGHT);
                /** @type {number} */
                item.alpha = 0.6;
                options.guiStage.addChild(control);
                control.addChild(item);
                options.gui.showBalloon("otetsuki", control, options.WIDTH / 2, options.HEIGHT / 2);
                setTimeout(function() {
                    new _onTouchCard;
                    control.destroy();
                }, 3E3);
            }
        }
    };

}


function Module_32(module, exports, __webpack_require__) {
    /**
     * @param {Object} ctx
     * @param {number} size
     * @return {undefined}
     */
    module.exports = function(ctx, size) {
        ctx.scale.set(2);
        TweenMax.to(ctx.scale, 0.3, {
            x: size,
            y: size,
            ease: Back.easeOut.config(1.4)
        });
    };

}


function Module_33(module, exports, __webpack_require__) {
    /**
     * @param {Array} arr
     * @return {?}
     */
    module.exports = function(arr) {
        var tempi;
        var j;
        var i = arr.length;
        for (; i;) {
            /** @type {number} */
            j = Math.floor(Math.random() * i--);
            tempi = arr[i];
            arr[i] = arr[j];
            arr[j] = tempi;
        }
        return arr;
    };

}


function Module_34(module, exports, __webpack_require__) {
    /**
     * @param {Object} opts
     * @return {undefined}
     */
    module.exports = function(opts) {
        /** @type {number} */
        var delta = 10;
        if (opts.isShaking !== true) {
            var x = opts.position.x;
            /** @type {boolean} */
            opts.isShaking = true;
            opts.position.x = x + delta;
            TweenMax.to(opts.position, 0.05, {
                ease: Power2.easeInOut,
                x: x - delta,
                repeat: 3,
                yoyo: true,
                /**
                 * @return {undefined}
                 */
                onComplete: function() {
                    opts.position.x = x;
                    /** @type {boolean} */
                    opts.isShaking = false;
                }
            });
        }
    };

}


function Module_35(module, exports, __webpack_require__) {
    var self = __webpack_require__(Module_29);
    var state = __webpack_require__(Module_3);
    var Node = __webpack_require__(Module_9);
    var Column = __webpack_require__(Module_11);
    var flag = __webpack_require__(Module_36);
    var Block = __webpack_require__(Module_37);
    var getActual = __webpack_require__(Module_8);
    /**
     * @param {string} options
     * @return {undefined}
     */
    var klass = function(options) {
        /** @type {string} */
        this.id = options;
        /** @type {number} */
        this._timeOffset = 0;
        this._init.apply(this);
    };
    /** @type {function (string): undefined} */
    module.exports = klass;
    /** @type {number} */
    klass.CHARACTER_OFFSET_Y = 172;
    /** @type {number} */
    klass.DURATION = 3E3;
    /**
     * @return {undefined}
     */
    klass.prototype._init = function() {
        /** @type {number} */
        self.winStage.alpha = 1;
        self.score.user++;
        self.score.card.push(this.id);
        if (self.localStrage.setMyCollection(this.id)) {
            /** @type {number} */
            this._timeOffset = 1500;
            /** @type {boolean} */
            this._isNew = true;
            setTimeout(function() {
                self.sound.play("new");
            }, 2E3);
        } else {
            /** @type {boolean} */
            this._isNew = false;
        }
        this._showCharacter();
        this._showDon();
        setTimeout(function() {
            this._showName();
        }.bind(this), 500);
    };
    /**
     * @return {undefined}
     */
    klass.prototype._showDon = function() {};
    /**
     * @return {undefined}
     */
    klass.prototype._showCharacter = function() {
        var width;
        var e;
        var data = flag({
            type: "do"
        });
        var obj = flag({
            type: "n"
        });
        var texture = PIXI.Texture.fromFrame("thunder");
        var sprite = new PIXI.Sprite(texture);
        var event = new PIXI.Sprite(texture);
        var light2 = (new PIXI.Graphics).beginFill(self.COLOR_RED).drawRect(0, 0, 280, 20);
        var light = (new PIXI.Graphics).beginFill(self.COLOR_RED).drawRect(0, 0, 180, 20);
        switch (light2.position.set(self.WIDTH / 2 - 180, self.HEIGHT / 2 + klass.CHARACTER_OFFSET_Y - 20), light.position.set(self.WIDTH / 2 + 220, self.HEIGHT / 2 + klass.CHARACTER_OFFSET_Y - 20), sprite.tint = self.COLOR_ORANGE, event.tint = self.COLOR_ORANGE, sprite.anchor.set(0.5), event.anchor.set(0.5), sprite.position.set(self.WIDTH / 2, self.HEIGHT / 2 - klass.CHARACTER_OFFSET_Y), event.position.set(self.WIDTH / 2, self.HEIGHT / 2 + klass.CHARACTER_OFFSET_Y - 10), state.info[this.id].don) {
            case 0:
                data.position.set(self.WIDTH, self.HEIGHT);
                data.position.set(self.WIDTH / 2 - 200, self.HEIGHT / 2 - 100);
                obj.position.set(self.WIDTH / 2 + 180, self.HEIGHT / 2 + 100);
                break;
            case 1:
                data.position.set(self.WIDTH / 2 - 180, self.HEIGHT / 2 + 80);
                obj.position.set(self.WIDTH / 2 + 180, self.HEIGHT / 2 + 90);
                break;
            case 2:
                data.position.set(self.WIDTH / 2 - 180, self.HEIGHT / 2 + 130);
                obj.position.set(self.WIDTH / 2 + 180, self.HEIGHT / 2 + 140);
        }
        data.scale.set(5);
        obj.scale.set(5);
        /** @type {number} */
        data.alpha = 0;
        /** @type {number} */
        obj.alpha = 0;
        self.sound.play("win");
        /** @type {boolean} */
        self.winStage.visible = true;
        /** @type {boolean} */
        self.ambianceStage.visible = false;
        /** @type {boolean} */
        self.cardStage.visible = false;
        /** @type {boolean} */
        self.guiStage.visible = false;
        /** @type {boolean} */
        self.questionStage.visible = false;
        width = PIXI.Texture.fromFrame("cutin-" + this.id);
        e = new PIXI.Sprite(width);
        e.anchor.set(0.5, 1);
        e.position.set(state.info[this.id].cutinOffset, self.HEIGHT / 2 + klass.CHARACTER_OFFSET_Y);
        e.scale.set(5);
        self.winStage.addChild(sprite, e, light2, light, event, data, obj);
        new Node(self.WIDTH, self.HEIGHT, self.confettiStage, 120);
        new Column(this.id, self.winStage, self.WIDTH, self.HEIGHT, {
            vertical: true
        });
        TweenMax.to(e.scale, 0.6, {
            x: 1,
            y: 1,
            ease: Bounce.easeOut
        });
        TweenMax.to(data, 0.6, {
            alpha: 1
        });
        TweenMax.to(obj, 0.6, {
            alpha: 1
        });
        TweenMax.to(data.scale, 0.9, {
            x: 1,
            y: 1,
            ease: Bounce.easeOut
        });
        TweenMax.to(obj.scale, 1, {
            x: 1,
            y: 1,
            ease: Bounce.easeOut
        });
        setTimeout(function() {
            /** @type {boolean} */
            self.ambianceStage.visible = true;
            /** @type {boolean} */
            self.cardStage.visible = true;
            /** @type {boolean} */
            self.guiStage.visible = true;
            /** @type {boolean} */
            self.questionStage.visible = true;
            TweenMax.to(self.winStage, 0.3, {
                alpha: 0,
                /**
                 * @return {undefined}
                 */
                onComplete: function() {
                    self.winStage.removeChildren();
                    new Block;
                }
            });
        }.bind(this), klass.DURATION + this._timeOffset);
    };
    /**
     * @return {undefined}
     */
    klass.prototype._showName = function() {
        var model = new PIXI.Container;
        var width = PIXI.Texture.fromFrame("name-" + this.id);
        var particle = new PIXI.Sprite(width);
        var mesh = (new PIXI.Graphics).lineStyle(4, self.COLOR_YELLOW, 1).drawRect(0, 0, 140, 140);
        var options = (new PIXI.Graphics).lineStyle(4, self.COLOR_YELLOW, 1).drawRect(0, 0, 140, 140);
        var x = PIXI.Texture.fromFrame("get");
        var s = new PIXI.Sprite(x);
        if (s.anchor.set(0.5), s.position.set(self.WIDTH / 2, 62), particle.anchor.set(0.5), particle.position.set(self.WIDTH / 2, 40), mesh.pivot.set(70, 70), options.pivot.set(70, 70), mesh.rotation = getActual(45), options.rotation = getActual(45), mesh.position.set(self.WIDTH / 2 - 80, 0), options.position.set(self.WIDTH / 2 + 80, 0), mesh.alpha = 0, options.alpha = 0, particle.alpha = 0, s.alpha = 0, this._isNew) {
            /** @type {number} */
            var moveY = 0;
            /** @type {number} */
            var centerY = 34;
        } else {
            /** @type {number} */
            moveY = -6;
            /** @type {number} */
            centerY = 28;
        }
        if (TweenMax.to(mesh, 1, {
                x: "+=90",
                alpha: 1,
                ease: Power3.easeOut
            }), TweenMax.to(options, 1, {
                x: "-=90",
                alpha: 1,
                ease: Power3.easeOut
            }), TweenMax.to(particle, 0.8, {
                y: moveY,
                alpha: 1,
                delay: 0.5,
                ease: Power3.easeOut
            }), TweenMax.to(s, 0.8, {
                y: centerY,
                alpha: 1,
                delay: 0.6,
                ease: Power3.easeOut
            }), model.addChild(mesh, options, particle, s), model.position.set(0, self.HEIGHT / 2 + 300), self.winStage.addChild(model), this._isNew) {
            var texture = PIXI.Texture.fromFrame("new");
            var data = new PIXI.Sprite(texture);
            data.anchor.set(0.5);
            data.position.set(self.WIDTH / 2, -40);
            /** @type {number} */
            data.alpha = 0;
            data.scale.set(2);
            TweenMax.to(data, 1.2, {
                alpha: 1,
                delay: 1.4,
                ease: Power3.easeOut
            });
            TweenMax.to(data.scale, 1.6, {
                x: 1,
                y: 1,
                delay: 1.4,
                ease: Elastic.easeOut.config(1, 0.3)
            });
            model.addChild(data);
        }
    };

}


function Module_36(module, exports, __webpack_require__) {
    var rect = __webpack_require__(Module_29);
    /**
     * @param {Object} options
     * @return {?}
     */
    module.exports = function(options) {
        var c = new PIXI.Graphics;
        return this.options = options || {}, "do" === this.options.type ? (c = c.lineStyle(5, rect.COLOR_WHITE, 1).beginFill(rect.COLOR_TEXT).drawPolygon(new PIXI.Point(0.171, 19.774), new PIXI.Point(58.582, 221.881), new PIXI.Point(90.002, 203.644), new PIXI.Point(77.289, 154.09), new PIXI.Point(138.685, 126.906), new PIXI.Point(131.173, 87.676), new PIXI.Point(67.326, 113.119), new PIXI.Point(39.978, 0.119), new PIXI.Point(0.171, 19.774)).drawPolygon(new PIXI.Point(71.751, 93.413), new PIXI.Point(68.896,
            15.48), new PIXI.Point(108.175, 7.977), new PIXI.Point(102.436, 88.656), new PIXI.Point(71.751, 93.413)).drawPolygon(new PIXI.Point(113.895, 84.996), new PIXI.Point(144.877, 87.083), new PIXI.Point(151.829, 16.108), new PIXI.Point(116.653, 14.73), new PIXI.Point(113.895, 84.996)), c.pivot.set(76, 111)) : "n" === this.options.type && (c = c.lineStyle(5, rect.COLOR_WHITE, 1).beginFill(rect.COLOR_TEXT).drawPolygon(new PIXI.Point(0, 46.769), new PIXI.Point(5.698, 0), new PIXI.Point(76.495, 6.186),
            new PIXI.Point(70.933, 41.858), new PIXI.Point(0, 46.769)).drawPolygon(new PIXI.Point(14.864, 125.31), new PIXI.Point(117.329, 20.444), new PIXI.Point(138.374, 49.113), new PIXI.Point(50.407, 153.045), new PIXI.Point(14.864, 125.31)), c.pivot.set(70, 77)), c;
    };

}


function Module_37(module, exports, __webpack_require__) {
    var options = __webpack_require__(Module_29);
    var OAuth = (__webpack_require__(Module_33), __webpack_require__(Module_11));
    var Node = __webpack_require__(Module_38);
    var Block = __webpack_require__(Module_39);
    var getActual = __webpack_require__(Module_8);
    /**
     * @return {undefined}
     */
    var LogReader = function() {
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = LogReader;
    /** @type {number} */
    LogReader.QUESTION_NUMBER = 10;
    /** @type {number} */
    LogReader.QUESTION_DELAY = 1600;
    /** @type {number} */
    LogReader.SCROOL_SIZE_X = 640;
    /** @type {number} */
    LogReader.SCROOL_SIZE_Y = 140;
    /** @type {number} */
    LogReader.SCROOL_BORDER = 12;
    /**
     * @return {undefined}
     */
    LogReader.prototype._init = function() {
        this._setQuestion();
    };
    /**
     * @return {undefined}
     */
    LogReader.prototype._setQuestion = function() {
        options.questionStage.removeChildren();
        if (options.currentQuestionNumber <= LogReader.QUESTION_NUMBER) {
            options.sound.play("kabuki");
            this._showScroll();
            setTimeout(function() {
                options.currentQuestionCharacter = options.card.getCurrentTargetCharacterId(options.currentQuestionNumber);
                /** @type {boolean} */
                options.isInQuestionNow = true;
                new OAuth(options.currentQuestionCharacter, options.questionStage, options.WIDTH, options.HEIGHT, {
                    horizontal: true
                });
                new Node(options.currentQuestionNumber, options.currentQuestionCharacter);
            }, LogReader.QUESTION_DELAY);
        } else {
            new Block;
        }
    };
    /**
     * @return {undefined}
     */
    LogReader.prototype._showScroll = function() {
        var texture = PIXI.Texture.fromFrame("scroll");
        var data = new PIXI.Sprite(texture);
        var e = (new PIXI.Graphics).beginFill(options.COLOR_PAPER).drawRect(0, 0, LogReader.SCROOL_SIZE_X, LogReader.SCROOL_SIZE_Y - 2 * LogReader.SCROOL_BORDER);
        var me = (new PIXI.Graphics).beginFill(options.COLOR_GOLD).drawRect(0, 0, LogReader.SCROOL_SIZE_X, LogReader.SCROOL_SIZE_Y);
        var self = (new PIXI.Graphics).beginFill(options.COLOR_GOLD).drawRect(0, 0, LogReader.SCROOL_BORDER, LogReader.SCROOL_SIZE_Y);
        var m = (new PIXI.Graphics).beginFill(options.COLOR_TEXT).drawRect(0, 0, 4, LogReader.SCROOL_SIZE_Y + 6);
        e.pivot.set(LogReader.SCROOL_SIZE_X / 2, (LogReader.SCROOL_SIZE_Y - 2 * LogReader.SCROOL_BORDER) / 2);
        e.position.set(options.WIDTH / 2, options.HEIGHT / 2 - 440);
        /** @type {number} */
        e.scale.x = 0;
        me.pivot.set(LogReader.SCROOL_SIZE_X / 2, LogReader.SCROOL_SIZE_Y / 2);
        me.position.set(options.WIDTH / 2, options.HEIGHT / 2 - 440);
        /** @type {number} */
        me.scale.x = 0;
        /** @type {number} */
        m.position.y = -3;
        self.addChild(m);
        self.pivot.set(LogReader.SCROOL_BORDER / 2, LogReader.SCROOL_SIZE_Y / 2);
        self.position.set(options.WIDTH / 2, options.HEIGHT / 2 - 440);
        /** @type {boolean} */
        self.visible = false;
        data.anchor.set(0.5);
        data.position.set(options.WIDTH / 2, options.HEIGHT / 2 - 440);
        options.questionStage.addChild(me, e, self, data);
        TweenMax.to(data, 0.8, {
            rotation: getActual(360),
            /**
             * @return {undefined}
             */
            onComplete: function() {
                /** @type {boolean} */
                self.visible = true;
            }
        });
        TweenMax.to(data.position, 1.2, {
            x: "+=" + LogReader.SCROOL_SIZE_X / 2,
            delay: 0.8,
            ease: Bounce.easeOut
        });
        TweenMax.to(self.position, 1.2, {
            x: "-=" + LogReader.SCROOL_SIZE_X / 2,
            delay: 0.8,
            ease: Bounce.easeOut
        });
        TweenMax.to(e.scale, 1.2, {
            x: 1,
            delay: 0.8,
            ease: Bounce.easeOut
        });
        TweenMax.to(me.scale, 1.2, {
            x: 1,
            delay: 0.8,
            ease: Bounce.easeOut
        });
    };

}


function Module_38(module, exports, __webpack_require__) {
    var options = __webpack_require__(Module_29);
    var state = __webpack_require__(Module_3);
    var compileFilter = (__webpack_require__(Module_34), __webpack_require__(Module_8));
    /**
     * @param {?} num
     * @param {string} id
     * @return {undefined}
     */
    var Game = function(num, id) {
        this.num = num;
        /** @type {string} */
        this.id = id;
        this._init.apply(this);
    };
    /** @type {function (?, string): undefined} */
    module.exports = Game;
    /** @type {number} */
    Game.ALERT_DURATION = 2E3;
    /**
     * @return {undefined}
     */
    Game.prototype._init = function() {
        this._setEnemy();
    };
    /**
     * @return {undefined}
     */
    Game.prototype._setEnemy = function() {
        var Block = __webpack_require__(Module_37);
        setTimeout(function() {
            if (this.num === options.currentQuestionNumber) {
                var group = options.gui.showBalloon("hurry", options.questionStage, options.WIDTH / 2 + 300, options.HEIGHT / 2 - 400);
                group.scale.set(0.75);
                group.rotation = compileFilter(-10);
                setTimeout(function() {
                    group.destroy();
                }, Game.ALERT_DURATION);
            }
        }.bind(this), state.info[this.id].strength - Game.ALERT_DURATION);
        setTimeout(function() {
            if (this.num === options.currentQuestionNumber) {
                options.sound.play("error");
                /** @type {boolean} */
                options.isInQuestionNow = false;
                options.currentQuestionNumber++;
                options.score.enemy++;
                var activeClassName = options.card.getAnyCard(options.currentQuestionCharacter);
                options.card.deleteCard(activeClassName);
                var element = new PIXI.Container;
                var child = (new PIXI.Graphics).beginFill(options.COLOR_TEXT).drawRect(0, 0, options.WIDTH, options.HEIGHT);
                /** @type {number} */
                child.alpha = 0.6;
                options.guiStage.addChild(element);
                element.addChild(child);
                options.gui.showBalloon("timeup", element, options.WIDTH / 2, options.HEIGHT / 2);
                setTimeout(function() {
                    TweenMax.to(element, 0.3, {
                        alpha: 0,
                        /**
                         * @return {undefined}
                         */
                        onComplete: function() {
                            element.destroy();
                        }
                    });
                    new Block;
                }, 2E3);
            }
        }.bind(this), state.info[this.id].strength);
    };

}


function Module_39(module, exports, __webpack_require__) {
    var options = __webpack_require__(Module_29);
    var meta = __webpack_require__(Module_36);
    var Node = __webpack_require__(Module_9);
    var func = __webpack_require__(Module_32);
    var oldErrorHandler = __webpack_require__(Module_12);
    var guid = __webpack_require__(Module_8);
    var IO = __webpack_require__(Module_22);
    var Block = __webpack_require__(Module_40);
    /**
     * @return {undefined}
     */
    var $ = function() {
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = $;
    /** @type {number} */
    $.CHARACTER_OFFSET_Y = 172;
    /** @type {number} */
    $.SHARE_SIZE = 120;
    /**
     * @return {undefined}
     */
    $.prototype._init = function() {
        options.sound.bgmStop();
        this._cards = options.score.card;
        this._total = this._cards.length;
        this._base = (new PIXI.Graphics).beginFill(16697877).drawRect(0, 0, options.WIDTH, options.WIDTH);
        this._show();
    };
    /**
     * @return {undefined}
     */
    $.prototype._sendResult = function() {
        var newyear2017_id = localStorage.getItem("newyear2017_id");
        if (0 === this._cards.length) {
            /** @type {string} */
            var paramString = "unique_id=" + newyear2017_id + "&score=" + this._total
        } else {
            paramString = "unique_id=" + newyear2017_id + "&score=" + this._total + "&card[]=" + this._cards.join("&card[]=");
        }
        /** @type {XMLHttpRequest} */
        var xhr = new XMLHttpRequest;
        /** @type {string} */
        var requestUri = "/api?p=karuta_post_score";
        if (void 0 !== xhr.timeout) {
            /**
             * @param {?} e
             * @return {?}
             */
            xhr.ontimeout = function(e) {
                return console.log("/////////////// timeout ///////////////"), false;
            };
            /** @type {number} */
            xhr.timeout = 2E3;
        }
        xhr.open("post", requestUri, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        /**
         * @return {?}
         */
        xhr.onreadystatechange = function() {
            if (4 == xhr.readyState && 200 == xhr.status) {
                /** @type {*} */
                var e = JSON.parse(xhr.responseText);
                return "error" === e.status && console.log("message: " + e.error.message), true;
            }
        };
        xhr.send(paramString);
    };
    /**
     * @return {undefined}
     */
    $.prototype._show = function() {
        var rectangle = (new PIXI.Graphics).beginFill(0).drawRect(0, 0, options.WIDTH, options.HEIGHT);
        /** @type {number} */
        rectangle.alpha = 0.7;
        /** @type {number} */
        this._base.x = options.WIDTH / 2;
        /** @type {number} */
        this._base.y = options.HEIGHT / 2;
        this._base.pivot.set(options.WIDTH / 2, options.WIDTH / 2);
        this._base.scale.set(0, 1);
        TweenMax.to(this._base.scale, 0.5, {
            x: 1,
            onComplete: function() {
                this._showCard();
            }.bind(this)
        });
        var ETIMEDOUT = PIXI.Texture.fromImage("../_assets/img/waveBg.png");
        var e = new PIXI.extras.TilingSprite(ETIMEDOUT, options.WIDTH, options.WIDTH);
        /** @type {number} */
        e.alpha = 0.5;
        this._base.addChild(e);
        options.resultStage.addChild(rectangle, this._base);
    };
    /**
     * @return {undefined}
     */
    $.prototype._showConfetti = function() {
        if (!(this._total <= 0)) {
            if (this._total <= 3) {
                new Node(options.WIDTH, options.HEIGHT, options.confettiStage, 6);
            } else {
                if (this._total <= 6) {
                    new Node(options.WIDTH, options.HEIGHT, options.confettiStage, 40, {
                        loop: true
                    });
                } else {
                    if (this._total <= 9) {
                        new Node(options.WIDTH, options.HEIGHT, options.confettiStage, 80, {
                            loop: true
                        });
                    } else {
                        if (10 === this._total) {
                            new Node(options.WIDTH, options.HEIGHT, options.confettiStage, 120, {
                                loop: true,
                                rainbow: true
                            });
                        }
                    }
                }
            }
        }
    };
    /**
     * @return {undefined}
     */
    $.prototype._showCard = function() {
        var i;
        var sprite;
        var x = PIXI.Texture.fromFrame("card");
        var texture = PIXI.Texture.fromFrame("resultTtl");
        /** @type {Array} */
        var textures = [];
        /** @type {Array} */
        var children = [];
        var data = new PIXI.Sprite(texture);
        data.anchor.set(0.5);
        data.position.set(options.WIDTH / 2, 122);
        /** @type {number} */
        data.alpha = 0;
        TweenMax.to(data.position, 0.3, {
            y: 82,
            ease: Power4.easeOut
        });
        TweenMax.to(data, 0.3, {
            alpha: 1
        });
        this._base.addChild(data);
        /** @type {number} */
        i = 0;
        for (; i < this._total; i++) {
            textures.push(PIXI.Texture.fromFrame("card-" + this._cards[i]));
            children.push(new PIXI.Sprite(x));
            children[i].anchor.set(0.5);
            sprite = new PIXI.Sprite(textures[i]);
            sprite.anchor.set(0.5);
            children[i].addChild(sprite);
            children[i].position.set(options.WIDTH / 2 + 72 * i - 36 * (this._total - 1), 196);
            children[i].rotation = guid(8);
            /** @type {number} */
            children[i].alpha = 0;
            children[i].scale.set(5);
            this._base.addChild(children[i]);
            if (i === this._total - 1) {
                TweenMax.to(children[i], 0.1, {
                    alpha: 1,
                    delay: 5 * i / 10 + 0.3,
                    onComplete: function() {
                        options.sound.play("drum");
                        setTimeout(function() {
                            this._showConfetti();
                            this._showScore();
                            this._showShare();
                            this._showLink();
                        }.bind(this), 1600);
                    }.bind(this)
                });
            } else {
                TweenMax.to(children[i], 0.1, {
                    alpha: 1,
                    delay: 5 * i / 10 + 0.3,
                    /**
                     * @return {undefined}
                     */
                    onComplete: function() {
                        options.sound.play("drum");
                    }
                });
            }
            TweenMax.to(children[i].scale, 0.3, {
                x: 1,
                y: 1,
                delay: 5 * i / 10 + 0.3,
                ease: Bounce.easeOut
            });
        }
        if (0 === this._total) {
            setTimeout(function() {
                this._showScore();
                this._showShare();
                this._showLink();
            }.bind(this), 1600);
        }
    };
    /**
     * @return {undefined}
     */
    $.prototype._showScore = function() {
        options.sound.play("jingle");
        var model = (new PIXI.Graphics).beginFill(options.COLOR_TEXT).drawRect(0, 0, 4, 100);
        model.rotation = guid(45);
        var camera = new PIXI.Text("10", {
            fontFamily: "Montserrat",
            fontSize: 40,
            fontWeight: "bold",
            fill: options.COLOR_TEXT
        });
        var item = new PIXI.Text(String(this._total), {
            fontFamily: "Montserrat",
            fontSize: 196,
            fontWeight: "bold",
            fill: options.COLOR_TEXT
        });
        if (3 < this._total) {
            var sphere = meta({
                type: "do"
            });
            var m = meta({
                type: "n"
            });
            sphere.position.set(options.WIDTH / 2 - 300, 444);
            m.position.set(options.WIDTH / 2 + 320, 464);
            sphere.scale.set(1.5);
            m.scale.set(1.5);
            this._base.addChild(sphere, m);
        }
        item.position.set(options.WIDTH / 2, 372);
        item.anchor.set(0.5);
        this._base.addChild(item);
        var texture = PIXI.Texture.fromFrame("cardUnit");
        var sprite = new PIXI.Sprite(texture);
        sprite.anchor.set(0, 1);
        if (this._total < 10) {
            sprite.position.set(120, 76);
            model.position.set(92, 42);
            camera.position.set(70, 72);
        } else {
            sprite.position.set(150, 76);
            model.position.set(122, 42);
            camera.position.set(100, 72);
            setTimeout(function() {
                this._showPerfect();
            }.bind(this), 2E3);
        }
        item.addChild(sprite, camera, model);
    };
    /**
     * @return {undefined}
     */
    $.prototype._showPerfect = function() {
        options.sound.play("perfect");
        var i;
        /** @type {number} */
        i = 0;
        for (; i < 7; i++) {
            if (4 === i) {
                var size = PIXI.Texture.fromFrame("perfect-1");
                var data = new PIXI.Sprite(size);
            } else {
                size = PIXI.Texture.fromFrame("perfect-" + i);
                data = new PIXI.Sprite(size);
            }
            /** @type {number} */
            data.alpha = 0;
            data.anchor.set(0.5);
            data.scale.set(5);
            TweenMax.to(data, 0.5, {
                alpha: 1,
                delay: 0.05 * i
            });
            TweenMax.to(data.scale, 1.2, {
                x: 1,
                y: 1,
                delay: 0.05 * i,
                ease: Elastic.easeOut.config(1, 0.5)
            });
            data.position.set(options.WIDTH / 2 + 50 * i - 150, 372);
            this._base.addChild(data);
        }
    };
    /**
     * @return {undefined}
     */
    $.prototype._showShare = function() {
        var item = new PIXI.Container;
        var texture = PIXI.Texture.fromFrame("shareTtl");
        var sprite = new PIXI.Sprite(texture);
        var self = new PIXI.Container;
        var opts = new PIXI.Container;
        /**
         * @param {Object} self
         * @param {string} config
         * @param {number} nodeLength
         * @param {number} opt_attributes
         * @return {undefined}
         */
        var init = function(self, config, nodeLength, opt_attributes) {
            var data = (new PIXI.Graphics).beginFill(options.COLOR_TEXT).drawRect(0, 0, $.SHARE_SIZE, $.SHARE_SIZE);
            var mesh = (new PIXI.Graphics).beginFill(opt_attributes).drawRect(0, 0, $.SHARE_SIZE - 8, $.SHARE_SIZE - 8);
            var model = (new PIXI.Graphics).beginFill(options.COLOR_WHITE).drawRect(0, 0, $.SHARE_SIZE - 16, $.SHARE_SIZE - 16);
            var head = (new PIXI.Graphics).beginFill(opt_attributes).drawRect(0, 0, $.SHARE_SIZE - 20, $.SHARE_SIZE - 20);
            var x = PIXI.Texture.fromFrame(config);
            var p = new PIXI.Sprite(x);
            var event = new PIXI.Text(config, {
                fill: options.COLOR_WHITE,
                fontSize: 26,
                fontFamily: "Montserrat",
                fontWeight: "bold"
            });
            p.anchor.set(0.5);
            p.position.y -= 30;
            data.pivot.set($.SHARE_SIZE / 2, $.SHARE_SIZE / 2);
            mesh.pivot.set(($.SHARE_SIZE - 8) / 2, ($.SHARE_SIZE - 8) / 2);
            model.pivot.set(($.SHARE_SIZE - 16) / 2, ($.SHARE_SIZE - 16) / 2);
            head.pivot.set(($.SHARE_SIZE - 20) / 2, ($.SHARE_SIZE - 20) / 2);
            data.rotation = guid(45);
            mesh.rotation = guid(45);
            model.rotation = guid(45);
            head.rotation = guid(45);
            event.anchor.set(0.5);
            /** @type {number} */
            event.position.y = 10;
            self.addChild(data, mesh, model, head, event, p);
            self.position.set(options.WIDTH / 2 + nodeLength, 634);
            /** @type {boolean} */
            self.interactive = true;
        };
        sprite.anchor.set(0.5);
        sprite.position.set(options.WIDTH / 2, 524);
        init(self, "Twitter", -90, 5614830);
        init(opts, "LINE", 90, 49920);
        item.addChild(self, opts);
        self.on("touchstart", function() {
            func(self, 1);
        }).on("tap", function() {
            ga("send", "event", "outbound", "linkclick", "resultmodal-share-twitter", 1);
            /** @type {string} */
            var message = "\u7d50\u679c\u306f\u3010" + this._total + "\u679a\u3011\uff01\r\nWeb\u4f01\u753b #\u30b5\u30a6\u30b9\u30c8\u304b\u308b\u305f \u306b\u30c1\u30e3\u30ec\u30f3\u30b8\u3057\u3066\u307f\u305f";
            oldErrorHandler(message, options.BASE_URL + "?s=" + this._total, "twitter");
        }.bind(this));
        opts.on("touchstart", function() {
            func(opts, 1);
        }).on("tap", function() {
            ga("send", "event", "outbound", "linkclick", "resultmodal-share-line", 1);
            /** @type {string} */
            var message = "\u7d50\u679c\u306f\u3010" + this._total + "\u679a\u3011\uff01 Web\u4f01\u753b\u300c\u30b5\u30a6\u30b9\u30c8\u304b\u308b\u305f\u300d\u306b\u30c1\u30e3\u30ec\u30f3\u30b8\u3057\u3066\u307f\u305f";
            oldErrorHandler(message, options.BASE_URL + "?s=" + this._total, "line");
        }.bind(this));
        item.addChild(sprite);
        this._base.addChild(item);
    };
    /**
     * @return {undefined}
     */
    $.prototype._showLink = function() {
        TweenMax.to(this._base, 1, {
            y: "-=60",
            ease: Power4.easeOut,
            delay: 0.3
        });
        var doc = new PIXI.Container;
        var opts = new PIXI.Container;
        /**
         * @param {?} view
         * @param {string} id
         * @param {number} opt_attributes
         * @param {number} nodeLength
         * @return {undefined}
         */
        var init = function(view, id, opt_attributes, nodeLength) {
            var self = (new PIXI.Graphics).lineStyle(10, options.COLOR_YELLOW, 1).drawRect(0, 0, 320, 100);
            var obj = (new PIXI.Graphics).beginFill(options.COLOR_RED).drawRect(0, 0, 320, 100);
            var texture = PIXI.Texture.fromFrame(id);
            var sprite = new PIXI.Sprite(texture);
            self.pivot.set(160, 50);
            obj.pivot.set(160, 50);
            sprite.anchor.set(0.5);
            sprite.position.set(160, 50);
            self.addChild(sprite);
            view.addChild(obj, self);
            view.position.set(options.WIDTH / 2 + opt_attributes, options.HEIGHT / 2 + 440);
            /** @type {boolean} */
            obj.interactive = true;
            /** @type {number} */
            self.alpha = 0;
            /** @type {number} */
            obj.alpha = 0;
            /** @type {number} */
            obj.y = -40;
            TweenMax.to(self, 1, {
                y: "-=40",
                alpha: 1,
                delay: nodeLength,
                ease: Power4.easeOut
            });
            obj.on("touchstart", function() {
                func(self, 1);
            }).on("tap", function() {
                switch (id) {
                    case "replay":
                        if (ga("send", "event", "link", "linkclick", "resultmodal-replay", 1), 3 === options.timesOfAttempt || (5 === options.timesOfAttempt || options.timesOfAttempt % 10 === 0)) {
                            /** @type {(HTMLElement|null)} */
                            var tableview = document.getElementById("modal__contentsThumbnail");
                            tableview.addEventListener("click", function() {
                                ga("send", "event", "link", "linkclick", "appmodal-movie", 1);
                                new Block;
                            });
                            new IO("c");
                        } else {
                            /** @type {string} */
                            window.location.href = options.BASE_URL + "play/";
                        }
                        break;
                    case "collection":
                        ga("send", "event", "link", "linkclick", "resultmodal-mycollection", 1);
                        /** @type {string} */
                        window.location.href = options.BASE_URL + "collection/";
                }
            });
        };
        options.resultStage.addChild(doc, opts);
        init(doc, "replay", -180, 0.5);
        init(opts, "collection", 180, 0.7);
    };

}


function Module_40(module, exports, __webpack_require__) {
    /** @type {function (): undefined} */
    var Type = ($sanitize(29), function() {
        this._init.apply(this);
    });
    /** @type {function (): undefined} */
    module.exports = Type;
    /** @type {number} */
    Type.Movie_CLOUD_NUMBER = 4;
    /**
     * @return {undefined}
     */
    Type.prototype._init = function() {
        /** @type {(HTMLElement|null)} */
        var element = document.getElementById("movie");
        /** @type {(HTMLElement|null)} */
        var tableview = (document.getElementById("movie__item"), document.getElementById("movie__close"));
        /** @type {(HTMLElement|null)} */
        var next = document.getElementById("movie__loading");
        /** @type {(HTMLElement|null)} */
        var player = document.getElementById("movie__source");
        /**
         * @return {undefined}
         */
        var update = function() {
            TweenMax.to(element, 0.3, {
                opacity: 0,
                /**
                 * @return {undefined}
                 */
                onComplete: function() {
                    /** @type {string} */
                    element.style.display = "none";
                    /** @type {string} */
                    next.style.display = "block";
                }
            });
            player.pause();
        };
        player.load();
        /**
         * @return {undefined}
         */
        player.oncanplay = function() {
            TweenMax.to(next, 0.3, {
                opacity: 0,
                /**
                 * @return {undefined}
                 */
                onComplete: function() {
                    /** @type {string} */
                    next.style.display = "none";
                }
            });
        };
        /** @type {string} */
        element.style.display = "block";
        TweenMax.to(element, 0.3, {
            opacity: 1,
            /**
             * @return {undefined}
             */
            onComplete: function() {
                player.play();
            }
        });
        tableview.addEventListener("click", function() {
            update();
        });
    };

}


function Module_41(module, exports, __webpack_require__) {
    var options = __webpack_require__(Module_29);
    var nodes = __webpack_require__(Module_37);
    var Image = __webpack_require__(Module_42);
    var Block = __webpack_require__(Module_31);
    var inspect = __webpack_require__(Module_34);
    var expect = __webpack_require__(Module_32);
    var guid = __webpack_require__(Module_8);
    var getActual = __webpack_require__(Module_10);
    var helper = __webpack_require__(Module_27);
    /**
     * @return {undefined}
     */
    var LogReader = function() {
        /** @type {null} */
        this.elmScrollBg = null;
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = LogReader;
    /** @type {number} */
    LogReader.MODAL_SIZE = 600;
    /** @type {number} */
    LogReader.BTN_SIZE = 136;
    /**
     * @return {undefined}
     */
    LogReader.prototype._init = function() {
        this.showHowTo();
    };
    /**
     * @return {undefined}
     */
    LogReader.prototype._showCtrl = function() {
        var doc = new PIXI.Container;
        var opts = new PIXI.Container;
        /**
         * @param {?} view
         * @param {string} config
         * @param {number} opt_attributes
         * @return {undefined}
         */
        var init = function(view, config, opt_attributes) {
            var model = (new PIXI.Graphics).beginFill(options.COLOR_TEXT).drawRect(0, 0, LogReader.BTN_SIZE, LogReader.BTN_SIZE);
            var data = (new PIXI.Graphics).beginFill(options.COLOR_YELLOW).drawRect(0, 0, LogReader.BTN_SIZE - 12, LogReader.BTN_SIZE - 12);
            var self = (new PIXI.Graphics).beginFill(options.COLOR_TEXT).drawRect(0, 0, LogReader.BTN_SIZE - 22, LogReader.BTN_SIZE - 22);
            var mesh = (new PIXI.Graphics).beginFill(options.COLOR_YELLOW).drawRect(0, 0, LogReader.BTN_SIZE - 26, LogReader.BTN_SIZE - 26);
            var item = new PIXI.Text(config, {
                fill: options.COLOR_TEXT,
                fontSize: 24,
                fontFamily: "Montserrat",
                fontWeight: "bold"
            });
            model.pivot.set(LogReader.BTN_SIZE / 2, LogReader.BTN_SIZE / 2);
            data.pivot.set((LogReader.BTN_SIZE - 12) / 2, (LogReader.BTN_SIZE - 12) / 2);
            self.pivot.set((LogReader.BTN_SIZE - 22) / 2, (LogReader.BTN_SIZE - 22) / 2);
            mesh.pivot.set((LogReader.BTN_SIZE - 26) / 2, (LogReader.BTN_SIZE - 26) / 2);
            model.rotation = guid(45);
            data.rotation = guid(45);
            self.rotation = guid(45);
            mesh.rotation = guid(45);
            item.anchor.set(0.5);
            /** @type {number} */
            item.position.y = -20;
            view.addChild(model, data, self, mesh, item);
            view.position.set(options.WIDTH / 2 + opt_attributes, options.HEIGHT);
        };
        init(doc, "BACK", -108);
        init(opts, "SOUND", 108);
        options.guiStage.addChild(doc, opts);
        /** @type {boolean} */
        doc.interactive = true;
        /** @type {boolean} */
        opts.interactive = true;
        if (!options.isSound) {
            /** @type {number} */
            opts.alpha = 0.7;
        }
        doc.on("touchstart", function() {
            expect(doc, 1);
        }).on("tap", function() {
            ga("send", "event", "link", "linkclick", "play-back", 1);
            window.location.href = options.BASE_URL;
        });
        opts.on("touchstart", function() {
            expect(opts, 1);
        }).on("tap", function() {
            ga("send", "event", "link", "linkclick", "play-sound", 1);
            if (options.isSound) {
                /** @type {number} */
                opts.alpha = 0.7;
                options.sound.pause();
                /** @type {boolean} */
                options.isSound = false;
            } else {
                /** @type {boolean} */
                options.isSound = true;
                options.sound.start();
                /** @type {number} */
                opts.alpha = 1;
            }
            localStorage.setItem("newyear2017_isSound", options.isSound);
        });
    };
    /**
     * @return {undefined}
     */
    LogReader.prototype.showHowTo = function() {
        var that = new PIXI.Container;
        var data = (new PIXI.Graphics).lineStyle(12, options.COLOR_RED, 1).drawRect(0, 0, LogReader.MODAL_SIZE, LogReader.MODAL_SIZE);
        var rtt = (new PIXI.Graphics).lineStyle(2, options.COLOR_RED, 1).drawRect(0, 0, LogReader.MODAL_SIZE - 30, LogReader.MODAL_SIZE - 30);
        var item = (new PIXI.Graphics).beginFill(options.COLOR_PAPER).drawRect(0, 0, LogReader.MODAL_SIZE, LogReader.MODAL_SIZE);
        var s = (new PIXI.Graphics).beginFill(0).drawRect(0, 0, options.WIDTH, options.HEIGHT);
        var texture = PIXI.Texture.fromFrame("howtoTtl");
        var self = new PIXI.Sprite(texture);
        var state = new PIXI.Text("HOW  TO  PLAY", {
            fill: options.COLOR_RED,
            fontSize: 16,
            fontFamily: "Montserrat",
            fontWeight: "bold"
        });
        var width = PIXI.Texture.fromFrame("startBtn");
        var sprite = new PIXI.Sprite(width);
        var model = (new PIXI.Graphics).lineStyle(6, options.COLOR_RED, 1).beginFill(options.COLOR_PAPER).drawRect(0, 0, 234, 74);
        var m = (new PIXI.Graphics).beginFill(options.COLOR_RED).drawRect(0, 0, LogReader.MODAL_SIZE - 30, 2);
        var ETIMEDOUT = PIXI.Texture.fromFrame("howtotext");
        var e = new PIXI.Sprite(ETIMEDOUT);
        var mesh = (new PIXI.Graphics).beginFill(options.COLOR_GOLD).drawRect(0, 0, LogReader.MODAL_SIZE - 32, 108);
        var x = PIXI.Texture.fromFrame("plum");
        /** @type {Array} */
        var children = [];
        /** @type {Array} */
        var nodes = [];
        /** @type {number} */
        var i = 0;
        /**
         * @return {undefined}
         */
        var create = function() {
            var i;
            var x = PIXI.Texture.fromFrame("card");
            /** @type {Array} */
            var arr = [];
            /** @type {number} */
            var padLength = 3;
            var value = new PIXI.Container;
            /** @type {Array} */
            var points = [{
                x: 0,
                y: -84,
                r: 8
            }, {
                x: -80,
                y: -62,
                r: -15
            }, {
                x: 68,
                y: -54,
                r: 30
            }];
            that.addChild(value);
            /** @type {number} */
            i = 0;
            for (; i < padLength; i++) {
                var texture = PIXI.Texture.fromFrame("card-" + i);
                var sprite = new PIXI.Sprite(texture);
                sprite.anchor.set(0.5);
                arr.push(new PIXI.Sprite(x));
                arr[i].anchor.set(0.5);
                arr[i].scale.set(0.8);
                /** @type {number} */
                arr[i].alpha = 0;
                arr[i].position.set(0, 0);
                arr[i].addChild(sprite);
                TweenMax.to(arr[i], 1.2, {
                    alpha: 1,
                    x: points[i].x,
                    y: points[i].y,
                    rotation: guid(points[i].r),
                    ease: Power4.easeOut,
                    delay: 1.4
                });
                value.addChildAt(arr[i], 0);
            }
        };
        /**
         * @return {undefined}
         */
        var init = function() {
            var obj = new PIXI.Container;
            obj.y += 136;
            that.addChild(obj);
            var context = (new PIXI.Graphics).lineStyle(4, options.COLOR_TEXT, 1).beginFill(10393748).drawRect(0, 0, 24, 24);
            context.pivot.set(12, 12);
            context.position.x -= 54;
            var data = (new PIXI.Graphics).beginFill(options.COLOR_YELLOW).drawPolygon(new PIXI.Point(0, 12), new PIXI.Point(14, 23), new PIXI.Point(35, 0), new PIXI.Point(14, 13), new PIXI.Point(5, 7), new PIXI.Point(0, 12));
            data.pivot.set(17, 12);
            data.position.set(-53, -1);
            var sprite = new PIXI.Text("SOUND ON", {
                fill: options.COLOR_TEXT,
                fontSize: 18,
                fontFamily: "Montserrat",
                fontWeight: "bold"
            });
            sprite.position.x += 24;
            sprite.anchor.set(0.5);
            obj.addChild(sprite, context, data);
            /** @type {boolean} */
            obj.interactive = true;
            if (!options.isSound) {
                /** @type {boolean} */
                data.visible = false;
                /** @type {number} */
                obj.alpha = 0.5;
            }
            obj.on("touchstart", function() {
                if (options.isSound) {
                    /** @type {boolean} */
                    options.isSound = false;
                    /** @type {boolean} */
                    data.visible = false;
                    TweenMax.to(obj, 0.3, {
                        alpha: 0.5
                    });
                } else {
                    /** @type {boolean} */
                    options.isSound = true;
                    options.sound.play("on");
                    /** @type {boolean} */
                    data.visible = true;
                    data.scale.set(5);
                    TweenMax.to(data.scale, 0.3, {
                        x: 1,
                        y: 1,
                        ease: Back.easeOut.config(2)
                    });
                    TweenMax.to(obj, 0.3, {
                        alpha: 1
                    });
                }
                localStorage.setItem("newyear2017_isSound", options.isSound);
            }.bind(this));
        };
        e.anchor.set(0.5);
        e.position.set(0, 62);
        sprite.anchor.set(0.5);
        sprite.position.set(117, 37);
        model.pivot.set(117, 37);
        model.position.set(0, 214);
        model.addChild(sprite);
        mesh.pivot.set((LogReader.MODAL_SIZE - 32) / 2, 46);
        /** @type {number} */
        mesh.position.y = LogReader.MODAL_SIZE / -2 + 62;
        /** @type {number} */
        i = 0;
        for (; i < 3; i++) {
            children.push(new PIXI.Sprite(x));
            children[i].position.set(LogReader.MODAL_SIZE / 2 - 64 + i % 2 * 30, -100 + i % 2 * 10);
            children[i].anchor.set(0.5);
            children[i].tint = options.COLOR_RED;
            children[i].mask = mesh;
            self.addChild(children[i]);
            TweenMax.to(children[i], 8, {
                y: "+=186",
                rotation: guid(getActual(90, 150)),
                repeat: -1,
                delay: 2 * i - 7,
                ease: Power0.easeNone
            });
        }
        /** @type {number} */
        i = 0;
        for (; i < 3; i++) {
            nodes.push(new PIXI.Sprite(x));
            nodes[i].position.set(-LogReader.MODAL_SIZE / 2 + 64 - i % 2 * 30, -100 + i % 2 * 12);
            nodes[i].anchor.set(0.5);
            nodes[i].tint = options.COLOR_RED;
            nodes[i].mask = mesh;
            self.addChild(nodes[i]);
            TweenMax.to(nodes[i], 8, {
                y: "+=186",
                rotation: guid(getActual(270, 359)),
                repeat: -1,
                delay: 2 * i - 8,
                ease: Power0.easeNone
            });
        }
        state.anchor.set(0.5);
        /** @type {number} */
        state.position.y = 30;
        self.anchor.set(0.5);
        self.addChild(state, m);
        m.pivot.set((LogReader.MODAL_SIZE - 30) / 2, 1);
        /** @type {number} */
        m.position.y = 62;
        /** @type {number} */
        self.position.y = LogReader.MODAL_SIZE / -2 + 62;
        data.pivot.set(LogReader.MODAL_SIZE / 2, LogReader.MODAL_SIZE / 2);
        rtt.pivot.set((LogReader.MODAL_SIZE - 30) / 2, (LogReader.MODAL_SIZE - 30) / 2);
        item.pivot.set(LogReader.MODAL_SIZE / 2, LogReader.MODAL_SIZE / 2);
        that.position.set(options.WIDTH / 2, options.HEIGHT / 2 + 40);
        /** @type {number} */
        that.alpha = 0;
        /** @type {number} */
        s.alpha = 0;
        TweenMax.to(s, 1, {
            alpha: 0.4,
            /**
             * @return {undefined}
             */
            onComplete: function() {
                new Image;
                TweenMax.to(that.position, 0.5, {
                    y: options.HEIGHT / 2 - 40
                });
                TweenMax.to(that, 0.5, {
                    alpha: 1
                });
            }
        });
        that.addChild(item, data, rtt, e, mesh, model, self);
        init();
        create();
        options.guiStage.addChild(s, that);
        /** @type {boolean} */
        model.interactive = true;
        model.on("touchstart", function() {
            expect(model, 1);
        }).on("tap", function() {
            options.sound.play("bgm");
            new helper;
            this._showCtrl();
            TweenMax.to(s, 0.5, {
                alpha: 0,
                /**
                 * @return {undefined}
                 */
                onComplete: function() {
                    that.destroy();
                    s.destroy();
                    options.card = new Block;
                    setTimeout(function() {
                        new nodes;
                    }, 2E3);
                }
            });
            TweenMax.to(that.position, 0.5, {
                y: options.HEIGHT / 2 + 40
            });
            TweenMax.to(that, 0.5, {
                alpha: 0
            });
        }.bind(this));
    };
    /**
     * @param {string} delay
     * @param {?} control
     * @param {number} storageKey
     * @param {number} text
     * @return {?}
     */
    LogReader.prototype.showBalloon = function(delay, control, storageKey, text) {
        var texture = PIXI.Texture.fromFrame("balloon");
        var item = new PIXI.Sprite(texture);
        var img = PIXI.Texture.fromFrame(delay);
        var sprite = new PIXI.Sprite(img);
        return sprite.anchor.set(0.5), item.anchor.set(0.5), item.position.set(storageKey, text), item.addChild(sprite), control.addChild(item), inspect(item), item;
    };

}


function Module_42(module, exports, __webpack_require__) {
    var engine = __webpack_require__(Module_29);
    /** @type {function (): undefined} */
    var data = (__webpack_require__(Module_8), function() {
        this._init.apply(this);
    });
    /** @type {function (): undefined} */
    module.exports = data;
    /** @type {number} */
    data.AMBIANCE_CLOUD_NUMBER = 4;
    /** @type {Array} */
    data.AMBIANCE_CLOUD_POSITION = [60, 300, 600, 900];
    /** @type {Array} */
    data.AMBIANCE_CLOUD_OFFSET = [0, 100, 500, 200];
    /** @type {Array} */
    data.AMBIANCE_CLOUD_SPEED = [1.5, 0.5, 1.5, 1];
    /**
     * @return {undefined}
     */
    data.prototype._init = function() {
        this._showCloud();
    };
    /**
     * @return {undefined}
     */
    data.prototype._showCloud = function() {
        var i;
        /** @type {Array} */
        var nodes = [];
        var e = PIXI.Texture.fromFrame("cloud");
        /**
         * @param {?} last
         * @param {?} info
         * @return {undefined}
         */
        var process = function(last, info) {
            last.tilePosition.x -= info;
            setTimeout(function() {
                process(last, info);
            }, 80);
        };
        /** @type {number} */
        i = 0;
        for (; i < data.AMBIANCE_CLOUD_NUMBER; i++) {
            nodes.push(new PIXI.extras.TilingSprite(e, engine.WIDTH, 128));
            /** @type {number} */
            nodes[i].alpha = 0.5;
            nodes[i].position.set(0, data.AMBIANCE_CLOUD_POSITION[i]);
            nodes[i].tilePosition.set(data.AMBIANCE_CLOUD_OFFSET[i], 0);
            process(nodes[i], data.AMBIANCE_CLOUD_SPEED[i]);
            engine.ambianceStage.addChild(nodes[i]);
            if (i % 2 === 1) {
                nodes[i].tileScale.set(-1, 1);
            }
        }
    };

}


function Module_43(module, exports, __webpack_require__) {
    var data = __webpack_require__(Module_29);
    /**
     * @return {undefined}
     */
    var LogReader = function() {
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = LogReader;
    /**
     * @return {undefined}
     */
    LogReader.prototype._init = function() {
        /** @type {Array} */
        this.myCollection = [];
        if (localStorage.getItem("newyear2017_timesOfAttempt")) {
            data.timesOfAttempt = localStorage.getItem("newyear2017_timesOfAttempt");
        } else {
            /** @type {number} */
            data.timesOfAttempt = 0;
        }
        data.timesOfAttempt++;
        localStorage.setItem("newyear2017_timesOfAttempt", data.timesOfAttempt);
        if (localStorage.getItem("newyear2017_isSound")) {
            if ("true" === localStorage.getItem("newyear2017_isSound")) {
                /** @type {boolean} */
                data.isSound = true;
            } else {
                if ("false" === localStorage.getItem("newyear2017_isSound")) {
                    /** @type {boolean} */
                    data.isSound = false;
                }
            }
        } else {
            /** @type {boolean} */
            data.isSound = true;
        }
        localStorage.setItem("newyear2017_isSound", data.isSound);
        if (localStorage.getItem("newyear2017_myCollection")) {
            /** @type {*} */
            this.myCollection = JSON.parse(localStorage.getItem("newyear2017_myCollection"));
        }
    };
    /**
     * @param {?} suite
     * @return {?}
     */
    LogReader.prototype.setMyCollection = function(suite) {
        return this.myCollection.indexOf(suite) === -1 && (this.myCollection.push(suite), this.myCollection.sort(function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        }), localStorage.setItem("newyear2017_myCollection", JSON.stringify(this.myCollection)), true);
    };

}


function Module_44(module, exports, __webpack_require__) {
    var Block = __webpack_require__(Module_29);
    var nodes = __webpack_require__(Module_3);
    /**
     * @return {undefined}
     */
    var LogReader = function() {
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = LogReader;
    /** @type {number} */
    LogReader.ASSET_GROUP_NUMBER = 4;
    /**
     * @return {undefined}
     */
    LogReader.prototype._init = function() {
        Block.assetNumber = this._setAsset();
    };
    /**
     * @return {?}
     */
    LogReader.prototype._setAsset = function() {
        if (null != CARTA_CPN.DUMMY_CARD) {
            var i;
            var valuesLen = nodes.GROUP.length;
            /** @type {number} */
            i = 0;
            for (; i < valuesLen; i++) {
                if (nodes.GROUP[i].indexOf(CARTA_CPN.DUMMY_CARD) >= 0) {
                    return i;
                }
            }
            return 0;
        }
        return CARTA_CPN.IS_FEVER ? Block.timesOfAttempt % LogReader.ASSET_GROUP_NUMBER : Block.timesOfAttempt % (LogReader.ASSET_GROUP_NUMBER - 1);
    };

}


function Module_45(module, exports, __webpack_require__) {
    var range = __webpack_require__(Module_29);
    __webpack_require__(Module_46);
    /**
     * @return {undefined}
     */
    var $ = function() {
        /** @type {string} */
        this._soundStatus = "";
        this._init.apply(this);
    };
    /** @type {function (): undefined} */
    module.exports = $;
    /**
     * @return {undefined}
     */
    $.prototype._init = function() {
        this._sprite = new Howl({
            src: ["../_assets/audio/sprite.m4a?v=2"],
            sprite: {
                win: [54, 1150],
                drum: [1648, 900],
                on: [2900, 380],
                kabuki: [3700, 4100],
                new: [8307, 1194],
                perfect: [9911, 2340],
                error: [13380, 500]
            }
        });
        this._jingle = new Howl({
            src: ["../_assets/audio/jingle_01.m4a?v=2"],
            sprite: {
                start: [0, 15200],
                loop: [3050, 12150]
            },
            onend: function() {
                this._jingle.play("loop");
            }.bind(this)
        });
        this._bgm = new Howl({
            src: ["../_assets/audio/bgm_01_1.m4a?v=2"],
            loop: true
        });
        document.addEventListener("visibilitychange", function() {
            if (document.hidden && range.isSound) {
                this.pause();
            } else {
                if (document.hidden === false && (range.isSound && "bgm" === this._soundStatus)) {
                    this._bgm.play();
                } else {
                    if (document.hidden === false) {
                        if (range.isSound) {
                            if ("jingle" === this._soundStatus) {
                                this._jingle.play("loop");
                            }
                        }
                    }
                }
            }
        }.bind(this), false);
    };
    /**
     * @param {string} name
     * @return {?}
     */
    $.prototype.play = function(name) {
        if ("bgm" === name && (this._soundStatus = "bgm"), !range.isSound || document.hidden) {
            return 0;
        }
        switch (name) {
            case "bgm":
                this._bgm.play();
                break;
            case "win":
                this._sprite.play("win");
                break;
            case "drum":
                this._sprite.play("drum");
                break;
            case "on":
                this._sprite.play("on");
                break;
            case "error":
                this._sprite.play("error");
                break;
            case "kabuki":
                this._sprite.play("kabuki");
                break;
            case "new":
                this._sprite.play("new");
                break;
            case "perfect":
                this._sprite.play("perfect");
                break;
            case "jingle":
                this._jingle.play("start");
                /** @type {string} */
                this._soundStatus = "jingle";
                break;
            default:
                console.log("error: not found sound file");
        }
    };
    /**
     * @return {undefined}
     */
    $.prototype.start = function() {
        if (range.isSound && "bgm" === this._soundStatus) {
            this._bgm.play();
        } else {
            if (range.isSound) {
                if ("jingle" === this._soundStatus) {
                    this._jingle.play("loop");
                }
            }
        }
    };
    /**
     * @return {undefined}
     */
    $.prototype.bgmStop = function() {
        this._bgm.stop();
        /** @type {string} */
        this._soundStatus = "";
    };
    /**
     * @return {undefined}
     */
    $.prototype.pause = function() {
        this._sprite.stop();
        this._jingle.stop();
        this._bgm.pause();
    };

}


function Module_46(module, exports, __webpack_require__) {
    var camelKey;
    var data;
    (function(exports) {
        ! function() {
            /**
             * @return {undefined}
             */
            var Button = function() {
                this.init();
            };
            Button.prototype = {
                /**
                 * @return {?}
                 */
                init: function() {
                    var parent = this || self;
                    return parent._codecs = {}, parent._howls = [], parent._muted = false, parent._volume = 1, parent._canPlayEvent = "canplaythrough", parent._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, parent.masterGain = null, parent.noAudio = false, parent.usingWebAudio = true, parent.autoSuspend = true, parent.ctx = null, parent.mobileAutoEnable = true, parent._setup(), parent;
                },
                /**
                 * @param {number} v
                 * @return {?}
                 */
                volume: function(v) {
                    var that = this || self;
                    if (v = parseFloat(v), that.ctx || init(), "undefined" != typeof v && (v >= 0 && v <= 1)) {
                        if (that._volume = v, that._muted) {
                            return that;
                        }
                        if (that.usingWebAudio) {
                            /** @type {number} */
                            that.masterGain.gain.value = v;
                        }
                        /** @type {number} */
                        var key = 0;
                        for (; key < that._howls.length; key++) {
                            if (!that._howls[key]._webAudio) {
                                var codeSegments = that._howls[key]._getSoundIds();
                                /** @type {number} */
                                var i = 0;
                                for (; i < codeSegments.length; i++) {
                                    var o = that._howls[key]._soundById(codeSegments[i]);
                                    if (o) {
                                        if (o._node) {
                                            /** @type {number} */
                                            o._node.volume = o._volume * v;
                                        }
                                    }
                                }
                            }
                        }
                        return that;
                    }
                    return that._volume;
                },
                /**
                 * @param {boolean} value
                 * @return {?}
                 */
                mute: function(value) {
                    var that = this || self;
                    if (!that.ctx) {
                        init();
                    }
                    /** @type {boolean} */
                    that._muted = value;
                    if (that.usingWebAudio) {
                        that.masterGain.gain.value = value ? 0 : that._volume;
                    }
                    /** @type {number} */
                    var key = 0;
                    for (; key < that._howls.length; key++) {
                        if (!that._howls[key]._webAudio) {
                            var codeSegments = that._howls[key]._getSoundIds();
                            /** @type {number} */
                            var i = 0;
                            for (; i < codeSegments.length; i++) {
                                var player = that._howls[key]._soundById(codeSegments[i]);
                                if (player) {
                                    if (player._node) {
                                        player._node.muted = !!value || player._muted;
                                    }
                                }
                            }
                        }
                    }
                    return that;
                },
                /**
                 * @return {?}
                 */
                unload: function() {
                    var obj = this || self;
                    /** @type {number} */
                    var i = obj._howls.length - 1;
                    for (; i >= 0; i--) {
                        obj._howls[i].unload();
                    }
                    return obj.usingWebAudio && ("undefined" != typeof obj.ctx.close && (obj.ctx.close(), obj.ctx = null, init())), obj;
                },
                /**
                 * @param {string} block
                 * @return {?}
                 */
                codecs: function(block) {
                    return (this || self)._codecs[block.replace(/^x-/, "")];
                },
                /**
                 * @return {?}
                 */
                _setup: function() {
                    var obj = this || self;
                    return obj.state = obj.ctx ? obj.ctx.state || "running" : "running", obj._autoSuspend(), obj.noAudio || obj._setupCodecs(), obj;
                },
                /**
                 * @return {?}
                 */
                _setupCodecs: function() {
                    var s = this || self;
                    var elem = "undefined" != typeof Audio ? new Audio : null;
                    if (!elem || "function" != typeof elem.canPlayType) {
                        return s;
                    }
                    var pagerNum = elem.canPlayType("audio/mpeg;").replace(/^no$/, "");
                    var value = s._navigator && s._navigator.userAgent.match(/OPR\/([0-6].)/g);
                    var attrNames = value && parseInt(value[0].split("/")[1], 10) < 33;
                    return s._codecs = {
                        mp3: !(attrNames || !pagerNum && !elem.canPlayType("audio/mp3;").replace(/^no$/, "")),
                        mpeg: !!pagerNum,
                        opus: !!elem.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                        ogg: !!elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        oga: !!elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        wav: !!elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                        aac: !!elem.canPlayType("audio/aac;").replace(/^no$/, ""),
                        caf: !!elem.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                        m4a: !!(elem.canPlayType("audio/x-m4a;") || (elem.canPlayType("audio/m4a;") || elem.canPlayType("audio/aac;"))).replace(/^no$/, ""),
                        mp4: !!(elem.canPlayType("audio/x-mp4;") || (elem.canPlayType("audio/mp4;") || elem.canPlayType("audio/aac;"))).replace(/^no$/, ""),
                        weba: !!elem.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                        webm: !!elem.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                        dolby: !!elem.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                        flac: !!(elem.canPlayType("audio/x-flac;") || elem.canPlayType("audio/flac;")).replace(/^no$/, "")
                    }, s;
                },
                /**
                 * @return {?}
                 */
                _enableMobileAudio: function() {
                    var Q = this || self;
                    /** @type {boolean} */
                    var program = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(Q._navigator && Q._navigator.userAgent);
                    /** @type {boolean} */
                    var inverse = !!("ontouchend" in window || (Q._navigator && Q._navigator.maxTouchPoints > 0 || Q._navigator && Q._navigator.msMaxTouchPoints > 0));
                    if (!Q._mobileEnabled && (Q.ctx && (program || inverse))) {
                        /** @type {boolean} */
                        Q._mobileEnabled = false;
                        if (!Q._mobileUnloaded) {
                            if (!(44100 === Q.ctx.sampleRate)) {
                                /** @type {boolean} */
                                Q._mobileUnloaded = true;
                                Q.unload();
                            }
                        }
                        Q._scratchBuffer = Q.ctx.createBuffer(1, 1, 22050);
                        /**
                         * @return {undefined}
                         */
                        var start = function() {
                            var source = Q.ctx.createBufferSource();
                            source.buffer = Q._scratchBuffer;
                            source.connect(Q.ctx.destination);
                            if ("undefined" == typeof source.start) {
                                source.noteOn(0);
                            } else {
                                source.start(0);
                            }
                            /**
                             * @return {undefined}
                             */
                            source.onended = function() {
                                source.disconnect(0);
                                /** @type {boolean} */
                                Q._mobileEnabled = true;
                                /** @type {boolean} */
                                Q.mobileAutoEnable = false;
                                document.removeEventListener("touchend", start, true);
                            };
                        };
                        return document.addEventListener("touchend", start, true), Q;
                    }
                },
                /**
                 * @return {?}
                 */
                _autoSuspend: function() {
                    var me = this;
                    if (me.autoSuspend && (me.ctx && ("undefined" != typeof me.ctx.suspend && self.usingWebAudio))) {
                        /** @type {number} */
                        var key = 0;
                        for (; key < me._howls.length; key++) {
                            if (me._howls[key]._webAudio) {
                                /** @type {number} */
                                var i = 0;
                                for (; i < me._howls[key]._sounds.length; i++) {
                                    if (!me._howls[key]._sounds[i]._paused) {
                                        return me;
                                    }
                                }
                            }
                        }
                        return me._suspendTimer && clearTimeout(me._suspendTimer), me._suspendTimer = setTimeout(function() {
                            if (me.autoSuspend) {
                                /** @type {null} */
                                me._suspendTimer = null;
                                /** @type {string} */
                                me.state = "suspending";
                                me.ctx.suspend().then(function() {
                                    /** @type {string} */
                                    me.state = "suspended";
                                    if (me._resumeAfterSuspend) {
                                        delete me._resumeAfterSuspend;
                                        me._autoResume();
                                    }
                                });
                            }
                        }, 3E4), me;
                    }
                },
                /**
                 * @return {?}
                 */
                _autoResume: function() {
                    var me = this;
                    if (me.ctx && ("undefined" != typeof me.ctx.resume && self.usingWebAudio)) {
                        return "running" === me.state && me._suspendTimer ? (clearTimeout(me._suspendTimer), me._suspendTimer = null) : "suspended" === me.state ? (me.state = "resuming", me.ctx.resume().then(function() {
                            /** @type {string} */
                            me.state = "running";
                        }), me._suspendTimer && (clearTimeout(me._suspendTimer), me._suspendTimer = null)) : "suspending" === me.state && (me._resumeAfterSuspend = true), me;
                    }
                }
            };
            var self = new Button;
            /**
             * @param {exports} option
             * @return {?}
             */
            var Howl = function(option) {
                var data = this;
                return option.src && 0 !== option.src.length ? void data.init(option) : void console.error("An array of source files must be passed with any new Howl.");
            };
            Howl.prototype = {
                /**
                 * @param {exports} options
                 * @return {?}
                 */
                init: function(options) {
                    var obj = this;
                    return self.ctx || init(), obj._autoplay = options.autoplay || false, obj._format = "string" != typeof options.format ? options.format : [options.format], obj._html5 = options.html5 || false, obj._muted = options.mute || false, obj._loop = options.loop || false, obj._pool = options.pool || 5, obj._preload = "boolean" != typeof options.preload || options.preload, obj._rate = options.rate || 1, obj._sprite = options.sprite || {}, obj._src = "string" != typeof options.src ? options.src : [options.src],
                        obj._volume = void 0 !== options.volume ? options.volume : 1, obj._duration = 0, obj._state = "unloaded", obj._sounds = [], obj._endTimers = {}, obj._queue = [], obj._onend = options.onend ? [{
                            fn: options.onend
                        }] : [], obj._onfade = options.onfade ? [{
                            fn: options.onfade
                        }] : [], obj._onload = options.onload ? [{
                            fn: options.onload
                        }] : [], obj._onloaderror = options.onloaderror ? [{
                            fn: options.onloaderror
                        }] : [], obj._onpause = options.onpause ? [{
                            fn: options.onpause
                        }] : [], obj._onplay = options.onplay ? [{
                            fn: options.onplay
                        }] : [], obj._onstop = options.onstop ? [{
                            fn: options.onstop
                        }] : [], obj._onmute = options.onmute ? [{
                            fn: options.onmute
                        }] : [], obj._onvolume = options.onvolume ? [{
                            fn: options.onvolume
                        }] : [], obj._onrate = options.onrate ? [{
                            fn: options.onrate
                        }] : [], obj._onseek = options.onseek ? [{
                            fn: options.onseek
                        }] : [], obj._webAudio = self.usingWebAudio && !obj._html5, "undefined" != typeof self.ctx && (self.ctx && (self.mobileAutoEnable && self._enableMobileAudio())), self._howls.push(obj), obj._preload && obj.load(), obj;
                },
                /**
                 * @return {?}
                 */
                load: function() {
                    var el = this;
                    /** @type {null} */
                    var path = null;
                    if (self.noAudio) {
                        return void el._emit("loaderror", null, "No audio support.");
                    }
                    if ("string" == typeof el._src) {
                        /** @type {Array} */
                        el._src = [el._src];
                    }
                    /** @type {number} */
                    var i = 0;
                    for (; i < el._src.length; i++) {
                        var b;
                        var v;
                        if (el._format && el._format[i]) {
                            b = el._format[i];
                        } else {
                            if (v = el._src[i], "string" != typeof v) {
                                el._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                continue;
                            }
                            /** @type {(Array.<string>|null)} */
                            b = /^data:audio\/([^;,]+);/i.exec(v);
                            if (!b) {
                                /** @type {(Array.<string>|null)} */
                                b = /\.([^.]+)$/.exec(v.split("?", 1)[0]);
                            }
                            if (b) {
                                /** @type {string} */
                                b = b[1].toLowerCase();
                            }
                        }
                        if (self.codecs(b)) {
                            path = el._src[i];
                            break;
                        }
                    }
                    return path ? (el._src = path, el._state = "loading", "https:" === window.location.protocol && ("http:" === path.slice(0, 5) && (el._html5 = true, el._webAudio = false)), new Renderer(el), el._webAudio && send(el), el) : void el._emit("loaderror", null, "No codec support for selected audio sources.");
                },
                /**
                 * @param {string} name
                 * @param {number} __webpack_require__
                 * @return {?}
                 */
                play: function(name, __webpack_require__) {
                    var obj = this;
                    /** @type {null} */
                    var id = null;
                    if ("number" == typeof name) {
                        /** @type {string} */
                        id = name;
                        /** @type {null} */
                        name = null;
                    } else {
                        if ("string" == typeof name && ("loaded" === obj._state && !obj._sprite[name])) {
                            return null;
                        }
                        if ("undefined" == typeof name) {
                            /** @type {string} */
                            name = "__default";
                            /** @type {number} */
                            var o = 0;
                            /** @type {number} */
                            var i = 0;
                            for (; i < obj._sounds.length; i++) {
                                if (obj._sounds[i]._paused) {
                                    if (!obj._sounds[i]._ended) {
                                        o++;
                                        id = obj._sounds[i]._id;
                                    }
                                }
                            }
                            if (1 === o) {
                                /** @type {null} */
                                name = null;
                            } else {
                                /** @type {null} */
                                id = null;
                            }
                        }
                    }
                    var that = id ? obj._soundById(id) : obj._inactiveSound();
                    if (!that) {
                        return null;
                    }
                    if (id && (!name && (name = that._sprite || "__default")), "loaded" !== obj._state && !obj._sprite[name]) {
                        return obj._queue.push({
                            event: "play",
                            /**
                             * @return {undefined}
                             */
                            action: function() {
                                obj.play(obj._soundById(that._id) ? that._id : void 0);
                            }
                        }), that._id;
                    }
                    if (id && !that._paused) {
                        return __webpack_require__ || setTimeout(function() {
                            obj._emit("play", that._id);
                        }, 0), that._id;
                    }
                    if (obj._webAudio) {
                        self._autoResume();
                    }
                    var startTime = that._seek > 0 ? that._seek : obj._sprite[name][0] / 1E3;
                    /** @type {number} */
                    var duration = (obj._sprite[name][0] + obj._sprite[name][1]) / 1E3 - startTime;
                    /** @type {number} */
                    var backoff = 1E3 * duration / Math.abs(that._rate);
                    /** @type {boolean} */
                    that._paused = false;
                    /** @type {boolean} */
                    that._ended = false;
                    /** @type {string} */
                    that._sprite = name;
                    that._seek = startTime;
                    /** @type {number} */
                    that._start = obj._sprite[name][0] / 1E3;
                    /** @type {number} */
                    that._stop = (obj._sprite[name][0] + obj._sprite[name][1]) / 1E3;
                    /** @type {boolean} */
                    that._loop = !(!that._loop && !obj._sprite[name][2]);
                    var node = that._node;
                    if (obj._webAudio) {
                        /**
                         * @return {undefined}
                         */
                        var start = function() {
                            obj._refreshBuffer(that);
                            var r20 = that._muted || obj._muted ? 0 : that._volume;
                            node.gain.setValueAtTime(r20, self.ctx.currentTime);
                            that._playStart = self.ctx.currentTime;
                            if ("undefined" == typeof node.bufferSource.start) {
                                if (that._loop) {
                                    node.bufferSource.noteGrainOn(0, startTime, 86400);
                                } else {
                                    node.bufferSource.noteGrainOn(0, startTime, duration);
                                }
                            } else {
                                if (that._loop) {
                                    node.bufferSource.start(0, startTime, 86400);
                                } else {
                                    node.bufferSource.start(0, startTime, duration);
                                }
                            }
                            if (backoff !== 1 / 0) {
                                /** @type {number} */
                                obj._endTimers[that._id] = setTimeout(obj._ended.bind(obj, that), backoff);
                            }
                            if (!__webpack_require__) {
                                setTimeout(function() {
                                    obj._emit("play", that._id);
                                }, 0);
                            }
                        };
                        if ("loaded" === obj._state) {
                            start();
                        } else {
                            obj.once("load", start, that._id);
                            obj._clearTimer(that._id);
                        }
                    } else {
                        /**
                         * @return {undefined}
                         */
                        var play = function() {
                            node.currentTime = startTime;
                            node.muted = that._muted || (obj._muted || (self._muted || node.muted));
                            /** @type {number} */
                            node.volume = that._volume * self.volume();
                            node.playbackRate = that._rate;
                            setTimeout(function() {
                                node.play();
                                if (backoff !== 1 / 0) {
                                    /** @type {number} */
                                    obj._endTimers[that._id] = setTimeout(obj._ended.bind(obj, that), backoff);
                                }
                                if (!__webpack_require__) {
                                    obj._emit("play", that._id);
                                }
                            }, 0);
                        };
                        var f = "loaded" === obj._state && (window && window.ejecta || !node.readyState && self._navigator.isCocoonJS);
                        if (4 === node.readyState || f) {
                            play();
                        } else {
                            /**
                             * @return {undefined}
                             */
                            var completed = function() {
                                play();
                                node.removeEventListener(self._canPlayEvent, completed, false);
                            };
                            node.addEventListener(self._canPlayEvent, completed, false);
                            obj._clearTimer(that._id);
                        }
                    }
                    return that._id;
                },
                /**
                 * @param {number} time
                 * @return {?}
                 */
                pause: function(time) {
                    var self = this;
                    if ("loaded" !== self._state) {
                        return self._queue.push({
                            event: "pause",
                            /**
                             * @return {undefined}
                             */
                            action: function() {
                                self.pause(time);
                            }
                        }), self;
                    }
                    var codeSegments = self._getSoundIds(time);
                    /** @type {number} */
                    var i = 0;
                    for (; i < codeSegments.length; i++) {
                        self._clearTimer(codeSegments[i]);
                        var node = self._soundById(codeSegments[i]);
                        if (node && !node._paused) {
                            if (node._seek = self.seek(codeSegments[i]), node._rateSeek = 0, node._paused = true, self._stopFade(codeSegments[i]), node._node) {
                                if (self._webAudio) {
                                    if (!node._node.bufferSource) {
                                        return self;
                                    }
                                    if ("undefined" == typeof node._node.bufferSource.stop) {
                                        node._node.bufferSource.noteOff(0);
                                    } else {
                                        node._node.bufferSource.stop(0);
                                    }
                                    self._cleanBuffer(node._node);
                                } else {
                                    if (!(isNaN(node._node.duration) && node._node.duration !== 1 / 0)) {
                                        node._node.pause();
                                    }
                                }
                            }
                            if (!arguments[1]) {
                                self._emit("pause", node._id);
                            }
                        }
                    }
                    return self;
                },
                /**
                 * @param {number} callback
                 * @param {boolean} gotoEnd
                 * @return {?}
                 */
                stop: function(callback, gotoEnd) {
                    var self = this;
                    if ("loaded" !== self._state) {
                        return self._queue.push({
                            event: "stop",
                            /**
                             * @return {undefined}
                             */
                            action: function() {
                                self.stop(callback);
                            }
                        }), self;
                    }
                    var codeSegments = self._getSoundIds(callback);
                    /** @type {number} */
                    var i = 0;
                    for (; i < codeSegments.length; i++) {
                        self._clearTimer(codeSegments[i]);
                        var that = self._soundById(codeSegments[i]);
                        if (that && (that._seek = that._start || 0, that._rateSeek = 0, that._paused = true, that._ended = true, self._stopFade(codeSegments[i]), that._node)) {
                            if (self._webAudio) {
                                if (!that._node.bufferSource) {
                                    return gotoEnd || self._emit("stop", that._id), self;
                                }
                                if ("undefined" == typeof that._node.bufferSource.stop) {
                                    that._node.bufferSource.noteOff(0);
                                } else {
                                    that._node.bufferSource.stop(0);
                                }
                                self._cleanBuffer(that._node);
                            } else {
                                if (!(isNaN(that._node.duration) && that._node.duration !== 1 / 0)) {
                                    that._node.currentTime = that._start || 0;
                                    that._node.pause();
                                }
                            }
                        }
                        if (that) {
                            if (!gotoEnd) {
                                self._emit("stop", that._id);
                            }
                        }
                    }
                    return self;
                },
                /**
                 * @param {boolean} id
                 * @param {number} tag
                 * @return {?}
                 */
                mute: function(id, tag) {
                    var obj = this;
                    if ("loaded" !== obj._state) {
                        return obj._queue.push({
                            event: "mute",
                            /**
                             * @return {undefined}
                             */
                            action: function() {
                                obj.mute(id, tag);
                            }
                        }), obj;
                    }
                    if ("undefined" == typeof tag) {
                        if ("boolean" != typeof id) {
                            return obj._muted;
                        }
                        /** @type {boolean} */
                        obj._muted = id;
                    }
                    var codeSegments = obj._getSoundIds(tag);
                    /** @type {number} */
                    var i = 0;
                    for (; i < codeSegments.length; i++) {
                        var player = obj._soundById(codeSegments[i]);
                        if (player) {
                            /** @type {boolean} */
                            player._muted = id;
                            if (obj._webAudio && player._node) {
                                player._node.gain.setValueAtTime(id ? 0 : player._volume, self.ctx.currentTime);
                            } else {
                                if (player._node) {
                                    player._node.muted = !!self._muted || id;
                                }
                            }
                            obj._emit("mute", player._id);
                        }
                    }
                    return obj;
                },
                /**
                 * @return {?}
                 */
                volume: function() {
                    var vol;
                    var a;
                    var obj = this;
                    /** @type {Arguments} */
                    var args = arguments;
                    if (0 === args.length) {
                        return obj._volume;
                    }
                    if (1 === args.length || 2 === args.length && "undefined" == typeof args[1]) {
                        var classes = obj._getSoundIds();
                        var r = classes.indexOf(args[0]);
                        if (r >= 0) {
                            /** @type {number} */
                            a = parseInt(args[0], 10);
                        } else {
                            /** @type {number} */
                            vol = parseFloat(args[0]);
                        }
                    } else {
                        if (args.length >= 2) {
                            /** @type {number} */
                            vol = parseFloat(args[0]);
                            /** @type {number} */
                            a = parseInt(args[1], 10);
                        }
                    }
                    var player;
                    if (!("undefined" != typeof vol && (vol >= 0 && vol <= 1))) {
                        return player = a ? obj._soundById(a) : obj._sounds[0], player ? player._volume : 0;
                    }
                    if ("loaded" !== obj._state) {
                        return obj._queue.push({
                            event: "volume",
                            /**
                             * @return {undefined}
                             */
                            action: function() {
                                obj.volume.apply(obj, args);
                            }
                        }), obj;
                    }
                    if ("undefined" == typeof a) {
                        /** @type {number} */
                        obj._volume = vol;
                    }
                    a = obj._getSoundIds(a);
                    /** @type {number} */
                    var i = 0;
                    for (; i < a.length; i++) {
                        player = obj._soundById(a[i]);
                        if (player) {
                            /** @type {number} */
                            player._volume = vol;
                            if (!args[2]) {
                                obj._stopFade(a[i]);
                            }
                            if (obj._webAudio && (player._node && !player._muted)) {
                                player._node.gain.setValueAtTime(vol, self.ctx.currentTime);
                            } else {
                                if (player._node) {
                                    if (!player._muted) {
                                        /** @type {number} */
                                        player._node.volume = vol * self.volume();
                                    }
                                }
                            }
                            obj._emit("volume", player._id);
                        }
                    }
                    return obj;
                },
                /**
                 * @param {number} from
                 * @param {number} to
                 * @param {number} h
                 * @param {number} callback
                 * @return {?}
                 */
                fade: function(from, to, h, callback) {
                    var that = this;
                    /** @type {number} */
                    var width = Math.abs(from - to);
                    /** @type {string} */
                    var id = from > to ? "out" : "in";
                    /** @type {number} */
                    var w = width / 0.01;
                    var frequency = w > 0 ? h / w : h;
                    if (frequency < 4 && (w = Math.ceil(w / (4 / frequency)), frequency = 4), "loaded" !== that._state) {
                        return that._queue.push({
                            event: "fade",
                            /**
                             * @return {undefined}
                             */
                            action: function() {
                                that.fade(from, to, h, callback);
                            }
                        }), that;
                    }
                    that.volume(from, callback);
                    var codeSegments = that._getSoundIds(callback);
                    /** @type {number} */
                    var i = 0;
                    for (; i < codeSegments.length; i++) {
                        var instance = that._soundById(codeSegments[i]);
                        if (instance) {
                            if (callback || that._stopFade(codeSegments[i]), that._webAudio && !instance._muted) {
                                var oldMillis = self.ctx.currentTime;
                                var newMillis = oldMillis + h / 1E3;
                                /** @type {number} */
                                instance._volume = from;
                                instance._node.gain.setValueAtTime(from, oldMillis);
                                instance._node.gain.linearRampToValueAtTime(to, newMillis);
                            }
                            /** @type {number} */
                            var c = from;
                            /** @type {number} */
                            instance._interval = setInterval(function(name, self) {
                                if (w > 0) {
                                    c += "in" === id ? 0.01 : -0.01;
                                }
                                /** @type {number} */
                                c = Math.max(0, c);
                                /** @type {number} */
                                c = Math.min(1, c);
                                /** @type {number} */
                                c = Math.round(100 * c) / 100;
                                if (that._webAudio) {
                                    if ("undefined" == typeof callback) {
                                        /** @type {number} */
                                        that._volume = c;
                                    }
                                    /** @type {number} */
                                    self._volume = c;
                                } else {
                                    that.volume(c, name, true);
                                }
                                if (c === to) {
                                    clearInterval(self._interval);
                                    /** @type {null} */
                                    self._interval = null;
                                    that.volume(c, name);
                                    that._emit("fade", name);
                                }
                            }.bind(that, codeSegments[i], instance), frequency);
                        }
                    }
                    return that;
                },
                /**
                 * @param {number} node
                 * @return {?}
                 */
                _stopFade: function(node) {
                    var div = this;
                    var instance = div._soundById(node);
                    return instance && (instance._interval && (div._webAudio && instance._node.gain.cancelScheduledValues(self.ctx.currentTime), clearInterval(instance._interval), instance._interval = null, div._emit("fade", node))), div;
                },
                /**
                 * @return {?}
                 */
                loop: function() {
                    var value;
                    var after;
                    var self;
                    var obj = this;
                    /** @type {Arguments} */
                    var args = arguments;
                    if (0 === args.length) {
                        return obj._loop;
                    }
                    if (1 === args.length) {
                        if ("boolean" != typeof args[0]) {
                            return self = obj._soundById(parseInt(args[0], 10)), !!self && self._loop;
                        }
                        value = args[0];
                        obj._loop = value;
                    } else {
                        if (2 === args.length) {
                            value = args[0];
                            /** @type {number} */
                            after = parseInt(args[1], 10);
                        }
                    }
                    var codeSegments = obj._getSoundIds(after);
                    /** @type {number} */
                    var i = 0;
                    for (; i < codeSegments.length; i++) {
                        self = obj._soundById(codeSegments[i]);
                        if (self) {
                            self._loop = value;
                            if (obj._webAudio) {
                                if (self._node) {
                                    if (self._node.bufferSource) {
                                        self._node.bufferSource.loop = value;
                                        if (value) {
                                            self._node.bufferSource.loopStart = self._start || 0;
                                            self._node.bufferSource.loopEnd = self._stop;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return obj;
                },
                /**
                 * @return {?}
                 */
                rate: function() {
                    var width;
                    var a;
                    var obj = this;
                    /** @type {Arguments} */
                    var args = arguments;
                    if (0 === args.length) {
                        a = obj._sounds[0]._id;
                    } else {
                        if (1 === args.length) {
                            var classes = obj._getSoundIds();
                            var r = classes.indexOf(args[0]);
                            if (r >= 0) {
                                /** @type {number} */
                                a = parseInt(args[0], 10);
                            } else {
                                /** @type {number} */
                                width = parseFloat(args[0]);
                            }
                        } else {
                            if (2 === args.length) {
                                /** @type {number} */
                                width = parseFloat(args[0]);
                                /** @type {number} */
                                a = parseInt(args[1], 10);
                            }
                        }
                    }
                    var node;
                    if ("number" != typeof width) {
                        return node = obj._soundById(a), node ? node._rate : obj._rate;
                    }
                    if ("loaded" !== obj._state) {
                        return obj._queue.push({
                            event: "rate",
                            /**
                             * @return {undefined}
                             */
                            action: function() {
                                obj.rate.apply(obj, args);
                            }
                        }), obj;
                    }
                    if ("undefined" == typeof a) {
                        /** @type {number} */
                        obj._rate = width;
                    }
                    a = obj._getSoundIds(a);
                    /** @type {number} */
                    var i = 0;
                    for (; i < a.length; i++) {
                        if (node = obj._soundById(a[i])) {
                            node._rateSeek = obj.seek(a[i]);
                            node._playStart = obj._webAudio ? self.ctx.currentTime : node._playStart;
                            /** @type {number} */
                            node._rate = width;
                            if (obj._webAudio && (node._node && node._node.bufferSource)) {
                                /** @type {number} */
                                node._node.bufferSource.playbackRate.value = width;
                            } else {
                                if (node._node) {
                                    /** @type {number} */
                                    node._node.playbackRate = width;
                                }
                            }
                            var clientTop = obj.seek(a[i]);
                            /** @type {number} */
                            var top = (obj._sprite[node._sprite][0] + obj._sprite[node._sprite][1]) / 1E3 - clientTop;
                            /** @type {number} */
                            var backoff = 1E3 * top / Math.abs(node._rate);
                            if (!(!obj._endTimers[a[i]] && node._paused)) {
                                obj._clearTimer(a[i]);
                                /** @type {number} */
                                obj._endTimers[a[i]] = setTimeout(obj._ended.bind(obj, node), backoff);
                            }
                            obj._emit("rate", node._id);
                        }
                    }
                    return obj;
                },
                /**
                 * @return {?}
                 */
                seek: function() {
                    var time;
                    var id;
                    var that = this;
                    /** @type {Arguments} */
                    var args = arguments;
                    if (0 === args.length) {
                        id = that._sounds[0]._id;
                    } else {
                        if (1 === args.length) {
                            var classes = that._getSoundIds();
                            var r = classes.indexOf(args[0]);
                            if (r >= 0) {
                                /** @type {number} */
                                id = parseInt(args[0], 10);
                            } else {
                                id = that._sounds[0]._id;
                                /** @type {number} */
                                time = parseFloat(args[0]);
                            }
                        } else {
                            if (2 === args.length) {
                                /** @type {number} */
                                time = parseFloat(args[0]);
                                /** @type {number} */
                                id = parseInt(args[1], 10);
                            }
                        }
                    }
                    if ("undefined" == typeof id) {
                        return that;
                    }
                    if ("loaded" !== that._state) {
                        return that._queue.push({
                            event: "seek",
                            /**
                             * @return {undefined}
                             */
                            action: function() {
                                that.seek.apply(that, args);
                            }
                        }), that;
                    }
                    var me = that._soundById(id);
                    if (me) {
                        if (!("number" == typeof time && time >= 0)) {
                            if (that._webAudio) {
                                /** @type {number} */
                                var column = that.playing(id) ? self.ctx.currentTime - me._playStart : 0;
                                /** @type {number} */
                                var row = me._rateSeek ? me._rateSeek - me._seek : 0;
                                return me._seek + (row + column * Math.abs(me._rate));
                            }
                            return me._node.currentTime;
                        }
                        var targetNode = that.playing(id);
                        if (targetNode) {
                            that.pause(id, true);
                        }
                        /** @type {number} */
                        me._seek = time;
                        /** @type {boolean} */
                        me._ended = false;
                        that._clearTimer(id);
                        if (targetNode) {
                            that.play(id, true);
                        }
                        if (!that._webAudio) {
                            if (me._node) {
                                /** @type {number} */
                                me._node.currentTime = time;
                            }
                        }
                        that._emit("seek", id);
                    }
                    return that;
                },
                /**
                 * @param {number} id
                 * @return {?}
                 */
                playing: function(id) {
                    var proto = this;
                    if ("number" == typeof id) {
                        var me = proto._soundById(id);
                        return !!me && !me._paused;
                    }
                    /** @type {number} */
                    var i = 0;
                    for (; i < proto._sounds.length; i++) {
                        if (!proto._sounds[i]._paused) {
                            return true;
                        }
                    }
                    return false;
                },
                /**
                 * @param {number} key
                 * @return {?}
                 */
                duration: function(key) {
                    var self = this;
                    var ch = self._duration;
                    var node = self._soundById(key);
                    return node && (ch = self._sprite[node._sprite][1] / 1E3), ch;
                },
                /**
                 * @return {?}
                 */
                state: function() {
                    return this._state;
                },
                /**
                 * @return {?}
                 */
                unload: function() {
                    var m = this;
                    var codeSegments = m._sounds;
                    /** @type {number} */
                    var i = 0;
                    for (; i < codeSegments.length; i++) {
                        if (!codeSegments[i]._paused) {
                            m.stop(codeSegments[i]._id);
                            m._emit("end", codeSegments[i]._id);
                        }
                        if (!m._webAudio) {
                            /** @type {string} */
                            codeSegments[i]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
                            codeSegments[i]._node.removeEventListener("error", codeSegments[i]._errorFn, false);
                            codeSegments[i]._node.removeEventListener(self._canPlayEvent, codeSegments[i]._loadFn, false);
                        }
                        delete codeSegments[i]._node;
                        m._clearTimer(codeSegments[i]._id);
                        var index = self._howls.indexOf(m);
                        if (index >= 0) {
                            self._howls.splice(index, 1);
                        }
                    }
                    /** @type {boolean} */
                    var cid = true;
                    /** @type {number} */
                    i = 0;
                    for (; i < self._howls.length; i++) {
                        if (self._howls[i]._src === m._src) {
                            /** @type {boolean} */
                            cid = false;
                            break;
                        }
                    }
                    return cache && (cid && delete cache[m._src]), self.noAudio = false, m._state = "unloaded", m._sounds = [], m = null, null;
                },
                /**
                 * @param {string} type
                 * @param {Array} fn
                 * @param {string} evt
                 * @param {boolean} once
                 * @return {?}
                 */
                on: function(type, fn, evt, once) {
                    var element = this;
                    var ta = element["_on" + type];
                    return "function" == typeof fn && ta.push(once ? {
                        id: evt,
                        fn: fn,
                        once: once
                    } : {
                        id: evt,
                        fn: fn
                    }), element;
                },
                /**
                 * @param {string} type
                 * @param {Array} fn
                 * @param {string} target
                 * @return {?}
                 */
                off: function(type, fn, target) {
                    var el = this;
                    var events = el["_on" + type];
                    /** @type {number} */
                    var i = 0;
                    if (fn) {
                        /** @type {number} */
                        i = 0;
                        for (; i < events.length; i++) {
                            if (fn === events[i].fn && target === events[i].id) {
                                events.splice(i, 1);
                                break;
                            }
                        }
                    } else {
                        if (type) {
                            /** @type {Array} */
                            el["_on" + type] = [];
                        } else {
                            /** @type {Array.<string>} */
                            var codeSegments = exports.keys(el);
                            /** @type {number} */
                            i = 0;
                            for (; i < codeSegments.length; i++) {
                                if (0 === codeSegments[i].indexOf("_on")) {
                                    if (Array.isArray(el[codeSegments[i]])) {
                                        /** @type {Array} */
                                        el[codeSegments[i]] = [];
                                    }
                                }
                            }
                        }
                    }
                    return el;
                },
                /**
                 * @param {string} type
                 * @param {Function} fn
                 * @param {string} scope
                 * @return {?}
                 */
                once: function(type, fn, scope) {
                    var exports = this;
                    return exports.on(type, fn, scope, 1), exports;
                },
                /**
                 * @param {string} type
                 * @param {number} name
                 * @param {string} value
                 * @return {?}
                 */
                _emit: function(type, name, value) {
                    var self = this;
                    var events = self["_on" + type];
                    /** @type {number} */
                    var i = events.length - 1;
                    for (; i >= 0; i--) {
                        if (!(events[i].id && (events[i].id !== name && "load" !== type))) {
                            setTimeout(function(callback) {
                                callback.call(this, name, value);
                            }.bind(self, events[i].fn), 0);
                            if (events[i].once) {
                                self.off(type, events[i].fn, events[i].id);
                            }
                        }
                    }
                    return self;
                },
                /**
                 * @return {?}
                 */
                _loadQueue: function() {
                    var _this = this;
                    if (_this._queue.length > 0) {
                        var options = _this._queue[0];
                        _this.once(options.event, function() {
                            _this._queue.shift();
                            _this._loadQueue();
                        });
                        options.action();
                    }
                    return _this;
                },
                /**
                 * @param {exports} that
                 * @return {?}
                 */
                _ended: function(that) {
                    var node = this;
                    var sprite = that._sprite;
                    /** @type {boolean} */
                    var _webAudio = !(!that._loop && !node._sprite[sprite][2]);
                    if (node._emit("end", that._id), !node._webAudio && (_webAudio && node.stop(that._id, true).play(that._id)), node._webAudio && _webAudio) {
                        node._emit("play", that._id);
                        that._seek = that._start || 0;
                        /** @type {number} */
                        that._rateSeek = 0;
                        that._playStart = self.ctx.currentTime;
                        /** @type {number} */
                        var backoff = 1E3 * (that._stop - that._start) / Math.abs(that._rate);
                        /** @type {number} */
                        node._endTimers[that._id] = setTimeout(node._ended.bind(node, that), backoff);
                    }
                    return node._webAudio && (!_webAudio && (that._paused = true, that._ended = true, that._seek = that._start || 0, that._rateSeek = 0, node._clearTimer(that._id), node._cleanBuffer(that._node), self._autoSuspend())), node._webAudio || (_webAudio || node.stop(that._id)), node;
                },
                /**
                 * @param {?} timer
                 * @return {?}
                 */
                _clearTimer: function(timer) {
                    var self = this;
                    return self._endTimers[timer] && (clearTimeout(self._endTimers[timer]), delete self._endTimers[timer]), self;
                },
                /**
                 * @param {number} id
                 * @return {?}
                 */
                _soundById: function(id) {
                    var linestring = this;
                    /** @type {number} */
                    var i = 0;
                    for (; i < linestring._sounds.length; i++) {
                        if (id === linestring._sounds[i]._id) {
                            return linestring._sounds[i];
                        }
                    }
                    return null;
                },
                /**
                 * @return {?}
                 */
                _inactiveSound: function() {
                    var sel = this;
                    sel._drain();
                    /** @type {number} */
                    var i = 0;
                    for (; i < sel._sounds.length; i++) {
                        if (sel._sounds[i]._ended) {
                            return sel._sounds[i].reset();
                        }
                    }
                    return new Renderer(sel);
                },
                /**
                 * @return {undefined}
                 */
                _drain: function() {
                    var self = this;
                    var len = self._pool;
                    /** @type {number} */
                    var rel_num = 0;
                    /** @type {number} */
                    var i = 0;
                    if (!(self._sounds.length < len)) {
                        /** @type {number} */
                        i = 0;
                        for (; i < self._sounds.length; i++) {
                            if (self._sounds[i]._ended) {
                                rel_num++;
                            }
                        }
                        /** @type {number} */
                        i = self._sounds.length - 1;
                        for (; i >= 0; i--) {
                            if (rel_num <= len) {
                                return;
                            }
                            if (self._sounds[i]._ended) {
                                if (self._webAudio) {
                                    if (self._sounds[i]._node) {
                                        self._sounds[i]._node.disconnect(0);
                                    }
                                }
                                self._sounds.splice(i, 1);
                                rel_num--;
                            }
                        }
                    }
                },
                /**
                 * @param {number} callback
                 * @return {?}
                 */
                _getSoundIds: function(callback) {
                    var linestring = this;
                    if ("undefined" == typeof callback) {
                        /** @type {Array} */
                        var processed = [];
                        /** @type {number} */
                        var i = 0;
                        for (; i < linestring._sounds.length; i++) {
                            processed.push(linestring._sounds[i]._id);
                        }
                        return processed;
                    }
                    return [callback];
                },
                /**
                 * @param {exports} obj
                 * @return {?}
                 */
                _refreshBuffer: function(obj) {
                    var req = this;
                    return obj._node.bufferSource = self.ctx.createBufferSource(), obj._node.bufferSource.buffer = cache[req._src], obj._panner ? obj._node.bufferSource.connect(obj._panner) : obj._node.bufferSource.connect(obj._node), obj._node.bufferSource.loop = obj._loop, obj._loop && (obj._node.bufferSource.loopStart = obj._start || 0, obj._node.bufferSource.loopEnd = obj._stop), obj._node.bufferSource.playbackRate.value = obj._rate, req;
                },
                /**
                 * @param {?} self
                 * @return {?}
                 */
                _cleanBuffer: function(self) {
                    var buffer = this;
                    if (buffer._scratchBuffer) {
                        /** @type {null} */
                        self.bufferSource.onended = null;
                        self.bufferSource.disconnect(0);
                        try {
                            self.bufferSource.buffer = buffer._scratchBuffer;
                        } catch (e) {}
                    }
                    return self.bufferSource = null, buffer;
                }
            };
            /**
             * @param {number} view
             * @return {undefined}
             */
            var Renderer = function(view) {
                /** @type {number} */
                this._parent = view;
                this.init();
            };
            Renderer.prototype = {
                /**
                 * @return {?}
                 */
                init: function() {
                    var self = this;
                    var obj = self._parent;
                    return self._muted = obj._muted, self._loop = obj._loop, self._volume = obj._volume, self._muted = obj._muted, self._rate = obj._rate, self._seek = 0, self._paused = true, self._ended = true, self._sprite = "__default", self._id = Math.round(Date.now() * Math.random()), obj._sounds.push(self), self.create(), self;
                },
                /**
                 * @return {?}
                 */
                create: function() {
                    var s = this;
                    var obj = s._parent;
                    var r20 = self._muted || (s._muted || s._parent._muted) ? 0 : s._volume;
                    return obj._webAudio ? (s._node = "undefined" == typeof self.ctx.createGain ? self.ctx.createGainNode() : self.ctx.createGain(), s._node.gain.setValueAtTime(r20, self.ctx.currentTime), s._node.paused = true, s._node.connect(self.masterGain)) : (s._node = new Audio, s._errorFn = s._errorListener.bind(s), s._node.addEventListener("error", s._errorFn, false), s._loadFn = s._loadListener.bind(s), s._node.addEventListener(self._canPlayEvent, s._loadFn, false), s._node.src = obj._src, s._node.preload =
                        "auto", s._node.volume = r20 * self.volume(), s._node.load()), s;
                },
                /**
                 * @return {?}
                 */
                reset: function() {
                    var self = this;
                    var obj = self._parent;
                    return self._muted = obj._muted, self._loop = obj._loop, self._volume = obj._volume, self._muted = obj._muted, self._rate = obj._rate, self._seek = 0, self._rateSeek = 0, self._paused = true, self._ended = true, self._sprite = "__default", self._id = Math.round(Date.now() * Math.random()), self;
                },
                /**
                 * @return {undefined}
                 */
                _errorListener: function() {
                    var item = this;
                    item._parent._emit("loaderror", item._id, item._node.error ? item._node.error.code : 0);
                    item._node.removeEventListener("error", item._errorListener, false);
                },
                /**
                 * @return {undefined}
                 */
                _loadListener: function() {
                    var data = this;
                    var obj = data._parent;
                    /** @type {number} */
                    obj._duration = Math.ceil(10 * data._node.duration) / 10;
                    if (0 === exports.keys(obj._sprite).length) {
                        obj._sprite = {
                            __default: [0, 1E3 * obj._duration]
                        };
                    }
                    if ("loaded" !== obj._state) {
                        /** @type {string} */
                        obj._state = "loaded";
                        obj._emit("load");
                        obj._loadQueue();
                    }
                    if (obj._autoplay) {
                        obj.play();
                    }
                    data._node.removeEventListener(self._canPlayEvent, data._loadFn, false);
                }
            };
            var cache = {};
            /**
             * @param {exports} self
             * @return {?}
             */
            var send = function(self) {
                var url = self._src;
                if (cache[url]) {
                    return self._duration = cache[url].duration, void listener(self);
                }
                if (/^data:[^;]+;base64,/.test(url)) {
                    var binary = atob(url.split(",")[1]);
                    /** @type {Uint8Array} */
                    var ret = new Uint8Array(binary.length);
                    /** @type {number} */
                    var i = 0;
                    for (; i < binary.length; ++i) {
                        ret[i] = binary.charCodeAt(i);
                    }
                    fn(ret.buffer, self);
                } else {
                    /** @type {XMLHttpRequest} */
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, true);
                    /** @type {string} */
                    xhr.responseType = "arraybuffer";
                    /**
                     * @return {?}
                     */
                    xhr.onload = function() {
                        var code = (xhr.status + "")[0];
                        return "0" !== code && ("2" !== code && "3" !== code) ? void self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".") : void fn(xhr.response, self);
                    };
                    /**
                     * @return {undefined}
                     */
                    xhr.onerror = function() {
                        if (self._webAudio) {
                            /** @type {boolean} */
                            self._html5 = true;
                            /** @type {boolean} */
                            self._webAudio = false;
                            /** @type {Array} */
                            self._sounds = [];
                            delete cache[url];
                            self.load();
                        }
                    };
                    error(xhr);
                }
            };
            /**
             * @param {exports} xhr
             * @return {undefined}
             */
            var error = function(xhr) {
                try {
                    xhr.send();
                } catch (t) {
                    xhr.onerror();
                }
            };
            /**
             * @param {ArrayBuffer} response
             * @param {exports} m
             * @return {undefined}
             */
            var fn = function(response, m) {
                self.ctx.decodeAudioData(response, function(message) {
                    if (message) {
                        if (m._sounds.length > 0) {
                            /** @type {exports} */
                            cache[m._src] = message;
                            listener(m, message);
                        }
                    }
                }, function() {
                    m._emit("loaderror", null, "Decoding audio data failed.");
                });
            };
            /**
             * @param {exports} self
             * @param {exports} message
             * @return {undefined}
             */
            var listener = function(self, message) {
                if (message) {
                    if (!self._duration) {
                        self._duration = message.duration;
                    }
                }
                if (0 === exports.keys(self._sprite).length) {
                    self._sprite = {
                        __default: [0, 1E3 * self._duration]
                    };
                }
                if ("loaded" !== self._state) {
                    /** @type {string} */
                    self._state = "loaded";
                    self._emit("load");
                    self._loadQueue();
                }
                if (self._autoplay) {
                    self.play();
                }
            };
            /**
             * @return {undefined}
             */
            var init = function() {
                /** @type {boolean} */
                self.noAudio = false;
                try {
                    if ("undefined" != typeof AudioContext) {
                        self.ctx = new AudioContext;
                    } else {
                        if ("undefined" != typeof webkitAudioContext) {
                            self.ctx = new webkitAudioContext;
                        } else {
                            /** @type {boolean} */
                            self.usingWebAudio = false;
                        }
                    }
                } catch (e) {
                    /** @type {boolean} */
                    self.usingWebAudio = false;
                }
                if (!self.usingWebAudio) {
                    if ("undefined" != typeof Audio) {
                        try {
                            var music = new Audio;
                            if ("undefined" == typeof music.oncanplaythrough) {
                                /** @type {string} */
                                self._canPlayEvent = "canplay";
                            }
                        } catch (e) {
                            /** @type {boolean} */
                            self.noAudio = true;
                        }
                    } else {
                        /** @type {boolean} */
                        self.noAudio = true;
                    }
                }
                try {
                    music = new Audio;
                    if (music.muted) {
                        /** @type {boolean} */
                        self.noAudio = true;
                    }
                } catch (e) {}
                /** @type {boolean} */
                var item = /iP(hone|od|ad)/.test(self._navigator && self._navigator.platform);
                var match = self._navigator && self._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                /** @type {(null|number)} */
                var count = match ? parseInt(match[1], 10) : null;
                if (item && (count && count < 9)) {
                    /** @type {boolean} */
                    var standalone = /safari/.test(self._navigator && self._navigator.userAgent.toLowerCase());
                    if (self._navigator && (self._navigator.standalone && !standalone) || self._navigator && (!self._navigator.standalone && !standalone)) {
                        /** @type {boolean} */
                        self.usingWebAudio = false;
                    }
                }
                if (self.usingWebAudio) {
                    self.masterGain = "undefined" == typeof self.ctx.createGain ? self.ctx.createGainNode() : self.ctx.createGain();
                    /** @type {number} */
                    self.masterGain.gain.value = 1;
                    self.masterGain.connect(self.ctx.destination);
                }
                self._setup();
            };
            /** @type {Array} */
            camelKey = [];
            data = function() {
                return {
                    Howler: self,
                    /** @type {function (exports): ?} */
                    Howl: Howl
                };
            }.apply(exports, camelKey);
            !(void 0 !== data && (module.exports = data));
            exports.Howler = self;
            /** @type {function (exports): ?} */
            exports.Howl = Howl;
            if ("undefined" != typeof window) {
                /** @type {function (): undefined} */
                window.HowlerGlobal = Button;
                window.Howler = self;
                /** @type {function (exports): ?} */
                window.Howl = Howl;
                /** @type {function (number): undefined} */
                window.Sound = Renderer;
            } else {
                if ("undefined" != typeof exports) {
                    /** @type {function (): undefined} */
                    exports.HowlerGlobal = Button;
                    exports.Howler = self;
                    /** @type {function (exports): ?} */
                    exports.Howl = Howl;
                    /** @type {function (number): undefined} */
                    exports.Sound = Renderer;
                }
            }
        }();
        (function() {
            /** @type {Array} */
            HowlerGlobal.prototype._pos = [0, 0, 0];
            /** @type {Array} */
            HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
            /**
             * @param {number} x
             * @return {?}
             */
            HowlerGlobal.prototype.stereo = function(x) {
                var self = this;
                if (!self.ctx || !self.ctx.listener) {
                    return self;
                }
                /** @type {number} */
                var timeoutKey = self._howls.length - 1;
                for (; timeoutKey >= 0; timeoutKey--) {
                    self._howls[timeoutKey].stereo(x);
                }
                return self;
            };
            /**
             * @param {?} x
             * @param {(boolean|number)} y
             * @param {(boolean|number)} deep__webpack_require__
             * @return {?}
             */
            HowlerGlobal.prototype.pos = function(x, y, deep__webpack_require__) {
                var that = this;
                return that.ctx && that.ctx.listener ? (y = "number" != typeof y ? that._pos[1] : y, deep__webpack_require__ = "number" != typeof deep__webpack_require__ ? that._pos[2] : deep__webpack_require__, "number" != typeof x ? that._pos : (that._pos = [x, y, deep__webpack_require__], that.ctx.listener.setPosition(that._pos[0], that._pos[1], that._pos[2]), that)) : that;
            };
            /**
             * @param {?} orientation
             * @param {?} height
             * @param {?} deep__webpack_require__
             * @param {(boolean|number)} time
             * @param {(RegExp|string)} r
             * @param {(RegExp|string)} __webpack_require__
             * @return {?}
             */
            HowlerGlobal.prototype.orientation = function(orientation, height, deep__webpack_require__, time, r, __webpack_require__) {
                var that = this;
                if (!that.ctx || !that.ctx.listener) {
                    return that;
                }
                var number = that._orientation;
                return height = "number" != typeof height ? number[1] : height, deep__webpack_require__ = "number" != typeof deep__webpack_require__ ? number[2] : deep__webpack_require__, time = "number" != typeof time ? number[3] : time, r = "number" != typeof r ? number[4] : r, __webpack_require__ = "number" != typeof __webpack_require__ ? number[5] : __webpack_require__, "number" != typeof orientation ? number : (that._orientation = [orientation, height, deep__webpack_require__, time, r, __webpack_require__], that.ctx.listener.setOrientation(orientation,
                    height, deep__webpack_require__, time, r, __webpack_require__), that);
            };
            Howl.prototype.init = function(callback) {
                return function(node) {
                    var that = this;
                    return that._orientation = node.orientation || [1, 0, 0], that._stereo = node.stereo || null, that._pos = node.pos || null, that._pannerAttr = {
                        coneInnerAngle: "undefined" != typeof node.coneInnerAngle ? node.coneInnerAngle : 360,
                        coneOuterAngle: "undefined" != typeof node.coneOuterAngle ? node.coneOuterAngle : 360,
                        coneOuterGain: "undefined" != typeof node.coneOuterGain ? node.coneOuterGain : 0,
                        distanceModel: "undefined" != typeof node.distanceModel ? node.distanceModel : "inverse",
                        maxDistance: "undefined" != typeof node.maxDistance ? node.maxDistance : 1E4,
                        panningModel: "undefined" != typeof node.panningModel ? node.panningModel : "HRTF",
                        refDistance: "undefined" != typeof node.refDistance ? node.refDistance : 1,
                        rolloffFactor: "undefined" != typeof node.rolloffFactor ? node.rolloffFactor : 1
                    }, that._onstereo = node.onstereo ? [{
                        fn: node.onstereo
                    }] : [], that._onpos = node.onpos ? [{
                        fn: node.onpos
                    }] : [], that._onorientation = node.onorientation ? [{
                        fn: node.onorientation
                    }] : [], callback.call(this, node);
                };
            }(Howl.prototype.init);
            /**
             * @param {number} x
             * @param {number} callback
             * @return {?}
             */
            Howl.prototype.stereo = function(x, callback) {
                var self = this;
                if (!self._webAudio) {
                    return self;
                }
                if ("loaded" !== self._state) {
                    return self._queue.push({
                        event: "stereo",
                        /**
                         * @return {undefined}
                         */
                        action: function() {
                            self.stereo(x, callback);
                        }
                    }), self;
                }
                /** @type {string} */
                var restoreScript = "undefined" == typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                if ("undefined" == typeof callback) {
                    if ("number" != typeof x) {
                        return self._stereo;
                    }
                    /** @type {number} */
                    self._stereo = x;
                    /** @type {Array} */
                    self._pos = [x, 0, 0];
                }
                var codeSegments = self._getSoundIds(callback);
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    var that = self._soundById(codeSegments[i]);
                    if (that) {
                        if ("number" != typeof x) {
                            return that._stereo;
                        }
                        /** @type {number} */
                        that._stereo = x;
                        /** @type {Array} */
                        that._pos = [x, 0, 0];
                        if (that._node) {
                            /** @type {string} */
                            that._pannerAttr.panningModel = "equalpower";
                            if (!(that._panner && that._panner.pan)) {
                                update(that, restoreScript);
                            }
                            if ("spatial" === restoreScript) {
                                that._panner.setPosition(x, 0, 0);
                            } else {
                                /** @type {number} */
                                that._panner.pan.value = x;
                            }
                        }
                        self._emit("stereo", that._id);
                    }
                }
                return self;
            };
            /**
             * @param {?} x
             * @param {number} y
             * @param {number} deep__webpack_require__
             * @param {number} callback
             * @return {?}
             */
            Howl.prototype.pos = function(x, y, deep__webpack_require__, callback) {
                var self = this;
                if (!self._webAudio) {
                    return self;
                }
                if ("loaded" !== self._state) {
                    return self._queue.push({
                        event: "pos",
                        /**
                         * @return {undefined}
                         */
                        action: function() {
                            self.pos(x, y, deep__webpack_require__, callback);
                        }
                    }), self;
                }
                if (y = "number" != typeof y ? 0 : y, deep__webpack_require__ = "number" != typeof deep__webpack_require__ ? -0.5 : deep__webpack_require__, "undefined" == typeof callback) {
                    if ("number" != typeof x) {
                        return self._pos;
                    }
                    /** @type {Array} */
                    self._pos = [x, y, deep__webpack_require__];
                }
                var codeSegments = self._getSoundIds(callback);
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    var that = self._soundById(codeSegments[i]);
                    if (that) {
                        if ("number" != typeof x) {
                            return that._pos;
                        }
                        /** @type {Array} */
                        that._pos = [x, y, deep__webpack_require__];
                        if (that._node) {
                            if (!(that._panner && !that._panner.pan)) {
                                update(that, "spatial");
                            }
                            that._panner.setPosition(x, y, deep__webpack_require__);
                        }
                        self._emit("pos", that._id);
                    }
                }
                return self;
            };
            /**
             * @param {?} orientation
             * @param {?} height
             * @param {?} deep__webpack_require__
             * @param {number} callback
             * @return {?}
             */
            Howl.prototype.orientation = function(orientation, height, deep__webpack_require__, callback) {
                var self = this;
                if (!self._webAudio) {
                    return self;
                }
                if ("loaded" !== self._state) {
                    return self._queue.push({
                        event: "orientation",
                        /**
                         * @return {undefined}
                         */
                        action: function() {
                            self.orientation(orientation, height, deep__webpack_require__, callback);
                        }
                    }), self;
                }
                if (height = "number" != typeof height ? self._orientation[1] : height, deep__webpack_require__ = "number" != typeof deep__webpack_require__ ? self._orientation[2] : deep__webpack_require__, "undefined" == typeof callback) {
                    if ("number" != typeof orientation) {
                        return self._orientation;
                    }
                    /** @type {Array} */
                    self._orientation = [orientation, height, deep__webpack_require__];
                }
                var codeSegments = self._getSoundIds(callback);
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    var node = self._soundById(codeSegments[i]);
                    if (node) {
                        if ("number" != typeof orientation) {
                            return node._orientation;
                        }
                        /** @type {Array} */
                        node._orientation = [orientation, height, deep__webpack_require__];
                        if (node._node) {
                            if (!node._panner) {
                                if (!node._pos) {
                                    node._pos = self._pos || [0, 0, -0.5];
                                }
                                update(node, "spatial");
                            }
                            node._panner.setOrientation(orientation, height, deep__webpack_require__);
                        }
                        self._emit("orientation", node._id);
                    }
                }
                return self;
            };
            /**
             * @return {?}
             */
            Howl.prototype.pannerAttr = function() {
                var opts;
                var e;
                var instance;
                var self = this;
                /** @type {Arguments} */
                var args = arguments;
                if (!self._webAudio) {
                    return self;
                }
                if (0 === args.length) {
                    return self._pannerAttr;
                }
                if (1 === args.length) {
                    if ("exports" != typeof args[0]) {
                        return instance = self._soundById(parseInt(args[0], 10)), instance ? instance._pannerAttr : self._pannerAttr;
                    }
                    opts = args[0];
                    if ("undefined" == typeof e) {
                        self._pannerAttr = {
                            coneInnerAngle: "undefined" != typeof opts.coneInnerAngle ? opts.coneInnerAngle : self._coneInnerAngle,
                            coneOuterAngle: "undefined" != typeof opts.coneOuterAngle ? opts.coneOuterAngle : self._coneOuterAngle,
                            coneOuterGain: "undefined" != typeof opts.coneOuterGain ? opts.coneOuterGain : self._coneOuterGain,
                            distanceModel: "undefined" != typeof opts.distanceModel ? opts.distanceModel : self._distanceModel,
                            maxDistance: "undefined" != typeof opts.maxDistance ? opts.maxDistance : self._maxDistance,
                            panningModel: "undefined" != typeof opts.panningModel ? opts.panningModel : self._panningModel,
                            refDistance: "undefined" != typeof opts.refDistance ? opts.refDistance : self._refDistance,
                            rolloffFactor: "undefined" != typeof opts.rolloffFactor ? opts.rolloffFactor : self._rolloffFactor
                        };
                    }
                } else {
                    if (2 === args.length) {
                        opts = args[0];
                        /** @type {number} */
                        e = parseInt(args[1], 10);
                    }
                }
                var codeSegments = self._getSoundIds(e);
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    if (instance = self._soundById(codeSegments[i])) {
                        var node = instance._pannerAttr;
                        node = {
                            coneInnerAngle: "undefined" != typeof opts.coneInnerAngle ? opts.coneInnerAngle : node.coneInnerAngle,
                            coneOuterAngle: "undefined" != typeof opts.coneOuterAngle ? opts.coneOuterAngle : node.coneOuterAngle,
                            coneOuterGain: "undefined" != typeof opts.coneOuterGain ? opts.coneOuterGain : node.coneOuterGain,
                            distanceModel: "undefined" != typeof opts.distanceModel ? opts.distanceModel : node.distanceModel,
                            maxDistance: "undefined" != typeof opts.maxDistance ? opts.maxDistance : node.maxDistance,
                            panningModel: "undefined" != typeof opts.panningModel ? opts.panningModel : node.panningModel,
                            refDistance: "undefined" != typeof opts.refDistance ? opts.refDistance : node.refDistance,
                            rolloffFactor: "undefined" != typeof opts.rolloffFactor ? opts.rolloffFactor : node.rolloffFactor
                        };
                        var panner = instance._panner;
                        if (panner) {
                            panner.coneInnerAngle = node.coneInnerAngle;
                            panner.coneOuterAngle = node.coneOuterAngle;
                            panner.coneOuterGain = node.coneOuterGain;
                            panner.distanceModel = node.distanceModel;
                            panner.maxDistance = node.maxDistance;
                            panner.panningModel = node.panningModel;
                            panner.refDistance = node.refDistance;
                            panner.rolloffFactor = node.rolloffFactor;
                        } else {
                            if (!instance._pos) {
                                instance._pos = self._pos || [0, 0, -0.5];
                            }
                            update(instance, "spatial");
                        }
                    }
                }
                return self;
            };
            Sound.prototype.init = function(next_callback) {
                return function() {
                    var options = this;
                    var self = options._parent;
                    options._orientation = self._orientation;
                    options._stereo = self._stereo;
                    options._pos = self._pos;
                    options._pannerAttr = self._pannerAttr;
                    next_callback.call(this);
                    if (options._stereo) {
                        self.stereo(options._stereo);
                    } else {
                        if (options._pos) {
                            self.pos(options._pos[0], options._pos[1], options._pos[2], options._id);
                        }
                    }
                };
            }(Sound.prototype.init);
            Sound.prototype.reset = function(next_callback) {
                return function() {
                    var that = this;
                    var element = that._parent;
                    return that._orientation = element._orientation, that._pos = element._pos, that._pannerAttr = element._pannerAttr, next_callback.call(this);
                };
            }(Sound.prototype.reset);
            /**
             * @param {exports} self
             * @param {string} callback
             * @return {undefined}
             */
            var update = function(self, callback) {
                callback = callback || "spatial";
                if ("spatial" === callback) {
                    self._panner = Howler.ctx.createPanner();
                    self._panner.coneInnerAngle = self._pannerAttr.coneInnerAngle;
                    self._panner.coneOuterAngle = self._pannerAttr.coneOuterAngle;
                    self._panner.coneOuterGain = self._pannerAttr.coneOuterGain;
                    self._panner.distanceModel = self._pannerAttr.distanceModel;
                    self._panner.maxDistance = self._pannerAttr.maxDistance;
                    self._panner.panningModel = self._pannerAttr.panningModel;
                    self._panner.refDistance = self._pannerAttr.refDistance;
                    self._panner.rolloffFactor = self._pannerAttr.rolloffFactor;
                    self._panner.setPosition(self._pos[0], self._pos[1], self._pos[2]);
                    self._panner.setOrientation(self._orientation[0], self._orientation[1], self._orientation[2]);
                } else {
                    self._panner = Howler.ctx.createStereoPanner();
                    self._panner.pan.value = self._stereo;
                }
                self._panner.connect(self._node);
                if (!self._paused) {
                    self._parent.pause(self._id, true).play(self._id);
                }
            };
        })();
    }).call(exports, function() {
        return this;
    }());

}