import Fly from 'flyio/dist/npm/wx'
import {
  getStorage,
  setStorage
} from '@/utils/location.js'
import {
  getTimeStamp
} from '@/utils/auth'
import {
  refreshToken
} from '@/api/user.js'
import store from '@/store/index.js'
const TimeOut = 3600 // 超时时间
var TOKEN = store.state.user.token
console.log(TOKEN)
var token = store.state.user.token
const fly = new Fly()
fly.config.baseURL = 'http://121.43.156.131'
//添加请求拦截器
fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  // if (token) {
  //   if (IsCheckTimeOut()) {
  //     refreshToken()
  //   }
  request.headers["Authorization"] = `Bearer ${token}`;
  // }

  //打印出请求体
  // console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {
    //只将请求结果的data字段返回
    const {
      code,
      data,
      msg
    } = response.data
    if (code == 401) {
      const data = refresh()
    }
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里

    return Promise.resolve("请求失败")
  }
)

function IsCheckTimeOut() {
  var currentTime = Date.now() // 当前时间挫
  var timeStamp = getTimeStamp()
  return (currentTime - timeStamp) / 1000 > TimeOut
}

// function refresh() {
//   uni.request({
//     url: 'http://121.43.156.131/api/auth/refresh',
//     success: (res) => {
//       console.log(res)
//     }
//   })
// }



export default fly
