import App from './components/App';
import Util from "./components/Util";
import ScrollTrigger from './components/ScrollTrigger';

import {TweenMax} from 'gsap';
import {Application, DisplayObject} from 'pixi.js';
import {MainCanvas} from './components/Animations/MainCanvas';
import {MiddleCanvas} from './components/Animations/MiddleCanvas';

// Skip hero message of PIXI
PIXI.utils.skipHello();

const app = new App();

app.score = 0;
app.scoreUpdatedAt = '';
app.scoreBreakPointsList = [1, 3, 5, 10, 15, 20].map(score => score * 1000000);
app.lastScoreBreakpoint = 0;
app.scoreURL = window.scoreURL;
app.pageID = window.pageID || document.body.dataset.page;

/*
| Methods
|--------------------------------------------------------------------------
*/
/**
 * @param {string} pageID
 * @return {boolean}
 */
app.isPage = function (pageID) {
    return this.pageID === pageID;
};


app.MiddleCanvasInit = function () {
    const container1 = window.container1 = new Application({
        width: 750,
        height: 550,
        antialias: true,
        resolution: window.resolution || 1,
        transparent: true
    });

    let middleCanvas = this.middleCanvas = new MiddleCanvas({
        width: 750,
        height: 550,
        mc1: 'assets/images/sprites-canvas/middle-canvas.png.json',
        app: container1
    });

    container1.stage.addChild(middleCanvas);

    let bgMiddle = document.getElementsByClassName('c-incentive__catch');
    bgMiddle[0].appendChild(container1.view);
};

app.getScore = function () {
    let scoreURL = this.scoreURL;

    if (!scoreURL) {
        throw new Error('Score URL is not defined');
    }

    let httpRequest;

    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (!httpRequest) {
        throw new Error('AJAX is unsupported. Unable to load score');
    }

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState !== XMLHttpRequest.DONE) {
            return;
        }

        try {
            let response = JSON.parse(httpRequest.response);

            this.score = parseInt(response.score);
            this.scoreUpdatedAt = response.update_at;

            this.triggerEvent('score_loaded');
        } catch (e) {
            throw new Error('Parse score failed: ' + e.message);
        }
    }.bind(this);

    httpRequest.open('GET', scoreURL + '?t=' + (new Date()).getTime(), true);
    httpRequest.send();
};

/**
 * @type {*|Function}
 */
app.playIncentiveAnimation = Util.afterFunc(2, function () {
    console.log('Play animate', this);
    let stepOffsetTop = this.$ref.incentive.lastStep.offsetTop;
    let stepAdditionSpace = 0;

    if (this.isAllScroreBreakpointCompleted) {
        stepAdditionSpace = this.$ref.incentive.lastStep.offsetHeight * 0.30;
    } else {
        stepAdditionSpace = this.$ref.incentive.lastStep.offsetHeight * 0.5;
    }

    // Set position of gauge arrow
    let $gaugeArrow = this.$ref.incentive.gaugeArrow;
    let gaugeArrowTop = stepOffsetTop + stepAdditionSpace;

    $gaugeArrow.style.top = (gaugeArrowTop) + 'px';

    // Set gauge color
    let $gaugeColor = this.$ref.incentive.gaugeColor;

    if (this.isAllScroreBreakpointCompleted) {
        $gaugeColor.className += ' animated';
    } else {
        let newHeight = gaugeArrowTop - $gaugeColor.offsetTop + Math.floor($gaugeArrow.offsetHeight / 2);

        newHeight = Math.min(newHeight, this.$ref.incentive.gauge.offsetHeight);


        setTimeout((function (newHeight) {
            $gaugeColor.style.height = newHeight + 'px';
        })(newHeight));
    }
}.bind(app), function(i){
    console.log('playIncentiveAnimation', i);
});

/*
| Events
|--------------------------------------------------------------------------
*/

// Set score
app.onReady(app.getScore);

app.onLoaded(function () {
    window.scroll(0, 0);
});


// Get ref of DOM
app.onReady(function () {
    this.$ref.incentive = {
        gauge: document.getElementsByClassName('c-incentiveUpgrade__gauge')[0],
        gaugeColor: document.getElementsByClassName('c-incentiveUpgrade__gauge-color')[0],
        gaugeArrow: document.getElementsByClassName('c-incentiveUpgrade__gauge-arrow')[0]
    };
});

// Analytic score
app.on('score_loaded', function () {
    let scoreBreakpoints = this.scoreBreakPointsList
        .filter((bpScore) => this.score >= bpScore)
        .map(bpScore => bpScore / 1000000 * 100);

    // Add body's classes
    scoreBreakpoints.forEach(bp => document.body.classList.add('is-sbp-' + bp));

    this.lastScoreBreakpoint = scoreBreakpoints.length ? scoreBreakpoints[scoreBreakpoints.length - 1] : 0;
    this.isAllScroreBreakpointCompleted = this.scoreBreakPointsList.length === scoreBreakpoints.length;

    document.body.classList.add('last-sbp-' + this.lastScoreBreakpoint);
    document.body.setAttribute('data-last-sbp', this.lastScoreBreakpoint + '');
});

app.on('score_loaded', function(){
    if (this.lastScoreBreakpoint) {
        /**
         * @type {Element|HTMLElement}
         */
        this.$ref.incentive.lastStep = document.getElementsByClassName('c-incentiveUpgrade__step--' + this.lastScoreBreakpoint)[0];
    } else {
        this.$ref.incentive.lastStep = document.getElementsByClassName('c-incentiveUpgrade__step--start')[0];
    }
});

app.on('score_loaded', app.playIncentiveAnimation);

app.on('score_loaded', function(){
   // document.getElementById('js-score-updated-at')
});

// Play animation of header
app.onLoaded(function () {
    const container = window.container = new Application({
        width: 750,
        height: 1000,
        antialias: true,
        resolution: window.resolution || 1,
        transparent: true
    });

    let mainCanvas = this.mainCanvas = new MainCanvas({
        width: 750,
        height: 1000,
        mc: 'assets/images/sprites-canvas/main-canvas.png.json',
        character: 'assets/images/sprites-canvas/characters.png.json',
        app: container
    });

    container.stage.addChild(mainCanvas);

    let bgPlace = document.getElementsByTagName('header');
    bgPlace[0].appendChild(container.view);

}, {delay: 700});


// Play animations on scroll
app.onLoaded(function () {
    let self = this;
    let showTrigger = new ScrollTrigger();

    showTrigger.addElement(document.getElementsByClassName('c-incentive__catch')[0], {
        delay: 200,
        offset: {
            y: 150
        },
        onHey: function (is_visible, trigger) {
            if (!is_visible) {
                return;
            }

            trigger.options.isTriggerable = false;

            let middleCanvasInit = this.MiddleCanvasInit.bind(this);
            setTimeout(middleCanvasInit, 400);

            trigger.removeMyself();
        }.bind(self)
    });

    showTrigger.addElement(document.getElementsByClassName('c-incentiveUpgrade__gauge')[0], {
        delay: false,
        onHey: function (is_visible) {
            if (!is_visible) {
                return;
            }

            self.playIncentiveAnimation();

            this.removeMyself();
        }
    });

    showTrigger.addElements(document.getElementsByClassName('c-incentiveUpgrade__step'), {
        delay: false,
        offset: {
            y: 100
        },
        onHey: function (is_visible, trigger) {
            if (!is_visible) {
                return;
            }

            this.$element.classList.add('animated');

            trigger.removeMyself();
        }
    });

    window.addEventListener('scroll', Util.throttleFunc(showTrigger.getScrollCallback(), 100));
    showTrigger.scroll();
});


/*
| Init app
|--------------------------------------------------------------------------
*/
// Register system events to handle document ready status
app.listenSystemEvent();

// Method app.init() must be call after events registered
app.init();
