import Util from './Util';

/*
|--------------------------------------------------------------------------
| Events
|--------------------------------------------------------------------------
*/

let eventIndex = 0;
const eventDefaultOptions = {
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
        setTimeout((function (cb, args) {
            return function () {
                cb.apply(null, args);
            };
        })(callback.bind(bound), args), delay)
    } else {
        callback.apply(bound, args);
    }
}

export default class App {
    constructor() {
        this.$ref = {};

        this.events = {};
        this.device = Util.detectDevice();
    }

    /**
     * @param {string} eventName
     * @param {function} callback
     * @param {{}} [options = {}]
     */
    on(eventName, callback, options) {
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
                console.error(`Call event throws an error: event name: ${eventName}, event id: immediate trigger`);
                console.error(e);
            }

            return;
        }

        if (!this.events.hasOwnProperty(eventName)) {
            this.events[eventName] = {};
        }

        let eventId = eventIndex++;

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
    triggerEvent(eventName) {
        if (!this.events[eventName]) {
            return this;
        }

        let args = [].slice.apply(arguments);
        let event = this.events[eventName];

        for (let eventID of Object.keys(event)) {
            let eventDetail = event[eventID];

            if (eventDetail.options.once) {
                this.events[eventName][eventDetail.id] = null;
                delete this.events[eventName][eventDetail.id];
            }

            try {
                executeCallback(
                    eventDetail.callback,
                    args,
                    eventDetail.options.bound || this,
                    eventDetail.options.delay
                );
            } catch (e) {
                console.error(`Call event throws an error: event name: ${eventName}, event id: ${eventDetail.id}`);
                console.error(e);
            }
        }

        return this;
    }

    listenSystemEvent() {
        let listener = function () {
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
    onReady(cb, options) {
        this.on('ready', cb, options);

        return this;
    }

    /**
     * Add callback when page loaded (the page is fully loaded)
     * @param {function} cb
     * @param {{}} [options={}]
     * @return {App}
     */
    onLoaded(cb, options) {
        this.on('loaded', cb, options);

        return this;
    }

    /**
     * Add callback when app init
     * @param {function} cb
     * @param {{}} [options={}]
     * @return {App}
     */
    onInit(cb, options) {
        this.on('init', cb, options);

        return this;
    }

    init() {
        this.triggerEvent('init');
    }
}
