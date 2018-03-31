<style lang="scss">
@import '../../sprites-html/play/sprite';
@import '../../css/variable';
@import '../../css/mixin';

.Container {
  position: relative;
  height: 1180px;
}

.Canvas {
  position: absolute;
  height: 1180px;

  canvas {
    width: 750px;
    height: 100%;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
}

.Modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;

  .bg {
    position: absolute;
    width: 670px;
    height: 1038px;
    background: url(/static/images/play/modal.jpg#{$cacheVersion}) no-repeat top left;
    background-size: 670px 1038px;
    left: 50%;
    top: 50%;
    margin-left: -335px;
    margin-top: -519px;
  }

  .close {
    position: absolute;
    right: -40px;
    top: -40px;

    a {
      @include spriteWithCache($btn-close);
      display: block;
    }
  }

  .play {
    .mid {
      padding-top: 865px;
      text-align: center;

      a {
        @include spriteWithCache($btn-play);
        display: inline-block;
      }
    }

    .high {
      padding-top: 890px;
      text-align: center;

      .off {
        @include spriteWithCache($btn-play-sound-off);
        display: inline-block;
        margin-right: 50px;
      }

      .on {
        @include spriteWithCache($btn-play-sound-on);
        display: inline-block;
      }
    }
  }

  .Loading {
    position: absolute;
    left: 50%;
    top: 790px;
    transform: scale(0.8);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

<template>
  <div class="Container">
    <div id="canvas" class="Canvas"></div>
    <transition name="fade">
      <div class="Modal" v-show="isModal">
        <div class="bg">
          <div class="close">
            <a href="#" v-on:click.prevent="onBackBtnClick"></a>
          </div>
          <transition name="fade">
            <loading v-show="isLoading"></loading>
          </transition>
          <transition name="fade">
            <div v-show="!isLoading" class="play">
              <div v-if="isQualityMid" class="mid">
                <a href="#" v-on:click.prevent="onPlayClick(false)"></a>
              </div>
              <div v-else class="high">
                <a class="off" href="#" v-on:click.prevent="onPlayClick(false)"></a>
                <a class="on" href="#" v-on:click.prevent="onPlayClick(true)"></a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Store from 'store';
import QualityMixin from '../../mixin/quality/';
import Canvas from './canvas/';
import Config from './canvas/config';
import Point from './canvas/point';
import Loading from '../../components/loading/index.vue';
import PointPost from '../../requests/PointPost';

export default {
  data() {
    return {
      canvas: null,
      isLoading: true,
      isModal: true,
    };
  },

  mounted() {
    if (this.isClose || this.isQualityLow) {
      this.$router.push('/');
      return;
    }

    const reinforcement = Store.get('reinforcement');
    Store.set('reinforcement', null);
    Config.init(Config.stages[this.$route.params.id], this.quality, reinforcement);

    const options = {
      width: Config.width,
      height: Config.height,
    };
    this.canvas = new Canvas(options);
    global.document.getElementById('canvas').appendChild(this.canvas.view);
    this.canvas.load(this.canvasLoaded);
  },

  methods: {
    canvasLoaded() {
      this.isLoading = false;
    },

    onBackBtnClick() {
      global.location.href = '/#/stage';
    },

    onPlayClick(isSound) {
      this.isModal = false;
      global.scrollTo(0, 0);
      this.canvas.play(this.onPlayComplete, isSound);
    },

    onPlayComplete() {
      const request = new PointPost(this.$route.params.id, Point.total);
      request.call((response) => {
        const data = response.data;
        data.detail = Point.toObject();
        Store.set('result', data);
        this.$router.push('/result');
      });
    },
  },

  destroyed() {
    if (this.canvas) {
      this.canvas.destroy();
      this.canvas = null;
    }
  },

  components: {
    loading: Loading,
  },

  mixins: [
    QualityMixin,
  ],
};
</script>
