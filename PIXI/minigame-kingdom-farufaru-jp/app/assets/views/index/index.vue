<style lang="scss">
@import '../../sprites-html/index/sprite';
@import '../../css/variable';
@import '../../css/mixin';

.Index {
  .Fever {
    @include spriteWithCache($image-fever);
  }

  .Main {
    position: relative;
    background: url(/static/images/index/main.jpg#{$cacheVersion}) no-repeat top left;
    background-size: 750px 976px;
    height: 976px;

    .btn1 {
      @include holizontalCenter($btn1);
      top: 900px;

      a {
        @include spriteWithCache($btn1);
        display: block;
      }
    }
  }

  .PlayBtn {
    margin-bottom: 50px;

    .bg {
      @include spriteWithCache($bg1);
    }

    .fever {
      @include spriteWithCache($icon-fever);
      position: absolute;
      z-index: 1;
      margin-top: -100px;
      margin-left: -80px;
      pointer-events: none;
    }

    .btn1 {
      @include holizontalCenter($btn2);
      margin-top: -10px;

      a {
        @include spriteWithCache($btn2);
        display: block;
      }
    }

    .btn-close {
      @include holizontalCenter($image-btn-close);
      margin-top: -10px;

      a {
        @include spriteWithCache($image-btn-close);
        display: block;
        pointer-events: none;
      }
    }

    .btn-denial {
      @include holizontalCenter($image-btn-denial);
      margin-top: -10px;

      a {
        @include spriteWithCache($image-btn-denial);
        display: block;
        pointer-events: none;
      }
    }

    .text1 {
      @include spriteWithCache($text1);
      margin: 30px auto 0;
    }
  }

  .TotalPoint {
    @include spriteWithCache($bg-total-point);
    position: relative;
    margin: 0 auto 35px;

    .Numbers {
      position: absolute;
      top: 150px;
      right: 162px;
    }
  }

  .PresentsIcons {
    position: absolute;
    z-index: 1;

    .icon {
      @include spriteWithCache($icon-presents);
      position: absolute;
      left: -38px;
    }

    .icon-1 { top: 605px; }
    .icon-2 { top: 751px; }
    .icon-3 { top: 897px; }
    .icon-4 { top: 1040px; }
    .icon-5 { top: 1183px; }
    .icon-6 { top: 1328px; }
  }

  .Presents {
    width: 710px;
    height: 1764px;
    background: url(/static/images/index/presents.jpg#{$cacheVersion}) no-repeat top left;
    background-size: 710px 1764px;
    margin: 0 auto 45px;

    &-fever {
      background: url(/static/images/index/presents-after.jpg#{$cacheVersion}) no-repeat top left;
    }
  }

  .Store {
    @include spriteWithCache($bg-stores);
    display: block;
    margin: 0 auto 30px;
  }

  .Enviroments {
    @include spriteWithCache($image-enviroment);
    margin: 0 auto 45px;
  }

  .Links {
    margin-bottom: 35px;
    text-align: center;

    .policy {
      display: inline-block;
      margin-right: 40px;

      a {
        @include spriteWithCache($btn-privacy);
        display: block;
      }
    }

    .contact {
      display: inline-block;

      a {
        @include spriteWithCache($btn-contact);
        display: block;
      }
    }
  }

  .Sns {
    margin-bottom: 35px;
    text-align: center;

    a {
      display: inline-block;
      margin-right: 48px;

      &:last-child {
        margin-right: 0;
      }
    }

    .facebook {
      @include spriteWithCache($sns-facebook);
    }

    .twitter {
      @include spriteWithCache($sns-twitter);
    }

    .line {
      @include spriteWithCache($sns-line);
    }
  }

  .Footer {
    @include spriteWithCache($bg-footer);
    margin: 0 auto;
  }

  .Caution {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    .bg {
      position: absolute;
      width: 670px;
      height: 1038px;
      background: url(/static/images/index/caution.jpg#{$cacheVersion}) no-repeat top left;
      background-size: 670px 1038px;
      left: 50%;
      top: 100px;
      margin-left: -335px;
    }

    .close {
      @include spriteWithCache($btn-close-caution);
      display: block;
      margin: 860px auto 0;
    }
  }

  .Ad {
    position: fixed;
  }
}
</style>

<template>
  <div class="Index">
    <div class="Fever" v-if="isFever"></div>

    <div class="Main">
      <div class="btn1">
        <router-link to="/term"></router-link>
      </div>
    </div>
    <div class="PlayBtn">

      <div class="btn-close" v-if="isClose">
        <a href="#"></a>
      </div>
      <div class="btn-denial" v-else-if="isQualityLow">
        <a href="#"></a>
      </div>
      <div class="btn1" v-else>
        <div class="fever" v-if="isFever"></div>
        <router-link to="/stage"></router-link>
      </div>

      <div class="bg"></div>
      <div class="text1"></div>
    </div>

    <div class="TotalPoint">
      <numbers :value="total" :size="'l'"></numbers>
    </div>

    <div class="PresentsIcons">
      <div class="icon icon-1" v-if="presentRank >= 1"></div>
      <div class="icon icon-2" v-if="presentRank >= 2"></div>
      <div class="icon icon-3" v-if="presentRank >= 3"></div>
      <div class="icon icon-4" v-if="presentRank >= 4"></div>
      <div class="icon icon-5" v-if="presentRank >= 5"></div>
      <div class="icon icon-6" v-if="presentRank >= 6"></div>
    </div>

    <div class="Presents" :class="{'Presents-fever': isFever || isClose}"></div>

    <a class="Store" target="_blank" :href="appDounloadUrl"></a>

    <div class="Enviroments" v-if="isCautionFooter"></div>

    <div class="Links">
      <div class="policy">
        <a target="_blank" href="https://dena.com/jp/privacy/"></a>
      </div>

      <div class="contact">
        <a v-on:click.prevent="onContactClick"></a>
      </div>
    </div>

    <div class="Sns">
      <a target="_blank" :href="facebookShareUrl" class="facebook"></a>
      <a target="_blank" :href="twitterShareUrl" class="twitter"></a>
      <a target="_blank" :href="lineShareUrl" class="line"></a>
    </div>

    <div class="Footer">
    </div>

    <div class="Caution" v-show="isCaution" :style="{position: this.getVerticalY(1038) > 0 ? 'fixed' : 'absolute' }">
      <div class="bg" :style="{top: this.getVerticalY(1038) + 'px'}">
        <a class="close" v-on:click.prevent="onCautionCloseClick"></a>
      </div>
    </div>

    <ad :override-type="7" v-on:hide-complete="onAdHideComplete" v-if="isAdShow"></ad>
  </div>
</template>

<script>
import _ from 'lodash';
import Ad from '../../components/ad/index.vue';
import Numbers from '../../components/numbers/index.vue';
import PointsGet from '../../requests/PointsGet';

export default {
  data() {
    return {
      points: null,
      isCaution: false,
      isCautionFooter: false,
      isAdShow: false,
    };
  },

  computed: {
    total() {
      if (!this.points) {
        return 0;
      }

      let total = 0;
      _.each(this.points, (k) => {
        total += k.point;
      });

      // debug
      if (!this.isProduction) {
        const query = this.query;
        if (query.total && Number(query.total)) {
          total = Number(query.total);
        }
      }

      return total;
    },

    presentRank() {
      if (this.total < 10000000) {
        return 0;
      } else if (this.total < 20000000) {
        return 1;
      } else if (this.total < 30000000) {
        return 2;
      } else if (this.total < 40000000) {
        return 3;
      } else if (this.total < 50000000) {
        return 4;
      } else if (this.total < 6000000000) {
        return 5;
      } else if (this.total >= 6000000000) {
        if (this.isFever || this.isClose) {
          return 6;
        }

        return 5;
      }

      return 0;
    },
  },

  methods: {
    onCautionCloseClick() {
      this.isCaution = false;
    },

    onContactClick() {
      global.location.href = this.mailToUrl;
    },

    onAdHideComplete() {
      this.isAdShow = false;
    },
  },

  created() {
    if (this.isPC) {
      this.$router.push('/pc');
    }

    this.isCaution = !this.isClose && (this.isQualityMid || this.isQualityLow);
    this.isCautionFooter = this.isCaution;

    const request = new PointsGet();
    request.call((response) => {
      this.points = response.data;
      this.isAdShow = this.presentRank >= 5 && (this.isFever || this.isClose);
    });
  },

  components: {
    numbers: Numbers,
    ad: Ad,
  },
};
</script>
