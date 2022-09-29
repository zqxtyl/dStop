<template>
  <view class="videoTask">
    <view class="navbar">
      <u-sticky bgColor="#fff">
        <u-tabs :current="current" @change="isChange" :list="list4" lineWidth="38rpx" lineHeight='4rpx'
          lineColor="#f56c6c" :activeStyle="{
              color: '#D33D34 ',
              fontWeight: '700',
              transform: 'scale(1.05)'
          }" :inactiveStyle="{
              color: '#676767',
              fontSize:'30rpx',
              transform: 'scale(1)'
          }" itemStyle="width:105rpx; height: 88rpx;">
        </u-tabs>
      </u-sticky>
    </view>
    <!-- ----------------------------- -->
    <view class="main">
      <view class="main-item">
        <view style="display: flex;">
          <view>
            <img style='width: 98rpx;height: 98rpx;' src="@/static/sp.png" alt="">
          </view>

          <view style="margin-left: 24rpx;">
            <view>
              <view>
                <view>
                  <p style='font-size: 22rpx;font-weight: 700;'>任务编号： sp18277192810</p>
                </view>

                <view>
                  <view style="display: flex;margin-top: 14rpx;">
                    <view
                      style="width: 96rpx;height: 30rpx;background-color: #D33D34 ;border-radius: 10rpx;font-size: 20rpx;text-align: center;color: #fff;">
                      <p>待上传</p>
                    </view>

                    <view
                      style="width: 108rpx; height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;text-align: center;color: #fff;margin-left: 20rpx;">
                      <p>￥5.28</p>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>

          <view>
            <view style="display: flex;align-items: center;margin-left: 80rpx;">
              <img style='width: 30rpx;height: 30rpx;' src="@/static/fuzhi.png" alt="">
              <p style='font-size: 24rpx;color: #676767;margin-left: 12rpx;'>商品链接</p>
            </view>

            <view style="margin-left: 20rpx;margin-top: 12rpx;">
              <p style='font-size: 22rpx;color: #969696 ;'>11-01 16:24:26 接单</p>
            </view>
          </view>
        </view>

        <view class="buttons">
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">复制视频</button>
          </view>
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">上传链接</button>
          </view>
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">取消任务</button>
          </view>
        </view>

        <view style="margin-top: 36rpx;display: flex;align-items: center;">
          <view style="background-color: #676767 ;width: 50rpx;height: 50rpx;border-radius: 25rpx;">

          </view>
          <view style="font-size: 24rpx; color: #676767;margin-left: 18rpx;font-weight: 700;">
            <p>账号名称</p>
          </view>
        </view>
      </view>
    </view>
    <!-- ----------------------------- -->
    <view class="main">
      <view class="main-item">
        <view style="display: flex;">
          <view>
            <img style='width: 98rpx;height: 98rpx;' src="@/static/sp.png" alt="">
          </view>

          <view style="margin-left: 24rpx;">
            <view>
              <view>
                <view>
                  <p style='font-size: 22rpx;font-weight: 700;'>任务编号： sp18277192810</p>
                </view>

                <view>
                  <view style="display: flex;margin-top: 14rpx;">
                    <view
                      style="width: 96rpx;height: 30rpx;background-color: #D33D34 ;border-radius: 10rpx;font-size: 20rpx;text-align: center;color: #fff;">
                      <p>待上传</p>
                    </view>

                    <view
                      style="width: 108rpx; height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;text-align: center;color: #fff;margin-left: 20rpx;">
                      <p>￥5.28</p>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>

          <view>
            <view style="display: flex;align-items: center;margin-left: 80rpx;">
              <img style='width: 30rpx;height: 30rpx;' src="@/static/fuzhi.png" alt="">
              <p style='font-size: 24rpx;color: #676767;margin-left: 12rpx;'>商品链接</p>
            </view>

            <view style="margin-left: 20rpx;margin-top: 12rpx;">
              <p style='font-size: 22rpx;color: #969696 ;'>11-01 16:24:26 接单</p>
            </view>
          </view>
        </view>

        <view class="buttons">
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">复制视频</button>
          </view>
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">上传链接</button>
          </view>
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">取消任务</button>
          </view>
        </view>

        <view style="margin-top: 36rpx;display: flex;align-items: center;">
          <view style="background-color: #676767 ;width: 50rpx;height: 50rpx;border-radius: 25rpx;">

          </view>
          <view style="font-size: 24rpx; color: #676767;margin-left: 18rpx;font-weight: 700;">
            <p>账号名称</p>
          </view>
        </view>
      </view>
    </view>
    <!-- ----------------------------- -->
    <view class="main">
      <view class="main-item">
        <view style="display: flex;">
          <view>
            <img style='width: 98rpx;height: 98rpx;' src="@/static/sp.png" alt="">
          </view>

          <view style="margin-left: 24rpx;">
            <view>
              <view>
                <view>
                  <p style='font-size: 22rpx;font-weight: 700;'>任务编号： sp18277192810</p>
                </view>

                <view>
                  <view style="display: flex;margin-top: 14rpx;">
                    <view
                      style="width: 96rpx;height: 30rpx;background-color: #D33D34 ;border-radius: 10rpx;font-size: 20rpx;text-align: center;color: #fff;">
                      <p>待上传</p>
                    </view>

                    <view
                      style="width: 108rpx; height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;text-align: center;color: #fff;margin-left: 20rpx;">
                      <p>￥5.28</p>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>

          <view>
            <view style="display: flex;align-items: center;margin-left: 80rpx;">
              <img style='width: 30rpx;height: 30rpx;' src="@/static/fuzhi.png" alt="">
              <p style='font-size: 24rpx;color: #676767;margin-left: 12rpx;'>商品链接</p>
            </view>

            <view style="margin-left: 20rpx;margin-top: 12rpx;">
              <p style='font-size: 22rpx;color: #969696 ;'>11-01 16:24:26 接单</p>
            </view>
          </view>
        </view>

        <view class="buttons" v-if="status">
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">复制视频</button>
          </view>
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">上传链接</button>
          </view>
          <view class="buttons-item">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">取消任务</button>
          </view>
        </view>

        <!-- 重新上传 -->
        <view style="margin-top: 18rpx;" v-else>
          <view style="color: #D33D34 ;font-size: 22rpx;">
            <p>原因：上传视频账号错误</p>
          </view>

          <view style="width: 170rpx;height: 52rpx;margin-top: 10rpx;">
            <button style="font-size: 22rpx;color: #676767;background-color: #fff;">重新上传</button>
          </view>
        </view>
        <!-- 重新上传 -->

        <view style="margin-top: 36rpx;display: flex;align-items: center;">
          <view style="background-color: #676767 ;width: 50rpx;height: 50rpx;border-radius: 25rpx;">

          </view>
          <view style="font-size: 24rpx; color: #676767;margin-left: 18rpx;font-weight: 700;">
            <p>账号名称</p>
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        list4: [{
            name: '待上传'
          },
          {
            name: '待审核',
          },
          {
            name: '未通过',
          },
          {
            name: '已通过'
          },
          {
            name: '已失效'
          }
        ],
        current: 0,
        status: false
      }
    },
    methods: {
      isChange(e) {
        this.current = e.index || e.id
      },
    },

    onLoad(options) {
      console.log(options)
      this.current = options.id
    },
  }
</script>

<style lang="scss">
  .videoTask {
    background-color: #F5F5F5;

    .main {
      margin: 20rpx;
      width: 710rpx;
      height: 316rpx;
      background-color: #fff;
      border-radius: 10rpx;

      .main-item {
        padding: 34rpx 22rpx 30rpx 36rpx;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 15rpx;

      .buttons-item {
        width: 170rpx;
        height: 52rpx;
      }
    }
  }
</style>
