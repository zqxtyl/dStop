import {
  setStorage,
  getStorage
} from '@/utils/location.js'

export default {
  namespaced: true,
  state: {
    userInfo: {},
    token: getStorage('TOKEN') || ''
  },
  mutations: {
    getUsrInfo(state, payload) {
      state.userInfo = payload
    },
    getToken(state, payload) {
      setStorage('TOKEN', payload)
    }
  },
  actions: {},
  getters: {

  }
}
