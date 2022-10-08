<!-- 邀请达人 -->
<template>
  <view class="expert">
    <view class="title">
      <view class="title-box">
        <view class="title-item">
          <view>
            <view class="title-box-item">我的团队</view>
          </view>
          <view class="title-box-item-bottom">
            <view>100</view>
          </view>
        </view>
        <view class="title-right">
          <button @click="expertFn">邀请达人</button>
        </view>
      </view>

      <view class="title-line">
        <u-line length="680"></u-line>
      </view>

      <view class="title-bottom">
        <view class="title-bottom-item">
          <view>
            <view class="bottom-item">未激活</view>
          </view>
          <view>
            <view class="bottom-text">￥0.00</view>
          </view>
        </view>

        <view class="title-bottom-item">
          <view>
            <view class="bottom-item">激活达人</view>
          </view>
          <view>
            <view class="bottom-text">0</view>
          </view>
        </view>

        <view class="title-bottom-item">
          <view>
            <view class="bottom-item">累计红包</view>
          </view>
          <view>
            <view class="bottom-text">￥0.00</view>
          </view>
        </view>
      </view>

    </view>

    <view class="main">
      <view class="main-item">
        <view class="main-item-top">
          <view>
            <view class="main-title">订单统计</view>
          </view>

          <view class="main-item-top-left">
            <view>明细</view>
            <view class="iconfont icon-jiantouyou" style="font-size: 24rpx;color: #676767;">
            </view>
          </view>
        </view>

        <view class="main-item-bottom">
          <view>
            <view class="main-bottom">
              <view>100元</view>
            </view>
            <view class="main-bottom-item">
              <view>累计收益</view>
            </view>
          </view>

          <view>
            <view>
              <view class="main-bottom">100元</view>
            </view>
            <view>
              <view class="main-bottom-item">本月预估</view>
            </view>
          </view>

          <view>
            <view>
              <view class="main-bottom">10元</view>
            </view>
            <view>
              <view class="main-bottom-item">今日预估</view>
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
              <image style='width: 108rpx;height: 108rpx;' src="@/static/fx.png" alt="">
                <view style='color: #666666;font-size: 20rpx;margin-top: 10rpx;'>分享海报</view>
            </view>
            <view>
              <image style='width: 108rpx;height: 108rpx;' src="@/static/fxxcx.png" alt="">
                <view style='color: #666666;font-size: 20rpx;margin-top: 10rpx;'>分享小程序</view>
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
        show: false, //分享海报
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

      .title-box {
        display: flex;
        justify-content: space-between;
      }

      .title-line {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8rpx;
      }

      .title-item {
        padding: 20rpx;
        text-align: center;
        margin-top: 16rpx;
        margin-left: 24rpx;

        .title-box-item {
          font-size: 34rpx;
          font-weight: 700;
          font-family: PingFangSC-Medium, PingFang SC;
        }

        .title-box-item-bottom {
          margin-top: 15rpx;
          font-size: 34rpx;
          color: #676767;
        }
      }

      .title-right {
        padding: 20rpx;
        margin-top: 16rpx;
        margin-right: 20rpx;

        button {
          background-color: #D33D34;
          width: 212rpx;
          height: 64rpx;
          font-size: 28rpx;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .title-bottom {
        margin-top: 26rpx;
        padding: 0 40rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        .title-bottom-item {
          .bottom-item {
            font-size: 24rpx;
            color: #888888;
          }

          .bottom-text {
            font-size: 28rpx;
          }
        }
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

          .main-title {
            color: #000000;
            font-weight: 700;
            font-size: 30rpx;
          }
        }

        .main-item-top-left {
          display: flex;
          align-items: center;
          color: #676767;
          font-size: 24rpx;
        }

        .main-item-bottom {
          margin-top: 48rpx;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;

          .main-bottom {
            color: #D33D34;
            font-size: 28rpx;
            font-weight: 700;
          }

          .main-bottom-item {
            margin-top: 8rpx;
            color: #888888;
            font-size: 24rpx;
            font-weight: 400;
          }
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
