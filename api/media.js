import fly from '@/utils/request.js'

export const getMediaList = () => fly.get('/api/my/platforms')
