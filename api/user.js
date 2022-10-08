import fly from '@/utils/request.js'
//发送验证码接口
export const getPhoneCode = data => fly.post('/api/auth/sms', data)

export const refreshToken = () => fly.get('/api/auth/refresh')
//手机+验证码登录&注册
export const goLogin = data => fly.post('/api/auth/login', data)
//手机+密码登录
export const pwdLogin = data => fly.post('/api/auth/login-pwd', data)
