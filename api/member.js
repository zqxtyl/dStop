import fly from '@/utils/request.js'

//达人特权详情
export const getMember = () => fly.get('/api/products/detail')
//抖音授权二维码
export const dyPic = () => fly.get('/api/douyin/qr-code')
