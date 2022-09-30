import Vuex, {
  createLogger
} from 'vuex'
import Vue from 'vue'
import user from './modules/user.js'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    user
  },
  // plugins: [createPersistedState()],
  // plugins: [createPersistedState({

  //   // 方法2：用paths,数组里面填模块名，存储指定模块
  //   paths: ['user']
  // })]

})

export default store
