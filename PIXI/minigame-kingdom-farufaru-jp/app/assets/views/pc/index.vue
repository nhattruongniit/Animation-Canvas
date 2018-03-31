<style lang="scss">
@import '../../sprites-html/pc/sprite';
@import '../../css/variable';
@import '../../css/mixin';

.Pc {
  .Main {
    position: relative;
    background: url(/static/images/index/main.jpg#{$cacheVersion}) no-repeat top left;
    background-size: 750px 976px;
    height: 976px;
  }

  .Image1 {
    @include spriteWithCache($image-1);
    margin: 0 auto 25px;
  }

  .Text {
    @include spriteWithCache($text-1);
    margin: 0 auto 50px;
  }

  .Qr {
    @include spriteWithCache($image-qr);
    margin: 0 auto 40px;
  }

  .Footer {
    @include spriteWithCache($bg-footer);
    margin: 0 auto;
  }
}

</style>

<template>
  <div class="Pc">
    <div class="Main"></div>
    <div class="Image1"></div>
    <div class="Text"></div>
    <div class="Qr"></div>
    <div class="Footer"></div>
  </div>
</template>

<script>
export default {
  created() {
    if (!this.isPC) {
      this.$router.push('/');
    }
  },
};
</script>
