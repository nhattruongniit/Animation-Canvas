<style lang="scss">
@import '../../sprites-html/ad/sprite';
@import '../../css/variable';
@import '../../css/mixin';

.Ad {
  position: absolute;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  height: 1118px;
  overflow: hidden;

  a {
    display: block;
  }

  .close {
    @include spriteWithCache($btn-close);
    position: absolute;
    top: 40px;
    right: 40px;
  }

  .inner {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 750px 1118px;
  }

  .hitArea1 {
    position: absolute;
  }

  .hitArea2 {
    position: absolute;
  }

  .type-0 {
    background: url(/static/images/ad/0.jpg#{$cacheVersion}) no-repeat top center;

    .hitArea1 {
      width: 100%;
      height: 160px;
      bottom: 110px;
    }
  }

  .type-1 {
    background: url(/static/images/ad/1.jpg#{$cacheVersion}) no-repeat top center;

    .hitArea1 {
      width: 100%;
      height: 160px;
      bottom: 68px;
    }
  }

  .type-2 {
    background: url(/static/images/ad/2.jpg#{$cacheVersion}) no-repeat top center;

    .hitArea1 {
      width: 100%;
      height: 160px;
      bottom: 94px;
    }
  }

  .type-3 {
    background: url(/static/images/ad/3.jpg#{$cacheVersion}) no-repeat top center;

    .hitArea1 {
      width: 100%;
      height: 160px;
      bottom: 28px;
    }
  }

  .type-4 {
    background: url(/static/images/ad/4.jpg#{$cacheVersion}) no-repeat top center;

    .hitArea1 {
      width: 100%;
      height: 160px;
      bottom: 36px;
    }

    .hitArea2 {
      width: 100%;
      height: 400px;
      bottom: 212px;
    }
  }

  .type-5 {
    background: url(/static/images/ad/5.jpg#{$cacheVersion}) no-repeat top center;

    .hitArea1 {
      width: 100%;
      height: 160px;
      bottom: 28px;
    }
  }

  .type-6 {
    background: url(/static/images/ad/6.jpg#{$cacheVersion}) no-repeat top center;

    .hitArea1 {
      width: 100%;
      height: 160px;
      bottom: 95px;
    }
  }

  .type-7 {
    background: url(/static/images/ad/7.jpg#{$cacheVersion}) no-repeat top center;

    .hitArea1 {
      width: 100%;
      height: 160px;
      bottom: 95px;
    }
  }

  .cover-enter, .cover-leave-to {
    transform: translate(0, 100%);
  }

  .cover-enter-active, .cover-leave-active {
    transition: transform .5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .cover-enter-to, .cover-leave {
    transform: translate(0, 0);
  }
}

</style>

<template>
    <div class="Ad">
      <transition name="cover" v-on:after-leave="onInnerHideComplete">
        <div class="inner" :class="'type-' + type" v-show="isInnerShow">
          <a class="close" v-on:click.prevent="onCloseClick"></a>
          <a class="hitArea1" :href="link1" target="_blank"></a>
          <a class="hitArea2" :href="link2" target="_blank" v-if="link2"></a>
        </div>
      </transition>
    </div>
</template>

<script>
import Store from 'store';

export default {
  data() {
    return {
      isInnerShow: false,
    };
  },

  props: {
    overrideType: {
      type: Number,
    },
  },

  computed: {
    type() {
      if (this.overrideType !== undefined) {
        return this.overrideType;
      }

      let type = Store.get('ad');
      if (type === undefined) {
        type = -1;
      }

      type++;
      if (type > 6) {
        type = 0;
      }

      Store.set('ad', type);
      return type;
    },

    link1() {
      switch (this.type) {
        case 0:
          return this.appDounloadUrl;
        case 1:
          return this.lineHomeUrl;
        case 2:
          return this.officialUrl;
        case 3:
          return this.officialUrl;
        case 4:
          return this.appDounloadUrl;
        case 5:
          return this.officialUrl;
        case 6:
          return this.appDounloadUrl;
        case 7:
          return this.appDounloadUrl;
        default:
          return null;
      }
    },

    link2() {
      switch (this.type) {
        case 4:
          return this.movieUrl;
        default:
          return null;
      }
    },
  },

  methods: {
    onCloseClick() {
      this.isInnerShow = false;
    },

    onInnerHideComplete() {
      this.$emit('hide-complete');
    },
  },

  mounted() {
    setTimeout(() => {
      this.isInnerShow = true;
    }, 1000);
  },
};
</script>
