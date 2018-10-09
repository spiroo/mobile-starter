import { SET_AUTHOR_INFO } from '../types';

const state = {
  author: 'DK'
};

const getters = {
  // author: state => state.author 
};

const mutations = {
  [SET_AUTHOR_INFO] (state, msg) {
    state.author = msg;
  }
};

const actions = {
  changeAuthor({ commit }, name) {
    commit(SET_AUTHOR_INFO, name);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};