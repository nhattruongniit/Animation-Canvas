let throttleFunc = require('lodash/throttle');

export default {
    detectDevice() {
        let device = {
            is_pc: false,
            is_sp: false,
            sp_os: null
        };

        const UA = window.navigator.userAgent.toLowerCase();
        const platform_regexes = {
            ios: /iphone|ipad|ipod|ios/,
            android: /android|blackberry/,
            windows_phone: /windows phone/,
            other: /opera mini|silk/
        };

        for (let key in  platform_regexes) {
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
    afterFunc: function (n, callback, countingCallback) {
        let i = 1;

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
}
