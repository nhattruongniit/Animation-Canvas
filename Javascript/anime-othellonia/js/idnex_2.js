$(function() {
    new Ikusa2017Summer;
});
var Ikusa2017Summer = function() {
    /**
     * @return {undefined}
     */
    function height() {
        init();
    }
    /**
     * @return {undefined}
     */
    function init() {
        /** @type {string} */
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("iphone") <= -1) {
            if (userAgent.indexOf("ipad") <= -1) {
                if (userAgent.indexOf("android") <= -1) {
                    $(".js-bg").addClass("is-pc");
                    $(".js-main").addClass("is-pc");
                    $(".js-main_characterOthello2").addClass("is-pc");
                    $(".js-main_characterOthello1").addClass("is-pc");
                    $(".js-main_bottom").addClass("is-pc");
                    $(".js-contents").addClass("is-pc");
                    $(".js-middle").addClass("is-pc");
                }
            }
        }
        $(window).load(function() {
            f();
        });
    }
    /**
     * @return {undefined}
     */
    function f() {
        update();
        start();
        setTimeout(function() {
            play();
        }, 200);
    }
    /**
     * @return {undefined}
     */
    function start() {
        /**
         * @return {undefined}
         */
        function done() {
            $(".modal").fadeOut(200, function() {
                $(".modal_movie").empty();
            });
        }
        /**
         * @return {undefined}
         */
        function start() {
            $(".modal").fadeIn(200, function() {
                $(".modal_movie").append('<iframe width="619" height="348" src="https://www.youtube.com/embed/TLu9C8D6CPQ?autoplay=1&showinfo=0&rel=0&autohide=1&modestbranding=0" allowfullscreen=""></iframe>');
            });
        }
        /**
         * @return {undefined}
         */
        function run() {
            $(".modal").fadeIn(200, function() {
                $(".modal_movie").append('<iframe width="619" height="348" src="https://www.youtube.com/embed/_S6jYbWbPKg?autoplay=1&showinfo=0&rel=0&autohide=1&modestbranding=0" allowfullscreen=""></iframe>');
            });
        }
        /**
         * @return {undefined}
         */
        function load() {
            $(".modal").fadeIn(200, function() {
                $(".modal_movie").append('<iframe width="619" height="348" src="https://www.youtube.com/embed/Eh3ORuVftwM?autoplay=1&showinfo=0&rel=0&autohide=1&modestbranding=0" allowfullscreen=""></iframe>');
            });
        }
        /**
         * @return {undefined}
         */
        function complete() {
            $(".modal").fadeIn(200, function() {
                $(".modal_movie").append('<iframe width="619" height="348" src="https://www.youtube.com/embed/LnRd9j1sQQU?autoplay=1&showinfo=0&rel=0&autohide=1&modestbranding=0" allowfullscreen=""></iframe>');
            });
        }
        /**
         * @return {undefined}
         */
        function init() {
            $(".modal").fadeIn(200, function() {
                $(".modal_movie").append('<iframe width="619" height="348" src="https://www.youtube.com/embed/hFwT2RpPYJA?autoplay=1&showinfo=0&rel=0&autohide=1&modestbranding=0" allowfullscreen=""></iframe>');
            });
        }
        /**
         * @return {undefined}
         */
        function update() {
            $(".modal").fadeIn(200, function() {
                $(".modal_movie").append('<iframe width="619" height="348" src="https://www.youtube.com/embed/9KAUauJAG8c?autoplay=1&showinfo=0&rel=0&autohide=1&modestbranding=0" allowfullscreen=""></iframe>');
            });
        }
        /**
         * @return {undefined}
         */
        function show() {
            $(".modal").fadeIn(200, function() {
                $(".modal_movie").append('<iframe width="619" height="348" src="https://www.youtube.com/embed/9KAUauJAG8c?autoplay=1&showinfo=0&rel=0&autohide=1&modestbranding=0" allowfullscreen=""></iframe>');
            });
        }
        /**
         * @return {undefined}
         */
        function onFailed() {}
        $(".js-modal_close").on("click", function() {
            done();
        });
        $(".js-movie1").on("click", function() {
            start();
        });
        $(".js-movie2").on("click", function() {
            run();
        });
        $(".js-movie3").on("click", function() {
            load();
        });
        $(".js-movie4").on("click", function() {
            complete();
        });
        $(".js-movie5").on("click", function() {
            init();
        });
        $(".js-movie6").on("click", function() {
            update();
        });
        $(".js-movie7").on("click", function() {
            show();
        });
        $(".js-movie8").on("click", function() {
            onFailed();
        });
    }
    /**
     * @return {undefined}
     */
    function update() {
        /**
         * @return {undefined}
         */
        function update() {
            /** @type {number} */
            newWidth = window.innerWidth;
        }
        /**
         * @param {Object} dataAndEvents
         * @return {undefined}
         */
        function BigDrop(dataAndEvents) {
            /** @type {number} */
            this.x = Math.random() * width;
            /** @type {number} */
            this.y = Math.random() * y - y;
            this.r = r(1, 10);
            /** @type {number} */
            this.d = Math.random() * length + 10;
            /** @type {Object} */
            this.colorOptions = dataAndEvents;
            /** @type {number} */
            this.tilt = Math.floor(10 * Math.random()) - 10;
            /** @type {number} */
            this.tiltAngleIncremental = 0.1 * Math.random() + 0.02;
            /** @type {number} */
            this.tiltAngle = 0;
            /**
             * @return {?}
             */
            this.draw = function() {
                return context.beginPath(), context.lineWidth = this.r / 1.4, context.strokeStyle = this.color, context.moveTo(this.x + this.tilt + this.r / 4, this.y), context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4), context.stroke();
            };
        }
        /**
         * @return {undefined}
         */
        function callback() {
            /** @type {(HTMLElement|null)} */
            renderer = document.getElementById("bg_canvasContaienr");
            context = renderer.getContext("2d");
            width = newWidth;
            y = opt_arg2;
            renderer.width = width;
            renderer.height = y;
        }
        /**
         * @return {undefined}
         */
        function success() {
            /** @type {Array} */
            dropList = [];
            /** @type {boolean} */
            O = false;
            /** @type {number} */
            var times = 0;
            for (; times < length; times++) {
                var expression = stroke.getColor();
                dropList.push(new BigDrop(expression));
            }
            successCallback();
        }
        /**
         * @return {?}
         */
        function check() {
            context.clearRect(0, 0, width, y);
            /** @type {Array} */
            var eventPath = [];
            /** @type {number} */
            var fromIndex = 0;
            for (; fromIndex < length; fromIndex++) {
                ! function(i) {
                    eventPath.push(dropList[i].draw());
                }(fromIndex);
            }
            return start(), eventPath;
        }
        /**
         * @param {number} from
         * @param {number} to
         * @return {?}
         */
        function r(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }
        /**
         * @return {undefined}
         */
        function start() {
            var pdataCur;
            /** @type {number} */
            var t = 0;
            phase += 0.01;
            M += 0.1;
            /** @type {number} */
            var counter = 0;
            for (; counter < length; counter++) {
                if (pdataCur = dropList[counter], O) {
                    return;
                }
                if (!j && pdataCur.y < -15) {
                    pdataCur.y = y + 100;
                } else {
                    draw(pdataCur, counter);
                    if (pdataCur.y <= y) {
                        t++;
                    }
                    reset(pdataCur, counter);
                }
            }
            if (0 === t) {
                clear();
            }
        }
        /**
         * @param {Object} value
         * @param {number} cb
         * @return {undefined}
         */
        function reset(value, cb) {
            if (value.x > width + 20 || (value.x < -20 || value.y > y)) {
                if (j) {
                    if (cb % 5 > 0 || cb % 2 == 0) {
                        lerp(value, Math.random() * width, -10, Math.floor(10 * Math.random()) - 10);
                    } else {
                        if (Math.sin(phase) > 0) {
                            lerp(value, -5, Math.random() * y, Math.floor(10 * Math.random()) - 10);
                        } else {
                            lerp(value, width + 5, Math.random() * y, Math.floor(10 * Math.random()) - 10);
                        }
                    }
                }
            }
        }
        /**
         * @param {Object} data
         * @param {number} x
         * @return {undefined}
         */
        function draw(data, x) {
            data.tiltAngle += data.tiltAngleIncremental;
            data.y += (Math.cos(phase + data.d) + 3 + data.r / 2) / 2;
            data.x += Math.sin(phase);
            /** @type {number} */
            data.tilt = 15 * Math.sin(data.tiltAngle - x / 3);
            data.color = data.tilt > 0 ? data.colorOptions.main : data.colorOptions.alt;
        }
        /**
         * @param {Object} b
         * @param {number} a
         * @param {number} ratio
         * @param {number} n
         * @return {undefined}
         */
        function lerp(b, a, ratio, n) {
            /** @type {number} */
            b.x = a;
            /** @type {number} */
            b.y = ratio;
            /** @type {number} */
            b.tilt = n;
        }
        /**
         * @return {undefined}
         */
        function successCallback() {
            width = newWidth;
            y = opt_arg2;
            renderer.width = width;
            renderer.height = y;
            (function main() {
                return O ? null : (res = requestAnimFrame(main), check());
            })();
        }
        /**
         * @return {undefined}
         */
        function clear() {
            /** @type {boolean} */
            O = true;
            if (void 0 != context) {
                context.clearRect(0, 0, width, y);
            }
        }
        var renderer;
        var context;
        var width;
        var y;
        var res;
        var newWidth;
        var opt_arg2;
        /** @type {number} */
        var length = 270;
        /** @type {Array} */
        var dropList = [];
        /** @type {number} */
        var phase = 0;
        /** @type {number} */
        var M = 0;
        /** @type {boolean} */
        var j = true;
        /** @type {boolean} */
        var O = true;
        /** @type {string} */
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("iphone") <= -1 && (userAgent.indexOf("ipad") <= -1 && userAgent.indexOf("android") <= -1)) {
            /** @type {number} */
            newWidth = window.innerWidth;
            /** @type {number} */
            opt_arg2 = 1082;
            $(window).resize(update);
            update();
        } else {
            /** @type {number} */
            newWidth = 750;
            /** @type {number} */
            opt_arg2 = 1320;
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
            /**
             * @return {?}
             */
            getColor: function() {
                return this.colorIncrementer >= 10 && (this.colorIncrementer = 0, this.colorIndex++, this.colorIndex >= this.dualColorOptions.length && (this.colorIndex = 0)), this.colorIncrementer++, this.dualColorOptions[this.colorIndex];
            }
        };
        $(document).ready(function() {
            callback();
            success();
            $(window).resize(function() {
                width = newWidth;
                y = opt_arg2;
                renderer.width = width;
                renderer.height = y;
            });
        });
    }
    /**
     * @return {undefined}
     */
    function play() {
        /** @type {number} */
        var delay = 0.2;
        TweenMax.set($(".js-main_textTitle"), {
            alpha: 0,
            scale: 3
        });
        TweenMax.set($(".js-main_textDescription"), {
            alpha: 0,
            scale: 3,
            y: 70
        });
        TweenMax.set($(".js-main_characterEvil"), {
            alpha: 0,
            scale: 0.8,
            x: -300,
            y: 100
        });
        TweenMax.set($(".js-main_characterGod"), {
            alpha: 0,
            scale: 0.8,
            x: 300,
            y: 100
        });
        setTimeout(function() {
            $(".js-loading").fadeOut(200);
        }, 200);
        TweenMax.to($(".js-main_textTitle"), 0.8, {
            delay: 0.8 - delay,
            scale: 1,
            alpha: 1,
            ease: Elastic.easeOut.config(0.6, 0.5)
        });
        TweenMax.to($(".js-main_textDescription"), 0.8, {
            delay: 0.85 - delay,
            scale: 1,
            alpha: 1,
            y: 0,
            ease: Elastic.easeOut.config(0.6, 0.5)
        });
        TweenMax.to($(".js-main_characterEvil"), 0.45, {
            delay: 1.4 - delay,
            scale: 1,
            alpha: 1,
            x: 0,
            y: 0,
            ease: Elastic.easeOut.config(0.6, 0.5)
        });
        TweenMax.to($(".js-main_characterGod"), 0.45, {
            delay: 1.4 - delay,
            scale: 1,
            alpha: 1,
            x: 0,
            y: 0,
            ease: Elastic.easeOut.config(0.6, 0.5)
        });
    }
    return height;
}();
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || (window.webkitRequestAnimationFrame || (window.mozRequestAnimationFrame || (window.oRequestAnimationFrame || (window.msRequestAnimationFrame || function(after) {
        return window.setTimeout(after, 1E3 / 60);
    }))));
}();