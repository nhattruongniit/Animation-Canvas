let triggerIdIndex = 0;

class Trigger {
    constructor(element, options) {
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

    left() {
        return this.$element.getBoundingClientRect().left;
    }

    right() {
        return this.$element.getBoundingClientRect().right;
    }

    top() {
        return this.$element.getBoundingClientRect().top
    }

    bottom() {
        return this.$element.getBoundingClientRect().bottom;
    }

    width() {
        return this.$element.offsetWidth;
    }

    height() {
        return this.$element.offsetHeight;
    };

    xOffset(goingLeft) {
        let offset = this._xOffset;

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

    yOffset(goingUp) {
        let offset = this._yOffset;

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

    removeMyself() {
        if (this.scrollTrigger) {
            this.scrollTrigger.destroyByID(this.id);
        }
    }

    reset() {
        let event = document.createEvent('Event');

        event.initEvent('reset-scroll-trigger', true, true);

        this.$element.dispatchEvent(event);
    }

    init() {
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

    isTriggerable() {
        if (!this.options.hasOwnProperty('isTriggerable')) {
            return true;
        }

        let isTriggerable = this.options.isTriggerable;

        return typeof isTriggerable !== 'function' ? !!isTriggerable : isTriggerable.call(this);
    }

    isVisible() {
        return this.status === Trigger.STATUS.VISIBLE;
    }

    isInvisible() {
        return this.status === Trigger.STATUS.INVISIBLE;
    }

    toggle(is_visible) {
        if (is_visible && this.isVisible() || !is_visible && this.isInvisible()) {
            return;
        }

        this.trigered++;
        this.status = is_visible ? Trigger.STATUS.VISIBLE : Trigger.STATUS.INVISIBLE;

        this.options.onHey.call(this, is_visible, this);
    }
}

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

    onHey: function (is_visible) {
        //
    }
};

class ScrollTrigger {
    constructor(triggerDefaultOptions) {
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
    addElement(element, options) {
        if (typeof options === "function") {
            options = {
                onHey: options
            };
        }

        let trigger = new Trigger(element, Object.assign({}, this.triggerDefaultOptions, options || {}));
        const triggerID = trigger.id;

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
    addElements(elements, options) {
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

    static getElementTriggerID(element) {
        return element.hasOwnProperty('scroll_trigger_id') ? element.scroll_trigger_id : null;
    }

    /**
     * @param {HTMLElement} element
     * @return {Trigger|null}
     */
    getTrigger(element) {
        let triggerID = self.getElementTriggerID(element);

        if (triggerID && this.triggers.hasOwnProperty(triggerID)) {
            return this.triggers[triggerID];
        }

        return null;
    }

    /**
     * Removes a Trigger by its HTMLElement object, e.g via querySelector()
     * @return {ScrollTrigger}
     */
    destroy(element) {
        let triggerID = self.getElementTriggerID(element);

        if (triggerID && this.triggers.hasOwnProperty(triggerID)) {
            delete this.triggers[triggerID];
        }

        return this;
    }

    /**
     * @param {*} id
     */
    destroyByID(id) {
        if (!this.triggers[id]) {
            return;
        }

        this.triggers[id].$element.scroll_trigger_id = undefined;
        delete this.triggers[id];
    }

    destroyAll() {
        this.triggers = [];

        return this;
    }

    reset(element) {
        let trigger = this.getTrigger(element);

        if (trigger) {
            trigger.reset();
        }

        return this;
    }

    /**
     * Gets called everytime the browser is ready for it, or when the user
     * scrolls (on legacy browsers)
     */
    scroll() {
        // FF and IE use the documentElement instead of body
        let currentTop = !this.bindElement.scrollTop ? document.documentElement.scrollTop : this.bindElement.scrollTop;
        let currentLeft = !this.bindElement.scrollLeft ? document.documentElement.scrollLeft : this.bindElement.scrollLeft;

        // if the user scrolled
        let isScrolled = this.previousScroll.left !== currentLeft || this.previousScroll.top !== currentTop;

        if (!isScrolled) {
            // return;
        }

        let windowWidth = this.scrollElement.innerWidth || this.scrollElement.offsetWidth;
        let windowHeight = this.scrollElement.innerHeight || this.scrollElement.offsetHeight;

        // console.log('win width', windowWidth, 'win height', windowHeight);

        Object.keys(this.triggers).forEach(function (triggerID) {
            let trigger = this.triggers[triggerID];

            if (!trigger.isTriggerable()) {
                return;
            }

            let triggerLeft = trigger.left();
            let triggerRight = trigger.right();
            let triggerTop = trigger.top();
            let triggerBottom = trigger.bottom();

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

            const isVisible = (triggerTop >= 0 && triggerTop < windowHeight) || (triggerTop < 0 && triggerBottom > -1);

            let callback = trigger.toggle.bind(trigger, isVisible);

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

    getScrollCallback() {
        return this.scroll.bind(this);
    }
}

export default ScrollTrigger;
