<!-- 账户列表 -->
<template>
  <view class="accountNumber">
    <view class="accountNumber-item">
      <view class="accountNumber-title-item">
        <view class="accountNumber-title-items">抖音账号</view>
      </view>
    </view>

    <view class="main">
      <view class="main-item">
        <view class="main-item-left">
        </view>
        <view class="main-item-right">
          <view class="main-item-right-box">
            <view>账号名称</view>
          </view>
          <view class="right-box-title">
            <view class="right-box-title-item">
              <image src="@/static/qt.png" alt="">
                <text>青铜等级</text>
            </view>
            <view class="box-title-item-right">
              <view>粉丝： 999</view>
            </view>
          </view>
        </view>
      </view>

      <view class="main-item">
        <view class="main-item-left">
        </view>
        <view class="main-item-right">
          <view class="main-item-right-box">
            <view>账号名称</view>
          </view>
          <view class="right-box-title">
            <view class="right-box-title-item">
              <image src="@/static/qt.png" alt="">
                <text>青铜等级</text>
            </view>
            <view class="box-title-item-right">
              <view>粉丝： 999</view>
            </view>
          </view>
        </view>
      </view>

      <view class="main-item">
        <view class="main-item-left">
        </view>
        <view class="main-item-right">
          <view class="main-item-right-box">
            <view>账号名称</view>
          </view>
          <view class="right-box-title">
            <view class="right-box-title-item">
              <image src="@/static/qt.png" alt="">
                <text>青铜等级</text>
            </view>
            <view class="box-title-item-right">
              <view>粉丝： 999</view>
            </view>
          </view>
        </view>
      </view>

    </view>

    <view class="footer">
      <button
        style="background-color: #F14031;width: 606rpx;height: 86rpx;border-radius: 43rpx;color: #fff;font-size: 33rpx;">新增账号</button>
    </view>
  </view>
</template>

<script>
  import {
    getMediaList
  } from '@/api/media.js'
  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      async getMediaList() {
        const
          data = await getMediaList()
        console.log(data)
      }
    },
    onLoad() {
      this.getMediaList()
    }
  }
</script>

<style lang="scss">
  .accountNumber {
    background-color: #F5F5F5;
    height: 1500rpx;

    .accountNumber-item {
      height: 100rpx;

      .accountNumber-title-item {
        padding-top: 28rpx;
        padding-left: 20rpx;

        .accountNumber-title-items {
          font-weight: 700;
          font-size: 30rpx;
        }
      }
    }

    .main {
      width: 710rpx;
      background-color: #fff;
      margin: 20rpx;
      border-radius: 10rpx;

      .main-item {
        padding-top: 29rpx;
        padding-left: 42rpx;
        display: flex;
        align-items: center;
        height: 160rpx;
        padding-bottom: 29rpx;

        .main-item-left {
          width: 94rpx;
          height: 94rpx;
          border-radius: 47rpx;
          background-color: #D8D8D8;

        }

        .main-item-right {
          margin-right: 22rpx;

          .main-item-right-box {
            margin-left: 22rpx;
            font-size: 30rpx;
            font-weight: 700;
          }

          .right-box-title {
            display: flex;
            align-items: center;
            margin-left: 22rpx;
            margin-top: 8rpx;

            .right-box-title-item {
              display: flex;
              align-items: center;
              color: #888888;
              font-size: 25rpx;

              image {
                width: 40rpx;
                height: 36rpx;
              }

              text {
                margin-left: 8rpx;
              }
            }

            .box-title-item-right {
              margin-left: 250rpx;
              color: #888888;
              font-size: 25rpx;
            }
          }
        }
      }
    }

    .footer {
      margin-top: 100rpx;
    }

  }
</style>
