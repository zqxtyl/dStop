<!-- 账户列表 -->
<template>
  <view class="accountNumber">
    <view style="height: 100rpx;">
      <view style="padding-top: 28rpx;padding-left: 20rpx;">
        <p style='font-weight: 700;font-size: 30rpx;'>抖音账号</p>
      </view>
    </view>

    <view class="main">
      <view class="main-item">
        <view class="main-item-left">
        </view>
        <view class="main-item-right">
          <view style="margin-left: 22rpx;  font-size: 30rpx;font-weight: 700;">
            <p>账号名称</p>
          </view>
          <view style="display: flex;align-items: center;margin-left: 22rpx;margin-top: 8rpx;">
            <view style="display: flex;align-items: center;color: #888888;font-size: 25rpx;">
              <img style='width: 40rpx;height: 36rpx;' src="@/static/qt.png" alt="">
              <span style='margin-left: 8rpx;'>青铜等级</span>
            </view>
            <view style="margin-left: 250rpx;color: #888888;font-size: 25rpx;">
              <p>粉丝： 999</p>
            </view>
          </view>
        </view>
      </view>

      <view class="main-item">
        <view class="main-item-left">
        </view>
        <view class="main-item-right">
          <view style="margin-left: 22rpx; font-size: 30rpx;font-weight: 700;">
            <p>账号名称</p>
          </view>
          <view style="display: flex;align-items: center;margin-left: 22rpx;margin-top: 8rpx;">
            <view style="display: flex;align-items: center;color: #888888;font-size: 25rpx;">
              <img style='width: 40rpx;height: 36rpx;' src="@/static/by.png" alt="">
              <span style='margin-left: 8rpx;'>白银等级</span>
            </view>
            <view style="margin-left: 250rpx;color: #888888;font-size: 25rpx;">
              <p>粉丝： 999</p>
            </view>
          </view>
        </view>
      </view>

      <view class="main-item">
        <view class="main-item-left">
        </view>
        <view class="main-item-right">
          <view style="margin-left: 22rpx; font-size: 30rpx;font-weight: 700;">
            <p>账号名称</p>
          </view>
          <view style="display: flex;align-items: center;margin-left: 22rpx;margin-top: 8rpx;">
            <view style="display: flex;align-items: center;color: #888888;font-size: 25rpx;">
              <img style='width: 40rpx;height: 36rpx;' src="@/static/hj.png" alt="">
              <span style='margin-left: 8rpx;'>黄金等级</span>
            </view>
            <view style="margin-left: 250rpx;color: #888888;font-size: 25rpx;">
              <p>粉丝： 999</p>
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
        }
      }
    }

    .footer {
      margin-top: 100rpx;
    }

  }
</style>
