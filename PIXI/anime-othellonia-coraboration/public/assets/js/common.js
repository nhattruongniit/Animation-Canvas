$(function() {
    new Ikusa2017Summer_Common
});
var Ikusa2017Summer_Common = function() {


    function n() {
        s(), e(), u()
    }

    function s() {
        function o() {
            t = encodeURIComponent(d), n = encodeURIComponent(m), s = encodeURIComponent(h), e = encodeURIComponent(l), u = "http://twitter.com/share?url=" + n + "&text=" + t + "%20" + s + "&related=" + e, $(".js-footer_shareButtonTwitter").attr("href", u), i = encodeURIComponent(j), r = "https://www.facebook.com/sharer/sharer.php?u=" + i, $(".js-footer_shareButtonFacebook").attr("href", r), a = encodeURIComponent(_), c = encodeURIComponent(b), f = "http://line.me/R/msg/text/?" + a + "%20" + c, $(".js-footer_shareButtonLine").attr("href", f)
        }
        var t, n, s, e, u, i, r, a, c, f, d = "今度の戦は、団体戦だ！題して『オセロニアンの合戦』３人vs３人で行われる熱いバトルで全国のオセロニアン達の最強チームが決定する！",
            m = "https://community.othellonia.com/kassen/2018/",
            h = "#オセロニアンの合戦",
            l = "@Othellonia_info",
            j = "https://community.othellonia.com/kassen/2018/",
            _ = "今度の戦は、団体戦だ！題して『オセロニアンの合戦』３人vs３人で行われる熱いバトルで全国のオセロニアン達の最強チームが決定する！",
            b = "https://community.othellonia.com/kassen/2018/";
        o()
    }


    function u() {
        function o(o) {
            $(o).addClass("is-tap"), setTimeout(function() {
                $(o).removeClass("is-tap")
            }, 100)
        }

        function t(o) {
            $(o).removeClass("is-out"), $(o).addClass("is-over")
        }

        function n(o) {
            $(o).removeClass("is-over"), $(o).addClass("is-out")
        }
        var s = navigator.userAgent.toLowerCase();
        s.indexOf("iphone") <= -1 && s.indexOf("ipad") <= -1 && s.indexOf("android") <= -1 ? ($(".js-button").on("mouseover", function() {
            t(this)
        }), $(".js-button").on("mouseout", function() {
            n(this)
        }), $(".js-middle_button").on("mouseover", function() {
            t(this)
        }), $(".js-middle_button").on("mouseout", function() {
            n(this)
        }), $(".js-middle_subbutton").on("mouseover", function() {
            t(this)
        }), $(".js-middle_subbutton").on("mouseout", function() {
            n(this)
        }), $(".js-middle_subbuttonsmall").on("mouseover", function() {
            t(this)
        }), $(".js-middle_subbuttonsmall").on("mouseout", function() {
            n(this)
        }), $(".js-footer_downloadButtonIos").on("mouseover", function() {
            t(this)
        }), $(".js-footer_downloadButtonIos").on("mouseout", function() {
            n(this)
        }), $(".js-footer_downloadButtonAndroid").on("mouseover", function() {
            t(this)
        }), $(".js-footer_downloadButtonAndroid").on("mouseout", function() {
            n(this)
        }), $(".js-footer_shareButtonFacebook").on("mouseover", function() {
            t(this)
        }), $(".js-footer_shareButtonFacebook").on("mouseout", function() {
            n(this)
        }), $(".js-footer_shareButtonLine").on("mouseover", function() {
            t(this)
        }), $(".js-footer_shareButtonLine").on("mouseout", function() {
            n(this)
        }), $(".js-footer_shareButtonTwitter").on("mouseover", function() {
            t(this)
        }), $(".js-footer_shareButtonTwitter").on("mouseout", function() {
            n(this)
        })) : ($(".js-button").on("touchstart", function() {
            o(this)
        }), $(".js-middle_button").on("touchstart", function() {
            o(this)
        }), $(".js-middle_subbutton").on("touchstart", function() {
            o(this)
        }), $(".js-middle_subbuttonsmall").on("touchstart", function() {
            o(this)
        }), $(".js-footer_downloadButtonIos").on("touchstart", function() {
            o(this)
        }), $(".js-footer_downloadButtonAndroid").on("touchstart", function() {
            o(this)
        }), $(".js-footer_shareButtonFacebook").on("touchstart", function() {
            o(this)
        }), $(".js-footer_shareButtonLine").on("touchstart", function() {
            o(this)
        }), $(".js-footer_shareButtonTwitter").on("touchstart", function() {
            o(this)
        }))
    }
    return o
}();