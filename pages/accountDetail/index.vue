<!-- 账号详情 -->
<template>
  <view class="account-detail">
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
          }" itemStyle="width:200rpx; height: 88rpx;">
        </u-tabs>
      </u-sticky>
    </view>

    <view class="main">
      <view class="main-item">
        <view>
          <view>
            <p style='font-size: 28rpx;font-weight: 700;'>下级订单奖励</p>
          </view>
          <view style="font-size: 22rpx;margin-top: 20rpx;color: #B9B9B9;">
            <p>2022-11-01 16:24:26</p>
          </view>
        </view>
        <view style="margin-right: 90rpx;color: #2BC155;text-align: center;">
          <p>+0.2</p>
        </view>
      </view>

      <view class="main-item">
        <view>
          <view>
            <p style='font-size: 28rpx;font-weight: 700;'>微信提现</p>
          </view>
          <view style="font-size: 22rpx;margin-top: 20rpx;color: #B9B9B9;">
            <p>2022-11-01 16:24:26</p>
          </view>
        </view>
        <view style="margin-right: 90rpx;color: #D33D34 ;text-align: center;">
          <view>
            <p>-20</p>
          </view>
          <view>
            <p style='font-size: 22rpx;color: #B9B9B9;margin-top: 18rpx;'>待通过</p>
          </view>
        </view>
      </view>

      <view class="main-item">
        <view>
          <view>
            <p style='font-size: 28rpx;font-weight: 700;'>微信提现</p>
          </view>
          <view style="font-size: 22rpx;margin-top: 20rpx;color: #B9B9B9;">
            <p>2022-11-01 16:24:26</p>
          </view>
        </view>
        <view style="margin-right: 90rpx;color: #D33D34 ;text-align: center;">
          <view>
            <p>-20</p>
          </view>
          <view>
            <p style='font-size: 22rpx;color: #B9B9B9;margin-top: 18rpx;'>通过</p>
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
          name: '关注'
        }, {
          name: '推荐',
        }, {
          name: '电影',
        }],
        current: 0
      }
    },
    methods: {
      isChange(e) {
        this.current = e.index
      }
    }
  }
</script>

<style lang="scss">
  .account-detail {
    background-color: #F5F5F5;
    height: 1500rpx;

    .main {
      margin: 20rpx;
      background-color: #fff;
      border-radius: 10rpx;

      .main-item {
        width: 710rpx;
        height: 100rpx;
        padding: 34rpx 44rpx;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
