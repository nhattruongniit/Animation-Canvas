<style lang="scss">
@import '../../sprites-html/numbers/sprite';
@import '../../css/variable';
@import '../../css/mixin';

.Numbers {
  span {
    display: inline-block;
  }

  .num {
    &-x {
      @include spriteWithCache($num-x);
      position: absolute;
      margin-left: -27px;
      margin-top: 1px;
    }

    &-s {
      &-0 { @include spriteWithCache($num-s-0); }
      &-1 { @include spriteWithCache($num-s-1); }
      &-2 { @include spriteWithCache($num-s-2); }
      &-3 { @include spriteWithCache($num-s-3); }
      &-4 { @include spriteWithCache($num-s-4); }
      &-5 { @include spriteWithCache($num-s-5); }
      &-6 { @include spriteWithCache($num-s-6); }
      &-7 { @include spriteWithCache($num-s-7); }
      &-8 { @include spriteWithCache($num-s-8); }
      &-9 { @include spriteWithCache($num-s-9); }
      &-comma { @include spriteWithCache($num-s-comma); }
    }

    &-m {
      &-0 { @include spriteWithCache($num-m-0); }
      &-1 { @include spriteWithCache($num-m-1); }
      &-2 { @include spriteWithCache($num-m-2); }
      &-3 { @include spriteWithCache($num-m-3); }
      &-4 { @include spriteWithCache($num-m-4); }
      &-5 { @include spriteWithCache($num-m-5); }
      &-6 { @include spriteWithCache($num-m-6); }
      &-7 { @include spriteWithCache($num-m-7); }
      &-8 { @include spriteWithCache($num-m-8); }
      &-9 { @include spriteWithCache($num-m-9); }
      &-comma { @include spriteWithCache($num-m-comma); }
    }

    &-l {
      &-0 { @include spriteWithCache($num-l-0); }
      &-1 { @include spriteWithCache($num-l-1); }
      &-2 { @include spriteWithCache($num-l-2); }
      &-3 { @include spriteWithCache($num-l-3); }
      &-4 { @include spriteWithCache($num-l-4); }
      &-5 { @include spriteWithCache($num-l-5); }
      &-6 { @include spriteWithCache($num-l-6); }
      &-7 { @include spriteWithCache($num-l-7); }
      &-8 { @include spriteWithCache($num-l-8); }
      &-9 { @include spriteWithCache($num-l-9); }
      &-comma { @include spriteWithCache($num-l-comma); }
    }
  }
}

</style>

<template>
    <div class="Numbers" :class="'Numbers-' + spans.length">
      <slot></slot>
      <span v-for="c in spans" v-bind:class="c"></span>
    </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    data() {
      return {
      };
    },

    props: {
      value: {
        type: Number,
        required: true,
      },

      size: {
        type: String,
        required: true,
      },
    },

    computed: {
      spans() {
        const str = this.value.toLocaleString();
        const spans = [];
        _.each(str, (s) => {
          if (s === ',') {
            s = 'comma';
          }
          spans.push(`num-${this.size}-${s}`);
        });
        return spans;
      },
    },

    mounted() {
    },

    destroyed() {
    },
  };
</script>
