// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import App from './App';
import router from './router';
import FastClick from 'fastclick';
import VueScroller from 'vue-scroller';
import 'babel-polyfill';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueScroller);

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
