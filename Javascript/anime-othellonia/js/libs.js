/**
 * @license FastClick: polyfill to remove click delays on browsers with touch UIs.

 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
 */
! function(a, eq) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        module.exports = a.document ? eq(a, true) : function(a) {
            if (!a.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return eq(a);
        };
    } else {
        eq(a);
    }
}("undefined" != typeof window ? window : this, function(context, dataAndEvents) {
    /**
     * @param {string} camelKey
     * @return {?}
     */
    function isArraylike(camelKey) {
        var value = !!camelKey && ("length" in camelKey && camelKey.length);
        var type = jQuery.type(camelKey);
        return "function" !== type && (!jQuery.isWindow(camelKey) && ("array" === type || (0 === value || "number" == typeof value && (value > 0 && value - 1 in camelKey))));
    }
    /**
     * @param {?} prop
     * @param {string} camelKey
     * @param {boolean} i
     * @return {?}
     */
    function winnow(prop, camelKey, i) {
        if (jQuery.isFunction(camelKey)) {
            return jQuery.grep(prop, function(o, header) {
                return !!camelKey.call(o, header, o) !== i;
            });
        }
        if (camelKey.nodeType) {
            return jQuery.grep(prop, function(dataAndEvents) {
                return dataAndEvents === camelKey !== i;
            });
        }
        if ("string" == typeof camelKey) {
            if (reWhitespace.test(camelKey)) {
                return jQuery.filter(camelKey, prop, i);
            }
            camelKey = jQuery.filter(camelKey, prop);
        }
        return jQuery.grep(prop, function(elem) {
            return core_indexOf.call(camelKey, elem) > -1 !== i;
        });
    }
    /**
     * @param {Object} cur
     * @param {string} dir
     * @return {?}
     */
    function sibling(cur, dir) {
        for (;
            (cur = cur[dir]) && 1 !== cur.nodeType;) {}
        return cur;
    }
    /**
     * @param {string} options
     * @return {?}
     */
    function createOptions(options) {
        var buf = {};
        return jQuery.each(options.match(core_rnotwhite) || [], function(dataAndEvents, off) {
            /** @type {boolean} */
            buf[off] = true;
        }), buf;
    }
    /**
     * @return {undefined}
     */
    function completed() {
        doc.removeEventListener("DOMContentLoaded", completed);
        context.removeEventListener("load", completed);
        jQuery.ready();
    }
    /**
     * @return {undefined}
     */
    function get() {
        this.expando = jQuery.expando + get.uid++;
    }
    /**
     * @param {Object} elem
     * @param {string} camelKey
     * @param {string} data
     * @return {?}
     */
    function dataAttr(elem, camelKey, data) {
        var pdataOld;
        if (void 0 === data && 1 === elem.nodeType) {
            if (pdataOld = "data-" + camelKey.replace(r20, "-$&").toLowerCase(), data = elem.getAttribute(pdataOld), "string" == typeof data) {
                try {
                    data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data);
                } catch (r) {}
                data_user.set(elem, camelKey, data);
            } else {
                data = void 0;
            }
        }
        return data;
    }
    /**
     * @param {string} camelKey
     * @param {?} prop
     * @param {Object} parts
     * @param {Object} t
     * @return {?}
     */
    function add(camelKey, prop, parts, t) {
        var end;
        /** @type {number} */
        var scale = 1;
        /** @type {number} */
        var o = 20;
        /** @type {function (): ?} */
        var getTarget = t ? function() {
            return t.cur();
        } : function() {
            return jQuery.css(camelKey, prop, "");
        };
        var target = getTarget();
        var unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px");
        var start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rtagName.exec(jQuery.css(camelKey, prop));
        if (start && start[3] !== unit) {
            unit = unit || start[3];
            parts = parts || [];
            /** @type {number} */
            start = +target || 1;
            do {
                /** @type {(number|string)} */
                scale = scale || ".5";
                start /= scale;
                jQuery.style(camelKey, prop, start + unit);
            } while (scale !== (scale = getTarget() / target) && (1 !== scale && --o));
        }
        return parts && (start = +start || (+target || 0), end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2], t && (t.unit = unit, t.start = start, t.end = end)), end;
    }
    /**
     * @param {Node} context
     * @param {Object} tag
     * @return {?}
     */
    function getAll(context, tag) {
        var ret = "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : "undefined" != typeof context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
    }
    /**
     * @param {(Array|NodeList)} elems
     * @param {Array} refElements
     * @return {undefined}
     */
    function setGlobalEval(elems, refElements) {
        /** @type {number} */
        var i = 0;
        var length = elems.length;
        for (; i < length; i++) {
            data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
        }
    }
    /**
     * @param {Array} elems
     * @param {Document} context
     * @param {boolean} value
     * @param {Object} values
     * @param {Array} arg
     * @return {?}
     */
    function parse(elems, context, value, values, arg) {
        var elem;
        var tmp;
        var tag;
        var wrap;
        var contains;
        var j;
        var fragment = context.createDocumentFragment();
        /** @type {Array} */
        var nodes = [];
        /** @type {number} */
        var i = 0;
        var length = elems.length;
        for (; i < length; i++) {
            if (elem = elems[i], elem || 0 === elem) {
                if ("object" === jQuery.type(elem)) {
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                } else {
                    if (rhtml.test(elem)) {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (matches.exec(elem) || ["", ""])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                        j = wrap[0];
                        for (; j--;) {
                            tmp = tmp.lastChild;
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        /** @type {string} */
                        tmp.textContent = "";
                    } else {
                        nodes.push(context.createTextNode(elem));
                    }
                }
            }
        }
        /** @type {string} */
        fragment.textContent = "";
        /** @type {number} */
        i = 0;
        for (; elem = nodes[i++];) {
            if (values && jQuery.inArray(elem, values) > -1) {
                if (arg) {
                    arg.push(elem);
                }
            } else {
                if (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), value) {
                    /** @type {number} */
                    j = 0;
                    for (; elem = tmp[j++];) {
                        if (rchecked.test(elem.type || "")) {
                            value.push(elem);
                        }
                    }
                }
            }
        }
        return fragment;
    }
    /**
     * @return {?}
     */
    function returnTrue() {
        return true;
    }
    /**
     * @return {?}
     */
    function returnFalse() {
        return false;
    }
    /**
     * @return {?}
     */
    function safeActiveElement() {
        try {
            return doc.activeElement;
        } catch (t) {}
    }
    /**
     * @param {Object} object
     * @param {Object} event
     * @param {Object} selector
     * @param {Object} data
     * @param {Object} fn
     * @param {(number|string)} deepDataAndEvents
     * @return {?}
     */
    function on(object, event, selector, data, fn, deepDataAndEvents) {
        var origFn;
        var type;
        if ("object" == typeof event) {
            if ("string" != typeof selector) {
                data = data || selector;
                selector = void 0;
            }
            for (type in event) {
                on(object, type, selector, data, event[type], deepDataAndEvents);
            }
            return object;
        }
        if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === false) {
            /** @type {function (): ?} */
            fn = returnFalse;
        } else {
            if (!fn) {
                return object;
            }
        }
        return 1 === deepDataAndEvents && (origFn = fn, fn = function(event) {
            return jQuery().off(event), origFn.apply(this, arguments);
        }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), object.each(function() {
            jQuery.event.add(this, event, fn, data, selector);
        });
    }
    /**
     * @param {Node} elem
     * @param {Object} content
     * @return {?}
     */
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    /**
     * @param {Element} elem
     * @return {?}
     */
    function restoreScript(elem) {
        return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
    }
    /**
     * @param {Element} s
     * @return {?}
     */
    function fn(s) {
        /** @type {(Array.<string>|null)} */
        var l = re.exec(s.type);
        return l ? s.type = l[1] : s.removeAttribute("type"), s;
    }
    /**
     * @param {string} src
     * @param {Object} elem
     * @return {undefined}
     */
    function cloneCopyEvent(src, elem) {
        var i;
        var valsLength;
        var type;
        var pdataOld;
        var pdataCur;
        var udataOld;
        var udataCur;
        var events;
        if (1 === elem.nodeType) {
            if (data_priv.hasData(src) && (pdataOld = data_priv.access(src), pdataCur = data_priv.set(elem, pdataOld), events = pdataOld.events)) {
                delete pdataCur.handle;
                pdataCur.events = {};
                for (type in events) {
                    /** @type {number} */
                    i = 0;
                    valsLength = events[type].length;
                    for (; i < valsLength; i++) {
                        jQuery.event.add(elem, type, events[type][i]);
                    }
                }
            }
            if (data_user.hasData(src)) {
                udataOld = data_user.access(src);
                udataCur = jQuery.extend({}, udataOld);
                data_user.set(elem, udataCur);
            }
        }
    }
    /**
     * @param {Element} src
     * @param {Element} dest
     * @return {undefined}
     */
    function fixInput(src, dest) {
        var _undefined = dest.nodeName.toLowerCase();
        if ("input" === _undefined && manipulation_rcheckableType.test(src.type)) {
            dest.checked = src.checked;
        } else {
            if (!("input" !== _undefined && "textarea" !== _undefined)) {
                dest.defaultValue = src.defaultValue;
            }
        }
    }
    /**
     * @param {Array} elements
     * @param {Object} args
     * @param {Function} callback
     * @param {?} until
     * @return {?}
     */
    function init(elements, args, callback, until) {
        /** @type {Array} */
        args = core_concat.apply([], args);
        var fragment;
        var first;
        var scripts;
        var hasScripts;
        var node;
        var doc;
        /** @type {number} */
        var i = 0;
        var l = elements.length;
        /** @type {number} */
        var iNoClone = l - 1;
        var arg = args[0];
        var keyName = jQuery.isFunction(arg);
        if (keyName || l > 1 && ("string" == typeof arg && (!support.checkClone && exclude.test(arg)))) {
            return elements.each(function(index) {
                var el = elements.eq(index);
                if (keyName) {
                    args[0] = arg.call(this, index, el.html());
                }
                init(el, args, callback, until);
            });
        }
        if (l && (fragment = parse(args, elements[0].ownerDocument, false, elements, until), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first || until)) {
            scripts = jQuery.map(getAll(fragment, "script"), restoreScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                    node = jQuery.clone(node, true, true);
                    if (hasScripts) {
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                }
                callback.call(elements[i], node, i);
            }
            if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, fn);
                /** @type {number} */
                i = 0;
                for (; i < hasScripts; i++) {
                    node = scripts[i];
                    if (rchecked.test(node.type || "")) {
                        if (!data_priv.access(node, "globalEval")) {
                            if (jQuery.contains(doc, node)) {
                                if (node.src) {
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src);
                                    }
                                } else {
                                    jQuery.globalEval(node.textContent.replace(rclass, ""));
                                }
                            }
                        }
                    }
                }
            }
        }
        return elements;
    }
    /**
     * @param {?} prop
     * @param {string} camelKey
     * @param {boolean} keepData
     * @return {?}
     */
    function remove(prop, camelKey, keepData) {
        var elem;
        var curLoop = camelKey ? jQuery.filter(camelKey, prop) : prop;
        /** @type {number} */
        var i = 0;
        for (; null != (elem = curLoop[i]); i++) {
            if (!keepData) {
                if (!(1 !== elem.nodeType)) {
                    jQuery.cleanData(getAll(elem));
                }
            }
            if (elem.parentNode) {
                if (keepData) {
                    if (jQuery.contains(elem.ownerDocument, elem)) {
                        setGlobalEval(getAll(elem, "script"));
                    }
                }
                elem.parentNode.removeChild(elem);
            }
        }
        return prop;
    }
    /**
     * @param {?} data
     * @param {Document} d
     * @return {?}
     */
    function render(data, d) {
        var el = jQuery(d.createElement(data)).appendTo(d.body);
        var displayStyle = jQuery.css(el[0], "display");
        return el.detach(), displayStyle;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    function defaultDisplay(data) {
        var d = doc;
        var result = cache[data];
        return result || (result = render(data, d), "none" !== result && result || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(d.documentElement), d = iframe[0].contentDocument, d.write(), d.close(), result = render(data, d), iframe.detach()), cache[data] = result), result;
    }
    /**
     * @param {string} camelKey
     * @param {?} prop
     * @param {Object} styles
     * @return {?}
     */
    function css(camelKey, prop, styles) {
        var width;
        var minWidth;
        var maxWidth;
        var val;
        var style = camelKey.style;
        return styles = styles || getStyles(camelKey), val = styles ? styles.getPropertyValue(prop) || styles[prop] : void 0, "" !== val && void 0 !== val || (jQuery.contains(camelKey.ownerDocument, camelKey) || (val = jQuery.style(camelKey, prop))), styles && (!support.pixelMarginRight() && (regexp.test(val) && (rbracket.test(prop) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = val, val = styles.width, style.width = width,
            style.minWidth = minWidth, style.maxWidth = maxWidth)))), void 0 !== val ? val + "" : val;
    }
    /**
     * @param {?} $timeout
     * @param {Function} hookFn
     * @return {?}
     */
    function addGetHookIf($timeout, hookFn) {
        return {
            /**
             * @return {?}
             */
            get: function() {
                return $timeout() ? void delete this.get : (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    /**
     * @param {number} name
     * @return {?}
     */
    function camelCase(name) {
        if (name in style) {
            return name;
        }
        var capName = name[0].toUpperCase() + name.slice(1);
        /** @type {number} */
        var i = cssPrefixes.length;
        for (; i--;) {
            if (name = cssPrefixes[i] + capName, name in style) {
                return name;
            }
        }
    }
    /**
     * @param {Object} second
     * @param {string} value
     * @param {string} val
     * @return {?}
     */
    function set(second, value, val) {
        /** @type {(Array.<string>|null)} */
        var iterator = rtagName.exec(value);
        return iterator ? Math.max(0, iterator[2] - (val || 0)) + (iterator[3] || "px") : value;
    }
    /**
     * @param {string} elem
     * @param {string} keepData
     * @param {?} extra
     * @param {boolean} isBorderBox
     * @param {?} styles
     * @return {?}
     */
    function augmentWidthOrHeight(elem, keepData, extra, isBorderBox, styles) {
        /** @type {number} */
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === keepData ? 1 : 0;
        /** @type {number} */
        var val = 0;
        for (; i < 4; i += 2) {
            if ("margin" === extra) {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if ("content" === extra) {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if ("margin" !== extra) {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if ("padding" !== extra) {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    /**
     * @param {string} elem
     * @param {string} name
     * @param {(number|string)} extra
     * @return {?}
     */
    function getWidthOrHeight(elem, name, extra) {
        /** @type {boolean} */
        var valueIsBorderBox = true;
        var val = "width" === name ? elem.offsetWidth : elem.offsetHeight;
        var styles = getStyles(elem);
        /** @type {boolean} */
        var isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
        if (val <= 0 || null == val) {
            if (val = css(elem, name, styles), (val < 0 || null == val) && (val = elem.style[name]), regexp.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            /** @type {number} */
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    /**
     * @param {Array} elements
     * @param {boolean} show
     * @return {?}
     */
    function showHide(elements, show) {
        var display;
        var elem;
        var hidden;
        /** @type {Array} */
        var values = [];
        /** @type {number} */
        var index = 0;
        var length = elements.length;
        for (; index < length; index++) {
            elem = elements[index];
            if (elem.style) {
                values[index] = data_priv.get(elem, "olddisplay");
                display = elem.style.display;
                if (show) {
                    if (!values[index]) {
                        if (!("none" !== display)) {
                            /** @type {string} */
                            elem.style.display = "";
                        }
                    }
                    if ("" === elem.style.display) {
                        if (camelKey(elem)) {
                            values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                        }
                    }
                } else {
                    hidden = camelKey(elem);
                    if (!("none" === display && hidden)) {
                        data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                    }
                }
            }
        }
        /** @type {number} */
        index = 0;
        for (; index < length; index++) {
            elem = elements[index];
            if (elem.style) {
                if (!(show && ("none" !== elem.style.display && "" !== elem.style.display))) {
                    elem.style.display = show ? values[index] || "" : "none";
                }
            }
        }
        return elements;
    }
    /**
     * @param {string} value
     * @param {?} tests
     * @param {string} key
     * @param {string} object
     * @param {boolean} easing
     * @return {?}
     */
    function Tween(value, tests, key, object, easing) {
        return new Tween.prototype.init(value, tests, key, object, easing);
    }
    /**
     * @return {?}
     */
    function createFxNow() {
        return context.setTimeout(function() {
            fxNow = void 0;
        }), fxNow = jQuery.now();
    }
    /**
     * @param {string} type
     * @param {boolean} includeWidth
     * @return {?}
     */
    function genFx(type, includeWidth) {
        var which;
        /** @type {number} */
        var i = 0;
        var attrs = {
            height: type
        };
        /** @type {number} */
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    /**
     * @param {Object} value
     * @param {string} prop
     * @param {string} animation
     * @return {?}
     */
    function createTween(value, prop, animation) {
        var tween;
        var codeSegments = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
        /** @type {number} */
        var i = 0;
        var valuesLen = codeSegments.length;
        for (; i < valuesLen; i++) {
            if (tween = codeSegments[i].call(animation, prop, value)) {
                return tween;
            }
        }
    }
    /**
     * @param {string} elem
     * @param {Object} props
     * @param {Object} opts
     * @return {undefined}
     */
    function defaultPrefilter(elem, props, opts) {
        var prop;
        var value;
        var thisp;
        var tween;
        var hooks;
        var oldfire;
        var oldDisplay;
        var type;
        var anim = this;
        var orig = {};
        var style = elem.style;
        var hidden = elem.nodeType && camelKey(elem);
        var dataShow = data_priv.get(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (null == hooks.unqueued) {
                /** @type {number} */
                hooks.unqueued = 0;
                /** @type {function (): undefined} */
                oldfire = hooks.empty.fire;
                /**
                 * @return {undefined}
                 */
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (1 === elem.nodeType) {
            if ("height" in props || "width" in props) {
                /** @type {Array} */
                opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                oldDisplay = jQuery.css(elem, "display");
                type = "none" === oldDisplay ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : oldDisplay;
                if ("inline" === type) {
                    if ("none" === jQuery.css(elem, "float")) {
                        /** @type {string} */
                        style.display = "inline-block";
                    }
                }
            }
        }
        if (opts.overflow) {
            /** @type {string} */
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        for (prop in props) {
            if (value = props[prop], rplusequals.exec(value)) {
                if (delete props[prop], thisp = thisp || "toggle" === value, value === (hidden ? "hide" : "show")) {
                    if ("show" !== value || (!dataShow || void 0 === dataShow[prop])) {
                        continue;
                    }
                    /** @type {boolean} */
                    hidden = true;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            } else {
                oldDisplay = void 0;
            }
        }
        if (jQuery.isEmptyObject(orig)) {
            if ("inline" === ("none" === oldDisplay ? defaultDisplay(elem.nodeName) : oldDisplay)) {
                style.display = oldDisplay;
            }
        } else {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = data_priv.access(elem, "fxshow", {});
            }
            if (thisp) {
                /** @type {boolean} */
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                data_priv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        /** @type {number} */
                        tween.start = "width" === prop || "height" === prop ? 1 : 0;
                    }
                }
            }
        }
    }
    /**
     * @param {Object} obj
     * @param {Object} paramMap
     * @return {undefined}
     */
    function propFilter(obj, paramMap) {
        var key;
        var name;
        var value;
        var val;
        var hooks;
        for (key in obj) {
            if (name = jQuery.camelCase(key), value = paramMap[name], val = obj[key], jQuery.isArray(val) && (value = val[1], val = obj[key] = val[0]), key !== name && (obj[name] = val, delete obj[key]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
                val = hooks.expand(val);
                delete obj[name];
                for (key in val) {
                    if (!(key in obj)) {
                        obj[key] = val[key];
                        paramMap[key] = value;
                    }
                }
            } else {
                paramMap[name] = value;
            }
        }
    }
    /**
     * @param {string} pdataOld
     * @param {?} properties
     * @param {Object} options
     * @return {?}
     */
    function Animation(pdataOld, properties, options) {
        var that;
        var r;
        /** @type {number} */
        var i = 0;
        var valuesLen = Animation.prefilters.length;
        var deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        });
        /**
         * @return {?}
         */
        var tick = function() {
            if (r) {
                return false;
            }
            var currentTime = fxNow || createFxNow();
            /** @type {number} */
            var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
            /** @type {number} */
            var temp = remaining / animation.duration || 0;
            /** @type {number} */
            var percent = 1 - temp;
            /** @type {number} */
            var index = 0;
            var length = animation.tweens.length;
            for (; index < length; index++) {
                animation.tweens[index].run(percent);
            }
            return deferred.notifyWith(pdataOld, [animation, percent, remaining]), percent < 1 && length ? remaining : (deferred.resolveWith(pdataOld, [animation]), false);
        };
        var animation = deferred.promise({
            elem: pdataOld,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            /**
             * @param {?} prop
             * @param {string} value
             * @return {?}
             */
            createTween: function(prop, value) {
                var camelKey = jQuery.Tween(pdataOld, animation.opts, prop, value, animation.opts.specialEasing[prop] || animation.opts.easing);
                return animation.tweens.push(camelKey), camelKey;
            },
            /**
             * @param {boolean} gotoEnd
             * @return {?}
             */
            stop: function(gotoEnd) {
                /** @type {number} */
                var index = 0;
                var length = gotoEnd ? animation.tweens.length : 0;
                if (r) {
                    return this;
                }
                /** @type {boolean} */
                r = true;
                for (; index < length; index++) {
                    animation.tweens[index].run(1);
                }
                return gotoEnd ? (deferred.notifyWith(pdataOld, [animation, 1, 0]), deferred.resolveWith(pdataOld, [animation, gotoEnd])) : deferred.rejectWith(pdataOld, [animation, gotoEnd]), this;
            }
        });
        var val = animation.props;
        propFilter(val, animation.opts.specialEasing);
        for (; i < valuesLen; i++) {
            if (that = Animation.prefilters[i].call(animation, pdataOld, val, animation.opts)) {
                return jQuery.isFunction(that.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(that.stop, that)), that;
            }
        }
        return jQuery.map(val, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(pdataOld, animation), jQuery.fx.timer(jQuery.extend(tick, {
            elem: pdataOld,
            anim: animation,
            queue: animation.opts.queue
        })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    /**
     * @param {Element} object
     * @return {?}
     */
    function each(object) {
        return object.getAttribute && object.getAttribute("class") || "";
    }
    /**
     * @param {Arguments} structure
     * @return {?}
     */
    function addToPrefiltersOrTransports(structure) {
        return function(v, camelKey) {
            if ("string" != typeof v) {
                /** @type {string} */
                camelKey = v;
                /** @type {string} */
                v = "*";
            }
            var node;
            /** @type {number} */
            var i = 0;
            var elem = v.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(camelKey)) {
                for (; node = elem[i++];) {
                    if ("+" === node[0]) {
                        node = node.slice(1) || "*";
                        (structure[node] = structure[node] || []).unshift(camelKey);
                    } else {
                        (structure[node] = structure[node] || []).push(camelKey);
                    }
                }
            }
        };
    }
    /**
     * @param {?} structure
     * @param {?} options
     * @param {Object} originalOptions
     * @param {?} jqXHR
     * @return {?}
     */
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        /**
         * @param {string} key
         * @return {?}
         */
        function inspect(key) {
            var oldName;
            return old[key] = true, jQuery.each(structure[key] || [], function(dataAndEvents, prefilterOrFactory) {
                var name = prefilterOrFactory(options, originalOptions, jqXHR);
                return "string" != typeof name || (seekingTransport || old[name]) ? seekingTransport ? !(oldName = name) : void 0 : (options.dataTypes.unshift(name), inspect(name), false);
            }), oldName;
        }
        var old = {};
        /** @type {boolean} */
        var seekingTransport = structure === transports;
        return inspect(options.dataTypes[0]) || !old["*"] && inspect("*");
    }
    /**
     * @param {(Object|string)} target
     * @param {Object} src
     * @return {?}
     */
    function ajaxExtend(target, src) {
        var key;
        var deep;
        var flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (void 0 !== src[key]) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        return deep && jQuery.extend(true, target, deep), target;
    }
    /**
     * @param {Object} s
     * @param {XMLHttpRequest} jqXHR
     * @param {Object} responses
     * @return {?}
     */
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct;
        var type;
        var finalDataType;
        var firstDataType;
        var contents = s.contents;
        var dataTypes = s.dataTypes;
        for (;
            "*" === dataTypes[0];) {
            dataTypes.shift();
            if (void 0 === ct) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    /** @type {string} */
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    /** @type {string} */
                    firstDataType = type;
                }
            }
            /** @type {(string|undefined)} */
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
        }
    }
    /**
     * @param {Object} s
     * @param {Object} response
     * @param {?} jqXHR
     * @param {Object} isSuccess
     * @return {?}
     */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2;
        var current;
        var conv;
        var tmp;
        var prev;
        var converters = {};
        var dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        for (; current;) {
            if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && (isSuccess && (s.dataFilter && (response = s.dataFilter(response, s.dataType)))), prev = current, current = dataTypes.shift()) {
                if ("*" === current) {
                    current = prev;
                } else {
                    if ("*" !== prev && prev !== current) {
                        if (conv = converters[prev + " " + current] || converters["* " + current], !conv) {
                            for (conv2 in converters) {
                                if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else {
                                        if (converters[conv2] !== true) {
                                            /** @type {string} */
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                        if (conv !== true) {
                            if (conv && s["throws"]) {
                                response = conv(response);
                            } else {
                                try {
                                    response = conv(response);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    /**
     * @param {string} prefix
     * @param {string} camelKey
     * @param {boolean} traditional
     * @param {Function} add
     * @return {undefined}
     */
    function buildParams(prefix, camelKey, traditional, add) {
        var name;
        if (jQuery.isArray(camelKey)) {
            jQuery.each(camelKey, function(i, v) {
                if (traditional || rmargin.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add);
                }
            });
        } else {
            if (traditional || "object" !== jQuery.type(camelKey)) {
                add(prefix, camelKey);
            } else {
                for (name in camelKey) {
                    buildParams(prefix + "[" + name + "]", camelKey[name], traditional, add);
                }
            }
        }
    }
    /**
     * @param {Object} element
     * @return {?}
     */
    function getWindow(element) {
        return jQuery.isWindow(element) ? element : 9 === element.nodeType && element.defaultView;
    }
    /** @type {Array} */
    var core_deletedIds = [];
    var doc = context.document;
    /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
    var core_slice = core_deletedIds.slice;
    /** @type {function (this:*, ...[*]): Array} */
    var core_concat = core_deletedIds.concat;
    /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
    var core_push = core_deletedIds.push;
    /** @type {function (this:(Array.<T>|string|{length: number}), T, number=): number} */
    var core_indexOf = core_deletedIds.indexOf;
    var class2type = {};
    /** @type {function (this:*): string} */
    var core_toString = class2type.toString;
    /** @type {function (this:Object, *): boolean} */
    var core_hasOwn = class2type.hasOwnProperty;
    var support = {};
    /** @type {string} */
    var core_version = "2.2.4";
    /**
     * @param {string} value
     * @param {?} tests
     * @return {?}
     */
    var jQuery = function(value, tests) {
        return new jQuery.fn.init(value, tests);
    };
    /** @type {RegExp} */
    var badChars = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    /** @type {RegExp} */
    var rmsPrefix = /^-ms-/;
    /** @type {RegExp} */
    var emptyParagraphRegexp = /-([\da-z])/gi;
    /**
     * @param {?} all
     * @param {string} letter
     * @return {?}
     */
    var fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
        jquery: core_version,
        /** @type {function (string, ?): ?} */
        constructor: jQuery,
        selector: "",
        length: 0,
        /**
         * @return {?}
         */
        toArray: function() {
            return core_slice.call(this);
        },
        /**
         * @param {string} num
         * @return {?}
         */
        get: function(num) {
            return null != num ? num < 0 ? this[num + this.length] : this[num] : core_slice.call(this);
        },
        /**
         * @param {Array} elems
         * @return {?}
         */
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            return ret.prevObject = this, ret.context = this.context, ret;
        },
        /**
         * @param {Function} opt_attributes
         * @return {?}
         */
        each: function(opt_attributes) {
            return jQuery.each(this, opt_attributes);
        },
        /**
         * @param {Function} callback
         * @return {?}
         */
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, err) {
                return callback.call(elem, err, elem);
            }));
        },
        /**
         * @return {?}
         */
        slice: function() {
            return this.pushStack(core_slice.apply(this, arguments));
        },
        /**
         * @return {?}
         */
        first: function() {
            return this.eq(0);
        },
        /**
         * @return {?}
         */
        last: function() {
            return this.eq(-1);
        },
        /**
         * @param {number} i
         * @return {?}
         */
        eq: function(i) {
            var len = this.length;
            var j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        /**
         * @return {?}
         */
        end: function() {
            return this.prevObject || this.constructor();
        },
        /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
        push: core_push,
        /** @type {function (this:(Array.<T>|{length: number}), function (T, T): number=): ?} */
        sort: core_deletedIds.sort,
        /** @type {function (this:(Array.<T>|{length: number}), *=, *=, ...[T]): Array.<T>} */
        splice: core_deletedIds.splice
    };
    /** @type {function (): ?} */
    jQuery.extend = jQuery.fn.extend = function() {
        var options;
        var name;
        var src;
        var copy;
        var copyIsArray;
        var clone;
        var target = arguments[0] || {};
        /** @type {number} */
        var i = 1;
        /** @type {number} */
        var l = arguments.length;
        /** @type {boolean} */
        var deep = false;
        if ("boolean" == typeof target) {
            /** @type {boolean} */
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        if (!("object" == typeof target)) {
            if (!jQuery.isFunction(target)) {
                target = {};
            }
        }
        if (i === l) {
            target = this;
            i--;
        }
        for (; i < l; i++) {
            if (null != (options = arguments[i])) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target !== copy) {
                        if (deep && (copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))))) {
                            if (copyIsArray) {
                                /** @type {boolean} */
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else {
                            if (void 0 !== copy) {
                                target[name] = copy;
                            }
                        }
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        /**
         * @param {string} value
         * @return {?}
         */
        error: function(value) {
            throw new Error(value);
        },
        /**
         * @return {undefined}
         */
        noop: function() {},
        /**
         * @param {string} value
         * @return {?}
         */
        isFunction: function(value) {
            return "function" === jQuery.type(value);
        },
        /** @type {function (*): boolean} */
        isArray: Array.isArray,
        /**
         * @param {Object} obj
         * @return {?}
         */
        isWindow: function(obj) {
            return null != obj && obj === obj.window;
        },
        /**
         * @param {Object} value
         * @return {?}
         */
        isNumeric: function(value) {
            var val = value && value.toString();
            return !jQuery.isArray(value) && val - parseFloat(val) + 1 >= 0;
        },
        /**
         * @param {string} obj
         * @return {?}
         */
        isPlainObject: function(obj) {
            var key;
            if ("object" !== jQuery.type(obj) || (obj.nodeType || jQuery.isWindow(obj))) {
                return false;
            }
            if (obj.constructor && (!core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf"))) {
                return false;
            }
            for (key in obj) {}
            return void 0 === key || core_hasOwn.call(obj, key);
        },
        /**
         * @param {?} obj
         * @return {?}
         */
        isEmptyObject: function(obj) {
            var prop;
            for (prop in obj) {
                return false;
            }
            return true;
        },
        /**
         * @param {string} value
         * @return {?}
         */
        type: function(value) {
            return null == value ? value + "" : "object" == typeof value || "function" == typeof value ? class2type[core_toString.call(value)] || "object" : typeof value;
        },
        /**
         * @param {string} code
         * @return {undefined}
         */
        globalEval: function(code) {
            var script;
            /** @type {function (string): *} */
            var indirect = eval;
            code = jQuery.trim(code);
            if (code) {
                if (1 === code.indexOf("use strict")) {
                    script = doc.createElement("script");
                    /** @type {string} */
                    script.text = code;
                    doc.head.appendChild(script).parentNode.removeChild(script);
                } else {
                    indirect(code);
                }
            }
        },
        /**
         * @param {string} string
         * @return {?}
         */
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(emptyParagraphRegexp, fcamelCase);
        },
        /**
         * @param {Node} elem
         * @param {string} name
         * @return {?}
         */
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        /**
         * @param {Function} obj
         * @param {Function} callback
         * @return {?}
         */
        each: function(obj, callback) {
            var l;
            /** @type {number} */
            var i = 0;
            if (isArraylike(obj)) {
                l = obj.length;
                for (; i < l && callback.call(obj[i], i, obj[i]) !== false; i++) {}
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }
            return obj;
        },
        /**
         * @param {number} str
         * @return {?}
         */
        trim: function(str) {
            return null == str ? "" : (str + "").replace(badChars, "");
        },
        /**
         * @param {?} arr
         * @param {Array} results
         * @return {?}
         */
        makeArray: function(arr, results) {
            var ret = results || [];
            return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : core_push.call(ret, arr)), ret;
        },
        /**
         * @param {string} elem
         * @param {?} arr
         * @param {Error} i
         * @return {?}
         */
        inArray: function(elem, arr, i) {
            return null == arr ? -1 : core_indexOf.call(arr, elem, i);
        },
        /**
         * @param {Array} first
         * @param {?} second
         * @return {?}
         */
        merge: function(first, second) {
            /** @type {number} */
            var subLn = +second.length;
            /** @type {number} */
            var j = 0;
            var i = first.length;
            for (; j < subLn; j++) {
                first[i++] = second[j];
            }
            return first.length = i, first;
        },
        /**
         * @param {?} arr
         * @param {Function} callback
         * @param {?} inv
         * @return {?}
         */
        grep: function(arr, callback, inv) {
            var val;
            /** @type {Array} */
            var ret = [];
            /** @type {number} */
            var i = 0;
            var e = arr.length;
            /** @type {boolean} */
            var skip = !inv;
            for (; i < e; i++) {
                /** @type {boolean} */
                val = !callback(arr[i], i);
                if (val !== skip) {
                    ret.push(arr[i]);
                }
            }
            return ret;
        },
        /**
         * @param {Object} elems
         * @param {Function} callback
         * @param {string} arg
         * @return {?}
         */
        map: function(elems, callback, arg) {
            var valsLength;
            var camelKey;
            /** @type {number} */
            var i = 0;
            /** @type {Array} */
            var ret = [];
            if (isArraylike(elems)) {
                valsLength = elems.length;
                for (; i < valsLength; i++) {
                    camelKey = callback(elems[i], i, arg);
                    if (null != camelKey) {
                        ret.push(camelKey);
                    }
                }
            } else {
                for (i in elems) {
                    camelKey = callback(elems[i], i, arg);
                    if (null != camelKey) {
                        ret.push(camelKey);
                    }
                }
            }
            return core_concat.apply([], ret);
        },
        guid: 1,
        /**
         * @param {Object} fn
         * @param {Object} context
         * @return {?}
         */
        proxy: function(fn, context) {
            var tmp;
            var args;
            var proxy;
            if ("string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn)) {
                return args = core_slice.call(arguments, 2), proxy = function() {
                    return fn.apply(context || this, args.concat(core_slice.call(arguments)));
                }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy;
            }
        },
        /** @type {function (): number} */
        now: Date.now,
        support: support
    });
    if ("function" == typeof Symbol) {
        jQuery.fn[Symbol.iterator] = core_deletedIds[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(dataAndEvents, m3) {
        class2type["[object " + m3 + "]"] = m3.toLowerCase();
    });
    var Sizzle = function(e) {
        /**
         * @param {string} selector
         * @param {Object} context
         * @param {Array} results
         * @param {Array} seed
         * @return {?}
         */
        function Sizzle(selector, context, results, seed) {
            var m;
            var i;
            var camelKey;
            var ret;
            var l;
            var match;
            var groups;
            var elements;
            var c = context && context.ownerDocument;
            var midline = context ? context.nodeType : 9;
            if (results = results || [], "string" != typeof selector || (!selector || 1 !== midline && (9 !== midline && 11 !== midline))) {
                return results;
            }
            if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== doc && fn(context), context = context || doc, documentIsHTML)) {
                if (11 !== midline && (match = rquickExpr.exec(selector))) {
                    if (m = match[1]) {
                        if (9 === midline) {
                            if (!(camelKey = context.getElementById(m))) {
                                return results;
                            }
                            if (camelKey.id === m) {
                                return results.push(camelKey), results;
                            }
                        } else {
                            if (c && ((camelKey = c.getElementById(m)) && (contains(context, camelKey) && camelKey.id === m))) {
                                return results.push(camelKey), results;
                            }
                        }
                    } else {
                        if (match[2]) {
                            return push.apply(results, context.getElementsByTagName(selector)), results;
                        }
                        if ((m = match[3]) && (support.getElementsByClassName && context.getElementsByClassName)) {
                            return push.apply(results, context.getElementsByClassName(m)), results;
                        }
                    }
                }
                if (support.qsa && (!compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)))) {
                    if (1 !== midline) {
                        /** @type {Object} */
                        c = context;
                        /** @type {string} */
                        elements = selector;
                    } else {
                        if ("object" !== context.nodeName.toLowerCase()) {
                            if (ret = context.getAttribute("id")) {
                                ret = ret.replace(rreturn, "\\$&");
                            } else {
                                context.setAttribute("id", ret = expando);
                            }
                            groups = tokenize(selector);
                            i = groups.length;
                            /** @type {string} */
                            l = ridentifier.test(ret) ? "#" + ret : "[id='" + ret + "']";
                            for (; i--;) {
                                /** @type {string} */
                                groups[i] = l + " " + toSelector(groups[i]);
                            }
                            elements = groups.join(",");
                            c = rsibling.test(selector) && testContext(context.parentNode) || context;
                        }
                    }
                    if (elements) {
                        try {
                            return push.apply(results, c.querySelectorAll(elements)), results;
                        } catch (_) {} finally {
                            if (ret === expando) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
         * @return {?}
         */
        function createCache() {
            /**
             * @param {string} key
             * @param {?} value
             * @return {?}
             */
            function cache(key, value) {
                return buf.push(key + " ") > Expr.cacheLength && delete cache[buf.shift()], cache[key + " "] = value;
            }
            /** @type {Array} */
            var buf = [];
            return cache;
        }
        /**
         * @param {Function} fn
         * @return {?}
         */
        function markFunction(fn) {
            return fn[expando] = true, fn;
        }
        /**
         * @param {Function} fn
         * @return {?}
         */
        function assert(fn) {
            var t = doc.createElement("div");
            try {
                return !!fn(t);
            } catch (i) {
                return false;
            } finally {
                if (t.parentNode) {
                    t.parentNode.removeChild(t);
                }
                /** @type {null} */
                t = null;
            }
        }
        /**
         * @param {string} attrs
         * @param {Function} handler
         * @return {undefined}
         */
        function addHandle(attrs, handler) {
            var arr = attrs.split("|");
            var i = arr.length;
            for (; i--;) {
                /** @type {Function} */
                Expr.attrHandle[arr[i]] = handler;
            }
        }
        /**
         * @param {Element} a
         * @param {Object} b
         * @return {?}
         */
        function siblingCheck(a, b) {
            var cur = b && a;
            var diff = cur && (1 === a.nodeType && (1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE)));
            if (diff) {
                return diff;
            }
            if (cur) {
                for (; cur = cur.nextSibling;) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        /**
         * @param {?} type
         * @return {?}
         */
        function createInputPseudo(type) {
            return function(elem) {
                var b = elem.nodeName.toLowerCase();
                return "input" === b && elem.type === type;
            };
        }
        /**
         * @param {?} type
         * @return {?}
         */
        function createButtonPseudo(type) {
            return function(elem) {
                var NULL = elem.nodeName.toLowerCase();
                return ("input" === NULL || "button" === NULL) && elem.type === type;
            };
        }
        /**
         * @param {Function} fn
         * @return {?}
         */
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                return argument = +argument, markFunction(function(seed, matches) {
                    var j;
                    var matchIndexes = fn([], seed.length, argument);
                    var i = matchIndexes.length;
                    for (; i--;) {
                        if (seed[j = matchIndexes[i]]) {
                            /** @type {boolean} */
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        /**
         * @param {Object} context
         * @return {?}
         */
        function testContext(context) {
            return context && ("undefined" != typeof context.getElementsByTagName && context);
        }
        /**
         * @return {undefined}
         */
        function setFilters() {}
        /**
         * @param {Array} tokens
         * @return {?}
         */
        function toSelector(tokens) {
            /** @type {number} */
            var ti = 0;
            var nTokens = tokens.length;
            /** @type {string} */
            var selector = "";
            for (; ti < nTokens; ti++) {
                selector += tokens[ti].value;
            }
            return selector;
        }
        /**
         * @param {Function} matcher
         * @param {Object} combinator
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        function addCombinator(matcher, combinator, dataAndEvents) {
            var dir = combinator.dir;
            var r = dataAndEvents && "parentNode" === dir;
            /** @type {number} */
            var doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                for (; elem = elem[dir];) {
                    if (1 === elem.nodeType || r) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                var oldCache;
                var outerCache;
                var callbacks;
                /** @type {Array} */
                var newCache = [dirruns, doneName];
                if (xml) {
                    for (; elem = elem[dir];) {
                        if ((1 === elem.nodeType || r) && matcher(elem, context, xml)) {
                            return true;
                        }
                    }
                } else {
                    for (; elem = elem[dir];) {
                        if (1 === elem.nodeType || r) {
                            if (callbacks = elem[expando] || (elem[expando] = {}), outerCache = callbacks[elem.uniqueID] || (callbacks[elem.uniqueID] = {}), (oldCache = outerCache[dir]) && (oldCache[0] === dirruns && oldCache[1] === doneName)) {
                                return newCache[2] = oldCache[2];
                            }
                            if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                }
            };
        }
        /**
         * @param {Array} matchers
         * @return {?}
         */
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                for (; i--;) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        /**
         * @param {string} selector
         * @param {Array} contexts
         * @param {?} results
         * @return {?}
         */
        function multipleContexts(selector, contexts, results) {
            /** @type {number} */
            var i = 0;
            var len = contexts.length;
            for (; i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        /**
         * @param {Array} arr
         * @param {Object} a
         * @param {Object} callback
         * @param {Object} context
         * @param {string} arg
         * @return {?}
         */
        function _map(arr, a, callback, context, arg) {
            var camelKey;
            /** @type {Array} */
            var ret = [];
            /** @type {number} */
            var pdataOld = 0;
            var e = arr.length;
            /** @type {boolean} */
            var prepareString = null != a;
            for (; pdataOld < e; pdataOld++) {
                if (camelKey = arr[pdataOld]) {
                    if (!(callback && !callback(camelKey, context, arg))) {
                        ret.push(camelKey);
                        if (prepareString) {
                            a.push(pdataOld);
                        }
                    }
                }
            }
            return ret;
        }
        /**
         * @param {number} preFilter
         * @param {(number|string)} selector
         * @param {boolean} fn
         * @param {Object} postFilter
         * @param {Object} postFinder
         * @param {(number|string)} postSelector
         * @return {?}
         */
        function setMatcher(preFilter, selector, fn, postFilter, postFinder, postSelector) {
            return postFilter && (!postFilter[expando] && (postFilter = setMatcher(postFilter))), postFinder && (!postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector))), markFunction(function(seed, prop, context, xml) {
                var camelKey;
                var i;
                var val;
                /** @type {Array} */
                var tail = [];
                /** @type {Array} */
                var items = [];
                var preexisting = prop.length;
                var ts = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []);
                var obj = !preFilter || !seed && selector ? ts : _map(ts, tail, preFilter, context, xml);
                var arr = fn ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : prop : obj;
                if (fn && fn(obj, arr, context, xml), postFilter) {
                    camelKey = _map(arr, items);
                    postFilter(camelKey, [], context, xml);
                    i = camelKey.length;
                    for (; i--;) {
                        if (val = camelKey[i]) {
                            /** @type {boolean} */
                            arr[items[i]] = !(obj[items[i]] = val);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            /** @type {Array} */
                            camelKey = [];
                            i = arr.length;
                            for (; i--;) {
                                if (val = arr[i]) {
                                    camelKey.push(obj[i] = val);
                                }
                            }
                            postFinder(null, arr = [], camelKey, xml);
                        }
                        i = arr.length;
                        for (; i--;) {
                            if (val = arr[i]) {
                                if ((camelKey = postFinder ? equal(seed, val) : tail[i]) > -1) {
                                    /** @type {boolean} */
                                    seed[camelKey] = !(prop[camelKey] = val);
                                }
                            }
                        }
                    }
                } else {
                    arr = _map(arr === prop ? arr.splice(preexisting, arr.length) : arr);
                    if (postFinder) {
                        postFinder(null, prop, arr, xml);
                    } else {
                        push.apply(prop, arr);
                    }
                }
            });
        }
        /**
         * @param {Object} tokens
         * @return {?}
         */
        function matcherFromTokens(tokens) {
            var type;
            var camelKey;
            var j;
            var len = tokens.length;
            var leadingRelative = Expr.relative[tokens[0].type];
            var implicitRelative = leadingRelative || Expr.relative[" "];
            /** @type {number} */
            var i = leadingRelative ? 1 : 0;
            var matchContext = addCombinator(function(clas) {
                return clas === type;
            }, implicitRelative, true);
            var matchAnyContext = addCombinator(function(initial) {
                return equal(type, initial) > -1;
            }, implicitRelative, true);
            /** @type {Array} */
            var matchers = [function(elem, context, xml) {
                var r = !leadingRelative && (xml || context !== outermostContext) || ((type = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                return type = null, r;
            }];
            for (; i < len; i++) {
                if (camelKey = Expr.relative[tokens[i].type]) {
                    /** @type {Array} */
                    matchers = [addCombinator(elementMatcher(matchers), camelKey)];
                } else {
                    if (camelKey = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), camelKey[expando]) {
                        /** @type {number} */
                        j = ++i;
                        for (; j < len && !Expr.relative[tokens[j].type]; j++) {}
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: " " === tokens[i - 2].type ? "*" : ""
                        })).replace(rtrim, "$1"), camelKey, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(camelKey);
                }
            }
            return elementMatcher(matchers);
        }
        /**
         * @param {Array} elementMatchers
         * @param {Array} setMatchers
         * @return {?}
         */
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            /** @type {boolean} */
            var bySet = setMatchers.length > 0;
            /** @type {boolean} */
            var byElement = elementMatchers.length > 0;
            /**
             * @param {HTMLElement} seed
             * @param {(number|string)} context
             * @param {boolean} xml
             * @param {Object} results
             * @param {number} fragment
             * @return {?}
             */
            var superMatcher = function(seed, context, xml, results, fragment) {
                var camelKey;
                var j;
                var matcher;
                /** @type {number} */
                var matchedCount = 0;
                /** @type {string} */
                var i = "0";
                var unmatched = seed && [];
                /** @type {Array} */
                var arr = [];
                var contextBackup = outermostContext;
                var rawBodies = seed || byElement && Expr.find.TAG("*", fragment);
                var dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || 0.1;
                var len = rawBodies.length;
                if (fragment) {
                    outermostContext = context === doc || (context || fragment);
                }
                for (; i !== len && null != (camelKey = rawBodies[i]); i++) {
                    if (byElement && camelKey) {
                        /** @type {number} */
                        j = 0;
                        if (!context) {
                            if (!(camelKey.ownerDocument === doc)) {
                                fn(camelKey);
                                /** @type {boolean} */
                                xml = !documentIsHTML;
                            }
                        }
                        for (; matcher = elementMatchers[j++];) {
                            if (matcher(camelKey, context || doc, xml)) {
                                results.push(camelKey);
                                break;
                            }
                        }
                        if (fragment) {
                            dirruns = dirrunsUnique;
                        }
                    }
                    if (bySet) {
                        if (camelKey = !matcher && camelKey) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(camelKey);
                        }
                    }
                }
                if (matchedCount += i, bySet && i !== matchedCount) {
                    /** @type {number} */
                    j = 0;
                    for (; matcher = setMatchers[j++];) {
                        matcher(unmatched, arr, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            for (; i--;) {
                                if (!unmatched[i]) {
                                    if (!arr[i]) {
                                        arr[i] = pop.call(results);
                                    }
                                }
                            }
                        }
                        arr = _map(arr);
                    }
                    push.apply(results, arr);
                    if (fragment) {
                        if (!seed) {
                            if (arr.length > 0) {
                                if (matchedCount + setMatchers.length > 1) {
                                    Sizzle.uniqueSort(results);
                                }
                            }
                        }
                    }
                }
                return fragment && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        var i;
        var support;
        var Expr;
        var getText;
        var isXML;
        var tokenize;
        var compile;
        var select;
        var outermostContext;
        var sortInput;
        var stability;
        var fn;
        var doc;
        var docElem;
        var documentIsHTML;
        var rbuggyQSA;
        var rbuggyMatches;
        var matches;
        var contains;
        /** @type {string} */
        var expando = "sizzle" + 1 * new Date;
        var preferredDoc = e.document;
        /** @type {number} */
        var dirruns = 0;
        /** @type {number} */
        var done = 0;
        var classCache = createCache();
        var tokenCache = createCache();
        var compilerCache = createCache();
        /**
         * @param {?} type
         * @param {?} code
         * @return {?}
         */
        var a = function(type, code) {
            return type === code && (stability = true), 0;
        };
        /** @type {number} */
        var MAX_NEGATIVE = 1 << 31;
        /** @type {function (this:Object, *): boolean} */
        var hasOwn = {}.hasOwnProperty;
        /** @type {Array} */
        var arr = [];
        /** @type {function (this:(Array.<T>|{length: number})): T} */
        var pop = arr.pop;
        /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
        var push_native = arr.push;
        /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
        var push = arr.push;
        /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
        var slice = arr.slice;
        /**
         * @param {Array} a
         * @param {?} obj
         * @return {?}
         */
        var equal = function(a, obj) {
            /** @type {number} */
            var i = 0;
            var aLength = a.length;
            for (; i < aLength; i++) {
                if (a[i] === obj) {
                    return i;
                }
            }
            return -1;
        };
        /** @type {string} */
        var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
        /** @type {string} */
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        /** @type {string} */
        var ele = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+";
        /** @type {string} */
        var attributes = "\\[" + whitespace + "*(" + ele + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ele + "))|)" + whitespace + "*\\]";
        /** @type {string} */
        var prop = ":(" + ele + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)";
        /** @type {RegExp} */
        var regexp = new RegExp(whitespace + "+", "g");
        /** @type {RegExp} */
        var rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
        /** @type {RegExp} */
        var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
        /** @type {RegExp} */
        var rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
        /** @type {RegExp} */
        var rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g");
        /** @type {RegExp} */
        var rPrefix = new RegExp(prop);
        /** @type {RegExp} */
        var ridentifier = new RegExp("^" + ele + "$");
        var matchExpr = {
            ID: new RegExp("^#(" + ele + ")"),
            CLASS: new RegExp("^\\.(" + ele + ")"),
            TAG: new RegExp("^(" + ele + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + prop),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        };
        /** @type {RegExp} */
        var rinputs = /^(?:input|select|textarea|button)$/i;
        /** @type {RegExp} */
        var rheader = /^h\d$/i;
        /** @type {RegExp} */
        var rnative = /^[^{]+\{\s*\[native \w/;
        /** @type {RegExp} */
        var rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
        /** @type {RegExp} */
        var rsibling = /[+~]/;
        /** @type {RegExp} */
        var rreturn = /'|\\/g;
        /** @type {RegExp} */
        var runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig");
        /**
         * @param {?} _
         * @param {(number|string)} escaped
         * @param {boolean} escapedWhitespace
         * @return {?}
         */
        var funescape = function(_, escaped, escapedWhitespace) {
            /** @type {number} */
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
        };
        /**
         * @return {undefined}
         */
        var domReady = function() {
            fn();
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (wt) {
            push = {
                /** @type {function (?, ?): undefined} */
                apply: arr.length ? function(value, array) {
                    push_native.apply(value, slice.call(array));
                } : function(obj, array) {
                    var j = obj.length;
                    /** @type {number} */
                    var headNode = 0;
                    for (; obj[j++] = array[headNode++];) {}
                    /** @type {number} */
                    obj.length = j - 1;
                }
            };
        }
        support = Sizzle.support = {};
        /** @type {function (Object): ?} */
        isXML = Sizzle.isXML = function(elem) {
            var node = elem && (elem.ownerDocument || elem).documentElement;
            return !!node && "HTML" !== node.nodeName;
        };
        /** @type {function (number): ?} */
        fn = Sizzle.setDocument = function(node) {
            var n;
            var win;
            var result = node ? node.ownerDocument || node : preferredDoc;
            return result !== doc && (9 === result.nodeType && result.documentElement) ? (doc = result, docElem = doc.documentElement, documentIsHTML = !isXML(doc), (win = doc.defaultView) && (win.top !== win && (win.addEventListener ? win.addEventListener("unload", domReady, false) : win.attachEvent && win.attachEvent("onunload", domReady))), support.attributes = assert(function(div) {
                return div.className = "i", !div.getAttribute("className");
            }), support.getElementsByTagName = assert(function(div) {
                return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length;
            }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName), support.getById = assert(function(div) {
                return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length;
            }), support.getById ? (Expr.find.ID = function(id, elem) {
                if ("undefined" != typeof elem.getElementById && documentIsHTML) {
                    var m = elem.getElementById(id);
                    return m ? [m] : [];
                }
            }, Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    return elem.getAttribute("id") === attrId;
                };
            }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
                    return node && node.value === attrId;
                };
            }), Expr.find.TAG = support.getElementsByTagName ? function(query, context) {
                return "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(query) : support.qsa ? context.querySelectorAll(query) : void 0;
            } : function(tag, context) {
                var camelKey;
                /** @type {Array} */
                var tmp = [];
                /** @type {number} */
                var index = 0;
                var results = context.getElementsByTagName(tag);
                if ("*" === tag) {
                    for (; camelKey = results[index++];) {
                        if (1 === camelKey.nodeType) {
                            tmp.push(camelKey);
                        }
                    }
                    return tmp;
                }
                return results;
            }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                if ("undefined" != typeof context.getElementsByClassName && documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(div) {
                /** @type {string} */
                docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (div.querySelectorAll("[msallowcapture^='']").length) {
                    rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                }
                if (!div.querySelectorAll("[selected]").length) {
                    rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }
                if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                    rbuggyQSA.push("~=");
                }
                if (!div.querySelectorAll(":checked").length) {
                    rbuggyQSA.push(":checked");
                }
                if (!div.querySelectorAll("a#" + expando + "+*").length) {
                    rbuggyQSA.push(".#.+[+~]");
                }
            }), assert(function(div) {
                var input = doc.createElement("input");
                input.setAttribute("type", "hidden");
                div.appendChild(input).setAttribute("name", "D");
                if (div.querySelectorAll("[name=d]").length) {
                    rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }
                if (!div.querySelectorAll(":enabled").length) {
                    rbuggyQSA.push(":enabled", ":disabled");
                }
                div.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
            })), (support.matchesSelector = rnative.test(matches = docElem.matches || (docElem.webkitMatchesSelector || (docElem.mozMatchesSelector || (docElem.oMatchesSelector || docElem.msMatchesSelector))))) && assert(function(elem) {
                support.disconnectedMatch = matches.call(elem, "div");
                matches.call(elem, "[s!='']:x");
                rbuggyMatches.push("!=", prop);
            }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), n = rnative.test(docElem.compareDocumentPosition), contains = n || rnative.test(docElem.contains) ? function(a, b) {
                var adown = 9 === a.nodeType ? a.documentElement : a;
                var bup = b && b.parentNode;
                return a === bup || !(!bup || (1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup))));
            } : function(a, p) {
                if (p) {
                    for (; p = p.parentNode;) {
                        if (p === a) {
                            return true;
                        }
                    }
                }
                return false;
            }, a = n ? function(a, b) {
                if (a === b) {
                    return stability = true, 0;
                }
                /** @type {number} */
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? equal(sortInput, a) - equal(sortInput, b) : 0 : 4 & compare ? -1 : 1);
            } : function(a, b) {
                if (a === b) {
                    return stability = true, 0;
                }
                var cur;
                /** @type {number} */
                var i = 0;
                var aup = a.parentNode;
                var bup = b.parentNode;
                /** @type {Array} */
                var ap = [a];
                /** @type {Array} */
                var bp = [b];
                if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? equal(sortInput, a) - equal(sortInput, b) : 0;
                }
                if (aup === bup) {
                    return siblingCheck(a, b);
                }
                cur = a;
                for (; cur = cur.parentNode;) {
                    ap.unshift(cur);
                }
                cur = b;
                for (; cur = cur.parentNode;) {
                    bp.unshift(cur);
                }
                for (; ap[i] === bp[i];) {
                    i++;
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            }, doc) : doc;
        };
        /**
         * @param {string} expr
         * @param {Array} elements
         * @return {?}
         */
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        /**
         * @param {Object} elem
         * @param {string} expr
         * @return {?}
         */
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== doc && fn(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && (documentIsHTML && (!compilerCache[expr + " "] && ((!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr)))))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || (support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType)) {
                        return ret;
                    }
                } catch (r) {}
            }
            return Sizzle(expr, doc, null, [elem]).length > 0;
        };
        /**
         * @param {Element} context
         * @param {Object} b
         * @return {?}
         */
        Sizzle.contains = function(context, b) {
            return (context.ownerDocument || context) !== doc && fn(context), contains(context, b);
        };
        /**
         * @param {Object} elem
         * @param {string} camelKey
         * @return {?}
         */
        Sizzle.attr = function(elem, camelKey) {
            if ((elem.ownerDocument || elem) !== doc) {
                fn(elem);
            }
            var dataAttr = Expr.attrHandle[camelKey.toLowerCase()];
            var val = dataAttr && hasOwn.call(Expr.attrHandle, camelKey.toLowerCase()) ? dataAttr(elem, camelKey, !documentIsHTML) : void 0;
            return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(camelKey) : (val = elem.getAttributeNode(camelKey)) && val.specified ? val.value : null;
        };
        /**
         * @param {string} value
         * @return {?}
         */
        Sizzle.error = function(value) {
            throw new Error("Syntax error, unrecognized expression: " + value);
        };
        /**
         * @param {Array} results
         * @return {?}
         */
        Sizzle.uniqueSort = function(results) {
            var elem;
            /** @type {Array} */
            var duplicates = [];
            /** @type {number} */
            var j = 0;
            /** @type {number} */
            var camelKey = 0;
            if (stability = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(a), stability) {
                for (; elem = results[camelKey++];) {
                    if (elem === results[camelKey]) {
                        /** @type {number} */
                        j = duplicates.push(camelKey);
                    }
                }
                for (; j--;) {
                    results.splice(duplicates[j], 1);
                }
            }
            return sortInput = null, results;
        };
        /** @type {function (Object): ?} */
        getText = Sizzle.getText = function(elem) {
            var node;
            /** @type {string} */
            var ret = "";
            /** @type {number} */
            var i = 0;
            var nodeType = elem.nodeType;
            if (nodeType) {
                if (1 === nodeType || (9 === nodeType || 11 === nodeType)) {
                    if ("string" == typeof elem.textContent) {
                        return elem.textContent;
                    }
                    elem = elem.firstChild;
                    for (; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                } else {
                    if (3 === nodeType || 4 === nodeType) {
                        return elem.nodeValue;
                    }
                }
            } else {
                for (; node = elem[i++];) {
                    ret += getText(node);
                }
            }
            return ret;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            /** @type {function (Function): ?} */
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                /**
                 * @param {Array} match
                 * @return {?}
                 */
                ATTR: function(match) {
                    return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || (match[4] || (match[5] || ""))).replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4);
                },
                /**
                 * @param {Array} match
                 * @return {?}
                 */
                CHILD: function(match) {
                    return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
                },
                /**
                 * @param {Array} match
                 * @return {?}
                 */
                PSEUDO: function(match) {
                    var excess;
                    var unquoted = !match[6] && match[2];
                    return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || (match[5] || "") : unquoted && (rPrefix.test(unquoted) && ((excess = tokenize(unquoted, true)) && ((excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess))))), match.slice(0, 3));
                }
            },
            filter: {
                /**
                 * @param {string} nodeNameSelector
                 * @return {?}
                 */
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return "*" === nodeNameSelector ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                /**
                 * @param {string} className
                 * @return {?}
                 */
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test("string" == typeof elem.className && elem.className || ("undefined" != typeof elem.getAttribute && elem.getAttribute("class") || ""));
                    });
                },
                /**
                 * @param {string} name
                 * @param {string} not
                 * @param {string} check
                 * @return {?}
                 */
                ATTR: function(name, not, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        return null == result ? "!=" === not : !not || (result += "", "=" === not ? result === check : "!=" === not ? result !== check : "^=" === not ? check && 0 === result.indexOf(check) : "*=" === not ? check && result.indexOf(check) > -1 : "$=" === not ? check && result.slice(-check.length) === check : "~=" === not ? (" " + result.replace(regexp, " ") + " ").indexOf(check) > -1 : "|=" === not && (result === check || result.slice(0, check.length + 1) === check + "-"));
                    };
                },
                /**
                 * @param {string} type
                 * @param {string} argument
                 * @param {?} dataAndEvents
                 * @param {boolean} first
                 * @param {number} last
                 * @return {?}
                 */
                CHILD: function(type, argument, dataAndEvents, first, last) {
                    /** @type {boolean} */
                    var simple = "nth" !== type.slice(0, 3);
                    /** @type {boolean} */
                    var forward = "last" !== type.slice(-4);
                    /** @type {boolean} */
                    var ofType = "of-type" === argument;
                    return 1 === first && 0 === last ? function(contestant) {
                        return !!contestant.parentNode;
                    } : function(elem, deepDataAndEvents, dataAndEvents) {
                        var cache;
                        var outerCache;
                        var options;
                        var node;
                        var nodeIndex;
                        var eventPath;
                        /** @type {string} */
                        var which = simple !== forward ? "nextSibling" : "previousSibling";
                        var parent = elem.parentNode;
                        var name = ofType && elem.nodeName.toLowerCase();
                        /** @type {boolean} */
                        var useCache = !dataAndEvents && !ofType;
                        /** @type {boolean} */
                        var diff = false;
                        if (parent) {
                            if (simple) {
                                for (; which;) {
                                    /** @type {Node} */
                                    node = elem;
                                    for (; node = node[which];) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) {
                                            return false;
                                        }
                                    }
                                    /** @type {(boolean|string)} */
                                    eventPath = which = "only" === type && (!eventPath && "nextSibling");
                                }
                                return true;
                            }
                            if (eventPath = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                                node = parent;
                                options = node[expando] || (node[expando] = {});
                                outerCache = options[node.uniqueID] || (options[node.uniqueID] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                for (; node = ++nodeIndex && (node && node[which]) || ((diff = nodeIndex = 0) || eventPath.pop());) {
                                    if (1 === node.nodeType && (++diff && node === elem)) {
                                        /** @type {Array} */
                                        outerCache[type] = [dirruns, nodeIndex, diff];
                                        break;
                                    }
                                }
                            } else {
                                if (useCache && (node = elem, options = node[expando] || (node[expando] = {}), outerCache = options[node.uniqueID] || (options[node.uniqueID] = {}), cache = outerCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === false) {
                                    for (;
                                        (node = ++nodeIndex && (node && node[which]) || ((diff = nodeIndex = 0) || eventPath.pop())) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || (!++diff || (useCache && (options = node[expando] || (node[expando] = {}), outerCache = options[node.uniqueID] || (options[node.uniqueID] = {}), outerCache[type] = [dirruns, diff]), node !== elem)));) {}
                                }
                            }
                            return diff -= last, diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                /**
                 * @param {string} pseudo
                 * @param {?} argument
                 * @return {?}
                 */
                PSEUDO: function(pseudo, argument) {
                    var args;
                    var fn = Expr.pseudos[pseudo] || (Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo));
                    return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(context, e) {
                        var property;
                        var data = fn(context, argument);
                        var i = data.length;
                        for (; i--;) {
                            property = equal(context, data[i]);
                            /** @type {boolean} */
                            context[property] = !(e[property] = data[i]);
                        }
                    }) : function(err) {
                        return fn(err, 0, args);
                    }) : fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    /** @type {Array} */
                    var elem = [];
                    /** @type {Array} */
                    var memory = [];
                    var matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, qs, dataAndEvents, xml) {
                        var val;
                        var unmatched = matcher(seed, null, xml, []);
                        var i = seed.length;
                        for (; i--;) {
                            if (val = unmatched[i]) {
                                /** @type {boolean} */
                                seed[i] = !(qs[i] = val);
                            }
                        }
                    }) : function(value, dataAndEvents, xml) {
                        return elem[0] = value, matcher(elem, null, xml, memory), elem[0] = null, !memory.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(id) {
                    return id = id.replace(runescape, funescape),
                        function(elem) {
                            return (elem.textContent || (elem.innerText || getText(elem))).indexOf(id) > -1;
                        };
                }),
                lang: markFunction(function(lang) {
                    return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
                        function(elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                    return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                                }
                            } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                            return false;
                        };
                }),
                /**
                 * @param {string} value
                 * @return {?}
                 */
                target: function(value) {
                    var models = e.location && e.location.hash;
                    return models && models.slice(1) === value.id;
                },
                /**
                 * @param {?} elem
                 * @return {?}
                 */
                root: function(elem) {
                    return elem === docElem;
                },
                /**
                 * @param {string} value
                 * @return {?}
                 */
                focus: function(value) {
                    return value === doc.activeElement && ((!doc.hasFocus || doc.hasFocus()) && !!(value.type || (value.href || ~value.tabIndex)));
                },
                /**
                 * @param {EventTarget} a
                 * @return {?}
                 */
                enabled: function(a) {
                    return a.disabled === false;
                },
                /**
                 * @param {Element} value
                 * @return {?}
                 */
                disabled: function(value) {
                    return value.disabled === true;
                },
                /**
                 * @param {Node} node
                 * @return {?}
                 */
                checked: function(node) {
                    var b = node.nodeName.toLowerCase();
                    return "input" === b && !!node.checked || "option" === b && !!node.selected;
                },
                /**
                 * @param {Node} elem
                 * @return {?}
                 */
                selected: function(elem) {
                    return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === true;
                },
                /**
                 * @param {Object} elem
                 * @return {?}
                 */
                empty: function(elem) {
                    elem = elem.firstChild;
                    for (; elem; elem = elem.nextSibling) {
                        if (elem.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                /**
                 * @param {Object} elem
                 * @return {?}
                 */
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem);
                },
                /**
                 * @param {Node} elem
                 * @return {?}
                 */
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                /**
                 * @param {Node} elem
                 * @return {?}
                 */
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                /**
                 * @param {Node} elem
                 * @return {?}
                 */
                button: function(elem) {
                    var b = elem.nodeName.toLowerCase();
                    return "input" === b && "button" === elem.type || "button" === b;
                },
                /**
                 * @param {Node} elem
                 * @return {?}
                 */
                text: function(elem) {
                    var evt;
                    return "input" === elem.nodeName.toLowerCase() && ("text" === elem.type && (null == (evt = elem.getAttribute("type")) || "text" === evt.toLowerCase()));
                },
                first: createPositionalPseudo(function() {
                    return [0];
                }),
                last: createPositionalPseudo(function(dataAndEvents, deepDataAndEvents) {
                    return [deepDataAndEvents - 1];
                }),
                eq: createPositionalPseudo(function(dataAndEvents, length, argument) {
                    return [argument < 0 ? argument + length : argument];
                }),
                even: createPositionalPseudo(function(matchIndexes, dataAndEvents) {
                    /** @type {number} */
                    var camelKey = 0;
                    for (; camelKey < dataAndEvents; camelKey += 2) {
                        matchIndexes.push(camelKey);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, dataAndEvents) {
                    /** @type {number} */
                    var camelKey = 1;
                    for (; camelKey < dataAndEvents; camelKey += 2) {
                        matchIndexes.push(camelKey);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var camelKey = argument < 0 ? argument + length : argument;
                    for (; --camelKey >= 0;) {
                        matchIndexes.push(camelKey);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var camelKey = argument < 0 ? argument + length : argument;
                    for (; ++camelKey < length;) {
                        matchIndexes.push(camelKey);
                    }
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
                submit: true,
                reset: true
            }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(camelKey, parseOnly) {
            var matched;
            var match;
            var tokens;
            var type;
            var soFar;
            var groups;
            var preFilters;
            var cached = tokenCache[camelKey + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            /** @type {string} */
            soFar = camelKey;
            /** @type {Array} */
            groups = [];
            preFilters = Expr.preFilter;
            for (; soFar;) {
                if (!(matched && !(match = rcomma.exec(soFar)))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                /** @type {boolean} */
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    /** @type {string} */
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                    if (!!(match = matchExpr[type].exec(soFar))) {
                        if (!(preFilters[type] && !(match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(camelKey) : tokenCache(camelKey, groups).slice(0);
        }, compile = Sizzle.compile = function(selector, group) {
            var i;
            /** @type {Array} */
            var setMatchers = [];
            /** @type {Array} */
            var elementMatchers = [];
            var camelKey = compilerCache[selector + " "];
            if (!camelKey) {
                if (!group) {
                    group = tokenize(selector);
                }
                i = group.length;
                for (; i--;) {
                    camelKey = matcherFromTokens(group[i]);
                    if (camelKey[expando]) {
                        setMatchers.push(camelKey);
                    } else {
                        elementMatchers.push(camelKey);
                    }
                }
                camelKey = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                /** @type {string} */
                camelKey.selector = selector;
            }
            return camelKey;
        }, select = Sizzle.select = function(selector, prop, results, camelKey) {
            var i;
            var tokens;
            var token;
            var type;
            var find;
            /** @type {(Function|boolean)} */
            var compiled = "function" == typeof selector && selector;
            var match = !camelKey && tokenize(selector = compiled.selector || selector);
            if (results = results || [], 1 === match.length) {
                if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && ("ID" === (token = tokens[0]).type && (support.getById && (9 === prop.nodeType && (documentIsHTML && Expr.relative[tokens[1].type]))))) {
                    if (prop = (Expr.find.ID(token.matches[0].replace(runescape, funescape), prop) || [])[0], !prop) {
                        return results;
                    }
                    if (compiled) {
                        prop = prop.parentNode;
                    }
                    selector = selector.slice(tokens.shift().value.length);
                }
                i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
                    if ((find = Expr.find[type]) && (camelKey = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(prop.parentNode) || prop))) {
                        if (tokens.splice(i, 1), selector = camelKey.length && toSelector(tokens), !selector) {
                            return push.apply(results, camelKey), results;
                        }
                        break;
                    }
                }
            }
            return (compiled || compile(selector, match))(camelKey, prop, !documentIsHTML, results, !prop || (rsibling.test(selector) && testContext(prop.parentNode) || prop)), results;
        }, support.sortStable = expando.split("").sort(a).join("") === expando, support.detectDuplicates = !!stability, fn(), support.sortDetached = assert(function(div1) {
            return 1 & div1.compareDocumentPosition(doc.createElement("div"));
        }), assert(function(div) {
            return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href");
        }) || addHandle("type|href|height|width", function(demoLink, camelKey, dataAndEvents) {
            if (!dataAndEvents) {
                return demoLink.getAttribute(camelKey, "type" === camelKey.toLowerCase() ? 1 : 2);
            }
        }), support.attributes && assert(function(div) {
            return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value");
        }) || addHandle("value", function(target, deepDataAndEvents, dataAndEvents) {
            if (!dataAndEvents && "input" === target.nodeName.toLowerCase()) {
                return target.defaultValue;
            }
        }), assert(function(div) {
            return null == div.getAttribute("disabled");
        }) || addHandle(booleans, function(elem, name, dataAndEvents) {
            var val;
            if (!dataAndEvents) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
        }), Sizzle;
    }(context);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    /**
     * @param {string} camelKey
     * @param {string} dir
     * @param {string} until
     * @return {?}
     */
    var dir = function(camelKey, dir, until) {
        /** @type {Array} */
        var matched = [];
        /** @type {boolean} */
        var truncate = void 0 !== until;
        for (;
            (camelKey = camelKey[dir]) && 9 !== camelKey.nodeType;) {
            if (1 === camelKey.nodeType) {
                if (truncate && jQuery(camelKey).is(until)) {
                    break;
                }
                matched.push(camelKey);
            }
        }
        return matched;
    };
    /**
     * @param {string} camelKey
     * @param {string} elem
     * @return {?}
     */
    var _sibling = function(camelKey, elem) {
        /** @type {Array} */
        var result = [];
        for (; camelKey; camelKey = camelKey.nextSibling) {
            if (1 === camelKey.nodeType) {
                if (camelKey !== elem) {
                    result.push(camelKey);
                }
            }
        }
        return result;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    /** @type {RegExp} */
    var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
    /** @type {RegExp} */
    var reWhitespace = /^.[^:#\[\.,]*$/;
    /**
     * @param {string} value
     * @param {?} tests
     * @param {Object} key
     * @return {?}
     */
    jQuery.filter = function(value, tests, key) {
        var elem = tests[0];
        return key && (value = ":not(" + value + ")"), 1 === tests.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, value) ? [elem] : [] : jQuery.find.matches(value, jQuery.grep(tests, function(dest) {
            return 1 === dest.nodeType;
        }));
    };
    jQuery.fn.extend({
        /**
         * @param {string} selector
         * @return {?}
         */
        find: function(selector) {
            var i;
            var len = this.length;
            /** @type {Array} */
            var ret = [];
            var self = this;
            if ("string" != typeof selector) {
                return this.pushStack(jQuery(selector).filter(function() {
                    /** @type {number} */
                    i = 0;
                    for (; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            /** @type {number} */
            i = 0;
            for (; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret;
        },
        /**
         * @param {string} value
         * @return {?}
         */
        filter: function(value) {
            return this.pushStack(winnow(this, value || [], false));
        },
        /**
         * @param {Array} selector
         * @return {?}
         */
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        /**
         * @param {string} camelKey
         * @return {?}
         */
        is: function(camelKey) {
            return !!winnow(this, "string" == typeof camelKey && rneedsContext.test(camelKey) ? jQuery(camelKey) : camelKey || [], false).length;
        }
    });
    var object;
    /** @type {RegExp} */
    var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    /** @type {function (Object, Object, number): ?} */
    var T = jQuery.fn.init = function(selector, context, rootjQuery) {
        var match;
        var a;
        if (!selector) {
            return this;
        }
        if (rootjQuery = rootjQuery || object, "string" == typeof selector) {
            if (match = "<" === selector[0] && (">" === selector[selector.length - 1] && selector.length >= 3) ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) {
                return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
            }
            if (match[1]) {
                if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : doc, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                    for (match in context) {
                        if (jQuery.isFunction(this[match])) {
                            this[match](context[match]);
                        } else {
                            this.attr(match, context[match]);
                        }
                    }
                }
                return this;
            }
            return a = doc.getElementById(match[2]), a && (a.parentNode && (this.length = 1, this[0] = a)), this.context = doc, this.selector = selector, this;
        }
        return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? void 0 !== rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this));
    };
    T.prototype = jQuery.fn;
    object = jQuery(doc);
    /** @type {RegExp} */
    var rparentsprev = /^(?:parents|prev(?:Until|All))/;
    var guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        /**
         * @param {string} camelKey
         * @return {?}
         */
        has: function(camelKey) {
            var targets = jQuery(camelKey, this);
            var l = targets.length;
            return this.filter(function() {
                /** @type {number} */
                var i = 0;
                for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        /**
         * @param {string} pdataOld
         * @param {(number|string)} context
         * @return {?}
         */
        closest: function(pdataOld, context) {
            var camelKey;
            /** @type {number} */
            var i = 0;
            var l = this.length;
            /** @type {Array} */
            var matched = [];
            var pos = rneedsContext.test(pdataOld) || "string" != typeof pdataOld ? jQuery(pdataOld, context || this.context) : 0;
            for (; i < l; i++) {
                camelKey = this[i];
                for (; camelKey && camelKey !== context; camelKey = camelKey.parentNode) {
                    if (camelKey.nodeType < 11 && (pos ? pos.index(camelKey) > -1 : 1 === camelKey.nodeType && jQuery.find.matchesSelector(camelKey, pdataOld))) {
                        matched.push(camelKey);
                        break;
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        /**
         * @param {string} camelKey
         * @return {?}
         */
        index: function(camelKey) {
            return camelKey ? "string" == typeof camelKey ? core_indexOf.call(jQuery(camelKey), this[0]) : core_indexOf.call(this, camelKey.jquery ? camelKey[0] : camelKey) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        /**
         * @param {string} selector
         * @param {?} method
         * @return {?}
         */
        add: function(selector, method) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, method))));
        },
        /**
         * @param {string} camelKey
         * @return {?}
         */
        addBack: function(camelKey) {
            return this.add(null == camelKey ? this.prevObject : this.prevObject.filter(camelKey));
        }
    });
    jQuery.each({
        /**
         * @param {Node} elem
         * @return {?}
         */
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null;
        },
        /**
         * @param {string} el
         * @return {?}
         */
        parents: function(el) {
            return dir(el, "parentNode");
        },
        /**
         * @param {string} el
         * @param {?} i
         * @param {string} until
         * @return {?}
         */
        parentsUntil: function(el, i, until) {
            return dir(el, "parentNode", until);
        },
        /**
         * @param {string} value
         * @return {?}
         */
        next: function(value) {
            return sibling(value, "nextSibling");
        },
        /**
         * @param {string} value
         * @return {?}
         */
        prev: function(value) {
            return sibling(value, "previousSibling");
        },
        /**
         * @param {string} el
         * @return {?}
         */
        nextAll: function(el) {
            return dir(el, "nextSibling");
        },
        /**
         * @param {string} el
         * @return {?}
         */
        prevAll: function(el) {
            return dir(el, "previousSibling");
        },
        /**
         * @param {string} el
         * @param {?} i
         * @param {string} until
         * @return {?}
         */
        nextUntil: function(el, i, until) {
            return dir(el, "nextSibling", until);
        },
        /**
         * @param {string} el
         * @param {?} i
         * @param {string} until
         * @return {?}
         */
        prevUntil: function(el, i, until) {
            return dir(el, "previousSibling", until);
        },
        /**
         * @param {Text} elem
         * @return {?}
         */
        siblings: function(elem) {
            return _sibling((elem.parentNode || {}).firstChild, elem);
        },
        /**
         * @param {Element} elem
         * @return {?}
         */
        children: function(elem) {
            return _sibling(elem.firstChild);
        },
        /**
         * @param {Element} elem
         * @return {?}
         */
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, restoreScript) {
        /**
         * @param {string} until
         * @param {string} camelKey
         * @return {?}
         */
        jQuery.fn[name] = function(until, camelKey) {
            var prop = jQuery.map(this, restoreScript, until);
            return "Until" !== name.slice(-5) && (camelKey = until), camelKey && ("string" == typeof camelKey && (prop = jQuery.filter(camelKey, prop))), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(prop), rparentsprev.test(name) && prop.reverse()), this.pushStack(prop);
        };
    });
    /** @type {RegExp} */
    var core_rnotwhite = /\S+/g;
    /**
     * @param {string} options
     * @return {?}
     */
    jQuery.Callbacks = function(options) {
        options = "string" == typeof options ? createOptions(options) : jQuery.extend({}, options);
        var memory;
        var camelKey;
        var stack;
        var _ref2;
        /** @type {Array} */
        var list = [];
        /** @type {Array} */
        var exps = [];
        /** @type {number} */
        var count = -1;
        /**
         * @return {undefined}
         */
        var fire = function() {
            _ref2 = options.once;
            /** @type {boolean} */
            stack = memory = true;
            for (; exps.length; count = -1) {
                camelKey = exps.shift();
                for (; ++count < list.length;) {
                    if (list[count].apply(camelKey[0], camelKey[1]) === false) {
                        if (options.stopOnFalse) {
                            count = list.length;
                            /** @type {boolean} */
                            camelKey = false;
                        }
                    }
                }
            }
            if (!options.memory) {
                /** @type {boolean} */
                camelKey = false;
            }
            /** @type {boolean} */
            memory = false;
            if (_ref2) {
                /** @type {(Array|string)} */
                list = camelKey ? [] : "";
            }
        };
        var self = {
            /**
             * @return {?}
             */
            add: function() {
                return list && (camelKey && (!memory && (count = list.length - 1, exps.push(camelKey))), function add(args) {
                    jQuery.each(args, function(dataAndEvents, camelKey) {
                        if (jQuery.isFunction(camelKey)) {
                            if (!(options.unique && self.has(camelKey))) {
                                list.push(camelKey);
                            }
                        } else {
                            if (camelKey) {
                                if (camelKey.length) {
                                    if ("string" !== jQuery.type(camelKey)) {
                                        add(camelKey);
                                    }
                                }
                            }
                        }
                    });
                }(arguments), camelKey && (!memory && fire())), this;
            },
            /**
             * @return {?}
             */
            remove: function() {
                return jQuery.each(arguments, function(dataAndEvents, arg) {
                    var index;
                    for (;
                        (index = jQuery.inArray(arg, list, index)) > -1;) {
                        list.splice(index, 1);
                        if (index <= count) {
                            count--;
                        }
                    }
                }), this;
            },
            /**
             * @param {string} key
             * @return {?}
             */
            has: function(key) {
                return key ? jQuery.inArray(key, list) > -1 : list.length > 0;
            },
            /**
             * @return {?}
             */
            empty: function() {
                return list && (list = []), this;
            },
            /**
             * @return {?}
             */
            disable: function() {
                return _ref2 = exps = [], list = camelKey = "", this;
            },
            /**
             * @return {?}
             */
            disabled: function() {
                return !list;
            },
            /**
             * @return {?}
             */
            lock: function() {
                return _ref2 = exps = [], camelKey || (list = camelKey = ""), this;
            },
            /**
             * @return {?}
             */
            locked: function() {
                return !!_ref2;
            },
            /**
             * @param {?} key
             * @param {string} camelKey
             * @return {?}
             */
            fireWith: function(key, camelKey) {
                return _ref2 || (camelKey = camelKey || [], camelKey = [key, camelKey.slice ? camelKey.slice() : camelKey], exps.push(camelKey), memory || fire()), this;
            },
            /**
             * @return {?}
             */
            fire: function() {
                return self.fireWith(this, arguments), this;
            },
            /**
             * @return {?}
             */
            fired: function() {
                return !!stack;
            }
        };
        return self;
    };
    jQuery.extend({
        /**
         * @param {Function} func
         * @return {?}
         */
        Deferred: function(func) {
            /** @type {Array} */
            var which = [
                ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                ["notify", "progress", jQuery.Callbacks("memory")]
            ];
            /** @type {string} */
            var state = "pending";
            var promise = {
                /**
                 * @return {?}
                 */
                state: function() {
                    return state;
                },
                /**
                 * @return {?}
                 */
                always: function() {
                    return deferred.done(arguments).fail(arguments), this;
                },
                /**
                 * @return {?}
                 */
                then: function() {
                    /** @type {Arguments} */
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(which, function(i, tuple) {
                            var fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                } else {
                                    newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                                }
                            });
                        });
                        /** @type {null} */
                        fns = null;
                    }).promise();
                },
                /**
                 * @param {string} obj
                 * @return {?}
                 */
                promise: function(obj) {
                    return null != obj ? jQuery.extend(obj, promise) : promise;
                }
            };
            var deferred = {};
            return promise.pipe = promise.then, jQuery.each(which, function(dataAndEvents, tuple) {
                var list = tuple[2];
                var stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, which[1 ^ dataAndEvents][2].disable, which[2][2].lock);
                }
                /**
                 * @return {?}
                 */
                deferred[tuple[0]] = function() {
                    return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
        },
        /**
         * @param {Object} subordinate
         * @return {?}
         */
        when: function(subordinate) {
            var progressValues;
            var progressContexts;
            var resolveContexts;
            /** @type {number} */
            var i = 0;
            /** @type {Array.<?>} */
            var resolveValues = core_slice.call(arguments);
            /** @type {number} */
            var length = resolveValues.length;
            /** @type {number} */
            var remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0;
            var deferred = 1 === remaining ? subordinate : jQuery.Deferred();
            /**
             * @param {number} i
             * @param {(Array|NodeList)} contexts
             * @param {Array} values
             * @return {?}
             */
            var updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else {
                        if (!--remaining) {
                            deferred.resolveWith(contexts, values);
                        }
                    }
                };
            };
            if (length > 1) {
                /** @type {Array} */
                progressValues = new Array(length);
                /** @type {Array} */
                progressContexts = new Array(length);
                /** @type {Array} */
                resolveContexts = new Array(length);
                for (; i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
                    } else {
                        --remaining;
                    }
                }
            }
            return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
        }
    });
    var readyList;
    /**
     * @param {string} camelKey
     * @return {?}
     */
    jQuery.fn.ready = function(camelKey) {
        return jQuery.ready.promise().done(camelKey), this;
    };
    jQuery.extend({
        isReady: false,
        readyWait: 1,
        /**
         * @param {?} hold
         * @return {undefined}
         */
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        /**
         * @param {boolean} wait
         * @return {undefined}
         */
        ready: function(wait) {
            if (!(wait === true ? --jQuery.readyWait : jQuery.isReady)) {
                /** @type {boolean} */
                jQuery.isReady = true;
                if (!(wait !== true && --jQuery.readyWait > 0)) {
                    readyList.resolveWith(doc, [jQuery]);
                    if (jQuery.fn.triggerHandler) {
                        jQuery(doc).triggerHandler("ready");
                        jQuery(doc).off("ready");
                    }
                }
            }
        }
    });
    /**
     * @param {string} obj
     * @return {?}
     */
    jQuery.ready.promise = function(obj) {
        return readyList || (readyList = jQuery.Deferred(), "complete" === doc.readyState || "loading" !== doc.readyState && !doc.documentElement.doScroll ? context.setTimeout(jQuery.ready) : (doc.addEventListener("DOMContentLoaded", completed), context.addEventListener("load", completed))), readyList.promise(obj);
    };
    jQuery.ready.promise();
    /**
     * @param {string} elems
     * @param {Function} fn
     * @param {string} key
     * @param {string} value
     * @param {boolean} chainable
     * @param {string} emptyGet
     * @param {boolean} raw
     * @return {?}
     */
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        /** @type {number} */
        var i = 0;
        var length = elems.length;
        /** @type {boolean} */
        var bulk = null == key;
        if ("object" === jQuery.type(key)) {
            /** @type {boolean} */
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
            }
        } else {
            if (void 0 !== value && (chainable = true, jQuery.isFunction(value) || (raw = true), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(camelKey, event, value) {
                    return bulk.call(jQuery(camelKey), value);
                })), fn)) {
                for (; i < length; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
        return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    var next = function(elem) {
        return 1 === elem.nodeType || (9 === elem.nodeType || !+elem.nodeType);
    };
    /** @type {number} */
    get.uid = 1;
    get.prototype = {
        /**
         * @param {?} obj
         * @param {(number|string)} names
         * @return {?}
         */
        register: function(obj, names) {
            var val = names || {};
            return obj.nodeType ? obj[this.expando] = val : Object.defineProperty(obj, this.expando, {
                value: val,
                writable: true,
                configurable: true
            }), obj[this.expando];
        },
        /**
         * @param {?} owner
         * @return {?}
         */
        cache: function(owner) {
            if (!next(owner)) {
                return {};
            }
            var unlock = owner[this.expando];
            return unlock || (unlock = {}, next(owner) && (owner.nodeType ? owner[this.expando] = unlock : Object.defineProperty(owner, this.expando, {
                value: unlock,
                configurable: true
            }))), unlock;
        },
        /**
         * @param {Object} elems
         * @param {string} value
         * @param {string} object
         * @return {?}
         */
        set: function(elems, value, object) {
            var key;
            var result = this.cache(elems);
            if ("string" == typeof value) {
                /** @type {string} */
                result[value] = object;
            } else {
                for (key in value) {
                    result[key] = value[key];
                }
            }
            return result;
        },
        /**
         * @param {string} owner
         * @param {string} value
         * @return {?}
         */
        get: function(owner, value) {
            return void 0 === value ? this.cache(owner) : owner[this.expando] && owner[this.expando][value];
        },
        /**
         * @param {string} elem
         * @param {string} key
         * @param {string} value
         * @return {?}
         */
        access: function(elem, key, value) {
            var data;
            return void 0 === key || key && ("string" == typeof key && void 0 === value) ? (data = this.get(elem, key), void 0 !== data ? data : this.get(elem, jQuery.camelCase(key))) : (this.set(elem, key, value), void 0 !== value ? value : key);
        },
        /**
         * @param {?} owner
         * @param {?} key
         * @return {undefined}
         */
        remove: function(owner, key) {
            var i;
            var name;
            var camel;
            var cache = owner[this.expando];
            if (void 0 !== cache) {
                if (void 0 === key) {
                    this.register(owner);
                } else {
                    if (jQuery.isArray(key)) {
                        name = key.concat(key.map(jQuery.camelCase));
                    } else {
                        camel = jQuery.camelCase(key);
                        if (key in cache) {
                            /** @type {Array} */
                            name = [key, camel];
                        } else {
                            name = camel;
                            name = name in cache ? [name] : name.match(core_rnotwhite) || [];
                        }
                    }
                    i = name.length;
                    for (; i--;) {
                        delete cache[name[i]];
                    }
                }
                if (void 0 === key || jQuery.isEmptyObject(cache)) {
                    if (owner.nodeType) {
                        owner[this.expando] = void 0;
                    } else {
                        delete owner[this.expando];
                    }
                }
            }
        },
        /**
         * @param {string} owner
         * @return {?}
         */
        hasData: function(owner) {
            var cache = owner[this.expando];
            return void 0 !== cache && !jQuery.isEmptyObject(cache);
        }
    };
    var data_priv = new get;
    var data_user = new get;
    /** @type {RegExp} */
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    /** @type {RegExp} */
    var r20 = /[A-Z]/g;
    jQuery.extend({
        /**
         * @param {string} elem
         * @return {?}
         */
        hasData: function(elem) {
            return data_user.hasData(elem) || data_priv.hasData(elem);
        },
        /**
         * @param {string} value
         * @param {?} tests
         * @param {Object} data
         * @return {?}
         */
        data: function(value, tests, data) {
            return data_user.access(value, tests, data);
        },
        /**
         * @param {string} elem
         * @param {string} name
         * @return {undefined}
         */
        removeData: function(elem, name) {
            data_user.remove(elem, name);
        },
        /**
         * @param {string} src
         * @param {string} name
         * @param {string} data
         * @return {?}
         */
        _data: function(src, name, data) {
            return data_priv.access(src, name, data);
        },
        /**
         * @param {string} elem
         * @param {string} name
         * @return {undefined}
         */
        _removeData: function(elem, name) {
            data_priv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        /**
         * @param {string} key
         * @param {?} expectation
         * @return {?}
         */
        data: function(key, expectation) {
            var len;
            var name;
            var data;
            var elem = this[0];
            var attrs = elem && elem.attributes;
            if (void 0 === key) {
                if (this.length && (data = data_user.get(elem), 1 === elem.nodeType && !data_priv.get(elem, "hasDataAttrs"))) {
                    len = attrs.length;
                    for (; len--;) {
                        if (attrs[len]) {
                            name = attrs[len].name;
                            if (0 === name.indexOf("data-")) {
                                name = jQuery.camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                    }
                    data_priv.set(elem, "hasDataAttrs", true);
                }
                return data;
            }
            return "object" == typeof key ? this.each(function() {
                data_user.set(this, key);
            }) : access(this, function(value) {
                var data;
                var camelKey;
                if (elem && void 0 === value) {
                    if (data = data_user.get(elem, key) || data_user.get(elem, key.replace(r20, "-$&").toLowerCase()), void 0 !== data) {
                        return data;
                    }
                    if (camelKey = jQuery.camelCase(key), data = data_user.get(elem, camelKey), void 0 !== data) {
                        return data;
                    }
                    if (data = dataAttr(elem, camelKey, void 0), void 0 !== data) {
                        return data;
                    }
                } else {
                    camelKey = jQuery.camelCase(key);
                    this.each(function() {
                        var data = data_user.get(this, camelKey);
                        data_user.set(this, camelKey, value);
                        if (key.indexOf("-") > -1) {
                            if (void 0 !== data) {
                                data_user.set(this, key, value);
                            }
                        }
                    });
                }
            }, null, expectation, arguments.length > 1, null, true);
        },
        /**
         * @param {string} name
         * @return {?}
         */
        removeData: function(name) {
            return this.each(function() {
                data_user.remove(this, name);
            });
        }
    });
    jQuery.extend({
        /**
         * @param {string} elem
         * @param {string} type
         * @param {string} camelKey
         * @return {?}
         */
        queue: function(elem, type, camelKey) {
            var queue;
            if (elem) {
                return type = (type || "fx") + "queue", queue = data_priv.get(elem, type), camelKey && (!queue || jQuery.isArray(camelKey) ? queue = data_priv.access(elem, type, jQuery.makeArray(camelKey)) : queue.push(camelKey)), queue || [];
            }
        },
        /**
         * @param {string} elem
         * @param {string} type
         * @return {undefined}
         */
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type);
            var ln = queue.length;
            var fn = queue.shift();
            var hooks = jQuery._queueHooks(elem, type);
            /**
             * @return {undefined}
             */
            var next = function() {
                jQuery.dequeue(elem, type);
            };
            if ("inprogress" === fn) {
                fn = queue.shift();
                ln--;
            }
            if (fn) {
                if ("fx" === type) {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!ln) {
                if (hooks) {
                    hooks.empty.fire();
                }
            }
        },
        /**
         * @param {string} elem
         * @param {string} type
         * @return {?}
         */
        _queueHooks: function(elem, type) {
            /** @type {string} */
            var key = type + "queueHooks";
            return data_priv.get(elem, key) || data_priv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(elem, [type + "queue", key]);
                })
            });
        }
    });
    jQuery.fn.extend({
        /**
         * @param {string} type
         * @param {string} data
         * @return {?}
         */
        queue: function(type, data) {
            /** @type {number} */
            var setter = 2;
            return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if ("fx" === type) {
                    if ("inprogress" !== queue[0]) {
                        jQuery.dequeue(this, type);
                    }
                }
            });
        },
        /**
         * @param {string} type
         * @return {?}
         */
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        /**
         * @param {string} type
         * @return {?}
         */
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        /**
         * @param {string} type
         * @param {string} obj
         * @return {?}
         */
        promise: function(type, obj) {
            var body;
            /** @type {number} */
            var n = 1;
            var defer = jQuery.Deferred();
            var elements = this;
            var i = this.length;
            /**
             * @return {undefined}
             */
            var resolve = function() {
                if (!--n) {
                    defer.resolveWith(elements, [elements]);
                }
            };
            if ("string" != typeof type) {
                /** @type {string} */
                obj = type;
                type = void 0;
            }
            type = type || "fx";
            for (; i--;) {
                body = data_priv.get(elements[i], type + "queueHooks");
                if (body) {
                    if (body.empty) {
                        n++;
                        body.empty.add(resolve);
                    }
                }
            }
            return resolve(), defer.promise(obj);
        }
    });
    /** @type {string} */
    var core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    /** @type {RegExp} */
    var rtagName = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i");
    /** @type {Array} */
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    /**
     * @param {Object} b
     * @param {Function} a
     * @return {?}
     */
    var camelKey = function(b, a) {
        return b = a || b, "none" === jQuery.css(b, "display") || !jQuery.contains(b.ownerDocument, b);
    };
    /** @type {RegExp} */
    var manipulation_rcheckableType = /^(?:checkbox|radio)$/i;
    /** @type {RegExp} */
    var matches = /<([\w:-]+)/;
    /** @type {RegExp} */
    var rchecked = /^$|\/(?:java|ecma)script/i;
    var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    /** @type {Array} */
    wrapMap.optgroup = wrapMap.option;
    /** @type {Array} */
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    /** @type {Array} */
    wrapMap.th = wrapMap.td;
    /** @type {RegExp} */
    var rhtml = /<|&#?\w+;/;
    ! function() {
        var fragment = doc.createDocumentFragment();
        var form = fragment.appendChild(doc.createElement("div"));
        var input = doc.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        form.appendChild(input);
        support.checkClone = form.cloneNode(true).cloneNode(true).lastChild.checked;
        /** @type {string} */
        form.innerHTML = "<textarea>x</textarea>";
        /** @type {boolean} */
        support.noCloneChecked = !!form.cloneNode(true).lastChild.defaultValue;
    }();
    /** @type {RegExp} */
    var rmouseEvent = /^key/;
    /** @type {RegExp} */
    var rkeyEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    /** @type {RegExp} */
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    jQuery.event = {
        global: {},
        /**
         * @param {Object} elem
         * @param {Object} types
         * @param {Function} handler
         * @param {Object} data
         * @param {number} selector
         * @return {undefined}
         */
        add: function(elem, types, handler, data, selector) {
            var handleObjIn;
            var eventHandle;
            var segmentMatch;
            var events;
            var t;
            var camelKey;
            var special;
            var handlers;
            var type;
            var assertion;
            var origType;
            var elemData = data_priv.get(elem);
            if (elemData) {
                if (handler.handler) {
                    /** @type {Function} */
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector;
                }
                if (!handler.guid) {
                    /** @type {number} */
                    handler.guid = jQuery.guid++;
                }
                if (!(events = elemData.events)) {
                    events = elemData.events = {};
                }
                if (!(eventHandle = elemData.handle)) {
                    /** @type {function (Event): ?} */
                    eventHandle = elemData.handle = function(e) {
                        return "undefined" != typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                    };
                }
                types = (types || "").match(core_rnotwhite) || [""];
                t = types.length;
                for (; t--;) {
                    /** @type {Array} */
                    segmentMatch = rtypenamespace.exec(types[t]) || [];
                    type = origType = segmentMatch[1];
                    assertion = (segmentMatch[2] || "").split(".").sort();
                    if (type) {
                        special = jQuery.event.special[type] || {};
                        type = (selector ? special.delegateType : special.bindType) || type;
                        special = jQuery.event.special[type] || {};
                        camelKey = jQuery.extend({
                            type: type,
                            origType: origType,
                            data: data,
                            /** @type {Function} */
                            handler: handler,
                            guid: handler.guid,
                            selector: selector,
                            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                            namespace: assertion.join(".")
                        }, handleObjIn);
                        if (!(handlers = events[type])) {
                            /** @type {Array} */
                            handlers = events[type] = [];
                            /** @type {number} */
                            handlers.delegateCount = 0;
                            if (!(special.setup && special.setup.call(elem, data, assertion, eventHandle) !== false)) {
                                if (elem.addEventListener) {
                                    elem.addEventListener(type, eventHandle);
                                }
                            }
                        }
                        if (special.add) {
                            special.add.call(elem, camelKey);
                            if (!camelKey.handler.guid) {
                                camelKey.handler.guid = handler.guid;
                            }
                        }
                        if (selector) {
                            handlers.splice(handlers.delegateCount++, 0, camelKey);
                        } else {
                            handlers.push(camelKey);
                        }
                        /** @type {boolean} */
                        jQuery.event.global[type] = true;
                    }
                }
            }
        },
        /**
         * @param {string} elem
         * @param {string} types
         * @param {Function} handler
         * @param {boolean} selector
         * @param {boolean} keepData
         * @return {undefined}
         */
        remove: function(elem, types, handler, selector, keepData) {
            var j;
            var origCount;
            var tmp;
            var events;
            var t;
            var handleObj;
            var special;
            var handlers;
            var type;
            var header;
            var origType;
            var elemData = data_priv.hasData(elem) && data_priv.get(elem);
            if (elemData && (events = elemData.events)) {
                types = (types || "").match(core_rnotwhite) || [""];
                t = types.length;
                for (; t--;) {
                    if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], header = (tmp[2] || "").split(".").sort(), type) {
                        special = jQuery.event.special[type] || {};
                        type = (selector ? special.delegateType : special.bindType) || type;
                        handlers = events[type] || [];
                        tmp = tmp[2] && new RegExp("(^|\\.)" + header.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        origCount = j = handlers.length;
                        for (; j--;) {
                            handleObj = handlers[j];
                            if (!(!keepData && origType !== handleObj.origType)) {
                                if (!(handler && handler.guid !== handleObj.guid)) {
                                    if (!(tmp && !tmp.test(handleObj.namespace))) {
                                        if (!(selector && (selector !== handleObj.selector && ("**" !== selector || !handleObj.selector)))) {
                                            handlers.splice(j, 1);
                                            if (handleObj.selector) {
                                                handlers.delegateCount--;
                                            }
                                            if (special.remove) {
                                                special.remove.call(elem, handleObj);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (origCount) {
                            if (!handlers.length) {
                                if (!(special.teardown && special.teardown.call(elem, header, elemData.handle) !== false)) {
                                    jQuery.removeEvent(elem, type, elemData.handle);
                                }
                                delete events[type];
                            }
                        }
                    } else {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, true);
                        }
                    }
                }
                if (jQuery.isEmptyObject(events)) {
                    data_priv.remove(elem, "handle events");
                }
            }
        },
        /**
         * @param {Object} event
         * @return {?}
         */
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i;
            var j;
            var ret;
            var matched;
            var handleObj;
            /** @type {Array} */
            var handlerQueue = [];
            /** @type {Array.<?>} */
            var args = core_slice.call(arguments);
            var helperMissingString = (data_priv.get(this, "events") || {})[event.type] || [];
            var special = jQuery.event.special[event.type] || {};
            if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== false) {
                handlerQueue = jQuery.event.handlers.call(this, event, helperMissingString);
                /** @type {number} */
                i = 0;
                for (;
                    (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
                    event.currentTarget = matched.elem;
                    /** @type {number} */
                    j = 0;
                    for (;
                        (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
                        if (!(event.rnamespace && !event.rnamespace.test(handleObj.namespace))) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (void 0 !== ret) {
                                if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                    }
                }
                return special.postDispatch && special.postDispatch.call(this, event), event.result;
            }
        },
        /**
         * @param {Event} event
         * @param {Object} handlers
         * @return {?}
         */
        handlers: function(event, handlers) {
            var i;
            var configList;
            var __className__;
            var camelKey;
            /** @type {Array} */
            var handlerQueue = [];
            var delegateCount = handlers.delegateCount;
            var cur = event.target;
            if (delegateCount && (cur.nodeType && ("click" !== event.type || (isNaN(event.button) || event.button < 1)))) {
                for (; cur !== this; cur = cur.parentNode || this) {
                    if (1 === cur.nodeType && (cur.disabled !== true || "click" !== event.type)) {
                        /** @type {Array} */
                        configList = [];
                        /** @type {number} */
                        i = 0;
                        for (; i < delegateCount; i++) {
                            camelKey = handlers[i];
                            /** @type {string} */
                            __className__ = camelKey.selector + " ";
                            if (void 0 === configList[__className__]) {
                                configList[__className__] = camelKey.needsContext ? jQuery(__className__, this).index(cur) > -1 : jQuery.find(__className__, this, null, [cur]).length;
                            }
                            if (configList[__className__]) {
                                configList.push(camelKey);
                            }
                        }
                        if (configList.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: configList
                            });
                        }
                    }
                }
            }
            return delegateCount < handlers.length && handlerQueue.push({
                elem: this,
                handlers: handlers.slice(delegateCount)
            }), handlerQueue;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            /**
             * @param {string} value
             * @param {?} tests
             * @return {?}
             */
            filter: function(value, tests) {
                return null == value.which && (value.which = null != tests.charCode ? tests.charCode : tests.keyCode), value;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            /**
             * @param {string} value
             * @param {?} proto
             * @return {?}
             */
            filter: function(value, proto) {
                var d;
                var de;
                var b;
                var old = proto.button;
                return null == value.pageX && (null != proto.clientX && (d = value.target.ownerDocument || doc, de = d.documentElement, b = d.body, value.pageX = proto.clientX + (de && de.scrollLeft || (b && b.scrollLeft || 0)) - (de && de.clientLeft || (b && b.clientLeft || 0)), value.pageY = proto.clientY + (de && de.scrollTop || (b && b.scrollTop || 0)) - (de && de.clientTop || (b && b.clientTop || 0)))), value.which || (void 0 === old || (value.which = 1 & old ? 1 : 2 & old ? 3 : 4 & old ? 2 : 0)), value;
            }
        },
        /**
         * @param {string} event
         * @return {?}
         */
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i;
            var prop;
            var copy;
            var type = event.type;
            /** @type {string} */
            var originalEvent = event;
            var fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rkeyEvent.test(type) ? this.mouseHooks : rmouseEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            for (; i--;) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            return event.target || (event.target = doc), 3 === event.target.nodeType && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                /**
                 * @return {?}
                 */
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        return this.focus(), false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                /**
                 * @return {?}
                 */
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        return this.blur(), false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                /**
                 * @return {?}
                 */
                trigger: function() {
                    if ("checkbox" === this.type && (this.click && jQuery.nodeName(this, "input"))) {
                        return this.click(), false;
                    }
                },
                /**
                 * @param {Object} value
                 * @return {?}
                 */
                _default: function(value) {
                    return jQuery.nodeName(value.target, "a");
                }
            },
            beforeunload: {
                /**
                 * @param {Object} event
                 * @return {undefined}
                 */
                postDispatch: function(event) {
                    if (void 0 !== event.result) {
                        if (event.originalEvent) {
                            event.originalEvent.returnValue = event.result;
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} elem
     * @param {string} type
     * @param {?} handle
     * @return {undefined}
     */
    jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
        }
    };
    /**
     * @param {string} value
     * @param {?} props
     * @return {?}
     */
    jQuery.Event = function(value, props) {
        return this instanceof jQuery.Event ? (value && value.type ? (this.originalEvent = value, this.type = value.type, this.isDefaultPrevented = value.defaultPrevented || void 0 === value.defaultPrevented && value.returnValue === false ? returnTrue : returnFalse) : this.type = value, props && jQuery.extend(this, props), this.timeStamp = value && value.timeStamp || jQuery.now(), void(this[jQuery.expando] = true)) : new jQuery.Event(value, props);
    };
    jQuery.Event.prototype = {
        /** @type {function (string, ?): ?} */
        constructor: jQuery.Event,
        /** @type {function (): ?} */
        isDefaultPrevented: returnFalse,
        /** @type {function (): ?} */
        isPropagationStopped: returnFalse,
        /** @type {function (): ?} */
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        /**
         * @return {undefined}
         */
        preventDefault: function() {
            var e = this.originalEvent;
            /** @type {function (): ?} */
            this.isDefaultPrevented = returnTrue;
            if (e) {
                if (!this.isSimulated) {
                    e.preventDefault();
                }
            }
        },
        /**
         * @return {undefined}
         */
        stopPropagation: function() {
            var e = this.originalEvent;
            /** @type {function (): ?} */
            this.isPropagationStopped = returnTrue;
            if (e) {
                if (!this.isSimulated) {
                    e.stopPropagation();
                }
            }
        },
        /**
         * @return {undefined}
         */
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            /** @type {function (): ?} */
            this.isImmediatePropagationStopped = returnTrue;
            if (e) {
                if (!this.isSimulated) {
                    e.stopImmediatePropagation();
                }
            }
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            /**
             * @param {Object} event
             * @return {?}
             */
            handle: function(event) {
                var returnValue;
                var target = this;
                var related = event.relatedTarget;
                var handleObj = event.handleObj;
                return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType, returnValue = handleObj.handler.apply(this, arguments), event.type = fix), returnValue;
            }
        };
    });
    jQuery.fn.extend({
        /**
         * @param {?} eventName
         * @param {Function} selector
         * @param {Object} one
         * @param {Object} fn
         * @return {?}
         */
        on: function(eventName, selector, one, fn) {
            return on(this, eventName, selector, one, fn);
        },
        /**
         * @param {Object} callback
         * @param {Object} selector
         * @param {Object} types
         * @param {Object} capture
         * @return {?}
         */
        one: function(callback, selector, types, capture) {
            return on(this, callback, selector, types, capture, 1);
        },
        /**
         * @param {Object} types
         * @param {Object} selector
         * @param {Object} fn
         * @return {?}
         */
        off: function(types, selector, fn) {
            var handleObj;
            var type;
            if (types && (types.preventDefault && types.handleObj)) {
                return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
            }
            if ("object" == typeof types) {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            return selector !== false && "function" != typeof selector || (fn = selector, selector = void 0), fn === false && (fn = returnFalse), this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    /** @type {RegExp} */
    var br = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi;
    /** @type {RegExp} */
    var rRadial = /<script|<style|<link/i;
    /** @type {RegExp} */
    var exclude = /checked\s*(?:[^=]|=\s*.checked.)/i;
    /** @type {RegExp} */
    var re = /^true\/(.*)/;
    /** @type {RegExp} */
    var rclass = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    jQuery.extend({
        /**
         * @param {string} b
         * @return {?}
         */
        htmlPrefilter: function(b) {
            return b.replace(br, "<$1></$2>");
        },
        /**
         * @param {Object} elem
         * @param {(boolean|number|string)} dataAndEvents
         * @param {(boolean|number|string)} deepDataAndEvents
         * @return {?}
         */
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i;
            var l;
            var srcElements;
            var destElements;
            var clone = elem.cloneNode(true);
            var inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!(support.noCloneChecked || (1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                /** @type {number} */
                i = 0;
                l = srcElements.length;
                for (; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    /** @type {number} */
                    i = 0;
                    l = srcElements.length;
                    for (; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
        },
        /**
         * @param {?} elems
         * @return {undefined}
         */
        cleanData: function(elems) {
            var data;
            var elem;
            var type;
            var special = jQuery.event.special;
            /** @type {number} */
            var i = 0;
            for (; void 0 !== (elem = elems[i]); i++) {
                if (next(elem)) {
                    if (data = elem[data_priv.expando]) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        elem[data_priv.expando] = void 0;
                    }
                    if (elem[data_user.expando]) {
                        elem[data_user.expando] = void 0;
                    }
                }
            }
        }
    });
    jQuery.fn.extend({
        /** @type {function (Array, Object, Function, ?): ?} */
        domManip: init,
        /**
         * @param {string} type
         * @return {?}
         */
        detach: function(type) {
            return remove(this, type, true);
        },
        /**
         * @param {string} elems
         * @return {?}
         */
        remove: function(elems) {
            return remove(this, elems);
        },
        /**
         * @param {string} value
         * @return {?}
         */
        text: function(value) {
            return access(this, function(textString) {
                return void 0 === textString ? jQuery.text(this) : this.empty().each(function() {
                    if (!(1 !== this.nodeType && (11 !== this.nodeType && 9 !== this.nodeType))) {
                        /** @type {string} */
                        this.textContent = textString;
                    }
                });
            }, null, value, arguments.length);
        },
        /**
         * @return {?}
         */
        append: function() {
            return init(this, arguments, function(elem) {
                if (1 === this.nodeType || (11 === this.nodeType || 9 === this.nodeType)) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        /**
         * @return {?}
         */
        prepend: function() {
            return init(this, arguments, function(elem) {
                if (1 === this.nodeType || (11 === this.nodeType || 9 === this.nodeType)) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        /**
         * @return {?}
         */
        before: function() {
            return init(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        /**
         * @return {?}
         */
        after: function() {
            return init(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        /**
         * @return {?}
         */
        empty: function() {
            var elem;
            /** @type {number} */
            var unlock = 0;
            for (; null != (elem = this[unlock]); unlock++) {
                if (1 === elem.nodeType) {
                    jQuery.cleanData(getAll(elem, false));
                    /** @type {string} */
                    elem.textContent = "";
                }
            }
            return this;
        },
        /**
         * @param {?} dataAndEvents
         * @param {?} deepDataAndEvents
         * @return {?}
         */
        clone: function(dataAndEvents, deepDataAndEvents) {
            return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        /**
         * @param {string} value
         * @return {?}
         */
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {};
                /** @type {number} */
                var i = 0;
                var l = this.length;
                if (void 0 === value && 1 === elem.nodeType) {
                    return elem.innerHTML;
                }
                if ("string" == typeof value && (!rRadial.test(value) && !wrapMap[(matches.exec(value) || ["", ""])[1].toLowerCase()])) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {};
                            if (1 === elem.nodeType) {
                                jQuery.cleanData(getAll(elem, false));
                                /** @type {Object} */
                                elem.innerHTML = value;
                            }
                        }
                        /** @type {number} */
                        elem = 0;
                    } catch (r) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        /**
         * @return {?}
         */
        replaceWith: function() {
            /** @type {Array} */
            var selection = [];
            return init(this, arguments, function(relatedNode) {
                var node = this.parentNode;
                if (jQuery.inArray(this, selection) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (node) {
                        node.replaceChild(relatedNode, this);
                    }
                }
            }, selection);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(original, method) {
        /**
         * @param {string} camelKey
         * @return {?}
         */
        jQuery.fn[original] = function(camelKey) {
            var resp;
            /** @type {Array} */
            var ret = [];
            var insert = jQuery(camelKey);
            /** @type {number} */
            var last = insert.length - 1;
            /** @type {number} */
            var i = 0;
            for (; i <= last; i++) {
                resp = i === last ? this : this.clone(true);
                jQuery(insert[i])[method](resp);
                core_push.apply(ret, resp.get());
            }
            return this.pushStack(ret);
        };
    });
    var iframe;
    var cache = {
        HTML: "block",
        BODY: "block"
    };
    /** @type {RegExp} */
    var rbracket = /^margin/;
    /** @type {RegExp} */
    var regexp = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i");
    /**
     * @param {Node} elem
     * @return {?}
     */
    var getStyles = function(elem) {
        var defaultView = elem.ownerDocument.defaultView;
        return defaultView && defaultView.opener || (defaultView = context), defaultView.getComputedStyle(elem);
    };
    /**
     * @param {Element} elem
     * @param {?} options
     * @param {Function} callback
     * @param {Array} args
     * @return {?}
     */
    var swap = function(elem, options, callback, args) {
        var ret;
        var name;
        var old = {};
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };
    var docElem = doc.documentElement;
    ! function() {
        /**
         * @return {undefined}
         */
        function computePixelPositionAndBoxSizingReliable() {
            /** @type {string} */
            div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            /** @type {string} */
            div.innerHTML = "";
            docElem.appendChild(container);
            var css = context.getComputedStyle(div);
            /** @type {boolean} */
            i = "1%" !== css.top;
            /** @type {boolean} */
            s = "2px" === css.marginLeft;
            /** @type {boolean} */
            n = "4px" === css.width;
            /** @type {string} */
            div.style.marginRight = "50%";
            /** @type {boolean} */
            r = "4px" === css.marginRight;
            docElem.removeChild(container);
        }
        var i;
        var n;
        var r;
        var s;
        var container = doc.createElement("div");
        var div = doc.createElement("div");
        if (div.style) {
            /** @type {string} */
            div.style.backgroundClip = "content-box";
            /** @type {string} */
            div.cloneNode(true).style.backgroundClip = "";
            /** @type {boolean} */
            support.clearCloneStyle = "content-box" === div.style.backgroundClip;
            /** @type {string} */
            container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
            container.appendChild(div);
            jQuery.extend(support, {
                /**
                 * @return {?}
                 */
                pixelPosition: function() {
                    return computePixelPositionAndBoxSizingReliable(), i;
                },
                /**
                 * @return {?}
                 */
                boxSizingReliable: function() {
                    return null == n && computePixelPositionAndBoxSizingReliable(), n;
                },
                /**
                 * @return {?}
                 */
                pixelMarginRight: function() {
                    return null == n && computePixelPositionAndBoxSizingReliable(), r;
                },
                /**
                 * @return {?}
                 */
                reliableMarginLeft: function() {
                    return null == n && computePixelPositionAndBoxSizingReliable(), s;
                },
                /**
                 * @return {?}
                 */
                reliableMarginRight: function() {
                    var e;
                    var marginDiv = div.appendChild(doc.createElement("div"));
                    return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", docElem.appendChild(container), e = !parseFloat(context.getComputedStyle(marginDiv).marginRight), docElem.removeChild(container), div.removeChild(marginDiv), e;
                }
            });
        }
    }();
    /** @type {RegExp} */
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
    var cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    };
    var cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    /** @type {Array} */
    var cssPrefixes = ["Webkit", "O", "Moz", "ms"];
    var style = doc.createElement("div").style;
    jQuery.extend({
        cssHooks: {
            opacity: {
                /**
                 * @param {string} num
                 * @param {string} value
                 * @return {?}
                 */
                get: function(num, value) {
                    if (value) {
                        var buffer = css(num, "opacity");
                        return "" === buffer ? "1" : buffer;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        /**
         * @param {string} key
         * @param {?} property
         * @param {string} value
         * @param {string} name
         * @return {?}
         */
        style: function(key, property, value, name) {
            if (key && (3 !== key.nodeType && (8 !== key.nodeType && key.style))) {
                var ret;
                var type;
                var hooks;
                var prop = jQuery.camelCase(property);
                var elem = key.style;
                return property = jQuery.cssProps[prop] || (jQuery.cssProps[prop] = camelCase(prop) || prop), hooks = jQuery.cssHooks[property] || jQuery.cssHooks[prop], void 0 === value ? hooks && ("get" in hooks && void 0 !== (ret = hooks.get(key, false, name))) ? ret : elem[property] : (type = typeof value, "string" === type && ((ret = rtagName.exec(value)) && (ret[1] && (value = add(key, property, ret), type = "number"))), null != value && (value === value && ("number" === type && (value += ret && ret[3] ||
                    (jQuery.cssNumber[prop] ? "" : "px")), support.clearCloneStyle || ("" !== value || (0 !== property.indexOf("background") || (elem[property] = "inherit"))), hooks && ("set" in hooks && void 0 === (value = hooks.set(key, value, name))) || (elem[property] = value))), void 0);
            }
        },
        /**
         * @param {string} elem
         * @param {?} prop
         * @param {boolean} recurring
         * @param {?} key
         * @return {?}
         */
        css: function(elem, prop, recurring, key) {
            var val;
            var width;
            var hooks;
            var name = jQuery.camelCase(prop);
            return prop = jQuery.cssProps[name] || (jQuery.cssProps[name] = camelCase(name) || name), hooks = jQuery.cssHooks[prop] || jQuery.cssHooks[name], hooks && ("get" in hooks && (val = hooks.get(elem, true, recurring))), void 0 === val && (val = css(elem, prop, key)), "normal" === val && (prop in cssNormalTransform && (val = cssNormalTransform[prop])), "" === recurring || recurring ? (width = parseFloat(val), recurring === true || isFinite(width) ? width || 0 : val) : val;
        }
    });
    jQuery.each(["height", "width"], function(dataAndEvents, name) {
        jQuery.cssHooks[name] = {
            /**
             * @param {string} elem
             * @param {string} value
             * @param {string} extra
             * @return {?}
             */
            get: function(elem, value, extra) {
                if (value) {
                    return rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            /**
             * @param {Object} elem
             * @param {string} value
             * @param {string} fn
             * @return {?}
             */
            set: function(elem, value, fn) {
                var match;
                var styles = fn && getStyles(elem);
                var val = fn && augmentWidthOrHeight(elem, name, fn, "border-box" === jQuery.css(elem, "boxSizing", false, styles), styles);
                return val && ((match = rtagName.exec(value)) && ("px" !== (match[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)))), set(elem, value, val);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, dataAndEvents) {
        if (dataAndEvents) {
            return (parseFloat(css(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                marginLeft: 0
            }, function() {
                return elem.getBoundingClientRect().left;
            })) + "px";
        }
    });
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(child, dataAndEvents) {
        if (dataAndEvents) {
            return swap(child, {
                display: "inline-block"
            }, css, [child, "marginRight"]);
        }
    });
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            /**
             * @param {string} line
             * @return {?}
             */
            expand: function(line) {
                /** @type {number} */
                var i = 0;
                var expanded = {};
                /** @type {Array} */
                var tokens = "string" == typeof line ? line.split(" ") : [line];
                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = tokens[i] || (tokens[i - 2] || tokens[0]);
                }
                return expanded;
            }
        };
        if (!rbracket.test(prefix)) {
            /** @type {function (Object, string, string): ?} */
            jQuery.cssHooks[prefix + suffix].set = set;
        }
    });
    jQuery.fn.extend({
        /**
         * @param {string} key
         * @param {?} value
         * @return {?}
         */
        css: function(key, value) {
            return access(this, function(pdataOld, prop, camelKey) {
                var styles;
                var valsLength;
                var map = {};
                /** @type {number} */
                var i = 0;
                if (jQuery.isArray(prop)) {
                    styles = getStyles(pdataOld);
                    valsLength = prop.length;
                    for (; i < valsLength; i++) {
                        map[prop[i]] = jQuery.css(pdataOld, prop[i], false, styles);
                    }
                    return map;
                }
                return void 0 !== camelKey ? jQuery.style(pdataOld, prop, camelKey) : jQuery.css(pdataOld, prop);
            }, key, value, arguments.length > 1);
        },
        /**
         * @return {?}
         */
        show: function() {
            return showHide(this, true);
        },
        /**
         * @return {?}
         */
        hide: function() {
            return showHide(this);
        },
        /**
         * @param {?} state
         * @return {?}
         */
        toggle: function(state) {
            return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                if (camelKey(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    /** @type {function (string, ?, string, string, boolean): ?} */
    jQuery.Tween = Tween;
    Tween.prototype = {
        /** @type {function (string, ?, string, string, boolean): ?} */
        constructor: Tween,
        /**
         * @param {?} allBindingsAccessor
         * @param {Object} options
         * @param {?} prop
         * @param {number} to
         * @param {string} easing
         * @param {(number|string)} unit
         * @return {undefined}
         */
        init: function(allBindingsAccessor, options, prop, to, easing, unit) {
            this.elem = allBindingsAccessor;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            /** @type {Object} */
            this.options = options;
            this.start = this.now = this.cur();
            /** @type {number} */
            this.end = to;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        /**
         * @return {?}
         */
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        /**
         * @param {number} percent
         * @return {?}
         */
        run: function(percent) {
            var eased;
            var hooks = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            /**
             * @param {string} elem
             * @return {?}
             */
            get: function(elem) {
                var node;
                return 1 !== elem.elem.nodeType || null != elem.elem[elem.prop] && null == elem.elem.style[elem.prop] ? elem.elem[elem.prop] : (node = jQuery.css(elem.elem, elem.prop, ""), node && "auto" !== node ? node : 0);
            },
            /**
             * @param {Object} tween
             * @return {undefined}
             */
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else {
                    if (1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop]) {
                        tween.elem[tween.prop] = tween.now;
                    } else {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    }
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        /**
         * @param {Object} b
         * @return {undefined}
         */
        set: function(b) {
            if (b.elem.nodeType) {
                if (b.elem.parentNode) {
                    b.elem[b.prop] = b.now;
                }
            }
        }
    };
    jQuery.easing = {
        /**
         * @param {?} t
         * @return {?}
         */
        linear: function(t) {
            return t;
        },
        /**
         * @param {number} p
         * @return {?}
         */
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    /** @type {function (?, Object, ?, number, string, (number|string)): undefined} */
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow;
    var deps;
    /** @type {RegExp} */
    var rplusequals = /^(?:toggle|show|hide)$/;
    /** @type {RegExp} */
    var rrun = /queueHooks$/;
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [function(v, value) {
                var tween = this.createTween(v, value);
                return add(tween.elem, v, rtagName.exec(value), tween), tween;
            }]
        },
        /**
         * @param {Object} value
         * @param {Function} callback
         * @return {undefined}
         */
        tweener: function(value, callback) {
            if (jQuery.isFunction(value)) {
                /** @type {Object} */
                callback = value;
                /** @type {Array} */
                value = ["*"];
            } else {
                value = value.match(core_rnotwhite);
            }
            var type;
            /** @type {number} */
            var j = 0;
            var jlen = value.length;
            for (; j < jlen; j++) {
                type = value[j];
                Animation.tweeners[type] = Animation.tweeners[type] || [];
                Animation.tweeners[type].unshift(callback);
            }
        },
        prefilters: [defaultPrefilter],
        /**
         * @param {string} camelKey
         * @param {?} prepend
         * @return {undefined}
         */
        prefilter: function(camelKey, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(camelKey);
            } else {
                Animation.prefilters.push(camelKey);
            }
        }
    });
    /**
     * @param {string} speed
     * @param {string} easing
     * @param {boolean} fn
     * @return {?}
     */
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
            complete: fn || (!fn && easing || jQuery.isFunction(speed) && speed),
            duration: speed,
            easing: fn && easing || easing && (!jQuery.isFunction(easing) && easing)
        };
        return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, null != opt.queue && opt.queue !== true || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        }, opt;
    };
    jQuery.fn.extend({
        /**
         * @param {string} speed
         * @param {number} to
         * @param {string} callback
         * @param {boolean} _callback
         * @return {?}
         */
        fadeTo: function(speed, to, callback, _callback) {
            return this.filter(camelKey).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, callback, _callback);
        },
        /**
         * @param {?} prop
         * @param {string} speed
         * @param {string} easing
         * @param {boolean} callback
         * @return {?}
         */
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop);
            var optall = jQuery.speed(speed, easing, callback);
            /**
             * @return {undefined}
             */
            var doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || data_priv.get(this, "finish")) {
                    anim.stop(true);
                }
            };
            return doAnimation.finish = doAnimation, empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        /**
         * @param {Object} type
         * @param {Object} clearQueue
         * @param {Object} gotoEnd
         * @return {?}
         */
        stop: function(type, clearQueue, gotoEnd) {
            /**
             * @param {Object} e
             * @return {undefined}
             */
            var stop = function(e) {
                var stop = e.stop;
                delete e.stop;
                stop(gotoEnd);
            };
            return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && (type !== false && this.queue(type || "fx", [])), this.each(function() {
                /** @type {boolean} */
                var e = true;
                var index = null != type && type + "queueHooks";
                /** @type {Array} */
                var timers = jQuery.timers;
                var iteratee = data_priv.get(this);
                if (index) {
                    if (iteratee[index]) {
                        if (iteratee[index].stop) {
                            stop(iteratee[index]);
                        }
                    }
                } else {
                    for (index in iteratee) {
                        if (iteratee[index]) {
                            if (iteratee[index].stop) {
                                if (rrun.test(index)) {
                                    stop(iteratee[index]);
                                }
                            }
                        }
                    }
                }
                /** @type {number} */
                index = timers.length;
                for (; index--;) {
                    if (!(timers[index].elem !== this)) {
                        if (!(null != type && timers[index].queue !== type)) {
                            timers[index].anim.stop(gotoEnd);
                            /** @type {boolean} */
                            e = false;
                            timers.splice(index, 1);
                        }
                    }
                }
                if (!(!e && gotoEnd)) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        /**
         * @param {string} type
         * @return {?}
         */
        finish: function(type) {
            return type !== false && (type = type || "fx"), this.each(function() {
                var index;
                var data = data_priv.get(this);
                var array = data[type + "queue"];
                var event = data[type + "queueHooks"];
                /** @type {Array} */
                var timers = jQuery.timers;
                var length = array ? array.length : 0;
                /** @type {boolean} */
                data.finish = true;
                jQuery.queue(this, type, []);
                if (event) {
                    if (event.stop) {
                        event.stop.call(this, true);
                    }
                }
                /** @type {number} */
                index = timers.length;
                for (; index--;) {
                    if (timers[index].elem === this) {
                        if (timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1);
                        }
                    }
                }
                /** @type {number} */
                index = 0;
                for (; index < length; index++) {
                    if (array[index]) {
                        if (array[index].finish) {
                            array[index].finish.call(this);
                        }
                    }
                }
                delete data.finish;
            });
        }
    });
    jQuery.each(["toggle", "show", "hide"], function(dataAndEvents, name) {
        var matcherFunction = jQuery.fn[name];
        /**
         * @param {string} speed
         * @param {string} callback
         * @param {boolean} next_callback
         * @return {?}
         */
        jQuery.fn[name] = function(speed, callback, next_callback) {
            return null == speed || "boolean" == typeof speed ? matcherFunction.apply(this, arguments) : this.animate(genFx(name, true), speed, callback, next_callback);
        };
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(original, props) {
        /**
         * @param {string} speed
         * @param {string} callback
         * @param {boolean} next_callback
         * @return {?}
         */
        jQuery.fn[original] = function(speed, callback, next_callback) {
            return this.animate(props, speed, callback, next_callback);
        };
    });
    /** @type {Array} */
    jQuery.timers = [];
    /**
     * @return {undefined}
     */
    jQuery.fx.tick = function() {
        var last;
        /** @type {number} */
        var i = 0;
        /** @type {Array} */
        var timers = jQuery.timers;
        fxNow = jQuery.now();
        for (; i < timers.length; i++) {
            last = timers[i];
            if (!last()) {
                if (!(timers[i] !== last)) {
                    timers.splice(i--, 1);
                }
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = void 0;
    };
    /**
     * @param {string} camelKey
     * @return {undefined}
     */
    jQuery.fx.timer = function(camelKey) {
        jQuery.timers.push(camelKey);
        if (camelKey()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };
    /** @type {number} */
    jQuery.fx.interval = 13;
    /**
     * @return {undefined}
     */
    jQuery.fx.start = function() {
        if (!deps) {
            deps = context.setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    /**
     * @return {undefined}
     */
    jQuery.fx.stop = function() {
        context.clearInterval(deps);
        /** @type {null} */
        deps = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    /**
     * @param {HTMLElement} time
     * @param {string} type
     * @return {?}
     */
    jQuery.fn.delay = function(time, type) {
        return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, event) {
            var timeout = context.setTimeout(next, time);
            /**
             * @return {undefined}
             */
            event.stop = function() {
                context.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = doc.createElement("input");
        var select = doc.createElement("select");
        var opt = select.appendChild(doc.createElement("option"));
        /** @type {string} */
        input.type = "checkbox";
        /** @type {boolean} */
        support.checkOn = "" !== input.value;
        support.optSelected = opt.selected;
        /** @type {boolean} */
        select.disabled = true;
        /** @type {boolean} */
        support.optDisabled = !opt.disabled;
        input = doc.createElement("input");
        /** @type {string} */
        input.value = "t";
        /** @type {string} */
        input.type = "radio";
        /** @type {boolean} */
        support.radioValue = "t" === input.value;
    })();
    var boolHook;
    var values = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        /**
         * @param {string} name
         * @param {string} value
         * @return {?}
         */
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        /**
         * @param {Object} name
         * @return {?}
         */
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        /**
         * @param {Object} elem
         * @param {string} name
         * @param {string} value
         * @return {?}
         */
        attr: function(elem, name, value) {
            var ret;
            var hooks;
            var nodeType = elem.nodeType;
            if (3 !== nodeType && (8 !== nodeType && 2 !== nodeType)) {
                return "undefined" == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nodeType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && ("set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && ("get" in hooks && null !== (ret =
                    hooks.get(elem, name))) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret));
            }
        },
        attrHooks: {
            type: {
                /**
                 * @param {Object} elem
                 * @param {string} value
                 * @return {?}
                 */
                set: function(elem, value) {
                    if (!support.radioValue && ("radio" === value && jQuery.nodeName(elem, "input"))) {
                        var val = elem.value;
                        return elem.setAttribute("type", value), val && (elem.value = val), value;
                    }
                }
            }
        },
        /**
         * @param {Object} elem
         * @param {string} value
         * @return {undefined}
         */
        removeAttr: function(elem, value) {
            var name;
            var propName;
            /** @type {number} */
            var i = 0;
            var attrNames = value && value.match(core_rnotwhite);
            if (attrNames && 1 === elem.nodeType) {
                for (; name = attrNames[i++];) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        /** @type {boolean} */
                        elem[propName] = false;
                    }
                    elem.removeAttribute(name);
                }
            }
        }
    });
    boolHook = {
        /**
         * @param {Object} elem
         * @param {string} value
         * @param {string} name
         * @return {?}
         */
        set: function(elem, value, name) {
            return value === false ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(dataAndEvents, name) {
        var callback = values[name] || jQuery.find.attr;
        /**
         * @param {Object} body
         * @param {string} key
         * @param {string} arg
         * @return {?}
         */
        values[name] = function(body, key, arg) {
            var result;
            var value;
            return arg || (value = values[key], values[key] = result, result = null != callback(body, key, arg) ? key.toLowerCase() : null, values[key] = value), result;
        };
    });
    /** @type {RegExp} */
    var rinputs = /^(?:input|select|textarea|button)$/i;
    /** @type {RegExp} */
    var rheader = /^(?:a|area)$/i;
    jQuery.fn.extend({
        /**
         * @param {string} name
         * @param {string} value
         * @return {?}
         */
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        /**
         * @param {?} name
         * @return {?}
         */
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        /**
         * @param {Object} elem
         * @param {string} name
         * @param {string} value
         * @return {?}
         */
        prop: function(elem, name, value) {
            var ret;
            var hooks;
            var nodeType = elem.nodeType;
            if (3 !== nodeType && (8 !== nodeType && 2 !== nodeType)) {
                return 1 === nodeType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && ("set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) ? ret : elem[name] = value : hooks && ("get" in hooks && null !== (ret = hooks.get(elem, name))) ? ret : elem[name];
            }
        },
        propHooks: {
            tabIndex: {
                /**
                 * @param {Object} elem
                 * @return {?}
                 */
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rinputs.test(elem.nodeName) || rheader.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            /**
             * @param {string} elem
             * @return {?}
             */
            get: function(elem) {
                var parent = elem.parentNode;
                return parent && (parent.parentNode && parent.parentNode.selectedIndex), null;
            },
            /**
             * @param {Object} second
             * @return {undefined}
             */
            set: function(second) {
                var elem = second.parentNode;
                if (elem) {
                    elem.selectedIndex;
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    /** @type {RegExp} */
    var rQuot = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        /**
         * @param {string} value
         * @return {?}
         */
        addClass: function(value) {
            var object;
            var input;
            var arg;
            var result;
            var x;
            var i;
            var index;
            /** @type {number} */
            var l = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, each(this)));
                });
            }
            if ("string" == typeof value && value) {
                /** @type {Array} */
                object = value.match(core_rnotwhite) || [];
                for (; input = this[l++];) {
                    if (result = each(input), arg = 1 === input.nodeType && (" " + result + " ").replace(rQuot, " ")) {
                        /** @type {number} */
                        i = 0;
                        for (; x = object[i++];) {
                            if (arg.indexOf(" " + x + " ") < 0) {
                                arg += x + " ";
                            }
                        }
                        index = jQuery.trim(arg);
                        if (result !== index) {
                            input.setAttribute("class", index);
                        }
                    }
                }
            }
            return this;
        },
        /**
         * @param {string} value
         * @return {?}
         */
        removeClass: function(value) {
            var classNames;
            var obj;
            var html;
            var result;
            var className;
            var i;
            var a;
            /** @type {number} */
            var l = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, each(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            if ("string" == typeof value && value) {
                /** @type {Array} */
                classNames = value.match(core_rnotwhite) || [];
                for (; obj = this[l++];) {
                    if (result = each(obj), html = 1 === obj.nodeType && (" " + result + " ").replace(rQuot, " ")) {
                        /** @type {number} */
                        i = 0;
                        for (; className = classNames[i++];) {
                            for (; html.indexOf(" " + className + " ") > -1;) {
                                /** @type {string} */
                                html = html.replace(" " + className + " ", " ");
                            }
                        }
                        a = jQuery.trim(html);
                        if (result !== a) {
                            obj.setAttribute("class", a);
                        }
                    }
                }
            }
            return this;
        },
        /**
         * @param {string} value
         * @param {(Error|string)} stateVal
         * @return {?}
         */
        toggleClass: function(value, stateVal) {
            /** @type {string} */
            var type = typeof value;
            return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, each(this), stateVal), stateVal);
            }) : this.each(function() {
                var b;
                var p;
                var li;
                var imageData;
                if ("string" === type) {
                    /** @type {number} */
                    p = 0;
                    li = jQuery(this);
                    imageData = value.match(core_rnotwhite) || [];
                    for (; b = imageData[p++];) {
                        if (li.hasClass(b)) {
                            li.removeClass(b);
                        } else {
                            li.addClass(b);
                        }
                    }
                } else {
                    if (!(void 0 !== value && "boolean" !== type)) {
                        b = each(this);
                        if (b) {
                            data_priv.set(this, "__className__", b);
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", b || value === false ? "" : data_priv.get(this, "__className__") || "");
                        }
                    }
                }
            });
        },
        /**
         * @param {string} name
         * @return {?}
         */
        hasClass: function(name) {
            var tval;
            var which;
            /** @type {number} */
            var n = 0;
            /** @type {string} */
            tval = " " + name + " ";
            for (; which = this[n++];) {
                if (1 === which.nodeType && (" " + each(which) + " ").replace(rQuot, " ").indexOf(tval) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    /** @type {RegExp} */
    var rreturn = /\r/g;
    /** @type {RegExp} */
    var normalizr = /[\x20\t\r\n\f]+/g;
    jQuery.fn.extend({
        /**
         * @param {Function} value
         * @return {?}
         */
        val: function(value) {
            var hooks;
            var ret;
            var isFunction;
            var elem = this[0];
            if (arguments.length) {
                return isFunction = jQuery.isFunction(value), this.each(function(i) {
                    var val;
                    if (1 === this.nodeType) {
                        val = isFunction ? value.call(this, i, jQuery(this).val()) : value;
                        if (null == val) {
                            /** @type {string} */
                            val = "";
                        } else {
                            if ("number" == typeof val) {
                                val += "";
                            } else {
                                if (jQuery.isArray(val)) {
                                    val = jQuery.map(val, function(month) {
                                        return null == month ? "" : month + "";
                                    });
                                }
                            }
                        }
                        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                        if (!(hooks && ("set" in hooks && void 0 !== hooks.set(this, val, "value")))) {
                            this.value = val;
                        }
                    }
                });
            }
            if (elem) {
                return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && ("get" in hooks && void 0 !== (ret = hooks.get(elem, "value"))) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret);
            }
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                /**
                 * @param {string} elem
                 * @return {?}
                 */
                get: function(elem) {
                    var handle = jQuery.find.attr(elem, "value");
                    return null != handle ? handle : jQuery.trim(jQuery.text(elem)).replace(normalizr, " ");
                }
            },
            select: {
                /**
                 * @param {string} elem
                 * @return {?}
                 */
                get: function(elem) {
                    var camelKey;
                    var option;
                    var options = elem.options;
                    var index = elem.selectedIndex;
                    /** @type {boolean} */
                    var one = "select-one" === elem.type || index < 0;
                    /** @type {(Array|null)} */
                    var values = one ? null : [];
                    var max = one ? index + 1 : options.length;
                    var i = index < 0 ? max : one ? index : 0;
                    for (; i < max; i++) {
                        if (option = options[i], (option.selected || i === index) && ((support.optDisabled ? !option.disabled : null === option.getAttribute("disabled")) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup")))) {
                            if (camelKey = jQuery(option).val(), one) {
                                return camelKey;
                            }
                            values.push(camelKey);
                        }
                    }
                    return values;
                },
                /**
                 * @param {Object} elem
                 * @param {string} value
                 * @return {?}
                 */
                set: function(elem, value) {
                    var i;
                    var cur;
                    var options = elem.options;
                    var values = jQuery.makeArray(value);
                    var idx = options.length;
                    for (; idx--;) {
                        cur = options[idx];
                        if (cur.selected = jQuery.inArray(jQuery.valHooks.option.get(cur), values) > -1) {
                            /** @type {boolean} */
                            i = true;
                        }
                    }
                    return i || (elem.selectedIndex = -1), values;
                }
            }
        }
    });
    jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            /**
             * @param {string} camelKey
             * @param {string} value
             * @return {?}
             */
            set: function(camelKey, value) {
                if (jQuery.isArray(value)) {
                    return camelKey.checked = jQuery.inArray(jQuery(camelKey).val(), value) > -1;
                }
            }
        };
        if (!support.checkOn) {
            /**
             * @param {string} elem
             * @return {?}
             */
            jQuery.valHooks[this].get = function(elem) {
                return null === elem.getAttribute("value") ? "on" : elem.value;
            };
        }
    });
    /** @type {RegExp} */
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.extend(jQuery.event, {
        /**
         * @param {Object} event
         * @param {?} data
         * @param {Object} elem
         * @param {string} onlyHandlers
         * @return {?}
         */
        trigger: function(event, data, elem, onlyHandlers) {
            var i;
            var cur;
            var tmp;
            var bubbleType;
            var ontype;
            var handle;
            var special;
            /** @type {Array} */
            var eventPath = [elem || doc];
            var type = core_hasOwn.call(event, "type") ? event.type : event;
            var namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            if (cur = tmp = elem = elem || doc, 3 !== elem.nodeType && (8 !== elem.nodeType && (!rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.rnamespace = event.namespace ?
                    new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || (!special.trigger || special.trigger.apply(elem, data) !== false))))) {
                if (!onlyHandlers && (!special.noBubble && !jQuery.isWindow(elem))) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode;
                    }
                    for (; cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur;
                    }
                    if (tmp === (elem.ownerDocument || doc)) {
                        eventPath.push(tmp.defaultView || (tmp.parentWindow || context));
                    }
                }
                /** @type {number} */
                i = 0;
                for (;
                    (cur = eventPath[i++]) && !event.isPropagationStopped();) {
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data);
                    }
                    handle = ontype && cur[ontype];
                    if (handle) {
                        if (handle.apply) {
                            if (next(cur)) {
                                event.result = handle.apply(cur, data);
                                if (event.result === false) {
                                    event.preventDefault();
                                }
                            }
                        }
                    }
                }
                return event.type = type, onlyHandlers || (event.isDefaultPrevented() || (special._default && special._default.apply(eventPath.pop(), data) !== false || (!next(elem) || ontype && (jQuery.isFunction(elem[type]) && (!jQuery.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp))))))), event.result;
            }
        },
        /**
         * @param {string} type
         * @param {Object} elem
         * @param {?} event
         * @return {undefined}
         */
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event, event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        /**
         * @param {string} type
         * @param {?} data
         * @return {?}
         */
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        /**
         * @param {string} type
         * @param {?} data
         * @return {?}
         */
        triggerHandler: function(type, data) {
            var parent = this[0];
            if (parent) {
                return jQuery.event.trigger(type, data, parent, true);
            }
        }
    });
    jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(dataAndEvents, name) {
        /**
         * @param {Object} one
         * @param {Object} fn
         * @return {?}
         */
        jQuery.fn[name] = function(one, fn) {
            return arguments.length > 0 ? this.on(name, null, one, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        /**
         * @param {undefined} fnOver
         * @param {Object} fnOut
         * @return {?}
         */
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    /** @type {boolean} */
    support.focusin = "onfocusin" in context;
    if (!support.focusin) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(fix, name) {
            /**
             * @param {(Object|string)} event
             * @return {undefined}
             */
            var handler = function(event) {
                jQuery.event.simulate(name, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[name] = {
                /**
                 * @return {undefined}
                 */
                setup: function() {
                    var node = this.ownerDocument || this;
                    var descriptor = data_priv.access(node, name);
                    if (!descriptor) {
                        node.addEventListener(fix, handler, true);
                    }
                    data_priv.access(node, name, (descriptor || 0) + 1);
                },
                /**
                 * @return {undefined}
                 */
                teardown: function() {
                    var src = this.ownerDocument || this;
                    /** @type {number} */
                    var data = data_priv.access(src, name) - 1;
                    if (data) {
                        data_priv.access(src, name, data);
                    } else {
                        src.removeEventListener(fix, handler, true);
                        data_priv.remove(src, name);
                    }
                }
            };
        });
    }
    var url = context.location;
    var iIdCounter = jQuery.now();
    /** @type {RegExp} */
    var rquery = /\?/;
    /**
     * @param {number} data
     * @return {?}
     */
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
    };
    /**
     * @param {string} data
     * @return {?}
     */
    jQuery.parseXML = function(data) {
        var xml;
        if (!data || "string" != typeof data) {
            return null;
        }
        try {
            xml = (new context.DOMParser).parseFromString(data, "text/xml");
        } catch (n) {
            xml = void 0;
        }
        return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
    };
    /** @type {RegExp} */
    var trimLeft = /#.*$/;
    /** @type {RegExp} */
    var rts = /([?&])_=[^&]*/;
    /** @type {RegExp} */
    var r = /^(.*?):[ \t]*([^\r\n]*)$/gm;
    /** @type {RegExp} */
    var assert = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
    /** @type {RegExp} */
    var rnoContent = /^(?:GET|HEAD)$/;
    /** @type {RegExp} */
    var rprotocol = /^\/\//;
    var prefilters = {};
    var transports = {};
    /** @type {string} */
    var Se = "*/".concat("*");
    var a = doc.createElement("a");
    a.href = url.href;
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: url.href,
            type: "GET",
            isLocal: assert.test(url.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Se,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                /** @type {function (new:String, *=): string} */
                "* text": String,
                "text html": true,
                /** @type {function (number): ?} */
                "text json": jQuery.parseJSON,
                /** @type {function (string): ?} */
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        /**
         * @param {(Object|string)} target
         * @param {Object} settings
         * @return {?}
         */
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        /**
         * @param {Object} arg
         * @param {Object} options
         * @return {?}
         */
        ajax: function(arg, options) {
            /**
             * @param {number} status
             * @param {(number|string)} nativeStatusText
             * @param {Object} responses
             * @param {(number|string)} total
             * @return {undefined}
             */
            function done(status, nativeStatusText, responses, total) {
                var isSuccess;
                var success;
                var error;
                var response;
                var modified;
                /** @type {(number|string)} */
                var statusText = nativeStatusText;
                if (2 !== number) {
                    /** @type {number} */
                    number = 2;
                    if (deps) {
                        context.clearTimeout(deps);
                    }
                    transport = void 0;
                    value = total || "";
                    /** @type {number} */
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    /** @type {boolean} */
                    isSuccess = status >= 200 && status < 300 || 304 === status;
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses);
                    }
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified;
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified;
                            }
                        }
                        if (204 === status || "HEAD" === s.type) {
                            /** @type {string} */
                            statusText = "nocontent";
                        } else {
                            if (304 === status) {
                                /** @type {string} */
                                statusText = "notmodified";
                            } else {
                                statusText = response.state;
                                success = response.data;
                                error = response.error;
                                /** @type {boolean} */
                                isSuccess = !error;
                            }
                        }
                    } else {
                        error = statusText;
                        if (!(!status && statusText)) {
                            /** @type {string} */
                            statusText = "error";
                            if (status < 0) {
                                /** @type {number} */
                                status = 0;
                            }
                        }
                    }
                    /** @type {number} */
                    jqXHR.status = status;
                    /** @type {string} */
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) {
                        deferred.resolveWith(camelKey, [success, statusText, jqXHR]);
                    } else {
                        deferred.rejectWith(camelKey, [jqXHR, statusText, error]);
                    }
                    jqXHR.statusCode(statusCode);
                    statusCode = void 0;
                    if (ajaxSend) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                    }
                    completeDeferred.fireWith(camelKey, [jqXHR, statusText]);
                    if (ajaxSend) {
                        globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                        if (!--jQuery.active) {
                            jQuery.event.trigger("ajaxStop");
                        }
                    }
                }
            }
            if ("object" == typeof arg) {
                /** @type {Object} */
                options = arg;
                arg = void 0;
            }
            options = options || {};
            var transport;
            var cacheURL;
            var value;
            var target;
            var deps;
            var result;
            var ajaxSend;
            var i;
            var s = jQuery.ajaxSetup({}, options);
            var camelKey = s.context || s;
            var globalEventContext = s.context && (camelKey.nodeType || camelKey.jquery) ? jQuery(camelKey) : jQuery.event;
            var deferred = jQuery.Deferred();
            var completeDeferred = jQuery.Callbacks("once memory");
            var statusCode = s.statusCode || {};
            var requestHeaders = {};
            var requestHeadersNames = {};
            /** @type {number} */
            var number = 0;
            /** @type {string} */
            var strAbort = "canceled";
            var jqXHR = {
                readyState: 0,
                /**
                 * @param {string} key
                 * @return {?}
                 */
                getResponseHeader: function(key) {
                    var src;
                    if (2 === number) {
                        if (!target) {
                            target = {};
                            for (; src = r.exec(value);) {
                                /** @type {string} */
                                target[src[1].toLowerCase()] = src[2];
                            }
                        }
                        src = target[key.toLowerCase()];
                    }
                    return null == src ? null : src;
                },
                /**
                 * @return {?}
                 */
                getAllResponseHeaders: function() {
                    return 2 === number ? value : null;
                },
                /**
                 * @param {string} name
                 * @param {?} value
                 * @return {?}
                 */
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    return number || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this;
                },
                /**
                 * @param {(Object|number)} type
                 * @return {?}
                 */
                overrideMimeType: function(type) {
                    return number || (s.mimeType = type), this;
                },
                /**
                 * @param {Object} map
                 * @return {?}
                 */
                statusCode: function(map) {
                    var letter;
                    if (map) {
                        if (number < 2) {
                            for (letter in map) {
                                /** @type {Array} */
                                statusCode[letter] = [statusCode[letter], map[letter]];
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                /**
                 * @param {string} statusText
                 * @return {?}
                 */
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    return transport && transport.abort(finalText), done(0, finalText), this;
                }
            };
            if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((arg || (s.url || url.href)) + "").replace(trimLeft, "").replace(rprotocol, url.protocol + "//"), s.type = options.method || (options.type || (s.method || s.type)), s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""], null == s.crossDomain) {
                result = doc.createElement("a");
                try {
                    /** @type {string} */
                    result.href = s.url;
                    /** @type {string} */
                    result.href = result.href;
                    /** @type {boolean} */
                    s.crossDomain = a.protocol + "//" + a.host != result.protocol + "//" + result.host;
                } catch (w) {
                    /** @type {boolean} */
                    s.crossDomain = true;
                }
            }
            if (s.data && (s.processData && ("string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)))), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === number) {
                return jqXHR;
            }
            ajaxSend = jQuery.event && s.global;
            if (ajaxSend) {
                if (0 === jQuery.active++) {
                    jQuery.event.trigger("ajaxStart");
                }
            }
            s.type = s.type.toUpperCase();
            /** @type {boolean} */
            s.hasContent = !rnoContent.test(s.type);
            /** @type {string} */
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    /** @type {string} */
                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data;
                }
                if (s.cache === false) {
                    /** @type {string} */
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + iIdCounter++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + iIdCounter++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && (s.hasContent && s.contentType !== false) || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + Se + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(camelKey, jqXHR, s) === false || 2 === number)) {
                return jqXHR.abort();
            }
            /** @type {string} */
            strAbort = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                jqXHR[i](s[i]);
            }
            if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                if (jqXHR.readyState = 1, ajaxSend && globalEventContext.trigger("ajaxSend", [jqXHR, s]), 2 === number) {
                    return jqXHR;
                }
                if (s.async) {
                    if (s.timeout > 0) {
                        deps = context.setTimeout(function() {
                            jqXHR.abort("timeout");
                        }, s.timeout);
                    }
                }
                try {
                    /** @type {number} */
                    number = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (!(number < 2)) {
                        throw e;
                    }
                    done(-1, e);
                }
            } else {
                done(-1, "No Transport");
            }
            return jqXHR;
        },
        /**
         * @param {string} cur
         * @param {string} data
         * @param {string} callback
         * @return {?}
         */
        getJSON: function(cur, data, callback) {
            return jQuery.get(cur, data, callback, "json");
        },
        /**
         * @param {string} cur
         * @param {string} callback
         * @return {?}
         */
        getScript: function(cur, callback) {
            return jQuery.get(cur, void 0, callback, "script");
        }
    });
    jQuery.each(["get", "post"], function(dataAndEvents, method) {
        /**
         * @param {string} value
         * @param {Object} data
         * @param {Object} success
         * @param {Function} dataType
         * @return {?}
         */
        jQuery[method] = function(value, data, success, dataType) {
            return jQuery.isFunction(data) && (dataType = dataType || success, success = data, data = void 0), jQuery.ajax(jQuery.extend({
                url: value,
                type: method,
                /** @type {Function} */
                dataType: dataType,
                data: data,
                success: success
            }, jQuery.isPlainObject(value) && value));
        };
    });
    /**
     * @param {string} url
     * @return {?}
     */
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };
    jQuery.fn.extend({
        /**
         * @param {string} camelKey
         * @return {?}
         */
        wrapAll: function(camelKey) {
            var wrap;
            return jQuery.isFunction(camelKey) ? this.each(function(i) {
                jQuery(this).wrapAll(camelKey.call(this, i));
            }) : (this[0] && (wrap = jQuery(camelKey, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
                var elem = this;
                for (; elem.firstElementChild;) {
                    elem = elem.firstElementChild;
                }
                return elem;
            }).append(this)), this);
        },
        /**
         * @param {Function} html
         * @return {?}
         */
        wrapInner: function(html) {
            return jQuery.isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            }) : this.each(function() {
                var self = jQuery(this);
                var contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        /**
         * @param {Function} html
         * @return {?}
         */
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        /**
         * @return {?}
         */
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    /**
     * @param {string} value
     * @return {?}
     */
    jQuery.expr.filters.hidden = function(value) {
        return !jQuery.expr.filters.visible(value);
    };
    /**
     * @param {Element} element
     * @return {?}
     */
    jQuery.expr.filters.visible = function(element) {
        return element.offsetWidth > 0 || (element.offsetHeight > 0 || element.getClientRects().length > 0);
    };
    /** @type {RegExp} */
    var rLt = /%20/g;
    /** @type {RegExp} */
    var rmargin = /\[\]$/;
    /** @type {RegExp} */
    var rCRLF = /\r?\n/g;
    /** @type {RegExp} */
    var mouseTypeRegex = /^(?:submit|button|image|reset|file)$/i;
    /** @type {RegExp} */
    var rsubmittable = /^(?:input|select|textarea|keygen)/i;
    /**
     * @param {Object} a
     * @param {Object} traditional
     * @return {?}
     */
    jQuery.param = function(a, traditional) {
        var prefix;
        /** @type {Array} */
        var klass = [];
        /**
         * @param {?} key
         * @param {string} value
         * @return {undefined}
         */
        var add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : null == value ? "" : value;
            /** @type {string} */
            klass[klass.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return klass.join("&").replace(rLt, "+");
    };
    jQuery.fn.extend({
        /**
         * @return {?}
         */
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        /**
         * @return {?}
         */
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && (!jQuery(this).is(":disabled") && (rsubmittable.test(this.nodeName) && (!mouseTypeRegex.test(type) && (this.checked || !manipulation_rcheckableType.test(type)))));
            }).map(function(dataAndEvents, elem) {
                var val = jQuery(this).val();
                return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    /**
     * @return {?}
     */
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new context.XMLHttpRequest;
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        0: 200,
        1223: 204
    };
    var xhrSupported = jQuery.ajaxSettings.xhr();
    /** @type {boolean} */
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    /** @type {boolean} */
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback;
        var onerror;
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                /**
                 * @param {Object} headers
                 * @param {Function} complete
                 * @return {undefined}
                 */
                send: function(headers, complete) {
                    var i;
                    var xhr = options.xhr();
                    if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }
                    if (options.mimeType) {
                        if (xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType);
                        }
                    }
                    if (!options.crossDomain) {
                        if (!headers["X-Requested-With"]) {
                            /** @type {string} */
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                    }
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }
                    /**
                     * @param {string} status
                     * @return {?}
                     */
                    callback = function(status) {
                        return function() {
                            if (callback) {
                                /** @type {null} */
                                callback = onerror = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                                if ("abort" === status) {
                                    xhr.abort();
                                } else {
                                    if ("error" === status) {
                                        if ("number" != typeof xhr.status) {
                                            complete(0, "error");
                                        } else {
                                            complete(xhr.status, xhr.statusText);
                                        }
                                    } else {
                                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                }
                            }
                        };
                    };
                    xhr.onload = callback();
                    onerror = xhr.onerror = callback("error");
                    if (void 0 !== xhr.onabort) {
                        xhr.onabort = onerror;
                    } else {
                        /**
                         * @return {undefined}
                         */
                        xhr.onreadystatechange = function() {
                            if (4 === xhr.readyState) {
                                context.setTimeout(function() {
                                    if (callback) {
                                        onerror();
                                    }
                                });
                            }
                        };
                    }
                    callback = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null);
                    } catch (l) {
                        if (callback) {
                            throw l;
                        }
                    }
                },
                /**
                 * @return {undefined}
                 */
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            /**
             * @param {string} value
             * @return {?}
             */
            "text script": function(value) {
                return jQuery.globalEval(value), value;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (void 0 === s.cache) {
            /** @type {boolean} */
            s.cache = false;
        }
        if (s.crossDomain) {
            /** @type {string} */
            s.type = "GET";
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script;
            var callback;
            return {
                /**
                 * @param {?} _
                 * @param {Function} complete
                 * @return {undefined}
                 */
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        /** @type {null} */
                        callback = null;
                        if (evt) {
                            complete("error" === evt.type ? 404 : 200, evt.type);
                        }
                    });
                    doc.head.appendChild(script[0]);
                },
                /**
                 * @return {undefined}
                 */
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    /** @type {Array} */
    var eventPath = [];
    /** @type {RegExp} */
    var rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        /**
         * @return {?}
         */
        jsonpCallback: function() {
            var unlock = eventPath.pop() || jQuery.expando + "_" + iIdCounter++;
            return this[unlock] = true, unlock;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var camelKey;
        var val;
        var args;
        /** @type {(boolean|string)} */
        var jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && (0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (rjsonp.test(s.data) && "data")));
        if (jsonProp || "jsonp" === s.dataTypes[0]) {
            return camelKey = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + camelKey) : s.jsonp !== false && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + camelKey), s.converters["script json"] = function() {
                return args || jQuery.error(camelKey + " was not called"), args[0];
            }, s.dataTypes[0] = "json", val = context[camelKey], context[camelKey] = function() {
                /** @type {Arguments} */
                args = arguments;
            }, jqXHR.always(function() {
                if (void 0 === val) {
                    jQuery(context).removeProp(camelKey);
                } else {
                    context[camelKey] = val;
                }
                if (s[camelKey]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    eventPath.push(camelKey);
                }
                if (args) {
                    if (jQuery.isFunction(val)) {
                        val(args[0]);
                    }
                }
                args = val = void 0;
            }), "script";
        }
    });
    /**
     * @param {?} data
     * @param {Object} context
     * @param {Object} keepScripts
     * @return {?}
     */
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || "string" != typeof data) {
            return null;
        }
        if ("boolean" == typeof context) {
            /** @type {Object} */
            keepScripts = context;
            /** @type {boolean} */
            context = false;
        }
        context = context || doc;
        /** @type {(Array.<string>|null)} */
        var parsed = rsingleTag.exec(data);
        /** @type {(Array|boolean)} */
        var camelKey = !keepScripts && [];
        return parsed ? [context.createElement(parsed[1])] : (parsed = parse([data], context, camelKey), camelKey && (camelKey.length && jQuery(camelKey).remove()), jQuery.merge([], parsed.childNodes));
    };
    /** @type {function (string, Object, Object): ?} */
    var matcherFunction = jQuery.fn.load;
    /**
     * @param {string} url
     * @param {Object} data
     * @param {Object} callback
     * @return {?}
     */
    jQuery.fn.load = function(url, data, callback) {
        if ("string" != typeof url && matcherFunction) {
            return matcherFunction.apply(this, arguments);
        }
        var selector;
        var method;
        var args;
        var self = this;
        var off = url.indexOf(" ");
        return off > -1 && (selector = jQuery.trim(url.slice(off)), url = url.slice(0, off)), jQuery.isFunction(data) ? (callback = data, data = void 0) : data && ("object" == typeof data && (method = "POST")), self.length > 0 && jQuery.ajax({
            url: url,
            type: method || "GET",
            dataType: "html",
            data: data
        }).done(function(responseText) {
            /** @type {Arguments} */
            args = arguments;
            self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(value, tests) {
            self.each(function() {
                callback.apply(this, args || [value.responseText, tests, value]);
            });
        }), this;
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(dataAndEvents, name) {
        /**
         * @param {Function} selector
         * @return {?}
         */
        jQuery.fn[name] = function(selector) {
            return this.on(name, selector);
        };
    });
    /**
     * @param {?} elem
     * @return {?}
     */
    jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        /**
         * @param {string} camelKey
         * @param {Object} options
         * @param {string} i
         * @return {undefined}
         */
        setOffset: function(camelKey, options, i) {
            var curPosition;
            var curLeft;
            var curCSSTop;
            var curTop;
            var position;
            var curCSSLeft;
            var u;
            var first = jQuery.css(camelKey, "position");
            var elem = jQuery(camelKey);
            var cur = {};
            if ("static" === first) {
                /** @type {string} */
                camelKey.style.position = "relative";
            }
            position = elem.offset();
            curCSSTop = jQuery.css(camelKey, "top");
            curCSSLeft = jQuery.css(camelKey, "left");
            /** @type {boolean} */
            u = ("absolute" === first || "fixed" === first) && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (u) {
                curPosition = elem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                /** @type {number} */
                curTop = parseFloat(curCSSTop) || 0;
                /** @type {number} */
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(camelKey, i, jQuery.extend({}, position));
            }
            if (null != options.top) {
                /** @type {number} */
                cur.top = options.top - position.top + curTop;
            }
            if (null != options.left) {
                /** @type {number} */
                cur.left = options.left - position.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(camelKey, cur);
            } else {
                elem.css(cur);
            }
        }
    };
    jQuery.fn.extend({
        /**
         * @param {number} options
         * @return {?}
         */
        offset: function(options) {
            if (arguments.length) {
                return void 0 === options ? this : this.each(function(dataName) {
                    jQuery.offset.setOffset(this, options, dataName);
                });
            }
            var doc;
            var win;
            var b = this[0];
            var box = {
                top: 0,
                left: 0
            };
            var element = b && b.ownerDocument;
            if (element) {
                return doc = element.documentElement, jQuery.contains(doc, b) ? (box = b.getBoundingClientRect(), win = getWindow(element), {
                    top: box.top + win.pageYOffset - doc.clientTop,
                    left: box.left + win.pageXOffset - doc.clientLeft
                }) : box;
            }
        },
        /**
         * @return {?}
         */
        position: function() {
            if (this[0]) {
                var offsetParent;
                var offset;
                var cur = this[0];
                var parentOffset = {
                    top: 0,
                    left: 0
                };
                return "fixed" === jQuery.css(cur, "position") ? offset = cur.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)), {
                    top: offset.top - parentOffset.top - jQuery.css(cur, "marginTop", true),
                    left: offset.left - parentOffset.left - jQuery.css(cur, "marginLeft", true)
                };
            }
        },
        /**
         * @return {?}
         */
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                for (; offsetParent && "static" === jQuery.css(offsetParent, "position");) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(name, prop) {
        /** @type {boolean} */
        var top = "pageYOffset" === prop;
        /**
         * @param {string} isXML
         * @return {?}
         */
        jQuery.fn[name] = function(isXML) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                return void 0 === val ? win ? win[prop] : elem[method] : void(win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : elem[method] = val);
            }, name, isXML, arguments.length);
        };
    });
    jQuery.each(["top", "left"], function(dataAndEvents, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(camelKey, val) {
            if (val) {
                return val = css(camelKey, prop), regexp.test(val) ? jQuery(camelKey).position()[prop] + "px" : val;
            }
        });
    });
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, original) {
            /**
             * @param {?} margin
             * @param {boolean} dataAndEvents
             * @return {?}
             */
            jQuery.fn[original] = function(margin, dataAndEvents) {
                var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
                var value = defaultExtra || (margin === true || dataAndEvents === true ? "margin" : "border");
                return access(this, function(__className__, prop, camelKey) {
                    var doc;
                    return jQuery.isWindow(__className__) ? __className__.document.documentElement["client" + name] : 9 === __className__.nodeType ? (doc = __className__.documentElement, Math.max(__className__.body["scroll" + name], doc["scroll" + name], __className__.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === camelKey ? jQuery.css(__className__, prop, value) : jQuery.style(__className__, prop, camelKey, value);
                }, type, chainable ? margin : void 0, chainable, null);
            };
        });
    });
    jQuery.fn.extend({
        /**
         * @param {?} ev
         * @param {Object} one
         * @param {Object} fn
         * @return {?}
         */
        bind: function(ev, one, fn) {
            return this.on(ev, null, one, fn);
        },
        /**
         * @param {Object} types
         * @param {Object} fn
         * @return {?}
         */
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        /**
         * @param {Function} selector
         * @param {?} ev
         * @param {Object} data
         * @param {Object} fn
         * @return {?}
         */
        delegate: function(selector, ev, data, fn) {
            return this.on(ev, selector, data, fn);
        },
        /**
         * @param {string} selector
         * @param {Object} types
         * @param {Object} fn
         * @return {?}
         */
        undelegate: function(selector, types, fn) {
            return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        /**
         * @return {?}
         */
        size: function() {
            return this.length;
        }
    });
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if ("function" == typeof define) {
        if (define.amd) {
            define("jquery", [], function() {
                return jQuery;
            });
        }
    }
    var root = context.jQuery;
    var old = context.$;
    return jQuery.noConflict = function(deep) {
        return context.$ === jQuery && (context.$ = old), deep && (context.jQuery === jQuery && (context.jQuery = root)), jQuery;
    }, dataAndEvents || (context.jQuery = context.$ = jQuery), jQuery;
}),
function() {
    /**
     * @param {Object} layer
     * @param {Object} handler
     * @return {undefined}
     */
    function FastClick(layer, handler) {
        /**
         * @param {Function} fn
         * @param {?} me
         * @return {?}
         */
        function __bind(fn, me) {
            return function() {
                return fn.apply(me, arguments);
            };
        }
        var oldOnClick;
        if (handler = handler || {}, this.trackingClick = false, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = handler.touchBoundary || 10, this.layer = layer, this.tapDelay = handler.tapDelay || 200, this.tapTimeout = handler.tapTimeout || 700, !FastClick.notNeeded(layer)) {
            /** @type {Array} */
            var codeSegments = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"];
            var root = this;
            /** @type {number} */
            var i = 0;
            /** @type {number} */
            var valuesLen = codeSegments.length;
            for (; i < valuesLen; i++) {
                root[codeSegments[i]] = __bind(root[codeSegments[i]], root);
            }
            if (mousedown) {
                layer.addEventListener("mouseover", this.onMouse, true);
                layer.addEventListener("mousedown", this.onMouse, true);
                layer.addEventListener("mouseup", this.onMouse, true);
            }
            layer.addEventListener("click", this.onClick, true);
            layer.addEventListener("touchstart", this.onTouchStart, false);
            layer.addEventListener("touchmove", this.onTouchMove, false);
            layer.addEventListener("touchend", this.onTouchEnd, false);
            layer.addEventListener("touchcancel", this.onTouchCancel, false);
            if (!Event.prototype.stopImmediatePropagation) {
                /**
                 * @param {string} type
                 * @param {Function} callback
                 * @param {boolean} recurring
                 * @return {undefined}
                 */
                layer.removeEventListener = function(type, callback, recurring) {
                    /** @type {function (this:Node, string, (EventListener|function ((Event|null)): (boolean|undefined)|null), boolean): undefined} */
                    var rmv = Node.prototype.removeEventListener;
                    if ("click" === type) {
                        rmv.call(layer, type, callback.hijacked || callback, recurring);
                    } else {
                        rmv.call(layer, type, callback, recurring);
                    }
                };
                /**
                 * @param {string} type
                 * @param {Function} callback
                 * @param {boolean} recurring
                 * @return {undefined}
                 */
                layer.addEventListener = function(type, callback, recurring) {
                    /** @type {function (this:Node, string, (EventListener|function ((Event|null)): (boolean|undefined)|null), boolean): undefined} */
                    var adv = Node.prototype.addEventListener;
                    if ("click" === type) {
                        adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
                            if (!event.propagationStopped) {
                                callback(event);
                            }
                        }), recurring);
                    } else {
                        adv.call(layer, type, callback, recurring);
                    }
                };
            }
            if ("function" == typeof layer.onclick) {
                /** @type {Function} */
                oldOnClick = layer.onclick;
                layer.addEventListener("click", function(event) {
                    oldOnClick(event);
                }, false);
                /** @type {null} */
                layer.onclick = null;
            }
        }
    }
    /** @type {boolean} */
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0;
    /** @type {boolean} */
    var mousedown = navigator.userAgent.indexOf("Android") > 0 && !e;
    /** @type {boolean} */
    var b = /iP(ad|hone|od)/.test(navigator.userAgent) && !e;
    /** @type {boolean} */
    var cur = b && /OS 4_\d(_\d)?/.test(navigator.userAgent);
    /** @type {boolean} */
    var bup = b && /OS [6-7]_\d/.test(navigator.userAgent);
    /** @type {boolean} */
    var o = navigator.userAgent.indexOf("BB10") > 0;
    /**
     * @param {Element} elem
     * @return {?}
     */
    FastClick.prototype.needsClick = function(elem) {
        switch (elem.nodeName.toLowerCase()) {
            case "button":
                ;
            case "select":
                ;
            case "textarea":
                if (elem.disabled) {
                    return true;
                }
                break;
            case "input":
                if (b && "file" === elem.type || elem.disabled) {
                    return true;
                }
                break;
            case "label":
                ;
            case "iframe":
                ;
            case "video":
                return true;
        }
        return /\bneedsclick\b/.test(elem.className);
    };
    /**
     * @param {Object} target
     * @return {?}
     */
    FastClick.prototype.needsFocus = function(target) {
        switch (target.nodeName.toLowerCase()) {
            case "textarea":
                return true;
            case "select":
                return !mousedown;
            case "input":
                switch (target.type) {
                    case "button":
                        ;
                    case "checkbox":
                        ;
                    case "file":
                        ;
                    case "image":
                        ;
                    case "radio":
                        ;
                    case "submit":
                        return false;
                }
                return !target.disabled && !target.readOnly;
            default:
                return /\bneedsfocus\b/.test(target.className);
        }
    };
    /**
     * @param {Object} targetElement
     * @param {Event} event
     * @return {undefined}
     */
    FastClick.prototype.sendClick = function(targetElement, event) {
        var clickEvent;
        var touch;
        if (document.activeElement) {
            if (document.activeElement !== targetElement) {
                document.activeElement.blur();
            }
        }
        touch = event.changedTouches[0];
        /** @type {(Event|null)} */
        clickEvent = document.createEvent("MouseEvents");
        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        /** @type {boolean} */
        clickEvent.forwardedTouchEvent = true;
        targetElement.dispatchEvent(clickEvent);
    };
    /**
     * @param {Node} targetElement
     * @return {?}
     */
    FastClick.prototype.determineEventType = function(targetElement) {
        return mousedown && "select" === targetElement.tagName.toLowerCase() ? "mousedown" : "click";
    };
    /**
     * @param {string} value
     * @return {undefined}
     */
    FastClick.prototype.focus = function(value) {
        var index;
        if (b && (value.setSelectionRange && (0 !== value.type.indexOf("date") && ("time" !== value.type && "month" !== value.type)))) {
            index = value.value.length;
            value.setSelectionRange(index, index);
        } else {
            value.focus();
        }
    };
    /**
     * @param {EventTarget} targetElement
     * @return {undefined}
     */
    FastClick.prototype.updateScrollParent = function(targetElement) {
        var scrollParent;
        var parentElement;
        if (scrollParent = targetElement.fastClickScrollParent, !scrollParent || !scrollParent.contains(targetElement)) {
            /** @type {EventTarget} */
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement;
                    targetElement.fastClickScrollParent = parentElement;
                    break;
                }
                parentElement = parentElement.parentElement;
            } while (parentElement);
        }
        if (scrollParent) {
            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
        }
    };
    /**
     * @param {Object} eventTarget
     * @return {?}
     */
    FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
        return eventTarget.nodeType === Node.TEXT_NODE ? eventTarget.parentNode : eventTarget;
    };
    /**
     * @param {Event} event
     * @return {?}
     */
    FastClick.prototype.onTouchStart = function(event) {
        var targetElement;
        var touch;
        var selection;
        if (event.targetTouches.length > 1) {
            return true;
        }
        if (targetElement = this.getTargetElementFromEventTarget(event.target), touch = event.targetTouches[0], b) {
            if (selection = window.getSelection(), selection.rangeCount && !selection.isCollapsed) {
                return true;
            }
            if (!cur) {
                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
                    return event.preventDefault(), false;
                }
                this.lastTouchIdentifier = touch.identifier;
                this.updateScrollParent(targetElement);
            }
        }
        return this.trackingClick = true, this.trackingClickStart = event.timeStamp, this.targetElement = targetElement, this.touchStartX = touch.pageX, this.touchStartY = touch.pageY, event.timeStamp - this.lastClickTime < this.tapDelay && event.preventDefault(), true;
    };
    /**
     * @param {Event} event
     * @return {?}
     */
    FastClick.prototype.touchHasMoved = function(event) {
        var touch = event.changedTouches[0];
        var boundary = this.touchBoundary;
        return Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary;
    };
    /**
     * @param {Event} event
     * @return {?}
     */
    FastClick.prototype.onTouchMove = function(event) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) && (this.trackingClick = false, this.targetElement = null), true);
    };
    /**
     * @param {HTMLLabelElement} labelElement
     * @return {?}
     */
    FastClick.prototype.findControl = function(labelElement) {
        return void 0 !== labelElement.control ? labelElement.control : labelElement.htmlFor ? document.getElementById(labelElement.htmlFor) : labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
    };
    /**
     * @param {Event} event
     * @return {?}
     */
    FastClick.prototype.onTouchEnd = function(event) {
        var forElement;
        var trackingClickStart;
        var C;
        var scrollParent;
        var touch;
        var camelKey = this.targetElement;
        if (!this.trackingClick) {
            return true;
        }
        if (event.timeStamp - this.lastClickTime < this.tapDelay) {
            return this.cancelNextClick = true, true;
        }
        if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
            return true;
        }
        if (this.cancelNextClick = false, this.lastClickTime = event.timeStamp, trackingClickStart = this.trackingClickStart, this.trackingClick = false, this.trackingClickStart = 0, bup && (touch = event.changedTouches[0], camelKey = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || camelKey, camelKey.fastClickScrollParent = this.targetElement.fastClickScrollParent), C = camelKey.tagName.toLowerCase(), "label" === C) {
            if (forElement = this.findControl(camelKey)) {
                if (this.focus(camelKey), mousedown) {
                    return false;
                }
                camelKey = forElement;
            }
        } else {
            if (this.needsFocus(camelKey)) {
                return event.timeStamp - trackingClickStart > 100 || b && (window.top !== window && "input" === C) ? (this.targetElement = null, false) : (this.focus(camelKey), this.sendClick(camelKey, event), b && "select" === C || (this.targetElement = null, event.preventDefault()), false);
            }
        }
        return !(!b || (cur || (scrollParent = camelKey.fastClickScrollParent, !scrollParent || scrollParent.fastClickLastScrollTop === scrollParent.scrollTop))) || (this.needsClick(camelKey) || (event.preventDefault(), this.sendClick(camelKey, event)), false);
    };
    /**
     * @return {undefined}
     */
    FastClick.prototype.onTouchCancel = function() {
        /** @type {boolean} */
        this.trackingClick = false;
        /** @type {null} */
        this.targetElement = null;
    };
    /**
     * @param {Event} event
     * @return {?}
     */
    FastClick.prototype.onMouse = function(event) {
        return !this.targetElement || (!!event.forwardedTouchEvent || (!event.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (event.stopImmediatePropagation ? event.stopImmediatePropagation() : event.propagationStopped = true, event.stopPropagation(), event.preventDefault(), false))));
    };
    /**
     * @param {Event} event
     * @return {?}
     */
    FastClick.prototype.onClick = function(event) {
        var permitted;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = false, true) : "submit" === event.target.type && 0 === event.detail || (permitted = this.onMouse(event), permitted || (this.targetElement = null), permitted);
    };
    /**
     * @return {undefined}
     */
    FastClick.prototype.destroy = function() {
        var layer = this.layer;
        if (mousedown) {
            layer.removeEventListener("mouseover", this.onMouse, true);
            layer.removeEventListener("mousedown", this.onMouse, true);
            layer.removeEventListener("mouseup", this.onMouse, true);
        }
        layer.removeEventListener("click", this.onClick, true);
        layer.removeEventListener("touchstart", this.onTouchStart, false);
        layer.removeEventListener("touchmove", this.onTouchMove, false);
        layer.removeEventListener("touchend", this.onTouchEnd, false);
        layer.removeEventListener("touchcancel", this.onTouchCancel, false);
    };
    /**
     * @param {Node} layer
     * @return {?}
     */
    FastClick.notNeeded = function(layer) {
        var a;
        var n;
        var r;
        var s;
        if ("undefined" == typeof window.ontouchstart) {
            return true;
        }
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!mousedown) {
                return true;
            }
            if (a = document.querySelector("meta[name=viewport]")) {
                if (a.content.indexOf("user-scalable=no") !== -1) {
                    return true;
                }
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                    return true;
                }
            }
        }
        if (o && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && (r[2] >= 3 && (a = document.querySelector("meta[name=viewport]"))))) {
            if (a.content.indexOf("user-scalable=no") !== -1) {
                return true;
            }
            if (document.documentElement.scrollWidth <= window.outerWidth) {
                return true;
            }
        }
        return "none" === layer.style.msTouchAction || ("manipulation" === layer.style.touchAction || (s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(s >= 27 && (a = document.querySelector("meta[name=viewport]"), a && (a.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === layer.style.touchAction || "manipulation" === layer.style.touchAction)));
    };
    /**
     * @param {Array} layer
     * @param {Array} handler
     * @return {?}
     */
    FastClick.attach = function(layer, handler) {
        return new FastClick(layer, handler);
    };
    if ("function" == typeof define && ("object" == typeof define.amd && define.amd)) {
        define(function() {
            return FastClick;
        });
    } else {
        if ("undefined" != typeof module && module.exports) {
            /** @type {function (Array, Array): ?} */
            module.exports = FastClick.attach;
            /** @type {function (Object, Object): undefined} */
            module.exports.FastClick = FastClick;
        } else {
            /** @type {function (Object, Object): undefined} */
            window.FastClick = FastClick;
        }
    }
}();
var _gsScope = "undefined" != typeof module && (module.exports && "undefined" != typeof global) ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(Animation, dataAndEvents, TweenLite) {
            /**
             * @param {string} value
             * @return {?}
             */
            var repeat = function(value) {
                var i;
                /** @type {Array} */
                var array = [];
                var len = value.length;
                /** @type {number} */
                i = 0;
                for (; i !== len; array.push(value[i++])) {}
                return array;
            };
            /**
             * @param {Object} obj
             * @param {Object} data
             * @param {number} i
             * @return {undefined}
             */
            var initialize = function(obj, data, i) {
                var attr;
                var val;
                var diff = obj.cycle;
                for (attr in diff) {
                    val = diff[attr];
                    obj[attr] = "function" == typeof val ? val(i, data[i]) : val[i % val.length];
                }
                delete obj.cycle;
            };
            /**
             * @param {string} value
             * @param {?} object
             * @param {Object} key
             * @return {undefined}
             */
            var TweenMax = function(value, object, key) {
                TweenLite.call(this, value, object, key);
                /** @type {number} */
                this._cycle = 0;
                /** @type {boolean} */
                this._yoyo = this.vars.yoyo === true;
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                /** @type {boolean} */
                this._dirty = true;
                this.render = TweenMax.prototype.render;
            };
            /** @type {number} */
            var _tinyNum = 1E-10;
            var self = TweenLite._internals;
            var _isSelector = self.isSelector;
            var x = self.isArray;
            var p = TweenMax.prototype = TweenLite.to({}, 0.1, {});
            /** @type {Array} */
            var _blankArray = [];
            /** @type {string} */
            TweenMax.version = "1.19.0";
            /** @type {function (string, ?, Object): undefined} */
            p.constructor = TweenMax;
            /** @type {boolean} */
            p.kill()._gc = false;
            TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
            TweenMax.getTweensOf = TweenLite.getTweensOf;
            TweenMax.lagSmoothing = TweenLite.lagSmoothing;
            TweenMax.ticker = TweenLite.ticker;
            TweenMax.render = TweenLite.render;
            /**
             * @return {?}
             */
            p.invalidate = function() {
                return this._yoyo = this.vars.yoyo === true, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(true), TweenLite.prototype.invalidate.call(this);
            };
            /**
             * @param {Object} vars
             * @param {?} chains
             * @return {?}
             */
            p.updateTo = function(vars, chains) {
                var p;
                var ratio = this.ratio;
                var _initted = this.vars.immediateRender || vars.immediateRender;
                if (chains) {
                    if (this._startTime < this._timeline._time) {
                        this._startTime = this._timeline._time;
                        this._uncache(false);
                        if (this._gc) {
                            this._enabled(true, false);
                        } else {
                            this._timeline.insert(this, this._startTime - this._delay);
                        }
                    }
                }
                for (p in vars) {
                    this.vars[p] = vars[p];
                }
                if (this._initted || _initted) {
                    if (chains) {
                        /** @type {boolean} */
                        this._initted = false;
                        if (_initted) {
                            this.render(0, true, true);
                        }
                    } else {
                        if (this._gc && this._enabled(true, false), this._notifyPluginsOfEnabled && (this._firstPT && TweenLite._onPluginEvent("_onDisable", this)), this._time / this._duration > 0.998) {
                            var new_t = this._totalTime;
                            this.render(0, true, false);
                            /** @type {boolean} */
                            this._initted = false;
                            this.render(new_t, true, false);
                        } else {
                            if (this._initted = false, this._init(), this._time > 0 || _initted) {
                                var size;
                                /** @type {number} */
                                var locScaleX = 1 / (1 - ratio);
                                var self = this._firstPT;
                                for (; self;) {
                                    size = self.s + self.c;
                                    self.c *= locScaleX;
                                    /** @type {number} */
                                    self.s = size - self.c;
                                    self = self._next;
                                }
                            }
                        }
                    }
                }
                return this;
            };
            /**
             * @param {number} time
             * @param {boolean} recurring
             * @param {boolean} opt_isDefault
             * @return {?}
             */
            p.render = function(time, recurring, opt_isDefault) {
                if (!this._initted) {
                    if (0 === this._duration) {
                        if (this.vars.repeat) {
                            this.invalidate();
                        }
                    }
                }
                var isComplete;
                var callback;
                var pt;
                var cycleDuration;
                var r;
                var e;
                var pow;
                var rawPrevTime;
                var totalDur = this._dirty ? this.totalDuration() : this._totalDuration;
                var prevTime = this._time;
                var prevTotalTime = this._totalTime;
                var prevCycle = this._cycle;
                var dur = this._duration;
                var prevRawPrevTime = this._rawPrevTime;
                if (time >= totalDur - 1E-7 ? (this._totalTime = totalDur, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = dur, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (isComplete = true, callback = "onComplete", opt_isDefault = opt_isDefault || this._timeline.autoRemoveChildren), 0 === dur && ((this._initted || (!this.vars.lazy || opt_isDefault)) &&
                        (this._startTime === this._timeline._duration && (time = 0), (prevRawPrevTime < 0 || (time <= 0 && time >= -1E-7 || prevRawPrevTime === _tinyNum && "isPause" !== this.data)) && (prevRawPrevTime !== time && (opt_isDefault = true, prevRawPrevTime > _tinyNum && (callback = "onReverseComplete"))), this._rawPrevTime = rawPrevTime = !recurring || (time || prevRawPrevTime === time) ? time : _tinyNum))) : time < 1E-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ?
                        this._ease.getRatio(0) : 0, (0 !== prevTotalTime || 0 === dur && prevRawPrevTime > 0) && (callback = "onReverseComplete", isComplete = this._reversed), time < 0 && (this._active = false, 0 === dur && ((this._initted || (!this.vars.lazy || opt_isDefault)) && (prevRawPrevTime >= 0 && (opt_isDefault = true), this._rawPrevTime = rawPrevTime = !recurring || (time || prevRawPrevTime === time) ? time : _tinyNum))), this._initted || (opt_isDefault = true)) : (this._totalTime = this._time = time, 0 !==
                        this._repeat && (cycleDuration = dur + this._repeatDelay, this._cycle = this._totalTime / cycleDuration >> 0, 0 !== this._cycle && (this._cycle === this._totalTime / cycleDuration && (prevTotalTime <= time && this._cycle--)), this._time = this._totalTime - this._cycle * cycleDuration, this._yoyo && (0 !== (1 & this._cycle) && (this._time = dur - this._time)), this._time > dur ? this._time = dur : this._time < 0 && (this._time = 0)), this._easeType ? (r = this._time / dur, e = this._easeType,
                            pow = this._easePower, (1 === e || 3 === e && r >= 0.5) && (r = 1 - r), 3 === e && (r *= 2), 1 === pow ? r *= r : 2 === pow ? r *= r * r : 3 === pow ? r *= r * r * r : 4 === pow && (r *= r * r * r * r), 1 === e ? this.ratio = 1 - r : 2 === e ? this.ratio = r : this._time / dur < 0.5 ? this.ratio = r / 2 : this.ratio = 1 - r / 2) : this.ratio = this._ease.getRatio(this._time / dur)), prevTime === this._time && (!opt_isDefault && prevCycle === this._cycle)) {
                    return void(prevTotalTime !== this._totalTime && (this._onUpdate && (recurring || this._callback("onUpdate"))));
                }
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) {
                        return;
                    }
                    if (!opt_isDefault && (this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration))) {
                        return this._time = prevTime, this._totalTime = prevTotalTime, this._rawPrevTime = prevRawPrevTime, this._cycle = prevCycle, self.lazyTweens.push(this), void(this._lazy = [time, recurring]);
                    }
                    if (this._time && !isComplete) {
                        this.ratio = this._ease.getRatio(this._time / dur);
                    } else {
                        if (isComplete) {
                            if (this._ease._calcEnd) {
                                this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1);
                            }
                        }
                    }
                }
                if (this._lazy !== false) {
                    /** @type {boolean} */
                    this._lazy = false;
                }
                if (!this._active) {
                    if (!this._paused) {
                        if (this._time !== prevTime) {
                            if (time >= 0) {
                                /** @type {boolean} */
                                this._active = true;
                            }
                        }
                    }
                }
                if (0 === prevTotalTime) {
                    if (2 === this._initted) {
                        if (time > 0) {
                            this._init();
                        }
                    }
                    if (this._startAt) {
                        if (time >= 0) {
                            this._startAt.render(time, recurring, opt_isDefault);
                        } else {
                            if (!callback) {
                                /** @type {string} */
                                callback = "_dummyGS";
                            }
                        }
                    }
                    if (this.vars.onStart) {
                        if (!(0 === this._totalTime && 0 !== dur)) {
                            if (!recurring) {
                                this._callback("onStart");
                            }
                        }
                    }
                }
                pt = this._firstPT;
                for (; pt;) {
                    if (pt.f) {
                        pt.t[pt.p](pt.c * this.ratio + pt.s);
                    } else {
                        pt.t[pt.p] = pt.c * this.ratio + pt.s;
                    }
                    pt = pt._next;
                }
                if (this._onUpdate) {
                    if (time < 0) {
                        if (this._startAt) {
                            if (this._startTime) {
                                this._startAt.render(time, recurring, opt_isDefault);
                            }
                        }
                    }
                    if (!recurring) {
                        if (this._totalTime !== prevTotalTime || callback) {
                            this._callback("onUpdate");
                        }
                    }
                }
                if (this._cycle !== prevCycle) {
                    if (!recurring) {
                        if (!this._gc) {
                            if (this.vars.onRepeat) {
                                this._callback("onRepeat");
                            }
                        }
                    }
                }
                if (callback) {
                    if (!(this._gc && !opt_isDefault)) {
                        if (time < 0) {
                            if (this._startAt) {
                                if (!this._onUpdate) {
                                    if (this._startTime) {
                                        this._startAt.render(time, recurring, opt_isDefault);
                                    }
                                }
                            }
                        }
                        if (isComplete) {
                            if (this._timeline.autoRemoveChildren) {
                                this._enabled(false, false);
                            }
                            /** @type {boolean} */
                            this._active = false;
                        }
                        if (!recurring) {
                            if (this.vars[callback]) {
                                this._callback(callback);
                            }
                        }
                        if (0 === dur) {
                            if (this._rawPrevTime === _tinyNum) {
                                if (rawPrevTime !== _tinyNum) {
                                    /** @type {number} */
                                    this._rawPrevTime = 0;
                                }
                            }
                        }
                    }
                }
            };
            /**
             * @param {string} target
             * @param {number} duration
             * @param {string} vars
             * @return {?}
             */
            TweenMax.to = function(target, duration, vars) {
                return new TweenMax(target, duration, vars);
            };
            /**
             * @param {string} target
             * @param {string} duration
             * @param {Object} vars
             * @return {?}
             */
            TweenMax.from = function(target, duration, vars) {
                return vars.runBackwards = true, vars.immediateRender = 0 != vars.immediateRender, new TweenMax(target, duration, vars);
            };
            /**
             * @param {string} target
             * @param {number} duration
             * @param {?} fromVars
             * @param {string} toVars
             * @return {?}
             */
            TweenMax.fromTo = function(target, duration, fromVars, toVars) {
                return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, new TweenMax(target, duration, toVars);
            };
            /** @type {function (string, Object, Object, number, Function, Object, (number|string)): ?} */
            TweenMax.staggerTo = TweenMax.allTo = function(camelKey, duration, o, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                stagger = stagger || 0;
                var lastIdx;
                var copy;
                var i;
                var prop;
                /** @type {number} */
                var delay = 0;
                /** @type {Array} */
                var a = [];
                /**
                 * @return {undefined}
                 */
                var finalComplete = function() {
                    if (o.onComplete) {
                        o.onComplete.apply(o.onCompleteScope || this, arguments);
                    }
                    onCompleteAll.apply(onCompleteAllScope || (o.callbackScope || this), onCompleteAllParams || _blankArray);
                };
                var cycle = o.cycle;
                var cache = o.startAt && o.startAt.cycle;
                if (!x(camelKey)) {
                    if ("string" == typeof camelKey) {
                        camelKey = TweenLite.selector(camelKey) || camelKey;
                    }
                    if (_isSelector(camelKey)) {
                        camelKey = repeat(camelKey);
                    }
                }
                camelKey = camelKey || [];
                if (stagger < 0) {
                    camelKey = repeat(camelKey);
                    camelKey.reverse();
                    stagger *= -1;
                }
                /** @type {number} */
                lastIdx = camelKey.length - 1;
                /** @type {number} */
                i = 0;
                for (; i <= lastIdx; i++) {
                    copy = {};
                    for (prop in o) {
                        copy[prop] = o[prop];
                    }
                    if (cycle && (initialize(copy, camelKey, i), null != copy.duration && (duration = copy.duration, delete copy.duration)), cache) {
                        cache = copy.startAt = {};
                        for (prop in o.startAt) {
                            cache[prop] = o.startAt[prop];
                        }
                        initialize(copy.startAt, camelKey, i);
                    }
                    copy.delay = delay + (copy.delay || 0);
                    if (i === lastIdx) {
                        if (onCompleteAll) {
                            /** @type {function (): undefined} */
                            copy.onComplete = finalComplete;
                        }
                    }
                    a[i] = new TweenMax(camelKey[i], duration, copy);
                    delay += stagger;
                }
                return a;
            };
            /** @type {function (string, string, Object, number, null, string, string): ?} */
            TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                return vars.runBackwards = true, vars.immediateRender = 0 != vars.immediateRender, TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
            };
            /** @type {function (string, string, ?, Object, number, null, string, string): ?} */
            TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
                return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
            };
            /**
             * @param {number} min1
             * @param {string} callback
             * @param {string} params
             * @param {Object} evt
             * @param {?} useFrames
             * @return {?}
             */
            TweenMax.delayedCall = function(min1, callback, params, evt, useFrames) {
                return new TweenMax(callback, 0, {
                    delay: min1,
                    onComplete: callback,
                    onCompleteParams: params,
                    callbackScope: evt,
                    onReverseComplete: callback,
                    onReverseCompleteParams: params,
                    immediateRender: false,
                    useFrames: useFrames,
                    overwrite: 0
                });
            };
            /**
             * @param {string} second
             * @param {string} value
             * @return {?}
             */
            TweenMax.set = function(second, value) {
                return new TweenMax(second, 0, value);
            };
            /**
             * @param {string} target
             * @return {?}
             */
            TweenMax.isTweening = function(target) {
                return TweenLite.getTweensOf(target, true).length > 0;
            };
            /**
             * @param {?} target
             * @param {boolean} shallow
             * @return {?}
             */
            var flatten = function(target, shallow) {
                /** @type {Array} */
                var result = [];
                /** @type {number} */
                var n = 0;
                var value = target._first;
                for (; value;) {
                    if (value instanceof TweenLite) {
                        result[n++] = value;
                    } else {
                        if (shallow) {
                            result[n++] = value;
                        }
                        /** @type {Array} */
                        result = result.concat(flatten(value, shallow));
                        /** @type {number} */
                        n = result.length;
                    }
                    value = value._next;
                }
                return result;
            };
            /** @type {function (boolean): ?} */
            var assert = TweenMax.getAllTweens = function(shallow) {
                return flatten(Animation._rootTimeline, shallow).concat(flatten(Animation._rootFramesTimeline, shallow));
            };
            /**
             * @param {?} allJobsAreDead
             * @param {boolean} callback
             * @param {boolean} a
             * @param {boolean} b
             * @return {undefined}
             */
            TweenMax.killAll = function(allJobsAreDead, callback, a, b) {
                if (null == callback) {
                    /** @type {boolean} */
                    callback = true;
                }
                if (null == a) {
                    /** @type {boolean} */
                    a = true;
                }
                var callbackCalled;
                var tween;
                var i;
                var codeSegments = assert(0 != b);
                var valuesLen = codeSegments.length;
                var callbackValid = callback && (a && b);
                /** @type {number} */
                i = 0;
                for (; i < valuesLen; i++) {
                    tween = codeSegments[i];
                    if (callbackValid || (tween instanceof dataAndEvents || ((callbackCalled = tween.target === tween.vars.onComplete) && a || callback && !callbackCalled))) {
                        if (allJobsAreDead) {
                            tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
                        } else {
                            tween._enabled(false, false);
                        }
                    }
                }
            };
            /**
             * @param {string} camelKey
             * @param {?} deepDataAndEvents
             * @return {undefined}
             */
            TweenMax.killChildTweensOf = function(camelKey, deepDataAndEvents) {
                if (null != camelKey) {
                    var tweens;
                    var tapElement;
                    var key;
                    var i;
                    var valsLength;
                    var messages = self.tweenLookup;
                    if ("string" == typeof camelKey && (camelKey = TweenLite.selector(camelKey) || camelKey), _isSelector(camelKey) && (camelKey = repeat(camelKey)), x(camelKey)) {
                        i = camelKey.length;
                        for (; --i > -1;) {
                            TweenMax.killChildTweensOf(camelKey[i], deepDataAndEvents);
                        }
                    } else {
                        /** @type {Array} */
                        tweens = [];
                        for (key in messages) {
                            tapElement = messages[key].target.parentNode;
                            for (; tapElement;) {
                                if (tapElement === camelKey) {
                                    /** @type {Array} */
                                    tweens = tweens.concat(messages[key].tweens);
                                }
                                tapElement = tapElement.parentNode;
                            }
                        }
                        /** @type {number} */
                        valsLength = tweens.length;
                        /** @type {number} */
                        i = 0;
                        for (; i < valsLength; i++) {
                            if (deepDataAndEvents) {
                                tweens[i].totalTime(tweens[i].totalDuration());
                            }
                            tweens[i]._enabled(false, false);
                        }
                    }
                }
            };
            /**
             * @param {boolean} recurring
             * @param {boolean} event
             * @param {boolean} add
             * @param {boolean} dir
             * @return {undefined}
             */
            var getNext = function(recurring, event, add, dir) {
                /** @type {boolean} */
                event = event !== false;
                /** @type {boolean} */
                add = add !== false;
                /** @type {boolean} */
                dir = dir !== false;
                var s;
                var tween;
                var tokenized = assert(dir);
                /** @type {boolean} */
                var eventType = event && (add && dir);
                var index = tokenized.length;
                for (; --index > -1;) {
                    tween = tokenized[index];
                    if (eventType || (tween instanceof dataAndEvents || ((s = tween.target === tween.vars.onComplete) && add || event && !s))) {
                        tween.paused(recurring);
                    }
                }
            };
            return TweenMax.pauseAll = function(qualifier, add, previousSibling) {
                getNext(true, qualifier, add, previousSibling);
            }, TweenMax.resumeAll = function(qualifier, add, previousSibling) {
                getNext(false, qualifier, add, previousSibling);
            }, TweenMax.globalTimeScale = function(value) {
                var self = Animation._rootTimeline;
                var time = TweenLite.ticker.time;
                return arguments.length ? (value = value || _tinyNum, self._startTime = time - (time - self._startTime) * self._timeScale / value, self = Animation._rootFramesTimeline, time = TweenLite.ticker.frame, self._startTime = time - (time - self._startTime) * self._timeScale / value, self._timeScale = Animation._rootTimeline._timeScale = value, value) : self._timeScale;
            }, p.progress = function(value, dataAndEvents) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), dataAndEvents) : this._time / this.duration();
            }, p.totalProgress = function(value, dataAndEvents) {
                return arguments.length ? this.totalTime(this.totalDuration() * value, dataAndEvents) : this._totalTime / this.totalDuration();
            }, p.time = function(value, tests) {
                return arguments.length ? (this._dirty && this.totalDuration(), value > this._duration && (value = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? value = this._duration - value + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (value += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(value, tests)) : this._time;
            }, p.duration = function(value) {
                return arguments.length ? Animation.prototype.duration.call(this, value) : this._duration;
            }, p.totalDuration = function(value) {
                return arguments.length ? this._repeat === -1 ? this : this.duration((value - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = false), this._totalDuration);
            }, p.repeat = function(value) {
                return arguments.length ? (this._repeat = value, this._uncache(true)) : this._repeat;
            }, p.repeatDelay = function(value) {
                return arguments.length ? (this._repeatDelay = value, this._uncache(true)) : this._repeatDelay;
            }, p.yoyo = function(value) {
                return arguments.length ? (this._yoyo = value, this) : this._yoyo;
            }, TweenMax;
        }, true);
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
            /**
             * @param {string} value
             * @return {undefined}
             */
            var TimelineLite = function(value) {
                SimpleTimeline.call(this, value);
                this._labels = {};
                /** @type {boolean} */
                this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
                /** @type {boolean} */
                this.smoothChildTiming = this.vars.smoothChildTiming === true;
                /** @type {boolean} */
                this._sortChildren = true;
                this._onUpdate = this.vars.onUpdate;
                var val;
                var p;
                var v = this.vars;
                for (p in v) {
                    val = v[p];
                    if (_isArray(val)) {
                        if (val.join("").indexOf("{self}") !== -1) {
                            v[p] = this._swapSelfInParams(val);
                        }
                    }
                }
                if (_isArray(v.tweens)) {
                    this.add(v.tweens, 0, v.align, v.stagger);
                }
            };
            /** @type {number} */
            var _tinyNum = 1E-10;
            var _ = TweenLite._internals;
            var options = TimelineLite._internals = {};
            var _isSelector = _.isSelector;
            var _isArray = _.isArray;
            var codeSegments = _.lazyTweens;
            var _isFunction = _.lazyRender;
            var globals = _gsScope._gsDefine.globals;
            /**
             * @param {Object} vars
             * @return {?}
             */
            var _copy = function(vars) {
                var p;
                var copy = {};
                for (p in vars) {
                    copy[p] = vars[p];
                }
                return copy;
            };
            /**
             * @param {Object} data
             * @param {Object} obj
             * @param {number} i
             * @return {undefined}
             */
            var func = function(data, obj, i) {
                var index;
                var value;
                var iteratee = data.cycle;
                for (index in iteratee) {
                    value = iteratee[index];
                    data[index] = "function" == typeof value ? value.call(obj[i], i) : value[i % value.length];
                }
                delete data.cycle;
            };
            /** @type {function (): undefined} */
            var restoreScript = options.pauseCallback = function() {};
            /**
             * @param {string} s
             * @return {?}
             */
            var Sizzle = function(s) {
                var i;
                /** @type {Array} */
                var results = [];
                var len = s.length;
                /** @type {number} */
                i = 0;
                for (; i !== len; results.push(s[i++])) {}
                return results;
            };
            var p = TimelineLite.prototype = new SimpleTimeline;
            return TimelineLite.version = "1.19.0", p.constructor = TimelineLite, p.kill()._gc = p._forcingPlayhead = p._hasPause = false, p.to = function(elem, duration, isXML, position) {
                var Animation = isXML.repeat && globals.TweenMax || TweenLite;
                return duration ? this.add(new Animation(elem, duration, isXML), position) : this.set(elem, isXML, position);
            }, p.from = function(target, duration, vars, key) {
                return this.add((vars.repeat && globals.TweenMax || TweenLite).from(target, duration, vars), key);
            }, p.fromTo = function(elem, duration, fromVars, isXML, position) {
                var $ = isXML.repeat && globals.TweenMax || TweenLite;
                return duration ? this.add($.fromTo(elem, duration, fromVars, isXML), position) : this.set(elem, isXML, position);
            }, p.staggerTo = function(selector, duration, vars, stagger, position, onCompleteAllParams, onCompleteAllScope, onCompleteAll) {
                var data;
                var i;
                var tl = new TimelineLite({
                    onComplete: onCompleteAllParams,
                    onCompleteParams: onCompleteAllScope,
                    callbackScope: onCompleteAll,
                    smoothChildTiming: this.smoothChildTiming
                });
                var cycle = vars.cycle;
                if ("string" == typeof selector) {
                    selector = TweenLite.selector(selector) || selector;
                }
                selector = selector || [];
                if (_isSelector(selector)) {
                    selector = Sizzle(selector);
                }
                stagger = stagger || 0;
                if (stagger < 0) {
                    selector = Sizzle(selector);
                    selector.reverse();
                    stagger *= -1;
                }
                /** @type {number} */
                i = 0;
                for (; i < selector.length; i++) {
                    data = _copy(vars);
                    if (data.startAt) {
                        data.startAt = _copy(data.startAt);
                        if (data.startAt.cycle) {
                            func(data.startAt, selector, i);
                        }
                    }
                    if (cycle) {
                        func(data, selector, i);
                        if (null != data.duration) {
                            duration = data.duration;
                            delete data.duration;
                        }
                    }
                    tl.to(selector[i], duration, data, i * stagger);
                }
                return this.add(tl, position);
            }, p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAllParams, onCompleteAllScope, onCompleteAll) {
                return vars.immediateRender = 0 != vars.immediateRender, vars.runBackwards = true, this.staggerTo(targets, duration, vars, stagger, position, onCompleteAllParams, onCompleteAllScope, onCompleteAll);
            }, p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAllParams, onCompleteAllScope, onCompleteAll) {
                return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAllParams, onCompleteAllScope, onCompleteAll);
            }, p.call = function(key, value, scope, event) {
                return this.add(TweenLite.delayedCall(0, key, value, scope), event);
            }, p.set = function(second, value, position) {
                return position = this._parseTimeOrLabel(position, 0, true), null == value.immediateRender && (value.immediateRender = position === this._time && !this._paused), this.add(new TweenLite(second, 0, value), position);
            }, TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
                vars = vars || {};
                if (null == vars.smoothChildTiming) {
                    /** @type {boolean} */
                    vars.smoothChildTiming = true;
                }
                var tween;
                var next;
                var tl = new TimelineLite(vars);
                var root = tl._timeline;
                if (null == ignoreDelayedCalls) {
                    /** @type {boolean} */
                    ignoreDelayedCalls = true;
                }
                root._remove(tl, true);
                /** @type {number} */
                tl._startTime = 0;
                tl._rawPrevTime = tl._time = tl._totalTime = root._time;
                tween = root._first;
                for (; tween;) {
                    next = tween._next;
                    if (!(ignoreDelayedCalls && (tween instanceof TweenLite && tween.target === tween.vars.onComplete))) {
                        tl.add(tween, tween._startTime - tween._delay);
                    }
                    tween = next;
                }
                return root.add(tl, 0), tl;
            }, p.add = function(value, position, style, fmt) {
                var event;
                var _len;
                var _i;
                var child;
                var tl;
                var smoothChildTiming;
                if ("number" != typeof position && (position = this._parseTimeOrLabel(position, 0, true, value)), !(value instanceof Animation)) {
                    if (value instanceof Array || value && (value.push && _isArray(value))) {
                        style = style || "normal";
                        fmt = fmt || 0;
                        /** @type {number} */
                        event = position;
                        _len = value.length;
                        /** @type {number} */
                        _i = 0;
                        for (; _i < _len; _i++) {
                            if (_isArray(child = value[_i])) {
                                child = new TimelineLite({
                                    tweens: child
                                });
                            }
                            this.add(child, event);
                            if ("string" != typeof child) {
                                if ("function" != typeof child) {
                                    if ("sequence" === style) {
                                        event = child._startTime + child.totalDuration() / child._timeScale;
                                    } else {
                                        if ("start" === style) {
                                            child._startTime -= child.delay();
                                        }
                                    }
                                }
                            }
                            event += fmt;
                        }
                        return this._uncache(true);
                    }
                    if ("string" == typeof value) {
                        return this.addLabel(value, position);
                    }
                    if ("function" != typeof value) {
                        throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
                    }
                    value = TweenLite.delayedCall(0, value);
                }
                if (SimpleTimeline.prototype.add.call(this, value, position), (this._gc || this._time === this._duration) && (!this._paused && this._duration < this.duration())) {
                    tl = this;
                    /** @type {boolean} */
                    smoothChildTiming = tl.rawTime() > value._startTime;
                    for (; tl._timeline;) {
                        if (smoothChildTiming && tl._timeline.smoothChildTiming) {
                            tl.totalTime(tl._totalTime, true);
                        } else {
                            if (tl._gc) {
                                tl._enabled(true, false);
                            }
                        }
                        tl = tl._timeline;
                    }
                }
                return this;
            }, p.remove = function(value) {
                if (value instanceof Animation) {
                    this._remove(value, false);
                    var req = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline;
                    return value._startTime = (value._paused ? value._pauseTime : req._time) - (value._reversed ? value.totalDuration() - value._totalTime : value._totalTime) / value._timeScale, this;
                }
                if (value instanceof Array || value && (value.push && _isArray(value))) {
                    var i = value.length;
                    for (; --i > -1;) {
                        this.remove(value[i]);
                    }
                    return this;
                }
                return "string" == typeof value ? this.removeLabel(value) : this.kill(null, value);
            }, p._remove = function(tween, skipDisable) {
                SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
                var last = this._last;
                return last ? this._time > last._startTime + last._totalDuration / last._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
            }, p.append = function(selector, offsetOrLabel) {
                return this.add(selector, this._parseTimeOrLabel(null, offsetOrLabel, true, selector));
            }, p.insert = p.insertMultiple = function(selector, position, value, data) {
                return this.add(selector, position || 0, value, data);
            }, p.appendMultiple = function(selector, offsetOrLabel, name, data) {
                return this.add(selector, this._parseTimeOrLabel(null, offsetOrLabel, true, selector), name, data);
            }, p.addLabel = function(label, position) {
                return this._labels[label] = this._parseTimeOrLabel(position), this;
            }, p.addPause = function(event, dataAndEvents, params, p) {
                var selector = TweenLite.delayedCall(0, restoreScript, params, p || this);
                return selector.vars.onComplete = selector.vars.onReverseComplete = dataAndEvents, selector.data = "isPause", this._hasPause = true, this.add(selector, event);
            }, p.removeLabel = function(label) {
                return delete this._labels[label], this;
            }, p.getLabelTime = function(label) {
                return null != this._labels[label] ? this._labels[label] : -1;
            }, p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, deepDataAndEvents, ignore) {
                var i;
                if (ignore instanceof Animation && ignore.timeline === this) {
                    this.remove(ignore);
                } else {
                    if (ignore && (ignore instanceof Array || ignore.push && _isArray(ignore))) {
                        i = ignore.length;
                        for (; --i > -1;) {
                            if (ignore[i] instanceof Animation) {
                                if (ignore[i].timeline === this) {
                                    this.remove(ignore[i]);
                                }
                            }
                        }
                    }
                }
                if ("string" == typeof offsetOrLabel) {
                    return this._parseTimeOrLabel(offsetOrLabel, deepDataAndEvents && ("number" == typeof timeOrLabel && null == this._labels[offsetOrLabel]) ? timeOrLabel - this.duration() : 0, deepDataAndEvents);
                }
                if (offsetOrLabel = offsetOrLabel || 0, "string" != typeof timeOrLabel || !isNaN(timeOrLabel) && null == this._labels[timeOrLabel]) {
                    if (null == timeOrLabel) {
                        timeOrLabel = this.duration();
                    }
                } else {
                    if (i = timeOrLabel.indexOf("="), i === -1) {
                        return null == this._labels[timeOrLabel] ? deepDataAndEvents ? this._labels[timeOrLabel] = this.duration() + offsetOrLabel : offsetOrLabel : this._labels[timeOrLabel] + offsetOrLabel;
                    }
                    /** @type {number} */
                    offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
                    timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, deepDataAndEvents) : this.duration();
                }
                return Number(timeOrLabel) + offsetOrLabel;
            }, p.seek = function(position, suppressEvents) {
                return this.totalTime("number" == typeof position ? position : this._parseTimeOrLabel(position), suppressEvents !== false);
            }, p.stop = function() {
                return this.paused(true);
            }, p.gotoAndPlay = function(position, suppressEvents) {
                return this.play(position, suppressEvents);
            }, p.gotoAndStop = function(position, suppressEvents) {
                return this.pause(position, suppressEvents);
            }, p.render = function(time, recurring, opt_isDefault) {
                if (this._gc) {
                    this._enabled(true, false);
                }
                var tween;
                var selector;
                var next;
                var callback;
                var data;
                var self;
                var position;
                var totalDur = this._dirty ? this.totalDuration() : this._totalDuration;
                var prevTime = this._time;
                var _startTime = this._startTime;
                var _timeScale = this._timeScale;
                var previousState = this._paused;
                if (time >= totalDur - 1E-7) {
                    this._totalTime = this._time = totalDur;
                    if (!this._reversed) {
                        if (!this._hasPausedChild()) {
                            /** @type {boolean} */
                            selector = true;
                            /** @type {string} */
                            callback = "onComplete";
                            /** @type {boolean} */
                            data = !!this._timeline.autoRemoveChildren;
                            if (0 === this._duration) {
                                if (time <= 0 && time >= -1E-7 || (this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum)) {
                                    if (this._rawPrevTime !== time) {
                                        if (this._first) {
                                            /** @type {boolean} */
                                            data = true;
                                            if (this._rawPrevTime > _tinyNum) {
                                                /** @type {string} */
                                                callback = "onReverseComplete";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this._rawPrevTime = this._duration || (!recurring || (time || this._rawPrevTime === time)) ? time : _tinyNum;
                    time = totalDur + 1E-4;
                } else {
                    if (time < 1E-7) {
                        if (this._totalTime = this._time = 0, (0 !== prevTime || 0 === this._duration && (this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || time < 0 && this._rawPrevTime >= 0))) && (callback = "onReverseComplete", selector = this._reversed), time < 0) {
                            /** @type {boolean} */
                            this._active = false;
                            if (this._timeline.autoRemoveChildren && this._reversed) {
                                /** @type {boolean} */
                                data = selector = true;
                                /** @type {string} */
                                callback = "onReverseComplete";
                            } else {
                                if (this._rawPrevTime >= 0) {
                                    if (this._first) {
                                        /** @type {boolean} */
                                        data = true;
                                    }
                                }
                            }
                            /** @type {number} */
                            this._rawPrevTime = time;
                        } else {
                            if (this._rawPrevTime = this._duration || (!recurring || (time || this._rawPrevTime === time)) ? time : _tinyNum, 0 === time && selector) {
                                tween = this._first;
                                for (; tween && 0 === tween._startTime;) {
                                    if (!tween._duration) {
                                        /** @type {boolean} */
                                        selector = false;
                                    }
                                    tween = tween._next;
                                }
                            }
                            /** @type {number} */
                            time = 0;
                            if (!this._initted) {
                                /** @type {boolean} */
                                data = true;
                            }
                        }
                    } else {
                        if (this._hasPause && (!this._forcingPlayhead && !recurring)) {
                            if (time >= prevTime) {
                                tween = this._first;
                                for (; tween && (tween._startTime <= time && !self);) {
                                    if (!tween._duration) {
                                        if (!("isPause" !== tween.data)) {
                                            if (!tween.ratio) {
                                                if (!(0 === tween._startTime && 0 === this._rawPrevTime)) {
                                                    self = tween;
                                                }
                                            }
                                        }
                                    }
                                    tween = tween._next;
                                }
                            } else {
                                tween = this._last;
                                for (; tween && (tween._startTime >= time && !self);) {
                                    if (!tween._duration) {
                                        if ("isPause" === tween.data) {
                                            if (tween._rawPrevTime > 0) {
                                                self = tween;
                                            }
                                        }
                                    }
                                    tween = tween._prev;
                                }
                            }
                            if (self) {
                                this._time = time = self._startTime;
                                this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
                            }
                        }
                        this._totalTime = this._time = this._rawPrevTime = time;
                    }
                }
                if (this._time !== prevTime && this._first || (opt_isDefault || (data || self))) {
                    if (this._initted || (this._initted = true), this._active || !this._paused && (this._time !== prevTime && (time > 0 && (this._active = true))), 0 === prevTime && (this.vars.onStart && (0 === this._time && this._duration || (recurring || this._callback("onStart")))), position = this._time, position >= prevTime) {
                        tween = this._first;
                        for (; tween && (next = tween._next, position === this._time && (!this._paused || previousState));) {
                            if (tween._active || tween._startTime <= position && (!tween._paused && !tween._gc)) {
                                if (self === tween) {
                                    this.pause();
                                }
                                if (tween._reversed) {
                                    tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                                } else {
                                    tween.render((time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                                }
                            }
                            tween = next;
                        }
                    } else {
                        tween = this._last;
                        for (; tween && (next = tween._prev, position === this._time && (!this._paused || previousState));) {
                            if (tween._active || tween._startTime <= prevTime && (!tween._paused && !tween._gc)) {
                                if (self === tween) {
                                    self = tween._prev;
                                    for (; self && self.endTime() > this._time;) {
                                        self.render(self._reversed ? self.totalDuration() - (time - self._startTime) * self._timeScale : (time - self._startTime) * self._timeScale, recurring, opt_isDefault);
                                        self = self._prev;
                                    }
                                    /** @type {null} */
                                    self = null;
                                    this.pause();
                                }
                                if (tween._reversed) {
                                    tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                                } else {
                                    tween.render((time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                                }
                            }
                            tween = next;
                        }
                    }
                    if (this._onUpdate) {
                        if (!recurring) {
                            if (codeSegments.length) {
                                _isFunction();
                            }
                            this._callback("onUpdate");
                        }
                    }
                    if (callback) {
                        if (!this._gc) {
                            if (!(_startTime !== this._startTime && _timeScale === this._timeScale)) {
                                if (0 === this._time || totalDur >= this.totalDuration()) {
                                    if (selector) {
                                        if (codeSegments.length) {
                                            _isFunction();
                                        }
                                        if (this._timeline.autoRemoveChildren) {
                                            this._enabled(false, false);
                                        }
                                        /** @type {boolean} */
                                        this._active = false;
                                    }
                                    if (!recurring) {
                                        if (this.vars[callback]) {
                                            this._callback(callback);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, p._hasPausedChild = function() {
                var tween = this._first;
                for (; tween;) {
                    if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) {
                        return true;
                    }
                    tween = tween._next;
                }
                return false;
            }, p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
                ignoreBeforeTime = ignoreBeforeTime || -9999999999;
                /** @type {Array} */
                var a = [];
                var tween = this._first;
                /** @type {number} */
                var cnt = 0;
                for (; tween;) {
                    if (!(tween._startTime < ignoreBeforeTime)) {
                        if (tween instanceof TweenLite) {
                            if (tweens !== false) {
                                a[cnt++] = tween;
                            }
                        } else {
                            if (timelines !== false) {
                                a[cnt++] = tween;
                            }
                            if (nested !== false) {
                                /** @type {Array} */
                                a = a.concat(tween.getChildren(true, tweens, timelines));
                                /** @type {number} */
                                cnt = a.length;
                            }
                        }
                    }
                    tween = tween._next;
                }
                return a;
            }, p.getTweensOf = function(target, nested) {
                var items;
                var i;
                var _enabled = this._gc;
                /** @type {Array} */
                var result = [];
                /** @type {number} */
                var ri = 0;
                if (_enabled) {
                    this._enabled(true, true);
                }
                items = TweenLite.getTweensOf(target);
                i = items.length;
                for (; --i > -1;) {
                    if (items[i].timeline === this || nested && this._contains(items[i])) {
                        result[ri++] = items[i];
                    }
                }
                return _enabled && this._enabled(false, true), result;
            }, p.recent = function() {
                return this._recent;
            }, p._contains = function(tween) {
                var tl = tween.timeline;
                for (; tl;) {
                    if (tl === this) {
                        return true;
                    }
                    tl = tl.timeline;
                }
                return false;
            }, p.shiftChildren = function(amount, recurring, ignoreBeforeTime) {
                ignoreBeforeTime = ignoreBeforeTime || 0;
                var p;
                var tween = this._first;
                var labels = this._labels;
                for (; tween;) {
                    if (tween._startTime >= ignoreBeforeTime) {
                        tween._startTime += amount;
                    }
                    tween = tween._next;
                }
                if (recurring) {
                    for (p in labels) {
                        if (labels[p] >= ignoreBeforeTime) {
                            labels[p] += amount;
                        }
                    }
                }
                return this._uncache(true);
            }, p._kill = function(vars, target) {
                if (!vars && !target) {
                    return this._enabled(false, false);
                }
                var tokenized = target ? this.getTweensOf(target) : this.getChildren(true, true, false);
                var index = tokenized.length;
                /** @type {boolean} */
                var changed = false;
                for (; --index > -1;) {
                    if (tokenized[index]._kill(vars, target)) {
                        /** @type {boolean} */
                        changed = true;
                    }
                }
                return changed;
            }, p.clear = function(arr) {
                var tweens = this.getChildren(false, true, true);
                var i = tweens.length;
                /** @type {number} */
                this._time = this._totalTime = 0;
                for (; --i > -1;) {
                    tweens[i]._enabled(false, false);
                }
                return arr !== false && (this._labels = {}), this._uncache(true);
            }, p.invalidate = function() {
                var tween = this._first;
                for (; tween;) {
                    tween.invalidate();
                    tween = tween._next;
                }
                return Animation.prototype.invalidate.call(this);
            }, p._enabled = function(recurring, opt_isDefault) {
                if (recurring === this._gc) {
                    var tween = this._first;
                    for (; tween;) {
                        tween._enabled(recurring, true);
                        tween = tween._next;
                    }
                }
                return SimpleTimeline.prototype._enabled.call(this, recurring, opt_isDefault);
            }, p.totalTime = function(putativeSpy, dataAndEvents, deepDataAndEvents) {
                /** @type {boolean} */
                this._forcingPlayhead = true;
                var props = Animation.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = false, props;
            }, p.duration = function(value) {
                return arguments.length ? (0 !== this.duration() && (0 !== value && this.timeScale(this._duration / value)), this) : (this._dirty && this.totalDuration(), this._duration);
            }, p.totalDuration = function(value) {
                if (!arguments.length) {
                    if (this._dirty) {
                        var prev;
                        var ms;
                        /** @type {number} */
                        var max = 0;
                        var tween = this._last;
                        /** @type {number} */
                        var prevStart = 999999999999;
                        for (; tween;) {
                            prev = tween._prev;
                            if (tween._dirty) {
                                tween.totalDuration();
                            }
                            if (tween._startTime > prevStart && (this._sortChildren && !tween._paused)) {
                                this.add(tween, tween._startTime - tween._delay);
                            } else {
                                prevStart = tween._startTime;
                            }
                            if (tween._startTime < 0) {
                                if (!tween._paused) {
                                    max -= tween._startTime;
                                    if (this._timeline.smoothChildTiming) {
                                        this._startTime += tween._startTime / this._timeScale;
                                    }
                                    this.shiftChildren(-tween._startTime, false, -9999999999);
                                    /** @type {number} */
                                    prevStart = 0;
                                }
                            }
                            ms = tween._startTime + tween._totalDuration / tween._timeScale;
                            if (ms > max) {
                                max = ms;
                            }
                            tween = prev;
                        }
                        this._duration = this._totalDuration = max;
                        /** @type {boolean} */
                        this._dirty = false;
                    }
                    return this._totalDuration;
                }
                return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this;
            }, p.paused = function(recurring) {
                if (!recurring) {
                    var child = this._first;
                    var elType = this._time;
                    for (; child;) {
                        if (child._startTime === elType) {
                            if ("isPause" === child.data) {
                                /** @type {number} */
                                child._rawPrevTime = 0;
                            }
                        }
                        child = child._next;
                    }
                }
                return Animation.prototype.paused.apply(this, arguments);
            }, p.usesFrames = function() {
                var tl = this._timeline;
                for (; tl._timeline;) {
                    tl = tl._timeline;
                }
                return tl === Animation._rootFramesTimeline;
            }, p.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
            }, TimelineLite;
        }, true);
        _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(TimelineLite, TweenLite, dataAndEvents) {
            /**
             * @param {string} value
             * @return {undefined}
             */
            var TimelineMax = function(value) {
                TimelineLite.call(this, value);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                /** @type {number} */
                this._cycle = 0;
                /** @type {boolean} */
                this._yoyo = this.vars.yoyo === true;
                /** @type {boolean} */
                this._dirty = true;
            };
            /** @type {number} */
            var _tinyNum = 1E-10;
            var functions = TweenLite._internals;
            var codeSegments = functions.lazyTweens;
            var length = functions.lazyRender;
            var globals = _gsScope._gsDefine.globals;
            var ease = new dataAndEvents(null, null, 1, 0);
            var p = TimelineMax.prototype = new TimelineLite;
            return p.constructor = TimelineMax, p.kill()._gc = false, TimelineMax.version = "1.19.0", p.invalidate = function() {
                return this._yoyo = this.vars.yoyo === true, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(true), TimelineLite.prototype.invalidate.call(this);
            }, p.addCallback = function(callback, event, params, scope) {
                return this.add(TweenLite.delayedCall(0, callback, params, scope), event);
            }, p.removeCallback = function(callback, position) {
                if (callback) {
                    if (null == position) {
                        this._kill(null, callback);
                    } else {
                        var a = this.getTweensOf(callback, false);
                        var i = a.length;
                        var time = this._parseTimeOrLabel(position);
                        for (; --i > -1;) {
                            if (a[i]._startTime === time) {
                                a[i]._enabled(false, false);
                            }
                        }
                    }
                }
                return this;
            }, p.removePause = function(positionError) {
                return this.removeCallback(TimelineLite._internals.pauseCallback, positionError);
            }, p.tweenTo = function(position, vars) {
                vars = vars || {};
                var dataId;
                var p;
                var self;
                var copy = {
                    ease: ease,
                    useFrames: this.usesFrames(),
                    immediateRender: false
                };
                var MappedDataControlConsumer = vars.repeat && globals.TweenMax || TweenLite;
                for (p in vars) {
                    copy[p] = vars[p];
                }
                return copy.time = this._parseTimeOrLabel(position), dataId = Math.abs(Number(copy.time) - this._time) / this._timeScale || 0.001, self = new MappedDataControlConsumer(this, dataId, copy), copy.onStart = function() {
                    self.target.paused(true);
                    if (self.vars.time !== self.target.time()) {
                        if (dataId === self.duration()) {
                            self.duration(Math.abs(self.vars.time - self.target.time()) / self.target._timeScale);
                        }
                    }
                    if (vars.onStart) {
                        self._callback("onStart");
                    }
                }, self;
            }, p.tweenFromTo = function(fromPosition, toPosition, vars) {
                vars = vars || {};
                fromPosition = this._parseTimeOrLabel(fromPosition);
                vars.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [fromPosition],
                    callbackScope: this
                };
                /** @type {boolean} */
                vars.immediateRender = vars.immediateRender !== false;
                var t = this.tweenTo(toPosition, vars);
                return t.duration(Math.abs(t.vars.time - fromPosition) / this._timeScale || 0.001);
            }, p.render = function(time, recurring, opt_isDefault) {
                if (this._gc) {
                    this._enabled(true, false);
                }
                var tween;
                var selector;
                var next;
                var callback;
                var data;
                var cycleDuration;
                var self;
                var position;
                var totalDur = this._dirty ? this.totalDuration() : this._totalDuration;
                var dur = this._duration;
                var prevTime = this._time;
                var prevTotalTime = this._totalTime;
                var _startTime = this._startTime;
                var _timeScale = this._timeScale;
                var prevRawPrevTime = this._rawPrevTime;
                var prevPaused = this._paused;
                var prevCycle = this._cycle;
                if (time >= totalDur - 1E-7) {
                    if (!this._locked) {
                        this._totalTime = totalDur;
                        this._cycle = this._repeat;
                    }
                    if (!this._reversed) {
                        if (!this._hasPausedChild()) {
                            /** @type {boolean} */
                            selector = true;
                            /** @type {string} */
                            callback = "onComplete";
                            /** @type {boolean} */
                            data = !!this._timeline.autoRemoveChildren;
                            if (0 === this._duration) {
                                if (time <= 0 && time >= -1E-7 || (prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum)) {
                                    if (prevRawPrevTime !== time) {
                                        if (this._first) {
                                            /** @type {boolean} */
                                            data = true;
                                            if (prevRawPrevTime > _tinyNum) {
                                                /** @type {string} */
                                                callback = "onReverseComplete";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this._rawPrevTime = this._duration || (!recurring || (time || this._rawPrevTime === time)) ? time : _tinyNum;
                    if (this._yoyo && 0 !== (1 & this._cycle)) {
                        /** @type {number} */
                        this._time = time = 0;
                    } else {
                        this._time = dur;
                        time = dur + 1E-4;
                    }
                } else {
                    if (time < 1E-7) {
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== prevTime || 0 === dur && (prevRawPrevTime !== _tinyNum && ((prevRawPrevTime > 0 || time < 0 && prevRawPrevTime >= 0) && !this._locked))) && (callback = "onReverseComplete", selector = this._reversed), time < 0) {
                            /** @type {boolean} */
                            this._active = false;
                            if (this._timeline.autoRemoveChildren && this._reversed) {
                                /** @type {boolean} */
                                data = selector = true;
                                /** @type {string} */
                                callback = "onReverseComplete";
                            } else {
                                if (prevRawPrevTime >= 0) {
                                    if (this._first) {
                                        /** @type {boolean} */
                                        data = true;
                                    }
                                }
                            }
                            /** @type {number} */
                            this._rawPrevTime = time;
                        } else {
                            if (this._rawPrevTime = dur || (!recurring || (time || this._rawPrevTime === time)) ? time : _tinyNum, 0 === time && selector) {
                                tween = this._first;
                                for (; tween && 0 === tween._startTime;) {
                                    if (!tween._duration) {
                                        /** @type {boolean} */
                                        selector = false;
                                    }
                                    tween = tween._next;
                                }
                            }
                            /** @type {number} */
                            time = 0;
                            if (!this._initted) {
                                /** @type {boolean} */
                                data = true;
                            }
                        }
                    } else {
                        if (0 === dur && (prevRawPrevTime < 0 && (data = true)), this._time = this._rawPrevTime = time, this._locked || (this._totalTime = time, 0 !== this._repeat && (cycleDuration = dur + this._repeatDelay, this._cycle = this._totalTime / cycleDuration >> 0, 0 !== this._cycle && (this._cycle === this._totalTime / cycleDuration && (prevTotalTime <= time && this._cycle--)), this._time = this._totalTime - this._cycle * cycleDuration, this._yoyo && (0 !== (1 & this._cycle) && (this._time = dur -
                                this._time)), this._time > dur ? (this._time = dur, time = dur + 1E-4) : this._time < 0 ? this._time = time = 0 : time = this._time)), this._hasPause && (!this._forcingPlayhead && !recurring)) {
                            if (time = this._time, time >= prevTime) {
                                tween = this._first;
                                for (; tween && (tween._startTime <= time && !self);) {
                                    if (!tween._duration) {
                                        if (!("isPause" !== tween.data)) {
                                            if (!tween.ratio) {
                                                if (!(0 === tween._startTime && 0 === this._rawPrevTime)) {
                                                    self = tween;
                                                }
                                            }
                                        }
                                    }
                                    tween = tween._next;
                                }
                            } else {
                                tween = this._last;
                                for (; tween && (tween._startTime >= time && !self);) {
                                    if (!tween._duration) {
                                        if ("isPause" === tween.data) {
                                            if (tween._rawPrevTime > 0) {
                                                self = tween;
                                            }
                                        }
                                    }
                                    tween = tween._prev;
                                }
                            }
                            if (self) {
                                this._time = time = self._startTime;
                                this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
                            }
                        }
                    }
                }
                if (this._cycle !== prevCycle && !this._locked) {
                    var backwards = this._yoyo && 0 !== (1 & prevCycle);
                    /** @type {boolean} */
                    var wrap = backwards === (this._yoyo && 0 !== (1 & this._cycle));
                    var recTotalTime = this._totalTime;
                    var recCycle = this._cycle;
                    var recRawPrevTime = this._rawPrevTime;
                    var recTime = this._time;
                    if (this._totalTime = prevCycle * dur, this._cycle < prevCycle ? backwards = !backwards : this._totalTime += dur, this._time = prevTime, this._rawPrevTime = 0 === dur ? prevRawPrevTime - 1E-4 : prevRawPrevTime, this._cycle = prevCycle, this._locked = true, prevTime = backwards ? 0 : dur, this.render(prevTime, recurring, 0 === dur), recurring || (this._gc || this.vars.onRepeat && this._callback("onRepeat")), prevTime !== this._time) {
                        return;
                    }
                    if (wrap && (prevTime = backwards ? dur + 1E-4 : -1E-4, this.render(prevTime, true, false)), this._locked = false, this._paused && !prevPaused) {
                        return;
                    }
                    this._time = recTime;
                    this._totalTime = recTotalTime;
                    this._cycle = recCycle;
                    this._rawPrevTime = recRawPrevTime;
                }
                if (!(this._time !== prevTime && this._first || (opt_isDefault || (data || self)))) {
                    return void(prevTotalTime !== this._totalTime && (this._onUpdate && (recurring || this._callback("onUpdate"))));
                }
                if (this._initted || (this._initted = true), this._active || !this._paused && (this._totalTime !== prevTotalTime && (time > 0 && (this._active = true))), 0 === prevTotalTime && (this.vars.onStart && (0 === this._totalTime && this._totalDuration || (recurring || this._callback("onStart")))), position = this._time, position >= prevTime) {
                    tween = this._first;
                    for (; tween && (next = tween._next, position === this._time && (!this._paused || prevPaused));) {
                        if (tween._active || tween._startTime <= this._time && (!tween._paused && !tween._gc)) {
                            if (self === tween) {
                                this.pause();
                            }
                            if (tween._reversed) {
                                tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                            } else {
                                tween.render((time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                            }
                        }
                        tween = next;
                    }
                } else {
                    tween = this._last;
                    for (; tween && (next = tween._prev, position === this._time && (!this._paused || prevPaused));) {
                        if (tween._active || tween._startTime <= prevTime && (!tween._paused && !tween._gc)) {
                            if (self === tween) {
                                self = tween._prev;
                                for (; self && self.endTime() > this._time;) {
                                    self.render(self._reversed ? self.totalDuration() - (time - self._startTime) * self._timeScale : (time - self._startTime) * self._timeScale, recurring, opt_isDefault);
                                    self = self._prev;
                                }
                                /** @type {null} */
                                self = null;
                                this.pause();
                            }
                            if (tween._reversed) {
                                tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                            } else {
                                tween.render((time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                            }
                        }
                        tween = next;
                    }
                }
                if (this._onUpdate) {
                    if (!recurring) {
                        if (codeSegments.length) {
                            length();
                        }
                        this._callback("onUpdate");
                    }
                }
                if (callback) {
                    if (!this._locked) {
                        if (!this._gc) {
                            if (!(_startTime !== this._startTime && _timeScale === this._timeScale)) {
                                if (0 === this._time || totalDur >= this.totalDuration()) {
                                    if (selector) {
                                        if (codeSegments.length) {
                                            length();
                                        }
                                        if (this._timeline.autoRemoveChildren) {
                                            this._enabled(false, false);
                                        }
                                        /** @type {boolean} */
                                        this._active = false;
                                    }
                                    if (!recurring) {
                                        if (this.vars[callback]) {
                                            this._callback(callback);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, p.getActive = function(nested, tweens, timelines) {
                if (null == nested) {
                    /** @type {boolean} */
                    nested = true;
                }
                if (null == tweens) {
                    /** @type {boolean} */
                    tweens = true;
                }
                if (null == timelines) {
                    /** @type {boolean} */
                    timelines = false;
                }
                var i;
                var el;
                /** @type {Array} */
                var arrayLike = [];
                var all = this.getChildren(nested, tweens, timelines);
                /** @type {number} */
                var len = 0;
                var l = all.length;
                /** @type {number} */
                i = 0;
                for (; i < l; i++) {
                    el = all[i];
                    if (el.isActive()) {
                        arrayLike[len++] = el;
                    }
                }
                return arrayLike;
            }, p.getLabelAfter = function(time) {
                if (!time) {
                    if (0 !== time) {
                        time = this._time;
                    }
                }
                var i;
                var values = this.getLabelsArray();
                var valuesLen = values.length;
                /** @type {number} */
                i = 0;
                for (; i < valuesLen; i++) {
                    if (values[i].time > time) {
                        return values[i].name;
                    }
                }
                return null;
            }, p.getLabelBefore = function(time) {
                if (null == time) {
                    time = this._time;
                }
                var labels = this.getLabelsArray();
                var i = labels.length;
                for (; --i > -1;) {
                    if (labels[i].time < time) {
                        return labels[i].name;
                    }
                }
                return null;
            }, p.getLabelsArray = function() {
                var p;
                /** @type {Array} */
                var result = [];
                /** @type {number} */
                var ri = 0;
                for (p in this._labels) {
                    result[ri++] = {
                        time: this._labels[p],
                        name: p
                    };
                }
                return result.sort(function(a, b) {
                    return a.time - b.time;
                }), result;
            }, p.progress = function(value, dataAndEvents) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), dataAndEvents) : this._time / this.duration();
            }, p.totalProgress = function(value, dataAndEvents) {
                return arguments.length ? this.totalTime(this.totalDuration() * value, dataAndEvents) : this._totalTime / this.totalDuration();
            }, p.totalDuration = function(value) {
                return arguments.length ? this._repeat !== -1 && value ? this.timeScale(this.totalDuration() / value) : this : (this._dirty && (TimelineLite.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
            }, p.time = function(value, tests) {
                return arguments.length ? (this._dirty && this.totalDuration(), value > this._duration && (value = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? value = this._duration - value + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (value += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(value, tests)) : this._time;
            }, p.repeat = function(value) {
                return arguments.length ? (this._repeat = value, this._uncache(true)) : this._repeat;
            }, p.repeatDelay = function(value) {
                return arguments.length ? (this._repeatDelay = value, this._uncache(true)) : this._repeatDelay;
            }, p.yoyo = function(value) {
                return arguments.length ? (this._yoyo = value, this) : this._yoyo;
            }, p.currentLabel = function(value) {
                return arguments.length ? this.seek(value, true) : this.getLabelBefore(this._time + 1E-8);
            }, TimelineMax;
        }, true);
        (function() {
            /** @type {number} */
            var func = 180 / Math.PI;
            /** @type {Array} */
            var data = [];
            /** @type {Array} */
            var codeSegments = [];
            /** @type {Array} */
            var types = [];
            var $ = {};
            var collection = _gsScope._gsDefine.globals;
            /**
             * @param {number} a
             * @param {number} b
             * @param {number} x
             * @param {number} y
             * @return {undefined}
             */
            var constructor = function(a, b, x, y) {
                if (x === y) {
                    /** @type {number} */
                    x = y - (y - b) / 1E6;
                }
                if (a === b) {
                    b = a + (x - a) / 1E6;
                }
                /** @type {number} */
                this.a = a;
                /** @type {number} */
                this.b = b;
                /** @type {number} */
                this.c = x;
                /** @type {number} */
                this.d = y;
                /** @type {number} */
                this.da = y - a;
                /** @type {number} */
                this.ca = x - a;
                /** @type {number} */
                this.ba = b - a;
            };
            /** @type {string} */
            var path = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
            /**
             * @param {number} x
             * @param {number} delta
             * @param {number} step
             * @param {number} i
             * @return {?}
             */
            var render = function(x, delta, step, i) {
                var record = {
                    a: x
                };
                var rgb = {};
                var b = {};
                var target = {
                    c: i
                };
                /** @type {number} */
                var t = (x + delta) / 2;
                /** @type {number} */
                var content = (delta + step) / 2;
                /** @type {number} */
                var len = (step + i) / 2;
                /** @type {number} */
                var t2 = (t + content) / 2;
                /** @type {number} */
                var t1 = (content + len) / 2;
                /** @type {number} */
                var t3 = (t1 - t2) / 8;
                return record.b = t + (x - t) / 4, rgb.b = t2 + t3, record.c = rgb.a = (record.b + rgb.b) / 2, rgb.c = b.a = (t2 + t1) / 2, b.b = t1 - t3, target.b = len + (i - len) / 4, b.c = target.a = (b.b + target.b) / 2, [record, rgb, b, target];
            };
            /**
             * @param {Array} queue
             * @param {number} index
             * @param {boolean} z
             * @param {boolean} deepDataAndEvents
             * @param {?} place
             * @return {undefined}
             */
            var go = function(queue, index, z, deepDataAndEvents, place) {
                var i;
                var delta;
                var start;
                var stop;
                var that;
                var length;
                var end;
                var len;
                var height;
                var arr;
                var d;
                var s;
                var ms;
                /** @type {number} */
                var padLength = queue.length - 1;
                /** @type {number} */
                var idx = 0;
                var x = queue[0].a;
                /** @type {number} */
                i = 0;
                for (; i < padLength; i++) {
                    that = queue[idx];
                    delta = that.a;
                    start = that.d;
                    stop = queue[idx + 1].d;
                    if (place) {
                        d = data[i];
                        s = codeSegments[i];
                        /** @type {number} */
                        ms = (s + d) * index * 0.25 / (deepDataAndEvents ? 0.5 : types[i] || 0.5);
                        /** @type {number} */
                        length = start - (start - delta) * (deepDataAndEvents ? 0.5 * index : 0 !== d ? ms / d : 0);
                        end = start + (stop - start) * (deepDataAndEvents ? 0.5 * index : 0 !== s ? ms / s : 0);
                        /** @type {number} */
                        len = start - (length + ((end - length) * (3 * d / (d + s) + 0.5) / 4 || 0));
                    } else {
                        /** @type {number} */
                        length = start - (start - delta) * index * 0.5;
                        end = start + (stop - start) * index * 0.5;
                        /** @type {number} */
                        len = start - (length + end) / 2;
                    }
                    length += len;
                    end += len;
                    /** @type {number} */
                    that.c = height = length;
                    if (0 !== i) {
                        that.b = x;
                    } else {
                        that.b = x = that.a + 0.6 * (that.c - that.a);
                    }
                    /** @type {number} */
                    that.da = start - delta;
                    /** @type {number} */
                    that.ca = height - delta;
                    /** @type {number} */
                    that.ba = x - delta;
                    if (z) {
                        arr = render(delta, x, height, start);
                        queue.splice(idx, 1, arr[0], arr[1], arr[2], arr[3]);
                        idx += 4;
                    } else {
                        idx++;
                    }
                    /** @type {number} */
                    x = end;
                }
                that = queue[idx];
                that.b = x;
                that.c = x + 0.4 * (that.d - x);
                /** @type {number} */
                that.da = that.d - that.a;
                /** @type {number} */
                that.ca = that.c - that.a;
                /** @type {number} */
                that.ba = x - that.a;
                if (z) {
                    arr = render(that.a, x, that.c, that.d);
                    queue.splice(idx, 1, arr[0], arr[1], arr[2], arr[3]);
                }
            };
            /**
             * @param {Array} points
             * @param {string} x
             * @param {?} mL
             * @param {Object} v
             * @return {?}
             */
            var set = function(points, x, mL, v) {
                var padLength;
                var i;
                var p1x;
                var p2x;
                var px;
                var token;
                /** @type {Array} */
                var instances = [];
                if (v) {
                    /** @type {Array} */
                    points = [v].concat(points);
                    /** @type {number} */
                    i = points.length;
                    for (; --i > -1;) {
                        if ("string" == typeof(token = points[i][x])) {
                            if ("=" === token.charAt(1)) {
                                points[i][x] = v[x] + Number(token.charAt(0) + token.substr(2));
                            }
                        }
                    }
                }
                if (padLength = points.length - 2, padLength < 0) {
                    return instances[0] = new constructor(points[0][x], 0, 0, points[padLength < -1 ? 0 : 1][x]), instances;
                }
                /** @type {number} */
                i = 0;
                for (; i < padLength; i++) {
                    p1x = points[i][x];
                    p2x = points[i + 1][x];
                    instances[i] = new constructor(p1x, 0, 0, p2x);
                    if (mL) {
                        px = points[i + 2][x];
                        data[i] = (data[i] || 0) + (p2x - p1x) * (p2x - p1x);
                        codeSegments[i] = (codeSegments[i] || 0) + (px - p2x) * (px - p2x);
                    }
                }
                return instances[i] = new constructor(points[i][x], 0, 0, points[i + 1][x]), instances;
            };
            /**
             * @param {Array} array
             * @param {number} options
             * @param {boolean} z
             * @param {boolean} deepDataAndEvents
             * @param {string} uri
             * @param {Object} value
             * @return {?}
             */
            var init = function(array, options, z, deepDataAndEvents, uri, value) {
                var i;
                var prop;
                var r;
                var c;
                var a3;
                var cols;
                var y;
                var initVars;
                var obj = {};
                /** @type {Array} */
                var props = [];
                var vars = value || array[0];
                /** @type {string} */
                uri = "string" == typeof uri ? "," + uri + "," : path;
                if (null == options) {
                    /** @type {number} */
                    options = 1;
                }
                for (prop in array[0]) {
                    props.push(prop);
                }
                if (array.length > 1) {
                    initVars = array[array.length - 1];
                    /** @type {boolean} */
                    y = true;
                    /** @type {number} */
                    i = props.length;
                    for (; --i > -1;) {
                        if (prop = props[i], Math.abs(vars[prop] - initVars[prop]) > 0.05) {
                            /** @type {boolean} */
                            y = false;
                            break;
                        }
                    }
                    if (y) {
                        array = array.concat();
                        if (value) {
                            array.unshift(value);
                        }
                        array.push(array[1]);
                        value = array[array.length - 3];
                    }
                }
                /** @type {number} */
                data.length = codeSegments.length = types.length = 0;
                /** @type {number} */
                i = props.length;
                for (; --i > -1;) {
                    prop = props[i];
                    /** @type {boolean} */
                    $[prop] = uri.indexOf("," + prop + ",") !== -1;
                    obj[prop] = set(array, prop, $[prop], value);
                }
                /** @type {number} */
                i = data.length;
                for (; --i > -1;) {
                    /** @type {number} */
                    data[i] = Math.sqrt(data[i]);
                    /** @type {number} */
                    codeSegments[i] = Math.sqrt(codeSegments[i]);
                }
                if (!deepDataAndEvents) {
                    /** @type {number} */
                    i = props.length;
                    for (; --i > -1;) {
                        if ($[prop]) {
                            r = obj[props[i]];
                            /** @type {number} */
                            cols = r.length - 1;
                            /** @type {number} */
                            c = 0;
                            for (; c < cols; c++) {
                                /** @type {number} */
                                a3 = r[c + 1].da / codeSegments[c] + r[c].da / data[c] || 0;
                                types[c] = (types[c] || 0) + a3 * a3;
                            }
                        }
                    }
                    /** @type {number} */
                    i = types.length;
                    for (; --i > -1;) {
                        /** @type {number} */
                        types[i] = Math.sqrt(types[i]);
                    }
                }
                /** @type {number} */
                i = props.length;
                /** @type {number} */
                c = z ? 4 : 1;
                for (; --i > -1;) {
                    prop = props[i];
                    r = obj[prop];
                    go(r, options, z, deepDataAndEvents, $[prop]);
                    if (y) {
                        r.splice(0, c);
                        r.splice(r.length - c, c);
                    }
                }
                return obj;
            };
            /**
             * @param {Object} models
             * @param {string} block
             * @param {Object} context
             * @return {?}
             */
            var add = function(models, block, context) {
                block = block || "soft";
                var y;
                var f;
                var x;
                var defaultOptions;
                var args;
                var t;
                var i;
                var l;
                var camelKey;
                var len;
                var txt;
                var fake = {};
                /** @type {number} */
                var length = "cubic" === block ? 3 : 2;
                /** @type {boolean} */
                var modalShown = "soft" === block;
                /** @type {Array} */
                var types = [];
                if (modalShown && (context && (models = [context].concat(models))), null == models || models.length < length + 1) {
                    throw "invalid Bezier data";
                }
                for (camelKey in models[0]) {
                    types.push(camelKey);
                }
                /** @type {number} */
                t = types.length;
                for (; --t > -1;) {
                    camelKey = types[t];
                    /** @type {Array} */
                    fake[camelKey] = args = [];
                    /** @type {number} */
                    len = 0;
                    l = models.length;
                    /** @type {number} */
                    i = 0;
                    for (; i < l; i++) {
                        y = null == context ? models[i][camelKey] : "string" == typeof(txt = models[i][camelKey]) && "=" === txt.charAt(1) ? context[camelKey] + Number(txt.charAt(0) + txt.substr(2)) : Number(txt);
                        if (modalShown) {
                            if (i > 1) {
                                if (i < l - 1) {
                                    /** @type {number} */
                                    args[len++] = (y + args[len - 2]) / 2;
                                }
                            }
                        }
                        args[len++] = y;
                    }
                    /** @type {number} */
                    l = len - length + 1;
                    /** @type {number} */
                    len = 0;
                    /** @type {number} */
                    i = 0;
                    for (; i < l; i += length) {
                        y = args[i];
                        f = args[i + 1];
                        x = args[i + 2];
                        defaultOptions = 2 === length ? 0 : args[i + 3];
                        args[len++] = txt = 3 === length ? new constructor(y, f, x, defaultOptions) : new constructor(y, (2 * f + y) / 3, (2 * f + x) / 3, x);
                    }
                    /** @type {number} */
                    args.length = len;
                }
                return fake;
            };
            /**
             * @param {Arguments} tokenized
             * @param {Array} dev
             * @param {number} count
             * @return {undefined}
             */
            var parseModel = function(tokenized, dev, count) {
                var g;
                var b;
                var length;
                var endIndex;
                var r00;
                var r10;
                var m00;
                var px;
                var m01;
                var object;
                var i;
                /** @type {number} */
                var al = 1 / count;
                var index = tokenized.length;
                for (; --index > -1;) {
                    object = tokenized[index];
                    length = object.a;
                    /** @type {number} */
                    endIndex = object.d - length;
                    /** @type {number} */
                    r00 = object.c - length;
                    /** @type {number} */
                    r10 = object.b - length;
                    /** @type {number} */
                    g = b = 0;
                    /** @type {number} */
                    px = 1;
                    for (; px <= count; px++) {
                        /** @type {number} */
                        m00 = al * px;
                        /** @type {number} */
                        m01 = 1 - m00;
                        /** @type {number} */
                        g = b - (b = (m00 * m00 * endIndex + 3 * m01 * (m00 * r00 + m01 * r10)) * m00);
                        /** @type {number} */
                        i = index * count + px - 1;
                        dev[i] = (dev[i] || 0) + g * g;
                    }
                }
            };
            /**
             * @param {Object} map
             * @param {number} size
             * @return {?}
             */
            var reduce = function(map, size) {
                /** @type {number} */
                size = size >> 0 || 6;
                var letter;
                var i;
                var valsLength;
                var c;
                /** @type {Array} */
                var dev = [];
                /** @type {Array} */
                var results = [];
                /** @type {number} */
                var v = 0;
                /** @type {number} */
                var result = 0;
                /** @type {number} */
                var max = size - 1;
                /** @type {Array} */
                var insert = [];
                /** @type {Array} */
                var f = [];
                for (letter in map) {
                    parseModel(map[letter], dev, size);
                }
                /** @type {number} */
                valsLength = dev.length;
                /** @type {number} */
                i = 0;
                for (; i < valsLength; i++) {
                    v += Math.sqrt(dev[i]);
                    /** @type {number} */
                    c = i % size;
                    /** @type {number} */
                    f[c] = v;
                    if (c === max) {
                        result += v;
                        /** @type {number} */
                        c = i / size >> 0;
                        /** @type {Array} */
                        insert[c] = f;
                        /** @type {number} */
                        results[c] = result;
                        /** @type {number} */
                        v = 0;
                        /** @type {Array} */
                        f = [];
                    }
                }
                return {
                    length: result,
                    lengths: results,
                    segments: insert
                };
            };
            var module = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                global: true,
                /**
                 * @param {?} target
                 * @param {Object} params
                 * @param {?} tween
                 * @return {?}
                 */
                init: function(target, params, tween) {
                    this._target = target;
                    if (params instanceof Array) {
                        params = {
                            values: params
                        };
                    }
                    this._func = {};
                    this._mod = {};
                    /** @type {Array} */
                    this._props = [];
                    /** @type {number} */
                    this._timeRes = null == params.timeResolution ? 6 : parseInt(params.timeResolution, 10);
                    var camelKey;
                    var isString;
                    var y;
                    var x;
                    var udataCur;
                    /** @type {Array} */
                    var value = params.values || [];
                    var types = {};
                    var section = value[0];
                    var data = params.autoRotate || tween.vars.orientToBezier;
                    /** @type {(Array|null)} */
                    this._autoRotate = data ? data instanceof Array ? data : [
                        ["x", "y", "rotation", data === true ? 0 : Number(data) || 0]
                    ] : null;
                    for (camelKey in section) {
                        this._props.push(camelKey);
                    }
                    /** @type {number} */
                    y = this._props.length;
                    for (; --y > -1;) {
                        camelKey = this._props[y];
                        this._overwriteProps.push(camelKey);
                        /** @type {boolean} */
                        isString = this._func[camelKey] = "function" == typeof target[camelKey];
                        types[camelKey] = isString ? target[camelKey.indexOf("set") || "function" != typeof target["get" + camelKey.substr(3)] ? camelKey : "get" + camelKey.substr(3)]() : parseFloat(target[camelKey]);
                        if (!udataCur) {
                            if (types[camelKey] !== value[0][camelKey]) {
                                udataCur = types;
                            }
                        }
                    }
                    if (this._beziers = "cubic" !== params.type && ("quadratic" !== params.type && "soft" !== params.type) ? init(value, isNaN(params.curviness) ? 1 : params.curviness, false, "thruBasic" === params.type, params.correlate, udataCur) : add(value, params.type, types), this._segCount = this._beziers[camelKey].length, this._timeRes) {
                        var node = reduce(this._beziers, this._timeRes);
                        this._length = node.length;
                        this._lengths = node.lengths;
                        this._segments = node.segments;
                        /** @type {number} */
                        this._l1 = this._li = this._s1 = this._si = 0;
                        this._l2 = this._lengths[0];
                        this._curSeg = this._segments[0];
                        this._s2 = this._curSeg[0];
                        /** @type {number} */
                        this._prec = 1 / this._curSeg.length;
                    }
                    if (data = this._autoRotate) {
                        /** @type {Array} */
                        this._initialRotations = [];
                        if (!(data[0] instanceof Array)) {
                            /** @type {Array} */
                            this._autoRotate = data = [data];
                        }
                        /** @type {number} */
                        y = data.length;
                        for (; --y > -1;) {
                            /** @type {number} */
                            x = 0;
                            for (; x < 3; x++) {
                                camelKey = data[y][x];
                                this._func[camelKey] = "function" == typeof target[camelKey] && target[camelKey.indexOf("set") || "function" != typeof target["get" + camelKey.substr(3)] ? camelKey : "get" + camelKey.substr(3)];
                            }
                            camelKey = data[y][2];
                            this._initialRotations[y] = (this._func[camelKey] ? this._func[camelKey].call(this._target) : this._target[camelKey]) || 0;
                            this._overwriteProps.push(camelKey);
                        }
                    }
                    return this._startRatio = tween.vars.runBackwards ? 1 : 0, true;
                },
                /**
                 * @param {number} second
                 * @return {undefined}
                 */
                set: function(second) {
                    var v;
                    var k;
                    var index;
                    var type;
                    var b;
                    var t;
                    var message;
                    var last;
                    var buffer;
                    var items;
                    var length = this._segCount;
                    var special = this._func;
                    var args = this._target;
                    /** @type {boolean} */
                    var prefix = second !== this._startRatio;
                    if (this._timeRes) {
                        if (buffer = this._lengths, items = this._curSeg, second *= this._length, index = this._li, second > this._l2 && index < length - 1) {
                            /** @type {number} */
                            last = length - 1;
                            for (; index < last && (this._l2 = buffer[++index]) <= second;) {}
                            this._l1 = buffer[index - 1];
                            this._li = index;
                            this._curSeg = items = this._segments[index];
                            this._s2 = items[this._s1 = this._si = 0];
                        } else {
                            if (second < this._l1 && index > 0) {
                                for (; index > 0 && (this._l1 = buffer[--index]) >= second;) {}
                                if (0 === index && second < this._l1) {
                                    /** @type {number} */
                                    this._l1 = 0;
                                } else {
                                    index++;
                                }
                                this._l2 = buffer[index];
                                this._li = index;
                                this._curSeg = items = this._segments[index];
                                this._s1 = items[(this._si = items.length - 1) - 1] || 0;
                                this._s2 = items[this._si];
                            }
                        }
                        if (v = index, second -= this._l1, index = this._si, second > this._s2 && index < items.length - 1) {
                            /** @type {number} */
                            last = items.length - 1;
                            for (; index < last && (this._s2 = items[++index]) <= second;) {}
                            this._s1 = items[index - 1];
                            this._si = index;
                        } else {
                            if (second < this._s1 && index > 0) {
                                for (; index > 0 && (this._s1 = items[--index]) >= second;) {}
                                if (0 === index && second < this._s1) {
                                    /** @type {number} */
                                    this._s1 = 0;
                                } else {
                                    index++;
                                }
                                this._s2 = items[index];
                                this._si = index;
                            }
                        }
                        /** @type {number} */
                        t = (index + (second - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                    } else {
                        /** @type {number} */
                        v = second < 0 ? 0 : second >= 1 ? length - 1 : length * second >> 0;
                        /** @type {number} */
                        t = (second - v * (1 / length)) * length;
                    }
                    /** @type {number} */
                    k = 1 - t;
                    index = this._props.length;
                    for (; --index > -1;) {
                        type = this._props[index];
                        b = this._beziers[type][v];
                        message = (t * t * b.da + 3 * k * (t * b.ca + k * b.ba)) * t + b.a;
                        if (this._mod[type]) {
                            message = this._mod[type](message, args);
                        }
                        if (special[type]) {
                            args[type](message);
                        } else {
                            args[type] = message;
                        }
                    }
                    if (this._autoRotate) {
                        var a;
                        var x1;
                        var y1;
                        var x2;
                        var y2;
                        var normalizedName;
                        var wrapper;
                        var rules = this._autoRotate;
                        index = rules.length;
                        for (; --index > -1;) {
                            type = rules[index][2];
                            normalizedName = rules[index][3] || 0;
                            /** @type {number} */
                            wrapper = rules[index][4] === true ? 1 : func;
                            b = this._beziers[rules[index][0]];
                            a = this._beziers[rules[index][1]];
                            if (b) {
                                if (a) {
                                    b = b[v];
                                    a = a[v];
                                    x1 = b.a + (b.b - b.a) * t;
                                    x2 = b.b + (b.c - b.b) * t;
                                    x1 += (x2 - x1) * t;
                                    x2 += (b.c + (b.d - b.c) * t - x2) * t;
                                    y1 = a.a + (a.b - a.a) * t;
                                    y2 = a.b + (a.c - a.b) * t;
                                    y1 += (y2 - y1) * t;
                                    y2 += (a.c + (a.d - a.c) * t - y2) * t;
                                    message = prefix ? Math.atan2(y2 - y1, x2 - x1) * wrapper + normalizedName : this._initialRotations[index];
                                    if (this._mod[type]) {
                                        message = this._mod[type](message, args);
                                    }
                                    if (special[type]) {
                                        args[type](message);
                                    } else {
                                        args[type] = message;
                                    }
                                }
                            }
                        }
                    }
                }
            });
            var p = module.prototype;
            /** @type {function (Array, number, boolean, boolean, string, Object): ?} */
            module.bezierThrough = init;
            /** @type {function (number, number, number, number): ?} */
            module.cubicToQuadratic = render;
            /** @type {boolean} */
            module._autoCSS = true;
            /**
             * @param {(Object|number)} x
             * @param {number} f
             * @param {number} y
             * @return {?}
             */
            module.quadraticToCubic = function(x, f, y) {
                return new constructor(x, (2 * f + x) / 3, (2 * f + y) / 3, y);
            };
            /**
             * @return {undefined}
             */
            module._cssRegister = function() {
                var e = collection.CSSPlugin;
                if (e) {
                    var options = e._internals;
                    var callback = options._parseToProxy;
                    var xml = options._setPluginRatio;
                    var Uint16Array = options.CSSPropTween;
                    options._registerComplexSpecialProp("bezier", {
                        /**
                         * @param {Object} node
                         * @param {Object} value
                         * @param {string} name
                         * @param {number} object
                         * @param {Object} data
                         * @param {number} recurring
                         * @return {?}
                         */
                        parser: function(node, value, name, object, data, recurring) {
                            if (value instanceof Array) {
                                value = {
                                    values: value
                                };
                            }
                            recurring = new module;
                            var i;
                            var key;
                            var v;
                            /** @type {Array} */
                            var codeSegments = value.values;
                            /** @type {number} */
                            var last = codeSegments.length - 1;
                            /** @type {Array} */
                            var values = [];
                            var obj = {};
                            if (last < 0) {
                                return data;
                            }
                            /** @type {number} */
                            i = 0;
                            for (; i <= last; i++) {
                                v = callback(node, codeSegments[i], object, data, recurring, last !== i);
                                values[i] = v.end;
                            }
                            for (key in value) {
                                obj[key] = value[key];
                            }
                            return obj.values = values, data = new Uint16Array(node, "bezier", 0, 0, v.pt, 2), data.data = v, data.plugin = recurring, data.setRatio = xml, 0 === obj.autoRotate && (obj.autoRotate = true), !obj.autoRotate || (obj.autoRotate instanceof Array || (i = obj.autoRotate === true ? 0 : Number(obj.autoRotate), obj.autoRotate = null != v.end.left ? [
                                ["left", "top", "rotation", i, false]
                            ] : null != v.end.x && [
                                ["x", "y", "rotation", i, false]
                            ])), obj.autoRotate && (object._transform || object._enableTransforms(false),
                                v.autoRotate = object._target._gsTransform, v.proxy.rotation = v.autoRotate.rotation || 0, object._overwriteProps.push("rotation")), recurring._onInitTween(v.proxy, obj, object._tween), data;
                        }
                    });
                }
            };
            /**
             * @param {?} b
             * @return {undefined}
             */
            p._mod = function(b) {
                var c;
                var a = this._overwriteProps;
                var i = a.length;
                for (; --i > -1;) {
                    c = b[a[i]];
                    if (c) {
                        if ("function" == typeof c) {
                            /** @type {Function} */
                            this._mod[a[i]] = c;
                        }
                    }
                }
            };
            /**
             * @param {Object} vars
             * @return {?}
             */
            p._kill = function(vars) {
                var search;
                var i;
                var arr = this._props;
                for (search in this._beziers) {
                    if (search in vars) {
                        delete this._beziers[search];
                        delete this._func[search];
                        i = arr.length;
                        for (; --i > -1;) {
                            if (arr[i] === search) {
                                arr.splice(i, 1);
                            }
                        }
                    }
                }
                if (arr = this._autoRotate) {
                    i = arr.length;
                    for (; --i > -1;) {
                        if (vars[arr[i][2]]) {
                            arr.splice(i, 1);
                        }
                    }
                }
                return this._super._kill.call(this, vars);
            };
        })();
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(Sprite, TweenLite) {
            var i;
            var obj;
            var opts;
            var eventPath;
            /**
             * @return {undefined}
             */
            var self = function() {
                Sprite.call(this, "css");
                /** @type {number} */
                this._overwriteProps.length = 0;
                this.setRatio = self.prototype.setRatio;
            };
            var globals = _gsScope._gsDefine.globals;
            var old = {};
            var p = self.prototype = new Sprite("css");
            /** @type {function (): undefined} */
            p.constructor = self;
            /** @type {string} */
            self.version = "1.19.0";
            /** @type {number} */
            self.API = 2;
            /** @type {number} */
            self.defaultTransformPerspective = 0;
            /** @type {string} */
            self.defaultSkewType = "compensated";
            /** @type {boolean} */
            self.defaultSmoothOrigin = true;
            /** @type {string} */
            p = "px";
            self.suffixMap = {
                top: p,
                right: p,
                bottom: p,
                left: p,
                width: p,
                height: p,
                fontSize: p,
                padding: p,
                margin: p,
                perspective: p,
                lineHeight: ""
            };
            var until;
            var c;
            var left;
            var right;
            var leftVal;
            var start;
            var prop;
            var camelKey;
            /** @type {RegExp} */
            var core_rnotwhite = /(?:\-|\.|\b)(\d|\.|e\-)+/g;
            /** @type {RegExp} */
            var rclass = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g;
            /** @type {RegExp} */
            var urlRegEx = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi;
            /** @type {RegExp} */
            var r20 = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g;
            /** @type {RegExp} */
            var rCRLF = /(?:\d|\-|\+|=|#|\.)*/g;
            /** @type {RegExp} */
            var rCurrLoc = /opacity *= *([^)]*)/i;
            /** @type {RegExp} */
            var rchecked = /opacity:([^;]*)/i;
            /** @type {RegExp} */
            var rSlash = /alpha\(opacity *=.+?\)/i;
            /** @type {RegExp} */
            var rbrace = /^(rgb|hsl)/;
            /** @type {RegExp} */
            var rmultiDash = /([A-Z])/g;
            /** @type {RegExp} */
            var rxhtmlTag = /-([a-z])/gi;
            /** @type {RegExp} */
            var rreturn = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi;
            /**
             * @param {?} all
             * @param {string} letter
             * @return {?}
             */
            var camelCaseHandler = function(all, letter) {
                return letter.toUpperCase();
            };
            /** @type {RegExp} */
            var exclude = /(?:Left|Right|Width)/i;
            /** @type {RegExp} */
            var typePattern = /(M11|M12|M21|M22)=[\d\-\.e]+/gi;
            /** @type {RegExp} */
            var rfilters = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i;
            /** @type {RegExp} */
            var re = /,(?=[^\)]*(?:\(|$))/gi;
            /** @type {RegExp} */
            var numbers = /[\s,\(]/i;
            /** @type {number} */
            var rad = Math.PI / 180;
            /** @type {number} */
            var radix = 180 / Math.PI;
            var pos = {};
            /** @type {HTMLDocument} */
            var doc = document;
            /**
             * @param {string} tag
             * @return {?}
             */
            var elt = function(tag) {
                return doc.createElementNS ? doc.createElementNS("http://www.w3.org/1999/xhtml", tag) : doc.createElement(tag);
            };
            var node = elt("div");
            var img = elt("img");
            var body = self._internals = {
                _specialProps: old
            };
            /** @type {string} */
            var userAgent = navigator.userAgent;
            var opacity = function() {
                /** @type {number} */
                var index = userAgent.indexOf("Android");
                var node = elt("a");
                return left = userAgent.indexOf("Safari") !== -1 && (userAgent.indexOf("Chrome") === -1 && (index === -1 || Number(userAgent.substr(index + 8, 1)) > 3)), leftVal = left && Number(userAgent.substr(userAgent.indexOf("Version/") + 8, 1)) < 6, right = userAgent.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(userAgent)) && (start = parseFloat(RegExp.$1)), !!node && (node.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(node.style.opacity));
            }();
            /**
             * @param {number} e
             * @return {?}
             */
            var css = function(e) {
                return rCurrLoc.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
            };
            /**
             * @param {string} fmt
             * @return {undefined}
             */
            var log = function(fmt) {
                if (window.console) {
                    console.log(fmt);
                }
            };
            /** @type {string} */
            var vendorPrefix = "";
            /** @type {string} */
            var s = "";
            /**
             * @param {string} prop
             * @param {Element} context
             * @return {?}
             */
            var normalize = function(prop, context) {
                context = context || node;
                var a;
                var i;
                var styles = context.style;
                if (void 0 !== styles[prop]) {
                    return prop;
                }
                prop = prop.charAt(0).toUpperCase() + prop.substr(1);
                /** @type {Array} */
                a = ["O", "Moz", "ms", "Ms", "Webkit"];
                /** @type {number} */
                i = 5;
                for (; --i > -1 && void 0 === styles[a[i] + prop];) {}
                return i >= 0 ? (s = 3 === i ? "ms" : a[i], vendorPrefix = "-" + s.toLowerCase() + "-", s + prop) : null;
            };
            var test = doc.defaultView ? doc.defaultView.getComputedStyle : function() {};
            /** @type {function (Object, string, Object, boolean, string): ?} */
            var getStyle = self.getStyle = function(element, key, target, recurring, defaultValue) {
                var val;
                return opacity || "opacity" !== key ? (!recurring && element.style[key] ? val = element.style[key] : (target = target || test(element)) ? val = target[key] || (target.getPropertyValue(key) || target.getPropertyValue(key.replace(rmultiDash, "-$1").toLowerCase())) : element.currentStyle && (val = element.currentStyle[key]), null == defaultValue || val && ("none" !== val && ("auto" !== val && "auto auto" !== val)) ? val : defaultValue) : css(element);
            };
            /** @type {function (Object, string, number, string, boolean): ?} */
            var get = body.convertToPixels = function(el, prop, value, element, dataAndEvents) {
                if ("px" === element || !element) {
                    return value;
                }
                if ("auto" === element || !value) {
                    return 0;
                }
                var val;
                var b;
                var a;
                /** @type {boolean} */
                var isHorizontal = exclude.test(prop);
                /** @type {Object} */
                var d = el;
                var style = node.style;
                /** @type {boolean} */
                var inv = value < 0;
                /** @type {boolean} */
                var success = 1 === value;
                if (inv && (value = -value), success && (value *= 100), "%" === element && prop.indexOf("border") !== -1) {
                    /** @type {number} */
                    val = value / 100 * (isHorizontal ? el.clientWidth : el.clientHeight);
                } else {
                    if (style.cssText = "border:0 solid red;position:" + getStyle(el, "position") + ";line-height:0;", "%" !== element && (d.appendChild && ("v" !== element.charAt(0) && "rem" !== element))) {
                        style[isHorizontal ? "borderLeftWidth" : "borderTopWidth"] = value + element;
                    } else {
                        if (d = el.parentNode || doc.body, b = d._gsCache, a = TweenLite.ticker.frame, b && (isHorizontal && b.time === a)) {
                            return b.width * value / 100;
                        }
                        style[isHorizontal ? "width" : "height"] = value + element;
                    }
                    d.appendChild(node);
                    /** @type {number} */
                    val = parseFloat(node[isHorizontal ? "offsetWidth" : "offsetHeight"]);
                    d.removeChild(node);
                    if (isHorizontal) {
                        if ("%" === element) {
                            if (self.cacheWidths !== false) {
                                b = d._gsCache = d._gsCache || {};
                                b.time = a;
                                /** @type {number} */
                                b.width = val / value * 100;
                            }
                        }
                    }
                    if (!(0 !== val)) {
                        if (!dataAndEvents) {
                            val = get(el, prop, value, element, true);
                        }
                    }
                }
                return success && (val /= 100), inv ? -val : val;
            };
            /** @type {function (Object, string, Object): ?} */
            var extend = body.calculateOffset = function(el, key, value) {
                if ("absolute" !== getStyle(el, "position", value)) {
                    return 0;
                }
                /** @type {string} */
                var e = "left" === key ? "Left" : "Top";
                var val = getStyle(el, "margin" + e, value);
                return el["offset" + e] - (get(el, key, parseFloat(val), val.replace(rCRLF, "")) || 0);
            };
            /**
             * @param {Object} element
             * @param {Object} opts
             * @return {?}
             */
            var render = function(element, opts) {
                var prop;
                var self;
                var value;
                var data = {};
                if (opts = opts || test(element, null)) {
                    if (prop = opts.length) {
                        for (; --prop > -1;) {
                            value = opts[prop];
                            if (!(value.indexOf("-transform") !== -1 && k !== value)) {
                                data[value.replace(rxhtmlTag, camelCaseHandler)] = opts.getPropertyValue(value);
                            }
                        }
                    } else {
                        for (prop in opts) {
                            if (!(prop.indexOf("Transform") !== -1 && name !== prop)) {
                                data[prop] = opts[prop];
                            }
                        }
                    }
                } else {
                    if (opts = element.currentStyle || element.style) {
                        for (prop in opts) {
                            if ("string" == typeof prop) {
                                if (void 0 === data[prop]) {
                                    data[prop.replace(rxhtmlTag, camelCaseHandler)] = opts[prop];
                                }
                            }
                        }
                    }
                }
                return opacity || (data.opacity = css(element)), self = callback(element, opts, false), data.rotation = self.rotation, data.skewX = self.skewX, data.scaleX = self.scaleX, data.scaleY = self.scaleY, data.x = self.x, data.y = self.y, showMessage && (data.z = self.z, data.rotationX = self.rotationX, data.rotationY = self.rotationY, data.scaleZ = self.scaleZ), data.filters && delete data.filters, data;
            };
            /**
             * @param {Object} event
             * @param {Object} str
             * @param {Object} map
             * @param {Object} o2
             * @param {Object} items
             * @return {?}
             */
            var f = function(event, str, map, o2, items) {
                var val;
                var key;
                var record;
                var internalValues = {};
                var data = event.style;
                for (key in map) {
                    if ("cssText" !== key) {
                        if ("length" !== key) {
                            if (isNaN(key)) {
                                if (str[key] !== (val = map[key]) || items && items[key]) {
                                    if (key.indexOf("Origin") === -1) {
                                        if (!("number" != typeof val && "string" != typeof val)) {
                                            internalValues[key] = "auto" !== val || "left" !== key && "top" !== key ? "" !== val && ("auto" !== val && "none" !== val) || ("string" != typeof str[key] || "" === str[key].replace(r20, "")) ? val : 0 : extend(event, key);
                                            if (void 0 !== data[key]) {
                                                record = new Model(data, key, data[key], record);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (o2) {
                    for (key in o2) {
                        if ("className" !== key) {
                            internalValues[key] = o2[key];
                        }
                    }
                }
                return {
                    difs: internalValues,
                    firstMPT: record
                };
            };
            var params = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            };
            /** @type {Array} */
            var properties = ["marginLeft", "marginRight", "marginTop", "marginBottom"];
            /**
             * @param {HTMLElement} el
             * @param {string} k
             * @param {?} target
             * @return {?}
             */
            var check = function(el, k, target) {
                if ("svg" === (el.nodeName + "").toLowerCase()) {
                    return (target || test(el))[k] || 0;
                }
                if (el.getBBox && animate(el)) {
                    return el.getBBox()[k] || 0;
                }
                /** @type {number} */
                var match = parseFloat("width" === k ? el.offsetWidth : el.offsetHeight);
                var sides = params[k];
                var i = sides.length;
                target = target || test(el, null);
                for (; --i > -1;) {
                    match -= parseFloat(getStyle(el, "padding" + sides[i], target, true)) || 0;
                    match -= parseFloat(getStyle(el, "border" + sides[i] + "Width", target, true)) || 0;
                }
                return match;
            };
            /**
             * @param {string} v
             * @param {string} options
             * @return {?}
             */
            var parse = function(v, options) {
                if ("contain" === v || ("auto" === v || "auto auto" === v)) {
                    return v + " ";
                }
                if (!(null != v && "" !== v)) {
                    /** @type {string} */
                    v = "0 0";
                }
                var i;
                var codeSegments = v.split(" ");
                var value = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : codeSegments[0];
                var name = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : codeSegments[1];
                if (codeSegments.length > 3 && !options) {
                    codeSegments = v.split(", ").join(",").split(",");
                    /** @type {Array} */
                    v = [];
                    /** @type {number} */
                    i = 0;
                    for (; i < codeSegments.length; i++) {
                        v.push(parse(codeSegments[i]));
                    }
                    return v.join(",");
                }
                return null == name ? name = "center" === value ? "50%" : "0" : "center" === name && (name = "50%"), ("center" === value || isNaN(parseFloat(value)) && (value + "").indexOf("=") === -1) && (value = "50%"), v = value + " " + name + (codeSegments.length > 2 ? " " + codeSegments[2] : ""), options && (options.oxp = value.indexOf("%") !== -1, options.oyp = name.indexOf("%") !== -1, options.oxr = "=" === value.charAt(1), options.oyr = "=" === name.charAt(1), options.ox = parseFloat(value.replace(r20,
                    "")), options.oy = parseFloat(name.replace(r20, "")), options.v = v), options || v;
            };
            /**
             * @param {string} a
             * @param {?} b
             * @return {?}
             */
            var select = function(a, b) {
                return "function" == typeof a && (a = a(camelKey, prop)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
            };
            /**
             * @param {string} val
             * @param {number} str
             * @return {?}
             */
            var valid = function(val, str) {
                return "function" == typeof val && (val = val(camelKey, prop)), null == val ? str : "string" == typeof val && "=" === val.charAt(1) ? parseInt(val.charAt(0) + "1", 10) * parseFloat(val.substr(2)) + str : parseFloat(val) || 0;
            };
            /**
             * @param {Object} v
             * @param {number} value
             * @param {string} key
             * @param {Object} hash
             * @return {?}
             */
            var stringify = function(v, value, key, hash) {
                var cap;
                var parts;
                var dif;
                var val;
                var isArray;
                /** @type {number} */
                var min = 1E-6;
                return "function" == typeof v && (v = v(camelKey, prop)), null == v ? val = value : "number" == typeof v ? val = v : (cap = 360, parts = v.split("_"), isArray = "=" === v.charAt(1), dif = (isArray ? parseInt(v.charAt(0) + "1", 10) * parseFloat(parts[0].substr(2)) : parseFloat(parts[0])) * (v.indexOf("rad") === -1 ? 1 : radix) - (isArray ? 0 : value), parts.length && (hash && (hash[key] = value + dif), v.indexOf("short") !== -1 && (dif %= cap, dif !== dif % (cap / 2) && (dif = dif < 0 ? dif +
                    cap : dif - cap)), v.indexOf("_cw") !== -1 && dif < 0 ? dif = (dif + 9999999999 * cap) % cap - (dif / cap | 0) * cap : v.indexOf("ccw") !== -1 && (dif > 0 && (dif = (dif - 9999999999 * cap) % cap - (dif / cap | 0) * cap))), val = value + dif), val < min && (val > -min && (val = 0)), val;
            };
            var _colorLookup = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            };
            /**
             * @param {number} h
             * @param {number} m1
             * @param {number} m2
             * @return {?}
             */
            var hue = function(h, m1, m2) {
                return h = h < 0 ? h + 1 : h > 1 ? h - 1 : h, 255 * (6 * h < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : 3 * h < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) + 0.5 | 0;
            };
            /** @type {function (string, boolean): ?} */
            var $ = self.parseColor = function(value, a) {
                var data;
                var b;
                var r;
                var g;
                var h;
                var s;
                var l;
                var max;
                var min;
                var d;
                var selector;
                if (value) {
                    if ("number" == typeof value) {
                        /** @type {Array} */
                        data = [value >> 16, value >> 8 & 255, 255 & value];
                    } else {
                        if ("," === value.charAt(value.length - 1) && (value = value.substr(0, value.length - 1)), _colorLookup[value]) {
                            data = _colorLookup[value];
                        } else {
                            if ("#" === value.charAt(0)) {
                                if (4 === value.length) {
                                    b = value.charAt(1);
                                    r = value.charAt(2);
                                    g = value.charAt(3);
                                    /** @type {string} */
                                    value = "#" + b + b + r + r + g + g;
                                }
                                /** @type {number} */
                                value = parseInt(value.substr(1), 16);
                                /** @type {Array} */
                                data = [value >> 16, value >> 8 & 255, 255 & value];
                            } else {
                                if ("hsl" === value.substr(0, 3)) {
                                    if (data = selector = value.match(core_rnotwhite), a) {
                                        if (value.indexOf("=") !== -1) {
                                            return value.match(rclass);
                                        }
                                    } else {
                                        /** @type {number} */
                                        h = Number(data[0]) % 360 / 360;
                                        /** @type {number} */
                                        s = Number(data[1]) / 100;
                                        /** @type {number} */
                                        l = Number(data[2]) / 100;
                                        /** @type {number} */
                                        r = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                                        /** @type {number} */
                                        b = 2 * l - r;
                                        if (data.length > 3) {
                                            /** @type {number} */
                                            data[3] = Number(value[3]);
                                        }
                                        data[0] = hue(h + 1 / 3, b, r);
                                        data[1] = hue(h, b, r);
                                        data[2] = hue(h - 1 / 3, b, r);
                                    }
                                } else {
                                    data = value.match(core_rnotwhite) || _colorLookup.transparent;
                                }
                            }
                        }
                        /** @type {number} */
                        data[0] = Number(data[0]);
                        /** @type {number} */
                        data[1] = Number(data[1]);
                        /** @type {number} */
                        data[2] = Number(data[2]);
                        if (data.length > 3) {
                            /** @type {number} */
                            data[3] = Number(data[3]);
                        }
                    }
                } else {
                    /** @type {Array} */
                    data = _colorLookup.black;
                }
                return a && (!selector && (b = data[0] / 255, r = data[1] / 255, g = data[2] / 255, max = Math.max(b, r, g), min = Math.min(b, r, g), l = (max + min) / 2, max === min ? h = s = 0 : (d = max - min, s = l > 0.5 ? d / (2 - max - min) : d / (max + min), h = max === b ? (r - g) / d + (r < g ? 6 : 0) : max === r ? (g - b) / d + 2 : (b - r) / d + 4, h *= 60), data[0] = h + 0.5 | 0, data[1] = 100 * s + 0.5 | 0, data[2] = 100 * l + 0.5 | 0)), data;
            };
            /**
             * @param {string} result
             * @param {Object} elem
             * @return {?}
             */
            var next = function(result, elem) {
                var i;
                var header;
                var chunk;
                var codeSegments = result.match(regex) || [];
                /** @type {number} */
                var offset = 0;
                var range = codeSegments.length ? "" : result;
                /** @type {number} */
                i = 0;
                for (; i < codeSegments.length; i++) {
                    header = codeSegments[i];
                    chunk = result.substr(offset, result.indexOf(header, offset) - offset);
                    offset += chunk.length + header.length;
                    header = $(header, elem);
                    if (3 === header.length) {
                        header.push(1);
                    }
                    range += chunk + (elem ? "hsla(" + header[0] + "," + header[1] + "%," + header[2] + "%," + header[3] : "rgba(" + header.join(",")) + ")";
                }
                return range + result.substr(offset);
            };
            /** @type {string} */
            var regex = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (p in _colorLookup) {
                regex += "|" + p + "\\b";
            }
            /** @type {RegExp} */
            regex = new RegExp(regex + ")", "gi");
            /**
             * @param {Array} node
             * @return {undefined}
             */
            self.colorStringFilter = function(node) {
                var later;
                var cssText = node[0] + node[1];
                if (regex.test(cssText)) {
                    /** @type {boolean} */
                    later = cssText.indexOf("hsl(") !== -1 || cssText.indexOf("hsla(") !== -1;
                    node[0] = next(node[0], later);
                    node[1] = next(node[1], later);
                }
                /** @type {number} */
                regex.lastIndex = 0;
            };
            if (!TweenLite.defaultStringFilter) {
                /** @type {function (Array): undefined} */
                TweenLite.defaultStringFilter = self.colorStringFilter;
            }
            /**
             * @param {string} template
             * @param {boolean} showMessage
             * @param {boolean} isString
             * @param {Function} param
             * @return {?}
             */
            var compile = function(template, showMessage, isString, param) {
                if (null == template) {
                    return function($template) {
                        return $template;
                    };
                }
                var wrap;
                var body = showMessage ? (template.match(regex) || [""])[0] : "";
                var list = template.split(body).join("").match(urlRegEx) || [];
                var prefix = template.substr(0, template.indexOf(list[0]));
                /** @type {string} */
                var path = ")" === template.charAt(template.length - 1) ? ")" : "";
                /** @type {string} */
                var name = template.indexOf(" ") !== -1 ? " " : ",";
                var len = list.length;
                var qs = len > 0 ? list[0].replace(core_rnotwhite, "") : "";
                return len ? wrap = showMessage ? function(url) {
                    var a;
                    var types;
                    var i;
                    var codeSegments;
                    if ("number" == typeof url) {
                        url += qs;
                    } else {
                        if (param && re.test(url)) {
                            codeSegments = url.replace(re, "|").split("|");
                            /** @type {number} */
                            i = 0;
                            for (; i < codeSegments.length; i++) {
                                codeSegments[i] = wrap(codeSegments[i]);
                            }
                            return codeSegments.join(",");
                        }
                    }
                    if (a = (url.match(regex) || [body])[0], types = url.split(a).join("").match(urlRegEx) || [], i = types.length, len > i--) {
                        for (; ++i < len;) {
                            types[i] = isString ? types[(i - 1) / 2 | 0] : list[i];
                        }
                    }
                    return prefix + types.join(name) + name + a + path + (url.indexOf("inset") !== -1 ? " inset" : "");
                } : function(url) {
                    var types;
                    var codeSegments;
                    var i;
                    if ("number" == typeof url) {
                        url += qs;
                    } else {
                        if (param && re.test(url)) {
                            codeSegments = url.replace(re, "|").split("|");
                            /** @type {number} */
                            i = 0;
                            for (; i < codeSegments.length; i++) {
                                codeSegments[i] = wrap(codeSegments[i]);
                            }
                            return codeSegments.join(",");
                        }
                    }
                    if (types = url.match(urlRegEx) || [], i = types.length, len > i--) {
                        for (; ++i < len;) {
                            types[i] = isString ? types[(i - 1) / 2 | 0] : list[i];
                        }
                    }
                    return prefix + types.join(name) + path;
                } : function($template) {
                    return $template;
                };
            };
            /**
             * @param {string} js
             * @return {?}
             */
            var highlight = function(js) {
                return js = js.split(","),
                    function(node, aKeyPath, dataAndEvents, xmlParser, optgroup, which, text) {
                        var i;
                        /** @type {Array.<string>} */
                        var css = (aKeyPath + "").split(" ");
                        text = {};
                        /** @type {number} */
                        i = 0;
                        for (; i < 4; i++) {
                            /** @type {string} */
                            text[js[i]] = css[i] = css[i] || css[(i - 1) / 2 >> 0];
                        }
                        return xmlParser.parse(node, text, optgroup, which);
                    };
            };
            /** @type {function (?, string, string, ?, number): undefined} */
            var Model = (body._setPluginRatio = function(event) {
                this.plugin.setRatio(event);
                var val;
                var c;
                var n;
                var value;
                var h;
                var obj = this.data;
                var o = obj.proxy;
                var p = obj.firstMPT;
                /** @type {number} */
                var min = 1E-6;
                for (; p;) {
                    val = o[p.v];
                    if (p.r) {
                        /** @type {number} */
                        val = Math.round(val);
                    } else {
                        if (val < min) {
                            if (val > -min) {
                                /** @type {number} */
                                val = 0;
                            }
                        }
                    }
                    p.t[p.p] = val;
                    p = p._next;
                }
                if (obj.autoRotate && (obj.autoRotate.rotation = obj.mod ? obj.mod(o.rotation, this.t) : o.rotation), 1 === event || 0 === event) {
                    p = obj.firstMPT;
                    /** @type {string} */
                    h = 1 === event ? "e" : "b";
                    for (; p;) {
                        if (c = p.t, c.type) {
                            if (1 === c.type) {
                                value = c.xs0 + c.s + c.xs1;
                                /** @type {number} */
                                n = 1;
                                for (; n < c.l; n++) {
                                    value += c["xn" + n] + c["xs" + (n + 1)];
                                }
                                c[h] = value;
                            }
                        } else {
                            c[h] = c.s + c.xs0;
                        }
                        p = p._next;
                    }
                }
            }, function(t, p, val, next, renderFunc) {
                this.t = t;
                /** @type {string} */
                this.p = p;
                /** @type {string} */
                this.v = val;
                /** @type {number} */
                this.r = renderFunc;
                if (next) {
                    next._prev = this;
                    this._next = next;
                }
            });
            /** @type {function (Object, string, number, number, ?, (number|string), (Document|string), number, number, number, number): undefined} */
            var Parser = (body._parseToProxy = function(node, text, element, data, which, dataAndEvents) {
                var offset;
                var id;
                var i;
                var obj;
                var res;
                /** @type {Object} */
                var current = data;
                var cache = {};
                var hash = {};
                var className = element._transform;
                var savedPos4 = pos;
                /** @type {null} */
                element._transform = null;
                /** @type {string} */
                pos = text;
                data = res = element.parse(node, text, data, which);
                pos = savedPos4;
                if (dataAndEvents) {
                    element._transform = className;
                    if (current) {
                        /** @type {null} */
                        current._prev = null;
                        if (current._prev) {
                            /** @type {null} */
                            current._prev._next = null;
                        }
                    }
                }
                for (; data && data !== current;) {
                    if (data.type <= 1 && (id = data.p, hash[id] = data.s + data.c, cache[id] = data.s, dataAndEvents || (obj = new Model(data, "s", id, obj, data.r), data.c = 0), 1 === data.type)) {
                        offset = data.l;
                        for (; --offset > 0;) {
                            /** @type {string} */
                            i = "xn" + offset;
                            /** @type {string} */
                            id = data.p + "_" + i;
                            hash[id] = data.data[i];
                            cache[id] = data[i];
                            if (!dataAndEvents) {
                                obj = new Model(data, i, id, obj, data.rxp[i]);
                            }
                        }
                    }
                    data = data._next;
                }
                return {
                    proxy: cache,
                    end: hash,
                    firstMPT: obj,
                    pt: res
                };
            }, body.CSSPropTween = function(t, p, b, c, next, type, made, renderFunc, dataAndEvents, a, d) {
                /** @type {Object} */
                this.t = t;
                /** @type {string} */
                this.p = p;
                /** @type {number} */
                this.s = b;
                /** @type {number} */
                this.c = c;
                this.n = made || p;
                if (!(t instanceof Parser)) {
                    eventPath.push(this.n);
                }
                /** @type {number} */
                this.r = renderFunc;
                this.type = type || 0;
                if (dataAndEvents) {
                    /** @type {number} */
                    this.pr = dataAndEvents;
                    /** @type {boolean} */
                    i = true;
                }
                this.b = void 0 === a ? b : a;
                this.e = void 0 === d ? b + c : d;
                if (next) {
                    this._next = next;
                    next._prev = this;
                }
            });
            /**
             * @param {string} str
             * @param {string} options
             * @param {number} b
             * @param {number} d
             * @param {string} object
             * @param {string} obj
             * @return {?}
             */
            var debug = function(str, options, b, d, object, obj) {
                var c = new Parser(str, options, b, d - b, object, -1, obj);
                return c.b = b, c.e = c.xs0 = d, c;
            };
            /** @type {function (Object, string, string, string, Object, (number|string), Object, number, number, Function): ?} */
            var format = self.parseComplex = function(input, file, type, fn, recurring, c, node, mayParseLabeledStatementInstead, k, deepDataAndEvents) {
                type = type || (c || "");
                if ("function" == typeof fn) {
                    fn = fn(camelKey, prop);
                }
                node = new Parser(input, file, 0, 0, node, deepDataAndEvents ? 2 : 1, null, false, mayParseLabeledStatementInstead, type, fn);
                fn += "";
                if (recurring) {
                    if (regex.test(fn + type)) {
                        /** @type {Array} */
                        fn = [type, fn];
                        self.colorStringFilter(fn);
                        type = fn[0];
                        fn = fn[1];
                    }
                }
                var i;
                var j;
                var index;
                var value;
                var selector;
                var path;
                var ourKeys;
                var newValue;
                var name;
                var idx;
                var key;
                var id;
                var context;
                var styles = type.split(", ").join(",").split(" ");
                var b = fn.split(", ").join(",").split(" ");
                var len = styles.length;
                /** @type {boolean} */
                var truncate = until !== false;
                if (!(fn.indexOf(",") === -1 && type.indexOf(",") === -1)) {
                    styles = styles.join(" ").replace(re, ", ").split(" ");
                    b = b.join(" ").replace(re, ", ").split(" ");
                    len = styles.length;
                }
                if (len !== b.length) {
                    styles = (c || "").split(" ");
                    len = styles.length;
                }
                /** @type {number} */
                node.plugin = k;
                /** @type {Function} */
                node.setRatio = deepDataAndEvents;
                /** @type {number} */
                regex.lastIndex = 0;
                /** @type {number} */
                i = 0;
                for (; i < len; i++) {
                    if (value = styles[i], selector = b[i], newValue = parseFloat(value), newValue || 0 === newValue) {
                        node.appendXtra("", newValue, select(selector, newValue), selector.replace(rclass, ""), truncate && selector.indexOf("px") !== -1, true);
                    } else {
                        if (recurring && regex.test(value)) {
                            id = selector.indexOf(")") + 1;
                            id = ")" + (id ? selector.substr(id) : "");
                            context = selector.indexOf("hsl") !== -1 && opacity;
                            value = $(value, context);
                            selector = $(selector, context);
                            /** @type {boolean} */
                            name = value.length + selector.length > 6;
                            if (name && (!opacity && 0 === selector[3])) {
                                node["xs" + node.l] += node.l ? " transparent" : "transparent";
                                node.e = node.e.split(b[i]).join("transparent");
                            } else {
                                if (!opacity) {
                                    /** @type {boolean} */
                                    name = false;
                                }
                                if (context) {
                                    node.appendXtra(name ? "hsla(" : "hsl(", value[0], select(selector[0], value[0]), ",", false, true).appendXtra("", value[1], select(selector[1], value[1]), "%,", false).appendXtra("", value[2], select(selector[2], value[2]), name ? "%," : "%" + id, false);
                                } else {
                                    node.appendXtra(name ? "rgba(" : "rgb(", value[0], selector[0] - value[0], ",", true, true).appendXtra("", value[1], selector[1] - value[1], ",", true).appendXtra("", value[2], selector[2] - value[2], name ? "," : id, true);
                                }
                                if (name) {
                                    value = value.length < 4 ? 1 : value[3];
                                    node.appendXtra("", value, (selector.length < 4 ? 1 : selector[3]) - value, id, false);
                                }
                            }
                            /** @type {number} */
                            regex.lastIndex = 0;
                        } else {
                            if (path = value.match(core_rnotwhite)) {
                                if (ourKeys = selector.match(rclass), !ourKeys || ourKeys.length !== path.length) {
                                    return node;
                                }
                                /** @type {number} */
                                index = 0;
                                /** @type {number} */
                                j = 0;
                                for (; j < path.length; j++) {
                                    key = path[j];
                                    idx = value.indexOf(key, index);
                                    node.appendXtra(value.substr(index, idx - index), Number(key), select(ourKeys[j], key), "", truncate && "px" === value.substr(idx + key.length, 2), 0 === j);
                                    index = idx + key.length;
                                }
                                node["xs" + node.l] += value.substr(index);
                            } else {
                                node["xs" + node.l] += node.l || node["xs" + node.l] ? " " + selector : selector;
                            }
                        }
                    }
                }
                if (fn.indexOf("=") !== -1 && node.data) {
                    id = node.xs0 + node.data.s;
                    /** @type {number} */
                    i = 1;
                    for (; i < node.l; i++) {
                        id += node["xs" + i] + node.data["xn" + i];
                    }
                    node.e = id + node["xs" + i];
                }
                return node.l || (node.type = -1, node.xs0 = node.e), node.xfirst || node;
            };
            /** @type {number} */
            var key = 9;
            p = Parser.prototype;
            /** @type {number} */
            p.l = p.pr = 0;
            for (; --key > 0;) {
                /** @type {number} */
                p["xn" + key] = 0;
                /** @type {string} */
                p["xs" + key] = "";
            }
            /** @type {string} */
            p.xs0 = "";
            /** @type {null} */
            p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
            /**
             * @param {string} reason
             * @param {number} value
             * @param {number} c
             * @param {string} version
             * @param {boolean} recurring
             * @param {number} dataAndEvents
             * @return {?}
             */
            p.appendXtra = function(reason, value, c, version, recurring, dataAndEvents) {
                var data = this;
                var pos = data.l;
                return data["xs" + pos] += dataAndEvents && (pos || data["xs" + pos]) ? " " + reason : reason || "", c || (0 === pos || data.plugin) ? (data.l++, data.type = data.setRatio ? 2 : 1, data["xs" + data.l] = version || "", pos > 0 ? (data.data["xn" + pos] = value + c, data.rxp["xn" + pos] = recurring, data["xn" + pos] = value, data.plugin || (data.xfirst = new Parser(data, "xn" + pos, value, c, data.xfirst || data, 0, data.n, recurring, data.pr), data.xfirst.xs0 = 0), data) : (data.data = {
                    s: value + c
                }, data.rxp = {}, data.s = value, data.c = c, data.r = recurring, data)) : (data["xs" + pos] += value + (version || ""), data);
            };
            /**
             * @param {string} name
             * @param {Object} options
             * @return {undefined}
             */
            var create = function(name, options) {
                options = options || {};
                this.p = options.prefix ? normalize(name) || name : name;
                old[name] = old[this.p] = this;
                this.format = options.formatter || compile(options.defaultValue, options.color, options.collapsible, options.multi);
                if (options.parser) {
                    this.parse = options.parser;
                }
                this.clrs = options.color;
                this.multi = options.multi;
                this.keyword = options.keyword;
                this.dflt = options.defaultValue;
                this.pr = options.priority || 0;
            };
            /** @type {function (string, ?, Function): undefined} */
            var testAllProps = body._registerComplexSpecialProp = function(prop, opt_attributes, parser) {
                if ("object" != typeof opt_attributes) {
                    opt_attributes = {
                        /** @type {Function} */
                        parser: parser
                    };
                }
                var i;
                var r;
                var codeSegments = prop.split(",");
                var defaultValue = opt_attributes.defaultValue;
                parser = parser || [defaultValue];
                /** @type {number} */
                i = 0;
                for (; i < codeSegments.length; i++) {
                    opt_attributes.prefix = 0 === i && opt_attributes.prefix;
                    opt_attributes.defaultValue = parser[i] || defaultValue;
                    r = new create(codeSegments[i], opt_attributes);
                }
            };
            /** @type {function (string): undefined} */
            var traverseNode = body._registerPluginProp = function(name) {
                if (!old[name]) {
                    /** @type {string} */
                    var i = name.charAt(0).toUpperCase() + name.substr(1) + "Plugin";
                    testAllProps(name, {
                        /**
                         * @param {Object} node
                         * @param {string} text
                         * @param {string} name
                         * @param {number} which
                         * @param {string} type
                         * @param {number} recurring
                         * @param {Object} map
                         * @return {?}
                         */
                        parser: function(node, text, name, which, type, recurring, map) {
                            var seg = globals.com.greensock.plugins[i];
                            return seg ? (seg._cssRegister(), old[name].parse(node, text, name, which, type, recurring, map)) : (log("Error: " + i + " js file not loaded."), type);
                        }
                    });
                }
            };
            p = create.prototype;
            /**
             * @param {?} d
             * @param {string} s
             * @param {string} name
             * @param {string} fn
             * @param {number} recurring
             * @param {Function} deepDataAndEvents
             * @return {?}
             */
            p.parseComplex = function(d, s, name, fn, recurring, deepDataAndEvents) {
                var i;
                var options;
                var text;
                var padLength;
                var res;
                var mat;
                var from = this.keyword;
                if (this.multi && (re.test(name) || re.test(s) ? (options = s.replace(re, "|").split("|"), text = name.replace(re, "|").split("|")) : from && (options = [s], text = [name])), text) {
                    padLength = text.length > options.length ? text.length : options.length;
                    /** @type {number} */
                    i = 0;
                    for (; i < padLength; i++) {
                        s = options[i] = options[i] || this.dflt;
                        name = text[i] = text[i] || this.dflt;
                        if (from) {
                            res = s.indexOf(from);
                            mat = name.indexOf(from);
                            if (res !== mat) {
                                if (mat === -1) {
                                    options[i] = options[i].split(from).join("");
                                } else {
                                    if (res === -1) {
                                        options[i] += " " + from;
                                    }
                                }
                            }
                        }
                    }
                    s = options.join(", ");
                    name = text.join(", ");
                }
                return format(d, this.p, s, name, this.clrs, this.dflt, fn, this.pr, recurring, deepDataAndEvents);
            };
            /**
             * @param {Object} node
             * @param {string} text
             * @param {string} name
             * @param {number} callback
             * @param {string} arg
             * @param {number} recurring
             * @param {Object} message
             * @return {?}
             */
            p.parse = function(node, text, name, callback, arg, recurring, message) {
                return this.parseComplex(node.style, this.format(getStyle(node, this.p, opts, false, this.dflt)), this.format(text), arg, recurring);
            };
            /**
             * @param {string} transition
             * @param {?} indexOf
             * @param {number} priority
             * @return {undefined}
             */
            self.registerSpecialProp = function(transition, indexOf, priority) {
                testAllProps(transition, {
                    /**
                     * @param {string} id
                     * @param {string} text
                     * @param {string} name
                     * @param {number} callback
                     * @param {string} tagName
                     * @param {number} recurring
                     * @param {Object} map
                     * @return {?}
                     */
                    parser: function(id, text, name, callback, tagName, recurring, map) {
                        var p = new Parser(id, name, 0, 0, tagName, 2, name, false, priority);
                        return p.plugin = recurring, p.setRatio = indexOf(id, text, callback._tween, name), p;
                    },
                    priority: priority
                });
            };
            self.useSVGTransformAttr = left || right;
            var info;
            /** @type {Array.<string>} */
            var tokenized = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(",");
            var name = normalize("transform");
            var k = vendorPrefix + "transform";
            var property = normalize("transformOrigin");
            /** @type {boolean} */
            var showMessage = null !== normalize("perspective");
            /** @type {function (): undefined} */
            var Server = body.Transform = function() {
                /** @type {number} */
                this.perspective = parseFloat(self.defaultTransformPerspective) || 0;
                this.force3D = !(self.defaultForce3D === false || !showMessage) && (self.defaultForce3D || "auto");
            };
            var SVGElement = window.SVGElement;
            /**
             * @param {string} name
             * @param {Element} selector
             * @param {Object} attributes
             * @return {?}
             */
            var createElement = function(name, selector, attributes) {
                var key;
                /** @type {Element} */
                var elem = doc.createElementNS("http://www.w3.org/2000/svg", name);
                /** @type {RegExp} */
                var r20 = /([a-z])([A-Z])/g;
                for (key in attributes) {
                    elem.setAttributeNS(null, key.replace(r20, "$1-$2").toLowerCase(), attributes[key]);
                }
                return selector.appendChild(elem), elem;
            };
            /** @type {Element} */
            var head = doc.documentElement;
            var GET = function() {
                var element;
                var parent;
                var width;
                var i = start || /Android/i.test(userAgent) && !window.chrome;
                return doc.createElementNS && (!i && (element = createElement("svg", head), parent = createElement("rect", element, {
                    width: 100,
                    height: 50,
                    x: 100
                }), width = parent.getBoundingClientRect().width, parent.style[property] = "50% 50%", parent.style[name] = "scaleX(0.5)", i = width === parent.getBoundingClientRect().width && !(right && showMessage), head.removeChild(element))), i;
            }();
            /**
             * @param {Element} elem
             * @param {string} c
             * @param {boolean} data
             * @param {string} token
             * @param {boolean} execAsap
             * @param {boolean} dataAndEvents
             * @return {undefined}
             */
            var handler = function(elem, c, data, token, execAsap, dataAndEvents) {
                var array;
                var tmp;
                var i;
                var value;
                var end;
                var a;
                var b;
                var d;
                var e;
                var g;
                var h;
                var det;
                var base;
                var start;
                var options = elem._gsTransform;
                var p = fn(elem, true);
                if (options) {
                    base = options.xOrigin;
                    start = options.yOrigin;
                }
                if (!token || (array = token.split(" ")).length < 2) {
                    b = elem.getBBox();
                    c = parse(c).split(" ");
                    /** @type {Array} */
                    array = [(c[0].indexOf("%") !== -1 ? parseFloat(c[0]) / 100 * b.width : parseFloat(c[0])) + b.x, (c[1].indexOf("%") !== -1 ? parseFloat(c[1]) / 100 * b.height : parseFloat(c[1])) + b.y];
                }
                /** @type {number} */
                data.xOrigin = value = parseFloat(array[0]);
                /** @type {number} */
                data.yOrigin = end = parseFloat(array[1]);
                if (token) {
                    if (p !== undef) {
                        a = p[0];
                        b = p[1];
                        d = p[2];
                        e = p[3];
                        g = p[4];
                        h = p[5];
                        /** @type {number} */
                        det = a * e - b * d;
                        /** @type {number} */
                        tmp = value * (e / det) + end * (-d / det) + (d * h - e * g) / det;
                        /** @type {number} */
                        i = value * (-b / det) + end * (a / det) - (a * h - b * g) / det;
                        /** @type {number} */
                        value = data.xOrigin = array[0] = tmp;
                        /** @type {number} */
                        end = data.yOrigin = array[1] = i;
                    }
                }
                if (options) {
                    if (dataAndEvents) {
                        data.xOffset = options.xOffset;
                        data.yOffset = options.yOffset;
                        /** @type {boolean} */
                        options = data;
                    }
                    if (execAsap || execAsap !== false && self.defaultSmoothOrigin !== false) {
                        /** @type {number} */
                        tmp = value - base;
                        /** @type {number} */
                        i = end - start;
                        options.xOffset += tmp * p[0] + i * p[2] - tmp;
                        options.yOffset += tmp * p[1] + i * p[3] - i;
                    } else {
                        /** @type {number} */
                        options.xOffset = options.yOffset = 0;
                    }
                }
                if (!dataAndEvents) {
                    elem.setAttribute("data-svg-origin", array.join(" "));
                }
            };
            /**
             * @param {Element} element
             * @return {?}
             */
            var animateBefore = function(element) {
                try {
                    return element.getBBox();
                } catch (t) {}
            };
            /**
             * @param {Element} element
             * @return {?}
             */
            var animate = function(element) {
                return !!(SVGElement && (element.getBBox && (element.getCTM && (animateBefore(element) && (!element.parentNode || element.parentNode.getBBox && element.parentNode.getCTM)))));
            };
            /** @type {Array} */
            var undef = [1, 0, 0, 1, 0, 0];
            /**
             * @param {Element} element
             * @param {boolean} dataAndEvents
             * @return {?}
             */
            var fn = function(element, dataAndEvents) {
                var view_id;
                var value;
                var str;
                var val;
                var a1;
                var fn;
                var vars = element._gsTransform || new Server;
                /** @type {number} */
                var b4 = 1E5;
                var node = element.style;
                if (name ? value = getStyle(element, k, null, true) : element.currentStyle && (value = element.currentStyle.filter.match(typePattern), value = value && 4 === value.length ? [value[0].substr(4), Number(value[2].substr(4)), Number(value[1].substr(4)), value[3].substr(4), vars.x || 0, vars.y || 0].join(",") : ""), view_id = !value || ("none" === value || "matrix(1, 0, 0, 1, 0, 0)" === value), view_id && (name && (((fn = "none" === test(element).display) || !element.parentNode) && (fn && (val =
                        node.display, node.display = "block"), element.parentNode || (a1 = 1, head.appendChild(element)), value = getStyle(element, k, null, true), view_id = !value || ("none" === value || "matrix(1, 0, 0, 1, 0, 0)" === value), val ? node.display = val : fn && success(node, "display"), a1 && head.removeChild(element)))), (vars.svg || element.getBBox && animate(element)) && (view_id && ((node[name] + "").indexOf("matrix") !== -1 && (value = node[name], view_id = 0)), str = element.getAttribute("transform"),
                        view_id && (str && (str.indexOf("matrix") !== -1 ? (value = str, view_id = 0) : str.indexOf("translate") !== -1 && (value = "matrix(1,0,0,1," + str.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", view_id = 0)))), view_id) {
                    return undef;
                }
                str = (value || "").match(core_rnotwhite) || [];
                key = str.length;
                for (; --key > -1;) {
                    /** @type {number} */
                    val = Number(str[key]);
                    /** @type {number} */
                    str[key] = (a1 = val - (val |= 0)) ? (a1 * b4 + (a1 < 0 ? -0.5 : 0.5) | 0) / b4 + val : val;
                }
                return dataAndEvents && str.length > 6 ? [str[0], str[1], str[4], str[5], str[12], str[13]] : str;
            };
            /** @type {function (Element, Object, boolean, boolean): ?} */
            var callback = body.getTransform = function(element, value, recurring, item) {
                if (element._gsTransform && (recurring && !item)) {
                    return element._gsTransform;
                }
                var result;
                var index;
                var scaleX;
                var E;
                var val;
                var offset;
                var args = recurring ? element._gsTransform || new Server : new Server;
                /** @type {boolean} */
                var p = args.scaleX < 0;
                /** @type {number} */
                var end = 2E-5;
                /** @type {number} */
                var scaleY = 1E5;
                var body = showMessage ? parseFloat(getStyle(element, property, value, false, "0 0 0").split(" ")[2]) || (args.zOrigin || 0) : 0;
                /** @type {number} */
                var target = parseFloat(self.defaultTransformPerspective) || 0;
                if (args.svg = !(!element.getBBox || !animate(element)), args.svg && (handler(element, getStyle(element, property, value, false, "50% 50%") + "", args, element.getAttribute("data-svg-origin")), info = self.useSVGTransformAttr || GET), result = fn(element), result !== undef) {
                    if (16 === result.length) {
                        var minX;
                        var temp;
                        var step;
                        var y2;
                        var x2;
                        var x0 = result[0];
                        var x1 = result[1];
                        var n = result[2];
                        var t1 = result[3];
                        var x = result[4];
                        var y0 = result[5];
                        var dx = result[6];
                        var message = result[7];
                        var y = result[8];
                        var y1 = result[9];
                        var dy = result[10];
                        var dir = result[12];
                        var row = result[13];
                        var scale = result[14];
                        var z = result[11];
                        /** @type {number} */
                        var ang = Math.atan2(dx, dy);
                        if (args.zOrigin) {
                            /** @type {number} */
                            scale = -args.zOrigin;
                            /** @type {number} */
                            dir = y * scale - result[12];
                            /** @type {number} */
                            row = y1 * scale - result[13];
                            /** @type {number} */
                            scale = dy * scale + args.zOrigin - result[14];
                        }
                        /** @type {number} */
                        args.rotationX = ang * radix;
                        if (ang) {
                            /** @type {number} */
                            y2 = Math.cos(-ang);
                            /** @type {number} */
                            x2 = Math.sin(-ang);
                            /** @type {number} */
                            minX = x * y2 + y * x2;
                            /** @type {number} */
                            temp = y0 * y2 + y1 * x2;
                            /** @type {number} */
                            step = dx * y2 + dy * x2;
                            /** @type {number} */
                            y = x * -x2 + y * y2;
                            /** @type {number} */
                            y1 = y0 * -x2 + y1 * y2;
                            /** @type {number} */
                            dy = dx * -x2 + dy * y2;
                            /** @type {number} */
                            z = message * -x2 + z * y2;
                            /** @type {number} */
                            x = minX;
                            /** @type {number} */
                            y0 = temp;
                            /** @type {number} */
                            dx = step;
                        }
                        /** @type {number} */
                        ang = Math.atan2(-n, dy);
                        /** @type {number} */
                        args.rotationY = ang * radix;
                        if (ang) {
                            /** @type {number} */
                            y2 = Math.cos(-ang);
                            /** @type {number} */
                            x2 = Math.sin(-ang);
                            /** @type {number} */
                            minX = x0 * y2 - y * x2;
                            /** @type {number} */
                            temp = x1 * y2 - y1 * x2;
                            /** @type {number} */
                            step = n * y2 - dy * x2;
                            /** @type {number} */
                            y1 = x1 * x2 + y1 * y2;
                            /** @type {number} */
                            dy = n * x2 + dy * y2;
                            /** @type {number} */
                            z = t1 * x2 + z * y2;
                            /** @type {number} */
                            x0 = minX;
                            /** @type {number} */
                            x1 = temp;
                            /** @type {number} */
                            n = step;
                        }
                        /** @type {number} */
                        ang = Math.atan2(x1, x0);
                        /** @type {number} */
                        args.rotation = ang * radix;
                        if (ang) {
                            /** @type {number} */
                            y2 = Math.cos(-ang);
                            /** @type {number} */
                            x2 = Math.sin(-ang);
                            /** @type {number} */
                            x0 = x0 * y2 + x * x2;
                            /** @type {number} */
                            temp = x1 * y2 + y0 * x2;
                            /** @type {number} */
                            y0 = x1 * -x2 + y0 * y2;
                            /** @type {number} */
                            dx = n * -x2 + dx * y2;
                            /** @type {number} */
                            x1 = temp;
                        }
                        if (args.rotationX) {
                            if (Math.abs(args.rotationX) + Math.abs(args.rotation) > 359.9) {
                                /** @type {number} */
                                args.rotationX = args.rotation = 0;
                                /** @type {number} */
                                args.rotationY = 180 - args.rotationY;
                            }
                        }
                        /** @type {number} */
                        args.scaleX = (Math.sqrt(x0 * x0 + x1 * x1) * scaleY + 0.5 | 0) / scaleY;
                        /** @type {number} */
                        args.scaleY = (Math.sqrt(y0 * y0 + y1 * y1) * scaleY + 0.5 | 0) / scaleY;
                        /** @type {number} */
                        args.scaleZ = (Math.sqrt(dx * dx + dy * dy) * scaleY + 0.5 | 0) / scaleY;
                        if (args.rotationX || args.rotationY) {
                            /** @type {number} */
                            args.skewX = 0;
                        } else {
                            args.skewX = x || y0 ? Math.atan2(x, y0) * radix + args.rotation : args.skewX || 0;
                            if (Math.abs(args.skewX) > 90) {
                                if (Math.abs(args.skewX) < 270) {
                                    if (p) {
                                        args.scaleX *= -1;
                                        args.skewX += args.rotation <= 0 ? 180 : -180;
                                        args.rotation += args.rotation <= 0 ? 180 : -180;
                                    } else {
                                        args.scaleY *= -1;
                                        args.skewX += args.skewX <= 0 ? 180 : -180;
                                    }
                                }
                            }
                        }
                        /** @type {number} */
                        args.perspective = z ? 1 / (z < 0 ? -z : z) : 0;
                        args.x = dir;
                        args.y = row;
                        args.z = scale;
                        if (args.svg) {
                            args.x -= args.xOrigin - (args.xOrigin * x0 - args.yOrigin * x);
                            args.y -= args.yOrigin - (args.yOrigin * x1 - args.xOrigin * y0);
                        }
                    } else {
                        if (!showMessage || (item || (!result.length || (args.x !== result[4] || (args.y !== result[5] || !args.rotationX && !args.rotationY))))) {
                            /** @type {boolean} */
                            var isMultiLineStringOrPolygon = result.length >= 6;
                            var originalX = isMultiLineStringOrPolygon ? result[0] : 1;
                            var originalY = result[1] || 0;
                            var dY = result[2] || 0;
                            var dX = isMultiLineStringOrPolygon ? result[3] : 1;
                            args.x = result[4] || 0;
                            args.y = result[5] || 0;
                            /** @type {number} */
                            scaleX = Math.sqrt(originalX * originalX + originalY * originalY);
                            /** @type {number} */
                            E = Math.sqrt(dX * dX + dY * dY);
                            val = originalX || originalY ? Math.atan2(originalY, originalX) * radix : args.rotation || 0;
                            offset = dY || dX ? Math.atan2(dY, dX) * radix + val : args.skewX || 0;
                            if (Math.abs(offset) > 90) {
                                if (Math.abs(offset) < 270) {
                                    if (p) {
                                        scaleX *= -1;
                                        offset += val <= 0 ? 180 : -180;
                                        val += val <= 0 ? 180 : -180;
                                    } else {
                                        E *= -1;
                                        offset += offset <= 0 ? 180 : -180;
                                    }
                                }
                            }
                            /** @type {number} */
                            args.scaleX = scaleX;
                            /** @type {number} */
                            args.scaleY = E;
                            args.rotation = val;
                            args.skewX = offset;
                            if (showMessage) {
                                /** @type {number} */
                                args.rotationX = args.rotationY = args.z = 0;
                                /** @type {number} */
                                args.perspective = target;
                                /** @type {number} */
                                args.scaleZ = 1;
                            }
                            if (args.svg) {
                                args.x -= args.xOrigin - (args.xOrigin * originalX + args.yOrigin * dY);
                                args.y -= args.yOrigin - (args.xOrigin * originalY + args.yOrigin * dX);
                            }
                        }
                    }
                    args.zOrigin = body;
                    for (index in args) {
                        if (args[index] < end) {
                            if (args[index] > -end) {
                                /** @type {number} */
                                args[index] = 0;
                            }
                        }
                    }
                }
                return recurring && (element._gsTransform = args, args.svg && (info && element.style[name] ? TweenLite.delayedCall(0.001, function() {
                    success(element.style, name);
                }) : !info && (element.getAttribute("transform") && TweenLite.delayedCall(0.001, function() {
                    element.removeAttribute("transform");
                })))), args;
            };
            /**
             * @param {number} state
             * @return {undefined}
             */
            var update = function(state) {
                var requestUrl;
                var x;
                var data = this.data;
                /** @type {number} */
                var theta1 = -data.rotation * rad;
                /** @type {number} */
                var theta2 = theta1 + data.skewX * rad;
                /** @type {number} */
                var dist = 1E5;
                /** @type {number} */
                var dy = (Math.cos(theta1) * data.scaleX * dist | 0) / dist;
                /** @type {number} */
                var dx = (Math.sin(theta1) * data.scaleX * dist | 0) / dist;
                /** @type {number} */
                var a = (Math.sin(theta2) * -data.scaleY * dist | 0) / dist;
                /** @type {number} */
                var k = (Math.cos(theta2) * data.scaleY * dist | 0) / dist;
                var style = this.t.style;
                var css = this.t.currentStyle;
                if (css) {
                    /** @type {number} */
                    x = dx;
                    /** @type {number} */
                    dx = -a;
                    /** @type {number} */
                    a = -x;
                    requestUrl = css.filter;
                    /** @type {string} */
                    style.filter = "";
                    var i;
                    var offset;
                    var b3 = this.t.offsetWidth;
                    var b1 = this.t.offsetHeight;
                    /** @type {boolean} */
                    var v = "absolute" !== css.position;
                    /** @type {string} */
                    var fileName = "progid:DXImageTransform.Microsoft.Matrix(M11=" + dy + ", M12=" + dx + ", M21=" + a + ", M22=" + k;
                    var n = data.x + b3 * data.xPercent / 100;
                    var top = data.y + b1 * data.yPercent / 100;
                    if (null != data.ox && (i = (data.oxp ? b3 * data.ox * 0.01 : data.ox) - b3 / 2, offset = (data.oyp ? b1 * data.oy * 0.01 : data.oy) - b1 / 2, n += i - (i * dy + offset * dx), top += offset - (i * a + offset * k)), v ? (i = b3 / 2, offset = b1 / 2, fileName += ", Dx=" + (i - (i * dy + offset * dx) + n) + ", Dy=" + (offset - (i * a + offset * k) + top) + ")") : fileName += ", sizingMethod='auto expand')", requestUrl.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? style.filter = requestUrl.replace(rfilters,
                            fileName) : style.filter = fileName + " " + requestUrl, 0 !== state && 1 !== state || 1 === dy && (0 === dx && (0 === a && (1 === k && (v && fileName.indexOf("Dx=0, Dy=0") === -1 || (rCurrLoc.test(requestUrl) && 100 !== parseFloat(RegExp.$1) || requestUrl.indexOf(requestUrl.indexOf("Alpha")) === -1 && style.removeAttribute("filter")))))), !v) {
                        var val;
                        var property;
                        var radius;
                        /** @type {number} */
                        var S = start < 8 ? 1 : -1;
                        i = data.ieOffsetX || 0;
                        offset = data.ieOffsetY || 0;
                        /** @type {number} */
                        data.ieOffsetX = Math.round((b3 - ((dy < 0 ? -dy : dy) * b3 + (dx < 0 ? -dx : dx) * b1)) / 2 + n);
                        /** @type {number} */
                        data.ieOffsetY = Math.round((b1 - ((k < 0 ? -k : k) * b1 + (a < 0 ? -a : a) * b3)) / 2 + top);
                        /** @type {number} */
                        key = 0;
                        for (; key < 4; key++) {
                            property = properties[key];
                            val = css[property];
                            x = val.indexOf("px") !== -1 ? parseFloat(val) : get(this.t, property, parseFloat(val), val.replace(rCRLF, "")) || 0;
                            /** @type {number} */
                            radius = x !== data[property] ? key < 2 ? -data.ieOffsetX : -data.ieOffsetY : key < 2 ? i - data.ieOffsetX : offset - data.ieOffsetY;
                            /** @type {string} */
                            style[property] = (data[property] = Math.round(x - radius * (0 === key || 2 === key ? 1 : S))) + "px";
                        }
                    }
                }
            };
            /** @type {function (number): ?} */
            var moduleMap = body.set3DTransformRatio = body.setTransformRatio = function(dataAndEvents) {
                var y;
                var i;
                var x;
                var c;
                var r;
                var z;
                var a;
                var b;
                var l;
                var v;
                var val;
                var idx;
                var module;
                var min;
                var t;
                var s;
                var sy;
                var tmp;
                var value;
                var px;
                var top;
                var t1;
                var h;
                var data = this.data;
                var result = this.t.style;
                var angle = data.rotation;
                var err = data.rotationX;
                var obj = data.rotationY;
                var scale = data.scaleX;
                var n = data.scaleY;
                var len = data.scaleZ;
                var position = data.x;
                var d = data.y;
                var delta = data.z;
                var type = data.svg;
                var width = data.perspective;
                var method = data.force3D;
                if (((1 === dataAndEvents || 0 === dataAndEvents) && ("auto" === method && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !method) && (!delta && (!width && (!obj && (!err && 1 === len)))) || (info && type || !showMessage)) {
                    return void(angle || (data.skewX || type) ? (angle *= rad, t1 = data.skewX * rad, h = 1E5, y = Math.cos(angle) * scale, c = Math.sin(angle) * scale, i = Math.sin(angle - t1) * -n, r = Math.cos(angle - t1) * n, t1 && ("simple" === data.skewType && (sy = Math.tan(t1 - data.skewY * rad), sy = Math.sqrt(1 + sy * sy), i *= sy, r *= sy, data.skewY && (sy = Math.tan(data.skewY * rad), sy = Math.sqrt(1 + sy * sy), y *= sy, c *= sy))), type && (position += data.xOrigin - (data.xOrigin * y + data.yOrigin *
                            i) + data.xOffset, d += data.yOrigin - (data.xOrigin * c + data.yOrigin * r) + data.yOffset, info && ((data.xPercent || data.yPercent) && (min = this.t.getBBox(), position += 0.01 * data.xPercent * min.width, d += 0.01 * data.yPercent * min.height)), min = 1E-6, position < min && (position > -min && (position = 0)), d < min && (d > -min && (d = 0))), value = (y * h | 0) / h + "," + (c * h | 0) / h + "," + (i * h | 0) / h + "," + (r * h | 0) / h + "," + position + "," + d + ")", type && info ?
                        this.t.setAttribute("transform", "matrix(" + value) : result[name] = (data.xPercent || data.yPercent ? "translate(" + data.xPercent + "%," + data.yPercent + "%) matrix(" : "matrix(") + value) : result[name] = (data.xPercent || data.yPercent ? "translate(" + data.xPercent + "%," + data.yPercent + "%) matrix(" : "matrix(") + scale + ",0,0," + n + "," + position + "," + d + ")");
                }
                if (right && (min = 1E-4, scale < min && (scale > -min && (scale = len = 2E-5)), n < min && (n > -min && (n = len = 2E-5)), !width || (data.z || (data.rotationX || (data.rotationY || (width = 0))))), angle || data.skewX) {
                    angle *= rad;
                    /** @type {number} */
                    t = y = Math.cos(angle);
                    /** @type {number} */
                    s = c = Math.sin(angle);
                    if (data.skewX) {
                        angle -= data.skewX * rad;
                        /** @type {number} */
                        t = Math.cos(angle);
                        /** @type {number} */
                        s = Math.sin(angle);
                        if ("simple" === data.skewType) {
                            /** @type {number} */
                            sy = Math.tan((data.skewX - data.skewY) * rad);
                            /** @type {number} */
                            sy = Math.sqrt(1 + sy * sy);
                            t *= sy;
                            s *= sy;
                            if (data.skewY) {
                                /** @type {number} */
                                sy = Math.tan(data.skewY * rad);
                                /** @type {number} */
                                sy = Math.sqrt(1 + sy * sy);
                                y *= sy;
                                c *= sy;
                            }
                        }
                    }
                    /** @type {number} */
                    i = -s;
                    /** @type {number} */
                    r = t;
                } else {
                    if (!(obj || (err || (1 !== len || (width || type))))) {
                        return void(result[name] = (data.xPercent || data.yPercent ? "translate(" + data.xPercent + "%," + data.yPercent + "%) translate3d(" : "translate3d(") + position + "px," + d + "px," + delta + "px)" + (1 !== scale || 1 !== n ? " scale(" + scale + "," + n + ")" : ""));
                    }
                    /** @type {number} */
                    y = r = 1;
                    /** @type {number} */
                    i = c = 0;
                }
                /** @type {number} */
                l = 1;
                /** @type {number} */
                x = z = a = b = v = val = 0;
                /** @type {number} */
                idx = width ? -1 / width : 0;
                module = data.zOrigin;
                /** @type {number} */
                min = 1E-6;
                /** @type {string} */
                px = ",";
                /** @type {string} */
                top = "0";
                /** @type {number} */
                angle = obj * rad;
                if (angle) {
                    /** @type {number} */
                    t = Math.cos(angle);
                    /** @type {number} */
                    s = Math.sin(angle);
                    /** @type {number} */
                    a = -s;
                    /** @type {number} */
                    v = idx * -s;
                    /** @type {number} */
                    x = y * s;
                    /** @type {number} */
                    z = c * s;
                    /** @type {number} */
                    l = t;
                    idx *= t;
                    y *= t;
                    c *= t;
                }
                /** @type {number} */
                angle = err * rad;
                if (angle) {
                    /** @type {number} */
                    t = Math.cos(angle);
                    /** @type {number} */
                    s = Math.sin(angle);
                    /** @type {number} */
                    sy = i * t + x * s;
                    /** @type {number} */
                    tmp = r * t + z * s;
                    /** @type {number} */
                    b = l * s;
                    /** @type {number} */
                    val = idx * s;
                    /** @type {number} */
                    x = i * -s + x * t;
                    /** @type {number} */
                    z = r * -s + z * t;
                    l *= t;
                    idx *= t;
                    /** @type {number} */
                    i = sy;
                    /** @type {number} */
                    r = tmp;
                }
                if (1 !== len) {
                    x *= len;
                    z *= len;
                    l *= len;
                    idx *= len;
                }
                if (1 !== n) {
                    i *= n;
                    r *= n;
                    b *= n;
                    val *= n;
                }
                if (1 !== scale) {
                    y *= scale;
                    c *= scale;
                    a *= scale;
                    v *= scale;
                }
                if (module || type) {
                    if (module) {
                        position += x * -module;
                        d += z * -module;
                        delta += l * -module + module;
                    }
                    if (type) {
                        position += data.xOrigin - (data.xOrigin * y + data.yOrigin * i) + data.xOffset;
                        d += data.yOrigin - (data.xOrigin * c + data.yOrigin * r) + data.yOffset;
                    }
                    if (position < min) {
                        if (position > -min) {
                            /** @type {string} */
                            position = top;
                        }
                    }
                    if (d < min) {
                        if (d > -min) {
                            /** @type {string} */
                            d = top;
                        }
                    }
                    if (delta < min) {
                        if (delta > -min) {
                            /** @type {number} */
                            delta = 0;
                        }
                    }
                }
                /** @type {string} */
                value = data.xPercent || data.yPercent ? "translate(" + data.xPercent + "%," + data.yPercent + "%) matrix3d(" : "matrix3d(";
                value += (y < min && y > -min ? top : y) + px + (c < min && c > -min ? top : c) + px + (a < min && a > -min ? top : a);
                value += px + (v < min && v > -min ? top : v) + px + (i < min && i > -min ? top : i) + px + (r < min && r > -min ? top : r);
                if (err || (obj || 1 !== len)) {
                    value += px + (b < min && b > -min ? top : b) + px + (val < min && val > -min ? top : val) + px + (x < min && x > -min ? top : x);
                    value += px + (z < min && z > -min ? top : z) + px + (l < min && l > -min ? top : l) + px + (idx < min && idx > -min ? top : idx) + px;
                } else {
                    value += ",0,0,0,0,1,0,";
                }
                value += position + px + d + px + delta + px + (width ? 1 + -delta / width : 1) + ")";
                /** @type {string} */
                result[name] = value;
            };
            p = Server.prototype;
            /** @type {number} */
            p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
            /** @type {number} */
            p.scaleX = p.scaleY = p.scaleZ = 1;
            testAllProps("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                /**
                 * @param {Object} element
                 * @param {string} s
                 * @param {string} id
                 * @param {number} object
                 * @param {string} obj
                 * @param {number} recurring
                 * @param {string} map
                 * @return {?}
                 */
                parser: function(element, s, id, object, obj, recurring, map) {
                    if (object._lastParsedTransform === map) {
                        return obj;
                    }
                    /** @type {string} */
                    object._lastParsedTransform = map;
                    var item;
                    if ("function" == typeof map[id]) {
                        item = map[id];
                        /** @type {string} */
                        map[id] = s;
                    }
                    var target;
                    var attr;
                    var attrs;
                    var p;
                    var source;
                    var x;
                    var y;
                    var matrix;
                    var key;
                    var horizontal = element._gsTransform;
                    var ns = element.style;
                    /** @type {number} */
                    var edge = 1E-6;
                    /** @type {number} */
                    var index = tokenized.length;
                    /** @type {string} */
                    var data = map;
                    var hash = {};
                    /** @type {string} */
                    var suiteView = "transformOrigin";
                    var options = callback(element, opts, true, data.parseTransform);
                    var value = data.transform && ("function" == typeof data.transform ? data.transform(camelKey, prop) : data.transform);
                    if (object._transform = options, value && ("string" == typeof value && name)) {
                        attr = node.style;
                        attr[name] = value;
                        /** @type {string} */
                        attr.display = "block";
                        /** @type {string} */
                        attr.position = "absolute";
                        doc.body.appendChild(node);
                        target = callback(node, null, false);
                        if (options.svg) {
                            x = options.xOrigin;
                            y = options.yOrigin;
                            target.x -= options.xOffset;
                            target.y -= options.yOffset;
                            if (data.transformOrigin || data.svgOrigin) {
                                value = {};
                                handler(element, parse(data.transformOrigin), value, data.svgOrigin, data.smoothOrigin, true);
                                x = value.xOrigin;
                                y = value.yOrigin;
                                target.x -= value.xOffset - options.xOffset;
                                target.y -= value.yOffset - options.yOffset;
                            }
                            if (x || y) {
                                matrix = fn(node, true);
                                target.x -= x - (x * matrix[0] + y * matrix[2]);
                                target.y -= y - (x * matrix[1] + y * matrix[3]);
                            }
                        }
                        doc.body.removeChild(node);
                        if (!target.perspective) {
                            target.perspective = options.perspective;
                        }
                        if (null != data.xPercent) {
                            target.xPercent = valid(data.xPercent, options.xPercent);
                        }
                        if (null != data.yPercent) {
                            target.yPercent = valid(data.yPercent, options.yPercent);
                        }
                    } else {
                        if ("object" == typeof data) {
                            if (target = {
                                    scaleX: valid(null != data.scaleX ? data.scaleX : data.scale, options.scaleX),
                                    scaleY: valid(null != data.scaleY ? data.scaleY : data.scale, options.scaleY),
                                    scaleZ: valid(data.scaleZ, options.scaleZ),
                                    x: valid(data.x, options.x),
                                    y: valid(data.y, options.y),
                                    z: valid(data.z, options.z),
                                    xPercent: valid(data.xPercent, options.xPercent),
                                    yPercent: valid(data.yPercent, options.yPercent),
                                    perspective: valid(data.transformPerspective, options.perspective)
                                }, source = data.directionalRotation, null != source) {
                                if ("object" == typeof source) {
                                    for (attr in source) {
                                        data[attr] = source[attr];
                                    }
                                } else {
                                    data.rotation = source;
                                }
                            }
                            if ("string" == typeof data.x) {
                                if (data.x.indexOf("%") !== -1) {
                                    /** @type {number} */
                                    target.x = 0;
                                    target.xPercent = valid(data.x, options.xPercent);
                                }
                            }
                            if ("string" == typeof data.y) {
                                if (data.y.indexOf("%") !== -1) {
                                    /** @type {number} */
                                    target.y = 0;
                                    target.yPercent = valid(data.y, options.yPercent);
                                }
                            }
                            target.rotation = stringify("rotation" in data ? data.rotation : "shortRotation" in data ? data.shortRotation + "_short" : "rotationZ" in data ? data.rotationZ : options.rotation - options.skewY, options.rotation - options.skewY, "rotation", hash);
                            if (showMessage) {
                                target.rotationX = stringify("rotationX" in data ? data.rotationX : "shortRotationX" in data ? data.shortRotationX + "_short" : options.rotationX || 0, options.rotationX, "rotationX", hash);
                                target.rotationY = stringify("rotationY" in data ? data.rotationY : "shortRotationY" in data ? data.shortRotationY + "_short" : options.rotationY || 0, options.rotationY, "rotationY", hash);
                            }
                            target.skewX = stringify(data.skewX, options.skewX - options.skewY);
                            if (target.skewY = stringify(data.skewY, options.skewY)) {
                                target.skewX += target.skewY;
                                target.rotation += target.skewY;
                            }
                        }
                    }
                    if (showMessage) {
                        if (null != data.force3D) {
                            options.force3D = data.force3D;
                            /** @type {boolean} */
                            p = true;
                        }
                    }
                    options.skewType = data.skewType || (options.skewType || self.defaultSkewType);
                    attrs = options.force3D || (options.z || (options.rotationX || (options.rotationY || (target.z || (target.rotationX || (target.rotationY || target.perspective))))));
                    if (!attrs) {
                        if (!(null == data.scale)) {
                            /** @type {number} */
                            target.scaleZ = 1;
                        }
                    }
                    for (; --index > -1;) {
                        /** @type {string} */
                        key = tokenized[index];
                        /** @type {number} */
                        value = target[key] - options[key];
                        if (value > edge || (value < -edge || (null != data[key] || null != pos[key]))) {
                            /** @type {boolean} */
                            p = true;
                            obj = new Parser(options, key, options[key], value, obj);
                            if (key in hash) {
                                obj.e = hash[key];
                            }
                            /** @type {number} */
                            obj.xs0 = 0;
                            /** @type {number} */
                            obj.plugin = recurring;
                            object._overwriteProps.push(obj.n);
                        }
                    }
                    return value = data.transformOrigin, options.svg && ((value || data.svgOrigin) && (x = options.xOffset, y = options.yOffset, handler(element, parse(value), target, data.svgOrigin, data.smoothOrigin), obj = debug(options, "xOrigin", (horizontal ? options : target).xOrigin, target.xOrigin, obj, suiteView), obj = debug(options, "yOrigin", (horizontal ? options : target).yOrigin, target.yOrigin, obj, suiteView), x === options.xOffset && y === options.yOffset || (obj = debug(options, "xOffset",
                            horizontal ? x : options.xOffset, options.xOffset, obj, suiteView), obj = debug(options, "yOffset", horizontal ? y : options.yOffset, options.yOffset, obj, suiteView)), value = info ? null : "0px 0px")), (value || showMessage && (attrs && options.zOrigin)) && (name ? (p = true, key = property, value = (value || getStyle(element, key, opts, false, "50% 50%")) + "", obj = new Parser(ns, key, 0, 0, obj, -1, suiteView), obj.b = ns[key], obj.plugin = recurring, showMessage ? (attr = options.zOrigin,
                            value = value.split(" "), options.zOrigin = (value.length > 2 && (0 === attr || "0px" !== value[2]) ? parseFloat(value[2]) : attr) || 0, obj.xs0 = obj.e = value[0] + " " + (value[1] || "50%") + " 0px", obj = new Parser(options, "zOrigin", 0, 0, obj, -1, obj.n), obj.b = attr, obj.xs0 = obj.e = options.zOrigin) : obj.xs0 = obj.e = value) : parse(value + "", options)), p && (object._transformType = options.svg && info || !attrs && 3 !== this._transformType ? 2 : 3), item && (map[id] = item),
                        obj;
                },
                prefix: true
            });
            testAllProps("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: true,
                color: true,
                multi: true,
                keyword: "inset"
            });
            testAllProps("borderRadius", {
                defaultValue: "0px",
                /**
                 * @param {Object} node
                 * @param {string} text
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} str
                 * @param {number} recurring
                 * @return {?}
                 */
                parser: function(node, text, name, callback, str, recurring) {
                    text = this.format(text);
                    var descendants;
                    var i;
                    var descendant;
                    var w;
                    var n;
                    var t;
                    var value;
                    var result;
                    var sy;
                    var step;
                    var end;
                    var start;
                    var x;
                    var c;
                    var val;
                    var len;
                    /** @type {Array} */
                    var codeSegments = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
                    var s = node.style;
                    /** @type {number} */
                    sy = parseFloat(node.offsetWidth);
                    /** @type {number} */
                    step = parseFloat(node.offsetHeight);
                    descendants = text.split(" ");
                    /** @type {number} */
                    i = 0;
                    for (; i < codeSegments.length; i++) {
                        if (this.p.indexOf("border")) {
                            codeSegments[i] = normalize(codeSegments[i]);
                        }
                        n = w = getStyle(node, codeSegments[i], opts, false, "0px");
                        if (n.indexOf(" ") !== -1) {
                            w = n.split(" ");
                            n = w[0];
                            w = w[1];
                        }
                        t = descendant = descendants[i];
                        /** @type {number} */
                        value = parseFloat(n);
                        start = n.substr((value + "").length);
                        /** @type {boolean} */
                        x = "=" === t.charAt(1);
                        if (x) {
                            /** @type {number} */
                            result = parseInt(t.charAt(0) + "1", 10);
                            t = t.substr(2);
                            result *= parseFloat(t);
                            end = t.substr((result + "").length - (result < 0 ? 1 : 0)) || "";
                        } else {
                            /** @type {number} */
                            result = parseFloat(t);
                            end = t.substr((result + "").length);
                        }
                        if ("" === end) {
                            end = obj[name] || start;
                        }
                        if (end !== start) {
                            c = get(node, "borderLeft", value, start);
                            val = get(node, "borderTop", value, start);
                            if ("%" === end) {
                                /** @type {string} */
                                n = c / sy * 100 + "%";
                                /** @type {string} */
                                w = val / step * 100 + "%";
                            } else {
                                if ("em" === end) {
                                    len = get(node, "borderLeft", 1, "em");
                                    /** @type {string} */
                                    n = c / len + "em";
                                    /** @type {string} */
                                    w = val / len + "em";
                                } else {
                                    /** @type {string} */
                                    n = c + "px";
                                    /** @type {string} */
                                    w = val + "px";
                                }
                            }
                            if (x) {
                                t = parseFloat(n) + result + end;
                                descendant = parseFloat(w) + result + end;
                            }
                        }
                        str = format(s, codeSegments[i], n + " " + w, t + " " + descendant, false, "0px", str);
                    }
                    return str;
                },
                prefix: true,
                formatter: compile("0px 0px 0px 0px", false, true)
            });
            testAllProps("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                /**
                 * @param {Object} node
                 * @param {string} text
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} string
                 * @param {number} recurring
                 * @return {?}
                 */
                parser: function(node, text, name, callback, string, recurring) {
                    return format(node.style, name, this.format(getStyle(node, name, opts, false, "0px 0px")), this.format(text), false, "0px", string);
                },
                prefix: true,
                formatter: compile("0px 0px", false, true)
            });
            testAllProps("backgroundPosition", {
                defaultValue: "0 0",
                /**
                 * @param {Object} node
                 * @param {string} text
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} tagName
                 * @param {number} recurring
                 * @return {?}
                 */
                parser: function(node, text, name, callback, tagName, recurring) {
                    var buffer;
                    var dirs;
                    var key;
                    var value;
                    var scale;
                    var title;
                    /** @type {string} */
                    var prop = "background-position";
                    var style = opts || test(node, null);
                    var data = this.format((style ? start ? style.getPropertyValue(prop + "-x") + " " + style.getPropertyValue(prop + "-y") : style.getPropertyValue(prop) : node.currentStyle.backgroundPositionX + " " + node.currentStyle.backgroundPositionY) || "0 0");
                    var html = this.format(text);
                    if (data.indexOf("%") !== -1 != (html.indexOf("%") !== -1) && (html.split(",").length < 2 && (title = getStyle(node, "backgroundImage").replace(rreturn, ""), title && "none" !== title))) {
                        buffer = data.split(" ");
                        dirs = html.split(" ");
                        img.setAttribute("src", title);
                        /** @type {number} */
                        key = 2;
                        for (; --key > -1;) {
                            data = buffer[key];
                            /** @type {boolean} */
                            value = data.indexOf("%") !== -1;
                            if (value !== (dirs[key].indexOf("%") !== -1)) {
                                /** @type {number} */
                                scale = 0 === key ? node.offsetWidth - img.width : node.offsetHeight - img.height;
                                /** @type {string} */
                                buffer[key] = value ? parseFloat(data) / 100 * scale + "px" : parseFloat(data) / scale * 100 + "%";
                            }
                        }
                        data = buffer.join(" ");
                    }
                    return this.parseComplex(node.style, data, html, tagName, recurring);
                },
                /** @type {function (string, string): ?} */
                formatter: parse
            });
            testAllProps("backgroundSize", {
                defaultValue: "0 0",
                /**
                 * @param {string} text
                 * @return {?}
                 */
                formatter: function(text) {
                    return text += "", parse(text.indexOf(" ") === -1 ? text + " " + text : text);
                }
            });
            testAllProps("perspective", {
                defaultValue: "0px",
                prefix: true
            });
            testAllProps("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: true
            });
            testAllProps("transformStyle", {
                prefix: true
            });
            testAllProps("backfaceVisibility", {
                prefix: true
            });
            testAllProps("userSelect", {
                prefix: true
            });
            testAllProps("margin", {
                parser: highlight("marginTop,marginRight,marginBottom,marginLeft")
            });
            testAllProps("padding", {
                parser: highlight("paddingTop,paddingRight,paddingBottom,paddingLeft")
            });
            testAllProps("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                /**
                 * @param {Object} element
                 * @param {string} text
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} tagName
                 * @param {number} recurring
                 * @return {?}
                 */
                parser: function(element, text, name, callback, tagName, recurring) {
                    var message;
                    var currentStyle;
                    var nl;
                    return start < 9 ? (currentStyle = element.currentStyle, nl = start < 8 ? " " : ",", message = "rect(" + currentStyle.clipTop + nl + currentStyle.clipRight + nl + currentStyle.clipBottom + nl + currentStyle.clipLeft + ")", text = this.format(text).split(",").join(nl)) : (message = this.format(getStyle(element, this.p, opts, false, this.dflt)), text = this.format(text)), this.parseComplex(element.style, message, text, tagName, recurring);
                }
            });
            testAllProps("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: true,
                multi: true
            });
            testAllProps("autoRound,strictUnits", {
                /**
                 * @param {Object} dataAndEvents
                 * @param {string} text
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} data
                 * @return {?}
                 */
                parser: function(dataAndEvents, text, name, callback, data) {
                    return data;
                }
            });
            testAllProps("border", {
                defaultValue: "0px solid #000",
                /**
                 * @param {Object} element
                 * @param {string} text
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} tagName
                 * @param {number} recurring
                 * @return {?}
                 */
                parser: function(element, text, name, callback, tagName, recurring) {
                    var result = getStyle(element, "borderTopWidth", opts, false, "0px");
                    var split = this.format(text).split(" ");
                    var type = split[0].replace(rCRLF, "");
                    return "px" !== type && (result = parseFloat(result) / get(element, "borderTopWidth", 1, type) + type), this.parseComplex(element.style, this.format(result + " " + getStyle(element, "borderTopStyle", opts, false, "solid") + " " + getStyle(element, "borderTopColor", opts, false, "#000")), split.join(" "), tagName, recurring);
                },
                color: true,
                /**
                 * @param {string} text
                 * @return {?}
                 */
                formatter: function(text) {
                    var solid = text.split(" ");
                    return solid[0] + " " + (solid[1] || "solid") + " " + (text.match(regex) || ["#000"])[0];
                }
            });
            testAllProps("borderWidth", {
                parser: highlight("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            });
            testAllProps("float,cssFloat,styleFloat", {
                /**
                 * @param {Object} dataAndEvents
                 * @param {string} text
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} tagName
                 * @param {number} recurring
                 * @return {?}
                 */
                parser: function(dataAndEvents, text, name, callback, tagName, recurring) {
                    var workerStyle = dataAndEvents.style;
                    /** @type {string} */
                    var floatAttr = "cssFloat" in workerStyle ? "cssFloat" : "styleFloat";
                    return new Parser(workerStyle, floatAttr, 0, 0, tagName, -1, name, false, 0, workerStyle[floatAttr], text);
                }
            });
            /**
             * @param {number} b
             * @return {undefined}
             */
            var error = function(b) {
                var e;
                var elem = this.t;
                var s = elem.filter || (getStyle(this.data, "filter") || "");
                /** @type {number} */
                var i = this.s + this.c * b | 0;
                if (100 === i) {
                    if (s.indexOf("atrix(") === -1 && (s.indexOf("radient(") === -1 && s.indexOf("oader(") === -1)) {
                        elem.removeAttribute("filter");
                        /** @type {boolean} */
                        e = !getStyle(this.data, "filter");
                    } else {
                        elem.filter = s.replace(rSlash, "");
                        /** @type {boolean} */
                        e = true;
                    }
                }
                if (!e) {
                    if (this.xn1) {
                        elem.filter = s = s || "alpha(opacity=" + i + ")";
                    }
                    if (s.indexOf("pacity") === -1) {
                        if (!(0 === i && this.xn1)) {
                            /** @type {string} */
                            elem.filter = s + " alpha(opacity=" + i + ")";
                        }
                    } else {
                        elem.filter = s.replace(rCurrLoc, "opacity=" + i);
                    }
                }
            };
            testAllProps("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                /**
                 * @param {Object} node
                 * @param {string} str
                 * @param {string} camelKey
                 * @param {number} callback
                 * @param {Object} p
                 * @param {number} recurring
                 * @return {?}
                 */
                parser: function(node, str, camelKey, callback, p, recurring) {
                    /** @type {number} */
                    var last = parseFloat(getStyle(node, "opacity", opts, false, "1"));
                    var options = node.style;
                    /** @type {boolean} */
                    var b = "autoAlpha" === camelKey;
                    return "string" == typeof str && ("=" === str.charAt(1) && (str = ("-" === str.charAt(0) ? -1 : 1) * parseFloat(str.substr(2)) + last)), b && (1 === last && ("hidden" === getStyle(node, "visibility", opts) && (0 !== str && (last = 0)))), opacity ? p = new Parser(options, "opacity", last, str - last, p) : (p = new Parser(options, "opacity", 100 * last, 100 * (str - last), p), p.xn1 = b ? 1 : 0, options.zoom = 1, p.type = 2, p.b = "alpha(opacity=" + p.s + ")", p.e = "alpha(opacity=" + (p.s +
                        p.c) + ")", p.data = node, p.plugin = recurring, p.setRatio = error), b && (p = new Parser(options, "visibility", 0, 0, p, -1, null, false, 0, 0 !== last ? "inherit" : "hidden", 0 === str ? "hidden" : "inherit"), p.xs0 = "inherit", callback._overwriteProps.push(p.n), callback._overwriteProps.push(camelKey)), p;
                }
            });
            /**
             * @param {?} s
             * @param {string} key
             * @return {undefined}
             */
            var success = function(s, key) {
                if (key) {
                    if (s.removeProperty) {
                        if (!("ms" !== key.substr(0, 2) && "webkit" !== key.substr(0, 6))) {
                            /** @type {string} */
                            key = "-" + key;
                        }
                        s.removeProperty(key.replace(rmultiDash, "-$1").toLowerCase());
                    } else {
                        s.removeAttribute(key);
                    }
                }
            };
            /**
             * @param {number} val
             * @return {undefined}
             */
            var process = function(val) {
                if (this.t._gsClassPT = this, 1 === val || 0 === val) {
                    this.t.setAttribute("class", 0 === val ? this.b : this.e);
                    var current = this.data;
                    var css = this.t.style;
                    for (; current;) {
                        if (current.v) {
                            css[current.p] = current.v;
                        } else {
                            success(css, current.p);
                        }
                        current = current._next;
                    }
                    if (1 === val) {
                        if (this.t._gsClassPT === this) {
                            /** @type {null} */
                            this.t._gsClassPT = null;
                        }
                    }
                } else {
                    if (this.t.getAttribute("class") !== this.e) {
                        this.t.setAttribute("class", this.e);
                    }
                }
            };
            testAllProps("className", {
                /**
                 * @param {Object} container
                 * @param {string} text
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} data
                 * @param {number} which
                 * @param {Object} o
                 * @return {?}
                 */
                parser: function(container, text, name, callback, data, which, o) {
                    var node;
                    var el;
                    var d;
                    var players;
                    var p;
                    var content = container.getAttribute("class") || "";
                    var oldCSS = container.style.cssText;
                    if (data = callback._classNamePT = new Parser(container, name, 0, 0, data, 2), data.setRatio = process, data.pr = -11, i = true, data.b = content, el = render(container, opts), d = container._gsClassPT) {
                        players = {};
                        p = d.data;
                        for (; p;) {
                            /** @type {number} */
                            players[p.p] = 1;
                            p = p._next;
                        }
                        d.setRatio(1);
                    }
                    return container._gsClassPT = data, data.e = "=" !== text.charAt(1) ? text : content.replace(new RegExp("(?:\\s|^)" + text.substr(2) + "(?![\\w-])"), "") + ("+" === text.charAt(0) ? " " + text.substr(2) : ""), container.setAttribute("class", data.e), node = f(container, el, render(container), o, players), container.setAttribute("class", content), data.data = node.firstMPT, container.style.cssText = oldCSS, data = data.xfirst = callback.parse(container, node.difs, data, which);
                }
            });
            /**
             * @param {number} state
             * @return {undefined}
             */
            var init = function(state) {
                if ((1 === state || 0 === state) && (this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data)) {
                    var keys;
                    var key;
                    var idx;
                    var r;
                    var t;
                    var e = this.t.style;
                    var parse = old.transform.parse;
                    if ("all" === this.e) {
                        /** @type {string} */
                        e.cssText = "";
                        /** @type {boolean} */
                        r = true;
                    } else {
                        keys = this.e.split(" ").join("").split(",");
                        idx = keys.length;
                        for (; --idx > -1;) {
                            key = keys[idx];
                            if (old[key]) {
                                if (old[key].parse === parse) {
                                    /** @type {boolean} */
                                    r = true;
                                } else {
                                    key = "transformOrigin" === key ? property : old[key].p;
                                }
                            }
                            success(e, key);
                        }
                    }
                    if (r) {
                        success(e, name);
                        t = this.t._gsTransform;
                        if (t) {
                            if (t.svg) {
                                this.t.removeAttribute("data-svg-origin");
                                this.t.removeAttribute("transform");
                            }
                            delete this.t._gsTransform;
                        }
                    }
                }
            };
            testAllProps("clearProps", {
                /**
                 * @param {string} dataAndEvents
                 * @param {string} type
                 * @param {string} name
                 * @param {number} callback
                 * @param {string} node
                 * @return {?}
                 */
                parser: function(dataAndEvents, type, name, callback, node) {
                    return node = new Parser(dataAndEvents, name, 0, 0, node, 2), node.setRatio = init, node.e = type, node.pr = -10, node.data = callback._tween, i = true, node;
                }
            });
            /** @type {Array.<string>} */
            p = "bezier,throwProps,physicsProps,physics2D".split(",");
            /** @type {number} */
            key = p.length;
            for (; key--;) {
                traverseNode(p[key]);
            }
            p = self.prototype;
            /** @type {null} */
            p._firstPT = p._lastParsedTransform = p._transform = null;
            /**
             * @param {Object} node
             * @param {string} value
             * @param {?} tween
             * @param {?} deepDataAndEvents
             * @return {?}
             */
            p._onInitTween = function(node, value, tween, deepDataAndEvents) {
                if (!node.nodeType) {
                    return false;
                }
                this._target = prop = node;
                this._tween = tween;
                /** @type {string} */
                this._vars = value;
                camelKey = deepDataAndEvents;
                until = value.autoRound;
                /** @type {boolean} */
                i = false;
                obj = value.suffixMap || self.suffixMap;
                opts = test(node, "");
                eventPath = this._overwriteProps;
                var result;
                var pt;
                var pt2;
                var style;
                var last;
                var next;
                var val;
                var p;
                var isVisible;
                var elem = node.style;
                if (c && ("" === elem.zIndex && (result = getStyle(node, "zIndex", opts), "auto" !== result && "" !== result || this._addLazySet(elem, "zIndex", 0))), "string" == typeof value && (style = elem.cssText, result = render(node, opts), elem.cssText = style + ";" + value, result = f(node, result, render(node)).difs, !opacity && (rchecked.test(value) && (result.opacity = parseFloat(RegExp.$1))), value = result, elem.cssText = style), value.className ? this._firstPT = pt = old.className.parse(node,
                        value.className, "className", this, null, null, value) : this._firstPT = pt = this.parse(node, value, null), this._transformType) {
                    /** @type {boolean} */
                    isVisible = 3 === this._transformType;
                    if (name) {
                        if (left) {
                            /** @type {boolean} */
                            c = true;
                            if ("" === elem.zIndex) {
                                val = getStyle(node, "zIndex", opts);
                                if (!("auto" !== val && "" !== val)) {
                                    this._addLazySet(elem, "zIndex", 0);
                                }
                            }
                            if (leftVal) {
                                this._addLazySet(elem, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (isVisible ? "visible" : "hidden"));
                            }
                        }
                    } else {
                        /** @type {number} */
                        elem.zoom = 1;
                    }
                    pt2 = pt;
                    for (; pt2 && pt2._next;) {
                        pt2 = pt2._next;
                    }
                    p = new Parser(node, "transform", 0, 0, null, 2);
                    this._linkCSSP(p, null, pt2);
                    /** @type {Function} */
                    p.setRatio = name ? moduleMap : update;
                    p.data = this._transform || callback(node, opts, true);
                    p.tween = tween;
                    /** @type {number} */
                    p.pr = -1;
                    eventPath.pop();
                }
                if (i) {
                    for (; pt;) {
                        next = pt._next;
                        pt2 = style;
                        for (; pt2 && pt2.pr > pt.pr;) {
                            pt2 = pt2._next;
                        }
                        if (pt._prev = pt2 ? pt2._prev : last) {
                            pt._prev._next = pt;
                        } else {
                            style = pt;
                        }
                        if (pt._next = pt2) {
                            pt2._prev = pt;
                        } else {
                            last = pt;
                        }
                        pt = next;
                    }
                    this._firstPT = style;
                }
                return true;
            };
            /**
             * @param {Object} node
             * @param {Object} map
             * @param {string} value
             * @param {number} recurring
             * @return {?}
             */
            p.parse = function(node, map, value, recurring) {
                var key;
                var fn;
                var result;
                var data;
                var i;
                var val;
                var label;
                var id;
                var domain;
                var prettyPrinting;
                var text = node.style;
                for (key in map) {
                    val = map[key];
                    if ("function" == typeof val) {
                        val = val(camelKey, prop);
                    }
                    fn = old[key];
                    if (fn) {
                        value = fn.parse(node, val, key, this, value, recurring, map);
                    } else {
                        /** @type {string} */
                        i = getStyle(node, key, opts) + "";
                        /** @type {boolean} */
                        domain = "string" == typeof val;
                        if ("color" === key || ("fill" === key || ("stroke" === key || (key.indexOf("Color") !== -1 || domain && rbrace.test(val))))) {
                            if (!domain) {
                                val = $(val);
                                /** @type {string} */
                                val = (val.length > 3 ? "rgba(" : "rgb(") + val.join(",") + ")";
                            }
                            value = format(text, key, i, val, true, "transparent", value, 0, recurring);
                        } else {
                            if (domain && numbers.test(val)) {
                                value = format(text, key, i, val, true, null, value, 0, recurring);
                            } else {
                                /** @type {number} */
                                result = parseFloat(i);
                                /** @type {string} */
                                label = result || 0 === result ? i.substr((result + "").length) : "";
                                if (!("" !== i && "auto" !== i)) {
                                    if ("width" === key || "height" === key) {
                                        result = check(node, key, opts);
                                        /** @type {string} */
                                        label = "px";
                                    } else {
                                        if ("left" === key || "top" === key) {
                                            result = extend(node, key, opts);
                                            /** @type {string} */
                                            label = "px";
                                        } else {
                                            /** @type {number} */
                                            result = "opacity" !== key ? 0 : 1;
                                            /** @type {string} */
                                            label = "";
                                        }
                                    }
                                }
                                /** @type {boolean} */
                                prettyPrinting = domain && "=" === val.charAt(1);
                                if (prettyPrinting) {
                                    /** @type {number} */
                                    data = parseInt(val.charAt(0) + "1", 10);
                                    val = val.substr(2);
                                    data *= parseFloat(val);
                                    id = val.replace(rCRLF, "");
                                } else {
                                    /** @type {number} */
                                    data = parseFloat(val);
                                    id = domain ? val.replace(rCRLF, "") : "";
                                }
                                if ("" === id) {
                                    id = key in obj ? obj[key] : label;
                                }
                                val = data || 0 === data ? (prettyPrinting ? data + result : data) + id : map[key];
                                if (label !== id) {
                                    if ("" !== id) {
                                        if (data || 0 === data) {
                                            if (result) {
                                                result = get(node, key, result, label);
                                                if ("%" === id) {
                                                    result /= get(node, key, 100, "%") / 100;
                                                    if (map.strictUnits !== true) {
                                                        /** @type {string} */
                                                        i = result + "%";
                                                    }
                                                } else {
                                                    if ("em" === id || ("rem" === id || ("vw" === id || "vh" === id))) {
                                                        result /= get(node, key, 1, id);
                                                    } else {
                                                        if ("px" !== id) {
                                                            data = get(node, key, data, id);
                                                            /** @type {string} */
                                                            id = "px";
                                                        }
                                                    }
                                                }
                                                if (prettyPrinting) {
                                                    if (data || 0 === data) {
                                                        /** @type {string} */
                                                        val = data + result + id;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (prettyPrinting) {
                                    data += result;
                                }
                                if (!result && 0 !== result || !data && 0 !== data) {
                                    if (void 0 !== text[key] && (val || val + "" != "NaN" && null != val)) {
                                        value = new Parser(text, key, data || (result || 0), 0, value, -1, key, false, 0, i, val);
                                        value.xs0 = "none" !== val || "display" !== key && key.indexOf("Style") === -1 ? val : i;
                                    } else {
                                        log("invalid " + key + " tween value: " + map[key]);
                                    }
                                } else {
                                    value = new Parser(text, key, result, data - result, value, 0, key, until !== false && ("px" === id || "zIndex" === key), 0, i, val);
                                    value.xs0 = id;
                                }
                            }
                        }
                    }
                    if (recurring) {
                        if (value) {
                            if (!value.plugin) {
                                /** @type {number} */
                                value.plugin = recurring;
                            }
                        }
                    }
                }
                return value;
            };
            /**
             * @param {number} v
             * @return {undefined}
             */
            p.setRatio = function(v) {
                var offset;
                var i;
                var left;
                var p = this._firstPT;
                /** @type {number} */
                var endOffset = 1E-6;
                if (1 !== v || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
                    if (v || (this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1E-6)) {
                        for (; p;) {
                            if (offset = p.c * v + p.s, p.r ? offset = Math.round(offset) : offset < endOffset && (offset > -endOffset && (offset = 0)), p.type) {
                                if (1 === p.type) {
                                    if (left = p.l, 2 === left) {
                                        p.t[p.p] = p.xs0 + offset + p.xs1 + p.xn1 + p.xs2;
                                    } else {
                                        if (3 === left) {
                                            p.t[p.p] = p.xs0 + offset + p.xs1 + p.xn1 + p.xs2 + p.xn2 + p.xs3;
                                        } else {
                                            if (4 === left) {
                                                p.t[p.p] = p.xs0 + offset + p.xs1 + p.xn1 + p.xs2 + p.xn2 + p.xs3 + p.xn3 + p.xs4;
                                            } else {
                                                if (5 === left) {
                                                    p.t[p.p] = p.xs0 + offset + p.xs1 + p.xn1 + p.xs2 + p.xn2 + p.xs3 + p.xn3 + p.xs4 + p.xn4 + p.xs5;
                                                } else {
                                                    i = p.xs0 + offset + p.xs1;
                                                    /** @type {number} */
                                                    left = 1;
                                                    for (; left < p.l; left++) {
                                                        i += p["xn" + left] + p["xs" + (left + 1)];
                                                    }
                                                    p.t[p.p] = i;
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (p.type === -1) {
                                        p.t[p.p] = p.xs0;
                                    } else {
                                        if (p.setRatio) {
                                            p.setRatio(v);
                                        }
                                    }
                                }
                            } else {
                                p.t[p.p] = offset + p.xs0;
                            }
                            p = p._next;
                        }
                    } else {
                        for (; p;) {
                            if (2 !== p.type) {
                                p.t[p.p] = p.b;
                            } else {
                                p.setRatio(v);
                            }
                            p = p._next;
                        }
                    }
                } else {
                    for (; p;) {
                        if (2 !== p.type) {
                            if (p.r && p.type !== -1) {
                                if (offset = Math.round(p.s + p.c), p.type) {
                                    if (1 === p.type) {
                                        left = p.l;
                                        i = p.xs0 + offset + p.xs1;
                                        /** @type {number} */
                                        left = 1;
                                        for (; left < p.l; left++) {
                                            i += p["xn" + left] + p["xs" + (left + 1)];
                                        }
                                        p.t[p.p] = i;
                                    }
                                } else {
                                    p.t[p.p] = offset + p.xs0;
                                }
                            } else {
                                p.t[p.p] = p.e;
                            }
                        } else {
                            p.setRatio(v);
                        }
                        p = p._next;
                    }
                }
            };
            /**
             * @param {boolean} recurring
             * @return {undefined}
             */
            p._enableTransforms = function(recurring) {
                this._transform = this._transform || callback(this._target, opts, true);
                /** @type {number} */
                this._transformType = this._transform.svg && info || !recurring && 3 !== this._transformType ? 2 : 3;
            };
            /**
             * @param {number} attr
             * @return {undefined}
             */
            var animation = function(attr) {
                this.t[this.p] = this.e;
                this.data._linkCSSP(this, this._next, null, true);
            };
            /**
             * @param {number} handler
             * @param {number} zIndex
             * @param {number} e
             * @return {undefined}
             */
            p._addLazySet = function(handler, zIndex, e) {
                var t = this._firstPT = new Parser(handler, zIndex, 0, 0, this._firstPT, 2);
                /** @type {number} */
                t.e = e;
                /** @type {function (number): undefined} */
                t.setRatio = animation;
                t.data = this;
            };
            /**
             * @param {?} pt
             * @param {Object} pt2
             * @param {Function} value
             * @param {boolean} dataAndEvents
             * @return {?}
             */
            p._linkCSSP = function(pt, pt2, value, dataAndEvents) {
                return pt && (pt2 && (pt2._prev = pt), pt._next && (pt._next._prev = pt._prev), pt._prev ? pt._prev._next = pt._next : this._firstPT === pt && (this._firstPT = pt._next, dataAndEvents = true), value ? value._next = pt : dataAndEvents || (null !== this._firstPT || (this._firstPT = pt)), pt._next = pt2, pt._prev = value), pt;
            };
            /**
             * @param {Object} b
             * @return {undefined}
             */
            p._mod = function(b) {
                var pt = this._firstPT;
                for (; pt;) {
                    if ("function" == typeof b[pt.p]) {
                        if (b[pt.p] === Math.round) {
                            /** @type {number} */
                            pt.r = 1;
                        }
                    }
                    pt = pt._next;
                }
            };
            /**
             * @param {Object} vars
             * @return {?}
             */
            p._kill = function(vars) {
                var pt;
                var key;
                var tween;
                /** @type {Object} */
                var json = vars;
                if (vars.autoAlpha || vars.alpha) {
                    json = {};
                    for (key in vars) {
                        json[key] = vars[key];
                    }
                    /** @type {number} */
                    json.opacity = 1;
                    if (json.autoAlpha) {
                        /** @type {number} */
                        json.visibility = 1;
                    }
                }
                if (vars.className) {
                    if (pt = this._classNamePT) {
                        tween = pt.xfirst;
                        if (tween && tween._prev) {
                            this._linkCSSP(tween._prev, pt._next, tween._prev._prev);
                        } else {
                            if (tween === this._firstPT) {
                                this._firstPT = pt._next;
                            }
                        }
                        if (pt._next) {
                            this._linkCSSP(pt._next, pt._next._next, tween._prev);
                        }
                        /** @type {null} */
                        this._classNamePT = null;
                    }
                }
                pt = this._firstPT;
                for (; pt;) {
                    if (pt.plugin) {
                        if (pt.plugin !== key) {
                            if (pt.plugin._kill) {
                                pt.plugin._kill(vars);
                                key = pt.plugin;
                            }
                        }
                    }
                    pt = pt._next;
                }
                return Sprite.prototype._kill.call(this, json);
            };
            /**
             * @param {Object} data
             * @param {Array} object
             * @param {Array} property
             * @return {undefined}
             */
            var add = function(data, object, property) {
                var result;
                var n;
                var camelKey;
                var type;
                if (data.slice) {
                    n = data.length;
                    for (; --n > -1;) {
                        add(data[n], object, property);
                    }
                } else {
                    result = data.childNodes;
                    n = result.length;
                    for (; --n > -1;) {
                        camelKey = result[n];
                        type = camelKey.type;
                        if (camelKey.style) {
                            object.push(render(camelKey));
                            if (property) {
                                property.push(camelKey);
                            }
                        }
                        if (!(1 !== type && (9 !== type && 11 !== type))) {
                            if (!!camelKey.childNodes.length) {
                                add(camelKey, object, property);
                            }
                        }
                    }
                }
            };
            return self.cascadeTo = function(arg, duration, vars) {
                var i;
                var g;
                var key;
                var fromVars;
                var that = TweenLite.to(arg, duration, vars);
                /** @type {Array} */
                var slices = [that];
                /** @type {Array} */
                var obj = [];
                /** @type {Array} */
                var which = [];
                /** @type {Array} */
                var all = [];
                var $cookies = TweenLite._internals.reservedProps;
                arg = that._targets || that.target;
                add(arg, obj, all);
                that.render(duration, true, true);
                add(arg, which);
                that.render(0, true, true);
                that._enabled(true);
                /** @type {number} */
                i = all.length;
                for (; --i > -1;) {
                    if (g = f(all[i], obj[i], which[i]), g.firstMPT) {
                        g = g.difs;
                        for (key in vars) {
                            if ($cookies[key]) {
                                g[key] = vars[key];
                            }
                        }
                        fromVars = {};
                        for (key in g) {
                            fromVars[key] = obj[i][key];
                        }
                        slices.push(TweenLite.fromTo(all[i], duration, fromVars, g));
                    }
                }
                return slices;
            }, Sprite.activate([self]), self;
        }, true);
        (function() {
            var origclass = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                /**
                 * @param {?} allBindingsAccessor
                 * @param {?} depMaps
                 * @param {?} tween
                 * @return {?}
                 */
                init: function(allBindingsAccessor, depMaps, tween) {
                    return this._tween = tween, true;
                }
            });
            /**
             * @param {Object} e
             * @return {undefined}
             */
            var next = function(e) {
                for (; e;) {
                    if (!e.f) {
                        if (!e.blob) {
                            /** @type {function (*): number} */
                            e.m = Math.round;
                        }
                    }
                    e = e._next;
                }
            };
            var p = origclass.prototype;
            /**
             * @return {?}
             */
            p._onInitAllProps = function() {
                var prop;
                var pt;
                var self;
                var tween = this._tween;
                var props = tween.vars.roundProps.join ? tween.vars.roundProps : tween.vars.roundProps.split(",");
                var i = props.length;
                var properties = {};
                var rpt = tween._propLookup.roundProps;
                for (; --i > -1;) {
                    /** @type {function (*): number} */
                    properties[props[i]] = Math.round;
                }
                i = props.length;
                for (; --i > -1;) {
                    prop = props[i];
                    pt = tween._firstPT;
                    for (; pt;) {
                        self = pt._next;
                        if (pt.pg) {
                            pt.t._mod(properties);
                        } else {
                            if (pt.n === prop) {
                                if (2 === pt.f && pt.t) {
                                    next(pt.t._firstPT);
                                } else {
                                    this._add(pt.t, prop, pt.s, pt.c);
                                    if (self) {
                                        self._prev = pt._prev;
                                    }
                                    if (pt._prev) {
                                        pt._prev._next = self;
                                    } else {
                                        if (tween._firstPT === pt) {
                                            tween._firstPT = self;
                                        }
                                    }
                                    /** @type {null} */
                                    pt._next = pt._prev = null;
                                    tween._propLookup[prop] = rpt;
                                }
                            }
                        }
                        pt = self;
                    }
                }
                return false;
            };
            /**
             * @param {Object} target
             * @param {string} camelKey
             * @param {string} s
             * @param {string} c
             * @return {undefined}
             */
            p._add = function(target, camelKey, s, c) {
                this._addTween(target, camelKey, s, s + c, camelKey, Math.round);
                this._overwriteProps.push(camelKey);
            };
        })();
        (function() {
            _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.0",
                /**
                 * @param {HTMLElement} options
                 * @param {Object} tween
                 * @param {?} allBindingsAccessor
                 * @param {?} view
                 * @return {?}
                 */
                init: function(options, tween, allBindingsAccessor, view) {
                    var camelKey;
                    var fn;
                    if ("function" != typeof options.setAttribute) {
                        return false;
                    }
                    for (camelKey in tween) {
                        fn = tween[camelKey];
                        if ("function" == typeof fn) {
                            fn = fn(view, options);
                        }
                        this._addTween(options, "setAttribute", options.getAttribute(camelKey) + "", fn + "", camelKey, false, camelKey);
                        this._overwriteProps.push(camelKey);
                    }
                    return true;
                }
            });
        })();
        /** @type {boolean} */
        _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.0",
            API: 2,
            /**
             * @param {Object} target
             * @param {Object} opts
             * @param {?} allBindingsAccessor
             * @param {?} el
             * @return {?}
             */
            init: function(target, opts, allBindingsAccessor, el) {
                if ("object" != typeof opts) {
                    opts = {
                        rotation: opts
                    };
                }
                this.finals = {};
                var camelKey;
                var v;
                var start;
                var value;
                var dif;
                var parts;
                /** @type {number} */
                var cap = opts.useRadians === true ? 2 * Math.PI : 360;
                /** @type {number} */
                var min = 1E-6;
                for (camelKey in opts) {
                    if ("useRadians" !== camelKey) {
                        value = opts[camelKey];
                        if ("function" == typeof value) {
                            value = value(el, target);
                        }
                        /** @type {Array.<string>} */
                        parts = (value + "").split("_");
                        /** @type {string} */
                        v = parts[0];
                        /** @type {number} */
                        start = parseFloat("function" != typeof target[camelKey] ? target[camelKey] : target[camelKey.indexOf("set") || "function" != typeof target["get" + camelKey.substr(3)] ? camelKey : "get" + camelKey.substr(3)]());
                        /** @type {number} */
                        value = this.finals[camelKey] = "string" == typeof v && "=" === v.charAt(1) ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
                        /** @type {number} */
                        dif = value - start;
                        if (parts.length) {
                            /** @type {string} */
                            v = parts.join("_");
                            if (v.indexOf("short") !== -1) {
                                dif %= cap;
                                if (dif !== dif % (cap / 2)) {
                                    /** @type {number} */
                                    dif = dif < 0 ? dif + cap : dif - cap;
                                }
                            }
                            if (v.indexOf("_cw") !== -1 && dif < 0) {
                                /** @type {number} */
                                dif = (dif + 9999999999 * cap) % cap - (dif / cap | 0) * cap;
                            } else {
                                if (v.indexOf("ccw") !== -1) {
                                    if (dif > 0) {
                                        /** @type {number} */
                                        dif = (dif - 9999999999 * cap) % cap - (dif / cap | 0) * cap;
                                    }
                                }
                            }
                        }
                        if (dif > min || dif < -min) {
                            this._addTween(target, camelKey, start, start + dif, camelKey);
                            this._overwriteProps.push(camelKey);
                        }
                    }
                }
                return true;
            },
            /**
             * @param {Object} second
             * @return {undefined}
             */
            set: function(second) {
                var pt;
                if (1 !== second) {
                    this._super.setRatio.call(this, second);
                } else {
                    pt = this._firstPT;
                    for (; pt;) {
                        if (pt.f) {
                            pt.t[pt.p](this.finals[pt.p]);
                        } else {
                            pt.t[pt.p] = this.finals[pt.p];
                        }
                        pt = pt._next;
                    }
                }
            }
        })._autoCSS = true;
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
            var SteppedEase;
            var RoughEase;
            var _createElastic;
            var w = _gsScope.GreenSockGlobals || _gsScope;
            var gs = w.com.greensock;
            /** @type {number} */
            var _p2 = 2 * Math.PI;
            /** @type {number} */
            var HALF_PI = Math.PI / 2;
            var _class = gs._class;
            /**
             * @param {string} n
             * @param {Function} f
             * @return {?}
             */
            var _create = function(n, f) {
                var C = _class("easing." + n, function() {}, true);
                var p = C.prototype = new Ease;
                return p.constructor = C, p.getRatio = f, C;
            };
            var _easeReg = Ease.register || function() {};
            /**
             * @param {string} name
             * @param {?} EaseOut
             * @param {?} EaseIn
             * @param {?} EaseInOut
             * @param {?} s
             * @return {?}
             */
            var _wrap = function(name, EaseOut, EaseIn, EaseInOut, s) {
                var C = _class("easing." + name, {
                    easeOut: new EaseOut,
                    easeIn: new EaseIn,
                    easeInOut: new EaseInOut
                }, true);
                return _easeReg(C, name), C;
            };
            /**
             * @param {Object} time
             * @param {string} value
             * @param {Object} next
             * @return {undefined}
             */
            var EasePoint = function(time, value, next) {
                /** @type {Object} */
                this.t = time;
                /** @type {string} */
                this.v = value;
                if (next) {
                    /** @type {Object} */
                    this.next = next;
                    next.prev = this;
                    /** @type {number} */
                    this.c = next.v - value;
                    /** @type {number} */
                    this.gap = next.t - time;
                }
            };
            /**
             * @param {string} n
             * @param {Function} f
             * @return {?}
             */
            var _createBack = function(n, f) {
                var C = _class("easing." + n, function(overshoot) {
                    this._p1 = overshoot || 0 === overshoot ? overshoot : 1.70158;
                    /** @type {number} */
                    this._p2 = 1.525 * this._p1;
                }, true);
                var p = C.prototype = new Ease;
                return p.constructor = C, p.getRatio = f, p.config = function(cfg) {
                    return new C(cfg);
                }, C;
            };
            var Back = _wrap("Back", _createBack("BackOut", function(p) {
                return (p -= 1) * p * ((this._p1 + 1) * p + this._p1) + 1;
            }), _createBack("BackIn", function(p) {
                return p * p * ((this._p1 + 1) * p - this._p1);
            }), _createBack("BackInOut", function(p) {
                return (p *= 2) < 1 ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
            }));
            var SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
                power = power || 0 === power ? power : 0.7;
                if (null == linearRatio) {
                    /** @type {number} */
                    linearRatio = 0.7;
                } else {
                    if (linearRatio > 1) {
                        /** @type {number} */
                        linearRatio = 1;
                    }
                }
                this._p = 1 !== linearRatio ? power : 0;
                /** @type {number} */
                this._p1 = (1 - linearRatio) / 2;
                /** @type {number} */
                this._p2 = linearRatio;
                this._p3 = this._p1 + this._p2;
                /** @type {boolean} */
                this._calcEnd = yoyoMode === true;
            }, true);
            var p = SlowMo.prototype = new Ease;
            return p.constructor = SlowMo, p.getRatio = function(p) {
                var r = p + (0.5 - p) * this._p;
                return p < this._p1 ? this._calcEnd ? 1 - (p = 1 - p / this._p1) * p : r - (p = 1 - p / this._p1) * p * p * p * r : p > this._p3 ? this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + (p - r) * (p = (p - this._p3) / this._p1) * p * p * p : this._calcEnd ? 1 : r;
            }, SlowMo.ease = new SlowMo(0.7, 0.7), p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
                return new SlowMo(linearRatio, power, yoyoMode);
            }, SteppedEase = _class("easing.SteppedEase", function(steps) {
                steps = steps || 1;
                /** @type {number} */
                this._p1 = 1 / steps;
                this._p2 = steps + 1;
            }, true), p = SteppedEase.prototype = new Ease, p.constructor = SteppedEase, p.getRatio = function(recurring) {
                return recurring < 0 ? recurring = 0 : recurring >= 1 && (recurring = 0.999999999), (this._p2 * recurring >> 0) * this._p1;
            }, p.config = SteppedEase.config = function(steps) {
                return new SteppedEase(steps);
            }, RoughEase = _class("easing.RoughEase", function(vars) {
                vars = vars || {};
                var x;
                var y;
                var scale;
                var z;
                var obj;
                var pnt;
                var a = vars.taper || "none";
                /** @type {Array} */
                var res = [];
                /** @type {number} */
                var resLength = 0;
                /** @type {number} */
                var len = 0 | (vars.points || 20);
                /** @type {number} */
                var i = len;
                /** @type {boolean} */
                var randomize = vars.randomize !== false;
                /** @type {boolean} */
                var m = vars.clamp === true;
                var template = vars.template instanceof Ease ? vars.template : null;
                /** @type {number} */
                var diffCosAngle = "number" == typeof vars.strength ? 0.4 * vars.strength : 0.4;
                for (; --i > -1;) {
                    /** @type {number} */
                    x = randomize ? Math.random() : 1 / len * i;
                    y = template ? template.getRatio(x) : x;
                    if ("none" === a) {
                        /** @type {number} */
                        scale = diffCosAngle;
                    } else {
                        if ("out" === a) {
                            /** @type {number} */
                            z = 1 - x;
                            /** @type {number} */
                            scale = z * z * diffCosAngle;
                        } else {
                            if ("in" === a) {
                                /** @type {number} */
                                scale = x * x * diffCosAngle;
                            } else {
                                if (x < 0.5) {
                                    /** @type {number} */
                                    z = 2 * x;
                                    /** @type {number} */
                                    scale = z * z * 0.5 * diffCosAngle;
                                } else {
                                    /** @type {number} */
                                    z = 2 * (1 - x);
                                    /** @type {number} */
                                    scale = z * z * 0.5 * diffCosAngle;
                                }
                            }
                        }
                    }
                    if (randomize) {
                        y += Math.random() * scale - 0.5 * scale;
                    } else {
                        if (i % 2) {
                            y += 0.5 * scale;
                        } else {
                            y -= 0.5 * scale;
                        }
                    }
                    if (m) {
                        if (y > 1) {
                            /** @type {number} */
                            y = 1;
                        } else {
                            if (y < 0) {
                                /** @type {number} */
                                y = 0;
                            }
                        }
                    }
                    res[resLength++] = {
                        x: x,
                        y: y
                    };
                }
                res.sort(function(a, b) {
                    return a.x - b.x;
                });
                pnt = new EasePoint(1, 1, null);
                /** @type {number} */
                i = len;
                for (; --i > -1;) {
                    obj = res[i];
                    pnt = new EasePoint(obj.x, obj.y, pnt);
                }
                this._prev = new EasePoint(0, 0, 0 !== pnt.t ? pnt : pnt.next);
            }, true), p = RoughEase.prototype = new Ease, p.constructor = RoughEase, p.getRatio = function(p) {
                var pnt = this._prev;
                if (p > pnt.t) {
                    for (; pnt.next && p >= pnt.t;) {
                        pnt = pnt.next;
                    }
                    pnt = pnt.prev;
                } else {
                    for (; pnt.prev && p <= pnt.t;) {
                        pnt = pnt.prev;
                    }
                }
                return this._prev = pnt, pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
            }, p.config = function(vars) {
                return new RoughEase(vars);
            }, RoughEase.ease = new RoughEase, _wrap("Bounce", _create("BounceOut", function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }), _create("BounceIn", function(ratio) {
                return (ratio = 1 - ratio) < 1 / 2.75 ? 1 - 7.5625 * ratio * ratio : ratio < 2 / 2.75 ? 1 - (7.5625 * (ratio -= 1.5 / 2.75) * ratio + 0.75) : ratio < 2.5 / 2.75 ? 1 - (7.5625 * (ratio -= 2.25 / 2.75) * ratio + 0.9375) : 1 - (7.5625 * (ratio -= 2.625 / 2.75) * ratio + 0.984375);
            }), _create("BounceInOut", function(number) {
                /** @type {boolean} */
                var neg = number < 0.5;
                return number = neg ? 1 - 2 * number : 2 * number - 1, number = number < 1 / 2.75 ? 7.5625 * number * number : number < 2 / 2.75 ? 7.5625 * (number -= 1.5 / 2.75) * number + 0.75 : number < 2.5 / 2.75 ? 7.5625 * (number -= 2.25 / 2.75) * number + 0.9375 : 7.5625 * (number -= 2.625 / 2.75) * number + 0.984375, neg ? 0.5 * (1 - number) : 0.5 * number + 0.5;
            })), _wrap("Circ", _create("CircOut", function(dataAndEvents) {
                return Math.sqrt(1 - (dataAndEvents -= 1) * dataAndEvents);
            }), _create("CircIn", function(m3) {
                return -(Math.sqrt(1 - m3 * m3) - 1);
            }), _create("CircInOut", function(durationFraction) {
                return (durationFraction *= 2) < 1 ? -0.5 * (Math.sqrt(1 - durationFraction * durationFraction) - 1) : 0.5 * (Math.sqrt(1 - (durationFraction -= 2) * durationFraction) + 1);
            })), _createElastic = function(n, f, opt_attributes) {
                var C = _class("easing." + n, function(n, dataAndEvents) {
                    this._p1 = n >= 1 ? n : 1;
                    /** @type {number} */
                    this._p2 = (dataAndEvents || opt_attributes) / (n < 1 ? n : 1);
                    /** @type {number} */
                    this._p3 = this._p2 / _p2 * (Math.asin(1 / this._p1) || 0);
                    /** @type {number} */
                    this._p2 = _p2 / this._p2;
                }, true);
                var p = C.prototype = new Ease;
                return p.constructor = C, p.getRatio = f, p.config = function(cfg, opt) {
                    return new C(cfg, opt);
                }, C;
            }, _wrap("Elastic", _createElastic("ElasticOut", function(p) {
                return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
            }, 0.3), _createElastic("ElasticIn", function(dataAndEvents) {
                return -(this._p1 * Math.pow(2, 10 * (dataAndEvents -= 1)) * Math.sin((dataAndEvents - this._p3) * this._p2));
            }, 0.3), _createElastic("ElasticInOut", function(dataAndEvents) {
                return (dataAndEvents *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (dataAndEvents -= 1)) * Math.sin((dataAndEvents - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (dataAndEvents -= 1)) * Math.sin((dataAndEvents - this._p3) * this._p2) * 0.5 + 1;
            }, 0.45)), _wrap("Expo", _create("ExpoOut", function(k) {
                return 1 - Math.pow(2, -10 * k);
            }), _create("ExpoIn", function(dataAndEvents) {
                return Math.pow(2, 10 * (dataAndEvents - 1)) - 0.001;
            }), _create("ExpoInOut", function(dataAndEvents) {
                return (dataAndEvents *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (dataAndEvents - 1)) : 0.5 * (2 - Math.pow(2, -10 * (dataAndEvents - 1)));
            })), _wrap("Sine", _create("SineOut", function(t) {
                return Math.sin(t * HALF_PI);
            }), _create("SineIn", function(t) {
                return -Math.cos(t * HALF_PI) + 1;
            }), _create("SineInOut", function(p) {
                return -0.5 * (Math.cos(Math.PI * p) - 1);
            })), _class("easing.EaseLookup", {
                /**
                 * @param {string} s
                 * @return {?}
                 */
                find: function(s) {
                    return Ease.map[s];
                }
            }, true), _easeReg(w.SlowMo, "SlowMo", "ease,"), _easeReg(RoughEase, "RoughEase", "ease,"), _easeReg(SteppedEase, "SteppedEase", "ease,"), Back;
        }, true);
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(win, key) {
        var data = {};
        var _globals = win.GreenSockGlobals = win.GreenSockGlobals || win;
        if (!_globals.TweenLite) {
            var a;
            var i;
            var self;
            var _ticker;
            var l;
            /**
             * @param {string} ns
             * @return {?}
             */
            var _namespace = function(ns) {
                var i;
                var codeSegments = ns.split(".");
                var p = _globals;
                /** @type {number} */
                i = 0;
                for (; i < codeSegments.length; i++) {
                    p[codeSegments[i]] = p = p[codeSegments[i]] || {};
                }
                return p;
            };
            var gs = _namespace("com.greensock");
            /** @type {number} */
            var _tinyNum = 1E-10;
            /**
             * @param {string} data
             * @return {?}
             */
            var flatten = function(data) {
                var j;
                /** @type {Array} */
                var result = [];
                var l = data.length;
                /** @type {number} */
                j = 0;
                for (; j !== l; result.push(data[j++])) {}
                return result;
            };
            /**
             * @return {undefined}
             */
            var p = function() {};
            var _isArray = function() {
                /** @type {function (this:*): string} */
                var objectToString = Object.prototype.toString;
                /** @type {string} */
                var compare = objectToString.call([]);
                return function(a) {
                    return null != a && (a instanceof Array || "object" == typeof a && (!!a.push && objectToString.call(a) === compare));
                };
            }();
            var _defLookup = {};
            /**
             * @param {string} ns
             * @param {Arguments} dependencies
             * @param {Function} func
             * @param {?} global
             * @return {undefined}
             */
            var Definition = function(ns, dependencies, func, global) {
                this.sc = _defLookup[ns] ? _defLookup[ns].sc : [];
                _defLookup[ns] = this;
                /** @type {null} */
                this.gsClass = null;
                /** @type {Function} */
                this.func = func;
                /** @type {Array} */
                var checkSet = [];
                /**
                 * @param {boolean} dataAndEvents
                 * @return {undefined}
                 */
                this.check = function(dataAndEvents) {
                    var cur;
                    var namespaces;
                    var name;
                    var value;
                    var g;
                    var i = dependencies.length;
                    var j = i;
                    for (; --i > -1;) {
                        if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
                            checkSet[i] = cur.gsClass;
                            j--;
                        } else {
                            if (dataAndEvents) {
                                cur.sc.push(this);
                            }
                        }
                    }
                    if (0 === j && func) {
                        if (namespaces = ("com.greensock." + ns).split("."), name = namespaces.pop(), value = _namespace(namespaces.join("."))[name] = this.gsClass = func.apply(func, checkSet), global) {
                            if (_globals[name] = data[name] = value, g = "undefined" != typeof module && module.exports, !g && ("function" == typeof define && define.amd)) {
                                define((win.GreenSockAMDPath ? win.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() {
                                    return value;
                                });
                            } else {
                                if (g) {
                                    if (ns === key) {
                                        module.exports = data[key] = value;
                                        for (i in data) {
                                            value[i] = data[i];
                                        }
                                    } else {
                                        if (data[key]) {
                                            data[key][name] = value;
                                        }
                                    }
                                }
                            }
                        }
                        /** @type {number} */
                        i = 0;
                        for (; i < this.sc.length; i++) {
                            this.sc[i].check();
                        }
                    }
                };
                this.check(true);
            };
            /** @type {function (string, Array, Function, boolean): ?} */
            var _gsDefine = win._gsDefine = function(ns, opt_attributes, func, deepDataAndEvents) {
                return new Definition(ns, opt_attributes, func, deepDataAndEvents);
            };
            /** @type {function (string, Function, boolean): ?} */
            var _class = gs._class = function(ns, func, deepDataAndEvents) {
                return func = func || function() {}, _gsDefine(ns, [], function() {
                    return func;
                }, deepDataAndEvents), func;
            };
            _gsDefine.globals = _globals;
            /** @type {Array} */
            var _baseParams = [0, 0, 1, 1];
            var Ease = _class("easing.Ease", function(func, extraParams, dataAndEvents, power) {
                /** @type {Function} */
                this._func = func;
                this._type = dataAndEvents || 0;
                this._power = power || 0;
                /** @type {Array} */
                this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
            }, true);
            var _easeMap = Ease.map = {};
            /** @type {function (?, string, string, boolean): undefined} */
            var _easeReg = Ease.register = function(ease, names, types, create) {
                var e;
                var name;
                var j;
                var type;
                var tokenized = names.split(",");
                var index = tokenized.length;
                var events = (types || "easeIn,easeOut,easeInOut").split(",");
                for (; --index > -1;) {
                    name = tokenized[index];
                    e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
                    j = events.length;
                    for (; --j > -1;) {
                        type = events[j];
                        _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease;
                    }
                }
            };
            self = Ease.prototype;
            /** @type {boolean} */
            self._calcEnd = false;
            /**
             * @param {number} recurring
             * @return {?}
             */
            self.getRatio = function(recurring) {
                if (this._func) {
                    return this._params[0] = recurring, this._func.apply(null, this._params);
                }
                var x = this._type;
                var pw = this._power;
                var r = 1 === x ? 1 - recurring : 2 === x ? recurring : recurring < 0.5 ? 2 * recurring : 2 * (1 - recurring);
                return 1 === pw ? r *= r : 2 === pw ? r *= r * r : 3 === pw ? r *= r * r * r : 4 === pw && (r *= r * r * r * r), 1 === x ? 1 - r : 2 === x ? r : recurring < 0.5 ? r / 2 : 1 - r / 2;
            };
            /** @type {Array} */
            a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
            /** @type {number} */
            i = a.length;
            for (; --i > -1;) {
                self = a[i] + ",Power" + i;
                _easeReg(new Ease(null, null, 1, i), self, "easeOut", true);
                _easeReg(new Ease(null, null, 2, i), self, "easeIn" + (0 === i ? ",easeNone" : ""));
                _easeReg(new Ease(null, null, 3, i), self, "easeInOut");
            }
            _easeMap.linear = gs.easing.Linear.easeIn;
            _easeMap.swing = gs.easing.Quad.easeInOut;
            var EventDispatcher = _class("events.EventDispatcher", function(dataAndEvents) {
                this._listeners = {};
                this._eventTarget = dataAndEvents || this;
            });
            self = EventDispatcher.prototype;
            /**
             * @param {string} type
             * @param {Function} callback
             * @param {boolean} recurring
             * @param {?} useParam
             * @param {number} priority
             * @return {undefined}
             */
            self.addEventListener = function(type, callback, recurring, useParam, priority) {
                priority = priority || 0;
                var listener;
                var i;
                var list = this._listeners[type];
                /** @type {number} */
                var pos = 0;
                if (!(this !== _ticker)) {
                    if (!l) {
                        _ticker.wake();
                    }
                }
                if (null == list) {
                    /** @type {Array} */
                    this._listeners[type] = list = [];
                }
                i = list.length;
                for (; --i > -1;) {
                    listener = list[i];
                    if (listener.c === callback && listener.s === recurring) {
                        list.splice(i, 1);
                    } else {
                        if (0 === pos) {
                            if (listener.pr < priority) {
                                pos = i + 1;
                            }
                        }
                    }
                }
                list.splice(pos, 0, {
                    /** @type {Function} */
                    c: callback,
                    s: recurring,
                    up: useParam,
                    pr: priority
                });
            };
            /**
             * @param {string} type
             * @param {?} listener
             * @return {?}
             */
            self.removeEventListener = function(type, listener) {
                var i;
                var list = this._listeners[type];
                if (list) {
                    i = list.length;
                    for (; --i > -1;) {
                        if (list[i].c === listener) {
                            return void list.splice(i, 1);
                        }
                    }
                }
            };
            /**
             * @param {string} type
             * @return {undefined}
             */
            self.dispatchEvent = function(type) {
                var i;
                var t;
                var listener;
                var listeners = this._listeners[type];
                if (listeners) {
                    i = listeners.length;
                    if (i > 1) {
                        listeners = listeners.slice(0);
                    }
                    t = this._eventTarget;
                    for (; --i > -1;) {
                        listener = listeners[i];
                        if (listener) {
                            if (listener.up) {
                                listener.c.call(listener.s || t, {
                                    type: type,
                                    target: t
                                });
                            } else {
                                listener.c.call(listener.s || t);
                            }
                        }
                    }
                }
            };
            var raf = win.requestAnimationFrame;
            var _cancelAnimFrame = win.cancelAnimationFrame;
            /** @type {function (): number} */
            var _getTime = Date.now || function() {
                return (new Date).getTime();
            };
            /** @type {number} */
            var _lastUpdate = _getTime();
            /** @type {Array} */
            a = ["ms", "moz", "webkit", "o"];
            /** @type {number} */
            i = a.length;
            for (; --i > -1 && !raf;) {
                raf = win[a[i] + "RequestAnimationFrame"];
                _cancelAnimFrame = win[a[i] + "CancelAnimationFrame"] || win[a[i] + "CancelRequestAnimationFrame"];
            }
            _class("Ticker", function(result, dataAndEvents) {
                var list;
                var right;
                var pdataOld;
                var _gap;
                var _nextTime;
                var _self = this;
                /** @type {number} */
                var _startTime = _getTime();
                /** @type {(boolean|string)} */
                var array = !(dataAndEvents === false || !raf) && "auto";
                /** @type {number} */
                var max = 500;
                /** @type {number} */
                var length = 33;
                /** @type {string} */
                var eventType = "tick";
                /**
                 * @param {boolean} expectedNumberOfNonCommentArgs
                 * @return {undefined}
                 */
                var camelKey = function(expectedNumberOfNonCommentArgs) {
                    var overlap;
                    var a;
                    /** @type {number} */
                    var value = _getTime() - _lastUpdate;
                    if (value > max) {
                        _startTime += value - length;
                    }
                    _lastUpdate += value;
                    /** @type {number} */
                    _self.time = (_lastUpdate - _startTime) / 1E3;
                    /** @type {number} */
                    overlap = _self.time - _nextTime;
                    if (!list || (overlap > 0 || expectedNumberOfNonCommentArgs === true)) {
                        _self.frame++;
                        _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
                        /** @type {boolean} */
                        a = true;
                    }
                    if (expectedNumberOfNonCommentArgs !== true) {
                        pdataOld = right(camelKey);
                    }
                    if (a) {
                        _self.dispatchEvent(eventType);
                    }
                };
                EventDispatcher.call(_self);
                /** @type {number} */
                _self.time = _self.frame = 0;
                /**
                 * @return {undefined}
                 */
                _self.tick = function() {
                    camelKey(true);
                };
                /**
                 * @param {number} dataAndEvents
                 * @param {?} time
                 * @return {undefined}
                 */
                _self.lagSmoothing = function(dataAndEvents, time) {
                    max = dataAndEvents || 1 / _tinyNum;
                    /** @type {number} */
                    length = Math.min(time, max, 0);
                };
                /**
                 * @return {undefined}
                 */
                _self.sleep = function() {
                    if (null != pdataOld) {
                        if (array && _cancelAnimFrame) {
                            _cancelAnimFrame(pdataOld);
                        } else {
                            clearTimeout(pdataOld);
                        }
                        /** @type {function (): undefined} */
                        right = p;
                        /** @type {null} */
                        pdataOld = null;
                        if (_self === _ticker) {
                            /** @type {boolean} */
                            l = false;
                        }
                    }
                };
                /**
                 * @param {?} data
                 * @return {undefined}
                 */
                _self.wake = function(data) {
                    if (null !== pdataOld) {
                        _self.sleep();
                    } else {
                        if (data) {
                            _startTime += -_lastUpdate + (_lastUpdate = _getTime());
                        } else {
                            if (_self.frame > 10) {
                                /** @type {number} */
                                _lastUpdate = _getTime() - max + 5;
                            }
                        }
                    }
                    right = 0 === list ? p : array && raf ? raf : function(value) {
                        return setTimeout(value, 1E3 * (_nextTime - _self.time) + 1 | 0);
                    };
                    if (_self === _ticker) {
                        /** @type {boolean} */
                        l = true;
                    }
                    camelKey(2);
                };
                /**
                 * @param {number} items
                 * @return {?}
                 */
                _self.fps = function(items) {
                    return arguments.length ? (list = items, _gap = 1 / (list || 60), _nextTime = this.time + _gap, void _self.wake()) : list;
                };
                /**
                 * @param {(boolean|string)} value
                 * @return {?}
                 */
                _self.useRAF = function(value) {
                    return arguments.length ? (_self.sleep(), array = value, void _self.fps(list)) : array;
                };
                _self.fps(result);
                setTimeout(function() {
                    if ("auto" === array) {
                        if (_self.frame < 5) {
                            if ("hidden" !== document.visibilityState) {
                                _self.useRAF(false);
                            }
                        }
                    }
                }, 1500);
            });
            self = gs.Ticker.prototype = new gs.events.EventDispatcher;
            self.constructor = gs.Ticker;
            var Animation = _class("core.Animation", function(dataAndEvents, vars) {
                if (this.vars = vars = vars || {}, this._duration = this._totalDuration = dataAndEvents || 0, this._delay = Number(vars.delay) || 0, this._timeScale = 1, this._active = vars.immediateRender === true, this.data = vars.data, this._reversed = vars.reversed === true, _rootTimeline) {
                    if (!l) {
                        _ticker.wake();
                    }
                    var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
                    tl.add(this, tl._time);
                    if (this.vars.paused) {
                        this.paused(true);
                    }
                }
            });
            _ticker = Animation.ticker = new gs.Ticker;
            self = Animation.prototype;
            /** @type {boolean} */
            self._dirty = self._gc = self._initted = self._paused = false;
            /** @type {number} */
            self._totalTime = self._time = 0;
            /** @type {number} */
            self._rawPrevTime = -1;
            /** @type {null} */
            self._next = self._last = self._onUpdate = self._timeline = self.timeline = null;
            /** @type {boolean} */
            self._paused = false;
            /**
             * @return {undefined}
             */
            var _checkTimeout = function() {
                if (l) {
                    if (_getTime() - _lastUpdate > 2E3) {
                        _ticker.wake();
                    }
                }
                setTimeout(_checkTimeout, 2E3);
            };
            _checkTimeout();
            /**
             * @param {string} position
             * @param {boolean} suppressEvents
             * @return {?}
             */
            self.play = function(position, suppressEvents) {
                return null != position && this.seek(position, suppressEvents), this.reversed(false).paused(false);
            };
            /**
             * @param {string} position
             * @param {boolean} suppressEvents
             * @return {?}
             */
            self.pause = function(position, suppressEvents) {
                return null != position && this.seek(position, suppressEvents), this.paused(true);
            };
            /**
             * @param {string} position
             * @param {boolean} suppressEvents
             * @return {?}
             */
            self.resume = function(position, suppressEvents) {
                return null != position && this.seek(position, suppressEvents), this.paused(false);
            };
            /**
             * @param {string} position
             * @param {boolean} suppressEvents
             * @return {?}
             */
            self.seek = function(position, suppressEvents) {
                return this.totalTime(Number(position), suppressEvents !== false);
            };
            /**
             * @param {boolean} includeDelay
             * @param {boolean} suppressEvents
             * @return {?}
             */
            self.restart = function(includeDelay, suppressEvents) {
                return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== false, true);
            };
            /**
             * @param {string} from
             * @param {boolean} suppressEvents
             * @return {?}
             */
            self.reverse = function(from, suppressEvents) {
                return null != from && this.seek(from || this.totalDuration(), suppressEvents), this.reversed(true).paused(false);
            };
            /**
             * @param {number} time
             * @param {boolean} recurring
             * @param {boolean} opt_isDefault
             * @return {undefined}
             */
            self.render = function(time, recurring, opt_isDefault) {};
            /**
             * @return {?}
             */
            self.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = false, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(true), this;
            };
            /**
             * @return {?}
             */
            self.isActive = function() {
                var rawTime;
                var tl = this._timeline;
                var startTime = this._startTime;
                return !tl || !this._gc && (!this._paused && (tl.isActive() && ((rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale)));
            };
            /**
             * @param {boolean} recurring
             * @param {boolean} mayParseLabeledStatementInstead
             * @return {?}
             */
            self._enabled = function(recurring, mayParseLabeledStatementInstead) {
                return l || _ticker.wake(), this._gc = !recurring, this._active = this.isActive(), mayParseLabeledStatementInstead !== true && (recurring && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !recurring && (this.timeline && this._timeline._remove(this, true))), false;
            };
            /**
             * @param {Object} vars
             * @param {?} thisObj
             * @return {?}
             */
            self._kill = function(vars, thisObj) {
                return this._enabled(false, false);
            };
            /**
             * @param {Object} vars
             * @param {?} target
             * @return {?}
             */
            self.kill = function(vars, target) {
                return this._kill(vars, target), this;
            };
            /**
             * @param {boolean} recurring
             * @return {?}
             */
            self._uncache = function(recurring) {
                var tween = recurring ? this : this.timeline;
                for (; tween;) {
                    /** @type {boolean} */
                    tween._dirty = true;
                    tween = tween.timeline;
                }
                return this;
            };
            /**
             * @param {Arguments} params
             * @return {?}
             */
            self._swapSelfInParams = function(params) {
                var i = params.length;
                var copy = params.concat();
                for (; --i > -1;) {
                    if ("{self}" === params[i]) {
                        copy[i] = this;
                    }
                }
                return copy;
            };
            /**
             * @param {string} callback
             * @return {undefined}
             */
            self._callback = function(callback) {
                var v = this.vars;
                var fn = v[callback];
                var items = v[callback + "Params"];
                var _this = v[callback + "Scope"] || (v.callbackScope || this);
                var max = items ? items.length : 0;
                switch (max) {
                    case 0:
                        fn.call(_this);
                        break;
                    case 1:
                        fn.call(_this, items[0]);
                        break;
                    case 2:
                        fn.call(_this, items[0], items[1]);
                        break;
                    default:
                        fn.apply(_this, items);
                }
            };
            /**
             * @param {string} type
             * @param {number} callback
             * @param {Array} params
             * @param {?} scope
             * @return {?}
             */
            self.eventCallback = function(type, callback, params, scope) {
                if ("on" === (type || "").substr(0, 2)) {
                    var v = this.vars;
                    if (1 === arguments.length) {
                        return v[type];
                    }
                    if (null == callback) {
                        delete v[type];
                    } else {
                        /** @type {number} */
                        v[type] = callback;
                        v[type + "Params"] = _isArray(params) && params.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(params) : params;
                        v[type + "Scope"] = scope;
                    }
                    if ("onUpdate" === type) {
                        /** @type {number} */
                        this._onUpdate = callback;
                    }
                }
                return this;
            };
            /**
             * @param {number} value
             * @return {?}
             */
            self.delay = function(value) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + value - this._delay), this._delay = value, this) : this._delay;
            };
            /**
             * @param {number} value
             * @return {?}
             */
            self.duration = function(value) {
                return arguments.length ? (this._duration = this._totalDuration = value, this._uncache(true), this._timeline.smoothChildTiming && (this._time > 0 && (this._time < this._duration && (0 !== value && this.totalTime(this._totalTime * (value / this._duration), true)))), this) : (this._dirty = false, this._duration);
            };
            /**
             * @param {Object} selector
             * @return {?}
             */
            self.totalDuration = function(selector) {
                return this._dirty = false, arguments.length ? this.duration(selector) : this._totalDuration;
            };
            /**
             * @param {string} value
             * @param {?} tests
             * @return {?}
             */
            self.time = function(value, tests) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(value > this._duration ? this._duration : value, tests)) : this._time;
            };
            /**
             * @param {number} time
             * @param {boolean} recurring
             * @param {boolean} dataAndEvents
             * @return {?}
             */
            self.totalTime = function(time, recurring, dataAndEvents) {
                if (l || _ticker.wake(), !arguments.length) {
                    return this._totalTime;
                }
                if (this._timeline) {
                    if (time < 0 && (!dataAndEvents && (time += this.totalDuration())), this._timeline.smoothChildTiming) {
                        if (this._dirty) {
                            this.totalDuration();
                        }
                        var totalDuration = this._totalDuration;
                        var tl = this._timeline;
                        if (time > totalDuration && (!dataAndEvents && (time = totalDuration)), this._startTime = (this._paused ? this._pauseTime : tl._time) - (this._reversed ? totalDuration - time : time) / this._timeScale, tl._dirty || this._uncache(false), tl._timeline) {
                            for (; tl._timeline;) {
                                if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
                                    tl.totalTime(tl._totalTime, true);
                                }
                                tl = tl._timeline;
                            }
                        }
                    }
                    if (this._gc) {
                        this._enabled(true, false);
                    }
                    if (!(this._totalTime === time && 0 !== this._duration)) {
                        if (tags.length) {
                            after();
                        }
                        this.render(time, recurring, false);
                        if (tags.length) {
                            after();
                        }
                    }
                }
                return this;
            };
            /** @type {function (?, boolean): ?} */
            self.progress = self.totalProgress = function(value, dataAndEvents) {
                var duration = this.duration();
                return arguments.length ? this.totalTime(duration * value, dataAndEvents) : duration ? this._time / duration : this.ratio;
            };
            /**
             * @param {number} value
             * @return {?}
             */
            self.startTime = function(value) {
                return arguments.length ? (value !== this._startTime && (this._startTime = value, this.timeline && (this.timeline._sortChildren && this.timeline.add(this, value - this._delay))), this) : this._startTime;
            };
            /**
             * @param {number} dataAndEvents
             * @return {?}
             */
            self.endTime = function(dataAndEvents) {
                return this._startTime + (0 != dataAndEvents ? this.totalDuration() : this.duration()) / this._timeScale;
            };
            /**
             * @param {number} value
             * @return {?}
             */
            self.timeScale = function(value) {
                if (!arguments.length) {
                    return this._timeScale;
                }
                if (value = value || _tinyNum, this._timeline && this._timeline.smoothChildTiming) {
                    var pauseTime = this._pauseTime;
                    var t = pauseTime || 0 === pauseTime ? pauseTime : this._timeline.totalTime();
                    /** @type {number} */
                    this._startTime = t - (t - this._startTime) * this._timeScale / value;
                }
                return this._timeScale = value, this._uncache(false);
            };
            /**
             * @param {string} recurring
             * @return {?}
             */
            self.reversed = function(recurring) {
                return arguments.length ? (recurring != this._reversed && (this._reversed = recurring, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true)), this) : this._reversed;
            };
            /**
             * @param {boolean} recurring
             * @return {?}
             */
            self.paused = function(recurring) {
                if (!arguments.length) {
                    return this._paused;
                }
                var time;
                var ms;
                var tl = this._timeline;
                return recurring != this._paused && (tl && (l || (recurring || _ticker.wake()), time = tl.rawTime(), ms = time - this._pauseTime, !recurring && (tl.smoothChildTiming && (this._startTime += ms, this._uncache(false))), this._pauseTime = recurring ? time : null, this._paused = recurring, this._active = this.isActive(), !recurring && (0 !== ms && (this._initted && (this.duration() && (time = tl.smoothChildTiming ? this._totalTime : (time - this._startTime) / this._timeScale, this.render(time, time ===
                    this._totalTime, true))))))), this._gc && (!recurring && this._enabled(true, false)), this;
            };
            var SimpleTimeline = _class("core.SimpleTimeline", function(callback) {
                Animation.call(this, 0, callback);
                /** @type {boolean} */
                this.autoRemoveChildren = this.smoothChildTiming = true;
            });
            self = SimpleTimeline.prototype = new Animation;
            self.constructor = SimpleTimeline;
            /** @type {boolean} */
            self.kill()._gc = false;
            /** @type {null} */
            self._first = self._last = self._recent = null;
            /** @type {boolean} */
            self._sortChildren = false;
            /** @type {function (?, number, ?, ?): ?} */
            self.add = self.insert = function(child, position, arr, rest_items) {
                var prevTween;
                var st;
                if (child._startTime = Number(position || 0) + child._delay, child._paused && (this !== child._timeline && (child._pauseTime = child._startTime + (this.rawTime() - child._startTime) / child._timeScale)), child.timeline && child.timeline._remove(child, true), child.timeline = child._timeline = this, child._gc && child._enabled(true, true), prevTween = this._last, this._sortChildren) {
                    st = child._startTime;
                    for (; prevTween && prevTween._startTime > st;) {
                        prevTween = prevTween._prev;
                    }
                }
                return prevTween ? (child._next = prevTween._next, prevTween._next = child) : (child._next = this._first, this._first = child), child._next ? child._next._prev = child : this._last = child, child._prev = prevTween, this._recent = child, this._timeline && this._uncache(true), this;
            };
            /**
             * @param {?} tween
             * @param {boolean} recurring
             * @return {?}
             */
            self._remove = function(tween, recurring) {
                return tween.timeline === this && (recurring || tween._enabled(false, true), tween._prev ? tween._prev._next = tween._next : this._first === tween && (this._first = tween._next), tween._next ? tween._next._prev = tween._prev : this._last === tween && (this._last = tween._prev), tween._next = tween._prev = tween.timeline = null, tween === this._recent && (this._recent = this._last), this._timeline && this._uncache(true)), this;
            };
            /**
             * @param {number} time
             * @param {boolean} recurring
             * @param {boolean} opt_isDefault
             * @return {undefined}
             */
            self.render = function(time, recurring, opt_isDefault) {
                var next;
                var tween = this._first;
                this._totalTime = this._time = this._rawPrevTime = time;
                for (; tween;) {
                    next = tween._next;
                    if (tween._active || time >= tween._startTime && !tween._paused) {
                        if (tween._reversed) {
                            tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                        } else {
                            tween.render((time - tween._startTime) * tween._timeScale, recurring, opt_isDefault);
                        }
                    }
                    tween = next;
                }
            };
            /**
             * @return {?}
             */
            self.rawTime = function() {
                return l || _ticker.wake(), this._totalTime;
            };
            var TweenLite = _class("TweenLite", function(value, duration, callback) {
                if (Animation.call(this, duration, callback), this.render = TweenLite.prototype.render, null == value) {
                    throw "Cannot tween a null target.";
                }
                this.target = value = "string" != typeof value ? value : TweenLite.selector(value) || value;
                var i;
                var camelKey;
                var targets;
                var number = value.jquery || value.length && (value !== win && (value[0] && (value[0] === win || value[0].nodeType && (value[0].style && !value.nodeType))));
                var overwrite = this.vars.overwrite;
                if (this._overwrite = overwrite = null == overwrite ? _overwriteLookup[TweenLite.defaultOverwrite] : "number" == typeof overwrite ? overwrite >> 0 : _overwriteLookup[overwrite], (number || (value instanceof Array || value.push && _isArray(value))) && "number" != typeof value[0]) {
                    this._targets = targets = flatten(value);
                    /** @type {Array} */
                    this._propLookup = [];
                    /** @type {Array} */
                    this._siblings = [];
                    /** @type {number} */
                    i = 0;
                    for (; i < targets.length; i++) {
                        camelKey = targets[i];
                        if (camelKey) {
                            if ("string" != typeof camelKey) {
                                if (camelKey.length && (camelKey !== win && (camelKey[0] && (camelKey[0] === win || camelKey[0].nodeType && (camelKey[0].style && !camelKey.nodeType))))) {
                                    targets.splice(i--, 1);
                                    this._targets = targets = targets.concat(flatten(camelKey));
                                } else {
                                    this._siblings[i] = _register(camelKey, this, false);
                                    if (1 === overwrite) {
                                        if (this._siblings[i].length > 1) {
                                            _applyOverwrite(camelKey, this, null, 1, this._siblings[i]);
                                        }
                                    }
                                }
                            } else {
                                camelKey = targets[i--] = TweenLite.selector(camelKey);
                                if ("string" == typeof camelKey) {
                                    targets.splice(i + 1, 1);
                                }
                            }
                        } else {
                            targets.splice(i--, 1);
                        }
                    }
                } else {
                    this._propLookup = {};
                    this._siblings = _register(value, this, false);
                    if (1 === overwrite) {
                        if (this._siblings.length > 1) {
                            _applyOverwrite(value, this, null, 1, this._siblings);
                        }
                    }
                }
                if (this.vars.immediateRender || 0 === duration && (0 === this._delay && this.vars.immediateRender !== false)) {
                    /** @type {number} */
                    this._time = -_tinyNum;
                    this.render(Math.min(0, -this._delay));
                }
            }, true);
            /**
             * @param {Array} value
             * @return {?}
             */
            var _isSelector = function(value) {
                return value && (value.length && (value !== win && (value[0] && (value[0] === win || value[0].nodeType && (value[0].style && !value.nodeType)))));
            };
            /**
             * @param {Object} c
             * @param {Function} target
             * @return {undefined}
             */
            var _autoCSS = function(c, target) {
                var p;
                var data = {};
                for (p in c) {
                    if (!paramNames[p]) {
                        if (!(p in target && ("transform" !== p && ("x" !== p && ("y" !== p && ("width" !== p && ("height" !== p && ("className" !== p && "border" !== p)))))))) {
                            if (!!(!_plugins[p] || _plugins[p] && _plugins[p]._autoCSS)) {
                                data[p] = c[p];
                                delete c[p];
                            }
                        }
                    }
                }
                c.css = data;
            };
            self = TweenLite.prototype = new Animation;
            self.constructor = TweenLite;
            /** @type {boolean} */
            self.kill()._gc = false;
            /** @type {number} */
            self.ratio = 0;
            /** @type {null} */
            self._firstPT = self._targets = self._overwrittenProps = self._startAt = null;
            /** @type {boolean} */
            self._notifyPluginsOfEnabled = self._lazy = false;
            /** @type {string} */
            TweenLite.version = "1.19.0";
            TweenLite.defaultEase = self._ease = new Ease(null, null, 1, 1);
            /** @type {string} */
            TweenLite.defaultOverwrite = "auto";
            TweenLite.ticker = _ticker;
            /** @type {number} */
            TweenLite.autoSleep = 120;
            /**
             * @param {number} dataAndEvents
             * @param {?} deepDataAndEvents
             * @return {undefined}
             */
            TweenLite.lagSmoothing = function(dataAndEvents, deepDataAndEvents) {
                _ticker.lagSmoothing(dataAndEvents, deepDataAndEvents);
            };
            TweenLite.selector = win.$ || (win.jQuery || function(value) {
                var selector = win.$ || win.jQuery;
                return selector ? (TweenLite.selector = selector, selector(value)) : "undefined" == typeof document ? value : document.querySelectorAll ? document.querySelectorAll(value) : document.getElementById("#" === value.charAt(0) ? value.substr(1) : value);
            });
            /** @type {Array} */
            var tags = [];
            var params = {};
            /** @type {RegExp} */
            var core_rnotwhite = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
            /**
             * @param {number} v
             * @return {undefined}
             */
            var next = function(v) {
                var y;
                var pt = this._firstPT;
                /** @type {number} */
                var min = 1E-6;
                for (; pt;) {
                    y = pt.blob ? v ? this.join("") : this.start : pt.c * v + pt.s;
                    if (pt.m) {
                        y = pt.m(y, this._target || pt.t);
                    } else {
                        if (y < min) {
                            if (y > -min) {
                                /** @type {number} */
                                y = 0;
                            }
                        }
                    }
                    if (pt.f) {
                        if (pt.fp) {
                            pt.t[pt.p](pt.fp, y);
                        } else {
                            pt.t[pt.p](y);
                        }
                    } else {
                        pt.t[pt.p] = y;
                    }
                    pt = pt._next;
                }
            };
            /**
             * @param {number} value
             * @param {string} string
             * @param {?} dom
             * @param {?} item
             * @return {?}
             */
            var parse = function(value, string, dom, item) {
                var a;
                var targets;
                var camelKey;
                var j;
                var subLn;
                var data;
                var t;
                /** @type {Array} */
                var p = [value, string];
                /** @type {number} */
                var length = 0;
                /** @type {string} */
                var pdataOld = "";
                /** @type {number} */
                var ffversion = 0;
                /** @type {number} */
                p.start = value;
                if (dom) {
                    dom(p);
                    value = p[0];
                    string = p[1];
                }
                /** @type {number} */
                p.length = 0;
                a = value.match(core_rnotwhite) || [];
                targets = string.match(core_rnotwhite) || [];
                if (item) {
                    /** @type {null} */
                    item._next = null;
                    /** @type {number} */
                    item.blob = 1;
                    p._firstPT = p._applyPT = item;
                }
                subLn = targets.length;
                /** @type {number} */
                j = 0;
                for (; j < subLn; j++) {
                    t = targets[j];
                    data = string.substr(length, string.indexOf(t, length) - length);
                    pdataOld += data || !j ? data : ",";
                    length += data.length;
                    if (ffversion) {
                        /** @type {number} */
                        ffversion = (ffversion + 1) % 5;
                    } else {
                        if ("rgba(" === data.substr(-5)) {
                            /** @type {number} */
                            ffversion = 1;
                        }
                    }
                    if (t === a[j] || a.length <= j) {
                        pdataOld += t;
                    } else {
                        if (pdataOld) {
                            p.push(pdataOld);
                            /** @type {string} */
                            pdataOld = "";
                        }
                        /** @type {number} */
                        camelKey = parseFloat(a[j]);
                        p.push(camelKey);
                        p._firstPT = {
                            _next: p._firstPT,
                            t: p,
                            p: p.length - 1,
                            s: camelKey,
                            c: ("=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - camelKey) || 0,
                            f: 0,
                            m: ffversion && ffversion < 4 ? Math.round : 0
                        };
                    }
                    length += t.length;
                }
                return pdataOld += string.substr(length), pdataOld && p.push(pdataOld), p.setRatio = next, p;
            };
            /**
             * @param {Object} obj
             * @param {string} key
             * @param {string} value
             * @param {(number|string)} v
             * @param {string} data
             * @param {Object} opt_isDefault
             * @param {boolean} name
             * @param {(RegExp|string)} mL
             * @param {number} lC
             * @return {?}
             */
            var set = function(obj, key, value, v, data, opt_isDefault, name, mL, lC) {
                if ("function" == typeof v) {
                    v = v(lC || 0, obj);
                }
                var m;
                var implementation;
                var val = "get" === value ? obj[key] : value;
                /** @type {string} */
                var type = typeof obj[key];
                /** @type {boolean} */
                var c = "string" == typeof v && "=" === v.charAt(1);
                var pt = {
                    t: obj,
                    p: key,
                    s: val,
                    f: "function" === type,
                    pg: 0,
                    n: data || key,
                    m: opt_isDefault ? "function" == typeof opt_isDefault ? opt_isDefault : Math.round : 0,
                    pr: 0,
                    c: c ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) : parseFloat(v) - val || 0
                };
                if ("number" !== type && ("function" === type && ("get" === value && (implementation = key.indexOf("set") || "function" != typeof obj["get" + key.substr(3)] ? key : "get" + key.substr(3), pt.s = val = name ? obj[implementation](name) : obj[implementation]())), "string" == typeof val && (name || isNaN(val)) ? (pt.fp = name, m = parse(val, v, mL || TweenLite.defaultStringFilter, pt), pt = {
                        t: m,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: data || key,
                        pr: 0,
                        m: 0
                    }) : c || (pt.s = parseFloat(val), pt.c = parseFloat(v) - pt.s || 0)), pt.c) {
                    return (pt._next = this._firstPT) && (pt._next._prev = pt), this._firstPT = pt, pt;
                }
            };
            var _internals = TweenLite._internals = {
                isArray: _isArray,
                /** @type {function (Array): ?} */
                isSelector: _isSelector,
                lazyTweens: tags,
                /** @type {function (number, string, ?, ?): ?} */
                blobDif: parse
            };
            var _plugins = TweenLite._plugins = {};
            var _tweenLookup = _internals.tweenLookup = {};
            /** @type {number} */
            var _tweenLookupNum = 0;
            var paramNames = _internals.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1
            };
            var _overwriteLookup = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            };
            var _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline;
            var _rootTimeline = Animation._rootTimeline = new SimpleTimeline;
            /** @type {number} */
            var endFrame = 30;
            /** @type {function (): undefined} */
            var after = _internals.lazyRender = function() {
                var tag;
                /** @type {number} */
                var index = tags.length;
                params = {};
                for (; --index > -1;) {
                    tag = tags[index];
                    if (tag) {
                        if (tag._lazy !== false) {
                            tag.render(tag._lazy[0], tag._lazy[1], true);
                            /** @type {boolean} */
                            tag._lazy = false;
                        }
                    }
                }
                /** @type {number} */
                tags.length = 0;
            };
            _rootTimeline._startTime = _ticker.time;
            _rootFramesTimeline._startTime = _ticker.frame;
            /** @type {boolean} */
            _rootTimeline._active = _rootFramesTimeline._active = true;
            setTimeout(after, 1);
            /** @type {function (): undefined} */
            Animation._updateRoot = TweenLite.render = function() {
                var i;
                var a;
                var p;
                if (tags.length && after(), _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false), _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false), tags.length && after(), _ticker.frame >= endFrame) {
                    endFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
                    for (p in _tweenLookup) {
                        a = _tweenLookup[p].tweens;
                        i = a.length;
                        for (; --i > -1;) {
                            if (a[i]._gc) {
                                a.splice(i, 1);
                            }
                        }
                        if (0 === a.length) {
                            delete _tweenLookup[p];
                        }
                    }
                    if (p = _rootTimeline._first, (!p || p._paused) && (TweenLite.autoSleep && (!_rootFramesTimeline._first && 1 === _ticker._listeners.tick.length))) {
                        for (; p && p._paused;) {
                            p = p._next;
                        }
                        if (!p) {
                            _ticker.sleep();
                        }
                    }
                }
            };
            _ticker.addEventListener("tick", Animation._updateRoot);
            /**
             * @param {Object} value
             * @param {?} tween
             * @param {boolean} recurring
             * @return {?}
             */
            var _register = function(value, tween, recurring) {
                var a;
                var i;
                var id = value._gsTweenID;
                if (_tweenLookup[id || (value._gsTweenID = id = "t" + _tweenLookupNum++)] || (_tweenLookup[id] = {
                        target: value,
                        tweens: []
                    }), tween && (a = _tweenLookup[id].tweens, a[i = a.length] = tween, recurring)) {
                    for (; --i > -1;) {
                        if (a[i] === tween) {
                            a.splice(i, 1);
                        }
                    }
                }
                return _tweenLookup[id].tweens;
            };
            /**
             * @param {string} camelKey
             * @param {?} prop
             * @param {Object} key
             * @param {string} name
             * @return {?}
             */
            var pluck = function(camelKey, prop, key, name) {
                var result;
                var value;
                var fn = camelKey.vars.onOverwrite;
                return fn && (result = fn(camelKey, prop, key, name)), fn = TweenLite.onOverwrite, fn && (value = fn(camelKey, prop, key, name)), result !== false && value !== false;
            };
            /**
             * @param {?} target
             * @param {Object} tween
             * @param {Object} props
             * @param {number} dataAndEvents
             * @param {(Arguments|Array)} siblings
             * @return {?}
             */
            var _applyOverwrite = function(target, tween, props, dataAndEvents, siblings) {
                var i;
                var changed;
                var curTween;
                var len;
                if (1 === dataAndEvents || dataAndEvents >= 4) {
                    len = siblings.length;
                    /** @type {number} */
                    i = 0;
                    for (; i < len; i++) {
                        if ((curTween = siblings[i]) !== tween) {
                            if (!curTween._gc) {
                                if (curTween._kill(null, target, tween)) {
                                    /** @type {boolean} */
                                    changed = true;
                                }
                            }
                        } else {
                            if (5 === dataAndEvents) {
                                break;
                            }
                        }
                    }
                    return changed;
                }
                var globalStart;
                var startTime = tween._startTime + _tinyNum;
                /** @type {Array} */
                var overlaps = [];
                /** @type {number} */
                var oCount = 0;
                /** @type {boolean} */
                var zeroDur = 0 === tween._duration;
                i = siblings.length;
                for (; --i > -1;) {
                    if (!((curTween = siblings[i]) === tween)) {
                        if (!curTween._gc) {
                            if (!curTween._paused) {
                                if (curTween._timeline !== tween._timeline) {
                                    globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
                                    if (0 === _checkOverlap(curTween, globalStart, zeroDur)) {
                                        overlaps[oCount++] = curTween;
                                    }
                                } else {
                                    if (curTween._startTime <= startTime) {
                                        if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) {
                                            if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 2E-10)) {
                                                overlaps[oCount++] = curTween;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                /** @type {number} */
                i = oCount;
                for (; --i > -1;) {
                    if (curTween = overlaps[i], 2 === dataAndEvents && (curTween._kill(props, target, tween) && (changed = true)), 2 !== dataAndEvents || !curTween._firstPT && curTween._initted) {
                        if (2 !== dataAndEvents && !pluck(curTween, tween)) {
                            continue;
                        }
                        if (curTween._enabled(false, false)) {
                            /** @type {boolean} */
                            changed = true;
                        }
                    }
                }
                return changed;
            };
            /**
             * @param {Object} tween
             * @param {number} reference
             * @param {boolean} zeroDur
             * @return {?}
             */
            var _checkOverlap = function(tween, reference, zeroDur) {
                var tl = tween._timeline;
                var ts = tl._timeScale;
                var t = tween._startTime;
                for (; tl._timeline;) {
                    if (t += tl._startTime, ts *= tl._timeScale, tl._paused) {
                        return -100;
                    }
                    tl = tl._timeline;
                }
                return t /= ts, t > reference ? t - reference : zeroDur && t === reference || !tween._initted && t - reference < 2 * _tinyNum ? _tinyNum : (t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum;
            };
            /**
             * @return {undefined}
             */
            self._init = function() {
                var i;
                var initPlugins;
                var pt;
                var p;
                var vars;
                var valsLength;
                var v = this.vars;
                var op = this._overwrittenProps;
                var defaultDuration = this._duration;
                /** @type {boolean} */
                var x = !!v.immediateRender;
                var ease = v.ease;
                if (v.startAt) {
                    if (this._startAt) {
                        this._startAt.render(-1, true);
                        this._startAt.kill();
                    }
                    vars = {};
                    for (p in v.startAt) {
                        vars[p] = v.startAt[p];
                    }
                    if (vars.overwrite = false, vars.immediateRender = true, vars.lazy = x && v.lazy !== false, vars.startAt = vars.delay = null, this._startAt = TweenLite.to(this.target, 0, vars), x) {
                        if (this._time > 0) {
                            /** @type {null} */
                            this._startAt = null;
                        } else {
                            if (0 !== defaultDuration) {
                                return;
                            }
                        }
                    }
                } else {
                    if (v.runBackwards && 0 !== defaultDuration) {
                        if (this._startAt) {
                            this._startAt.render(-1, true);
                            this._startAt.kill();
                            /** @type {null} */
                            this._startAt = null;
                        } else {
                            if (0 !== this._time) {
                                /** @type {boolean} */
                                x = false;
                            }
                            pt = {};
                            for (p in v) {
                                if (!(paramNames[p] && "autoCSS" !== p)) {
                                    pt[p] = v[p];
                                }
                            }
                            if (pt.overwrite = 0, pt.data = "isFromStart", pt.lazy = x && v.lazy !== false, pt.immediateRender = x, this._startAt = TweenLite.to(this.target, 0, pt), x) {
                                if (0 === this._time) {
                                    return;
                                }
                            } else {
                                this._startAt._init();
                                this._startAt._enabled(false);
                                if (this.vars.immediateRender) {
                                    /** @type {null} */
                                    this._startAt = null;
                                }
                            }
                        }
                    }
                }
                if (this._ease = ease = ease ? ease instanceof Ease ? ease : "function" == typeof ease ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase : TweenLite.defaultEase, v.easeParams instanceof Array && (ease.config && (this._ease = ease.config.apply(ease, v.easeParams))), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) {
                    valsLength = this._targets.length;
                    /** @type {number} */
                    i = 0;
                    for (; i < valsLength; i++) {
                        if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null, i)) {
                            /** @type {boolean} */
                            initPlugins = true;
                        }
                    }
                } else {
                    initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
                }
                if (initPlugins && TweenLite._onPluginEvent("_onInitAllProps", this), op && (this._firstPT || "function" != typeof this.target && this._enabled(false, false)), v.runBackwards) {
                    /** @type {null} */
                    pt = this._firstPT;
                    for (; pt;) {
                        pt.s += pt.c;
                        /** @type {number} */
                        pt.c = -pt.c;
                        pt = pt._next;
                    }
                }
                this._onUpdate = v.onUpdate;
                /** @type {boolean} */
                this._initted = true;
            };
            /**
             * @param {?} target
             * @param {Object} propLookup
             * @param {Array} siblings
             * @param {Object} overwrittenProps
             * @param {number} deepDataAndEvents
             * @return {?}
             */
            self._initProps = function(target, propLookup, siblings, overwrittenProps, deepDataAndEvents) {
                var p;
                var i;
                var l;
                var plugin;
                var pt;
                var v;
                if (null == target) {
                    return false;
                }
                if (params[target._gsTweenID]) {
                    after();
                }
                if (!this.vars.css) {
                    if (target.style) {
                        if (target !== win) {
                            if (target.nodeType) {
                                if (_plugins.css) {
                                    if (this.vars.autoCSS !== false) {
                                        _autoCSS(this.vars, target);
                                    }
                                }
                            }
                        }
                    }
                }
                for (p in this.vars) {
                    if (v = this.vars[p], paramNames[p]) {
                        if (v) {
                            if (v instanceof Array || v.push && _isArray(v)) {
                                if (v.join("").indexOf("{self}") !== -1) {
                                    this.vars[p] = v = this._swapSelfInParams(v, this);
                                }
                            }
                        }
                    } else {
                        if (_plugins[p] && (plugin = new _plugins[p])._onInitTween(target, this.vars[p], this, deepDataAndEvents)) {
                            this._firstPT = pt = {
                                _next: this._firstPT,
                                t: plugin,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: p,
                                pg: 1,
                                pr: plugin._priority,
                                m: 0
                            };
                            i = plugin._overwriteProps.length;
                            for (; --i > -1;) {
                                propLookup[plugin._overwriteProps[i]] = this._firstPT;
                            }
                            if (plugin._priority || plugin._onInitAllProps) {
                                /** @type {boolean} */
                                l = true;
                            }
                            if (plugin._onDisable || plugin._onEnable) {
                                /** @type {boolean} */
                                this._notifyPluginsOfEnabled = true;
                            }
                            if (pt._next) {
                                pt._next._prev = pt;
                            }
                        } else {
                            propLookup[p] = set.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, deepDataAndEvents);
                        }
                    }
                }
                return overwrittenProps && this._kill(overwrittenProps, target) ? this._initProps(target, propLookup, siblings, overwrittenProps, deepDataAndEvents) : this._overwrite > 1 && (this._firstPT && (siblings.length > 1 && _applyOverwrite(target, this, propLookup, this._overwrite, siblings))) ? (this._kill(propLookup, target), this._initProps(target, propLookup, siblings, overwrittenProps, deepDataAndEvents)) : (this._firstPT && ((this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration) &&
                    (params[target._gsTweenID] = true)), l);
            };
            /**
             * @param {number} time
             * @param {boolean} recurring
             * @param {boolean} opt_isDefault
             * @return {?}
             */
            self.render = function(time, recurring, opt_isDefault) {
                var isComplete;
                var callback;
                var pt;
                var rawPrevTime;
                var prevTime = this._time;
                var duration = this._duration;
                var prevRawPrevTime = this._rawPrevTime;
                if (time >= duration - 1E-7) {
                    this._totalTime = this._time = duration;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
                    if (!this._reversed) {
                        /** @type {boolean} */
                        isComplete = true;
                        /** @type {string} */
                        callback = "onComplete";
                        opt_isDefault = opt_isDefault || this._timeline.autoRemoveChildren;
                    }
                    if (0 === duration) {
                        if (this._initted || (!this.vars.lazy || opt_isDefault)) {
                            if (this._startTime === this._timeline._duration) {
                                /** @type {number} */
                                time = 0;
                            }
                            if (prevRawPrevTime < 0 || (time <= 0 && time >= -1E-7 || prevRawPrevTime === _tinyNum && "isPause" !== this.data)) {
                                if (prevRawPrevTime !== time) {
                                    /** @type {boolean} */
                                    opt_isDefault = true;
                                    if (prevRawPrevTime > _tinyNum) {
                                        /** @type {string} */
                                        callback = "onReverseComplete";
                                    }
                                }
                            }
                            this._rawPrevTime = rawPrevTime = !recurring || (time || prevRawPrevTime === time) ? time : _tinyNum;
                        }
                    }
                } else {
                    if (time < 1E-7) {
                        /** @type {number} */
                        this._totalTime = this._time = 0;
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                        if (0 !== prevTime || 0 === duration && prevRawPrevTime > 0) {
                            /** @type {string} */
                            callback = "onReverseComplete";
                            isComplete = this._reversed;
                        }
                        if (time < 0) {
                            /** @type {boolean} */
                            this._active = false;
                            if (0 === duration) {
                                if (this._initted || (!this.vars.lazy || opt_isDefault)) {
                                    if (prevRawPrevTime >= 0) {
                                        if (prevRawPrevTime !== _tinyNum || "isPause" !== this.data) {
                                            /** @type {boolean} */
                                            opt_isDefault = true;
                                        }
                                    }
                                    this._rawPrevTime = rawPrevTime = !recurring || (time || prevRawPrevTime === time) ? time : _tinyNum;
                                }
                            }
                        }
                        if (!this._initted) {
                            /** @type {boolean} */
                            opt_isDefault = true;
                        }
                    } else {
                        if (this._totalTime = this._time = time, this._easeType) {
                            /** @type {number} */
                            var r = time / duration;
                            var type = this._easeType;
                            var pow = this._easePower;
                            if (1 === type || 3 === type && r >= 0.5) {
                                /** @type {number} */
                                r = 1 - r;
                            }
                            if (3 === type) {
                                r *= 2;
                            }
                            if (1 === pow) {
                                r *= r;
                            } else {
                                if (2 === pow) {
                                    r *= r * r;
                                } else {
                                    if (3 === pow) {
                                        r *= r * r * r;
                                    } else {
                                        if (4 === pow) {
                                            r *= r * r * r * r;
                                        }
                                    }
                                }
                            }
                            if (1 === type) {
                                /** @type {number} */
                                this.ratio = 1 - r;
                            } else {
                                if (2 === type) {
                                    /** @type {number} */
                                    this.ratio = r;
                                } else {
                                    if (time / duration < 0.5) {
                                        /** @type {number} */
                                        this.ratio = r / 2;
                                    } else {
                                        /** @type {number} */
                                        this.ratio = 1 - r / 2;
                                    }
                                }
                            }
                        } else {
                            this.ratio = this._ease.getRatio(time / duration);
                        }
                    }
                }
                if (this._time !== prevTime || opt_isDefault) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) {
                            return;
                        }
                        if (!opt_isDefault && (this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration))) {
                            return this._time = this._totalTime = prevTime, this._rawPrevTime = prevRawPrevTime, tags.push(this), void(this._lazy = [time, recurring]);
                        }
                        if (this._time && !isComplete) {
                            this.ratio = this._ease.getRatio(this._time / duration);
                        } else {
                            if (isComplete) {
                                if (this._ease._calcEnd) {
                                    this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1);
                                }
                            }
                        }
                    }
                    if (this._lazy !== false) {
                        /** @type {boolean} */
                        this._lazy = false;
                    }
                    if (!this._active) {
                        if (!this._paused) {
                            if (this._time !== prevTime) {
                                if (time >= 0) {
                                    /** @type {boolean} */
                                    this._active = true;
                                }
                            }
                        }
                    }
                    if (0 === prevTime) {
                        if (this._startAt) {
                            if (time >= 0) {
                                this._startAt.render(time, recurring, opt_isDefault);
                            } else {
                                if (!callback) {
                                    /** @type {string} */
                                    callback = "_dummyGS";
                                }
                            }
                        }
                        if (this.vars.onStart) {
                            if (!(0 === this._time && 0 !== duration)) {
                                if (!recurring) {
                                    this._callback("onStart");
                                }
                            }
                        }
                    }
                    pt = this._firstPT;
                    for (; pt;) {
                        if (pt.f) {
                            pt.t[pt.p](pt.c * this.ratio + pt.s);
                        } else {
                            pt.t[pt.p] = pt.c * this.ratio + pt.s;
                        }
                        pt = pt._next;
                    }
                    if (this._onUpdate) {
                        if (time < 0) {
                            if (this._startAt) {
                                if (time !== -1E-4) {
                                    this._startAt.render(time, recurring, opt_isDefault);
                                }
                            }
                        }
                        if (!recurring) {
                            if (this._time !== prevTime || (isComplete || opt_isDefault)) {
                                this._callback("onUpdate");
                            }
                        }
                    }
                    if (callback) {
                        if (!(this._gc && !opt_isDefault)) {
                            if (time < 0) {
                                if (this._startAt) {
                                    if (!this._onUpdate) {
                                        if (time !== -1E-4) {
                                            this._startAt.render(time, recurring, opt_isDefault);
                                        }
                                    }
                                }
                            }
                            if (isComplete) {
                                if (this._timeline.autoRemoveChildren) {
                                    this._enabled(false, false);
                                }
                                /** @type {boolean} */
                                this._active = false;
                            }
                            if (!recurring) {
                                if (this.vars[callback]) {
                                    this._callback(callback);
                                }
                            }
                            if (0 === duration) {
                                if (this._rawPrevTime === _tinyNum) {
                                    if (rawPrevTime !== _tinyNum) {
                                        /** @type {number} */
                                        this._rawPrevTime = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            };
            /**
             * @param {Object} vars
             * @param {?} camelKey
             * @param {Object} value
             * @return {?}
             */
            self._kill = function(vars, camelKey, value) {
                if ("all" === vars && (vars = null), null == vars && (null == camelKey || camelKey === this.target)) {
                    return this._lazy = false, this._enabled(false, false);
                }
                camelKey = "string" != typeof camelKey ? camelKey || (this._targets || this.target) : TweenLite.selector(camelKey) || camelKey;
                var i;
                var overwrittenProps;
                var pdataOld;
                var pt;
                var propLookup;
                var changed;
                var killProps;
                var h;
                var copies;
                var attrNames = value && (this._time && (value._startTime === this._startTime && this._timeline === value._timeline));
                if ((_isArray(camelKey) || _isSelector(camelKey)) && "number" != typeof camelKey[0]) {
                    i = camelKey.length;
                    for (; --i > -1;) {
                        if (this._kill(vars, camelKey[i], value)) {
                            /** @type {boolean} */
                            changed = true;
                        }
                    }
                } else {
                    if (this._targets) {
                        i = this._targets.length;
                        for (; --i > -1;) {
                            if (camelKey === this._targets[i]) {
                                propLookup = this._propLookup[i] || {};
                                this._overwrittenProps = this._overwrittenProps || [];
                                overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
                                break;
                            }
                        }
                    } else {
                        if (camelKey !== this.target) {
                            return false;
                        }
                        propLookup = this._propLookup;
                        overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
                    }
                    if (propLookup) {
                        if (killProps = vars || propLookup, h = vars !== overwrittenProps && ("all" !== overwrittenProps && (vars !== propLookup && ("object" != typeof vars || !vars._tempKill))), value && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
                            for (pdataOld in killProps) {
                                if (propLookup[pdataOld]) {
                                    if (!copies) {
                                        /** @type {Array} */
                                        copies = [];
                                    }
                                    copies.push(pdataOld);
                                }
                            }
                            if ((copies || !vars) && !pluck(this, value, camelKey, copies)) {
                                return false;
                            }
                        }
                        for (pdataOld in killProps) {
                            if (pt = propLookup[pdataOld]) {
                                if (attrNames) {
                                    if (pt.f) {
                                        pt.t[pt.p](pt.s);
                                    } else {
                                        pt.t[pt.p] = pt.s;
                                    }
                                    /** @type {boolean} */
                                    changed = true;
                                }
                                if (pt.pg) {
                                    if (pt.t._kill(killProps)) {
                                        /** @type {boolean} */
                                        changed = true;
                                    }
                                }
                                if (!(pt.pg && 0 !== pt.t._overwriteProps.length)) {
                                    if (pt._prev) {
                                        pt._prev._next = pt._next;
                                    } else {
                                        if (pt === this._firstPT) {
                                            this._firstPT = pt._next;
                                        }
                                    }
                                    if (pt._next) {
                                        pt._next._prev = pt._prev;
                                    }
                                    /** @type {null} */
                                    pt._next = pt._prev = null;
                                }
                                delete propLookup[pdataOld];
                            }
                            if (h) {
                                /** @type {number} */
                                overwrittenProps[pdataOld] = 1;
                            }
                        }
                        if (!this._firstPT) {
                            if (this._initted) {
                                this._enabled(false, false);
                            }
                        }
                    }
                }
                return changed;
            };
            /**
             * @return {?}
             */
            self.invalidate = function() {
                return this._notifyPluginsOfEnabled && TweenLite._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = false, this._propLookup = this._targets ? {} : [], Animation.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_tinyNum, this.render(Math.min(0, -this._delay))), this;
            };
            /**
             * @param {boolean} recurring
             * @param {boolean} opt_isDefault
             * @return {?}
             */
            self._enabled = function(recurring, opt_isDefault) {
                if (l || _ticker.wake(), recurring && this._gc) {
                    var i;
                    var targets = this._targets;
                    if (targets) {
                        i = targets.length;
                        for (; --i > -1;) {
                            this._siblings[i] = _register(targets[i], this, true);
                        }
                    } else {
                        this._siblings = _register(this.target, this, true);
                    }
                }
                return Animation.prototype._enabled.call(this, recurring, opt_isDefault), !(!this._notifyPluginsOfEnabled || !this._firstPT) && TweenLite._onPluginEvent(recurring ? "_onEnable" : "_onDisable", this);
            };
            /**
             * @param {string} target
             * @param {number} duration
             * @param {string} vars
             * @return {?}
             */
            TweenLite.to = function(target, duration, vars) {
                return new TweenLite(target, duration, vars);
            };
            /**
             * @param {string} target
             * @param {string} duration
             * @param {Object} vars
             * @return {?}
             */
            TweenLite.from = function(target, duration, vars) {
                return vars.runBackwards = true, vars.immediateRender = 0 != vars.immediateRender, new TweenLite(target, duration, vars);
            };
            /**
             * @param {string} target
             * @param {number} duration
             * @param {?} fromVars
             * @param {string} toVars
             * @return {?}
             */
            TweenLite.fromTo = function(target, duration, fromVars, toVars) {
                return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, new TweenLite(target, duration, toVars);
            };
            /**
             * @param {number} min1
             * @param {string} callback
             * @param {string} params
             * @param {Object} evt
             * @param {?} useFrames
             * @return {?}
             */
            TweenLite.delayedCall = function(min1, callback, params, evt, useFrames) {
                return new TweenLite(callback, 0, {
                    delay: min1,
                    onComplete: callback,
                    onCompleteParams: params,
                    callbackScope: evt,
                    onReverseComplete: callback,
                    onReverseCompleteParams: params,
                    immediateRender: false,
                    lazy: false,
                    useFrames: useFrames,
                    overwrite: 0
                });
            };
            /**
             * @param {string} second
             * @param {string} value
             * @return {?}
             */
            TweenLite.set = function(second, value) {
                return new TweenLite(second, 0, value);
            };
            /**
             * @param {string} camelKey
             * @param {Object} onlyActive
             * @return {?}
             */
            TweenLite.getTweensOf = function(camelKey, onlyActive) {
                if (null == camelKey) {
                    return [];
                }
                camelKey = "string" != typeof camelKey ? camelKey : TweenLite.selector(camelKey) || camelKey;
                var i;
                var a;
                var j;
                var t;
                if ((_isArray(camelKey) || _isSelector(camelKey)) && "number" != typeof camelKey[0]) {
                    i = camelKey.length;
                    /** @type {Array} */
                    a = [];
                    for (; --i > -1;) {
                        /** @type {Array} */
                        a = a.concat(TweenLite.getTweensOf(camelKey[i], onlyActive));
                    }
                    /** @type {number} */
                    i = a.length;
                    for (; --i > -1;) {
                        t = a[i];
                        /** @type {number} */
                        j = i;
                        for (; --j > -1;) {
                            if (t === a[j]) {
                                a.splice(i, 1);
                            }
                        }
                    }
                } else {
                    a = _register(camelKey).concat();
                    i = a.length;
                    for (; --i > -1;) {
                        if (a[i]._gc || onlyActive && !a[i].isActive()) {
                            a.splice(i, 1);
                        }
                    }
                }
                return a;
            };
            /** @type {function (string, boolean, boolean): undefined} */
            TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
                if ("object" == typeof onlyActive) {
                    /** @type {boolean} */
                    vars = onlyActive;
                    /** @type {boolean} */
                    onlyActive = false;
                }
                var a = TweenLite.getTweensOf(target, onlyActive);
                var i = a.length;
                for (; --i > -1;) {
                    a[i]._kill(vars, target);
                }
            };
            var TweenPlugin = _class("plugins.TweenPlugin", function(classNames, dataAndEvents) {
                this._overwriteProps = (classNames || "").split(",");
                this._propName = this._overwriteProps[0];
                this._priority = dataAndEvents || 0;
                this._super = TweenPlugin.prototype;
            }, true);
            if (self = TweenPlugin.prototype, TweenPlugin.version = "1.19.0", TweenPlugin.API = 2, self._firstPT = null, self._addTween = set, self.setRatio = next, self._kill = function(vars) {
                    var l;
                    var a = this._overwriteProps;
                    var pt = this._firstPT;
                    if (null != vars[this._propName]) {
                        /** @type {Array} */
                        this._overwriteProps = [];
                    } else {
                        l = a.length;
                        for (; --l > -1;) {
                            if (null != vars[a[l]]) {
                                a.splice(l, 1);
                            }
                        }
                    }
                    for (; pt;) {
                        if (null != vars[pt.n]) {
                            if (pt._next) {
                                pt._next._prev = pt._prev;
                            }
                            if (pt._prev) {
                                pt._prev._next = pt._next;
                                /** @type {null} */
                                pt._prev = null;
                            } else {
                                if (this._firstPT === pt) {
                                    this._firstPT = pt._next;
                                }
                            }
                        }
                        pt = pt._next;
                    }
                    return false;
                }, self._mod = self._roundProps = function(lookup) {
                    var data;
                    var pt = this._firstPT;
                    for (; pt;) {
                        data = lookup[this._propName] || null != pt.n && lookup[pt.n.split(this._propName + "_").join("")];
                        if (data) {
                            if ("function" == typeof data) {
                                if (2 === pt.f) {
                                    /** @type {Function} */
                                    pt.t._applyPT.m = data;
                                } else {
                                    /** @type {Function} */
                                    pt.m = data;
                                }
                            }
                        }
                        pt = pt._next;
                    }
                }, TweenLite._onPluginEvent = function(type, tween) {
                    var changed;
                    var pt2;
                    var first;
                    var last;
                    var next;
                    var pt = tween._firstPT;
                    if ("_onInitAllProps" === type) {
                        for (; pt;) {
                            next = pt._next;
                            pt2 = first;
                            for (; pt2 && pt2.pr > pt.pr;) {
                                pt2 = pt2._next;
                            }
                            if (pt._prev = pt2 ? pt2._prev : last) {
                                pt._prev._next = pt;
                            } else {
                                first = pt;
                            }
                            if (pt._next = pt2) {
                                pt2._prev = pt;
                            } else {
                                last = pt;
                            }
                            pt = next;
                        }
                        pt = tween._firstPT = first;
                    }
                    for (; pt;) {
                        if (pt.pg) {
                            if ("function" == typeof pt.t[type]) {
                                if (pt.t[type]()) {
                                    /** @type {boolean} */
                                    changed = true;
                                }
                            }
                        }
                        pt = pt._next;
                    }
                    return changed;
                }, TweenPlugin.activate = function(plugins) {
                    var i = plugins.length;
                    for (; --i > -1;) {
                        if (plugins[i].API === TweenPlugin.API) {
                            _plugins[(new plugins[i])._propName] = plugins[i];
                        }
                    }
                    return true;
                }, _gsDefine.plugin = function(config) {
                    if (!(config && (config.propName && (config.init && config.API)))) {
                        throw "illegal plugin definition.";
                    }
                    var letter;
                    var propName = config.propName;
                    var helperMissingString = config.priority || 0;
                    var overwriteProps = config.overwriteProps;
                    var map = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    };
                    var Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function() {
                        TweenPlugin.call(this, propName, helperMissingString);
                        this._overwriteProps = overwriteProps || [];
                    }, config.global === true);
                    var options = Plugin.prototype = new TweenPlugin(propName);
                    options.constructor = Plugin;
                    Plugin.API = config.API;
                    for (letter in map) {
                        if ("function" == typeof config[letter]) {
                            options[map[letter]] = config[letter];
                        }
                    }
                    return Plugin.version = config.version, TweenPlugin.activate([Plugin]), Plugin;
                }, a = win._gsQueue) {
                /** @type {number} */
                i = 0;
                for (; i < a.length; i++) {
                    a[i]();
                }
                for (self in _defLookup) {
                    if (!_defLookup[self].func) {
                        win.console.log("GSAP encountered missing dependency: " + self);
                    }
                }
            }
            /** @type {boolean} */
            l = false;
        }
    }("undefined" != typeof module && (module.exports && "undefined" != typeof global) ? global : this || window, "TweenMax");
_gsScope = "undefined" != typeof module && (module.exports && "undefined" != typeof global) ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        /** @type {Element} */
        var _doc = document.documentElement;
        /** @type {Window} */
        var _window = window;
        /**
         * @param {?} element
         * @param {string} y
         * @return {?}
         */
        var _max = function(element, y) {
            /** @type {string} */
            var dim = "x" === y ? "Width" : "Height";
            /** @type {string} */
            var scroll = "scroll" + dim;
            /** @type {string} */
            var client = "client" + dim;
            /** @type {(HTMLElement|null)} */
            var body = document.body;
            return element === _window || (element === _doc || element === body) ? Math.max(_doc[scroll], body[scroll]) - (_window["inner" + dim] || (_doc[client] || body[client])) : element[scroll] - element["offset" + dim];
        };
        /**
         * @param {string} camelKey
         * @return {?}
         */
        var handler = function(camelKey) {
            return "string" == typeof camelKey && (camelKey = TweenLite.selector(camelKey)), camelKey.length && (camelKey !== _window && (camelKey[0] && (camelKey[0].style && (!camelKey.nodeType && (camelKey = camelKey[0]))))), camelKey === _window || camelKey.nodeType && camelKey.style ? camelKey : null;
        };
        /**
         * @param {Object} element
         * @param {string} y
         * @return {?}
         */
        var update = function(element, y) {
            /** @type {string} */
            var scroll = "scroll" + ("x" === y ? "Left" : "Top");
            return element === _window && (null != element.pageXOffset ? scroll = "page" + y.toUpperCase() + "Offset" : element = null != _doc[scroll] ? _doc : document.body),
                function() {
                    return element[scroll];
                };
        };
        /**
         * @param {string} data
         * @param {Object} element
         * @return {?}
         */
        var setup = function(data, element) {
            var buttonPos = handler(data).getBoundingClientRect();
            /** @type {boolean} */
            var rootFilter = !element || (element === _window || element === document.body);
            var containerPos = (rootFilter ? _doc : element).getBoundingClientRect();
            var logo_center = {
                x: buttonPos.left - containerPos.left,
                y: buttonPos.top - containerPos.top
            };
            return !rootFilter && (element && (logo_center.x += update(element, "x")(), logo_center.y += update(element, "y")())), logo_center;
        };
        /**
         * @param {string} param
         * @param {Object} element
         * @param {string} x
         * @return {?}
         */
        var init = function(param, element, x) {
            /** @type {string} */
            var kind = typeof param;
            return "number" === kind || "string" === kind && "=" === param.charAt(1) ? param : "max" === param ? _max(element, x) : Math.min(_max(element, x), setup(param, element)[x]);
        };
        var self = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.8.0",
            /**
             * @param {Object} element
             * @param {Object} pos
             * @param {?} tween
             * @return {?}
             */
            init: function(element, pos, tween) {
                return this._wdw = element === _window, this._target = element, this._tween = tween, "object" != typeof pos ? (pos = {
                    y: pos
                }, "string" == typeof pos.y && ("max" !== pos.y && ("=" !== pos.y.charAt(1) && (pos.x = pos.y)))) : pos.nodeType && (pos = {
                    y: pos,
                    x: pos
                }), this.vars = pos, this._autoKill = pos.autoKill !== false, this.getX = update(element, "x"), this.getY = update(element, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != pos.x ? (this._addTween(this, "x", this.x, init(pos.x, element, "x") - (pos.offsetX || 0), "scrollTo_x", true), this._overwriteProps.push("scrollTo_x")) : this.skipX = true, null != pos.y ? (this._addTween(this, "y", this.y, init(pos.y, element, "y") - (pos.offsetY || 0), "scrollTo_y",
                    true), this._overwriteProps.push("scrollTo_y")) : this.skipY = true, true;
            },
            /**
             * @param {Object} second
             * @return {undefined}
             */
            set: function(second) {
                this._super.setRatio.call(this, second);
                var x = this._wdw || !this.skipX ? this.getX() : this.xPrev;
                var y = this._wdw || !this.skipY ? this.getY() : this.yPrev;
                /** @type {number} */
                var n = y - this.yPrev;
                /** @type {number} */
                var pos = x - this.xPrev;
                var max = self.autoKillThreshold;
                if (this.x < 0) {
                    /** @type {number} */
                    this.x = 0;
                }
                if (this.y < 0) {
                    /** @type {number} */
                    this.y = 0;
                }
                if (this._autoKill) {
                    if (!this.skipX) {
                        if (pos > max || pos < -max) {
                            if (x < _max(this._target, "x")) {
                                /** @type {boolean} */
                                this.skipX = true;
                            }
                        }
                    }
                    if (!this.skipY) {
                        if (n > max || n < -max) {
                            if (y < _max(this._target, "y")) {
                                /** @type {boolean} */
                                this.skipY = true;
                            }
                        }
                    }
                    if (this.skipX) {
                        if (this.skipY) {
                            this._tween.kill();
                            if (this.vars.onAutoKill) {
                                this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []);
                            }
                        }
                    }
                }
                if (this._wdw) {
                    _window.scrollTo(this.skipX ? x : this.x, this.skipY ? y : this.y);
                } else {
                    if (!this.skipY) {
                        this._target.scrollTop = this.y;
                    }
                    if (!this.skipX) {
                        this._target.scrollLeft = this.x;
                    }
                }
                this.xPrev = this.x;
                this.yPrev = this.y;
            }
        });
        var a = self.prototype;
        /** @type {function (?, string): ?} */
        self.max = _max;
        /** @type {function (string, Object): ?} */
        self.getOffset = setup;
        /** @type {number} */
        self.autoKillThreshold = 7;
        /**
         * @param {Object} vars
         * @return {?}
         */
        a._kill = function(vars) {
            return vars.scrollTo_x && (this.skipX = true), vars.scrollTo_y && (this.skipY = true), this._super._kill.call(this, vars);
        };
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(timeoutKey) {
        /**
         * @return {?}
         */
        var factory = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[timeoutKey];
        };
        if ("function" == typeof define && define.amd) {
            define(["TweenLite"], factory);
        } else {
            if ("undefined" != typeof module) {
                if (module.exports) {
                    require("../TweenLite.js");
                    module.exports = factory();
                }
            }
        }
    }("ScrollToPlugin");