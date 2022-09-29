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
})

export default store
