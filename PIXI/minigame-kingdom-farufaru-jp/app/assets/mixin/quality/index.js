import platform from 'platform';
import compareVersions from 'compare-versions';
import * as PIXI from 'pixi.js';

export const Quality = {
  low: 0,
  mid: 1,
  high: 2,
  superHigh: 3,
};

export default {
  computed: {
    isPC() {
      return platform.os.family !== 'Android' && platform.os.family !== 'iOS';
    },

    quality() {
      let quality = Quality.mid;

      if (!PIXI.utils.isWebGLSupported() || platform.name === 'Android Browser') {
        quality = Quality.low;
      } else if (platform.os.family === 'Android' && compareVersions(platform.os.version, '4.4') < 0) {
        quality = Quality.low;
      } else if (platform.os.family === 'Android' && compareVersions(platform.os.version, '7.0') >= 0) {
        quality = Quality.high;
      } else if (platform.os.family === 'iOS') {
        quality = Quality.superHigh;
      }

      return quality;
    },

    isQualityLow() {
      return this.quality === Quality.low;
    },

    isQualityMid() {
      return this.quality === Quality.mid;
    },

    isQualityHigh() {
      return this.quality === Quality.high;
    },

    isQualitySuperHigh() {
      return this.quality === Quality.superHigh;
    },

    isTablet() {

    },
  },
};
