webpackJsonp([0],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
module.exports = __webpack_require__(157);


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(134);

var _App2 = _interopRequireDefault(_App);

var _Util = __webpack_require__(95);

var _Util2 = _interopRequireDefault(_Util);

var _ScrollTrigger = __webpack_require__(145);

var _ScrollTrigger2 = _interopRequireDefault(_ScrollTrigger);

var _gsap = __webpack_require__(15);

var _pixi = __webpack_require__(30);

var _MainCanvas = __webpack_require__(146);

var _MiddleCanvas = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Skip hero message of PIXI
PIXI.utils.skipHello();

var app = new _App2.default();

app.score = 0;
app.scoreUpdatedAt = '';
app.scoreBreakPointsList = [1, 3, 5, 10, 15, 20].map(function (score) {
    return score * 1000000;
});
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
    var container1 = window.container1 = new _pixi.Application({
        width: 750,
        height: 550,
        antialias: true,
        resolution: window.resolution || 1,
        transparent: true
    });

    var middleCanvas = this.middleCanvas = new _MiddleCanvas.MiddleCanvas({
        width: 750,
        height: 550,
        mc1: 'assets/images/sprites-canvas/middle-canvas.png.json',
        app: container1
    });

    container1.stage.addChild(middleCanvas);

    var bgMiddle = document.getElementsByClassName('c-incentive__catch');
    bgMiddle[0].appendChild(container1.view);
};

app.getScore = function () {
    var scoreURL = this.scoreURL;

    if (!scoreURL) {
        throw new Error('Score URL is not defined');
    }

    var httpRequest = void 0;

    if (window.XMLHttpRequest) {
        // Mozilla, Safari, IE7+ ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE 6 and older
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
            var response = JSON.parse(httpRequest.response);

            this.score = parseInt(response.score);
            this.scoreUpdatedAt = response.update_at;

            this.triggerEvent('score_loaded');
        } catch (e) {
            throw new Error('Parse score failed: ' + e.message);
        }
    }.bind(this);

    httpRequest.open('GET', scoreURL + '?t=' + new Date().getTime(), true);
    httpRequest.send();
};

/**
 * @type {*|Function}
 */
app.playIncentiveAnimation = _Util2.default.afterFunc(2, function () {
    console.log('Play animate', this);
    var stepOffsetTop = this.$ref.incentive.lastStep.offsetTop;
    var stepAdditionSpace = 0;

    if (this.isAllScroreBreakpointCompleted) {
        stepAdditionSpace = this.$ref.incentive.lastStep.offsetHeight * 0.30;
    } else {
        stepAdditionSpace = this.$ref.incentive.lastStep.offsetHeight * 0.5;
    }

    // Set position of gauge arrow
    var $gaugeArrow = this.$ref.incentive.gaugeArrow;
    var gaugeArrowTop = stepOffsetTop + stepAdditionSpace;

    $gaugeArrow.style.top = gaugeArrowTop + 'px';

    // Set gauge color
    var $gaugeColor = this.$ref.incentive.gaugeColor;

    if (this.isAllScroreBreakpointCompleted) {
        $gaugeColor.className += ' animated';
    } else {
        var newHeight = gaugeArrowTop - $gaugeColor.offsetTop + Math.floor($gaugeArrow.offsetHeight / 2);

        newHeight = Math.min(newHeight, this.$ref.incentive.gauge.offsetHeight);

        setTimeout(function (newHeight) {
            $gaugeColor.style.height = newHeight + 'px';
        }(newHeight));
    }
}.bind(app), function (i) {
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
    var _this = this;

    var scoreBreakpoints = this.scoreBreakPointsList.filter(function (bpScore) {
        return _this.score >= bpScore;
    }).map(function (bpScore) {
        return bpScore / 1000000 * 100;
    });

    // Add body's classes
    scoreBreakpoints.forEach(function (bp) {
        return document.body.classList.add('is-sbp-' + bp);
    });

    this.lastScoreBreakpoint = scoreBreakpoints.length ? scoreBreakpoints[scoreBreakpoints.length - 1] : 0;
    this.isAllScroreBreakpointCompleted = this.scoreBreakPointsList.length === scoreBreakpoints.length;

    document.body.classList.add('last-sbp-' + this.lastScoreBreakpoint);
    document.body.setAttribute('data-last-sbp', this.lastScoreBreakpoint + '');
});

app.on('score_loaded', function () {
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

app.on('score_loaded', function () {
    // document.getElementById('js-score-updated-at')
});

// Play animation of header
app.onLoaded(function () {
    var container = window.container = new _pixi.Application({
        width: 750,
        height: 1000,
        antialias: true,
        resolution: window.resolution || 1,
        transparent: true
    });

    var mainCanvas = this.mainCanvas = new _MainCanvas.MainCanvas({
        width: 750,
        height: 1000,
        mc: 'assets/images/sprites-canvas/main-canvas.png.json',
        character: 'assets/images/sprites-canvas/characters.png.json',
        app: container
    });

    container.stage.addChild(mainCanvas);

    var bgPlace = document.getElementsByTagName('header');
    bgPlace[0].appendChild(container.view);
}, { delay: 700 });

// Play animations on scroll
app.onLoaded(function () {
    var self = this;
    var showTrigger = new _ScrollTrigger2.default();

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

            var middleCanvasInit = this.MiddleCanvasInit.bind(this);
            setTimeout(middleCanvasInit, 400);

            trigger.removeMyself();
        }.bind(self)
    });

    showTrigger.addElement(document.getElementsByClassName('c-incentiveUpgrade__gauge')[0], {
        delay: false,
        onHey: function onHey(is_visible) {
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
        onHey: function onHey(is_visible, trigger) {
            if (!is_visible) {
                return;
            }

            this.$element.classList.add('animated');

            trigger.removeMyself();
        }
    });

    window.addEventListener('scroll', _Util2.default.throttleFunc(showTrigger.getScrollCallback(), 100));
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

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(95);

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Events
|--------------------------------------------------------------------------
*/

var eventIndex = 0;
var eventDefaultOptions = {
    once: true, // Campaign events usually triggered only once
    bound: null,
    delay: 0
};

/**
 * @param {function} callback
 * @param {[]} args
 * @param {*} bound
 * @param {false|int} delay
 */
function executeCallback(callback, args, bound, delay) {
    if (delay !== false) {
        setTimeout(function (cb, args) {
            return function () {
                cb.apply(null, args);
            };
        }(callback.bind(bound), args), delay);
    } else {
        callback.apply(bound, args);
    }
}

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.$ref = {};

        this.events = {};
        this.device = _Util2.default.detectDevice();
    }

    /**
     * @param {string} eventName
     * @param {function} callback
     * @param {{}} [options = {}]
     */


    _createClass(App, [{
        key: 'on',
        value: function on(eventName, callback, options) {
            options = options || {};

            // Set default option
            options.once = options.hasOwnProperty('once') ? options.once : eventDefaultOptions.once;
            options.bound = options.hasOwnProperty('bound') ? options.bound : eventDefaultOptions.bound;
            options.delay = options.hasOwnProperty('delay') ? options.delay : eventDefaultOptions.delay;

            // Trigger callback immediate if event is triggered
            if (this.events[eventName] === null) {
                try {
                    executeCallback(callback, [], options.bound, options.delay);
                } catch (e) {
                    console.error('Call event throws an error: event name: ' + eventName + ', event id: immediate trigger');
                    console.error(e);
                }

                return;
            }

            if (!this.events.hasOwnProperty(eventName)) {
                this.events[eventName] = {};
            }

            var eventId = eventIndex++;

            callback._event_id = eventId;

            this.events[eventName][eventId] = {
                id: eventId,
                callback: callback,
                options: options
            };

            return this;
        }

        /**
         * @param {string} eventName
         * @return {App}
         */

    }, {
        key: 'triggerEvent',
        value: function triggerEvent(eventName) {
            if (!this.events[eventName]) {
                return this;
            }

            var args = [].slice.apply(arguments);
            var event = this.events[eventName];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(event)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var eventID = _step.value;

                    var eventDetail = event[eventID];

                    if (eventDetail.options.once) {
                        this.events[eventName][eventDetail.id] = null;
                        delete this.events[eventName][eventDetail.id];
                    }

                    try {
                        executeCallback(eventDetail.callback, args, eventDetail.options.bound || this, eventDetail.options.delay);
                    } catch (e) {
                        console.error('Call event throws an error: event name: ' + eventName + ', event id: ' + eventDetail.id);
                        console.error(e);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return this;
        }
    }, {
        key: 'listenSystemEvent',
        value: function listenSystemEvent() {
            var listener = function () {
                switch (document.readyState) {
                    case "loading":
                        // The document is still loading.
                        break;
                    case "interactive":
                        // The document has finished loading. We can now access the DOM elements.
                        if (this.events.hasOwnProperty('ready')) {
                            this.triggerEvent('ready');

                            // Prevent to add callback this event again
                            this.events.ready = null;
                        }

                        break;
                    case "complete":
                        // The page is fully loaded.
                        document.removeEventListener('readystatechange', listener);

                        if (this.events.hasOwnProperty('loaded')) {
                            this.triggerEvent('loaded');

                            // Prevent to add callback this event again
                            this.events.loaded = null;
                        }
                        break;
                }
            }.bind(this);
            document.addEventListener('readystatechange', listener);
        }

        /**
         * Add callback when page ready (the document has finished loading)
         * @param {function} cb
         * @param {{}} [options={}]
         * @return {App}
         */

    }, {
        key: 'onReady',
        value: function onReady(cb, options) {
            this.on('ready', cb, options);

            return this;
        }

        /**
         * Add callback when page loaded (the page is fully loaded)
         * @param {function} cb
         * @param {{}} [options={}]
         * @return {App}
         */

    }, {
        key: 'onLoaded',
        value: function onLoaded(cb, options) {
            this.on('loaded', cb, options);

            return this;
        }

        /**
         * Add callback when app init
         * @param {function} cb
         * @param {{}} [options={}]
         * @return {App}
         */

    }, {
        key: 'onInit',
        value: function onInit(cb, options) {
            this.on('init', cb, options);

            return this;
        }
    }, {
        key: 'init',
        value: function init() {
            this.triggerEvent('init');
        }
    }]);

    return App;
}();

exports.default = App;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(136),
    isObject = __webpack_require__(67);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(67),
    now = __webpack_require__(137),
    toNumber = __webpack_require__(139);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(96);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(67),
    isSymbol = __webpack_require__(140);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(141),
    isObjectLike = __webpack_require__(144);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(97),
    getRawTag = __webpack_require__(142),
    objectToString = __webpack_require__(143);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(97);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 144:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var triggerIdIndex = 0;

var Trigger = function () {
    function Trigger(element, options) {
        _classCallCheck(this, Trigger);

        this.id = ++triggerIdIndex;
        this.$element = element;
        this.options = Object.assign({}, Trigger.defaultOptions, options || {});
        this.addWidth = false;
        this.addHeight = false;

        this._xOffset = 0;
        this._yOffset = 0;

        this.trigered = 0;
        this.status = null;
        /**
         * @type {ScrollTrigger}
         */
        this.scrollTrigger = null;
    }

    _createClass(Trigger, [{
        key: 'left',
        value: function left() {
            return this.$element.getBoundingClientRect().left;
        }
    }, {
        key: 'right',
        value: function right() {
            return this.$element.getBoundingClientRect().right;
        }
    }, {
        key: 'top',
        value: function top() {
            return this.$element.getBoundingClientRect().top;
        }
    }, {
        key: 'bottom',
        value: function bottom() {
            return this.$element.getBoundingClientRect().bottom;
        }
    }, {
        key: 'width',
        value: function width() {
            return this.$element.offsetWidth;
        }
    }, {
        key: 'height',
        value: function height() {
            return this.$element.offsetHeight;
        }
    }, {
        key: 'xOffset',
        value: function xOffset(goingLeft) {
            var offset = this._xOffset;

            // add the full width of the element to the left position, so the
            // visibleClass is only added after the element is completely
            // in the viewport
            if (this.addWidth && !goingLeft) {
                offset += this.width();
            } else if (goingLeft && !this.addWidth) {
                offset -= this.width();
            }

            return offset;
        }
    }, {
        key: 'yOffset',
        value: function yOffset(goingUp) {
            var offset = this._yOffset;

            // add the full height of the element to the top position, so the
            // visibleClass is only added after the element is completely
            // in the viewport
            if (this.addHeight && !goingUp) {
                offset += this.height();
            } else if (goingUp && !this.addHeight) {
                offset -= this.height();
            }

            return offset;
        }
    }, {
        key: 'removeMyself',
        value: function removeMyself() {
            if (this.scrollTrigger) {
                this.scrollTrigger.destroyByID(this.id);
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            var event = document.createEvent('Event');

            event.initEvent('reset-scroll-trigger', true, true);

            this.$element.dispatchEvent(event);
        }
    }, {
        key: 'init',
        value: function init() {
            // set the default options
            // parse the options given in the data-scroll attribute, if any

            if (this.options.centerHorizontal === true) {
                this._xOffset = this.$element.offsetWidth / 2;
            }

            if (this.options.centerVertical === true) {
                this._yOffset = this.$element.offsetHeight / 2;
            }

            if (this.options.offset && this.options.offset.x) {
                this._xOffset += this.options.offset.x;
            }

            if (this.options.offset && this.options.offset.y) {
                this._yOffset += this.options.offset.y;
            }

            if (this.options.addWidth) {
                this.addWidth = this.options.addWidth;
            }

            if (this.options.addHeight) {
                this.addHeight = this.options.addHeight;
            }

            return this;
        }
    }, {
        key: 'isTriggerable',
        value: function isTriggerable() {
            if (!this.options.hasOwnProperty('isTriggerable')) {
                return true;
            }

            var isTriggerable = this.options.isTriggerable;

            return typeof isTriggerable !== 'function' ? !!isTriggerable : isTriggerable.call(this);
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return this.status === Trigger.STATUS.VISIBLE;
        }
    }, {
        key: 'isInvisible',
        value: function isInvisible() {
            return this.status === Trigger.STATUS.INVISIBLE;
        }
    }, {
        key: 'toggle',
        value: function toggle(is_visible) {
            if (is_visible && this.isVisible() || !is_visible && this.isInvisible()) {
                return;
            }

            this.trigered++;
            this.status = is_visible ? Trigger.STATUS.VISIBLE : Trigger.STATUS.INVISIBLE;

            this.options.onHey.call(this, is_visible, this);
        }
    }]);

    return Trigger;
}();

Trigger.STATUS = {
    VISIBLE: 'visible',
    INVISIBLE: 'invisible'
};

Trigger.defaultOptions = {
    centerHorizontal: false,
    centerVertical: false,

    addWidth: false,
    addHeight: false,

    offset: {
        x: 0,
        y: 0
    },

    isTriggerable: true,

    delay: 0,

    onHey: function onHey(is_visible) {
        //
    }
};

var ScrollTrigger = function () {
    function ScrollTrigger(triggerDefaultOptions) {
        _classCallCheck(this, ScrollTrigger);

        this.triggerDefaultOptions = Object.assign({}, Trigger.defaultOptions, triggerDefaultOptions || {});

        /**
         * @type {{Trigger}}
         */
        this.triggers = {};

        /**
         * The previous scrollTop position, to determine if a user
         * is scrolling up or down. Set that to -1 -1 so the loop
         * always runs at least once
         * @type {{left: number, top: number}}
         */
        this.previousScroll = {
            left: -1,
            top: -1
        };

        // the element to detect the scroll in
        this.scrollElement = window;

        // the element to get the data-scroll elements from
        this.bindElement = document.body;
    }

    /**
     * @param {HTMLElement|Element} element
     * @param  {{}} [options={}]
     * @return {ScrollTrigger}
     */


    _createClass(ScrollTrigger, [{
        key: 'addElement',
        value: function addElement(element, options) {
            if (typeof options === "function") {
                options = {
                    onHey: options
                };
            }

            var trigger = new Trigger(element, Object.assign({}, this.triggerDefaultOptions, options || {}));
            var triggerID = trigger.id;

            element.scroll_trigger_id = triggerID;

            this.triggers[triggerID] = trigger;
            trigger.scrollTrigger = this;

            trigger.init();

            return this;
        }

        /**
         * @param {HTMLElement[]|Element[]} elements
         * @param {{}} [options={}]
         */

    }, {
        key: 'addElements',
        value: function addElements(elements, options) {
            if (elements instanceof HTMLElement) {
                elements = [elements];
            } else {
                elements = [].slice.call(elements);
            }

            options = options || {};

            elements.forEach(function (element) {
                this.addElement(element, options);
            }.bind(this));
        }
    }, {
        key: 'getTrigger',


        /**
         * @param {HTMLElement} element
         * @return {Trigger|null}
         */
        value: function getTrigger(element) {
            var triggerID = self.getElementTriggerID(element);

            if (triggerID && this.triggers.hasOwnProperty(triggerID)) {
                return this.triggers[triggerID];
            }

            return null;
        }

        /**
         * Removes a Trigger by its HTMLElement object, e.g via querySelector()
         * @return {ScrollTrigger}
         */

    }, {
        key: 'destroy',
        value: function destroy(element) {
            var triggerID = self.getElementTriggerID(element);

            if (triggerID && this.triggers.hasOwnProperty(triggerID)) {
                delete this.triggers[triggerID];
            }

            return this;
        }

        /**
         * @param {*} id
         */

    }, {
        key: 'destroyByID',
        value: function destroyByID(id) {
            if (!this.triggers[id]) {
                return;
            }

            this.triggers[id].$element.scroll_trigger_id = undefined;
            delete this.triggers[id];
        }
    }, {
        key: 'destroyAll',
        value: function destroyAll() {
            this.triggers = [];

            return this;
        }
    }, {
        key: 'reset',
        value: function reset(element) {
            var trigger = this.getTrigger(element);

            if (trigger) {
                trigger.reset();
            }

            return this;
        }

        /**
         * Gets called everytime the browser is ready for it, or when the user
         * scrolls (on legacy browsers)
         */

    }, {
        key: 'scroll',
        value: function scroll() {
            // FF and IE use the documentElement instead of body
            var currentTop = !this.bindElement.scrollTop ? document.documentElement.scrollTop : this.bindElement.scrollTop;
            var currentLeft = !this.bindElement.scrollLeft ? document.documentElement.scrollLeft : this.bindElement.scrollLeft;

            // if the user scrolled
            var isScrolled = this.previousScroll.left !== currentLeft || this.previousScroll.top !== currentTop;

            if (!isScrolled) {
                // return;
            }

            var windowWidth = this.scrollElement.innerWidth || this.scrollElement.offsetWidth;
            var windowHeight = this.scrollElement.innerHeight || this.scrollElement.offsetHeight;

            // console.log('win width', windowWidth, 'win height', windowHeight);

            Object.keys(this.triggers).forEach(function (triggerID) {
                var trigger = this.triggers[triggerID];

                if (!trigger.isTriggerable()) {
                    return;
                }

                var triggerLeft = trigger.left();
                var triggerRight = trigger.right();
                var triggerTop = trigger.top();
                var triggerBottom = trigger.bottom();

                if (this.previousScroll.left > currentLeft) {
                    // scrolling left, so we subtract the xOffset
                    triggerLeft -= trigger.xOffset(true);
                } else if (this.previousScroll.left < currentLeft) {
                    // scrolling right, so we add the xOffset
                    triggerLeft += trigger.xOffset(false);
                }

                if (this.previousScroll.top > currentTop) {
                    // scrolling up, so we subtract the yOffset
                    triggerTop -= trigger.yOffset(true);
                } else if (this.previousScroll.top < currentTop) {
                    // scrolling down so then we add the yOffset
                    triggerTop += trigger.yOffset(false);
                }

                var isVisible = triggerTop >= 0 && triggerTop < windowHeight || triggerTop < 0 && triggerBottom > -1;

                var callback = trigger.toggle.bind(trigger, isVisible);

                if (trigger.options.delay === false) {
                    callback();
                } else {
                    setTimeout(callback, trigger.options.delay);
                }
            }.bind(this));

            // save the current scroll position
            this.previousScroll.left = currentLeft;
            this.previousScroll.top = currentTop;
        }
    }, {
        key: 'getScrollCallback',
        value: function getScrollCallback() {
            return this.scroll.bind(this);
        }
    }], [{
        key: 'getElementTriggerID',
        value: function getElementTriggerID(element) {
            return element.hasOwnProperty('scroll_trigger_id') ? element.scroll_trigger_id : null;
        }
    }]);

    return ScrollTrigger;
}();

exports.default = ScrollTrigger;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainCanvas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(30);

var _gsap = __webpack_require__(15);

var _Character = __webpack_require__(147);

var _Character2 = _interopRequireDefault(_Character);

var _Title = __webpack_require__(148);

var _Title2 = _interopRequireDefault(_Title);

var _Catch = __webpack_require__(149);

var _Star = __webpack_require__(153);

var _Anniversary = __webpack_require__(154);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainCanvas = exports.MainCanvas = function (_Container) {
    _inherits(MainCanvas, _Container);

    function MainCanvas(props) {
        _classCallCheck(this, MainCanvas);

        var _this = _possibleConstructorReturn(this, (MainCanvas.__proto__ || Object.getPrototypeOf(MainCanvas)).call(this, props));

        _this.props = props;
        _this.loader = new _pixi.loaders.Loader().add('mc', props.mc).add('character', props.character).load(_this.setup.bind(_this));
        return _this;
    }

    _createClass(MainCanvas, [{
        key: 'Range',
        value: function Range(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a;
        }
    }, {
        key: 'setup',
        value: function setup() {
            this.textures = this.loader.resources.mc.textures;
            this.texturesCharacter = this.loader.resources.character.textures;
            this._setCharacter();
            this._setAnniversary();
            this._setIcon();
            this._setTitle();
            this._setMedal();
            this._setLogo();
            this._setCatch();
            for (var i = 0; i < 20; i++) {
                var x = this.Range(0, 750);
                var y = this.Range(200, 800);
                var star = new _Star.Star(this.textures['star'], { scale: 1.5, duration: 0.5, x: x, y: y });
                setTimeout(star.runDouble.bind(star), 2000 + i * 50);
                this.addChild(star);
            }
            for (var _i = 0; _i < 6; _i++) {
                var _x = this.Range(280, 480);
                var _y = this.Range(15, 215);
                var star = new _Star.Star(this.textures['star'], { scale: 1.5, duration: 0.5, x: _x, y: _y });
                setTimeout(star.repeat.bind(star), 2000 + _i * 150);
                this.addChild(star);
            }
        }
    }, {
        key: '_setCharacter',
        value: function _setCharacter() {
            var characterSan = new _Character2.default(this.texturesCharacter['character-san'], { x: 375, y: 490, duration: 1.6 }),
                characterZor = new _Character2.default(this.texturesCharacter['character-zor'], { x: 375, y: 480, duration: 1.6 });
            characterSan.run(570);
            characterZor.run(180);
            this.addChild(characterSan);
            this.addChild(characterZor);
        }
    }, {
        key: '_setAnniversary',
        value: function _setAnniversary() {
            var crown = new _Anniversary.Crown(this.textures['crown'], { x: 375, y: 140, duration: 0.6 });
            setTimeout(function () {
                crown.run(110);
            }, 400);
            var twoYears = new _Anniversary.TwoYears(this.textures['two-years'], { x: 375, y: 120, duration: 1.2 });
            setTimeout(function () {
                twoYears.run(200, 160);
            }, 600);
            this.addChild(crown);
            this.addChild(twoYears);
        }
    }, {
        key: '_setLogo',
        value: function _setLogo() {
            this.logo = new _pixi.Sprite(this.textures['canvas-logo']);
            this.logo.anchor.set(0.5);
            this.logo.position.set(375, 505);
            _gsap.TweenMax.set(this.logo, {
                alpha: 0
            });
            _gsap.TweenMax.to(this.logo, 0.5, {
                alpha: 100
            }).delay(1.4);
            this.addChild(this.logo);
        }
    }, {
        key: '_setMedal',
        value: function _setMedal() {
            this.medalYellow = new _pixi.Sprite(this.textures['medal-yellow']);
            this.medalRed = new _pixi.Sprite(this.textures['medal-red']);
            this.medalBlue = new _pixi.Sprite(this.textures['medal-blue']);
            this.medalGreen = new _pixi.Sprite(this.textures['medal-green']);
            this.medalYellow.anchor.set(0.5);
            this.medalRed.anchor.set(0.5);
            this.medalBlue.anchor.set(0.5);
            this.medalGreen.anchor.set(0.5);
            this.medalRed.position.set(505, 510);
            this.medalGreen.position.set(565, 480);
            this.medalYellow.position.set(605, 525);
            this.medalBlue.position.set(650, 500);
            var medalYellow = new _gsap.TweenMax.set([this.medalYellow, this.medalRed, this.medalBlue, this.medalGreen], {
                width: 0,
                height: 0
            });
            _gsap.TweenMax.to([this.medalYellow], 0.7, {
                width: 92,
                height: 92
            }).delay(1.7);
            _gsap.TweenMax.to([this.medalRed], 0.5, {
                width: 92,
                height: 92
            }).delay(1.7);
            _gsap.TweenMax.to([this.medalBlue], 0.8, {
                width: 92,
                height: 92
            }).delay(1.7);
            _gsap.TweenMax.to([this.medalGreen], 0.6, {
                width: 92,
                height: 92
            }).delay(1.7);
            this.addChild(this.medalBlue);
            this.addChild(this.medalGreen);
            this.addChild(this.medalYellow);
            this.addChild(this.medalRed);
        }
    }, {
        key: '_setIcon',
        value: function _setIcon() {
            this.iconOne = new _pixi.Sprite(this.textures['icon-1']);
            this.iconTwo = new _pixi.Sprite(this.textures['icon-2']);
            this.iconThree = new _pixi.Sprite(this.textures['icon-3']);
            this.iconFour = new _pixi.Sprite(this.textures['icon-4']);
            this.iconOne.anchor.set(0.5);
            this.iconTwo.anchor.set(0.5);
            this.iconThree.anchor.set(0.5);
            this.iconFour.anchor.set(0.5);
            _gsap.TweenMax.set([this.iconOne, this.iconTwo, this.iconThree, this.iconFour], {
                x: 375,
                y: 660,
                alpha: 0
            });
            _gsap.TweenMax.to(this.iconFour, 0.5, {
                alpha: 100,
                x: 440,
                y: 405,
                ease: Power3.easeOut
            }).delay(1.5);
            _gsap.TweenMax.to(this.iconThree, 0.8, {
                alpha: 100,
                x: 290,
                y: 400,
                ease: Power3.easeOut
            }).delay(1.5);
            _gsap.TweenMax.to(this.iconTwo, 1.1, {
                alpha: 100,
                x: 225,
                y: 510,
                ease: Power3.easeOut
            }).delay(1.5);
            _gsap.TweenMax.to(this.iconOne, 1.4, {
                alpha: 100,
                x: 115,
                y: 515,
                ease: Power3.easeOut
            }).delay(1.5);
            this.addChild(this.iconTwo);
            this.addChild(this.iconOne);
            this.addChild(this.iconFour);
            this.addChild(this.iconThree);
        }
    }, {
        key: '_setTitle',
        value: function _setTitle() {
            var _this2 = this;

            var title = new _Title2.default(this.textures['canvas-title'], { x: 375, y: 560 });
            setTimeout(function () {
                title.run(660);
                _this2.addChild(title);
            }, 2000);
        }
    }, {
        key: '_setCatch',
        value: function _setCatch() {
            var _this3 = this;

            var catchBg = new _Catch.Catch(this.textures['catch-bg'], { x: -375, y: 915, duration: 0.15 });
            var catchText1 = new _Catch.Catch(this.textures['catch-text1'], { x: -100, y: 980, duration: 0.15 });
            var catchText2 = new _Catch.Catch(this.textures['catch-text2'], { x: -245, y: 955, duration: 0.15 });
            var catchText3 = new _Catch.Catch(this.textures['catch-text3'], { x: 250, y: 900, duration: 0.3 });
            setTimeout(function () {
                catchBg.run(375, 885);
                catchText1.run(100, 915);
                catchText2.run(245, 900);
            }, 2500);
            setTimeout(function () {
                catchText3.runShow(520, 870);
                for (var i = 0; i < 6; i++) {
                    var x = _this3.Range(300, 750);
                    var y = _this3.Range(820, 920);
                    var star = new _Star.Star(_this3.textures['star'], { scale: 1.5, duration: 0.5, x: x, y: y, delay: 3.5 });
                    setTimeout(star.repeat.bind(star), 2200 + i * 50);
                    _this3.addChild(star);
                }
            }, 2700);
            this.addChild(catchBg);
            this.addChild(catchText3);
            this.addChild(catchText2);
            this.addChild(catchText1);
        }
    }]);

    return MainCanvas;
}(_pixi.Container);

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gsap = __webpack_require__(15);

var _Flash2 = __webpack_require__(52);

var _Flash3 = _interopRequireDefault(_Flash2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Character = function (_Flash) {
    _inherits(Character, _Flash);

    function Character(texture, props) {
        _classCallCheck(this, Character);

        var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this, texture, props));

        Object.assign(_this.props, {
            x: 375,
            y: 375,
            duration: 1,
            alpha: 0
        }, props);
        _this.anchor.set(0.5);
        _this.position.set(props.x, props.y);
        //TweenMax.set(this, {alpha: props.alpha});
        _this.alpha = props.alpha;
        return _this;
    }

    _createClass(Character, [{
        key: 'run',
        value: function run(endPoint) {
            var _this2 = this;

            return new Promise(function (next) {
                _gsap.TweenMax.to(_this2, _this2.props.duration, {
                    alpha: 100, x: endPoint, ease: _gsap.Power3.easeOut, onComplete: function onComplete() {
                        setTimeout(function () {
                            _this2.flash();
                        }, 200);
                        next();
                    }
                });
            });
        }
    }]);

    return Character;
}(_Flash3.default);

exports.default = Character;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gsap = __webpack_require__(15);

var _Flash2 = __webpack_require__(52);

var _Flash3 = _interopRequireDefault(_Flash2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_Flash) {
    _inherits(Title, _Flash);

    function Title(texture, props) {
        _classCallCheck(this, Title);

        var _this = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, texture, props));

        Object.assign(_this.props, {
            x: 0,
            y: 0,
            duration: 0.5,
            alpha: 0
        }, props);
        _this.anchor.set(0.5);
        _this.position.set(props.x, props.y);
        _this.alpha = props.alpha;
        return _this;
    }

    _createClass(Title, [{
        key: 'run',
        value: function run(endPoint) {
            var _this2 = this;

            return new Promise(function (next) {
                _gsap.TweenMax.to(_this2, _this2.props.duration, {
                    alpha: 100, y: endPoint, ease: _gsap.Bounce.easeOut, onComplete: function onComplete() {
                        _this2.flash();
                        next();
                    }
                });
            });
        }
    }]);

    return Title;
}(_Flash3.default);

exports.default = Title;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Catch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gsap = __webpack_require__(15);

var _Blur2 = __webpack_require__(150);

var _Blur3 = _interopRequireDefault(_Blur2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Catch = exports.Catch = function (_Blur) {
    _inherits(Catch, _Blur);

    function Catch(texture, props) {
        _classCallCheck(this, Catch);

        var _this = _possibleConstructorReturn(this, (Catch.__proto__ || Object.getPrototypeOf(Catch)).call(this, texture, props));

        Object.assign(_this.props, {
            x: 0,
            y: 0,
            duration: 1
        }, props);
        _this.anchor.set(0.5);
        _this.position.set(_this.props.x, _this.props.y);
        _this.alpha = 0;
        return _this;
    }

    _createClass(Catch, [{
        key: 'run',
        value: function run(x, y) {
            var _this2 = this;

            this.alpha = 1;
            return new Promise(function (next) {
                _gsap.TweenMax.to(_this2, _this2.props.duration, { x: x, y: y });
            });
        }
    }, {
        key: 'runShow',
        value: function runShow(x, y) {
            var _this3 = this;

            return new Promise(function (next) {
                _gsap.TweenMax.to(_this3, _this3.props.duration, {
                    alpha: 100, x: x, y: y, ease: _gsap.Back.easeOut.config(1.2), onComplete: function onComplete() {
                        setTimeout(function () {
                            _this3.runBlurRepeat();
                        }, 2000);
                    }
                });
            });
        }
    }]);

    return Catch;
}(_Blur3.default);

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(30);

var _gsap = __webpack_require__(15);

var _filterDropShadow = __webpack_require__(151);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blur = function (_Sprite) {
    _inherits(Blur, _Sprite);

    function Blur(texture, props) {
        _classCallCheck(this, Blur);

        var _this = _possibleConstructorReturn(this, (Blur.__proto__ || Object.getPrototypeOf(Blur)).call(this, texture));

        _this.props = Object.assign({
            durationFlash: 0.3
        }, props);
        return _this;
    }

    _createClass(Blur, [{
        key: 'blur',
        value: function blur() {
            var _this2 = this;

            var filter = new _filterDropShadow.DropShadowFilter({
                color: 0xFFFFFF,
                alpha: 1,
                blur: 3,
                quality: 5
            });
            this.filters = [filter];
            var grap = new _pixi.Graphics();
            grap.beginFill(0xFFFFFF);
            grap.drawRect(-this.width / 2, 0, 150, this.height);
            grap.pivot.set(25, this.height / 2);
            var lightFilter = new _filterDropShadow.DropShadowFilter({
                color: 0xFFFFFF,
                alpha: 1,
                blur: 10,
                quality: 10,
                shadowOnly: true
            });
            grap.filters = [lightFilter];
            this.addChild(grap);
            return new Promise(function (next) {
                grap.x = -150;
                grap.alpha = 0;
                _gsap.TweenMax.to(grap, _this2.props.durationFlash * 0.1, { alpha: 1 });
                _gsap.TweenMax.to(grap, _this2.props.durationFlash, {
                    x: _this2.width + 150, onComplete: function onComplete() {
                        next();
                        grap.destroy();
                    }
                });
                filter.alpha = 0;
                _gsap.TweenMax.to(filter, _this2.props.durationFlash * 0.5, { alpha: 1 });
                _gsap.TweenMax.to(filter, _this2.props.durationFlash * 2, {
                    alpha: 0, delay: _this2.props.durationFlash * 0.3, onComplete: function onComplete() {
                        _this2.filters = [];
                    }
                });
            });
        }
    }, {
        key: 'runBlurRepeat',
        value: function runBlurRepeat() {
            var _this3 = this;

            this.blur().then(function () {
                _this3._repeatTimeout = setTimeout(function () {
                    return _this3.runBlurRepeat();
                }, 4000);
            });
        }
    }]);

    return Blur;
}(_pixi.Sprite);

exports.default = Blur;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropShadowFilter", function() { return DropShadowFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pixi_filter_kawase_blur__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pixi_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pixi_js__);
/*!
 * @pixi/filter-drop-shadow - v2.6.0
 * Compiled Wed, 28 Feb 2018 22:04:57 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var vertex="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",fragment="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n\n    // Un-premultiply alpha before applying the color\n    if (sample.a > 0.0) {\n        sample.rgb /= sample.a;\n    }\n\n    // Premultiply alpha again\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}",DropShadowFilter=function(t){function i(i){i&&i.constructor!==Object&&(console.warn("DropShadowFilter now uses options instead of (rotation, distance, blur, color, alpha)"),i={rotation:i},void 0!==arguments[1]&&(i.distance=arguments[1]),void 0!==arguments[2]&&(i.blur=arguments[2]),void 0!==arguments[3]&&(i.color=arguments[3]),void 0!==arguments[4]&&(i.alpha=arguments[4])),i=Object.assign({rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:__WEBPACK_IMPORTED_MODULE_1_pixi_js__["settings"].RESOLUTION},i),t.call(this);var r=i.kernels,e=i.blur,n=i.quality,o=i.pixelSize,l=i.resolution;this._tintFilter=new __WEBPACK_IMPORTED_MODULE_1_pixi_js__["Filter"](vertex,fragment),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.resolution=l,this._blurFilter=r?new __WEBPACK_IMPORTED_MODULE_0__pixi_filter_kawase_blur__["a" /* KawaseBlurFilter */](r):new __WEBPACK_IMPORTED_MODULE_0__pixi_filter_kawase_blur__["a" /* KawaseBlurFilter */](e,n),this.pixelSize=o,this.resolution=l,this.targetTransform=new __WEBPACK_IMPORTED_MODULE_1_pixi_js__["Matrix"];var a=i.shadowOnly,s=i.rotation,u=i.distance,p=i.alpha,h=i.color;this.shadowOnly=a,this.rotation=s,this.distance=u,this.alpha=p,this.color=h,this._updatePadding()}t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i;var r={resolution:{configurable:!0},distance:{configurable:!0},rotation:{configurable:!0},alpha:{configurable:!0},color:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return i.prototype.apply=function(t,i,r,e){var n=t.getRenderTarget();n.transform=this.targetTransform,this._tintFilter.apply(t,i,n,!0),n.transform=null,this._blurFilter.apply(t,n,r),!0!==this.shadowOnly&&t.applyFilter(this,i,r,e),t.returnRenderTarget(n)},i.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},i.prototype._updateTargetTransform=function(){this.targetTransform.tx=this.distance*Math.cos(this.angle),this.targetTransform.ty=this.distance*Math.sin(this.angle)},r.resolution.get=function(){return this._resolution},r.resolution.set=function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},r.distance.get=function(){return this._distance},r.distance.set=function(t){this._distance=t,this._updatePadding(),this._updateTargetTransform()},r.rotation.get=function(){return this.angle/__WEBPACK_IMPORTED_MODULE_1_pixi_js__["DEG_TO_RAD"]},r.rotation.set=function(t){this.angle=t*__WEBPACK_IMPORTED_MODULE_1_pixi_js__["DEG_TO_RAD"],this._updateTargetTransform()},r.alpha.get=function(){return this._tintFilter.uniforms.alpha},r.alpha.set=function(t){this._tintFilter.uniforms.alpha=t},r.color.get=function(){return __WEBPACK_IMPORTED_MODULE_1_pixi_js__["utils"].rgb2hex(this._tintFilter.uniforms.color)},r.color.set=function(t){__WEBPACK_IMPORTED_MODULE_1_pixi_js__["utils"].hex2rgb(t,this._tintFilter.uniforms.color)},r.kernels.get=function(){return this._blurFilter.kernels},r.kernels.set=function(t){this._blurFilter.kernels=t},r.blur.get=function(){return this._blurFilter.blur},r.blur.set=function(t){this._blurFilter.blur=t,this._updatePadding()},r.quality.get=function(){return this._blurFilter.quality},r.quality.set=function(t){this._blurFilter.quality=t},r.pixelSize.get=function(){return this._blurFilter.pixelSize},r.pixelSize.set=function(t){this._blurFilter.pixelSize=t},Object.defineProperties(i.prototype,r),i}(__WEBPACK_IMPORTED_MODULE_1_pixi_js__["Filter"]);
//# sourceMappingURL=filter-drop-shadow.es.js.map


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KawaseBlurFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/*!
 * @pixi/filter-kawase-blur - v2.6.0
 * Compiled Wed, 28 Feb 2018 22:04:57 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var vertex="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",fragment="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}",fragmentClamp="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n",KawaseBlurFilter=function(e){function t(t,r,i){void 0===t&&(t=4),void 0===r&&(r=3),void 0===i&&(i=!1),e.call(this,vertex,i?fragmentClamp:fragment),this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"],this.pixelSize=1,this._clamp=i,this._kernels=null,Array.isArray(t)?this.kernels=t:(this._blur=t,this.quality=r)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={kernels:{configurable:!0},clamp:{configurable:!0},pixelSize:{configurable:!0},quality:{configurable:!0},blur:{configurable:!0}};return t.prototype.apply=function(e,t,r,i){var o,n=this.pixelSize.x/t.size.width,l=this.pixelSize.y/t.size.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*n,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,t,r,i);else{for(var u,s=e.getRenderTarget(!0),a=t,f=s,p=this._quality-1,x=0;x<p;x++)o=this._kernels[x]+.5,this.uniforms.uOffset[0]=o*n,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,a,f,!0),u=a,a=f,f=u;o=this._kernels[p]+.5,this.uniforms.uOffset[0]=o*n,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,a,r,i),e.returnRenderTarget(s)}},t.prototype._generateKernels=function(){var e=this._blur,t=this._quality,r=[e];if(e>0)for(var i=e,o=e/t,n=1;n<t;n++)i-=o,r.push(i);this._kernels=r},r.kernels.get=function(){return this._kernels},r.kernels.set=function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},r.clamp.get=function(){return this._clamp},r.pixelSize.set=function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"]?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},r.pixelSize.get=function(){return this._pixelSize},r.quality.get=function(){return this._quality},r.quality.set=function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},r.blur.get=function(){return this._blur},r.blur.set=function(e){this._blur=e,this._generateKernels()},Object.defineProperties(t.prototype,r),t}(__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Filter"]);
//# sourceMappingURL=filter-kawase-blur.es.js.map


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Star = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(30);

var _gsap = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = exports.Star = function (_Sprite) {
    _inherits(Star, _Sprite);

    function Star(texture, props) {
        _classCallCheck(this, Star);

        var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, texture));

        props = _this.props = Object.assign({
            scale: 1,
            duration: 1,
            delay: 1,
            x: 375,
            y: 375
        }, props);
        _this.anchor.set(0.5);
        _this.scale.set(0);
        _this.position.set(props.x, props.y);
        return _this;
    }

    _createClass(Star, [{
        key: 'run',
        value: function run() {
            var _this2 = this;

            this.scale.set(0);
            return new Promise(function (next) {
                _gsap.TweenMax.to(_this2.scale, _this2.props.duration, {
                    x: _this2.props.scale, y: _this2.props.scale, ease: _gsap.Power1.easeOut, onComplete: function onComplete() {
                        _gsap.TweenMax.to(_this2.scale, _this2.props.duration, { x: 0, y: 0, ease: _gsap.Power1.easeIn, onComplete: next });
                    }
                });
            });
        }
    }, {
        key: 'runDouble',
        value: function runDouble() {
            var _this3 = this;

            return new Promise(function (next) {
                _this3.run().then(function () {
                    return _this3.run().then(next);
                });
            });
        }
    }, {
        key: 'repeat',
        value: function repeat() {
            var _this4 = this;

            this.run().then(function () {
                _this4._repeatTimeout = setTimeout(function () {
                    return _this4.repeat();
                }, _this4.props.delay * 1000);
            });
        }
    }, {
        key: 'stopRepeat',
        value: function stopRepeat() {
            clearTimeout(this._repeatTimeout);
        }
    }]);

    return Star;
}(_pixi.Sprite);

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TwoYears = exports.Crown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gsap = __webpack_require__(15);

var _Flash3 = __webpack_require__(52);

var _Flash4 = _interopRequireDefault(_Flash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Crown = exports.Crown = function (_Flash) {
    _inherits(Crown, _Flash);

    function Crown(texture, props) {
        _classCallCheck(this, Crown);

        var _this = _possibleConstructorReturn(this, (Crown.__proto__ || Object.getPrototypeOf(Crown)).call(this, texture, props));

        Object.assign(_this.props, {
            x: 0,
            y: 0,
            duration: 1
        }, props);
        _this.anchor.set(0.5);
        _this.position.set(_this.props.x, _this.props.y);
        _this.alpha = 0;
        return _this;
    }

    _createClass(Crown, [{
        key: 'run',
        value: function run(endPoint) {
            var _this2 = this;

            return new Promise(function (next) {
                _gsap.TweenMax.to(_this2, _this2.props.duration, {
                    alpha: 100, y: endPoint, onComplete: function onComplete() {
                        setTimeout(function () {
                            _this2.flash();
                        }, 800);
                        next();
                    }
                });
            });
        }
    }]);

    return Crown;
}(_Flash4.default);

var TwoYears = exports.TwoYears = function (_Flash2) {
    _inherits(TwoYears, _Flash2);

    function TwoYears(texture, props) {
        _classCallCheck(this, TwoYears);

        var _this3 = _possibleConstructorReturn(this, (TwoYears.__proto__ || Object.getPrototypeOf(TwoYears)).call(this, texture, props));

        Object.assign(_this3.props, {
            x: 0,
            y: 0,
            duration: 1
        }, props);
        _this3.anchor.set(0.5);
        _this3.position.set(_this3.props.x, _this3.props.y);
        _this3.width = 0;
        _this3.height = 0;
        return _this3;
    }

    _createClass(TwoYears, [{
        key: 'run',
        value: function run(w, h) {
            var _this4 = this;

            return new Promise(function (next) {
                _gsap.TweenMax.to(_this4, _this4.props.duration, {
                    width: w, height: h, ease: Elastic.easeOut.config(2.5, 0.75), onComplete: function onComplete() {
                        _this4.flash();
                        next();
                    }
                });
            });
        }
    }]);

    return TwoYears;
}(_Flash4.default);

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MiddleCanvas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(30);

var _gsap = __webpack_require__(15);

var _MiddleText = __webpack_require__(156);

var _MiddleText2 = _interopRequireDefault(_MiddleText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiddleCanvas = exports.MiddleCanvas = function (_Container) {
    _inherits(MiddleCanvas, _Container);

    function MiddleCanvas(props) {
        _classCallCheck(this, MiddleCanvas);

        var _this = _possibleConstructorReturn(this, (MiddleCanvas.__proto__ || Object.getPrototypeOf(MiddleCanvas)).call(this, props));

        _this.props = props;
        _this.loader = new _pixi.loaders.Loader().add('mc1', props.mc1).load(_this.setup.bind(_this));
        return _this;
    }

    _createClass(MiddleCanvas, [{
        key: 'setup',
        value: function setup() {
            this.textures = this.loader.resources.mc1.textures;
            this._setAll();
            this._setText1();
            this._setMap();
            this._setItem();
            this._setArrow();
            this._setText2();
        }
    }, {
        key: '_setAll',
        value: function _setAll() {
            this.middleAll = new _pixi.Sprite(this.textures['middle-all']);
            this.middleAll.anchor.set(0.5);
            this.middleAll.position.set(160, 0);
            _gsap.TweenMax.set(this.middleAll, {
                alpha: 0
            });
            _gsap.TweenMax.to(this.middleAll, 0.5, {
                alpha: 100,
                y: 100,
                ease: Power3.easeOut
            });
            this.addChild(this.middleAll);
        }
    }, {
        key: '_setText1',
        value: function _setText1() {
            this.middleText1 = new _pixi.Sprite(this.textures['middle-text1']);
            this.middleText1.anchor.set(0.5);
            this.middleText1.position.set(500, 0);
            _gsap.TweenMax.set(this.middleText1, {
                alpha: 0
            });
            _gsap.TweenMax.to(this.middleText1, 0.3, {
                alpha: 100,
                y: 80,
                ease: Power3.easeOut
            }).delay(0.3);
            this.addChild(this.middleText1);
        }
    }, {
        key: '_setArrow',
        value: function _setArrow() {
            this.middleArrow = new _pixi.Sprite(this.textures['middle-arrow']);
            this.middleArrow.anchor.set(0.5);
            this.middleArrow.position.set(0, 230);
            _gsap.TweenMax.set(this.middleArrow, {
                alpha: 0
            });
            _gsap.TweenMax.to(this.middleArrow, 0.5, {
                alpha: 100,
                x: 140,
                ease: Power3.easeOut
            }).delay(0.5);
            this.addChild(this.middleArrow);
        }
    }, {
        key: '_setMap',
        value: function _setMap() {
            this.middleMap = new _pixi.Sprite(this.textures['middle-map']);
            this.middleMap.anchor.set(0.5);
            this.middleMap.position.set(450, 40);
            _gsap.TweenMax.set(this.middleMap, {
                alpha: 0
            });
            _gsap.TweenMax.to(this.middleMap, 0.5, {
                alpha: 100,
                y: 320,
                ease: Power3.easeOut
            }).delay(0.5);
            this.addChild(this.middleMap);
        }
    }, {
        key: '_setItem',
        value: function _setItem() {
            this.middleItem1 = new _pixi.Sprite(this.textures['middle-map-item1']);
            this.middleItem2 = new _pixi.Sprite(this.textures['middle-map-item2']);
            this.middleItem3 = new _pixi.Sprite(this.textures['middle-map-item3']);
            this.middleItem4 = new _pixi.Sprite(this.textures['middle-map-item4']);
            this.middleItem5 = new _pixi.Sprite(this.textures['middle-map-item5']);
            this.middleItem6 = new _pixi.Sprite(this.textures['middle-map-item6']);
            this.middleItem7 = new _pixi.Sprite(this.textures['middle-map-item7']);
            this.middleItem1.position.set(185, 180);
            this.middleItem2.position.set(350, 170);
            this.middleItem3.position.set(470, 190);
            this.middleItem4.position.set(600, 170);
            this.middleItem5.position.set(210, 300);
            this.middleItem6.position.set(340, 300);
            this.middleItem7.position.set(460, 280);
            _gsap.TweenMax.set([this.middleItem1, this.middleItem2, this.middleItem3, this.middleItem4, this.middleItem5, this.middleItem6, this.middleItem7], {
                width: 0,
                height: 0
            });
            _gsap.TweenMax.to(this.middleItem1, 0.3, {
                width: 176,
                height: 138,
                ease: Power3.easeOut
            }).delay(0.7);
            _gsap.TweenMax.to(this.middleItem2, 0.3, {
                width: 131,
                height: 131,
                ease: Power3.easeOut
            }).delay(0.75);
            _gsap.TweenMax.to(this.middleItem3, 0.3, {
                width: 146,
                height: 119,
                ease: Power3.easeOut
            }).delay(0.8);
            _gsap.TweenMax.to(this.middleItem4, 0.3, {
                width: 130,
                height: 131,
                ease: Power3.easeOut
            }).delay(0.85);
            _gsap.TweenMax.to(this.middleItem5, 0.3, {
                width: 131,
                height: 131,
                ease: Power3.easeOut
            }).delay(0.9);
            _gsap.TweenMax.to(this.middleItem6, 0.3, {
                width: 123,
                height: 125,
                ease: Power3.easeOut
            }).delay(0.95);
            _gsap.TweenMax.to(this.middleItem7, 0.3, {
                width: 215,
                height: 173,
                ease: Power3.easeOut
            }).delay(1);
            this.addChild(this.middleItem1);
            this.addChild(this.middleItem2);
            this.addChild(this.middleItem3);
            this.addChild(this.middleItem4);
            this.addChild(this.middleItem5);
            this.addChild(this.middleItem6);
            this.addChild(this.middleItem7);
        }
    }, {
        key: '_setText2',
        value: function _setText2() {
            var middleText2 = new _MiddleText2.default(this.textures['middle-text2'], { x: 375, y: 400 });
            setTimeout(function () {
                middleText2.run(450);
            }, 1000);
            this.addChild(middleText2);
        }
    }]);

    return MiddleCanvas;
}(_pixi.Container);

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gsap = __webpack_require__(15);

var _Flash2 = __webpack_require__(52);

var _Flash3 = _interopRequireDefault(_Flash2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiddleText2 = function (_Flash) {
    _inherits(MiddleText2, _Flash);

    function MiddleText2(texture, props) {
        _classCallCheck(this, MiddleText2);

        var _this = _possibleConstructorReturn(this, (MiddleText2.__proto__ || Object.getPrototypeOf(MiddleText2)).call(this, texture, props));

        Object.assign(_this.props, {
            x: 375,
            y: 375,
            duration: 1,
            alpha: 0
        }, props);
        _this.anchor.set(0.5);
        _this.position.set(_this.props.x, _this.props.y);
        _this.alpha = _this.props.alpha;
        return _this;
    }

    _createClass(MiddleText2, [{
        key: 'run',
        value: function run(endPoint) {
            var _this2 = this;

            return new Promise(function (next) {
                _gsap.TweenMax.to(_this2, _this2.props.duration * 0.5, {
                    alpha: 100, y: endPoint, ease: _gsap.Bounce.easeOut, onComplete: function onComplete() {
                        _this2.flash();
                        next();
                    }
                });
            });
        }
    }]);

    return MiddleText2;
}(_Flash3.default);

exports.default = MiddleText2;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(30);

var _gsap = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flash = function (_Sprite) {
    _inherits(Flash, _Sprite);

    function Flash(texture, props) {
        _classCallCheck(this, Flash);

        var _this = _possibleConstructorReturn(this, (Flash.__proto__ || Object.getPrototypeOf(Flash)).call(this, texture));

        _this.props = Object.assign({
            durationFlash: 0.3
        }, props);
        return _this;
    }

    _createClass(Flash, [{
        key: 'flash',
        value: function flash() {
            var _this2 = this;

            var filter = new PIXI.filters.ColorMatrixFilter();
            filter.matrix = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];
            filter.alpha = 0;
            this.filters = [filter];

            return new Promise(function (next) {
                _gsap.TweenMax.to(filter, _this2.props.durationFlash * 0.3, {
                    alpha: 1, ease: _gsap.Power0.easeIn, onComplete: function onComplete() {
                        _gsap.TweenMax.to(filter, _this2.props.durationFlash * 0.7, {
                            alpha: 0, onComplete: function onComplete() {
                                _this2.filters = [];
                                next();
                            }
                        });
                    }
                });
            });
        }
    }]);

    return Flash;
}(_pixi.Sprite);

exports.default = Flash;

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var throttleFunc = __webpack_require__(135);

exports.default = {
    detectDevice: function detectDevice() {
        var device = {
            is_pc: false,
            is_sp: false,
            sp_os: null
        };

        var UA = window.navigator.userAgent.toLowerCase();
        var platform_regexes = {
            ios: /iphone|ipad|ipod|ios/,
            android: /android|blackberry/,
            windows_phone: /windows phone/,
            other: /opera mini|silk/
        };

        for (var key in platform_regexes) {
            if (platform_regexes.hasOwnProperty(key) && platform_regexes[key].test(UA)) {
                device.is_sp = true;
                device.sp_os = key;

                break;
            }
        }

        device.is_pc = !device.is_sp;

        return device;
    },


    throttleFunc: throttleFunc,

    /**
     * Call callback after n times triggered
     * @param {int} n
     * @param {function} callback
     * @param {function} [countingCallback]
     * @return {function}
     */
    afterFunc: function afterFunc(n, callback, countingCallback) {
        var i = 1;

        return function () {
            if (i >= n) {
                callback();
            } else {
                i++;

                if (countingCallback) {
                    countingCallback(i - 1);
                }
            }
        };
    }
};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(138);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(96);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ })

},[132]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL21haW4uanM/NjhkMSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLmpzPzg2ZjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcz9mOTdlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanM/M2I4MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcz80NTUxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanM/NmU1NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzPzkzMWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcz9lOGM4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanM/NjgyMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanM/YjhiOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcz9mYmFlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzPzUyNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Njcm9sbFRyaWdnZXIuanM/MjA0MyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9NYWluQ2FudmFzLmpzPzU2ZmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FuaW1hdGlvbnMvQ2hhcmFjdGVyLmpzPzVhNDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FuaW1hdGlvbnMvVGl0bGUuanM/ZTJjOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9DYXRjaC5qcz84ZjA2Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9BbmltYXRpb25zL0JsdXIuanM/Nzk1NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBpeGkvZmlsdGVyLWRyb3Atc2hhZG93L2xpYi9maWx0ZXItZHJvcC1zaGFkb3cuZXMuanM/MDFjYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBpeGkvZmlsdGVyLWthd2FzZS1ibHVyL2xpYi9maWx0ZXIta2F3YXNlLWJsdXIuZXMuanM/NmM0OSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9TdGFyLmpzP2Q5NDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FuaW1hdGlvbnMvQW5uaXZlcnNhcnkuanM/YzI3YSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9NaWRkbGVDYW52YXMuanM/ZDA1YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9NaWRkbGVUZXh0Mi5qcz9mNDEzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Fzcy9jb21tb24uc2Nzcz83M2ZhIiwiLi9wdWJsaWMvY2FtcGFpZ24vbWVtb3J5LWJhdHRsZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9GbGFzaC5qcz8xZTMyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanM/YzgyMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXRpbC5qcz80MWVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanM/NGQwZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanM/MzY0NCJdLCJuYW1lcyI6WyJQSVhJIiwidXRpbHMiLCJza2lwSGVsbG8iLCJhcHAiLCJzY29yZSIsInNjb3JlVXBkYXRlZEF0Iiwic2NvcmVCcmVha1BvaW50c0xpc3QiLCJtYXAiLCJsYXN0U2NvcmVCcmVha3BvaW50Iiwic2NvcmVVUkwiLCJ3aW5kb3ciLCJwYWdlSUQiLCJkb2N1bWVudCIsImJvZHkiLCJkYXRhc2V0IiwicGFnZSIsImlzUGFnZSIsIk1pZGRsZUNhbnZhc0luaXQiLCJjb250YWluZXIxIiwid2lkdGgiLCJoZWlnaHQiLCJhbnRpYWxpYXMiLCJyZXNvbHV0aW9uIiwidHJhbnNwYXJlbnQiLCJtaWRkbGVDYW52YXMiLCJtYzEiLCJzdGFnZSIsImFkZENoaWxkIiwiYmdNaWRkbGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJ2aWV3IiwiZ2V0U2NvcmUiLCJFcnJvciIsImh0dHBSZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInBhcnNlSW50IiwidXBkYXRlX2F0IiwidHJpZ2dlckV2ZW50IiwiZSIsIm1lc3NhZ2UiLCJiaW5kIiwib3BlbiIsIkRhdGUiLCJnZXRUaW1lIiwic2VuZCIsInBsYXlJbmNlbnRpdmVBbmltYXRpb24iLCJhZnRlckZ1bmMiLCJjb25zb2xlIiwibG9nIiwic3RlcE9mZnNldFRvcCIsIiRyZWYiLCJpbmNlbnRpdmUiLCJsYXN0U3RlcCIsIm9mZnNldFRvcCIsInN0ZXBBZGRpdGlvblNwYWNlIiwiaXNBbGxTY3JvcmVCcmVha3BvaW50Q29tcGxldGVkIiwib2Zmc2V0SGVpZ2h0IiwiJGdhdWdlQXJyb3ciLCJnYXVnZUFycm93IiwiZ2F1Z2VBcnJvd1RvcCIsInN0eWxlIiwidG9wIiwiJGdhdWdlQ29sb3IiLCJnYXVnZUNvbG9yIiwiY2xhc3NOYW1lIiwibmV3SGVpZ2h0IiwiTWF0aCIsImZsb29yIiwibWluIiwiZ2F1Z2UiLCJzZXRUaW1lb3V0IiwiaSIsIm9uUmVhZHkiLCJvbkxvYWRlZCIsInNjcm9sbCIsIm9uIiwic2NvcmVCcmVha3BvaW50cyIsImZpbHRlciIsImJwU2NvcmUiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwiYnAiLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJtYWluQ2FudmFzIiwibWMiLCJjaGFyYWN0ZXIiLCJiZ1BsYWNlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkZWxheSIsInNlbGYiLCJzaG93VHJpZ2dlciIsImFkZEVsZW1lbnQiLCJvZmZzZXQiLCJ5Iiwib25IZXkiLCJpc192aXNpYmxlIiwidHJpZ2dlciIsIm9wdGlvbnMiLCJpc1RyaWdnZXJhYmxlIiwibWlkZGxlQ2FudmFzSW5pdCIsInJlbW92ZU15c2VsZiIsImFkZEVsZW1lbnRzIiwiJGVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGhyb3R0bGVGdW5jIiwiZ2V0U2Nyb2xsQ2FsbGJhY2siLCJsaXN0ZW5TeXN0ZW1FdmVudCIsImluaXQiLCJldmVudEluZGV4IiwiZXZlbnREZWZhdWx0T3B0aW9ucyIsIm9uY2UiLCJib3VuZCIsImV4ZWN1dGVDYWxsYmFjayIsImNhbGxiYWNrIiwiYXJncyIsImNiIiwiYXBwbHkiLCJBcHAiLCJldmVudHMiLCJkZXZpY2UiLCJkZXRlY3REZXZpY2UiLCJldmVudE5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsImVycm9yIiwiZXZlbnRJZCIsIl9ldmVudF9pZCIsImlkIiwic2xpY2UiLCJhcmd1bWVudHMiLCJldmVudCIsIk9iamVjdCIsImtleXMiLCJldmVudElEIiwiZXZlbnREZXRhaWwiLCJsaXN0ZW5lciIsInJlYWR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxvYWRlZCIsInRyaWdnZXJJZEluZGV4IiwiVHJpZ2dlciIsImVsZW1lbnQiLCJhc3NpZ24iLCJkZWZhdWx0T3B0aW9ucyIsImFkZFdpZHRoIiwiYWRkSGVpZ2h0IiwiX3hPZmZzZXQiLCJfeU9mZnNldCIsInRyaWdlcmVkIiwic3RhdHVzIiwic2Nyb2xsVHJpZ2dlciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm9mZnNldFdpZHRoIiwiZ29pbmdMZWZ0IiwiZ29pbmdVcCIsImRlc3Ryb3lCeUlEIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY2VudGVySG9yaXpvbnRhbCIsImNlbnRlclZlcnRpY2FsIiwieCIsImNhbGwiLCJTVEFUVVMiLCJWSVNJQkxFIiwiSU5WSVNJQkxFIiwiaXNWaXNpYmxlIiwiaXNJbnZpc2libGUiLCJTY3JvbGxUcmlnZ2VyIiwidHJpZ2dlckRlZmF1bHRPcHRpb25zIiwidHJpZ2dlcnMiLCJwcmV2aW91c1Njcm9sbCIsInNjcm9sbEVsZW1lbnQiLCJiaW5kRWxlbWVudCIsInRyaWdnZXJJRCIsInNjcm9sbF90cmlnZ2VyX2lkIiwiZWxlbWVudHMiLCJIVE1MRWxlbWVudCIsImdldEVsZW1lbnRUcmlnZ2VySUQiLCJ1bmRlZmluZWQiLCJnZXRUcmlnZ2VyIiwicmVzZXQiLCJjdXJyZW50VG9wIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiY3VycmVudExlZnQiLCJzY3JvbGxMZWZ0IiwiaXNTY3JvbGxlZCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwidHJpZ2dlckxlZnQiLCJ0cmlnZ2VyUmlnaHQiLCJ0cmlnZ2VyVG9wIiwidHJpZ2dlckJvdHRvbSIsInhPZmZzZXQiLCJ5T2Zmc2V0IiwidG9nZ2xlIiwiTWFpbkNhbnZhcyIsInByb3BzIiwibG9hZGVyIiwiTG9hZGVyIiwibG9hZCIsInNldHVwIiwiYSIsImIiLCJyYW5kb20iLCJ0ZXh0dXJlcyIsInJlc291cmNlcyIsInRleHR1cmVzQ2hhcmFjdGVyIiwiX3NldENoYXJhY3RlciIsIl9zZXRBbm5pdmVyc2FyeSIsIl9zZXRJY29uIiwiX3NldFRpdGxlIiwiX3NldE1lZGFsIiwiX3NldExvZ28iLCJfc2V0Q2F0Y2giLCJSYW5nZSIsInN0YXIiLCJzY2FsZSIsImR1cmF0aW9uIiwicnVuRG91YmxlIiwicmVwZWF0IiwiY2hhcmFjdGVyU2FuIiwiY2hhcmFjdGVyWm9yIiwicnVuIiwiY3Jvd24iLCJ0d29ZZWFycyIsImxvZ28iLCJhbmNob3IiLCJzZXQiLCJwb3NpdGlvbiIsImFscGhhIiwidG8iLCJtZWRhbFllbGxvdyIsIm1lZGFsUmVkIiwibWVkYWxCbHVlIiwibWVkYWxHcmVlbiIsImljb25PbmUiLCJpY29uVHdvIiwiaWNvblRocmVlIiwiaWNvbkZvdXIiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZU91dCIsInRpdGxlIiwiY2F0Y2hCZyIsImNhdGNoVGV4dDEiLCJjYXRjaFRleHQyIiwiY2F0Y2hUZXh0MyIsInJ1blNob3ciLCJDaGFyYWN0ZXIiLCJ0ZXh0dXJlIiwiZW5kUG9pbnQiLCJQcm9taXNlIiwibmV4dCIsIm9uQ29tcGxldGUiLCJmbGFzaCIsIlRpdGxlIiwiQ2F0Y2giLCJjb25maWciLCJydW5CbHVyUmVwZWF0IiwiQmx1ciIsImR1cmF0aW9uRmxhc2giLCJjb2xvciIsImJsdXIiLCJxdWFsaXR5IiwiZmlsdGVycyIsImdyYXAiLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsInBpdm90IiwibGlnaHRGaWx0ZXIiLCJzaGFkb3dPbmx5IiwiZGVzdHJveSIsInRoZW4iLCJfcmVwZWF0VGltZW91dCIsIlN0YXIiLCJlYXNlSW4iLCJjbGVhclRpbWVvdXQiLCJDcm93biIsIlR3b1llYXJzIiwidyIsImgiLCJFbGFzdGljIiwiTWlkZGxlQ2FudmFzIiwiX3NldEFsbCIsIl9zZXRUZXh0MSIsIl9zZXRNYXAiLCJfc2V0SXRlbSIsIl9zZXRBcnJvdyIsIl9zZXRUZXh0MiIsIm1pZGRsZUFsbCIsIm1pZGRsZVRleHQxIiwibWlkZGxlQXJyb3ciLCJtaWRkbGVNYXAiLCJtaWRkbGVJdGVtMSIsIm1pZGRsZUl0ZW0yIiwibWlkZGxlSXRlbTMiLCJtaWRkbGVJdGVtNCIsIm1pZGRsZUl0ZW01IiwibWlkZGxlSXRlbTYiLCJtaWRkbGVJdGVtNyIsIm1pZGRsZVRleHQyIiwiTWlkZGxlVGV4dDIiLCJGbGFzaCIsIkNvbG9yTWF0cml4RmlsdGVyIiwibWF0cml4IiwicmVxdWlyZSIsImlzX3BjIiwiaXNfc3AiLCJzcF9vcyIsIlVBIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJwbGF0Zm9ybV9yZWdleGVzIiwiaW9zIiwiYW5kcm9pZCIsIndpbmRvd3NfcGhvbmUiLCJvdGhlciIsImtleSIsInRlc3QiLCJuIiwiY291bnRpbmdDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0FBLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWDs7QUFFQSxJQUFNQyxNQUFNLG1CQUFaOztBQUVBQSxJQUFJQyxLQUFKLEdBQVksQ0FBWjtBQUNBRCxJQUFJRSxjQUFKLEdBQXFCLEVBQXJCO0FBQ0FGLElBQUlHLG9CQUFKLEdBQTJCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0JDLEdBQXRCLENBQTBCO0FBQUEsV0FBU0gsUUFBUSxPQUFqQjtBQUFBLENBQTFCLENBQTNCO0FBQ0FELElBQUlLLG1CQUFKLEdBQTBCLENBQTFCO0FBQ0FMLElBQUlNLFFBQUosR0FBZUMsT0FBT0QsUUFBdEI7QUFDQU4sSUFBSVEsTUFBSixHQUFhRCxPQUFPQyxNQUFQLElBQWlCQyxTQUFTQyxJQUFULENBQWNDLE9BQWQsQ0FBc0JDLElBQXBEOztBQUVBOzs7O0FBSUE7Ozs7QUFJQVosSUFBSWEsTUFBSixHQUFhLFVBQVVMLE1BQVYsRUFBa0I7QUFDM0IsV0FBTyxLQUFLQSxNQUFMLEtBQWdC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QUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDN0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN0QkE7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDSEE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNi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USxDQUFULEVBQVk7QUFDUnJOO0FBQ0gsYUFGRCxNQUVPO0FBQ0g3Qzs7QUFFQSxvQkFBSW1RLGdCQUFKLEVBQXNCO0FBQ2xCQSxxQ0FBaUJuUSxJQUFJLENBQXJCO0FBQ0g7QUFDSjtBQUNKLFNBVkQ7QUFXSDtBQXJEVSxDOzs7Ozs7O0FDRmY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQ1JBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9hc3NldHMvanMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgVXRpbCBmcm9tIFwiLi9jb21wb25lbnRzL1V0aWxcIjtcclxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSAnLi9jb21wb25lbnRzL1Njcm9sbFRyaWdnZXInO1xyXG5cclxuaW1wb3J0IHtUd2Vlbk1heH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7QXBwbGljYXRpb24sIERpc3BsYXlPYmplY3R9IGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQge01haW5DYW52YXN9IGZyb20gJy4vY29tcG9uZW50cy9BbmltYXRpb25zL01haW5DYW52YXMnO1xyXG5pbXBvcnQge01pZGRsZUNhbnZhc30gZnJvbSAnLi9jb21wb25lbnRzL0FuaW1hdGlvbnMvTWlkZGxlQ2FudmFzJztcclxuXHJcbi8vIFNraXAgaGVybyBtZXNzYWdlIG9mIFBJWElcclxuUElYSS51dGlscy5za2lwSGVsbG8oKTtcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbmFwcC5zY29yZSA9IDA7XHJcbmFwcC5zY29yZVVwZGF0ZWRBdCA9ICcnO1xyXG5hcHAuc2NvcmVCcmVha1BvaW50c0xpc3QgPSBbMSwgMywgNSwgMTAsIDE1LCAyMF0ubWFwKHNjb3JlID0+IHNjb3JlICogMTAwMDAwMCk7XHJcbmFwcC5sYXN0U2NvcmVCcmVha3BvaW50ID0gMDtcclxuYXBwLnNjb3JlVVJMID0gd2luZG93LnNjb3JlVVJMO1xyXG5hcHAucGFnZUlEID0gd2luZG93LnBhZ2VJRCB8fCBkb2N1bWVudC5ib2R5LmRhdGFzZXQucGFnZTtcclxuXHJcbi8qXHJcbnwgTWV0aG9kc1xyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlSURcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmFwcC5pc1BhZ2UgPSBmdW5jdGlvbiAocGFnZUlEKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlSUQgPT09IHBhZ2VJRDtcclxufTtcclxuXHJcblxyXG5hcHAuTWlkZGxlQ2FudmFzSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcjEgPSB3aW5kb3cuY29udGFpbmVyMSA9IG5ldyBBcHBsaWNhdGlvbih7XHJcbiAgICAgICAgd2lkdGg6IDc1MCxcclxuICAgICAgICBoZWlnaHQ6IDU1MCxcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgcmVzb2x1dGlvbjogd2luZG93LnJlc29sdXRpb24gfHwgMSxcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IG1pZGRsZUNhbnZhcyA9IHRoaXMubWlkZGxlQ2FudmFzID0gbmV3IE1pZGRsZUNhbnZhcyh7XHJcbiAgICAgICAgd2lkdGg6IDc1MCxcclxuICAgICAgICBoZWlnaHQ6IDU1MCxcclxuICAgICAgICBtYzE6ICdhc3NldHMvaW1hZ2VzL3Nwcml0ZXMtY2FudmFzL21pZGRsZS1jYW52YXMucG5nLmpzb24nLFxyXG4gICAgICAgIGFwcDogY29udGFpbmVyMVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFpbmVyMS5zdGFnZS5hZGRDaGlsZChtaWRkbGVDYW52YXMpO1xyXG5cclxuICAgIGxldCBiZ01pZGRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2MtaW5jZW50aXZlX19jYXRjaCcpO1xyXG4gICAgYmdNaWRkbGVbMF0uYXBwZW5kQ2hpbGQoY29udGFpbmVyMS52aWV3KTtcclxufTtcclxuXHJcbmFwcC5nZXRTY29yZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzY29yZVVSTCA9IHRoaXMuc2NvcmVVUkw7XHJcblxyXG4gICAgaWYgKCFzY29yZVVSTCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2NvcmUgVVJMIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGh0dHBSZXF1ZXN0O1xyXG5cclxuICAgIGlmICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpIHsgLy8gTW96aWxsYSwgU2FmYXJpLCBJRTcrIC4uLlxyXG4gICAgICAgIGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7IC8vIElFIDYgYW5kIG9sZGVyXHJcbiAgICAgICAgaHR0cFJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaHR0cFJlcXVlc3QpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FKQVggaXMgdW5zdXBwb3J0ZWQuIFVuYWJsZSB0byBsb2FkIHNjb3JlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChodHRwUmVxdWVzdC5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoaHR0cFJlcXVlc3QucmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IHBhcnNlSW50KHJlc3BvbnNlLnNjb3JlKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVVwZGF0ZWRBdCA9IHJlc3BvbnNlLnVwZGF0ZV9hdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdzY29yZV9sb2FkZWQnKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyc2Ugc2NvcmUgZmFpbGVkOiAnICsgZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgaHR0cFJlcXVlc3Qub3BlbignR0VUJywgc2NvcmVVUkwgKyAnP3Q9JyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksIHRydWUpO1xyXG4gICAgaHR0cFJlcXVlc3Quc2VuZCgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHsqfEZ1bmN0aW9ufVxyXG4gKi9cclxuYXBwLnBsYXlJbmNlbnRpdmVBbmltYXRpb24gPSBVdGlsLmFmdGVyRnVuYygyLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUGxheSBhbmltYXRlJywgdGhpcyk7XHJcbiAgICBsZXQgc3RlcE9mZnNldFRvcCA9IHRoaXMuJHJlZi5pbmNlbnRpdmUubGFzdFN0ZXAub2Zmc2V0VG9wO1xyXG4gICAgbGV0IHN0ZXBBZGRpdGlvblNwYWNlID0gMDtcclxuXHJcbiAgICBpZiAodGhpcy5pc0FsbFNjcm9yZUJyZWFrcG9pbnRDb21wbGV0ZWQpIHtcclxuICAgICAgICBzdGVwQWRkaXRpb25TcGFjZSA9IHRoaXMuJHJlZi5pbmNlbnRpdmUubGFzdFN0ZXAub2Zmc2V0SGVpZ2h0ICogMC4zMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RlcEFkZGl0aW9uU3BhY2UgPSB0aGlzLiRyZWYuaW5jZW50aXZlLmxhc3RTdGVwLm9mZnNldEhlaWdodCAqIDAuNTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgcG9zaXRpb24gb2YgZ2F1Z2UgYXJyb3dcclxuICAgIGxldCAkZ2F1Z2VBcnJvdyA9IHRoaXMuJHJlZi5pbmNlbnRpdmUuZ2F1Z2VBcnJvdztcclxuICAgIGxldCBnYXVnZUFycm93VG9wID0gc3RlcE9mZnNldFRvcCArIHN0ZXBBZGRpdGlvblNwYWNlO1xyXG5cclxuICAgICRnYXVnZUFycm93LnN0eWxlLnRvcCA9IChnYXVnZUFycm93VG9wKSArICdweCc7XHJcblxyXG4gICAgLy8gU2V0IGdhdWdlIGNvbG9yXHJcbiAgICBsZXQgJGdhdWdlQ29sb3IgPSB0aGlzLiRyZWYuaW5jZW50aXZlLmdhdWdlQ29sb3I7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBbGxTY3JvcmVCcmVha3BvaW50Q29tcGxldGVkKSB7XHJcbiAgICAgICAgJGdhdWdlQ29sb3IuY2xhc3NOYW1lICs9ICcgYW5pbWF0ZWQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gZ2F1Z2VBcnJvd1RvcCAtICRnYXVnZUNvbG9yLm9mZnNldFRvcCArIE1hdGguZmxvb3IoJGdhdWdlQXJyb3cub2Zmc2V0SGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKG5ld0hlaWdodCwgdGhpcy4kcmVmLmluY2VudGl2ZS5nYXVnZS5vZmZzZXRIZWlnaHQpO1xyXG5cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24gKG5ld0hlaWdodCkge1xyXG4gICAgICAgICAgICAkZ2F1Z2VDb2xvci5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0pKG5ld0hlaWdodCkpO1xyXG4gICAgfVxyXG59LmJpbmQoYXBwKSwgZnVuY3Rpb24oaSl7XHJcbiAgICBjb25zb2xlLmxvZygncGxheUluY2VudGl2ZUFuaW1hdGlvbicsIGkpO1xyXG59KTtcclxuXHJcbi8qXHJcbnwgRXZlbnRzXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuLy8gU2V0IHNjb3JlXHJcbmFwcC5vblJlYWR5KGFwcC5nZXRTY29yZSk7XHJcblxyXG5hcHAub25Mb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcclxufSk7XHJcblxyXG5cclxuLy8gR2V0IHJlZiBvZiBET01cclxuYXBwLm9uUmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy4kcmVmLmluY2VudGl2ZSA9IHtcclxuICAgICAgICBnYXVnZTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYy1pbmNlbnRpdmVVcGdyYWRlX19nYXVnZScpWzBdLFxyXG4gICAgICAgIGdhdWdlQ29sb3I6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2MtaW5jZW50aXZlVXBncmFkZV9fZ2F1Z2UtY29sb3InKVswXSxcclxuICAgICAgICBnYXVnZUFycm93OiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjLWluY2VudGl2ZVVwZ3JhZGVfX2dhdWdlLWFycm93JylbMF1cclxuICAgIH07XHJcbn0pO1xyXG5cclxuLy8gQW5hbHl0aWMgc2NvcmVcclxuYXBwLm9uKCdzY29yZV9sb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2NvcmVCcmVha3BvaW50cyA9IHRoaXMuc2NvcmVCcmVha1BvaW50c0xpc3RcclxuICAgICAgICAuZmlsdGVyKChicFNjb3JlKSA9PiB0aGlzLnNjb3JlID49IGJwU2NvcmUpXHJcbiAgICAgICAgLm1hcChicFNjb3JlID0+IGJwU2NvcmUgLyAxMDAwMDAwICogMTAwKTtcclxuXHJcbiAgICAvLyBBZGQgYm9keSdzIGNsYXNzZXNcclxuICAgIHNjb3JlQnJlYWtwb2ludHMuZm9yRWFjaChicCA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLXNicC0nICsgYnApKTtcclxuXHJcbiAgICB0aGlzLmxhc3RTY29yZUJyZWFrcG9pbnQgPSBzY29yZUJyZWFrcG9pbnRzLmxlbmd0aCA/IHNjb3JlQnJlYWtwb2ludHNbc2NvcmVCcmVha3BvaW50cy5sZW5ndGggLSAxXSA6IDA7XHJcbiAgICB0aGlzLmlzQWxsU2Nyb3JlQnJlYWtwb2ludENvbXBsZXRlZCA9IHRoaXMuc2NvcmVCcmVha1BvaW50c0xpc3QubGVuZ3RoID09PSBzY29yZUJyZWFrcG9pbnRzLmxlbmd0aDtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xhc3Qtc2JwLScgKyB0aGlzLmxhc3RTY29yZUJyZWFrcG9pbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFzdC1zYnAnLCB0aGlzLmxhc3RTY29yZUJyZWFrcG9pbnQgKyAnJyk7XHJcbn0pO1xyXG5cclxuYXBwLm9uKCdzY29yZV9sb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgaWYgKHRoaXMubGFzdFNjb3JlQnJlYWtwb2ludCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fEhUTUxFbGVtZW50fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuJHJlZi5pbmNlbnRpdmUubGFzdFN0ZXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjLWluY2VudGl2ZVVwZ3JhZGVfX3N0ZXAtLScgKyB0aGlzLmxhc3RTY29yZUJyZWFrcG9pbnQpWzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRyZWYuaW5jZW50aXZlLmxhc3RTdGVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYy1pbmNlbnRpdmVVcGdyYWRlX19zdGVwLS1zdGFydCcpWzBdO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmFwcC5vbignc2NvcmVfbG9hZGVkJywgYXBwLnBsYXlJbmNlbnRpdmVBbmltYXRpb24pO1xyXG5cclxuYXBwLm9uKCdzY29yZV9sb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2NvcmUtdXBkYXRlZC1hdCcpXHJcbn0pO1xyXG5cclxuLy8gUGxheSBhbmltYXRpb24gb2YgaGVhZGVyXHJcbmFwcC5vbkxvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB3aW5kb3cuY29udGFpbmVyID0gbmV3IEFwcGxpY2F0aW9uKHtcclxuICAgICAgICB3aWR0aDogNzUwLFxyXG4gICAgICAgIGhlaWdodDogMTAwMCxcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgcmVzb2x1dGlvbjogd2luZG93LnJlc29sdXRpb24gfHwgMSxcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IG1haW5DYW52YXMgPSB0aGlzLm1haW5DYW52YXMgPSBuZXcgTWFpbkNhbnZhcyh7XHJcbiAgICAgICAgd2lkdGg6IDc1MCxcclxuICAgICAgICBoZWlnaHQ6IDEwMDAsXHJcbiAgICAgICAgbWM6ICdhc3NldHMvaW1hZ2VzL3Nwcml0ZXMtY2FudmFzL21haW4tY2FudmFzLnBuZy5qc29uJyxcclxuICAgICAgICBjaGFyYWN0ZXI6ICdhc3NldHMvaW1hZ2VzL3Nwcml0ZXMtY2FudmFzL2NoYXJhY3RlcnMucG5nLmpzb24nLFxyXG4gICAgICAgIGFwcDogY29udGFpbmVyXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXIuc3RhZ2UuYWRkQ2hpbGQobWFpbkNhbnZhcyk7XHJcblxyXG4gICAgbGV0IGJnUGxhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJyk7XHJcbiAgICBiZ1BsYWNlWzBdLmFwcGVuZENoaWxkKGNvbnRhaW5lci52aWV3KTtcclxuXHJcbn0sIHtkZWxheTogNzAwfSk7XHJcblxyXG5cclxuLy8gUGxheSBhbmltYXRpb25zIG9uIHNjcm9sbFxyXG5hcHAub25Mb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHNob3dUcmlnZ2VyID0gbmV3IFNjcm9sbFRyaWdnZXIoKTtcclxuXHJcbiAgICBzaG93VHJpZ2dlci5hZGRFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2MtaW5jZW50aXZlX19jYXRjaCcpWzBdLCB7XHJcbiAgICAgICAgZGVsYXk6IDIwMCxcclxuICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgeTogMTUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkhleTogZnVuY3Rpb24gKGlzX3Zpc2libGUsIHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFpc192aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyaWdnZXIub3B0aW9ucy5pc1RyaWdnZXJhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWlkZGxlQ2FudmFzSW5pdCA9IHRoaXMuTWlkZGxlQ2FudmFzSW5pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KG1pZGRsZUNhbnZhc0luaXQsIDQwMCk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2VyLnJlbW92ZU15c2VsZigpO1xyXG4gICAgICAgIH0uYmluZChzZWxmKVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2hvd1RyaWdnZXIuYWRkRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjLWluY2VudGl2ZVVwZ3JhZGVfX2dhdWdlJylbMF0sIHtcclxuICAgICAgICBkZWxheTogZmFsc2UsXHJcbiAgICAgICAgb25IZXk6IGZ1bmN0aW9uIChpc192aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNfdmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLnBsYXlJbmNlbnRpdmVBbmltYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTXlzZWxmKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2hvd1RyaWdnZXIuYWRkRWxlbWVudHMoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYy1pbmNlbnRpdmVVcGdyYWRlX19zdGVwJyksIHtcclxuICAgICAgICBkZWxheTogZmFsc2UsXHJcbiAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgIHk6IDEwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25IZXk6IGZ1bmN0aW9uIChpc192aXNpYmxlLCB0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNfdmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2VyLnJlbW92ZU15c2VsZigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBVdGlsLnRocm90dGxlRnVuYyhzaG93VHJpZ2dlci5nZXRTY3JvbGxDYWxsYmFjaygpLCAxMDApKTtcclxuICAgIHNob3dUcmlnZ2VyLnNjcm9sbCgpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG58IEluaXQgYXBwXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4vLyBSZWdpc3RlciBzeXN0ZW0gZXZlbnRzIHRvIGhhbmRsZSBkb2N1bWVudCByZWFkeSBzdGF0dXNcclxuYXBwLmxpc3RlblN5c3RlbUV2ZW50KCk7XHJcblxyXG4vLyBNZXRob2QgYXBwLmluaXQoKSBtdXN0IGJlIGNhbGwgYWZ0ZXIgZXZlbnRzIHJlZ2lzdGVyZWRcclxuYXBwLmluaXQoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsJztcclxuXHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IEV2ZW50c1xyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbmxldCBldmVudEluZGV4ID0gMDtcclxuY29uc3QgZXZlbnREZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIG9uY2U6IHRydWUsIC8vIENhbXBhaWduIGV2ZW50cyB1c3VhbGx5IHRyaWdnZXJlZCBvbmx5IG9uY2VcclxuICAgIGJvdW5kOiBudWxsLFxyXG4gICAgZGVsYXk6IDBcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge1tdfSBhcmdzXHJcbiAqIEBwYXJhbSB7Kn0gYm91bmRcclxuICogQHBhcmFtIHtmYWxzZXxpbnR9IGRlbGF5XHJcbiAqL1xyXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soY2FsbGJhY2ssIGFyZ3MsIGJvdW5kLCBkZWxheSkge1xyXG4gICAgaWYgKGRlbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uIChjYiwgYXJncykge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2IuYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkoY2FsbGJhY2suYmluZChib3VuZCksIGFyZ3MpLCBkZWxheSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FsbGJhY2suYXBwbHkoYm91bmQsIGFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4kcmVmID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSBVdGlsLmRldGVjdERldmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7e319IFtvcHRpb25zID0ge31dXHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgb3B0aW9uXHJcbiAgICAgICAgb3B0aW9ucy5vbmNlID0gb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnb25jZScpID8gb3B0aW9ucy5vbmNlIDogZXZlbnREZWZhdWx0T3B0aW9ucy5vbmNlO1xyXG4gICAgICAgIG9wdGlvbnMuYm91bmQgPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdib3VuZCcpID8gb3B0aW9ucy5ib3VuZCA6IGV2ZW50RGVmYXVsdE9wdGlvbnMuYm91bmQ7XHJcbiAgICAgICAgb3B0aW9ucy5kZWxheSA9IG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2RlbGF5JykgPyBvcHRpb25zLmRlbGF5IDogZXZlbnREZWZhdWx0T3B0aW9ucy5kZWxheTtcclxuXHJcblxyXG4gICAgICAgIC8vIFRyaWdnZXIgY2FsbGJhY2sgaW1tZWRpYXRlIGlmIGV2ZW50IGlzIHRyaWdnZXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBleGVjdXRlQ2FsbGJhY2soY2FsbGJhY2ssIFtdLCBvcHRpb25zLmJvdW5kLCBvcHRpb25zLmRlbGF5KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FsbCBldmVudCB0aHJvd3MgYW4gZXJyb3I6IGV2ZW50IG5hbWU6ICR7ZXZlbnROYW1lfSwgZXZlbnQgaWQ6IGltbWVkaWF0ZSB0cmlnZ2VyYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGV2ZW50SWQgPSBldmVudEluZGV4Kys7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrLl9ldmVudF9pZCA9IGV2ZW50SWQ7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1bZXZlbnRJZF0gPSB7XHJcbiAgICAgICAgICAgIGlkOiBldmVudElkLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEByZXR1cm4ge0FwcH1cclxuICAgICAqL1xyXG4gICAgdHJpZ2dlckV2ZW50KGV2ZW50TmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhcmdzID0gW10uc2xpY2UuYXBwbHkoYXJndW1lbnRzKTtcclxuICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBldmVudElEIG9mIE9iamVjdC5rZXlzKGV2ZW50KSkge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnREZXRhaWwgPSBldmVudFtldmVudElEXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudERldGFpbC5vcHRpb25zLm9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1bZXZlbnREZXRhaWwuaWRdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudE5hbWVdW2V2ZW50RGV0YWlsLmlkXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGV4ZWN1dGVDYWxsYmFjayhcclxuICAgICAgICAgICAgICAgICAgICBldmVudERldGFpbC5jYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGV0YWlsLm9wdGlvbnMuYm91bmQgfHwgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBldmVudERldGFpbC5vcHRpb25zLmRlbGF5XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDYWxsIGV2ZW50IHRocm93cyBhbiBlcnJvcjogZXZlbnQgbmFtZTogJHtldmVudE5hbWV9LCBldmVudCBpZDogJHtldmVudERldGFpbC5pZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlblN5c3RlbUV2ZW50KCkge1xyXG4gICAgICAgIGxldCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChkb2N1bWVudC5yZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibG9hZGluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBkb2N1bWVudCBpcyBzdGlsbCBsb2FkaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImludGVyYWN0aXZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLiBXZSBjYW4gbm93IGFjY2VzcyB0aGUgRE9NIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eSgncmVhZHknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgncmVhZHknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdG8gYWRkIGNhbGxiYWNrIHRoaXMgZXZlbnQgYWdhaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucmVhZHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHBhZ2UgaXMgZnVsbHkgbG9hZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eSgnbG9hZGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2xvYWRlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCB0byBhZGQgY2FsbGJhY2sgdGhpcyBldmVudCBhZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5sb2FkZWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNhbGxiYWNrIHdoZW4gcGFnZSByZWFkeSAodGhlIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nKVxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcclxuICAgICAqIEBwYXJhbSB7e319IFtvcHRpb25zPXt9XVxyXG4gICAgICogQHJldHVybiB7QXBwfVxyXG4gICAgICovXHJcbiAgICBvblJlYWR5KGNiLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vbigncmVhZHknLCBjYiwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNhbGxiYWNrIHdoZW4gcGFnZSBsb2FkZWQgKHRoZSBwYWdlIGlzIGZ1bGx5IGxvYWRlZClcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXHJcbiAgICAgKiBAcGFyYW0ge3t9fSBbb3B0aW9ucz17fV1cclxuICAgICAqIEByZXR1cm4ge0FwcH1cclxuICAgICAqL1xyXG4gICAgb25Mb2FkZWQoY2IsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9uKCdsb2FkZWQnLCBjYiwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNhbGxiYWNrIHdoZW4gYXBwIGluaXRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXHJcbiAgICAgKiBAcGFyYW0ge3t9fSBbb3B0aW9ucz17fV1cclxuICAgICAqIEByZXR1cm4ge0FwcH1cclxuICAgICAqL1xyXG4gICAgb25Jbml0KGNiLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vbignaW5pdCcsIGNiLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaW5pdCcpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdGhyb3R0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCB0cmlnZ2VySWRJbmRleCA9IDA7XHJcblxyXG5jbGFzcyBUcmlnZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmlkID0gKyt0cmlnZ2VySWRJbmRleDtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBUcmlnZ2VyLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KTtcclxuICAgICAgICB0aGlzLmFkZFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRIZWlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5feE9mZnNldCA9IDA7XHJcbiAgICAgICAgdGhpcy5feU9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHJpZ2VyZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7U2Nyb2xsVHJpZ2dlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNjcm9sbFRyaWdnZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxlZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIH1cclxuXHJcbiAgICByaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcclxuICAgIH1cclxuXHJcbiAgICB0b3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICB9XHJcblxyXG4gICAgYm90dG9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuICAgIH1cclxuXHJcbiAgICB3aWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBoZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICB4T2Zmc2V0KGdvaW5nTGVmdCkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl94T2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyBhZGQgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIGVsZW1lbnQgdG8gdGhlIGxlZnQgcG9zaXRpb24sIHNvIHRoZVxyXG4gICAgICAgIC8vIHZpc2libGVDbGFzcyBpcyBvbmx5IGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGNvbXBsZXRlbHlcclxuICAgICAgICAvLyBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICBpZiAodGhpcy5hZGRXaWR0aCAmJiAhZ29pbmdMZWZ0KSB7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSB0aGlzLndpZHRoKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnb2luZ0xlZnQgJiYgIXRoaXMuYWRkV2lkdGgpIHtcclxuICAgICAgICAgICAgb2Zmc2V0IC09IHRoaXMud2lkdGgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgeU9mZnNldChnb2luZ1VwKSB7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX3lPZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgdG8gdGhlIHRvcCBwb3NpdGlvbiwgc28gdGhlXHJcbiAgICAgICAgLy8gdmlzaWJsZUNsYXNzIGlzIG9ubHkgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgY29tcGxldGVseVxyXG4gICAgICAgIC8vIGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgIGlmICh0aGlzLmFkZEhlaWdodCAmJiAhZ29pbmdVcCkge1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gdGhpcy5oZWlnaHQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdvaW5nVXAgJiYgIXRoaXMuYWRkSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIG9mZnNldCAtPSB0aGlzLmhlaWdodCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVNeXNlbGYoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVHJpZ2dlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRyaWdnZXIuZGVzdHJveUJ5SUQodGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG5cclxuICAgICAgICBldmVudC5pbml0RXZlbnQoJ3Jlc2V0LXNjcm9sbC10cmlnZ2VyJywgdHJ1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvLyBzZXQgdGhlIGRlZmF1bHQgb3B0aW9uc1xyXG4gICAgICAgIC8vIHBhcnNlIHRoZSBvcHRpb25zIGdpdmVuIGluIHRoZSBkYXRhLXNjcm9sbCBhdHRyaWJ1dGUsIGlmIGFueVxyXG5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNlbnRlckhvcml6b250YWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5feE9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0V2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jZW50ZXJWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl95T2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vZmZzZXQgJiYgdGhpcy5vcHRpb25zLm9mZnNldC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3hPZmZzZXQgKz0gdGhpcy5vcHRpb25zLm9mZnNldC54O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vZmZzZXQgJiYgdGhpcy5vcHRpb25zLm9mZnNldC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3lPZmZzZXQgKz0gdGhpcy5vcHRpb25zLm9mZnNldC55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGRXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFdpZHRoID0gdGhpcy5vcHRpb25zLmFkZFdpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGRIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRIZWlnaHQgPSB0aGlzLm9wdGlvbnMuYWRkSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVHJpZ2dlcmFibGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2lzVHJpZ2dlcmFibGUnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpc1RyaWdnZXJhYmxlID0gdGhpcy5vcHRpb25zLmlzVHJpZ2dlcmFibGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgaXNUcmlnZ2VyYWJsZSAhPT0gJ2Z1bmN0aW9uJyA/ICEhaXNUcmlnZ2VyYWJsZSA6IGlzVHJpZ2dlcmFibGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Zpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBUcmlnZ2VyLlNUQVRVUy5WSVNJQkxFO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW52aXNpYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gVHJpZ2dlci5TVEFUVVMuSU5WSVNJQkxFO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZShpc192aXNpYmxlKSB7XHJcbiAgICAgICAgaWYgKGlzX3Zpc2libGUgJiYgdGhpcy5pc1Zpc2libGUoKSB8fCAhaXNfdmlzaWJsZSAmJiB0aGlzLmlzSW52aXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50cmlnZXJlZCsrO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gaXNfdmlzaWJsZSA/IFRyaWdnZXIuU1RBVFVTLlZJU0lCTEUgOiBUcmlnZ2VyLlNUQVRVUy5JTlZJU0lCTEU7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkhleS5jYWxsKHRoaXMsIGlzX3Zpc2libGUsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5UcmlnZ2VyLlNUQVRVUyA9IHtcclxuICAgIFZJU0lCTEU6ICd2aXNpYmxlJyxcclxuICAgIElOVklTSUJMRTogJ2ludmlzaWJsZSdcclxufTtcclxuXHJcblRyaWdnZXIuZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBjZW50ZXJIb3Jpem9udGFsOiBmYWxzZSxcclxuICAgIGNlbnRlclZlcnRpY2FsOiBmYWxzZSxcclxuXHJcbiAgICBhZGRXaWR0aDogZmFsc2UsXHJcbiAgICBhZGRIZWlnaHQ6IGZhbHNlLFxyXG5cclxuICAgIG9mZnNldDoge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBpc1RyaWdnZXJhYmxlOiB0cnVlLFxyXG5cclxuICAgIGRlbGF5OiAwLFxyXG5cclxuICAgIG9uSGV5OiBmdW5jdGlvbiAoaXNfdmlzaWJsZSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBTY3JvbGxUcmlnZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHRyaWdnZXJEZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlckRlZmF1bHRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgVHJpZ2dlci5kZWZhdWx0T3B0aW9ucywgdHJpZ2dlckRlZmF1bHRPcHRpb25zIHx8IHt9KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge3tUcmlnZ2VyfX1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnRyaWdnZXJzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBwcmV2aW91cyBzY3JvbGxUb3AgcG9zaXRpb24sIHRvIGRldGVybWluZSBpZiBhIHVzZXJcclxuICAgICAgICAgKiBpcyBzY3JvbGxpbmcgdXAgb3IgZG93bi4gU2V0IHRoYXQgdG8gLTEgLTEgc28gdGhlIGxvb3BcclxuICAgICAgICAgKiBhbHdheXMgcnVucyBhdCBsZWFzdCBvbmNlXHJcbiAgICAgICAgICogQHR5cGUge3tsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfX1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByZXZpb3VzU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiAtMSxcclxuICAgICAgICAgICAgdG9wOiAtMVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHRoZSBlbGVtZW50IHRvIGRldGVjdCB0aGUgc2Nyb2xsIGluXHJcbiAgICAgICAgdGhpcy5zY3JvbGxFbGVtZW50ID0gd2luZG93O1xyXG5cclxuICAgICAgICAvLyB0aGUgZWxlbWVudCB0byBnZXQgdGhlIGRhdGEtc2Nyb2xsIGVsZW1lbnRzIGZyb21cclxuICAgICAgICB0aGlzLmJpbmRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fEVsZW1lbnR9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSAge3t9fSBbb3B0aW9ucz17fV1cclxuICAgICAqIEByZXR1cm4ge1Njcm9sbFRyaWdnZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBvbkhleTogb3B0aW9uc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRyaWdnZXIgPSBuZXcgVHJpZ2dlcihlbGVtZW50LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRyaWdnZXJEZWZhdWx0T3B0aW9ucywgb3B0aW9ucyB8fCB7fSkpO1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJJRCA9IHRyaWdnZXIuaWQ7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsX3RyaWdnZXJfaWQgPSB0cmlnZ2VySUQ7XHJcblxyXG4gICAgICAgIHRoaXMudHJpZ2dlcnNbdHJpZ2dlcklEXSA9IHRyaWdnZXI7XHJcbiAgICAgICAgdHJpZ2dlci5zY3JvbGxUcmlnZ2VyID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgIHRyaWdnZXIuaW5pdCgpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50W118RWxlbWVudFtdfSBlbGVtZW50c1xyXG4gICAgICogQHBhcmFtIHt7fX0gW29wdGlvbnM9e31dXHJcbiAgICAgKi9cclxuICAgIGFkZEVsZW1lbnRzKGVsZW1lbnRzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChlbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RWxlbWVudFRyaWdnZXJJRChlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ3Njcm9sbF90cmlnZ2VyX2lkJykgPyBlbGVtZW50LnNjcm9sbF90cmlnZ2VyX2lkIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgICAqIEByZXR1cm4ge1RyaWdnZXJ8bnVsbH1cclxuICAgICAqL1xyXG4gICAgZ2V0VHJpZ2dlcihlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHRyaWdnZXJJRCA9IHNlbGYuZ2V0RWxlbWVudFRyaWdnZXJJRChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRyaWdnZXJJRCAmJiB0aGlzLnRyaWdnZXJzLmhhc093blByb3BlcnR5KHRyaWdnZXJJRCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcnNbdHJpZ2dlcklEXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIFRyaWdnZXIgYnkgaXRzIEhUTUxFbGVtZW50IG9iamVjdCwgZS5nIHZpYSBxdWVyeVNlbGVjdG9yKClcclxuICAgICAqIEByZXR1cm4ge1Njcm9sbFRyaWdnZXJ9XHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koZWxlbWVudCkge1xyXG4gICAgICAgIGxldCB0cmlnZ2VySUQgPSBzZWxmLmdldEVsZW1lbnRUcmlnZ2VySUQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmICh0cmlnZ2VySUQgJiYgdGhpcy50cmlnZ2Vycy5oYXNPd25Qcm9wZXJ0eSh0cmlnZ2VySUQpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRyaWdnZXJzW3RyaWdnZXJJRF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7Kn0gaWRcclxuICAgICAqL1xyXG4gICAgZGVzdHJveUJ5SUQoaWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJpZ2dlcnNbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJpZ2dlcnNbaWRdLiRlbGVtZW50LnNjcm9sbF90cmlnZ2VyX2lkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnRyaWdnZXJzW2lkXTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95QWxsKCkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoZWxlbWVudCkge1xyXG4gICAgICAgIGxldCB0cmlnZ2VyID0gdGhpcy5nZXRUcmlnZ2VyKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodHJpZ2dlcikge1xyXG4gICAgICAgICAgICB0cmlnZ2VyLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgY2FsbGVkIGV2ZXJ5dGltZSB0aGUgYnJvd3NlciBpcyByZWFkeSBmb3IgaXQsIG9yIHdoZW4gdGhlIHVzZXJcclxuICAgICAqIHNjcm9sbHMgKG9uIGxlZ2FjeSBicm93c2VycylcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsKCkge1xyXG4gICAgICAgIC8vIEZGIGFuZCBJRSB1c2UgdGhlIGRvY3VtZW50RWxlbWVudCBpbnN0ZWFkIG9mIGJvZHlcclxuICAgICAgICBsZXQgY3VycmVudFRvcCA9ICF0aGlzLmJpbmRFbGVtZW50LnNjcm9sbFRvcCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiB0aGlzLmJpbmRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBsZXQgY3VycmVudExlZnQgPSAhdGhpcy5iaW5kRWxlbWVudC5zY3JvbGxMZWZ0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiB0aGlzLmJpbmRFbGVtZW50LnNjcm9sbExlZnQ7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB1c2VyIHNjcm9sbGVkXHJcbiAgICAgICAgbGV0IGlzU2Nyb2xsZWQgPSB0aGlzLnByZXZpb3VzU2Nyb2xsLmxlZnQgIT09IGN1cnJlbnRMZWZ0IHx8IHRoaXMucHJldmlvdXNTY3JvbGwudG9wICE9PSBjdXJyZW50VG9wO1xyXG5cclxuICAgICAgICBpZiAoIWlzU2Nyb2xsZWQpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gdGhpcy5zY3JvbGxFbGVtZW50LmlubmVyV2lkdGggfHwgdGhpcy5zY3JvbGxFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSB0aGlzLnNjcm9sbEVsZW1lbnQuaW5uZXJIZWlnaHQgfHwgdGhpcy5zY3JvbGxFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3dpbiB3aWR0aCcsIHdpbmRvd1dpZHRoLCAnd2luIGhlaWdodCcsIHdpbmRvd0hlaWdodCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMudHJpZ2dlcnMpLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXJJRCkge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlciA9IHRoaXMudHJpZ2dlcnNbdHJpZ2dlcklEXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlci5pc1RyaWdnZXJhYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJMZWZ0ID0gdHJpZ2dlci5sZWZ0KCk7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyUmlnaHQgPSB0cmlnZ2VyLnJpZ2h0KCk7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyVG9wID0gdHJpZ2dlci50b3AoKTtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJCb3R0b20gPSB0cmlnZ2VyLmJvdHRvbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNTY3JvbGwubGVmdCA+IGN1cnJlbnRMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcgbGVmdCwgc28gd2Ugc3VidHJhY3QgdGhlIHhPZmZzZXRcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJMZWZ0IC09IHRyaWdnZXIueE9mZnNldCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXZpb3VzU2Nyb2xsLmxlZnQgPCBjdXJyZW50TGVmdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHJpZ2h0LCBzbyB3ZSBhZGQgdGhlIHhPZmZzZXRcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJMZWZ0ICs9IHRyaWdnZXIueE9mZnNldChmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzU2Nyb2xsLnRvcCA+IGN1cnJlbnRUb3ApIHtcclxuICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyB1cCwgc28gd2Ugc3VidHJhY3QgdGhlIHlPZmZzZXRcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJUb3AgLT0gdHJpZ2dlci55T2Zmc2V0KHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXNTY3JvbGwudG9wIDwgY3VycmVudFRvcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIGRvd24gc28gdGhlbiB3ZSBhZGQgdGhlIHlPZmZzZXRcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJUb3AgKz0gdHJpZ2dlci55T2Zmc2V0KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gKHRyaWdnZXJUb3AgPj0gMCAmJiB0cmlnZ2VyVG9wIDwgd2luZG93SGVpZ2h0KSB8fCAodHJpZ2dlclRvcCA8IDAgJiYgdHJpZ2dlckJvdHRvbSA+IC0xKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IHRyaWdnZXIudG9nZ2xlLmJpbmQodHJpZ2dlciwgaXNWaXNpYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLm9wdGlvbnMuZGVsYXkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgdHJpZ2dlci5vcHRpb25zLmRlbGF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1Njcm9sbC5sZWZ0ID0gY3VycmVudExlZnQ7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1Njcm9sbC50b3AgPSBjdXJyZW50VG9wO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjcm9sbENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUcmlnZ2VyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Nyb2xsVHJpZ2dlci5qcyIsImltcG9ydCB7Q29udGFpbmVyLCBTcHJpdGUsIGxvYWRlcnN9IGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQge1R3ZWVuTWF4fSBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXInO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XHJcbmltcG9ydCB7Q2F0Y2h9IGZyb20gJy4vQ2F0Y2gnO1xyXG5pbXBvcnQge1N0YXJ9IGZyb20gJy4vU3Rhcic7XHJcbmltcG9ydCB7Q3Jvd259IGZyb20gJy4vQW5uaXZlcnNhcnknO1xyXG5pbXBvcnQge1R3b1llYXJzfSBmcm9tICcuL0Fubml2ZXJzYXJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluQ2FudmFzIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBsb2FkZXJzLkxvYWRlcigpXHJcbiAgICAgICAgICAgIC5hZGQoJ21jJywgcHJvcHMubWMpXHJcbiAgICAgICAgICAgIC5hZGQoJ2NoYXJhY3RlcicsIHByb3BzLmNoYXJhY3RlcilcclxuICAgICAgICAgICAgLmxvYWQodGhpcy5zZXR1cC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIFJhbmdlKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhICsgMSkpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmVzID0gdGhpcy5sb2FkZXIucmVzb3VyY2VzLm1jLnRleHR1cmVzO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZXNDaGFyYWN0ZXIgPSB0aGlzLmxvYWRlci5yZXNvdXJjZXMuY2hhcmFjdGVyLnRleHR1cmVzO1xyXG4gICAgICAgIHRoaXMuX3NldENoYXJhY3RlcigpO1xyXG4gICAgICAgIHRoaXMuX3NldEFubml2ZXJzYXJ5KCk7XHJcbiAgICAgICAgdGhpcy5fc2V0SWNvbigpO1xyXG4gICAgICAgIHRoaXMuX3NldFRpdGxlKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0TWVkYWwoKTtcclxuICAgICAgICB0aGlzLl9zZXRMb2dvKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0Q2F0Y2goKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHggPSB0aGlzLlJhbmdlKDAsIDc1MClcclxuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLlJhbmdlKDIwMCwgODAwKTtcclxuICAgICAgICAgICAgdmFyIHN0YXIgPSBuZXcgU3Rhcih0aGlzLnRleHR1cmVzWydzdGFyJ10sIHtzY2FsZTogMS41LCBkdXJhdGlvbjogMC41LCB4LCB5fSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc3Rhci5ydW5Eb3VibGUuYmluZChzdGFyKSwgMjAwMCArIGkgKiA1MCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3Rhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5SYW5nZSgyODAsIDQ4MClcclxuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLlJhbmdlKDE1LCAyMTUpO1xyXG4gICAgICAgICAgICB2YXIgc3RhciA9IG5ldyBTdGFyKHRoaXMudGV4dHVyZXNbJ3N0YXInXSwge3NjYWxlOiAxLjUsIGR1cmF0aW9uOiAwLjUsIHgsIHl9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChzdGFyLnJlcGVhdC5iaW5kKHN0YXIpLCAyMDAwICsgaSAqIDE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3Rhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXRDaGFyYWN0ZXIoKSB7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlclNhbiA9IG5ldyBDaGFyYWN0ZXIodGhpcy50ZXh0dXJlc0NoYXJhY3RlclsnY2hhcmFjdGVyLXNhbiddLCB7eDogMzc1LCB5OiA0OTAsIGR1cmF0aW9uOiAxLjZ9KSxcclxuICAgICAgICAgICAgY2hhcmFjdGVyWm9yID0gbmV3IENoYXJhY3Rlcih0aGlzLnRleHR1cmVzQ2hhcmFjdGVyWydjaGFyYWN0ZXItem9yJ10sIHt4OiAzNzUsIHk6IDQ4MCwgZHVyYXRpb246IDEuNn0pO1xyXG4gICAgICAgIGNoYXJhY3RlclNhbi5ydW4oNTcwKTtcclxuICAgICAgICBjaGFyYWN0ZXJab3IucnVuKDE4MCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChjaGFyYWN0ZXJTYW4pO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY2hhcmFjdGVyWm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QW5uaXZlcnNhcnkoKSB7XHJcbiAgICAgICAgbGV0IGNyb3duID0gbmV3IENyb3duKHRoaXMudGV4dHVyZXNbJ2Nyb3duJ10sIHt4OiAzNzUsIHk6IDE0MCwgZHVyYXRpb246IDAuNn0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjcm93bi5ydW4oMTEwKTtcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgIGxldCB0d29ZZWFycyA9IG5ldyBUd29ZZWFycyh0aGlzLnRleHR1cmVzWyd0d28teWVhcnMnXSwge3g6IDM3NSwgeTogMTIwLCBkdXJhdGlvbjogMS4yfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHR3b1llYXJzLnJ1bigyMDAsIDE2MCk7XHJcbiAgICAgICAgfSwgNjAwKVxyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3Jvd24pO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodHdvWWVhcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRMb2dvKCkge1xyXG4gICAgICAgIHRoaXMubG9nbyA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlc1snY2FudmFzLWxvZ28nXSk7XHJcbiAgICAgICAgdGhpcy5sb2dvLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLmxvZ28ucG9zaXRpb24uc2V0KDM3NSwgNTA1KTtcclxuICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy5sb2dvLCB7XHJcbiAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMubG9nbywgMC41LCB7XHJcbiAgICAgICAgICAgIGFscGhhOiAxMDAsXHJcbiAgICAgICAgfSkuZGVsYXkoMS40KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubG9nbyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE1lZGFsKCkge1xyXG4gICAgICAgIHRoaXMubWVkYWxZZWxsb3cgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZXNbJ21lZGFsLXllbGxvdyddKTtcclxuICAgICAgICB0aGlzLm1lZGFsUmVkID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmVzWydtZWRhbC1yZWQnXSk7XHJcbiAgICAgICAgdGhpcy5tZWRhbEJsdWUgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZXNbJ21lZGFsLWJsdWUnXSk7XHJcbiAgICAgICAgdGhpcy5tZWRhbEdyZWVuID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmVzWydtZWRhbC1ncmVlbiddKTtcclxuICAgICAgICB0aGlzLm1lZGFsWWVsbG93LmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLm1lZGFsUmVkLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLm1lZGFsQmx1ZS5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5tZWRhbEdyZWVuLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLm1lZGFsUmVkLnBvc2l0aW9uLnNldCg1MDUsIDUxMCk7XHJcbiAgICAgICAgdGhpcy5tZWRhbEdyZWVuLnBvc2l0aW9uLnNldCg1NjUsIDQ4MCk7XHJcbiAgICAgICAgdGhpcy5tZWRhbFllbGxvdy5wb3NpdGlvbi5zZXQoNjA1LCA1MjUpO1xyXG4gICAgICAgIHRoaXMubWVkYWxCbHVlLnBvc2l0aW9uLnNldCg2NTAsIDUwMCk7XHJcbiAgICAgICAgbGV0IG1lZGFsWWVsbG93ID0gbmV3XHJcbiAgICAgICAgVHdlZW5NYXguc2V0KFt0aGlzLm1lZGFsWWVsbG93LCB0aGlzLm1lZGFsUmVkLCB0aGlzLm1lZGFsQmx1ZSwgdGhpcy5tZWRhbEdyZWVuXSwge1xyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgVHdlZW5NYXgudG8oW3RoaXMubWVkYWxZZWxsb3ddLCAwLjcsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDkyXHJcbiAgICAgICAgfSkuZGVsYXkoMS43KTtcclxuICAgICAgICBUd2Vlbk1heC50byhbdGhpcy5tZWRhbFJlZF0sIDAuNSwge1xyXG4gICAgICAgICAgICB3aWR0aDogOTIsXHJcbiAgICAgICAgICAgIGhlaWdodDogOTJcclxuICAgICAgICB9KS5kZWxheSgxLjcpO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKFt0aGlzLm1lZGFsQmx1ZV0sIDAuOCwge1xyXG4gICAgICAgICAgICB3aWR0aDogOTIsXHJcbiAgICAgICAgICAgIGhlaWdodDogOTJcclxuICAgICAgICB9KS5kZWxheSgxLjcpO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKFt0aGlzLm1lZGFsR3JlZW5dLCAwLjYsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDkyXHJcbiAgICAgICAgfSkuZGVsYXkoMS43KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWVkYWxCbHVlKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWVkYWxHcmVlbik7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1lZGFsWWVsbG93KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWVkYWxSZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRJY29uKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbk9uZSA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlc1snaWNvbi0xJ10pO1xyXG4gICAgICAgIHRoaXMuaWNvblR3byA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlc1snaWNvbi0yJ10pO1xyXG4gICAgICAgIHRoaXMuaWNvblRocmVlID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmVzWydpY29uLTMnXSk7XHJcbiAgICAgICAgdGhpcy5pY29uRm91ciA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlc1snaWNvbi00J10pO1xyXG4gICAgICAgIHRoaXMuaWNvbk9uZS5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5pY29uVHdvLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLmljb25UaHJlZS5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5pY29uRm91ci5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgVHdlZW5NYXguc2V0KFt0aGlzLmljb25PbmUsIHRoaXMuaWNvblR3bywgdGhpcy5pY29uVGhyZWUsIHRoaXMuaWNvbkZvdXJdLCB7XHJcbiAgICAgICAgICAgIHg6IDM3NSxcclxuICAgICAgICAgICAgeTogNjYwLFxyXG4gICAgICAgICAgICBhbHBoYTogMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuaWNvbkZvdXIsIDAuNSwge1xyXG4gICAgICAgICAgICBhbHBoYTogMTAwLFxyXG4gICAgICAgICAgICB4OiA0NDAsXHJcbiAgICAgICAgICAgIHk6IDQwNSxcclxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXRcclxuICAgICAgICB9KS5kZWxheSgxLjUpO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuaWNvblRocmVlLCAwLjgsIHtcclxuICAgICAgICAgICAgYWxwaGE6IDEwMCxcclxuICAgICAgICAgICAgeDogMjkwLFxyXG4gICAgICAgICAgICB5OiA0MDAsXHJcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XHJcbiAgICAgICAgfSkuZGVsYXkoMS41KTtcclxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLmljb25Ud28sIDEuMSwge1xyXG4gICAgICAgICAgICBhbHBoYTogMTAwLFxyXG4gICAgICAgICAgICB4OiAyMjUsXHJcbiAgICAgICAgICAgIHk6IDUxMCxcclxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXRcclxuICAgICAgICB9KS5kZWxheSgxLjUpO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuaWNvbk9uZSwgMS40LCB7XHJcbiAgICAgICAgICAgIGFscGhhOiAxMDAsXHJcbiAgICAgICAgICAgIHg6IDExNSxcclxuICAgICAgICAgICAgeTogNTE1LFxyXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dFxyXG4gICAgICAgIH0pLmRlbGF5KDEuNSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmljb25Ud28pO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5pY29uT25lKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuaWNvbkZvdXIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5pY29uVGhyZWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRUaXRsZSgpIHtcclxuICAgICAgICBsZXQgdGl0bGUgPSBuZXcgVGl0bGUodGhpcy50ZXh0dXJlc1snY2FudmFzLXRpdGxlJ10sIHt4OiAzNzUsIHk6IDU2MH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aXRsZS5ydW4oNjYwKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldENhdGNoKCkge1xyXG4gICAgICAgIGxldCBjYXRjaEJnID0gbmV3IENhdGNoKHRoaXMudGV4dHVyZXNbJ2NhdGNoLWJnJ10sIHt4OiAtMzc1LCB5OiA5MTUsIGR1cmF0aW9uOiAwLjE1fSk7XHJcbiAgICAgICAgbGV0IGNhdGNoVGV4dDEgPSBuZXcgQ2F0Y2godGhpcy50ZXh0dXJlc1snY2F0Y2gtdGV4dDEnXSwge3g6IC0xMDAsIHk6IDk4MCwgZHVyYXRpb246IDAuMTV9KTtcclxuICAgICAgICBsZXQgY2F0Y2hUZXh0MiA9IG5ldyBDYXRjaCh0aGlzLnRleHR1cmVzWydjYXRjaC10ZXh0MiddLCB7eDogLTI0NSwgeTogOTU1LCBkdXJhdGlvbjogMC4xNX0pO1xyXG4gICAgICAgIGxldCBjYXRjaFRleHQzID0gbmV3IENhdGNoKHRoaXMudGV4dHVyZXNbJ2NhdGNoLXRleHQzJ10sIHt4OiAyNTAsIHk6IDkwMCwgZHVyYXRpb246IDAuM30pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYXRjaEJnLnJ1bigzNzUsIDg4NSk7XHJcbiAgICAgICAgICAgIGNhdGNoVGV4dDEucnVuKDEwMCwgOTE1KTtcclxuICAgICAgICAgICAgY2F0Y2hUZXh0Mi5ydW4oMjQ1LCA5MDApO1xyXG4gICAgICAgIH0sIDI1MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYXRjaFRleHQzLnJ1blNob3coNTIwLCA4NzApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB0aGlzLlJhbmdlKDMwMCwgNzUwKVxyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSB0aGlzLlJhbmdlKDgyMCwgOTIwKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFyID0gbmV3IFN0YXIodGhpcy50ZXh0dXJlc1snc3RhciddLCB7c2NhbGU6IDEuNSwgZHVyYXRpb246IDAuNSwgeCwgeSwgZGVsYXk6IDMuNX0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChzdGFyLnJlcGVhdC5iaW5kKHN0YXIpLCAyMjAwICsgaSAqIDUwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3Rhcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyNzAwKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKGNhdGNoQmcpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY2F0Y2hUZXh0Myk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChjYXRjaFRleHQyKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKGNhdGNoVGV4dDEpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9BbmltYXRpb25zL01haW5DYW52YXMuanMiLCJpbXBvcnQge1R3ZWVuTWF4LCBQb3dlcjN9IGZyb20gJ2dzYXAnO1xyXG5cclxuaW1wb3J0IEZsYXNoIGZyb20gJy4vRmxhc2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgRmxhc2gge1xyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgcHJvcHMpIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlLCBwcm9wcyk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb3BzLCB7XHJcbiAgICAgICAgICAgIHg6IDM3NSxcclxuICAgICAgICAgICAgeTogMzc1LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgYWxwaGE6IDBcclxuICAgICAgICB9LCBwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQocHJvcHMueCwgcHJvcHMueSk7XHJcbiAgICAgICAgLy9Ud2Vlbk1heC5zZXQodGhpcywge2FscGhhOiBwcm9wcy5hbHBoYX0pO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSBwcm9wcy5hbHBoYTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oZW5kUG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcywgdGhpcy5wcm9wcy5kdXJhdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgYWxwaGE6IDEwMCwgeDogZW5kUG9pbnQsIGVhc2U6IFBvd2VyMy5lYXNlT3V0LCBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FuaW1hdGlvbnMvQ2hhcmFjdGVyLmpzIiwiaW1wb3J0IHtUd2Vlbk1heCwgQm91bmNlfSBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCBGbGFzaCBmcm9tICcuL0ZsYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgRmxhc2gge1xyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgcHJvcHMpIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlLCBwcm9wcyk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb3BzLCB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgIGFscGhhOiAwXHJcbiAgICAgICAgfSwgcHJvcHMpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHByb3BzLngsIHByb3BzLnkpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSBwcm9wcy5hbHBoYTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oZW5kUG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcywgdGhpcy5wcm9wcy5kdXJhdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgYWxwaGE6IDEwMCwgeTogZW5kUG9pbnQsIGVhc2U6IEJvdW5jZS5lYXNlT3V0LCBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9BbmltYXRpb25zL1RpdGxlLmpzIiwiaW1wb3J0IHtUd2Vlbk1heCwgQmFja30gZnJvbSAnZ3NhcCc7XHJcblxyXG5pbXBvcnQgQmx1ciBmcm9tICcuL0JsdXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhdGNoIGV4dGVuZHMgQmx1ciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmUsIHByb3BzKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucHJvcHMsIHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDFcclxuICAgICAgICB9LCBwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5wcm9wcy54LCB0aGlzLnByb3BzLnkpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMsIHRoaXMucHJvcHMuZHVyYXRpb24sIHt4OiB4LCB5OiB5fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuU2hvdyh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMsIHRoaXMucHJvcHMuZHVyYXRpb24sIHtcclxuICAgICAgICAgICAgICAgIGFscGhhOiAxMDAsIHg6IHgsIHk6IHksIGVhc2U6IEJhY2suZWFzZU91dC5jb25maWcoMS4yKSwgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkJsdXJSZXBlYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9DYXRjaC5qcyIsImltcG9ydCB7R3JhcGhpY3MsIFNwcml0ZX0gZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7VHdlZW5NYXh9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQge0Ryb3BTaGFkb3dGaWx0ZXJ9IGZyb20gJ0BwaXhpL2ZpbHRlci1kcm9wLXNoYWRvdyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyIGV4dGVuZHMgU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmUsIHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBkdXJhdGlvbkZsYXNoOiAwLjNcclxuICAgICAgICB9LCBwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmx1cigpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBuZXcgRHJvcFNoYWRvd0ZpbHRlcih7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweEZGRkZGRixcclxuICAgICAgICAgICAgYWxwaGE6IDEsXHJcbiAgICAgICAgICAgIGJsdXI6IDMsXHJcbiAgICAgICAgICAgIHF1YWxpdHk6IDVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbZmlsdGVyXTtcclxuICAgICAgICBjb25zdCBncmFwID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICAgICAgZ3JhcC5iZWdpbkZpbGwoMHhGRkZGRkYpO1xyXG4gICAgICAgIGdyYXAuZHJhd1JlY3QoLXRoaXMud2lkdGggLyAyLCAwLCAxNTAsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBncmFwLnBpdm90LnNldCgyNSwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICBjb25zdCBsaWdodEZpbHRlciA9IG5ldyBEcm9wU2hhZG93RmlsdGVyKHtcclxuICAgICAgICAgICAgY29sb3I6IDB4RkZGRkZGLFxyXG4gICAgICAgICAgICBhbHBoYTogMSxcclxuICAgICAgICAgICAgYmx1cjogMTAsXHJcbiAgICAgICAgICAgIHF1YWxpdHk6IDEwLFxyXG4gICAgICAgICAgICBzaGFkb3dPbmx5OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ3JhcC5maWx0ZXJzID0gW2xpZ2h0RmlsdGVyXTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKGdyYXApO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShuZXh0ID0+IHtcclxuICAgICAgICAgICAgZ3JhcC54ID0gLTE1MDtcclxuICAgICAgICAgICAgZ3JhcC5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKGdyYXAsIHRoaXMucHJvcHMuZHVyYXRpb25GbGFzaCAqIDAuMSwge2FscGhhOiAxfSk7XHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKGdyYXAsIHRoaXMucHJvcHMuZHVyYXRpb25GbGFzaCwge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy53aWR0aCArIDE1MCwgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBncmFwLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZpbHRlci5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKGZpbHRlciwgdGhpcy5wcm9wcy5kdXJhdGlvbkZsYXNoICogMC41LCB7YWxwaGE6IDF9KTtcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8oZmlsdGVyLCB0aGlzLnByb3BzLmR1cmF0aW9uRmxhc2ggKiAyLCB7XHJcbiAgICAgICAgICAgICAgICBhbHBoYTogMCwgZGVsYXk6IHRoaXMucHJvcHMuZHVyYXRpb25GbGFzaCAqIDAuMywgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcnVuQmx1clJlcGVhdCgpIHtcclxuICAgICAgICB0aGlzLmJsdXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVwZWF0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ydW5CbHVyUmVwZWF0KCksIDQwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9CbHVyLmpzIiwiLyohXG4gKiBAcGl4aS9maWx0ZXItZHJvcC1zaGFkb3cgLSB2Mi42LjBcbiAqIENvbXBpbGVkIFdlZCwgMjggRmViIDIwMTggMjI6MDQ6NTcgVVRDXG4gKlxuICogQHBpeGkvZmlsdGVyLWRyb3Atc2hhZG93IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqL1xuaW1wb3J0e0thd2FzZUJsdXJGaWx0ZXJ9ZnJvbVwiQHBpeGkvZmlsdGVyLWthd2FzZS1ibHVyXCI7aW1wb3J0e3NldHRpbmdzLEZpbHRlcixNYXRyaXgsREVHX1RPX1JBRCx1dGlsc31mcm9tXCJwaXhpLmpzXCI7dmFyIHZlcnRleD1cImF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcblxcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkO1xcblxcbnZvaWQgbWFpbih2b2lkKVxcbntcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24sIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuICAgIHZUZXh0dXJlQ29vcmQgPSBhVGV4dHVyZUNvb3JkO1xcbn1cIixmcmFnbWVudD1cInZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgYWxwaGE7XFxudW5pZm9ybSB2ZWMzIGNvbG9yO1xcbnZvaWQgbWFpbih2b2lkKXtcXG4gICAgdmVjNCBzYW1wbGUgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpO1xcblxcbiAgICAvLyBVbi1wcmVtdWx0aXBseSBhbHBoYSBiZWZvcmUgYXBwbHlpbmcgdGhlIGNvbG9yXFxuICAgIGlmIChzYW1wbGUuYSA+IDAuMCkge1xcbiAgICAgICAgc2FtcGxlLnJnYiAvPSBzYW1wbGUuYTtcXG4gICAgfVxcblxcbiAgICAvLyBQcmVtdWx0aXBseSBhbHBoYSBhZ2FpblxcbiAgICBzYW1wbGUucmdiID0gY29sb3IucmdiICogc2FtcGxlLmE7XFxuXFxuICAgIC8vIGFscGhhIHVzZXIgYWxwaGFcXG4gICAgc2FtcGxlICo9IGFscGhhO1xcblxcbiAgICBnbF9GcmFnQ29sb3IgPSBzYW1wbGU7XFxufVwiLERyb3BTaGFkb3dGaWx0ZXI9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gaShpKXtpJiZpLmNvbnN0cnVjdG9yIT09T2JqZWN0JiYoY29uc29sZS53YXJuKFwiRHJvcFNoYWRvd0ZpbHRlciBub3cgdXNlcyBvcHRpb25zIGluc3RlYWQgb2YgKHJvdGF0aW9uLCBkaXN0YW5jZSwgYmx1ciwgY29sb3IsIGFscGhhKVwiKSxpPXtyb3RhdGlvbjppfSx2b2lkIDAhPT1hcmd1bWVudHNbMV0mJihpLmRpc3RhbmNlPWFyZ3VtZW50c1sxXSksdm9pZCAwIT09YXJndW1lbnRzWzJdJiYoaS5ibHVyPWFyZ3VtZW50c1syXSksdm9pZCAwIT09YXJndW1lbnRzWzNdJiYoaS5jb2xvcj1hcmd1bWVudHNbM10pLHZvaWQgMCE9PWFyZ3VtZW50c1s0XSYmKGkuYWxwaGE9YXJndW1lbnRzWzRdKSksaT1PYmplY3QuYXNzaWduKHtyb3RhdGlvbjo0NSxkaXN0YW5jZTo1LGNvbG9yOjAsYWxwaGE6LjUsc2hhZG93T25seTohMSxrZXJuZWxzOm51bGwsYmx1cjoyLHF1YWxpdHk6MyxwaXhlbFNpemU6MSxyZXNvbHV0aW9uOnNldHRpbmdzLlJFU09MVVRJT059LGkpLHQuY2FsbCh0aGlzKTt2YXIgcj1pLmtlcm5lbHMsZT1pLmJsdXIsbj1pLnF1YWxpdHksbz1pLnBpeGVsU2l6ZSxsPWkucmVzb2x1dGlvbjt0aGlzLl90aW50RmlsdGVyPW5ldyBGaWx0ZXIodmVydGV4LGZyYWdtZW50KSx0aGlzLl90aW50RmlsdGVyLnVuaWZvcm1zLmNvbG9yPW5ldyBGbG9hdDMyQXJyYXkoNCksdGhpcy5fdGludEZpbHRlci5yZXNvbHV0aW9uPWwsdGhpcy5fYmx1ckZpbHRlcj1yP25ldyBLYXdhc2VCbHVyRmlsdGVyKHIpOm5ldyBLYXdhc2VCbHVyRmlsdGVyKGUsbiksdGhpcy5waXhlbFNpemU9byx0aGlzLnJlc29sdXRpb249bCx0aGlzLnRhcmdldFRyYW5zZm9ybT1uZXcgTWF0cml4O3ZhciBhPWkuc2hhZG93T25seSxzPWkucm90YXRpb24sdT1pLmRpc3RhbmNlLHA9aS5hbHBoYSxoPWkuY29sb3I7dGhpcy5zaGFkb3dPbmx5PWEsdGhpcy5yb3RhdGlvbj1zLHRoaXMuZGlzdGFuY2U9dSx0aGlzLmFscGhhPXAsdGhpcy5jb2xvcj1oLHRoaXMuX3VwZGF0ZVBhZGRpbmcoKX10JiYoaS5fX3Byb3RvX189dCksaS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSksaS5wcm90b3R5cGUuY29uc3RydWN0b3I9aTt2YXIgcj17cmVzb2x1dGlvbjp7Y29uZmlndXJhYmxlOiEwfSxkaXN0YW5jZTp7Y29uZmlndXJhYmxlOiEwfSxyb3RhdGlvbjp7Y29uZmlndXJhYmxlOiEwfSxhbHBoYTp7Y29uZmlndXJhYmxlOiEwfSxjb2xvcjp7Y29uZmlndXJhYmxlOiEwfSxrZXJuZWxzOntjb25maWd1cmFibGU6ITB9LGJsdXI6e2NvbmZpZ3VyYWJsZTohMH0scXVhbGl0eTp7Y29uZmlndXJhYmxlOiEwfSxwaXhlbFNpemU6e2NvbmZpZ3VyYWJsZTohMH19O3JldHVybiBpLnByb3RvdHlwZS5hcHBseT1mdW5jdGlvbih0LGkscixlKXt2YXIgbj10LmdldFJlbmRlclRhcmdldCgpO24udHJhbnNmb3JtPXRoaXMudGFyZ2V0VHJhbnNmb3JtLHRoaXMuX3RpbnRGaWx0ZXIuYXBwbHkodCxpLG4sITApLG4udHJhbnNmb3JtPW51bGwsdGhpcy5fYmx1ckZpbHRlci5hcHBseSh0LG4sciksITAhPT10aGlzLnNoYWRvd09ubHkmJnQuYXBwbHlGaWx0ZXIodGhpcyxpLHIsZSksdC5yZXR1cm5SZW5kZXJUYXJnZXQobil9LGkucHJvdG90eXBlLl91cGRhdGVQYWRkaW5nPWZ1bmN0aW9uKCl7dGhpcy5wYWRkaW5nPXRoaXMuZGlzdGFuY2UrMip0aGlzLmJsdXJ9LGkucHJvdG90eXBlLl91cGRhdGVUYXJnZXRUcmFuc2Zvcm09ZnVuY3Rpb24oKXt0aGlzLnRhcmdldFRyYW5zZm9ybS50eD10aGlzLmRpc3RhbmNlKk1hdGguY29zKHRoaXMuYW5nbGUpLHRoaXMudGFyZ2V0VHJhbnNmb3JtLnR5PXRoaXMuZGlzdGFuY2UqTWF0aC5zaW4odGhpcy5hbmdsZSl9LHIucmVzb2x1dGlvbi5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcmVzb2x1dGlvbn0sci5yZXNvbHV0aW9uLnNldD1mdW5jdGlvbih0KXt0aGlzLl9yZXNvbHV0aW9uPXQsdGhpcy5fdGludEZpbHRlciYmKHRoaXMuX3RpbnRGaWx0ZXIucmVzb2x1dGlvbj10KSx0aGlzLl9ibHVyRmlsdGVyJiYodGhpcy5fYmx1ckZpbHRlci5yZXNvbHV0aW9uPXQpfSxyLmRpc3RhbmNlLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9kaXN0YW5jZX0sci5kaXN0YW5jZS5zZXQ9ZnVuY3Rpb24odCl7dGhpcy5fZGlzdGFuY2U9dCx0aGlzLl91cGRhdGVQYWRkaW5nKCksdGhpcy5fdXBkYXRlVGFyZ2V0VHJhbnNmb3JtKCl9LHIucm90YXRpb24uZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYW5nbGUvREVHX1RPX1JBRH0sci5yb3RhdGlvbi5zZXQ9ZnVuY3Rpb24odCl7dGhpcy5hbmdsZT10KkRFR19UT19SQUQsdGhpcy5fdXBkYXRlVGFyZ2V0VHJhbnNmb3JtKCl9LHIuYWxwaGEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RpbnRGaWx0ZXIudW5pZm9ybXMuYWxwaGF9LHIuYWxwaGEuc2V0PWZ1bmN0aW9uKHQpe3RoaXMuX3RpbnRGaWx0ZXIudW5pZm9ybXMuYWxwaGE9dH0sci5jb2xvci5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdXRpbHMucmdiMmhleCh0aGlzLl90aW50RmlsdGVyLnVuaWZvcm1zLmNvbG9yKX0sci5jb2xvci5zZXQ9ZnVuY3Rpb24odCl7dXRpbHMuaGV4MnJnYih0LHRoaXMuX3RpbnRGaWx0ZXIudW5pZm9ybXMuY29sb3IpfSxyLmtlcm5lbHMuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JsdXJGaWx0ZXIua2VybmVsc30sci5rZXJuZWxzLnNldD1mdW5jdGlvbih0KXt0aGlzLl9ibHVyRmlsdGVyLmtlcm5lbHM9dH0sci5ibHVyLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9ibHVyRmlsdGVyLmJsdXJ9LHIuYmx1ci5zZXQ9ZnVuY3Rpb24odCl7dGhpcy5fYmx1ckZpbHRlci5ibHVyPXQsdGhpcy5fdXBkYXRlUGFkZGluZygpfSxyLnF1YWxpdHkuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JsdXJGaWx0ZXIucXVhbGl0eX0sci5xdWFsaXR5LnNldD1mdW5jdGlvbih0KXt0aGlzLl9ibHVyRmlsdGVyLnF1YWxpdHk9dH0sci5waXhlbFNpemUuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2JsdXJGaWx0ZXIucGl4ZWxTaXplfSxyLnBpeGVsU2l6ZS5zZXQ9ZnVuY3Rpb24odCl7dGhpcy5fYmx1ckZpbHRlci5waXhlbFNpemU9dH0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoaS5wcm90b3R5cGUsciksaX0oRmlsdGVyKTtleHBvcnR7RHJvcFNoYWRvd0ZpbHRlcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWx0ZXItZHJvcC1zaGFkb3cuZXMuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AcGl4aS9maWx0ZXItZHJvcC1zaGFkb3cvbGliL2ZpbHRlci1kcm9wLXNoYWRvdy5lcy5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogQHBpeGkvZmlsdGVyLWthd2FzZS1ibHVyIC0gdjIuNi4wXG4gKiBDb21waWxlZCBXZWQsIDI4IEZlYiAyMDE4IDIyOjA0OjU3IFVUQ1xuICpcbiAqIEBwaXhpL2ZpbHRlci1rYXdhc2UtYmx1ciBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKi9cbmltcG9ydHtQb2ludCxGaWx0ZXJ9ZnJvbVwicGl4aS5qc1wiO3ZhciB2ZXJ0ZXg9XCJhdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5cXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG5cXG52YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDtcXG5cXG52b2lkIG1haW4odm9pZClcXG57XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uLCAxLjApKS54eSwgMC4wLCAxLjApO1xcbiAgICB2VGV4dHVyZUNvb3JkID0gYVRleHR1cmVDb29yZDtcXG59XCIsZnJhZ21lbnQ9XCJcXG52YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDtcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcXG5cXG51bmlmb3JtIHZlYzIgdU9mZnNldDtcXG5cXG52b2lkIG1haW4odm9pZClcXG57XFxuICAgIHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxuXFxuICAgIC8vIFNhbXBsZSB0b3AgbGVmdCBwaXhlbFxcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZlYzIodlRleHR1cmVDb29yZC54IC0gdU9mZnNldC54LCB2VGV4dHVyZUNvb3JkLnkgKyB1T2Zmc2V0LnkpKTtcXG5cXG4gICAgLy8gU2FtcGxlIHRvcCByaWdodCBwaXhlbFxcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZlYzIodlRleHR1cmVDb29yZC54ICsgdU9mZnNldC54LCB2VGV4dHVyZUNvb3JkLnkgKyB1T2Zmc2V0LnkpKTtcXG5cXG4gICAgLy8gU2FtcGxlIGJvdHRvbSByaWdodCBwaXhlbFxcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZlYzIodlRleHR1cmVDb29yZC54ICsgdU9mZnNldC54LCB2VGV4dHVyZUNvb3JkLnkgLSB1T2Zmc2V0LnkpKTtcXG5cXG4gICAgLy8gU2FtcGxlIGJvdHRvbSBsZWZ0IHBpeGVsXFxuICAgIGNvbG9yICs9IHRleHR1cmUyRCh1U2FtcGxlciwgdmVjMih2VGV4dHVyZUNvb3JkLnggLSB1T2Zmc2V0LngsIHZUZXh0dXJlQ29vcmQueSAtIHVPZmZzZXQueSkpO1xcblxcbiAgICAvLyBBdmVyYWdlXFxuICAgIGNvbG9yICo9IDAuMjU7XFxuXFxuICAgIGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcbn1cIixmcmFnbWVudENsYW1wPVwiXFxudmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7XFxudW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XFxuXFxudW5pZm9ybSB2ZWMyIHVPZmZzZXQ7XFxudW5pZm9ybSB2ZWM0IGZpbHRlckNsYW1wO1xcblxcbnZvaWQgbWFpbih2b2lkKVxcbntcXG4gICAgdmVjNCBjb2xvciA9IHZlYzQoMC4wKTtcXG5cXG4gICAgLy8gU2FtcGxlIHRvcCBsZWZ0IHBpeGVsXFxuICAgIGNvbG9yICs9IHRleHR1cmUyRCh1U2FtcGxlciwgY2xhbXAodmVjMih2VGV4dHVyZUNvb3JkLnggLSB1T2Zmc2V0LngsIHZUZXh0dXJlQ29vcmQueSArIHVPZmZzZXQueSksIGZpbHRlckNsYW1wLnh5LCBmaWx0ZXJDbGFtcC56dykpO1xcblxcbiAgICAvLyBTYW1wbGUgdG9wIHJpZ2h0IHBpeGVsXFxuICAgIGNvbG9yICs9IHRleHR1cmUyRCh1U2FtcGxlciwgY2xhbXAodmVjMih2VGV4dHVyZUNvb3JkLnggKyB1T2Zmc2V0LngsIHZUZXh0dXJlQ29vcmQueSArIHVPZmZzZXQueSksIGZpbHRlckNsYW1wLnh5LCBmaWx0ZXJDbGFtcC56dykpO1xcblxcbiAgICAvLyBTYW1wbGUgYm90dG9tIHJpZ2h0IHBpeGVsXFxuICAgIGNvbG9yICs9IHRleHR1cmUyRCh1U2FtcGxlciwgY2xhbXAodmVjMih2VGV4dHVyZUNvb3JkLnggKyB1T2Zmc2V0LngsIHZUZXh0dXJlQ29vcmQueSAtIHVPZmZzZXQueSksIGZpbHRlckNsYW1wLnh5LCBmaWx0ZXJDbGFtcC56dykpO1xcblxcbiAgICAvLyBTYW1wbGUgYm90dG9tIGxlZnQgcGl4ZWxcXG4gICAgY29sb3IgKz0gdGV4dHVyZTJEKHVTYW1wbGVyLCBjbGFtcCh2ZWMyKHZUZXh0dXJlQ29vcmQueCAtIHVPZmZzZXQueCwgdlRleHR1cmVDb29yZC55IC0gdU9mZnNldC55KSwgZmlsdGVyQ2xhbXAueHksIGZpbHRlckNsYW1wLnp3KSk7XFxuXFxuICAgIC8vIEF2ZXJhZ2VcXG4gICAgY29sb3IgKj0gMC4yNTtcXG5cXG4gICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxufVxcblwiLEthd2FzZUJsdXJGaWx0ZXI9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0LHIsaSl7dm9pZCAwPT09dCYmKHQ9NCksdm9pZCAwPT09ciYmKHI9Myksdm9pZCAwPT09aSYmKGk9ITEpLGUuY2FsbCh0aGlzLHZlcnRleCxpP2ZyYWdtZW50Q2xhbXA6ZnJhZ21lbnQpLHRoaXMudW5pZm9ybXMudU9mZnNldD1uZXcgRmxvYXQzMkFycmF5KDIpLHRoaXMuX3BpeGVsU2l6ZT1uZXcgUG9pbnQsdGhpcy5waXhlbFNpemU9MSx0aGlzLl9jbGFtcD1pLHRoaXMuX2tlcm5lbHM9bnVsbCxBcnJheS5pc0FycmF5KHQpP3RoaXMua2VybmVscz10Oih0aGlzLl9ibHVyPXQsdGhpcy5xdWFsaXR5PXIpfWUmJih0Ll9fcHJvdG9fXz1lKSx0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlKSx0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj10O3ZhciByPXtrZXJuZWxzOntjb25maWd1cmFibGU6ITB9LGNsYW1wOntjb25maWd1cmFibGU6ITB9LHBpeGVsU2l6ZTp7Y29uZmlndXJhYmxlOiEwfSxxdWFsaXR5Ontjb25maWd1cmFibGU6ITB9LGJsdXI6e2NvbmZpZ3VyYWJsZTohMH19O3JldHVybiB0LnByb3RvdHlwZS5hcHBseT1mdW5jdGlvbihlLHQscixpKXt2YXIgbyxuPXRoaXMucGl4ZWxTaXplLngvdC5zaXplLndpZHRoLGw9dGhpcy5waXhlbFNpemUueS90LnNpemUuaGVpZ2h0O2lmKDE9PT10aGlzLl9xdWFsaXR5fHwwPT09dGhpcy5fYmx1cilvPXRoaXMuX2tlcm5lbHNbMF0rLjUsdGhpcy51bmlmb3Jtcy51T2Zmc2V0WzBdPW8qbix0aGlzLnVuaWZvcm1zLnVPZmZzZXRbMV09bypsLGUuYXBwbHlGaWx0ZXIodGhpcyx0LHIsaSk7ZWxzZXtmb3IodmFyIHUscz1lLmdldFJlbmRlclRhcmdldCghMCksYT10LGY9cyxwPXRoaXMuX3F1YWxpdHktMSx4PTA7eDxwO3grKylvPXRoaXMuX2tlcm5lbHNbeF0rLjUsdGhpcy51bmlmb3Jtcy51T2Zmc2V0WzBdPW8qbix0aGlzLnVuaWZvcm1zLnVPZmZzZXRbMV09bypsLGUuYXBwbHlGaWx0ZXIodGhpcyxhLGYsITApLHU9YSxhPWYsZj11O289dGhpcy5fa2VybmVsc1twXSsuNSx0aGlzLnVuaWZvcm1zLnVPZmZzZXRbMF09bypuLHRoaXMudW5pZm9ybXMudU9mZnNldFsxXT1vKmwsZS5hcHBseUZpbHRlcih0aGlzLGEscixpKSxlLnJldHVyblJlbmRlclRhcmdldChzKX19LHQucHJvdG90eXBlLl9nZW5lcmF0ZUtlcm5lbHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9ibHVyLHQ9dGhpcy5fcXVhbGl0eSxyPVtlXTtpZihlPjApZm9yKHZhciBpPWUsbz1lL3Qsbj0xO248dDtuKyspaS09byxyLnB1c2goaSk7dGhpcy5fa2VybmVscz1yfSxyLmtlcm5lbHMuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2tlcm5lbHN9LHIua2VybmVscy5zZXQ9ZnVuY3Rpb24oZSl7QXJyYXkuaXNBcnJheShlKSYmZS5sZW5ndGg+MD8odGhpcy5fa2VybmVscz1lLHRoaXMuX3F1YWxpdHk9ZS5sZW5ndGgsdGhpcy5fYmx1cj1NYXRoLm1heC5hcHBseShNYXRoLGUpKToodGhpcy5fa2VybmVscz1bMF0sdGhpcy5fcXVhbGl0eT0xKX0sci5jbGFtcC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fY2xhbXB9LHIucGl4ZWxTaXplLnNldD1mdW5jdGlvbihlKXtcIm51bWJlclwiPT10eXBlb2YgZT8odGhpcy5fcGl4ZWxTaXplLng9ZSx0aGlzLl9waXhlbFNpemUueT1lKTpBcnJheS5pc0FycmF5KGUpPyh0aGlzLl9waXhlbFNpemUueD1lWzBdLHRoaXMuX3BpeGVsU2l6ZS55PWVbMV0pOmUgaW5zdGFuY2VvZiBQb2ludD8odGhpcy5fcGl4ZWxTaXplLng9ZS54LHRoaXMuX3BpeGVsU2l6ZS55PWUueSk6KHRoaXMuX3BpeGVsU2l6ZS54PTEsdGhpcy5fcGl4ZWxTaXplLnk9MSl9LHIucGl4ZWxTaXplLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9waXhlbFNpemV9LHIucXVhbGl0eS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcXVhbGl0eX0sci5xdWFsaXR5LnNldD1mdW5jdGlvbihlKXt0aGlzLl9xdWFsaXR5PU1hdGgubWF4KDEsTWF0aC5yb3VuZChlKSksdGhpcy5fZ2VuZXJhdGVLZXJuZWxzKCl9LHIuYmx1ci5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYmx1cn0sci5ibHVyLnNldD1mdW5jdGlvbihlKXt0aGlzLl9ibHVyPWUsdGhpcy5fZ2VuZXJhdGVLZXJuZWxzKCl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHQucHJvdG90eXBlLHIpLHR9KEZpbHRlcik7ZXhwb3J0e0thd2FzZUJsdXJGaWx0ZXJ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsdGVyLWthd2FzZS1ibHVyLmVzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHBpeGkvZmlsdGVyLWthd2FzZS1ibHVyL2xpYi9maWx0ZXIta2F3YXNlLWJsdXIuZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7VHdlZW5NYXgsIFBvd2VyMX0gZnJvbSAnZ3NhcCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhciBleHRlbmRzIFNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xyXG4gICAgICAgIHByb3BzID0gdGhpcy5wcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgIGRlbGF5OiAxLFxyXG4gICAgICAgICAgICB4OiAzNzUsXHJcbiAgICAgICAgICAgIHk6IDM3NVxyXG4gICAgICAgIH0sIHByb3BzKTtcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnNjYWxlLnNldCgwKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChwcm9wcy54LCBwcm9wcy55KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KDApO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgobmV4dCkgPT4ge1xyXG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLnNjYWxlLCB0aGlzLnByb3BzLmR1cmF0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnByb3BzLnNjYWxlLCB5OiB0aGlzLnByb3BzLnNjYWxlLCBlYXNlOiBQb3dlcjEuZWFzZU91dCwgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuc2NhbGUsIHRoaXMucHJvcHMuZHVyYXRpb24sIHt4OiAwLCB5OiAwLCBlYXNlOiBQb3dlcjEuZWFzZUluLCBvbkNvbXBsZXRlOiBuZXh0fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcnVuRG91YmxlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShuZXh0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ydW4oKS50aGVuKCgpID0+IHRoaXMucnVuKCkudGhlbihuZXh0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwZWF0KCkge1xyXG4gICAgICAgIHRoaXMucnVuKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcGVhdFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVwZWF0KCksIHRoaXMucHJvcHMuZGVsYXkgKiAxMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wUmVwZWF0KCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXBlYXRUaW1lb3V0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FuaW1hdGlvbnMvU3Rhci5qcyIsImltcG9ydCB7VHdlZW5NYXh9IGZyb20gJ2dzYXAnO1xyXG5cclxuaW1wb3J0IEZsYXNoIGZyb20gJy4vRmxhc2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyb3duIGV4dGVuZHMgRmxhc2gge1xyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgcHJvcHMpIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlLCBwcm9wcyk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb3BzLCB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxXHJcbiAgICAgICAgfSwgcHJvcHMpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHRoaXMucHJvcHMueCwgdGhpcy5wcm9wcy55KTtcclxuICAgICAgICB0aGlzLmFscGhhID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBydW4oZW5kUG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcywgdGhpcy5wcm9wcy5kdXJhdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgYWxwaGE6IDEwMCwgeTogZW5kUG9pbnQsIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR3b1llYXJzIGV4dGVuZHMgRmxhc2gge1xyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgcHJvcHMpIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlLCBwcm9wcyk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb3BzLCB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxXHJcbiAgICAgICAgfSwgcHJvcHMpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHRoaXMucHJvcHMueCwgdGhpcy5wcm9wcy55KTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKHcsIGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcywgdGhpcy5wcm9wcy5kdXJhdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHcsIGhlaWdodDogaCwgZWFzZTogRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygyLjUsIDAuNzUpLCBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FuaW1hdGlvbnMvQW5uaXZlcnNhcnkuanMiLCJpbXBvcnQge0NvbnRhaW5lciwgU3ByaXRlLCBsb2FkZXJzfSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0IHtUd2Vlbk1heH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5pbXBvcnQgTWlkZGxlVGV4dDIgZnJvbSAnLi9NaWRkbGVUZXh0Mic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWlkZGxlQ2FudmFzIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBsb2FkZXJzLkxvYWRlcigpXHJcbiAgICAgICAgICAgIC5hZGQoJ21jMScsIHByb3BzLm1jMSlcclxuICAgICAgICAgICAgLmxvYWQodGhpcy5zZXR1cC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSB0aGlzLmxvYWRlci5yZXNvdXJjZXMubWMxLnRleHR1cmVzO1xyXG4gICAgICAgIHRoaXMuX3NldEFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3NldFRleHQxKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0TWFwKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbSgpO1xyXG4gICAgICAgIHRoaXMuX3NldEFycm93KCk7XHJcbiAgICAgICAgdGhpcy5fc2V0VGV4dDIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QWxsKCkge1xyXG4gICAgICAgIHRoaXMubWlkZGxlQWxsID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmVzWydtaWRkbGUtYWxsJ10pO1xyXG4gICAgICAgIHRoaXMubWlkZGxlQWxsLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLm1pZGRsZUFsbC5wb3NpdGlvbi5zZXQoMTYwLCAwKTtcclxuICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy5taWRkbGVBbGwsIHtcclxuICAgICAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5taWRkbGVBbGwsIDAuNSwge1xyXG4gICAgICAgICAgICBhbHBoYTogMTAwLFxyXG4gICAgICAgICAgICB5OiAxMDAsXHJcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pZGRsZUFsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldFRleHQxKCkge1xyXG4gICAgICAgIHRoaXMubWlkZGxlVGV4dDEgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZXNbJ21pZGRsZS10ZXh0MSddKTtcclxuICAgICAgICB0aGlzLm1pZGRsZVRleHQxLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLm1pZGRsZVRleHQxLnBvc2l0aW9uLnNldCg1MDAsIDApO1xyXG4gICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLm1pZGRsZVRleHQxLCB7XHJcbiAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMubWlkZGxlVGV4dDEsIDAuMywge1xyXG4gICAgICAgICAgICBhbHBoYTogMTAwLFxyXG4gICAgICAgICAgICB5OiA4MCxcclxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXRcclxuICAgICAgICB9KS5kZWxheSgwLjMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5taWRkbGVUZXh0MSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEFycm93KCkge1xyXG4gICAgICAgIHRoaXMubWlkZGxlQXJyb3cgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZXNbJ21pZGRsZS1hcnJvdyddKTtcclxuICAgICAgICB0aGlzLm1pZGRsZUFycm93LmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLm1pZGRsZUFycm93LnBvc2l0aW9uLnNldCgwLCAyMzApO1xyXG4gICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLm1pZGRsZUFycm93LCB7XHJcbiAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMubWlkZGxlQXJyb3csIDAuNSwge1xyXG4gICAgICAgICAgICBhbHBoYTogMTAwLFxyXG4gICAgICAgICAgICB4OiAxNDAsXHJcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XHJcbiAgICAgICAgfSkuZGVsYXkoMC41KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlkZGxlQXJyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRNYXAoKSB7XHJcbiAgICAgICAgdGhpcy5taWRkbGVNYXAgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZXNbJ21pZGRsZS1tYXAnXSk7XHJcbiAgICAgICAgdGhpcy5taWRkbGVNYXAuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMubWlkZGxlTWFwLnBvc2l0aW9uLnNldCg0NTAsIDQwKTtcclxuICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy5taWRkbGVNYXAsIHtcclxuICAgICAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5taWRkbGVNYXAsIDAuNSwge1xyXG4gICAgICAgICAgICBhbHBoYTogMTAwLFxyXG4gICAgICAgICAgICB5OiAzMjAsXHJcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XHJcbiAgICAgICAgfSkuZGVsYXkoMC41KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlkZGxlTWFwKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0SXRlbSgpIHtcclxuICAgICAgICB0aGlzLm1pZGRsZUl0ZW0xID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmVzWydtaWRkbGUtbWFwLWl0ZW0xJ10pO1xyXG4gICAgICAgIHRoaXMubWlkZGxlSXRlbTIgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZXNbJ21pZGRsZS1tYXAtaXRlbTInXSk7XHJcbiAgICAgICAgdGhpcy5taWRkbGVJdGVtMyA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlc1snbWlkZGxlLW1hcC1pdGVtMyddKTtcclxuICAgICAgICB0aGlzLm1pZGRsZUl0ZW00ID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmVzWydtaWRkbGUtbWFwLWl0ZW00J10pO1xyXG4gICAgICAgIHRoaXMubWlkZGxlSXRlbTUgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZXNbJ21pZGRsZS1tYXAtaXRlbTUnXSk7XHJcbiAgICAgICAgdGhpcy5taWRkbGVJdGVtNiA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlc1snbWlkZGxlLW1hcC1pdGVtNiddKTtcclxuICAgICAgICB0aGlzLm1pZGRsZUl0ZW03ID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmVzWydtaWRkbGUtbWFwLWl0ZW03J10pO1xyXG4gICAgICAgIHRoaXMubWlkZGxlSXRlbTEucG9zaXRpb24uc2V0KDE4NSwgMTgwKTtcclxuICAgICAgICB0aGlzLm1pZGRsZUl0ZW0yLnBvc2l0aW9uLnNldCgzNTAsIDE3MCk7XHJcbiAgICAgICAgdGhpcy5taWRkbGVJdGVtMy5wb3NpdGlvbi5zZXQoNDcwLCAxOTApO1xyXG4gICAgICAgIHRoaXMubWlkZGxlSXRlbTQucG9zaXRpb24uc2V0KDYwMCwgMTcwKTtcclxuICAgICAgICB0aGlzLm1pZGRsZUl0ZW01LnBvc2l0aW9uLnNldCgyMTAsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5taWRkbGVJdGVtNi5wb3NpdGlvbi5zZXQoMzQwLCAzMDApO1xyXG4gICAgICAgIHRoaXMubWlkZGxlSXRlbTcucG9zaXRpb24uc2V0KDQ2MCwgMjgwKTtcclxuICAgICAgICBUd2Vlbk1heC5zZXQoW3RoaXMubWlkZGxlSXRlbTEsIHRoaXMubWlkZGxlSXRlbTIsIHRoaXMubWlkZGxlSXRlbTMsIHRoaXMubWlkZGxlSXRlbTQsIHRoaXMubWlkZGxlSXRlbTUsIHRoaXMubWlkZGxlSXRlbTYsIHRoaXMubWlkZGxlSXRlbTddLCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9KTtcclxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLm1pZGRsZUl0ZW0xLCAwLjMsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE3NixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXHJcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XHJcbiAgICAgICAgfSkuZGVsYXkoMC43KTtcclxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLm1pZGRsZUl0ZW0yLCAwLjMsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEzMSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMzEsXHJcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XHJcbiAgICAgICAgfSkuZGVsYXkoMC43NSk7XHJcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5taWRkbGVJdGVtMywgMC4zLCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDYsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTE5LFxyXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dFxyXG4gICAgICAgIH0pLmRlbGF5KDAuOCk7XHJcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5taWRkbGVJdGVtNCwgMC4zLCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTMxLFxyXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dFxyXG4gICAgICAgIH0pLmRlbGF5KDAuODUpO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMubWlkZGxlSXRlbTUsIDAuMywge1xyXG4gICAgICAgICAgICB3aWR0aDogMTMxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMSxcclxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXRcclxuICAgICAgICB9KS5kZWxheSgwLjkpO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMubWlkZGxlSXRlbTYsIDAuMywge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIzLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyNSxcclxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXRcclxuICAgICAgICB9KS5kZWxheSgwLjk1KTtcclxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLm1pZGRsZUl0ZW03LCAwLjMsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIxNSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNzMsXHJcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XHJcbiAgICAgICAgfSkuZGVsYXkoMSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pZGRsZUl0ZW0xKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlkZGxlSXRlbTIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5taWRkbGVJdGVtMyk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pZGRsZUl0ZW00KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlkZGxlSXRlbTUpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5taWRkbGVJdGVtNik7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pZGRsZUl0ZW03KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0VGV4dDIoKSB7XHJcbiAgICAgICAgbGV0IG1pZGRsZVRleHQyID0gbmV3IE1pZGRsZVRleHQyKHRoaXMudGV4dHVyZXNbJ21pZGRsZS10ZXh0MiddLCB7eDogMzc1LCB5OiA0MDB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbWlkZGxlVGV4dDIucnVuKDQ1MCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChtaWRkbGVUZXh0Mik7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FuaW1hdGlvbnMvTWlkZGxlQ2FudmFzLmpzIiwiaW1wb3J0IHtUd2Vlbk1heCwgQm91bmNlfSBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCBGbGFzaCBmcm9tICcuL0ZsYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pZGRsZVRleHQyIGV4dGVuZHMgRmxhc2gge1xyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgcHJvcHMpIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlLCBwcm9wcyk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb3BzLCB7XHJcbiAgICAgICAgICAgIHg6IDM3NSxcclxuICAgICAgICAgICAgeTogMzc1LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgYWxwaGE6IDBcclxuICAgICAgICB9LCBwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5wcm9wcy54LCB0aGlzLnByb3BzLnkpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSB0aGlzLnByb3BzLmFscGhhO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bihlbmRQb2ludCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgobmV4dCkgPT4ge1xyXG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLCB0aGlzLnByb3BzLmR1cmF0aW9uICogMC41LCB7XHJcbiAgICAgICAgICAgICAgICBhbHBoYTogMTAwLCB5OiBlbmRQb2ludCwgZWFzZTogQm91bmNlLmVhc2VPdXQsIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9NaWRkbGVUZXh0Mi5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3Nhc3MvY29tbW9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFBJWEk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQSVhJXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7U3ByaXRlfSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0IHtUd2Vlbk1heCwgUG93ZXIwfSBmcm9tICdnc2FwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoIGV4dGVuZHMgU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmUsIHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBkdXJhdGlvbkZsYXNoOiAwLjNcclxuICAgICAgICB9LCBwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxhc2goKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gbmV3IFBJWEkuZmlsdGVycy5Db2xvck1hdHJpeEZpbHRlcigpO1xyXG4gICAgICAgIGZpbHRlci5tYXRyaXggPSBbXHJcbiAgICAgICAgICAgIDEsIDEsIDEsIDEsIDEsXHJcbiAgICAgICAgICAgIDEsIDEsIDEsIDEsIDEsXHJcbiAgICAgICAgICAgIDEsIDEsIDEsIDEsIDEsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsIDBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZpbHRlci5hbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gW2ZpbHRlcl07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShuZXh0ID0+IHtcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8oZmlsdGVyLCB0aGlzLnByb3BzLmR1cmF0aW9uRmxhc2ggKiAwLjMsIHtcclxuICAgICAgICAgICAgICAgIGFscGhhOiAxLCBlYXNlOiBQb3dlcjAuZWFzZUluLCBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVHdlZW5NYXgudG8oZmlsdGVyLCB0aGlzLnByb3BzLmR1cmF0aW9uRmxhc2ggKiAwLjcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IDAsIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FuaW1hdGlvbnMvRmxhc2guanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IHRocm90dGxlRnVuYyA9IHJlcXVpcmUoJ2xvZGFzaC90aHJvdHRsZScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGV0ZWN0RGV2aWNlKCkge1xyXG4gICAgICAgIGxldCBkZXZpY2UgPSB7XHJcbiAgICAgICAgICAgIGlzX3BjOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNfc3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcF9vczogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IFVBID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBwbGF0Zm9ybV9yZWdleGVzID0ge1xyXG4gICAgICAgICAgICBpb3M6IC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8sXHJcbiAgICAgICAgICAgIGFuZHJvaWQ6IC9hbmRyb2lkfGJsYWNrYmVycnkvLFxyXG4gICAgICAgICAgICB3aW5kb3dzX3Bob25lOiAvd2luZG93cyBwaG9uZS8sXHJcbiAgICAgICAgICAgIG90aGVyOiAvb3BlcmEgbWluaXxzaWxrL1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiAgcGxhdGZvcm1fcmVnZXhlcykge1xyXG4gICAgICAgICAgICBpZiAocGxhdGZvcm1fcmVnZXhlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHBsYXRmb3JtX3JlZ2V4ZXNba2V5XS50ZXN0KFVBKSkge1xyXG4gICAgICAgICAgICAgICAgZGV2aWNlLmlzX3NwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRldmljZS5zcF9vcyA9IGtleTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGV2aWNlLmlzX3BjID0gIWRldmljZS5pc19zcDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRldmljZTtcclxuICAgIH0sXHJcblxyXG4gICAgdGhyb3R0bGVGdW5jOiB0aHJvdHRsZUZ1bmMsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsIGNhbGxiYWNrIGFmdGVyIG4gdGltZXMgdHJpZ2dlcmVkXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjb3VudGluZ0NhbGxiYWNrXVxyXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XHJcbiAgICAgKi9cclxuICAgIGFmdGVyRnVuYzogZnVuY3Rpb24gKG4sIGNhbGxiYWNrLCBjb3VudGluZ0NhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGkgPSAxO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBuKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGluZ0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRpbmdDYWxsYmFjayhpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9VdGlsLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=