<template>
  <view>
    <view class="">
      <view class="">
      </view>
      <!--      <video src="https://yishijie1.oss-cn-beijing.aliyuncs.com/mp4/1.mp4"></video>
      <button @click="saveVideo">保存视频</button>
      <button @click="uploadVideo">保存视频</button> -->
      我的出单
    </view>
    <tarbar :current="1"></tarbar>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      saveVideo() {
        uni.downloadFile({
          url: 'https://yishijie1.oss-cn-beijing.aliyuncs.com/mp4/1.mp4',
          success: (res) => {
            const that = this
            if (res.statusCode === 200) {
              // 保存视频到手机相册
              uni.saveVideoToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function() {
                  // 成功提示
                  uni.showToast({
                    title: '保存成功',
                    icon: 'success'
                  })
                }
              })
            }

          }
        })
      },

      // 下载视频
      uploadVideo() {
        // 提醒用户下载中
        uni.showToast({
          title: "下载中",
          icon: "loading"
        })
        // 1 将远程文件下载到小程序的内存中
        uni.downloadFile({
          url: "https://yishijie1.oss-cn-beijing.aliyuncs.com/mp4/1.mp4",
          success: (res) => {
            // 2 成功下载后而且状态码为200时将视频保存到本地系统
            if (res.statusCode === 200) {
              uni.saveVideoToPhotosAlbum({
                filePath: res.tempFilePath
              })
              uni.hideLoading();
              // 提示用户下载成功
              uni.showToast({
                title: "下载成功",
                icon: "success"
              });
            }
            // 如果该资源不可下载或文件格式出错则提示用户
            else {
              uni.showToast({
                title: "资源格式错误，请联系管理员"
              });
            }
          },
          fail: (err) => {
            // 下载失败提醒
            uni.hideLoading();
            uni.showToast({
              title: "下载失败"
            })
          }
        })
      },
    },
    onLoad() {
      uni.hideTabBar()
    }
  }
</script>

<style lang="less">

</style>
