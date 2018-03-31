<style lang="scss">
@import '../../sprites-html/stage/sprite';
@import '../../css/variable';
@import '../../css/mixin';

body {
  background: url(/static/images/stage/bg.jpg#{$cacheVersion}) no-repeat top center;
  background-size: 750px 1126px;
  background-color: black;
}

.Title {
  @include spriteWithCache($text-1);
  margin: 35px auto 35px;
}

.Btns {
  margin-bottom: 40px;

  ul {}

  li {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    position: relative;
    display: block;
    margin: 0 auto;
  }

  .Numbers {
    position: absolute;
    right: 234px;
    top: 142px;
  }

  &-2X3aJhew {
    a { @include spriteWithCache($btn-2X3aJhew); }
  }

  &-aJ2CDBqV {
    a { @include spriteWithCache($btn-aJ2CDBqV); }
  }

  &-eT7p6uF9 {
    a { @include spriteWithCache($btn-eT7p6uF9); }
  }

  &-W7wUbGj9 {
    a { @include spriteWithCache($btn-W7wUbGj9); }
  }

  &-X9yWwtYK {
    a {
      width: 710px;
      height: 250px;
      background: url(/static/images/stage/btn-X9yWwtYK.png#{$cacheVersion}) no-repeat top left;
      background-size: 710px 250px;
    }
  }

  &-lock {
    @include spriteWithCache($btn-lock);
    margin: 0 auto;
  }
}

.BtnTop {
  margin-bottom: 40px;

  a {
    @include spriteWithCache($btn-top);
    display: block;
    margin: 0 auto;
  }
}

.Reinforcement {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .bg {
    position: absolute;
    width: 670px;
    height: 1038px;
    background: url(/static/images/stage/reinforcements.jpg#{$cacheVersion}) no-repeat top left;
    background-size: 670px 1038px;
    left: 50%;
    top: 100px;
    margin-left: -335px;
  }

  .image {
    width: 576px;
    height: 396px;
    background-size: 576px, 396px;
    margin: 285px auto 25px;
  }

  .btn-active {
    @include spriteWithCache($btn-reinforcements);
    display: block;
    margin: 0 auto 10px;
  }

  .btn-disable {
    @include spriteWithCache($btn-reinforcements-disable);
    display: block;
    margin: 0 auto;
  }
}

.reinforcement-0 .image {
  background-image: url(/static/images/stage/reinforcements/0.png#{$cacheVersion});
}

.reinforcement-1 .image {
  background-image: url(/static/images/stage/reinforcements/1.png#{$cacheVersion});
}

.reinforcement-2 .image {
  background-image: url(/static/images/stage/reinforcements/2.png#{$cacheVersion});
}

.reinforcement-3 .image {
  background-image: url(/static/images/stage/reinforcements/3.png#{$cacheVersion});
}

</style>

<template>
  <div class="Stage">
    <div class="Title"></div>
    <div class="Btns">
      <ul>
        <li v-for="(stage, index) in stages" :class="'Btns-' + stage">
          <a v-on:click.prevent="onStageClick(stage)">
            <numbers v-if="!isPointLoading" :value="points[stage].max" :size="'s'"></numbers>
          </a>
        </li>
        <li v-if="stages.length < 5" class="Btns-lock"></li>
      </ul>
    </div>
    <div class="BtnTop">
      <router-link to="/"></router-link>
    </div>

    <transition name="fade">
      <div class="Reinforcement" v-show="isReinforcementModal" :class="'reinforcement-' + reinforcement">
        <div class="bg">
          <div class="image"></div>
          <a class="btn-active" v-on:click.prevent="onReinforcementClick(true)"></a>
          <a class="btn-disable" v-on:click.prevent="onReinforcementClick(false)"></a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import _ from 'lodash';
import Store from 'store';
import Numbers from '../../components/numbers/index.vue';
import PointsGet from '../../requests/PointsGet';

export default {
  data() {
    return {
      stages: global.config.stages,
      points: null,
      selectedStage: null,
      reinforcement: null,
      isReinforcementModal: false,
    };
  },

  computed: {
    isPointLoading() {
      return this.points === null;
    },
  },

  methods: {
    onStageClick(stage) {
      this.selectedStage = stage;

      let reinforcementsCount = Store.get('reinforcements-count');
      reinforcementsCount -= 1;
      if (reinforcementsCount <= 0) {
        this.resetReinforcementsCount();

        const reinforcements = Store.get('reinforcements');
        this.reinforcement = reinforcements.pop();

        if (!reinforcements.length) {
          this.resetReinforcements();
        } else {
          Store.set('reinforcements', reinforcements);
        }

        this.isReinforcementModal = true;
      } else {
        Store.set('reinforcements-count', reinforcementsCount);
        this.onReinforcementClick(false);
      }
    },

    onReinforcementClick(isActive) {
      if (isActive) {
        Store.set('reinforcement', this.reinforcement);
      } else {
        Store.set('reinforcement', null);
      }

      this.isReinforcementModal = false;
      this.$router.push(`/play/${this.selectedStage}`);
    },

    resetReinforcementsCount() {
      Store.set('reinforcements-count', _.random(3, 6));
    },

    resetReinforcements() {
      Store.set('reinforcements', _.shuffle(['0', '1', '2', '3']));
    },
  },

  created() {
    if (this.isClose || this.isQualityLow) {
      this.$router.push('/');
    }

    if (Store.get('reinforcements') === undefined) {
      this.resetReinforcements();
    }

    if (Store.get('reinforcements-count') === undefined) {
      this.resetReinforcementsCount();
    }

    const request = new PointsGet();
    request.call((response) => {
      this.points = response.data;
    });
  },

  components: {
    numbers: Numbers,
  },
};
</script>
