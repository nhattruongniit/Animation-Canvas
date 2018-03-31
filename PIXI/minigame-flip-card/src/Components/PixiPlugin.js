/**
 * PixiPlugin
 *
 * https://github.com/NoProtocol/gsap-pixi-plugin
 */
var _gsScope = (typeof module !== "undefined" && module.exports && typeof global !== "undefined") ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine.plugin({
        propName: "object",
        priority: 0,
        API: 2,
        version: "1.0.0",
        overwriteProps: [],

        init: function(target, values, tween) {
            if (!target instanceof Object) {
                return false;
            }
            var self = this;
            var addObject = function(target, values) {
                if (!(target instanceof Object)) return console.warn('');

                Object.entries(values).forEach(function(item) {
                    var key = item[0],
                        value = item[1];
                    if (value instanceof Object) {
                        if (target[key] instanceof Object) addObject(target[key], value);
                        else console.warn('Property "' + key + '" must a type: ' + (typeof target[key]));
                    } else {
                        if (!(target[key] instanceof Object)) self._addTween(target, key, target[key], value, key);
                        else console.warn('Property "' + key + '" must a type: Object');
                    }
                });
            };

            addObject(target, values);
            return true;
        },
        set: function(ratio) {
            this._super.setRatio.call(this, ratio);
        }
    });
});
if (_gsScope._gsDefine) {
    _gsScope._gsQueue.pop()();
}