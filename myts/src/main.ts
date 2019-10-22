import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Router from 'vue-router';
import store from './store';
import elementUI from 'element-ui';
import '@/assets/scss/common.scss';
Vue.config.productionTip = false;
Vue.use(elementUI);
Vue.use(Router);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
