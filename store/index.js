import Vuex, {
  createLogger
} from 'vuex'
import Vue from 'vue'
import user from './modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    user
  }
})

export default store
