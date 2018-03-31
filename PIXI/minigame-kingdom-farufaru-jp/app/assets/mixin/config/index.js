export default {
  computed: {
    isProduction() {
      return global.config.stage === 'production';
    },

    isClose() {
      return global.config.isClose;
    },

    isFever() {
      return global.config.isFever && !this.isClose;
    },

    query() {
      const query = {};
      const url = global.location.search.slice(1);

      const hash = url.split('&');
      const l = hash.length;
      for (let i = 0; i < l; i++) {
        const array = hash[i].split('=');
        query[array[0]] = array[1];
      }

      return query;
    },
  },
};
