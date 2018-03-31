import platform from 'platform';
import * as PIXI from 'pixi.js';

export const Quality = {
  low: 0,
  mid: 1,
  high: 2,
};

export default {
  computed: {
    quality() {
      let quality = Quality.mid;

      if (!PIXI.utils.isWebGLSupported() || platform.name === 'Android Browser') {
        quality = Quality.low;
      } else if (platform.os.family === 'iOS') {
        quality = Quality.high;
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
  },
};
