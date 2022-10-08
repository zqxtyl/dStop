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

const fly = new Fly()
fly.config.baseURL = 'http://121.43.156.131'
fly.config.timeout = 3000

var newFly = new Fly()
newFly.config = fly.config
var csrfToken = getStorage('TOKEN')
//添加请求拦截器
fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  if (!csrfToken) {
    console.log('没有token，先请求token。。。')
    fly.lock()
    return newFly.get('/api/auth/refresh').then((d) => {
      csrfToken = d.data.access_token
      request.headers["Authorization"] = `Bearer ${getStorage('TOKEN')}`
      console.log('token请求成功，值为：' + d.data.access_token)
      console.log(`继续完成请求:path:${request.url},baseURL:${request.baseURL}`)
      return request
    }).finally(() => fly.unlock())
  } else {
    request.headers["Authorization"] = `Bearer ${getStorage('TOKEN')}`;
  }
  // request.headers["Authorization"] = `Bearer ${getStorage('TOKEN')}`;
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
// let isFreshToken = false
// let casheRequests = []
fly.interceptors.response.use((response) => {
    //只将请求结果的data字段返回
    console.log("interceptors.response", response)

    const {
      data,
      status
    } = response
    if (data.code == 401) {
      console.log('token失效，重新请求token。。。')
      this.lock()
      return newFly.get('/api/auth/refresh').then((d) => {
        csrfToken = d.data.access_token
        setStorage('TOKEN', csrfToken)
        console.log('token已更新，值为：' + csrfToken)
      }).finally(() => this.unlock()).then(() => {
        console.log('重新请求')
        return fly.request(response.request)
      })
    } else {
      return response.data
    }
    // if (data.code == 401) {
    //   if (!isFreshToken) {
    //     isFreshToken = true
    //     let token = localStorage.getItem('TOKEN')
    //     console.log(666)
    //     fly.get('/api/auth/refresh').then(res => {
    //       console.log(res)
    //       localStorage.setItem('TOKEN', res.data.access_token)
    //     })
    //   }
    // }
    // return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    return Promise.resolve("请求失败")
  }
)






export default fly
