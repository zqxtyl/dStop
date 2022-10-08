import fly from '@/utils/request.js'
//客服二维码图片
export const officialService = () => fly.get('/api/assistant/index')
