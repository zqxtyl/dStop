import fly from '@/utils/request.js'
// 首页接口
export const getHome = () => fly.get('/api/home/index')
//商品详情接口
export const getGoodsDetail = (id) => fly.get(`/api/mc/product/detail`, id)
