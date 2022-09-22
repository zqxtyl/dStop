import fly from '@/utils/request.js'
export const getPhoneCode = data => fly.post('/api/auth/sms', data)

export const refreshToken = () => fly.get('/api/auth/refresh')

export const goLogin = data => fly.post('/api/auth/login', data)
