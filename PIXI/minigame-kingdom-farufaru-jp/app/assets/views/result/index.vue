<style lang="scss">
@import '../../sprites-html/result/sprite';
@import '../../css/variable';
@import '../../css/mixin';

body {
  background: url(/static/images/result/bg.jpg) no-repeat top center;
  background-size: 750px 1128px;
  background-color: black;
}

.Result {
  .Header {
    @include sprite($bg-header);
  }

  .Points {
    text-align: center;
    margin-bottom: 5px;

    .enemy {
      display: inline-block;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      .Numbers {
        position: absolute;
        margin-top: -28px;

        &-1 { margin-left: 52px; }
        &-2 { margin-left: 45px; }
        &-3 { margin-left: 30px; }
      }
    }

    .infantry {

      .image {
        @include sprite($image-infantry);
      }

      .Numbers {
        &-1 { margin-left: 56px; }
        &-2 { margin-left: 15px; }
        &-3 { margin-left: 8px; }
        &-5 { margin-left: -24px; }
      }
    }

    .sword {

      .image {
        @include sprite($image-sword);
      }
    }

    .spear {

      .image {
        @include sprite($image-spear);
      }
    }

    .bow {

      .image {
        @include sprite($image-bow);
      }
    }

    .boss {
      .text {
        position: absolute;
      }

      &-success {
        .text {
          @include sprite($text-boss-success);
          margin-top: -$text-boss-success-height + 20;
        }
      }

      &-fail {
        .text {
          @include sprite($text-boss-fail);
          margin-top: -$text-boss-fail-height + 5;
          margin-left: -10px;
        }
      }

      &-2X3aJhew {
        .image {
          width: 106px;
          height: 132px;
          background: url(/static/images/result/image-2X3aJhew.png) no-repeat top center;
          background-size: 106px 132px;
        }
      }

      &-aJ2CDBqV {
        .image {
          width: 108px;
          height: 134px;
          background: url(/static/images/result/image-aJ2CDBqV.png) no-repeat top center;
          background-size: 108px 134px;
        }
      }

      &-eT7p6uF9 {
        .image {
          width: 106px;
          height: 124px;
          background: url(/static/images/result/image-eT7p6uF9.png) no-repeat top center;
          background-size: 106px 124px;
        }
      }

      &-W7wUbGj9 {
        .image {
          width: 94px;
          height: 150px;
          background: url(/static/images/result/image-W7wUbGj9.png) no-repeat top center;
          background-size: 94px 150px;
        }
      }

      &-X9yWwtYK {
        .image {
          width: 128px;
          height: 122px;
          background: url(/static/images/result/image-X9yWwtYK.png) no-repeat top center;
          background-size: 128px 122px;
        }
      }
    }
  }

  .PointTotal {
    @include sprite($bg-point);
    margin: 0 auto 2px;
    text-align: right;

    .Numbers {
      display: inline-block;
      margin-top: 8px;
      margin-right: 78px;
    }
  }

  .PointHigh {
    @include sprite($bg-point-high);
    margin: 0 auto 8px;
    text-align: right;

    .Numbers {
      display: inline-block;
      margin-top: 8px;
      margin-right: 78px;
    }
  }

  .PointText {
    @include sprite($text-1);
    margin: 0 auto;
  }

  .Rank {
    text-align: center;
    margin-bottom: 5px;
  }

  .SnsText {
    @include sprite($text-2);
    margin: 0 auto;
  }

  .Sns {

    .twitter {
      display: inline-block;

      a {
        @include sprite($btn-twitter);
        display: block;
      }
    }

    .line {
      display: inline-block;

      a {
        @include sprite($btn-line);
        display: block;
      }
    }

    .wall {
      display: inline-block;

      a {
        @include sprite($btn-wall-disable);
        display: block;
        pointer-events: none;
      }
    }

    .unlock a {
      @include sprite($btn-wall);
      pointer-events: auto;
    }
  }

  .Footer {
    @include sprite($bg-footer);
    text-align: center;

    .inner {
      padding-top: 30px;
    }

    .top {
      display: inline-block;

      a {
        @include sprite($btn-top);
        display: block;
      }
    }

    .replay {
      display: inline-block;

      a {
        @include sprite($btn-replay);
        display: block;
      }
    }

    .stage {
      display: inline-block;

      a {
        @include sprite($btn-stage);
        display: block;
      }
    }
  }
}
</style>

<template>
  <div class="Result">
    <div v-if="result">
      <div class="Header"></div>

      <div class="Points">
        <div class="enemy infantry">
          <div class="image"></div>
          <numbers :value="infantryNum" :size="'s'"><span class="num-x"></span></numbers>
        </div>

        <div class="enemy sword">
          <div class="image"></div>
          <numbers :value="swordNum" :size="'s'"><span class="num-x"></span></numbers>
        </div>

        <div class="enemy spear">
          <div class="image"></div>
          <numbers :value="spearNum" :size="'s'"><span class="num-x"></span></numbers>
        </div>

        <div class="enemy bow">
          <div class="image"></div>
          <numbers :value="bowNum" :size="'s'"><span class="num-x"></span></numbers>
        </div>

        <div class="enemy boss" v-bind:class="['boss-' + stage, isBoss ? 'boss-success' : 'boss-fail']">
          <div class="image"></div>
          <div class="text"></div>
        </div>
      </div>

      <div class="PointTotal">
        <numbers :value="point" :size="'l'"></numbers>
      </div>

      <div class="PointHigh">
        <numbers :value="max" :size="'s'"></numbers>
      </div>

      <div class="PointText">
      </div>

      <div class="Rank">
        <img :src="rankImageUrl" height="330" />
      </div>

      <div class="SnsText">
      </div>

      <div class="Sns">
        <div class="twitter">
          <a target="_blank" :href="twitterShareUrl" v-on:click="onSnsClick"></a>
        </div>

        <div class="line">
          <a target="_blank" :href="lineShareUrl" v-on:click="onSnsClick"></a>
        </div>

        <div class="wall" :class="{ unlock: isUnlock }">
          <a target="_blank" :href="wallUrl"></a>
        </div>
      </div>

      <div class="Footer">
        <div class="inner">
          <div class="top">
            <a href="/"></a>
          </div>

          <div class="replay">
            <router-link :to="'/play/' + stage"></router-link>
          </div>

          <div class="stage">
            <router-link to="/stage"></router-link>
          </div>
        </div>
      </div>

      <ad v-on:hide-complete="onAdHideComplete" v-if="isAdShow"></ad>
    </div>
  </div>
</template>

<script>
import Store from 'store';
import Numbers from '../../components/numbers/index.vue';
import Ad from '../../components/ad/index.vue';

export default {
  data() {
    return {
      result: null,
      isAdShow: true,
      isUnlock: false,
      walls: [
        'J9szVUf6',
        'Nq4t2Cin',
        'u5HtENdB',
      ],
    };
  },

  computed: {
    stage() {
      return this.result.point.stage_id;
    },

    debugPoint() {
      let point = null;

      // debug
      if (!this.isProduction) {
        const query = this.query;
        if (query.point && Number(query.point)) {
          point = Number(query.point);
        }
      }

      return point;
    },

    point() {
      let point = this.result.point.point;

      // debug
      if (this.debugPoint) {
        point = this.debugPoint;
      }

      return point;
    },

    infantryNum() {
      return this.result.detail.infantry;
    },

    swordNum() {
      return this.result.detail.sword;
    },

    spearNum() {
      return this.result.detail.spear;
    },

    bowNum() {
      return this.result.detail.bow;
    },

    max() {
      return this.result.points[this.stage].max;
    },

    isBoss() {
      return this.result.detail.boss > 0;
    },

    shareUrl() {
      return `${this.url}?id=${this.result.point.id}`;
    },

    twitterShareUrl() {
      return this.getShareTwitterUrl(`${this.shareUrl}&utm_campaign=faru&utm_medium=social&utm_source=twr`, '【やってみた】ファルファル走の結果');
    },

    lineShareUrl() {
      return this.getShareLineUrl(`【やってみた】ファルファル走の結果 ${this.shareUrl}&utm_campaign=faru&utm_medium=social&utm_source=lir&openExternalBrowser=1`);
    },

    wallUrl() {
      let id = Store.get('wall');
      if (id === undefined) {
        id = 0;
      }

      const url = this.isUnlock ? `/static/images/wall/${this.walls[id]}.png` : '#';

      id += 1;
      if (id >= this.walls.length) {
        id = 0;
      }
      Store.set('wall', id);

      return url;
    },

    rankImageUrl() {
      let rank = this.result.point.rank;

      // 注意: 本当はサーバでランク付けをおこなっているので、サーバの設定を変えると不整合が起きる
      if (this.debugPoint) {
        const point = this.debugPoint;
        switch (this.stage) {
          case '2X3aJhew':
            if (point < 5000) {
              rank = 0;
            } else if (point < 10000) {
              rank = 1;
            } else if (point < 20000) {
              rank = 2;
            } else if (point < 25000) {
              rank = 3;
            } else if (point < 32000) {
              rank = 4;
            } else {
              rank = 5;
            }
            break;
          case 'aJ2CDBqV':
            if (point < 10000) {
              rank = 0;
            } else if (point < 30000) {
              rank = 1;
            } else if (point < 50000) {
              rank = 2;
            } else if (point < 80000) {
              rank = 3;
            } else if (point < 120000) {
              rank = 4;
            } else {
              rank = 5;
            }
            break;
          case 'eT7p6uF9':
            if (point < 100000) {
              rank = 0;
            } else if (point < 130000) {
              rank = 1;
            } else if (point < 140000) {
              rank = 2;
            } else if (point < 150000) {
              rank = 3;
            } else if (point < 160000) {
              rank = 4;
            } else {
              rank = 5;
            }
            break;
          case 'W7wUbGj9':
            if (point < 100000) {
              rank = 0;
            } else if (point < 130000) {
              rank = 1;
            } else if (point < 160000) {
              rank = 2;
            } else if (point < 200000) {
              rank = 3;
            } else if (point < 260000) {
              rank = 4;
            } else {
              rank = 5;
            }
            break;

          case 'X9yWwtYK':
            if (point < 200000) {
              rank = 0;
            } else if (point < 300000) {
              rank = 1;
            } else if (point < 400000) {
              rank = 2;
            } else if (point < 450000) {
              rank = 3;
            } else if (point < 500000) {
              rank = 4;
            } else {
              rank = 5;
            }
            break;
          default:
            break;
        }
      }

      return `/static/images/og/${this.stage}/${rank}.png`;
    },
  },

  created() {
    if (this.isClose || this.isQualityLow) {
      this.$router.push('/');
      return;
    }

    this.result = Store.get('result');
    if (!this.result) {
      this.$router.push('/');
    }
  },

  methods: {
    onAdHideComplete() {
      this.isAdShow = false;
    },

    onSnsClick() {
      this.isUnlock = true;
    },
  },

  components: {
    numbers: Numbers,
    ad: Ad,
  },
};
</script>
