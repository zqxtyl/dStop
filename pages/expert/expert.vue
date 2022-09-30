<template>
  <view class="expert">
    <view class="title">
      <view style="display: flex;justify-content: space-between;">
        <view class="title-item">
          <view>
            <p style='font-size: 34rpx;font-weight: 700;font-family: PingFangSC-Medium, PingFang SC;'>我的团队</p>
          </view>
          <view style="margin-top: 15rpx;">
            <p style='font-size: 34rpx;color: #676767;'>100</p>
          </view>
        </view>
        <view class="title-right">
          <button
            style="background-color: #D33D34 ;width: 212rpx;height: 64rpx;font-size: 28rpx;color: #fff;display: flex;justify-content: center;align-items: center;"
            @click="expertFn">邀请达人</button>
        </view>
      </view>

      <view style="display: flex;justify-content: center;align-items: center;margin-top: 8rpx;">
        <u-line length="680"></u-line>
      </view>

      <view class="title-bottom">
        <view class="title-bottom-item">
          <view>
            <p style='font-size: 24rpx;color: #888888 ;'>未激活</p>
          </view>
          <view>
            <p style='font-size: 28rpx;'>￥0.00</p>
          </view>
        </view>

        <view class="title-bottom-item">
          <view>
            <p style='font-size: 24rpx;color: #888888 ;'>激活达人</p>
          </view>
          <view>
            <p style='font-size: 28rpx;'>0</p>
          </view>
        </view>

        <view class="title-bottom-item">
          <view>
            <p style='font-size: 24rpx;color: #888888 ;'>累计红包</p>
          </view>
          <view>
            <p style='font-size: 28rpx;'>￥0.00</p>
          </view>
        </view>
      </view>

    </view>

    <view class="main">
      <view class="main-item">
        <view class="main-item-top">
          <view class="">
            <p style='color: #000000;font-weight: 700;font-size: 30rpx;'>订单统计</p>
          </view>

          <view style="display: flex;align-items: center;">
            <p style='color: #676767;font-size: 24rpx;'>明细</p>
            <view class="iconfont icon-jiantouyou" style="font-size: 24rpx;color: #676767;">
            </view>
          </view>
        </view>

        <view class="main-item-bottom">
          <view>
            <view>
              <p style='color: #D33D34;font-size: 28rpx;font-weight: 700;'>100元</p>
            </view>
            <view style="margin-top: 8rpx;">
              <p style='color: #888888;font-size: 24rpx;font-weight: 400;'>累计收益</p>
            </view>
          </view>

          <view>
            <view>
              <p style='color: #D33D34;font-size: 28rpx;font-weight: 700;'>100元</p>
            </view>
            <view style="margin-top: 8rpx;">
              <p style='color: #888888;font-size: 24rpx;'>本月预估</p>
            </view>
          </view>

          <view>
            <view>
              <p style='color: #D33D34;font-size: 28rpx;font-weight: 700;'>10元</p>
            </view>
            <view style="margin-top: 8rpx;">
              <p style='color: #888888;font-size: 24rpx;'>今日预估</p>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="footer">

    </view>

    <!-- 弹层 -->
    <view>
      <u-popup :show="show" mode="bottom" @close="close" @open="open" round="10">
        <view style="width: 750rpx;height: 250rpx;background-color: #EBEBEB ;
border-radius: 24rpx 24rpx 0rpx 0rpx;">
          <view style="display: flex;justify-content: space-around;margin-top: 56rpx;text-align: center;">
            <view>
              <img style='width: 108rpx;height: 108rpx;' src="@/static/fx.png" alt="">
              <p style='color: #666666;font-size: 20rpx;margin-top: 10rpx;'>分享海报</p>
            </view>
            <view>
              <img style='width: 108rpx;height: 108rpx;' src="@/static/fxxcx.png" alt="">
              <p style='color: #666666;font-size: 20rpx;margin-top: 10rpx;'>分享小程序</p>
            </view>
          </view>
        </view>
      </u-popup>
    </view>
    <!-- 弹层 -->
    <tarbar :current="2"></tarbar>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      };
    },
    methods: {
      expertFn() {
        this.show = true
      },
      open() {
        // console.log('open');
      },
      close() {
        this.show = false
        // console.log('close');
      }
    },
    onLoad() {
      uni.hideTabBar()
    }
  }
</script>

<style lang="scss">
  .expert {
    background-color: #F5F5F5;
    padding: 20rpx;
    height: 1400rpx;

    .title {
      width: 710rpx;
      height: 304rpx;
      background-color: #fff;
      // margin: 20rpx;
      border-radius: 10rpx;

      .title-item {
        padding: 20rpx;
        text-align: center;
        margin-top: 16rpx;
        margin-left: 24rpx;
      }

      .title-right {
        padding: 20rpx;
        margin-top: 16rpx;
        margin-right: 20rpx;
      }

      .title-bottom {
        margin-top: 26rpx;
        padding: 0 40rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        .title-bottom-item {}
      }
    }

    .main {
      width: 710rpx;
      height: 256rpx;
      background-color: #fff;
      margin-top: 20rpx;
      border-radius: 10rpx;

      .main-item {
        padding: 40rpx;

        .main-item-top {
          display: flex;
          justify-content: space-between;
        }

        .main-item-bottom {
          margin-top: 48rpx;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
        }
      }
    }

    .footer {
      background-color: #D8D8D8;
      width: 710rpx;
      height: 614rpx;
      margin-top: 20rpx;
      border-radius: 10rpx;
    }
  }
</style>
