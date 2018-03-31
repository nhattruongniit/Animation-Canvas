$(function() {
    new Ikusa2017Summer_Common;
});
var Ikusa2017Summer_Common = function() {
    /**
     * @return {undefined}
     */
    function dispatchEvent() {
        handler();
    }
    /**
     * @return {undefined}
     */
    function handler() {
        /** @type {string} */
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("iphone") <= -1) {
            if (userAgent.indexOf("ipad") <= -1) {
                if (userAgent.indexOf("android") <= -1) {
                    $(".js-body").addClass("is-pc");
                    $(".js-contents").addClass("is-pc");
                }
            }
        }
        FastClick.attach(document.body);
        $(window).load(function() {
            next();
        });
    }
    /**
     * @return {undefined}
     */
    function next() {
        queue();
        run();
        init();
    }
    /**
     * @return {undefined}
     */
    function queue() {
        /**
         * @return {undefined}
         */
        function run() {
            /** @type {string} */
            data = encodeURIComponent(encodedValue);
            /** @type {string} */
            value = encodeURIComponent(h);
            /** @type {string} */
            retVal = encodeURIComponent(key);
            /** @type {string} */
            url = encodeURIComponent(query);
            /** @type {string} */
            href = "http://twitter.com/share?url=" + value + "&text=" + data + "%20" + retVal + "&related=" + url;
            $(".js-footer_shareButtonTwitter").attr("href", href);
            /** @type {string} */
            result = encodeURIComponent(arg);
            /** @type {string} */
            error = "https://www.facebook.com/sharer/sharer.php?u=" + result;
            $(".js-footer_shareButtonFacebook").attr("href", error);
            /** @type {string} */
            s = encodeURIComponent(match);
            /** @type {string} */
            name = encodeURIComponent(o);
            /** @type {string} */
            v = "http://line.me/R/msg/text/?" + s + "%20" + name;
            $(".js-footer_shareButtonLine").attr("href", v);
        }
        var data;
        var value;
        var retVal;
        var url;
        var href;
        var result;
        var error;
        var s;
        var name;
        var v;
        /** @type {string} */
        var encodedValue = "\u3010No.1\u6c7a\u5b9a\u6226\u3011\u30aa\u30bb\u30ed\u30cb\u30a2\u30f3\u306e\u9802\u70b9\u306f\u8ab0\u3060\uff01\uff1f\u5168\u56fd\u3067\u958b\u50ac\u3055\u308c\u305f\u4e88\u9078\u3092\u52dd\u3061\u629c\u3044\u305f\u5f37\u8005\u9054\u306b\u3088\u308b\u71b1\u3044\u6226\u3044\u3092\u898b\u9003\u3059\u306a\uff01\uff01";
        /** @type {string} */
        var h = "https://community.othellonia.com/ikusa/2017summer/";
        /** @type {string} */
        var key = "#\u30aa\u30bb\u30ed\u30cb\u30a2 #\u30aa\u30bb\u30ed\u30cb\u30a2\u30f3\u306e\u6226";
        /** @type {string} */
        var query = "@Othellonia_info";
        /** @type {string} */
        var arg = "https://community.othellonia.com/ikusa/2017summer/";
        /** @type {string} */
        var match = "\u3010No.1\u6c7a\u5b9a\u6226\u3011\u30aa\u30bb\u30ed\u30cb\u30a2\u30f3\u306e\u9802\u70b9\u306f\u8ab0\u3060\uff01\uff1f\u5168\u56fd\u3067\u958b\u50ac\u3055\u308c\u305f\u4e88\u9078\u3092\u52dd\u3061\u629c\u3044\u305f\u5f37\u8005\u9054\u306b\u3088\u308b\u71b1\u3044\u6226\u3044\u3092\u898b\u9003\u3059\u306a\uff01\uff01";
        /** @type {string} */
        var o = "https://community.othellonia.com/ikusa/2017summer/";
        run();
    }
    /**
     * @return {undefined}
     */
    function run() {
        /**
         * @return {undefined}
         */
        function update() {
            TweenMax.to(window, 2, {
                scrollTo: {
                    y: 0,
                    autoKill: false
                },
                ease: Power2.easeInOut
            });
        }
        $(".js-footer_arrow").on("click", function() {
            update();
        });
    }
    /**
     * @return {undefined}
     */
    function init() {
        /**
         * @param {?} element
         * @return {undefined}
         */
        function loaded(element) {
            $(element).addClass("is-tap");
            setTimeout(function() {
                $(element).removeClass("is-tap");
            }, 100);
        }
        /**
         * @param {?} ctx
         * @return {undefined}
         */
        function done(ctx) {
            $(ctx).removeClass("is-out");
            $(ctx).addClass("is-over");
        }
        /**
         * @param {?} node
         * @return {undefined}
         */
        function cb(node) {
            $(node).removeClass("is-over");
            $(node).addClass("is-out");
        }
        /** @type {string} */
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("iphone") <= -1 && (userAgent.indexOf("ipad") <= -1 && userAgent.indexOf("android") <= -1)) {
            $(".js-button").on("mouseover", function() {
                done(this);
            });
            $(".js-button").on("mouseout", function() {
                cb(this);
            });
            $(".js-middle_button").on("mouseover", function() {
                done(this);
            });
            $(".js-middle_button").on("mouseout", function() {
                cb(this);
            });
            $(".js-middle_subbutton").on("mouseover", function() {
                done(this);
            });
            $(".js-middle_subbutton").on("mouseout", function() {
                cb(this);
            });
            $(".js-middle_subbuttonsmall").on("mouseover", function() {
                done(this);
            });
            $(".js-middle_subbuttonsmall").on("mouseout", function() {
                cb(this);
            });
            $(".js-footer_downloadButtonIos").on("mouseover", function() {
                done(this);
            });
            $(".js-footer_downloadButtonIos").on("mouseout", function() {
                cb(this);
            });
            $(".js-footer_downloadButtonAndroid").on("mouseover", function() {
                done(this);
            });
            $(".js-footer_downloadButtonAndroid").on("mouseout", function() {
                cb(this);
            });
            $(".js-footer_shareButtonFacebook").on("mouseover", function() {
                done(this);
            });
            $(".js-footer_shareButtonFacebook").on("mouseout", function() {
                cb(this);
            });
            $(".js-footer_shareButtonLine").on("mouseover", function() {
                done(this);
            });
            $(".js-footer_shareButtonLine").on("mouseout", function() {
                cb(this);
            });
            $(".js-footer_shareButtonTwitter").on("mouseover", function() {
                done(this);
            });
            $(".js-footer_shareButtonTwitter").on("mouseout", function() {
                cb(this);
            });
        } else {
            $(".js-button").on("touchstart", function() {
                loaded(this);
            });
            $(".js-middle_button").on("touchstart", function() {
                loaded(this);
            });
            $(".js-middle_subbutton").on("touchstart", function() {
                loaded(this);
            });
            $(".js-middle_subbuttonsmall").on("touchstart", function() {
                loaded(this);
            });
            $(".js-footer_downloadButtonIos").on("touchstart", function() {
                loaded(this);
            });
            $(".js-footer_downloadButtonAndroid").on("touchstart", function() {
                loaded(this);
            });
            $(".js-footer_shareButtonFacebook").on("touchstart", function() {
                loaded(this);
            });
            $(".js-footer_shareButtonLine").on("touchstart", function() {
                loaded(this);
            });
            $(".js-footer_shareButtonTwitter").on("touchstart", function() {
                loaded(this);
            });
        }
    }
    return dispatchEvent;
}();