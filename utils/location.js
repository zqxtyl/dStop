export const setStorage = (key, value) => {
  return uni.setStorageSync(key, value)
}

export const getStorage = (key) => {
  return uni.getStorageSync(key)
}
