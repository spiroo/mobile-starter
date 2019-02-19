import { getToken, setToken, removeToken } from '@/utils/auth';
import api from '@/api/user';

const user = {
  state: {
    token: getToken(),
    name: 'DK',
    userList: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_USER_LIST(state, list) {
      state.userList = list;
    }
  },

  actions: {
    // 登录
    async Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        api
          .login(userInfo)
          .then(res => {
            if (res.code === 200) {
              setToken(res.data);
              commit('SET_TOKEN', res.data);
            }
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    // 获取用户信息
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .getUserInfo()
          .then(res => {
            if (res.code === 200) {
              commit('SET_NAME', res.data.name);
            }
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    //
    // // 登出
    // LogOut ({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },
    async getUsers({ commit }) {
      const response = await api.fetchList().then(res => res);
      console.log('getUsers = ', response);
      commit('SET_USER_LIST', response);

      return Promise.resolve(response);
    }
  }
};

export default user;
