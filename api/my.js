import fly from '@/utils/request.js'

export const officialService = () => fly.get('/api/assistant/index')
