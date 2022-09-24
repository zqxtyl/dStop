import fly from '@/utils/request.js'
// export const refreshToken = () => fly.get('/api/auth/refresh')
export const getHome = () => fly.get('/api/home/index')

export const getGoodsDetail = () => fly.get('/api/mc/product/detail')
