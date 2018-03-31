export default {
  methods: {
    getVerticalY(height, minY) {
      minY = minY || 0;
      let y = (global.innerHeight - height) / 2;
      if (y < minY) {
        y = minY;
      }

      return y;
    },
  },
};
