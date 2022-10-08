import fly from '@/utils/request.js'
//账号
export const getMediaList = () => fly.get('/api/my/platforms')
