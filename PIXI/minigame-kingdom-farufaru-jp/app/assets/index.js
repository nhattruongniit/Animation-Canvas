//-----------------------------
// library
//-----------------------------
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'babel-polyfill';
import 'number-to-locale-string';

//-----------------------------
// views
//-----------------------------
import Base from './views/base/index.vue';
import Index from './views/index/index.vue';
import Play from './views/play/index.vue';
import Stage from './views/stage/index.vue';
import Result from './views/result/index.vue';
import Term from './views/term/index.vue';
import Pc from './views/pc/index.vue';

//-----------------------------
// mixins
//-----------------------------
import ConfigMixin from './mixin/config/';
import QualityMixin from './mixin/quality/';
import LinksMixin from './mixin/links/';
import ModalMixin from './mixin/modal/';

// plugin
Vue.use(VueRouter);
Vue.mixin(ConfigMixin);
Vue.mixin(QualityMixin);
Vue.mixin(LinksMixin);
Vue.mixin(ModalMixin);

const router = new VueRouter({
  routes: [
    { path: '/', component: Index },
    { path: '/play/:id', component: Play },
    { path: '/stage', component: Stage },
    { path: '/result', component: Result },
    { path: '/term', component: Term },
    { path: '/Pc', component: Pc },
  ],
});

router.beforeEach((to, from, next) => {
  global.scrollTo(0, 0);
  next();
});

new Vue({
  router,
  render: createEle => createEle(Base),
}).$mount('#app');
