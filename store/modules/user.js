export default {
  namespaced: true,
  state: {
    userInfo: {},
    token: ''
  },
  mutations: {
    getUsrInfo(state, payload) {
      state.userInfo = payload
    },
    getToken(state, payload) {
      state.token = payload
    }
  },
  actions: {},
  getters: {

  }
}
