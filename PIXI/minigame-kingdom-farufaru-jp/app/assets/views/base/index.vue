<style lang="scss">
@import '../../css/variable';
@import '../../css/reset';

body {
  background: url(/static/images/bg.jpg#{$cacheVersion}) repeat top center;
  background-size: 752px 1084px;
  font-size: 18px;
  color: white;
  line-height: 1.3;
}

#app {
  position: relative;
  max-width: 750px;
  margin: 0 auto;
  overflow: hidden;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    const width = Math.min(global.innerWidth, global.innerHeight);
    const height = Math.max(global.innerWidth, global.innerHeight);
    const ratio = Math.round((height / width) * 10) / 10;
    if (ratio <= 1.3) {
      global.document.querySelector("meta[name='viewport']").setAttribute('content', 'width=950');
    }
  },
};
</script>
