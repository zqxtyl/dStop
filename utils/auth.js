import Cookies from 'js-cookie'
// 获取时间错
const timeKey = 'timestamp-key'
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// 读取时间错
export function setTimeStamp(timestamp) {
  Cookies.set(timeKey, Date.now())
}
