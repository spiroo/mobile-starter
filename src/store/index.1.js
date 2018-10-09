import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  //定义状态
  state: {
    author: 'DK'
  },
  //计算属性
  getters: {

  },
  //修改状态事件，必须同步函数
  mutations: {
    newAuthor(state, msg) {
      state.author = msg;
    }
  },
  //提交 mutation，可以异步操作
  actions: {

  },
  //模块
  modules: {

  }
});

export default store;
