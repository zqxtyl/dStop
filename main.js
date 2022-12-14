import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from '@/store/index.js'
// main.js，注意要在use方法之后执行
// import uView from 'uview-ui'
// Vue.use(uView)
import './static/css/iconfont.css'
import uView from '@/uni_modules/uview-ui'
Vue.prototype.$store = store
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
