<style lang="scss">
@import '../../sprites-html/loading/sprite';
@import '../../css/variable';
@import '../../css/mixin';

.Loading {
  position: relative;

  .character {
    @include sprite($loading0);
    position: absolute;
    margin-left: -$loading0-width / 2;
    transform: scale(0.8);

    &-1 {
      @include sprite-position($loading1);
    }

    &-2 {
      @include sprite-position($loading2);
    }

    &-3 {
      @include sprite-position($loading3);
    }

    &-4 {
      @include sprite-position($loading4);
    }
  }

  .text {
    @include sprite($loading-text);
    position: absolute;
    margin-top: 250px;
    margin-left: -$loading-text-width / 2;
  }
}

</style>

<template>
    <div class="Loading">
      <div class="character" v-bind:class="[characterFrame]"></div>
      <div class="text"></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        frame: 0,
      };
    },

    computed: {
      characterFrame() {
        let frame = this.frame;
        if (frame > 4) {
          frame = 0;
        }
        return `character-${frame}`;
      },
    },

    mounted() {
      this.frameUpdateTimer = setInterval(() => {
        this.frame++;
        if (this.frame > 10) {
          this.frame = 0;
        }
      }, 100);
    },

    destroyed() {
      clearInterval(this.frameUpdateTimer);
    },
  };
</script>
