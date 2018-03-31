function detectPlatform() {
    if ((/iPhone|iPad|iPod/i).test(navigator.userAgent)) {
        return 'ios';
    }
    if ((/Android|BlackBerry/i).test(navigator.userAgent)) {
        return 'android';
    }

    return false;
}
(function($) {
    /**
     * Detect platform
     */
    $(document).ready(function() {
        var platform = detectPlatform();
        if (platform !== false) {
            $('body').addClass("is-sp is-" + platform);
        } else {
            $('body').addClass("is-pc");
        }
    });
})(jQuery);


$('.c-main-footer__btnTop').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 800);
});


function closePopup() {
    $('.overlay').fadeOut(200);
    $('.c_modal').fadeOut(200);
    $("body").removeClass("bdFixed");
    $("html").removeClass("disableScr");
    $("body").css({
        "top": "auto",
        "height": "auto",
        "position": "relative"
    });
    $("html, body").scrollTop($("body").attr("data-position"));
}

$('#modalBox_1').on('click', function() {
    $('#modal_pop1').fadeIn(200);
    $('.overlay').fadeIn(200);
    var __cur_p = $(window).scrollTop();
    var __cur_h = $("body").outerHeight();
    $("body").attr("data-position", __cur_p);
    $("body").addClass("bdFixed");
    $("html").addClass("disableScr");
    $("body").css({
        "top": "-" + __cur_p + "px",
        "height": __cur_h + "px",
    });
});

$('#modalBox_2').on('click', function() {
    $('#modal_pop2').fadeIn(200);
    $('.overlay').fadeIn(200);
    var __cur_p = $(window).scrollTop();
    var __cur_h = $("body").outerHeight();
    $("body").attr("data-position", __cur_p);
    $("body").addClass("bdFixed");
    $("html").addClass("disableScr");
    $("body").css({
        "top": "-" + __cur_p + "px",
        "height": __cur_h + "px",
    });
});

$('.c_modal__closeBtn').on('click', function() {
    closePopup();
});

$(document.body).imagesLoaded(function() {
    setTimeout(function() {
        $(".js-loading").fadeOut(200, function() {
            scrollMngr.run();
        })
    }, 200)
    var bg_black = $('.bg_black');
    TweenLite.to(bg_black, 1.8, { opacity: 0, delay: 1.8, ease: "easeInOutExpo" });

});

function ScrollManager() {
    var elements = {};
    var $win = $(window);
    Object.assign(this, {
        check() {
            var scrollTop = $win.scrollTop(),
                scrollBottom = scrollTop + window.innerHeight;
            $.each(elements, function(i, item) {
                var offset = item.element.offset();
                if (scrollTop < offset.top && scrollBottom > offset.top + item.element.height() - 250) {
                    delete elements[i];
                    item.call.call(item.element)
                }
            });

            if ($.isEmptyObject(elements)) this.stop();
        },
        add(selector, call) {
            elements[selector] = {
                element: $(selector),
                call: call || function() {}
            }
        },
        run() {
            $win.on('scroll', this.check);
            this.check();
        },
        stop() {
            $win.off('scroll', this.check);
        }
    });

    this.check = this.check.bind(this);
}

const scrollMngr = new ScrollManager();
scrollMngr.add('#section1', function() {
    var ico_point1 = $('#iconPoint1');
    var lightPoint1 = $('#lightPoint1');
    var textPoint1 = $('#textPoint1');

    var p1_chac_1 = $('#point1_char1');
    var p1_chac_2 = $('#point1_char2');
    var p1_chac_3 = $('#point1_char3');
    var p1_chac_4 = $('#point1_char4');
    TweenLite.to(ico_point1, 0.5, { scaleX: 1, scaleY: 1, opacity: 1, ease: "easeInOutBack" });
    TweenLite.to(lightPoint1, 0.8, { left: -42, opacity: 1, delay: 0.2, ease: "easeInOutExpo" });
    TweenLite.to(textPoint1, 0.8, { top: 57, right: 60, opacity: 1, delay: 0.4, ease: "easeInOutExpo" });
    TweenLite.to(p1_chac_1, 0.6, { top: -62, opacity: 1, delay: 0.6, ease: "easeInOutExpo" });
    TweenLite.to(p1_chac_2, 0.6, { top: 47, opacity: 1, delay: 0.8, ease: "easeInOutExpo" });
    TweenLite.to(p1_chac_3, 0.6, { top: -49, opacity: 1, delay: 1, ease: "easeInOutExpo" });
    TweenLite.to(p1_chac_4, 0.6, { top: 16, opacity: 1, delay: 1.2, ease: "easeInOutExpo" });
});

scrollMngr.add('#section2', function() {
    var p2_chac_1 = $('#point2_char1');
    var p2_chac_2 = $('#point2_char2');
    var p2_chac_3 = $('#point2_char3');
    var ico_point2 = $('#iconPoint2');
    var lightPoint2 = $('#lightPoint2');
    var textPoint2 = $('#textPoint2');
    TweenLite.to(ico_point2, 0.5, { scaleX: 1, scaleY: 1, opacity: 1, ease: "easeInOutBack" });
    TweenLite.to(lightPoint2, 0.8, { left: -42, opacity: 1, delay: 0.2, ease: "easeInOutExpo" });
    TweenLite.to(textPoint2, 0.8, { top: 57, right: 10, opacity: 1, delay: 0.4, ease: "easeInOutExpo" });
    TweenLite.to(p2_chac_1, 0.6, { top: -80, opacity: 1, delay: 0.6, ease: "easeInOutExpo" });
    TweenLite.to(p2_chac_2, 0.6, { top: 94, opacity: 1, delay: 0.8, ease: "easeInOutExpo" });
    TweenLite.to(p2_chac_3, 0.6, { top: -76, opacity: 1, delay: 1, ease: "easeInOutExpo" });
});

scrollMngr.add('#section3', function() {
    var p3_chac_1 = $('#point3_char1');
    var p3_chac_2 = $('#point3_char2');
    var ico_point3 = $('#iconPoint3');
    var lightPoint3 = $('#lightPoint3');
    var textPoint3 = $('#textPoint3');
    TweenLite.to(ico_point3, 0.5, { scaleX: 1, scaleY: 1, opacity: 1, ease: "easeInOutBack" });
    TweenLite.to(lightPoint3, 0.8, { left: -42, opacity: 1, delay: 0.2, ease: "easeInOutExpo" });
    TweenLite.to(textPoint3, 0.8, { top: 57, right: 10, opacity: 1, delay: 0.4, ease: "easeInOutExpo" });
    TweenLite.to(p3_chac_1, 0.6, { top: -230, opacity: 1, delay: 0.6, ease: "easeInOutExpo" });
    TweenLite.to(p3_chac_2, 0.5, { scaleX: 1, scaleY: 1, opacity: 1, delay: 0.8, ease: "easeInOutBack" });
});

var link_twitter = "http://dena.my/2CnDvAJ";
var link_line = "http://dena.my/2FCZD9a?openExternalBrowser=1";
var at = "@Othellonia_info";
var message = "【4/13コラボ開廷】逆転裁判フェスタ '18開催！コラボ期間にログインするだけでコラボキャラ確定無料ガチャが引ける！！その他、新闘化先解放や新コラボキャラ登場など激超イベント目白押し！";
var hash = "#逆転裁判xオセロニア";
var twit = "http://twitter.com/share?url=" + encodeURIComponent(link_twitter) + "&text=" + message + hash + "&related=" + at;
var face = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(link);
var line = "http://line.me/R/msg/text/?" + message + "%20" + encodeURIComponent(link_line);

$('.js-footer_shareButtonFacebook').attr('href', face);
$('.js-footer_shareButtonTwitter').attr('href', twit);
$('.js-footer_shareButtonLine').attr('href', line);